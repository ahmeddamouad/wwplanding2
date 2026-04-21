from pathlib import Path

# 1. Update Index.tsx
index = Path('src/pages/Index.tsx')
text_idx = index.read_text(encoding='utf-8')
text_idx = text_idx.replace("import Differentiation from '@/components/landing/Differentiation';\n", "")
text_idx = text_idx.replace("import Testimonials from '@/components/landing/Testimonials';\n", "")
text_idx = text_idx.replace("        <Differentiation />\n", "")
text_idx = text_idx.replace("        <Testimonials />\n", "")
index.write_text(text_idx, encoding='utf-8')

# 2. Update Hero.tsx
hero = Path('src/components/landing/Hero.tsx')
text_h = hero.read_text(encoding='utf-8')
text_h = text_h.replace("Cabinet de Recrutement au Maroc", "Cabinet de recrutement francophone - France")
text_h = text_h.replace("Recruter vite sans se tromper{' '}\n              <span className=\"text-primary\">coûte moins cher</span> que recruter deux fois", "Recrutez vite, recrutez bien{' '}\n              <span className=\"text-primary\">— avec WWP</span>")
text_h = text_h.replace("Délais réduits (2 à 4 semaines au lieu de 2-4 mois)", "Des candidats qualifiés en 1 à 2 semaines")
text_h = text_h.replace("Candidats actifs en recherche, pas des CV recyclés", "Spécialisation : Retail, Logistique, Énergie, Startups")
text_h = text_h.replace("Garantie de remplacement 3 mois incluse", "Zéro risque financier : Paiement au succès")
hero.write_text(text_h, encoding='utf-8')

# 3. Update PainPoints.tsx -> NOTRE POSITIONNEMENT
pp = Path('src/components/landing/PainPoints.tsx')
text_p = pp.read_text(encoding='utf-8')
text_p = text_p.replace("Pourquoi il faut éviter un mauvais recrutement", "Un cabinet taillé pour les entreprises françaises en mouvement")
text_p = text_p.replace("Un mauvais recrutement coûte plus cher que le recrutement lui-même.", "Permettre à chaque entreprise de recruter rapidement des profils qualifiés, sans perte de temps ni surcharge.")
text_p = text_p.replace("Perte de temps", "Des délais records")
text_p = text_p.replace("80 CV → 20 entretiens → 0 bon profil", "Moins d'1 semaine pour des profils simples")
text_p = text_p.replace("Perte en productivité", "Recrutement sur mesure")
text_p = text_p.replace("Mauvaise adéquation poste / profil", "1 à 2 semaines pour profils opérationnels")
text_p = text_p.replace("Perte financière grave", "Absence de surcharge")
text_p = text_p.replace("2 à 4 mois de salaire perdus", "Processus géré de A à Z par nos experts")
pp.write_text(text_p, encoding='utf-8')

# 4. Update Methodology.tsx -> ENGAGEMENT QUALITÉ
meth = Path('src/components/landing/Methodology.tsx')
text_m = meth.read_text(encoding='utf-8')
text_m = text_m.replace("Un recrutement sans risque, c'est possible", "Engagement Qualité : Ce que WWP s'engage à délivrer")
text_m = text_m.replace("Afin de garantir la sérénité de votre esprit, nous vous offrons :", "Chaque mission est portée par une exigence de qualité et de transparence :")
text_m = text_m.replace("Garantie de remplacement 3 mois", "Shortlist qualifiée dans les délais annoncés")
text_m = text_m.replace("Taux de réussite élevé", "Candidats préqualifiés & évalués")
text_m = text_m.replace("Références sectorielles", "Compte rendu d'entretien structuré")
text_m = text_m.replace("Processus transparent", "Prise de références & accompagnement")
meth.write_text(text_m, encoding='utf-8')

# 5. Update PricingLogic.tsx -> MODÈLE TARIFAIRE
price = Path('src/components/landing/PricingLogic.tsx')
text_pr = price.read_text(encoding='utf-8')
text_pr = text_pr.replace("Probablement le meilleur rapport qualité prix du marché", "Un investissement clair, sans risque financier")
text_pr = text_pr.replace("La relation avec nos clients dure en moyenne 2-3 ans, tout simplement grâce à une offre juste et à fort impact.", "Zéro risque financier. Vous ne payez que si vous embauchez.")
text_pr = text_pr.replace("Prix standard pour tous les besoins de recrutement", "12% à 15% du salaire brut annuel")
text_pr = text_pr.replace("Pas de frais cachés", "Paiement au succès uniquement")
text_pr = text_pr.replace("Expertise incluse", "Offre de lancement")
text_pr = text_pr.replace("Assure votre retour sur investissement", "Tarif préférentiel sur le premier recrutement")
text_pr = text_pr.replace("2 semaines pour livrer", "Garantie de remplacement")
text_pr = text_pr.replace("Vous évitez de perdre du temps et surtout 3 mois de salaire sur le mauvais profil", "Valable 3 mois avec l'intégration réussie du candidat")
price.write_text(text_pr, encoding='utf-8')

# 6. Update FinalCTA.tsx -> FINAL CALL TO ACTION
cta = Path('src/components/landing/FinalCTA.tsx')
text_c = cta.read_text(encoding='utf-8')
text_c = text_c.replace("Votre nouvel employé est la clé cachée d'une croissance rapide", "WWP ne vend pas du recrutement. WWP vous aide à recruter mieux, plus vite.")
text_c = text_c.replace("Sans engagement", "Réactivité : Shortlist en 1 à 2 semaines")
text_c = text_c.replace("Réponse rapide", "Zéro risque : Paiement au succès")
text_c = text_c.replace("Recevoir des profils qualifiés", "Échangeons sur vos recrutements")
cta.write_text(text_c, encoding='utf-8')

# 7. Update TrustedCompanies.tsx
trust = Path('src/components/landing/TrustedCompanies.tsx')
if trust.exists():
    text_t = trust.read_text(encoding='utf-8')
    text_t = text_t.replace("Ils nous font confiance pour leurs recrutements critiques", "Rejoignez les PME françaises qui font confiance à WWP")
    trust.write_text(text_t, encoding='utf-8')

print("Content update successfully processed!")