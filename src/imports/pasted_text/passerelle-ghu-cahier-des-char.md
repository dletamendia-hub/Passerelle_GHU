Cahier des charges — Passerelle GHU

1. Nom du projet

Passerelle GHU

2. Contexte et objectif

Le GHU dispose de mobilier et de matériel encore utilisables dans certains services, mais devenus inutiles dans d’autres. Aujourd’hui, ces besoins de transfert sont souvent gérés de façon informelle, peu visible et difficile à tracer.

L’objectif de la plateforme est de :

faciliter la déclaration de matériel non utilisé ;

rendre visible ce matériel à l’ensemble des agents du GHU ;

encadrer les demandes de transfert ;

intégrer le contrôle administratif nécessaire avant validation ;

suivre et exporter les flux pour pilotage.

3. Objectifs métier

Objectifs principaux

Réduire le gaspillage et favoriser le réemploi interne.

Accélérer la circulation du matériel entre services.

Donner de la visibilité sur les biens disponibles.

Sécuriser les transferts via validation par l’équipe achat.

Disposer d’un historique fiable des publications et demandes.

Indicateurs de succès

nombre d’objets publiés ;

taux d’objets effectivement transférés ;

délai moyen entre publication et attribution ;

nombre de demandes par objet ;

taux de refus pour cause d’amortissement non terminé ;

volume de flux exportés par l’administration.

4. Périmètre

Inclus dans le périmètre

dépôt d’annonces de matériel/mobilier par les agents ;

consultation des annonces par les autres agents ;

demande de transfert ;

workflow de validation interne ;

suivi du statut des annonces et demandes ;

interface d’administration ;

export Excel des flux de demandes.

Hors périmètre initial

paiement ou facturation ;

gestion logistique détaillée du transport ;

gestion d’inventaire complète du GHU ;

application mobile native ;

ouverture à des utilisateurs externes au GHU.

5. Utilisateurs cibles

5.1 Agents déclarants

Profils : médecins, soignants, administratifs, cadres, secrétariats, personnels de service.

Besoins :

déclarer rapidement un bien ;

joindre une photo ;

renseigner le service d’origine ;

suivre l’avancement de la demande ;

savoir si le bien a été réservé, validé ou transféré.

5.2 Agents demandeurs

Profils : tous les agents du GHU autorisés à consulter la plateforme.

Besoins :

parcourir les biens disponibles ;

rechercher un type de matériel ;

filtrer par lieu, UF, catégorie ;

demander un transfert ;

suivre la réponse à leur demande.

5.3 Équipe achat / validation

Besoins :

vérifier si le bien est amorti ;

valider ou bloquer une transaction ;

garder une trace des décisions ;

fluidifier le traitement.

5.4 Administrateurs

Besoins :

superviser les flux ;

extraire les demandes ;

suivre les statuts ;

corriger ou modérer certaines annonces si nécessaire.

6. Proposition de positionnement produit

Le service doit fonctionner comme une place de réemploi interne, avec une expérience proche d’un site d’annonces :

page d’accueil avec les derniers biens disponibles ;

fiches détaillées avec photo, description, localisation ;

filtres simples et efficaces ;

statut visible de chaque annonce.

La différence majeure avec un site d’annonces grand public est la présence d’un workflow interne de validation administrative.

7. Architecture fonctionnelle du service

7.1 Espaces principaux

Espace catalogue

liste des biens disponibles ;

moteur de recherche ;

filtres ;

accès aux fiches produit.

Espace dépôt d’annonce

formulaire de déclaration ;

ajout de photo(s) ;

saisie des informations du bien.

Espace mes annonces / mes demandes

suivi des publications déposées ;

suivi des demandes envoyées ;

consultation des statuts.

Espace validation achat

file des demandes à instruire ;

vérification de l’amortissement ;

validation, refus, demande d’information complémentaire.

Espace administration

tableau de bord ;

export Excel ;

supervision et modération.

7.2 Architecture logique simplifiée

Front-office agents : consultation, dépôt, demandes, suivi.

Back-office métier : validation achat.

Back-office admin : pilotage, reporting, export.

Base de données : utilisateurs, annonces, demandes, statuts, historiques, pièces jointes.

Stockage médias : photos des biens.

Module export : génération Excel.

Gestion des droits : agent, équipe achat, administrateur.

8. Workflow global

8.1 Dépôt d’un bien

Un agent clique sur “Déposer un bien”.

Il renseigne :

catégorie ;

titre ;

description ;

photo ;

état ;

lieu ;

UF / service ;

coordonnées de contact internes.

Il soumet l’annonce.

L’annonce passe au statut Publiée ou À compléter selon les règles de complétude.

Le bien devient visible dans le catalogue interne.

8.2 Consultation et demande

Un autre agent consulte le catalogue.

Il filtre ou recherche un bien.

Il ouvre la fiche détaillée.

Il clique sur “Demander le transfert”.

Il renseigne les informations utiles à la demande : service destinataire, justification éventuelle, contact.

La demande passe au statut En attente de validation achat.

8.3 Traitement par l’équipe achat

L’équipe achat reçoit la demande dans sa file de traitement.

Elle vérifie si l’article est amorti.

Deux cas :

article amorti → validation possible immédiatement ;

article non amorti → validation nécessaire selon règles internes ou blocage temporaire.

La décision est enregistrée avec motif.

Les parties concernées sont notifiées.

8.4 Finalisation

Si la demande est validée, le bien passe au statut Réservé / Transfert validé.

Une fois le transfert réalisé, le statut devient Transféré / Clôturé.

Les flux restent consultables et exportables.

9. Parcours utilisateurs détaillés

9.1 Parcours déclarant

Objectif

Publier un bien dont le service n’a plus besoin.

Étapes

Accéder au formulaire de dépôt.

Ajouter une ou plusieurs photos.

Décrire le bien.

Indiquer le lieu, l’UF et le service.

Soumettre l’annonce.

Consulter les demandes reçues.

Voir l’avancement jusqu’au transfert.

Points d’attention UX

formulaire court et guidé ;

aide à la saisie pour UF / service / lieu ;

possibilité d’enregistrer un brouillon ;

aperçu avant publication.

9.2 Parcours demandeur

Objectif

Trouver un bien disponible et en demander le transfert.

Étapes

Consulter la liste des annonces.

Rechercher par mot-clé ou catégorie.

Filtrer par lieu, UF, type de matériel, état.

Ouvrir une fiche.

Déposer une demande de transfert.

Suivre le statut de la demande.

Points d’attention UX

navigation proche d’un catalogue d’annonces ;

filtres immédiatement utiles ;

statuts visibles sans ambiguïté ;

historique personnel des demandes.

9.3 Parcours équipe achat

Objectif

Sécuriser la conformité administrative du transfert.

Étapes

Accéder à la file des demandes à traiter.

Ouvrir la demande.

Vérifier les informations du bien.

Contrôler la situation d’amortissement.

Valider, refuser ou demander des compléments.

Journaliser la décision.

Points d’attention UX

file priorisée ;

vue synthétique des informations essentielles ;

motif obligatoire en cas de refus ou de mise en attente ;

historique des décisions.

9.4 Parcours administrateur

Objectif

Piloter la plateforme et suivre les flux.

Étapes

Accéder au tableau de bord.

Consulter les annonces et demandes.

Filtrer par période, site, UF, statut.

Exporter les flux au format Excel.

Modérer ou corriger si besoin.

10. Fonctionnalités détaillées

10.1 Authentification et gestion des accès

Attendus

authentification via compte interne GHU ;

récupération du profil utilisateur ;

gestion de rôles : agent, achat, administrateur ;

restriction de certaines actions selon le rôle.

Règles

un agent standard peut publier et demander ;

l’équipe achat peut instruire les demandes ;

l’administrateur peut superviser et exporter.

10.2 Publication d’une annonce

Champs minimums

titre de l’annonce ;

catégorie ;

description ;

photo principale ;

état du bien ;

lieu ;

UF ;

service ;

contact interne.

Options utiles

plusieurs photos ;

dimensions / volume ;

quantité ;

commentaires logistiques ;

date de disponibilité.

Statuts possibles d’une annonce

brouillon ;

publiée ;

réservée ;

transférée ;

retirée ;

expirée.

10.3 Catalogue / recherche

Attendus

affichage en grille et/ou liste ;

photo, titre, catégorie, lieu, état, date de publication, statut ;

recherche par mot-clé ;

filtres par :

catégorie ;

lieu ;

UF ;

type de bien ;

état ;

disponibilité.

Tri

plus récent ;

plus proche ;

catégorie ;

disponibilité.

10.4 Fiche annonce

Contenu

galerie photo ;

titre ;

description ;

état ;

localisation ;

UF / service d’origine ;

coordonnées de contact internes ;

statut ;

bouton d’action “Demander le transfert”.

Contraintes

les informations sensibles non nécessaires ne doivent pas être visibles ;

le statut doit être clair : disponible, en cours de validation, réservé, transféré.

10.5 Demande de transfert

Attendus

formulaire simple ;

préremplissage des informations du demandeur ;

saisie du service destinataire ;

message ou justification facultative/obligatoire selon règle métier ;

confirmation de soumission.

Statuts possibles d’une demande

envoyée ;

en attente validation achat ;

en cours d’instruction ;

validée ;

refusée ;

annulée ;

clôturée.

10.6 Validation par l’équipe achat

Actions possibles

valider ;

refuser ;

mettre en attente ;

demander un complément ;

historiser la décision.

Règles métier

si le bien est amorti, le transfert peut être autorisé ;

si le bien n’est pas amorti, la demande suit un circuit de validation défini par le GHU ;

toute décision doit être traçable.

10.7 Notifications

Notifications utiles

annonce publiée ;

demande reçue ;

demande envoyée ;

demande validée ;

demande refusée ;

demande en attente d’informations ;

transfert clôturé.

Canaux possibles

notification dans l’interface ;

email interne.

10.8 Tableau de bord administrateur

Indicateurs et vues

nombre d’annonces publiées ;

annonces en attente / réservées / transférées ;

nombre de demandes ;

taux de validation / refus ;

temps moyen de traitement ;

vues filtrables par période, UF, site, catégorie.

10.9 Export Excel

Contenu attendu de l’export

identifiant de la demande ;

date de création ;

demandeur ;

service demandeur ;

bien concerné ;

catégorie ;

lieu ;

UF ;

statut ;

décision achat ;

date de décision ;

date de clôture.

Filtres avant export

période ;

statut ;

site ;

UF ;

catégorie.

11. Cas d’erreur et situations particulières

11.1 Lors du dépôt d’annonce

champ obligatoire manquant ;

photo non uploadée ;

format image non supporté ;

poids du fichier trop élevé ;

UF ou lieu introuvable ;

perte de connexion pendant la soumission ;

doublon potentiel d’annonce.

Réponse attendue

message clair indiquant le problème ;

mise en évidence du champ concerné ;

conservation des données déjà saisies ;

suggestion de correction.

11.2 Lors de la consultation

aucune annonce disponible ;

aucun résultat pour les filtres sélectionnés ;

annonce retirée entre-temps ;

image indisponible.

Réponse attendue

état vide utile ;

proposition de modifier les filtres ;

visuel par défaut si image absente.

11.3 Lors de la demande de transfert

demande impossible car l’objet n’est plus disponible ;

demande déjà envoyée par le même utilisateur ;

informations requises manquantes ;

utilisateur non autorisé ;

conflit de réservation si plusieurs demandes arrivent simultanément.

Réponse attendue

blocage avec message explicite ;

statut actualisé en temps réel ;

gestion du premier arrivé / première validation selon règle métier.

11.4 Lors du traitement achat

données insuffisantes pour vérifier l’amortissement ;

objet introuvable dans les référentiels internes ;

bien déjà validé pour un autre service ;

utilisateur achat sans droit sur l’action demandée.

Réponse attendue

possibilité de demander un complément ;

journal des erreurs ;

impossibilité de valider sans motif ou sans contrôle requis.

11.5 Lors de l’export Excel

aucun résultat à exporter ;

période trop large ;

génération interrompue ;

format de colonne incohérent.

Réponse attendue

message indiquant qu’aucune donnée ne correspond ;

export partiel interdit sans avertissement ;

confirmation de succès et nommage standardisé du fichier.

12. Règles de gestion

Règles principales

une annonce doit être associée à un service d’origine ;

une annonce ne peut être demandée que si elle est disponible ;

une annonce réservée ne doit plus être demandable ;

une demande ne peut être validée définitivement qu’après contrôle achat ;

un historique horodaté doit être conservé sur chaque action ;

les rôles conditionnent les droits d’action ;

les exports doivent refléter les données à date.

Règles complémentaires à arbitrer

nombre maximal de photos par annonce ;

durée de vie d’une annonce avant expiration ;

gestion des priorités entre plusieurs demandes ;

niveau d’information affiché publiquement sur le contact ;

suppression vs archivage des annonces clôturées.

13. Données à gérer

Entité Utilisateur

identifiant ;

nom/prénom ;

email interne ;

rôle ;

service ;

UF ;

site.

Entité Annonce

identifiant ;

titre ;

description ;

catégorie ;

état ;

photos ;

quantité ;

lieu ;

UF ;

service d’origine ;

date de création ;

statut ;

propriétaire de l’annonce.

Entité Demande

identifiant ;

annonce liée ;

demandeur ;

service destinataire ;

justification ;

date de demande ;

statut ;

décision achat ;

motif ;

dates clés.

Entité Historique

identifiant ;

objet concerné ;

type d’action ;

auteur ;

date ;

commentaire.

14. Exigences UX / UI

Principes

simplicité de prise en main ;

logique proche d’un site d’annonces ;

lisibilité forte des statuts ;

peu de friction pour publier ;

transparence sur le suivi.

Écrans à prévoir

page d’accueil / catalogue ;

résultats de recherche ;

fiche annonce ;

dépôt / édition d’annonce ;

mes annonces ;

mes demandes ;

file de validation achat ;

tableau de bord admin ;

export des flux ;

pages d’erreur / états vides.

Composants clés

cartes d’annonces ;

filtres ;

badges de statut ;

timeline de traitement ;

tableau de flux ;

modales de confirmation ;

notifications.

15. Exigences techniques de haut niveau

Attendus

application web responsive ;

accès sécurisé sur réseau interne ou SSO ;

stockage sécurisé des photos ;

journalisation des actions ;

export Excel fiable ;

système de rôles et permissions ;

performances correctes sur catalogue et filtres.

Interfaçages à étudier

annuaire interne pour authentification et profils ;

référentiel UF / services / sites ;

éventuel système interne de gestion achat / immobilisation.

16. Critères d’acceptation principaux

Pour le dépôt

un agent peut publier une annonce complète avec photo, description, lieu et UF ;

il retrouve ensuite son annonce dans “Mes annonces”.

Pour la consultation

un agent peut rechercher et filtrer les annonces disponibles ;

il peut ouvrir une fiche détaillée et comprendre immédiatement le statut.

Pour la demande

un agent peut demander un transfert sur un bien disponible ;

la demande est visible dans son espace personnel.

Pour la validation achat

l’équipe achat peut traiter une demande, enregistrer une décision et laisser une trace ;

le statut est mis à jour pour toutes les parties.

Pour l’administration

l’administrateur peut filtrer les flux et les exporter en Excel ;

l’export contient les bonnes colonnes et les bons statuts.

17. MVP recommandé

Version 1

authentification interne ;

dépôt d’annonce avec une photo minimum ;

catalogue avec recherche et filtres principaux ;

fiche annonce ;

demande de transfert ;

file de validation achat ;

statuts ;

espace “Mes annonces / Mes demandes” ;

export Excel admin.

Version 2

notifications email ;

multi-photos ;

brouillons ;

modération avancée ;

tableau de bord enrichi ;

règles avancées de priorisation ;

connexion à référentiels métiers.

18. Questions à arbitrer avec le métier avant lancement design/dev

Quels types de biens sont autorisés ou exclus ?

Qui est responsable de la logistique physique du transfert ?

Quelle règle s’applique s’il y a plusieurs demandes sur le même bien ?

L’équipe achat valide-t-elle tous les biens ou seulement certains types ?

Quels référentiels internes peuvent être utilisés pour UF, services et amortissement ?

Quel niveau de contact doit être visible sur les fiches ?

Faut-il permettre le retrait d’une annonce après publication ?

Quelle durée de conservation pour l’historique et les annonces clôturées ?

19. Recommandation finale

Pour l’équipe design, le sujet central sera de rendre le parcours très simple côté agent, tout en rendant visible la complexité administrative seulement au bon moment.

Pour l’équipe développement, la priorité est de construire un produit robuste autour de trois briques :

catalogue d’annonces ;

workflow de demande et validation ;

back-office d’administration et export.

La meilleure orientation produit semble être :
une marketplace interne simple en façade, avec un moteur de validation métier en arrière-plan.

