import { Upload, X, ChevronDown, Lightbulb } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { brokenConditionLabels, categoryLabels, conditionLabels, type DepositRecord, type ItemCategory } from '../types';
import { currentUser } from '../mock-data';
import { useDeposits } from '../hooks/useDeposits';

export default function CreateListing() {
  const navigate = useNavigate();
  const [submissionMode, setSubmissionMode] = useState<'donation' | 'broken'>('donation');
  const { addDeposit } = useDeposits();
  const [formData, setFormData] = useState({
    title: '',
    category: '' as ItemCategory | '',
    condition: '',
    description: '',
    quantity: 1,
    location: '',
    uf: currentUser.uf,
    service: currentUser.service,
    dimensions: '',
    contact: currentUser.email,
  });

  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [tipsOpen, setTipsOpen] = useState(false);
  const mobileFooterSentinelRef = useRef<HTMLDivElement | null>(null);
  const [hideMobileActionBar, setHideMobileActionBar] = useState(false);

  useEffect(() => {
    const sentinel = mobileFooterSentinelRef.current;

    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideMobileActionBar(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -12px 0px' },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) {
      return;
    }

    const nextPhotos = await Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(file);
          }),
      ),
    );

    setPhotoPreviews((currentPhotos) => [...currentPhotos, ...nextPhotos].slice(0, 6));
    e.target.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const depositRecord: DepositRecord = {
      id: `deposit-${Date.now()}`,
      userId: currentUser.id,
      mode: submissionMode,
      title: formData.title,
      category: formData.category as ItemCategory,
      condition: formData.condition,
      description: formData.description,
      quantity: formData.quantity,
      location: formData.location,
      uf: formData.uf,
      service: formData.service,
      contact: formData.contact,
      dimensions: formData.dimensions || undefined,
      photos: photoPreviews,
      photo: photoPreviews[0] ?? null,
      createdAt: new Date().toISOString(),
    };

    addDeposit(depositRecord);
    console.log(submissionMode === 'donation' ? 'Listing created:' : 'Broken item declared:', formData);
    alert(
      submissionMode === 'donation'
        ? 'Votre annonce a été publiée avec succès !'
        : 'Votre déclaration de matériel cassé a bien été transmise à la procédure de casse. Elle n’apparaîtra pas dans la liste des annonces.'
    );
    navigate('/my-space');
  };

  const isFormValid = formData.title && formData.category && formData.condition &&
    formData.description && formData.location && photoPreviews.length > 0;

  // ── Shared form fields ──────────────────────────────────────────────
  const formFields = (
    <form id="create-form" onSubmit={handleSubmit} className="space-y-6">
      {/* Photo upload */}
      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          Photos *
        </label>
        {photoPreviews.length === 0 ? (
          <label className="block">
            <div className="bg-white border-2 border-dashed border-[#E5E5E4] rounded-xl p-10 text-center cursor-pointer hover:border-[#3B82F6] hover:bg-[#F4F4F5] transition-colors">
              <Upload className="size-8 text-[#71717A] mx-auto mb-3" />
              <div className="text-sm font-medium text-[#0F172A] mb-1">
                Cliquez pour ajouter une ou plusieurs photos
              </div>
              <div className="text-xs text-[#71717A]">PNG, JPG jusqu'à 10 Mo, 6 photos max</div>
            </div>
            <input type="file" accept="image/*" multiple onChange={handlePhotoUpload} className="hidden" />
          </label>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {photoPreviews.map((photo, index) => (
                <div key={`${photo}-${index}`} className="relative overflow-hidden rounded-xl border border-[#E5E5E4] bg-white">
                  <img src={photo} alt={`Aperçu ${index + 1}`} className="aspect-[4/3] w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setPhotoPreviews((currentPhotos) => currentPhotos.filter((_, photoIndex) => photoIndex !== index))}
                    className="absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-lg bg-white/95 hover:bg-[#F4F4F5] transition-colors"
                    aria-label={`Retirer la photo ${index + 1}`}
                  >
                    <X className="size-4 text-[#71717A]" />
                  </button>
                  {index === 0 && (
                    <span className="absolute bottom-2 left-2 rounded-full bg-[#0F172A] px-2 py-1 text-[10px] font-medium text-white">
                      Couverture
                    </span>
                  )}
                </div>
              ))}

              {photoPreviews.length < 6 && (
                <label className="flex aspect-[4/3] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#E5E5E4] bg-white text-center transition-colors hover:border-[#3B82F6] hover:bg-[#F4F4F5]">
                  <Upload className="mb-2 size-5 text-[#71717A]" />
                  <span className="px-3 text-xs font-medium text-[#0F172A]">Ajouter des photos</span>
                  <input type="file" accept="image/*" multiple onChange={handlePhotoUpload} className="hidden" />
                </label>
              )}
            </div>
            <p className="text-xs text-[#71717A]">La première photo sera utilisée comme image principale de l’annonce.</p>
          </div>
        )}
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          {submissionMode === 'donation' ? 'Titre du matériel *' : 'Nom du matériel concerné *'}
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
          placeholder={submissionMode === 'donation' ? 'Ex : Bureau médical avec rangements' : 'Ex : Fauteuil de bureau cassé'}
        />
      </div>

      {/* Category and Condition */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-2">Catégorie *</label>
          <div className="relative">
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value as ItemCategory })}
              className="w-full px-4 pr-10 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white appearance-none"
            >
              <option value="">Sélectionner…</option>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#71717A]" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-2">État *</label>
          <div className="relative">
            <select
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="w-full px-4 pr-10 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white appearance-none"
            >
              <option value="">Sélectionner…</option>
              {Object.entries(submissionMode === 'donation' ? conditionLabels : brokenConditionLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#71717A]" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-2">
          {submissionMode === 'donation' ? 'Description *' : 'Description de la panne *'}
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={5}
          maxLength={500}
          className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
          placeholder={
            submissionMode === 'donation'
              ? 'Décrivez le matériel en détail : état, particularités, accessoires inclus…'
              : 'Décrivez le matériel, la panne constatée, et tout élément utile pour la procédure de casse…'
          }
        />
        <div className="text-xs text-[#71717A] mt-1">{formData.description.length} / 500 caractères</div>
      </div>

      {/* Quantity and Dimensions */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-2">Quantité *</label>
          <input
            type="number"
            min="1"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
            className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-2">Dimensions (optionnel)</label>
          <input
            type="text"
            value={formData.dimensions}
            onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
            className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
            placeholder="Ex : 150×80×75 cm"
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-2">Localisation *</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
          placeholder="Ex : Bâtiment C, 3ème étage"
        />
      </div>

      {/* UF and Service */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-2">UF *</label>
          <input
            type="text"
            value={formData.uf}
            onChange={(e) => setFormData({ ...formData, uf: e.target.value })}
            className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-2">Service *</label>
          <input
            type="text"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
          />
        </div>
      </div>

      {/* Contact */}
      <div>
        <label className="block text-sm font-medium text-[#0F172A] mb-2">Contact *</label>
        <input
          type="text"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="w-full px-4 py-2.5 border border-[#E5E5E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent bg-white"
          placeholder="Email et/ou numéro de poste"
        />
      </div>

      {/* Desktop submit buttons — hidden on mobile (fixed bar instead) */}
      <div className="hidden sm:flex gap-3 pt-4">
        <Link
          to="/"
          className="flex-1 px-6 py-3 border border-[#E5E5E4] text-[#0F172A] rounded-lg font-medium hover:bg-[#F4F4F5] transition-colors text-center"
        >
          Annuler
        </Link>
        <button
          type="submit"
          disabled={!isFormValid}
          className="flex-1 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#2563EB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submissionMode === 'donation' ? "Publier l'annonce" : 'Déclarer pour la casse'}
        </button>
      </div>
    </form>
  );

  const tips = submissionMode === 'donation'
    ? [
        'Ajoutez une photo claire et bien cadrée du matériel',
        'Soyez précis dans votre description (état, accessoires, particularités)',
        'Indiquez les dimensions si c\'est du mobilier',
        'Précisez la localisation exacte pour faciliter la récupération',
        'Laissez vos coordonnées complètes pour être facilement joignable',
      ]
    : [
        'Ajoutez une photo nette du matériel endommagé',
        'Décrivez précisément la panne ou la casse constatée',
        'Mentionnez les risques éventuels ou pièces manquantes',
        'Indiquez la localisation exacte pour organiser la suite de la procédure',
        'Laissez un contact direct si une vérification sur place est nécessaire',
      ];

  const workflowSteps = submissionMode === 'donation'
    ? [
        { n: 1, color: '#3B82F6', title: 'Publication', sub: 'Votre annonce est visible immédiatement' },
        { n: 2, color: '#3B82F6', title: 'Demande de transfert', sub: 'Un agent demande le bien' },
        { n: 3, color: '#3B82F6', title: 'Validation achat', sub: 'Vérification de l\'amortissement' },
        { n: 4, color: '#10B981', title: 'Transfert', sub: 'Le matériel change de service' },
      ]
    : [
        { n: 1, color: '#F59E0B', title: 'Déclaration', sub: 'Le matériel cassé est signalé via ce formulaire' },
        { n: 2, color: '#F59E0B', title: 'Qualification', sub: 'Le besoin de casse est vérifié par la procédure dédiée' },
        { n: 3, color: '#EF4444', title: 'Sortie du parc', sub: 'Le matériel n’est pas publié dans les annonces' },
        { n: 4, color: '#64748B', title: 'Traitement', sub: 'La mise au rebut suit le circuit interne adapté' },
      ];

  const renderTipsSections = (compact = false) => (
    <>
      <section className={compact ? '' : 'bg-white border border-[#E5E5E4] rounded-2xl p-6 sm:p-8'}>
        <h3 className="mb-4 text-lg font-semibold text-[#0F172A] sm:text-xl">
          {submissionMode === 'donation' ? 'Conseils pour votre dépôt' : 'Conseils pour la déclaration de casse'}
        </h3>
        <ul className="space-y-3 text-sm text-[#52525B]">
          {tips.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-bold text-[#3B82F6]">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={compact ? 'mt-6 border-t border-[#E5E5E4] pt-6' : 'mt-4 rounded-2xl border border-[#E5E5E4] bg-white p-6 sm:mt-6 sm:p-8'}>
        <h3 className="mb-4 text-base font-semibold text-[#0F172A] sm:text-lg">
          {submissionMode === 'donation' ? 'Workflow de validation' : 'Workflow de mise au rebut'}
        </h3>
        <div className="space-y-4">
          {workflowSteps.map(({ n, color, title, sub }) => (
            <div key={n} className="flex gap-3">
              <div
                className="flex size-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: color }}
              >
                {n}
              </div>
              <div>
                <div className="font-medium text-[#0F172A]">{title}</div>
                <div className="text-sm text-[#71717A]">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return (
    <>
      <div className="max-w-[1040px] mx-auto px-4 sm:px-8 pt-24 sm:pt-32 pb-28 sm:pb-12">

        <div className="mb-6 sm:mb-8">
          <h1
            className="font-semibold text-[#0F172A] leading-[1.2] mb-2 sm:mb-3"
            style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 400, fontSize: 'clamp(26px, 4.4vw, 40px)' }}
          >
            {submissionMode === 'donation' ? 'Déposez votre matériel' : 'Déclarez un matériel cassé'}
          </h1>
          <p className="text-[#71717A]" style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>
            {submissionMode === 'donation'
              ? "Publiez du matériel ou mobilier que votre service n'utilise plus"
              : 'Signalez un matériel hors service pour déclencher la procédure de casse'}
          </p>
        </div>

        <div className="mb-6 flex justify-center sm:mb-8 sm:block">
          <div className="inline-flex items-center gap-2 rounded-[18px] border border-[#E5E5E4] bg-white p-[8px]">
            <button
              type="button"
              onClick={() => setSubmissionMode('donation')}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all ${
                submissionMode === 'donation'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-[#0F172A] hover:bg-[#F4F4F5]'
              }`}
            >
              Donner le matériel
            </button>
            <button
              type="button"
              onClick={() => setSubmissionMode('broken')}
              className={`px-5 py-2 rounded-[10px] text-[14px] font-medium transition-all ${
                submissionMode === 'broken'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-[#0F172A] hover:bg-[#F4F4F5]'
              }`}
            >
              Matériel cassé
            </button>
          </div>
        </div>

        {/* ── Mobile collapsible tips ── */}
        <div className="sm:hidden mb-6">
          <div className="overflow-hidden rounded-2xl border-2 border-[#BFDBFE] bg-[#EFF6FF]">
            <button
              type="button"
              onClick={() => setTipsOpen(v => !v)}
              className={`flex w-full items-center justify-between px-4 py-3.5 text-[#1E3A8A] transition-all ${
                tipsOpen ? 'border-b border-[#BFDBFE]' : 'hover:bg-[#E6F0FF]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Lightbulb className="size-4 text-[#3B82F6]" />
                <span className="text-sm font-semibold text-[#1E3A8A]">Conseils</span>
              </div>
              <ChevronDown
                className="size-4 text-[#71717A] transition-transform duration-200"
                style={{ transform: tipsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {tipsOpen && (
              <div className="bg-white p-6">
                {renderTipsSections(true)}
              </div>
            )}
          </div>
        </div>

        {/* ── Desktop 12-col layout — hidden on mobile ── */}
        <div className="hidden sm:grid grid-cols-12 gap-12">
          <div className="col-span-7">
            {formFields}
          </div>
          <div className="col-span-5">
            <div className="sticky top-[calc(var(--sticky-header-offset-desktop,100px)+32px)] z-10 transition-[top] duration-300">
              {renderTipsSections()}
            </div>
          </div>
        </div>

        {/* ── Mobile form only ── */}
      <div className="sm:hidden">
          {formFields}
        </div>

        <div ref={mobileFooterSentinelRef} className="h-1 sm:hidden" />
      </div>

      {/* ── Fixed bottom CTA bar — mobile only ── */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 flex gap-3 border-t border-[#E5E5E4] bg-white/95 px-4 py-3 backdrop-blur-sm transition-all duration-200 sm:hidden ${
        hideMobileActionBar ? 'pointer-events-none translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <Link
          to="/"
          className="flex-1 px-5 py-3 border border-[#E5E5E4] text-[#0F172A] rounded-xl font-medium hover:bg-[#F4F4F5] transition-colors text-center text-sm"
        >
          Annuler
        </Link>
        <button
          type="submit"
          form="create-form"
          disabled={!isFormValid}
          className="flex-1 px-6 py-3 bg-[#3B82F6] text-white rounded-xl font-medium hover:bg-[#2563EB] transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
        >
          {submissionMode === 'donation' ? "Publier l'annonce" : 'Déclarer pour la casse'}
        </button>
      </div>
    </>
  );
}
