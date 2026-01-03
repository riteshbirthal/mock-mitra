export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const microbiologyLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Microbiology",
    titleHi: "सूक्ष्म जीव विज्ञान का परिचय",
    contentEn: `
# 🦠 Introduction to Microbiology

---

## 📖 What is Microbiology?

> **Microbiology** is the study of microorganisms - living organisms too small to be seen with the naked eye.

### Types of Microorganisms

| Type | Examples | Size |
|:-----|:---------|:-----|
| 🦠 **Bacteria** | E. coli, Staph | 0.5-5 μm |
| 🧫 **Viruses** | HIV, Influenza | 20-300 nm |
| 🍄 **Fungi** | Candida, Aspergillus | 2-10 μm |
| 🔬 **Parasites** | Malaria, Amoeba | 10-100 μm |

---

## 🏛️ History of Microbiology

### Key Pioneers

| Scientist | Contribution | Year |
|:----------|:-------------|:-----|
| **Antonie van Leeuwenhoek** | Father of Microbiology, first to see bacteria | 1674 |
| **Louis Pasteur** | Germ theory, pasteurization, vaccines | 1860s |
| **Robert Koch** | Koch's postulates, discovered TB bacillus | 1880s |
| **Joseph Lister** | Father of Antiseptic Surgery | 1867 |
| **Alexander Fleming** | Discovered Penicillin | 1928 |

---

## 📋 Koch's Postulates

:::info
**The 4 Steps to Prove a Microbe Causes Disease:**
1. Organism found in all cases of disease
2. Organism isolated and grown in pure culture
3. Causes disease when inoculated in healthy host
4. Same organism re-isolated from experimental host
:::

---

## 🔬 Classification of Microorganisms

### By Cell Structure

| Type | Nucleus | Examples |
|:-----|:--------|:---------|
| **Prokaryotes** | No true nucleus | Bacteria |
| **Eukaryotes** | True nucleus | Fungi, Protozoa |
| **Acellular** | Not cells | Viruses, Prions |

### By Disease-Causing Ability

| Type | Description |
|:-----|:------------|
| **Pathogens** | Cause disease |
| **Non-pathogens** | Harmless |
| **Opportunistic** | Cause disease in weak hosts |

### By Oxygen Requirements

| Type | Oxygen Need |
|:-----|:------------|
| **Aerobes** | Require O₂ |
| **Anaerobes** | Cannot survive with O₂ |
| **Facultative** | Can survive with or without |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Leeuwenhoek = Father of Microbiology
2. Pasteur = Germ Theory
3. Koch = Koch's Postulates
4. Fleming = Penicillin discovery
5. Most microbes are harmless
6. Hand hygiene = #1 infection control measure
:::
`,
    contentHi: `
# 🦠 सूक्ष्म जीव विज्ञान का परिचय

---

## 📖 सूक्ष्म जीव विज्ञान क्या है?

> **सूक्ष्म जीव विज्ञान** सूक्ष्मजीवों का अध्ययन है - जीवित जीव जो नग्न आंखों से दिखाई नहीं देते।

### सूक्ष्मजीवों के प्रकार

| प्रकार | उदाहरण | आकार |
|:-------|:-------|:-----|
| 🦠 **जीवाणु** | E. coli, Staph | 0.5-5 μm |
| 🧫 **विषाणु** | HIV, इन्फ्लूएंजा | 20-300 nm |
| 🍄 **कवक** | कैंडिडा | 2-10 μm |
| 🔬 **परजीवी** | मलेरिया, अमीबा | 10-100 μm |

---

## 🏛️ सूक्ष्म जीव विज्ञान का इतिहास

### प्रमुख वैज्ञानिक

| वैज्ञानिक | योगदान | वर्ष |
|:---------|:-------|:-----|
| **लीउवेनहॉक** | सूक्ष्म जीव विज्ञान के जनक | 1674 |
| **लुई पाश्चर** | जर्म थ्योरी, पाश्चुरीकरण | 1860s |
| **रॉबर्ट कोच** | कोच के अभिगृहीत | 1880s |
| **जोसेफ लिस्टर** | एंटीसेप्टिक सर्जरी के जनक | 1867 |
| **अलेक्जेंडर फ्लेमिंग** | पेनिसिलिन की खोज | 1928 |

---

## 📋 कोच के अभिगृहीत

:::info
**रोग कारक सिद्ध करने के 4 चरण:**
1. जीव रोग के सभी मामलों में मिलना चाहिए
2. जीव को अलग करके शुद्ध संवर्धन में उगाना
3. स्वस्थ होस्ट में रोग उत्पन्न करना
4. वही जीव फिर से अलग करना
:::

---

## 🔬 सूक्ष्मजीवों का वर्गीकरण

### कोशिका संरचना द्वारा

| प्रकार | केंद्रक | उदाहरण |
|:-------|:-------|:-------|
| **प्रोकैरियोट** | सच्चा केंद्रक नहीं | जीवाणु |
| **यूकैरियोट** | सच्चा केंद्रक | कवक, प्रोटोजोआ |
| **अकोशिकीय** | कोशिका नहीं | विषाणु |

### ऑक्सीजन आवश्यकता द्वारा

| प्रकार | ऑक्सीजन |
|:-------|:--------|
| **एरोब** | O₂ आवश्यक |
| **एनारोब** | O₂ के बिना |
| **फैकल्टेटिव** | दोनों में जी सकते हैं |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. लीउवेनहॉक = सूक्ष्म जीव विज्ञान के जनक
2. पाश्चर = जर्म थ्योरी
3. कोच = कोच के अभिगृहीत
4. फ्लेमिंग = पेनिसिलिन
5. अधिकांश सूक्ष्मजीव हानिरहित हैं
6. हाथ स्वच्छता = #1 संक्रमण नियंत्रण
:::
`
  },
  {
    id: 2,
    titleEn: "Bacteria - Structure & Types",
    titleHi: "जीवाणु - संरचना और प्रकार",
    contentEn: `
# 🦠 Bacteria - Structure & Types

---

## 📖 What are Bacteria?

> **Bacteria** are single-celled prokaryotic organisms that can cause disease or be beneficial.

---

## 🔬 Bacterial Structure

### Cell Components

| Component | Function |
|:----------|:---------|
| **Cell Wall** | Protection, shape, Gram staining |
| **Cell Membrane** | Controls entry/exit |
| **Cytoplasm** | Contains ribosomes |
| **Nucleoid** | DNA region (no membrane) |
| **Flagella** | Movement |
| **Pili** | Attachment, conjugation |
| **Capsule** | Protection from immune system |

---

## 🔵 Gram Staining

:::info
**The Most Important Lab Test for Bacteria!**
Divides bacteria into two groups based on cell wall structure.
:::

| Feature | Gram Positive | Gram Negative |
|:--------|:--------------|:--------------|
| **Color** | Purple/Blue | Pink/Red |
| **Cell Wall** | Thick peptidoglycan | Thin + outer membrane |
| **Examples** | Staph, Strep | E. coli, Salmonella |

### Gram Staining Steps
1. **Crystal Violet** - Primary stain (purple)
2. **Iodine** - Mordant (fixes dye)
3. **Alcohol** - Decolorizer
4. **Safranin** - Counterstain (pink)

---

## 🔵 Bacterial Shapes

| Shape | Name | Examples |
|:------|:-----|:---------|
| ⚫ **Round** | Cocci | Staph, Strep |
| 🥢 **Rod** | Bacilli | E. coli, TB |
| 🌀 **Spiral** | Spirilla | Syphilis, Cholera |
| 🍌 **Comma** | Vibrio | V. cholerae |

### Arrangements

| Pattern | Description | Example |
|:--------|:------------|:--------|
| **Diplo-** | Pairs | Diplococcus |
| **Strepto-** | Chains | Streptococcus |
| **Staphylo-** | Clusters | Staphylococcus |

---

## ⚠️ Important Pathogenic Bacteria

| Bacteria | Disease | Gram |
|:---------|:--------|:-----|
| **Staph aureus** | Skin infections, food poisoning | G+ |
| **Strep pyogenes** | Sore throat, rheumatic fever | G+ |
| **E. coli** | UTI, diarrhea | G- |
| **Salmonella** | Typhoid, food poisoning | G- |
| **M. tuberculosis** | Tuberculosis | Acid-fast |
| **V. cholerae** | Cholera | G- |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Bacteria are prokaryotes (no true nucleus)
2. Gram+ = Purple, thick wall
3. Gram- = Pink, thin wall + outer membrane
4. Cocci = round, Bacilli = rod, Spirilla = spiral
5. Staphylo = clusters, Strepto = chains
6. Most bacteria killed by antibiotics
:::
`,
    contentHi: `
# 🦠 जीवाणु - संरचना और प्रकार

---

## 📖 जीवाणु क्या हैं?

> **जीवाणु** एकल-कोशिकीय प्रोकैरियोटिक जीव हैं जो रोग पैदा कर सकते हैं या लाभदायक हो सकते हैं।

---

## 🔬 जीवाणु संरचना

| घटक | कार्य |
|:----|:------|
| **कोशिका भित्ति** | सुरक्षा, आकार |
| **कोशिका झिल्ली** | प्रवेश/निकास नियंत्रण |
| **साइटोप्लाज्म** | राइबोसोम रखता है |
| **न्यूक्लियोइड** | DNA क्षेत्र |
| **फ्लैजेला** | गति |
| **पिली** | जुड़ाव |
| **कैप्सूल** | प्रतिरक्षा से बचाव |

---

## 🔵 ग्राम स्टेनिंग

:::info
**जीवाणुओं के लिए सबसे महत्वपूर्ण परीक्षण!**
कोशिका भित्ति के आधार पर दो समूहों में विभाजित करता है।
:::

| विशेषता | ग्राम पॉजिटिव | ग्राम नेगेटिव |
|:--------|:-------------|:-------------|
| **रंग** | बैंगनी/नीला | गुलाबी/लाल |
| **कोशिका भित्ति** | मोटी | पतली + बाहरी झिल्ली |
| **उदाहरण** | Staph, Strep | E. coli |

---

## 🔵 जीवाणुओं की आकृतियां

| आकार | नाम | उदाहरण |
|:-----|:----|:-------|
| ⚫ **गोल** | कोकाई | Staph, Strep |
| 🥢 **छड़** | बेसिलाई | E. coli, TB |
| 🌀 **सर्पिल** | स्पाइरिला | सिफलिस |
| 🍌 **कॉमा** | विब्रियो | हैजा |

---

## ⚠️ महत्वपूर्ण रोगजनक जीवाणु

| जीवाणु | रोग | ग्राम |
|:-------|:----|:------|
| **Staph aureus** | त्वचा संक्रमण | G+ |
| **Strep pyogenes** | गले का संक्रमण | G+ |
| **E. coli** | UTI, दस्त | G- |
| **Salmonella** | टायफॉइड | G- |
| **M. tuberculosis** | TB | एसिड-फास्ट |
| **V. cholerae** | हैजा | G- |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. जीवाणु = प्रोकैरियोट
2. ग्राम+ = बैंगनी, मोटी भित्ति
3. ग्राम- = गुलाबी, पतली भित्ति
4. कोकाई = गोल, बेसिलाई = छड़
5. स्टैफिलो = गुच्छे, स्ट्रेप्टो = श्रृंखला
:::
`
  },
  {
    id: 3,
    titleEn: "Viruses & Viral Diseases",
    titleHi: "विषाणु और विषाणुजनित रोग",
    contentEn: `
# 🧬 Viruses & Viral Diseases

---

## 📖 What are Viruses?

> **Viruses** are acellular infectious agents that can only replicate inside living cells.

:::warning
**Key Fact:** Viruses are NOT living organisms - they need a host cell to reproduce!
:::

---

## 🔬 Virus Structure

| Component | Function |
|:----------|:---------|
| **Nucleic Acid** | DNA or RNA (never both) |
| **Capsid** | Protein coat protecting genetic material |
| **Envelope** | Lipid layer (some viruses) |
| **Spikes** | Attachment to host cells |

---

## 🔄 Virus Replication Cycle

1. **Attachment** - Virus binds to host cell
2. **Penetration** - Enters the cell
3. **Uncoating** - Releases genetic material
4. **Replication** - Makes copies of DNA/RNA
5. **Assembly** - New viruses formed
6. **Release** - Cell bursts or buds out

---

## ⚠️ Important Viral Diseases

| Virus | Disease | Transmission |
|:------|:--------|:-------------|
| **Influenza** | Flu | Droplet |
| **HIV** | AIDS | Blood, sexual |
| **Hepatitis B** | Liver disease | Blood, sexual |
| **Hepatitis A** | Jaundice | Fecal-oral |
| **Measles** | Khasra | Droplet |
| **Polio** | Paralysis | Fecal-oral |
| **Rabies** | Fatal encephalitis | Animal bite |
| **Dengue** | Fever, bleeding | Mosquito |
| **COVID-19** | Respiratory illness | Droplet, aerosol |

---

## 💉 Viral Disease Prevention

### Vaccines Available For:
- Hepatitis A & B
- Measles, Mumps, Rubella (MMR)
- Polio
- Rabies
- Influenza
- COVID-19
- HPV

:::tip
**Key Point:** Antibiotics do NOT work against viruses! Only antivirals and vaccines help.
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Viruses = acellular, need host to replicate
2. Contain DNA OR RNA (not both)
3. Antibiotics DON'T work on viruses
4. Prevention = Vaccination
5. HIV attacks CD4 cells
6. Hepatitis B = blood-borne
7. Polio = fecal-oral route
:::
`,
    contentHi: `
# 🧬 विषाणु और विषाणुजनित रोग

---

## 📖 विषाणु क्या हैं?

> **विषाणु** अकोशिकीय संक्रामक एजेंट हैं जो केवल जीवित कोशिकाओं के अंदर प्रतिकृति बना सकते हैं।

:::warning
**मुख्य तथ्य:** विषाणु जीवित नहीं हैं - उन्हें प्रजनन के लिए मेजबान कोशिका चाहिए!
:::

---

## 🔬 विषाणु संरचना

| घटक | कार्य |
|:----|:------|
| **न्यूक्लिक एसिड** | DNA या RNA |
| **कैप्सिड** | प्रोटीन आवरण |
| **एनवेलप** | लिपिड परत |
| **स्पाइक्स** | मेजबान से जुड़ना |

---

## ⚠️ महत्वपूर्ण विषाणुजनित रोग

| विषाणु | रोग | संचरण |
|:-------|:----|:------|
| **इन्फ्लूएंजा** | फ्लू | ड्रॉपलेट |
| **HIV** | AIDS | रक्त, यौन |
| **हेपेटाइटिस B** | यकृत रोग | रक्त, यौन |
| **हेपेटाइटिस A** | पीलिया | मल-मौखिक |
| **मीजल्स** | खसरा | ड्रॉपलेट |
| **पोलियो** | पक्षाघात | मल-मौखिक |
| **रेबीज** | घातक | पशु काटना |
| **डेंगू** | बुखार | मच्छर |

---

## 💉 विषाणु रोग रोकथाम

### उपलब्ध टीके:
- हेपेटाइटिस A & B
- खसरा, मम्प्स, रूबेला
- पोलियो
- रेबीज
- इन्फ्लूएंजा
- COVID-19

:::tip
**मुख्य बिंदु:** एंटीबायोटिक्स विषाणुओं पर काम नहीं करते!
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. विषाणु = अकोशिकीय
2. DNA या RNA (दोनों नहीं)
3. एंटीबायोटिक्स काम नहीं करते
4. रोकथाम = टीकाकरण
5. HIV = CD4 कोशिकाओं पर हमला
6. हेपेटाइटिस B = रक्त-जनित
:::
`
  },
  {
    id: 4,
    titleEn: "Fungi & Parasites",
    titleHi: "कवक और परजीवी",
    contentEn: `
# 🍄 Fungi & Parasites

---

## 🍄 Fungi (Mycology)

> **Fungi** are eukaryotic organisms that include yeasts, molds, and mushrooms.

### Types of Fungi

| Type | Description | Examples |
|:-----|:------------|:---------|
| **Yeasts** | Single-celled | Candida |
| **Molds** | Filamentous | Aspergillus |
| **Dermatophytes** | Skin fungi | Tinea (ringworm) |

---

## 🦠 Common Fungal Infections

| Infection | Fungus | Site |
|:----------|:-------|:-----|
| **Oral thrush** | Candida | Mouth |
| **Vaginal candidiasis** | Candida | Vagina |
| **Ringworm** | Dermatophytes | Skin |
| **Athlete's foot** | Tinea pedis | Feet |
| **Nail infection** | Tinea unguium | Nails |
| **Aspergillosis** | Aspergillus | Lungs |

:::tip
**Risk Factors for Fungal Infections:**
- Diabetes
- HIV/AIDS
- Antibiotic use
- Steroids
- Poor hygiene
:::

---

## 🔬 Parasites (Parasitology)

> **Parasites** are organisms that live on or in a host organism and get food at the host's expense.

### Types of Parasites

| Type | Examples | Size |
|:-----|:---------|:-----|
| **Protozoa** | Malaria, Amoeba, Giardia | Microscopic |
| **Helminths** | Roundworm, Tapeworm, Hookworm | Visible |
| **Ectoparasites** | Lice, Scabies, Ticks | External |

---

## ⚠️ Important Parasitic Diseases

| Parasite | Disease | Transmission |
|:---------|:--------|:-------------|
| **Plasmodium** | Malaria | Mosquito bite |
| **Entamoeba** | Amoebiasis | Fecal-oral |
| **Giardia** | Giardiasis | Contaminated water |
| **Ascaris** | Roundworm | Fecal-oral |
| **Ancylostoma** | Hookworm | Skin penetration |
| **Taenia** | Tapeworm | Undercooked meat |

---

## 🦟 Malaria - Most Important!

### Life Cycle
1. **Mosquito bite** → Sporozoites enter blood
2. **Liver stage** → Multiply in liver cells
3. **RBC stage** → Invade and destroy RBCs
4. **Fever cycles** → RBC rupture releases parasites

### Types of Malaria

| Species | Fever Pattern |
|:--------|:-------------|
| **P. vivax** | Every 48 hours |
| **P. falciparum** | Irregular, severe |
| **P. malariae** | Every 72 hours |

:::warning
**P. falciparum** causes cerebral malaria - most dangerous!
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Fungi = eukaryotes (yeasts, molds)
2. Candida = most common fungal infection
3. Ringworm is NOT a worm - it's a fungus!
4. Malaria = Plasmodium via Anopheles mosquito
5. P. falciparum = most dangerous malaria
6. Hookworm enters through skin
7. Tapeworm from undercooked meat
:::
`,
    contentHi: `
# 🍄 कवक और परजीवी

---

## 🍄 कवक (माइकोलॉजी)

> **कवक** यूकैरियोटिक जीव हैं जिनमें यीस्ट, मोल्ड और मशरूम शामिल हैं।

### कवक के प्रकार

| प्रकार | विवरण | उदाहरण |
|:-------|:------|:-------|
| **यीस्ट** | एकल-कोशिकीय | कैंडिडा |
| **मोल्ड** | तंतुमय | एस्परगिलस |
| **डर्मेटोफाइट** | त्वचा कवक | दाद |

---

## 🦠 सामान्य कवक संक्रमण

| संक्रमण | कवक | स्थान |
|:--------|:----|:------|
| **ओरल थ्रश** | कैंडिडा | मुंह |
| **योनि संक्रमण** | कैंडिडा | योनि |
| **दाद** | डर्मेटोफाइट | त्वचा |
| **एथलीट फुट** | टीनिया | पैर |

---

## 🔬 परजीवी

### परजीवी के प्रकार

| प्रकार | उदाहरण |
|:-------|:-------|
| **प्रोटोजोआ** | मलेरिया, अमीबा |
| **हेल्मिन्थ** | गोलकृमि, फीताकृमि |
| **बाह्य परजीवी** | जूं, खुजली |

---

## ⚠️ महत्वपूर्ण परजीवी रोग

| परजीवी | रोग | संचरण |
|:-------|:----|:------|
| **प्लाज्मोडियम** | मलेरिया | मच्छर |
| **एंटअमीबा** | अमीबायसिस | मल-मौखिक |
| **एस्केरिस** | गोलकृमि | मल-मौखिक |
| **एंकाइलोस्टोमा** | हुकवर्म | त्वचा प्रवेश |
| **टीनिया** | फीताकृमि | कच्चा मांस |

---

## 🦟 मलेरिया - सबसे महत्वपूर्ण!

### मलेरिया के प्रकार

| प्रजाति | बुखार पैटर्न |
|:--------|:-----------|
| **P. vivax** | हर 48 घंटे |
| **P. falciparum** | अनियमित, गंभीर |
| **P. malariae** | हर 72 घंटे |

:::warning
**P. falciparum** सेरेब्रल मलेरिया करता है - सबसे खतरनाक!
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. कवक = यूकैरियोट
2. कैंडिडा = सबसे आम कवक संक्रमण
3. दाद कीड़ा नहीं है - कवक है!
4. मलेरिया = प्लाज्मोडियम, एनोफेलीज मच्छर
5. P. falciparum = सबसे खतरनाक
6. हुकवर्म त्वचा से प्रवेश करता है
:::
`
  },
  {
    id: 5,
    titleEn: "Sterilization & Disinfection",
    titleHi: "बंध्याकरण और कीटाणुशोधन",
    contentEn: `
# 🧴 Sterilization & Disinfection

---

## 📖 Definitions

| Term | Definition |
|:-----|:-----------|
| **Sterilization** | Complete destruction of ALL microorganisms including spores |
| **Disinfection** | Destruction of most pathogens (not spores) |
| **Antiseptic** | Disinfectant safe for living tissue |
| **Asepsis** | Absence of disease-causing organisms |

---

## 🔥 Sterilization Methods

### Heat Sterilization

| Method | Temperature | Time | Uses |
|:-------|:------------|:-----|:-----|
| **Autoclaving** | 121°C, 15 psi | 15-20 min | Surgical instruments |
| **Dry Heat** | 160-180°C | 1-2 hours | Glass, powder |
| **Boiling** | 100°C | 20 min | Emergency only |
| **Flaming** | Direct flame | Few seconds | Loops, needles |

:::success
**Gold Standard:** Autoclaving (moist heat under pressure)
:::

### Chemical Sterilization

| Agent | Uses |
|:------|:-----|
| **Ethylene oxide** | Heat-sensitive equipment |
| **Glutaraldehyde** | Endoscopes |
| **Formaldehyde** | Fumigation |

---

## 🧴 Disinfection Methods

### Chemical Disinfectants

| Disinfectant | Concentration | Uses |
|:-------------|:--------------|:-----|
| **Sodium hypochlorite** | 0.5-1% | Surfaces, blood spills |
| **Alcohol** | 70% | Skin, surfaces |
| **Povidone-iodine** | 10% | Skin antiseptic |
| **Chlorhexidine** | 2-4% | Hand scrub, skin |
| **Hydrogen peroxide** | 3-6% | Wounds, surfaces |

### Levels of Disinfection

| Level | Kills | Used For |
|:------|:------|:---------|
| **High** | Most spores | Semi-critical items |
| **Intermediate** | TB, viruses | Non-critical items |
| **Low** | Most bacteria | Surfaces |

---

## 🖐️ Hand Hygiene

### When to Wash Hands (WHO 5 Moments)

1. **Before** touching a patient
2. **Before** clean/aseptic procedure
3. **After** body fluid exposure
4. **After** touching a patient
5. **After** touching patient surroundings

### Hand Washing Steps

:::tip
**Remember:** 40-60 seconds with soap and water!
1. Wet hands
2. Apply soap
3. Palm to palm
4. Between fingers
5. Back of hands
6. Thumbs
7. Fingertips
8. Rinse
9. Dry with clean towel
:::

---

## 🗑️ Waste Segregation

| Color | Waste Type |
|:------|:-----------|
| 🔴 **Red** | Infectious (blood, body fluids) |
| 🟡 **Yellow** | Pathological, anatomical |
| 🔵 **Blue** | Sharps (needles, blades) |
| ⚫ **Black** | General, non-hazardous |
| ⚪ **White** | Sharp containers |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Sterilization = kills ALL (including spores)
2. Disinfection = kills most (not spores)
3. Autoclave = 121°C, 15 psi, 15-20 min
4. 70% alcohol = optimal (not 100%)
5. WHO 5 Moments for hand hygiene
6. Red bag = infectious waste
7. Blue/White = sharps
:::
`,
    contentHi: `
# 🧴 बंध्याकरण और कीटाणुशोधन

---

## 📖 परिभाषाएं

| शब्द | परिभाषा |
|:----|:--------|
| **बंध्याकरण** | बीजाणुओं सहित सभी सूक्ष्मजीवों का विनाश |
| **कीटाणुशोधन** | अधिकांश रोगजनकों का विनाश |
| **एंटीसेप्टिक** | जीवित ऊतक के लिए सुरक्षित |
| **एसेप्सिस** | रोगजनक जीवों की अनुपस्थिति |

---

## 🔥 बंध्याकरण विधियां

### ताप बंध्याकरण

| विधि | तापमान | समय | उपयोग |
|:----|:-------|:----|:------|
| **ऑटोक्लेविंग** | 121°C, 15 psi | 15-20 मिनट | सर्जिकल उपकरण |
| **शुष्क ताप** | 160-180°C | 1-2 घंटे | कांच, पाउडर |
| **उबालना** | 100°C | 20 मिनट | आपातकालीन |

:::success
**स्वर्ण मानक:** ऑटोक्लेविंग (दबाव में नम ताप)
:::

---

## 🧴 कीटाणुशोधन

### रासायनिक कीटाणुनाशक

| कीटाणुनाशक | सांद्रता | उपयोग |
|:-----------|:---------|:------|
| **सोडियम हाइपोक्लोराइट** | 0.5-1% | सतह, रक्त |
| **अल्कोहल** | 70% | त्वचा, सतह |
| **पोविडोन-आयोडीन** | 10% | त्वचा एंटीसेप्टिक |
| **क्लोरहेक्सिडीन** | 2-4% | हैंड स्क्रब |

---

## 🖐️ हाथ स्वच्छता

### कब हाथ धोएं (WHO 5 क्षण)

1. रोगी को छूने से **पहले**
2. स्वच्छ प्रक्रिया से **पहले**
3. शरीर द्रव संपर्क के **बाद**
4. रोगी को छूने के **बाद**
5. रोगी परिवेश छूने के **बाद**

:::tip
**याद रखें:** साबुन और पानी से 40-60 सेकंड!
:::

---

## 🗑️ अपशिष्ट पृथक्करण

| रंग | अपशिष्ट प्रकार |
|:----|:-------------|
| 🔴 **लाल** | संक्रामक (रक्त) |
| 🟡 **पीला** | पैथोलॉजिकल |
| 🔵 **नीला** | शार्प्स (सुई) |
| ⚫ **काला** | सामान्य |
| ⚪ **सफेद** | शार्प कंटेनर |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. बंध्याकरण = सभी मारता है (बीजाणु भी)
2. कीटाणुशोधन = अधिकांश (बीजाणु नहीं)
3. ऑटोक्लेव = 121°C, 15 psi, 15-20 मिनट
4. 70% अल्कोहल = इष्टतम
5. WHO 5 क्षण हाथ स्वच्छता
6. लाल बैग = संक्रामक अपशिष्ट
:::
`
  },
  {
    id: 6,
    titleEn: "Chain of Infection",
    titleHi: "संक्रमण की श्रृंखला",
    contentEn: `
# 🔗 Chain of Infection

---

## 📖 Overview

> The **Chain of Infection** describes the six links required for an infectious disease to spread. Breaking ANY link prevents infection.

:::info
**The Six Links:**
1. Infectious Agent (Pathogen)
2. Reservoir
3. Portal of Exit
4. Mode of Transmission
5. Portal of Entry
6. Susceptible Host
:::

---

## 🦠 Link 1: Infectious Agent

> The microorganism capable of causing disease.

### Types of Pathogens

| Type | Examples |
|:-----|:---------|
| **Bacteria** | TB, Cholera, Typhoid |
| **Viruses** | HIV, Hepatitis, Influenza |
| **Fungi** | Candida, Aspergillus |
| **Parasites** | Malaria, Amoebiasis |
| **Prions** | CJD |

### Factors Affecting Infectivity

| Factor | Description |
|:-------|:------------|
| **Pathogenicity** | Ability to cause disease |
| **Virulence** | Severity of disease |
| **Invasiveness** | Ability to spread in tissues |
| **Infectious dose** | Number needed to cause infection |

:::tip
**Break This Link:**
- Antimicrobial therapy
- Sterilization/disinfection
- Proper food handling
:::

---

## 🏠 Link 2: Reservoir

> The habitat where the pathogen lives and multiplies.

### Types of Reservoirs

| Type | Examples |
|:-----|:---------|
| **Human** | Active cases, Carriers (asymptomatic), Chronic carriers |
| **Animal (Zoonoses)** | Rabies (dogs), Plague (rodents), Avian flu (birds) |
| **Environmental** | Soil (Tetanus), Water (Cholera), Food (Salmonella) |

### Carrier Types

| Carrier Type | Description |
|:-------------|:------------|
| **Incubatory** | Infectious during incubation period |
| **Convalescent** | Recovering but still shedding |
| **Chronic** | Long-term shedding (e.g., Typhoid Mary) |

:::tip
**Break This Link:**
- Treatment of cases
- Identify and treat carriers
- Animal control
- Environmental sanitation
:::

---

## 🚪 Link 3: Portal of Exit

> The path by which the pathogen leaves the reservoir.

| Portal | Examples |
|:-------|:---------|
| **Respiratory tract** | TB, Influenza, COVID-19 (cough, sneeze) |
| **GI tract** | Cholera, Typhoid, Hepatitis A (feces) |
| **Genitourinary** | HIV, Gonorrhea, Syphilis |
| **Skin/Blood** | HIV, Hepatitis B (blood, wounds) |
| **Transplacental** | HIV, Rubella, Syphilis (mother to fetus) |

:::tip
**Break This Link:**
- Cover coughs/sneezes
- Proper waste disposal
- Safe sex practices
- Blood safety measures
- PPE use
:::

---

## 🚗 Link 4: Mode of Transmission

> The method by which the pathogen moves to a new host.

### Contact Transmission

| Type | Description | Examples |
|:-----|:------------|:---------|
| **Direct** | Person-to-person (touching, kissing) | STIs, Skin infections |
| **Indirect** | Through fomites (doorknobs, equipment) | Common cold, C. diff |
| **Droplet** | Large droplets >5μm, <1 meter | Influenza, Meningitis |

### Other Modes

| Mode | Description | Examples |
|:-----|:------------|:---------|
| **Airborne** | Small particles <5μm, travel far | TB, Measles, Chickenpox |
| **Vehicle** | Contaminated food/water/blood | Cholera, Typhoid, HIV |
| **Vector** | Carried by insects/animals | Malaria, Dengue, Plague |

:::tip
**Break This Link:**
- Hand hygiene
- Standard precautions
- Isolation precautions
- Environmental cleaning
- Vector control
:::

---

## 🚪 Link 5: Portal of Entry

> The path by which the pathogen enters a new host.

| Portal | Examples |
|:-------|:---------|
| **Respiratory** | Inhalation (TB, COVID) |
| **GI tract** | Ingestion (Cholera, Typhoid) |
| **Genitourinary** | Sexual contact (HIV, STIs) |
| **Skin** | Breaks, bites, needlestick |
| **Mucous membranes** | Eyes, nose, mouth |

:::tip
**Break This Link:**
- PPE (masks, gloves, eye protection)
- Safe injection practices
- Wound care
:::

---

## 👤 Link 6: Susceptible Host

> A person who can become infected.

### Factors Affecting Susceptibility

| Factor | Higher Risk |
|:-------|:------------|
| **Age** | Infants, elderly |
| **Immunity** | Unvaccinated, immunocompromised |
| **Nutrition** | Malnourished |
| **Chronic disease** | Diabetes, HIV, cancer |
| **Medications** | Steroids, chemotherapy |

:::tip
**Break This Link:**
- Vaccination
- Good nutrition
- Treat underlying diseases
- Prophylactic medications
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. 6 links in chain of infection
2. Breaking ANY link prevents infection
3. Reservoir = where pathogen lives
4. Portal of Exit = how pathogen leaves
5. Transmission = how it spreads
6. Portal of Entry = how it enters new host
7. Susceptible host = who can get infected
8. Hand hygiene breaks transmission link
:::
`,
    contentHi: `
# 🔗 संक्रमण की श्रृंखला

---

## 📖 अवलोकन

> **संक्रमण की श्रृंखला** उन छह कड़ियों का वर्णन करती है जो संक्रामक रोग फैलने के लिए आवश्यक हैं। किसी भी कड़ी को तोड़ने से संक्रमण रुक जाता है।

:::info
**छह कड़ियां:**
1. संक्रामक एजेंट (रोगजनक)
2. भंडार (Reservoir)
3. निकास द्वार
4. संचरण का तरीका
5. प्रवेश द्वार
6. संवेदनशील मेजबान
:::

---

## 🦠 कड़ी 1: संक्रामक एजेंट

> रोग पैदा करने में सक्षम सूक्ष्मजीव।

### रोगजनकों के प्रकार

| प्रकार | उदाहरण |
|:-------|:-------|
| **बैक्टीरिया** | TB, कॉलेरा, टाइफाइड |
| **वायरस** | HIV, हेपेटाइटिस, इन्फ्लूएंजा |
| **कवक** | कैंडिडा, एस्परगिलस |
| **परजीवी** | मलेरिया, अमीबियासिस |

:::tip
**इस कड़ी को तोड़ें:**
- रोगाणुरोधी चिकित्सा
- बंध्याकरण/कीटाणुशोधन
- उचित भोजन प्रबंधन
:::

---

## 🏠 कड़ी 2: भंडार

> वह आवास जहां रोगजनक रहता और बढ़ता है।

### भंडार के प्रकार

| प्रकार | उदाहरण |
|:-------|:-------|
| **मानव** | सक्रिय मामले, वाहक |
| **पशु (जूनोसिस)** | रेबीज (कुत्ते), प्लेग (चूहे) |
| **पर्यावरणीय** | मिट्टी (टेटनस), पानी (कॉलेरा) |

:::tip
**इस कड़ी को तोड़ें:**
- मामलों का उपचार
- वाहकों की पहचान और उपचार
- पशु नियंत्रण
- पर्यावरण स्वच्छता
:::

---

## 🚪 कड़ी 3: निकास द्वार

| द्वार | उदाहरण |
|:------|:-------|
| **श्वसन पथ** | TB, इन्फ्लूएंजा, COVID-19 |
| **GI पथ** | कॉलेरा, टाइफाइड (मल) |
| **मूत्रजननांगी** | HIV, गोनोरिया |
| **त्वचा/रक्त** | HIV, हेपेटाइटिस B |
| **ट्रांसप्लेसेंटल** | HIV, रूबेला (माँ से भ्रूण) |

---

## 🚗 कड़ी 4: संचरण का तरीका

### संपर्क संचरण

| प्रकार | विवरण | उदाहरण |
|:-------|:------|:-------|
| **प्रत्यक्ष** | व्यक्ति-से-व्यक्ति | STIs, त्वचा संक्रमण |
| **अप्रत्यक्ष** | फोमाइट्स द्वारा | सामान्य सर्दी |
| **ड्रॉपलेट** | बड़ी बूंदें >5μm | इन्फ्लूएंजा |

### अन्य तरीके

| तरीका | विवरण | उदाहरण |
|:------|:------|:-------|
| **वायुजनित** | छोटे कण <5μm | TB, खसरा |
| **वाहन** | दूषित भोजन/पानी | कॉलेरा, टाइफाइड |
| **वेक्टर** | कीड़ों द्वारा | मलेरिया, डेंगू |

:::tip
**इस कड़ी को तोड़ें:**
- हाथ स्वच्छता
- मानक सावधानियां
- पृथक्करण
- वेक्टर नियंत्रण
:::

---

## 🚪 कड़ी 5: प्रवेश द्वार

| द्वार | उदाहरण |
|:------|:-------|
| **श्वसन** | साँस द्वारा (TB, COVID) |
| **GI पथ** | निगलना (कॉलेरा) |
| **मूत्रजननांगी** | यौन संपर्क (HIV) |
| **त्वचा** | घाव, काटना, सुई |
| **श्लेष्मा झिल्ली** | आंख, नाक, मुंह |

---

## 👤 कड़ी 6: संवेदनशील मेजबान

### संवेदनशीलता प्रभावित करने वाले कारक

| कारक | उच्च जोखिम |
|:-----|:----------|
| **आयु** | शिशु, बुजुर्ग |
| **प्रतिरक्षा** | टीका न लगा, प्रतिरक्षा कमजोर |
| **पोषण** | कुपोषित |
| **पुरानी बीमारी** | मधुमेह, HIV, कैंसर |

:::tip
**इस कड़ी को तोड़ें:**
- टीकाकरण
- अच्छा पोषण
- अंतर्निहित बीमारियों का उपचार
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. संक्रमण श्रृंखला में 6 कड़ियां
2. कोई भी कड़ी तोड़ना = संक्रमण रोकना
3. भंडार = जहां रोगजनक रहता है
4. निकास द्वार = कैसे छोड़ता है
5. संचरण = कैसे फैलता है
6. प्रवेश द्वार = कैसे प्रवेश करता है
7. संवेदनशील मेजबान = कौन संक्रमित हो सकता है
8. हाथ स्वच्छता संचरण कड़ी तोड़ती है
:::
`
  },
  {
    id: 7,
    titleEn: "Modes of Disease Transmission",
    titleHi: "रोग संचरण के तरीके",
    contentEn: `
# 🚀 Modes of Disease Transmission

---

## 📖 Overview

> **Transmission** is the transfer of infectious agent from reservoir to susceptible host. Understanding modes helps implement appropriate precautions.

---

## 🤝 Direct Transmission

### Person-to-Person Contact

| Type | Examples |
|:-----|:---------|
| **Skin-to-skin** | Scabies, Impetigo |
| **Sexual contact** | HIV, Syphilis, Gonorrhea |
| **Kissing** | Herpes, Mononucleosis |

### Droplet Transmission

:::info
**Characteristics:**
- Large droplets (>5 micrometers)
- Produced by coughing, sneezing, talking
- Travel short distance (<1 meter)
- Fall quickly due to gravity
- Requires close contact
:::

**Diseases spread by droplets:**
- Influenza
- Common cold
- Pertussis (whooping cough)
- Meningococcal meningitis
- Diphtheria, Mumps, Rubella

### Vertical Transmission (Mother to Child)

| Timing | Diseases |
|:-------|:---------|
| **Transplacental** | Rubella, Syphilis, HIV, Toxoplasmosis |
| **During delivery** | HIV, Hepatitis B, GBS, Gonorrhea |
| **Breastfeeding** | HIV (without ARV) |

---

## 🌬️ Airborne Transmission

:::warning
**Key Features:**
- Small particles (<5 micrometers)
- Remain suspended in air for long periods
- Can travel long distances
- Requires special ventilation controls
:::

### Airborne Diseases

| Disease | Agent |
|:--------|:------|
| **Tuberculosis** | Mycobacterium tuberculosis |
| **Measles** | Measles virus |
| **Chickenpox** | Varicella virus |
| **COVID-19** | SARS-CoV-2 (some situations) |

### Prevention

| Measure | Purpose |
|:--------|:--------|
| **Negative pressure rooms** | Prevent air escape |
| **N95 respirators** | Filter small particles |
| **Adequate ventilation** | Dilute airborne particles |
| **UV germicidal** | Kill airborne pathogens |

---

## 🍽️ Vehicle Transmission

### Food-borne

| Disease | Agent | Source |
|:--------|:------|:-------|
| **Typhoid** | Salmonella typhi | Contaminated food |
| **Cholera** | Vibrio cholerae | Contaminated seafood |
| **Hepatitis A** | HAV | Shellfish |
| **Botulism** | C. botulinum | Canned foods |
| **Salmonellosis** | Salmonella | Eggs, poultry |

### Water-borne

| Disease | Agent |
|:--------|:------|
| **Cholera** | Vibrio cholerae |
| **Typhoid** | Salmonella typhi |
| **Hepatitis A/E** | Hepatitis viruses |
| **Polio** | Poliovirus |
| **Giardiasis** | Giardia lamblia |

### Blood-borne

| Disease | Agent |
|:--------|:------|
| **HIV** | HIV |
| **Hepatitis B** | HBV |
| **Hepatitis C** | HCV |
| **Malaria** | Plasmodium (transfusion) |

---

## 🦟 Vector-borne Transmission

### Types

| Type | Description | Examples |
|:-----|:------------|:---------|
| **Mechanical** | Passive transfer | Flies carrying Shigella |
| **Biological** | Pathogen multiplies in vector | Mosquito (Malaria, Dengue) |

### Important Vector-borne Diseases

| Disease | Vector | Agent |
|:--------|:-------|:------|
| **Malaria** | Anopheles mosquito | Plasmodium |
| **Dengue** | Aedes mosquito | Dengue virus |
| **Chikungunya** | Aedes mosquito | Chikungunya virus |
| **Japanese Encephalitis** | Culex mosquito | JE virus |
| **Plague** | Flea | Yersinia pestis |
| **Typhus** | Louse | Rickettsia |

---

## 🛡️ Prevention by Transmission Mode

| Mode | Prevention |
|:-----|:-----------|
| **Direct Contact** | Hand hygiene, gloves, safe sex |
| **Droplet** | Masks, distance (>1 meter) |
| **Airborne** | N95, negative pressure, ventilation |
| **Food/Water** | Cooking, boiling water, chlorination |
| **Blood-borne** | Safe injection, screening blood |
| **Vector** | Bed nets, repellents, source reduction |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Droplets = Large (>5μm), travel <1 meter
2. Airborne = Small (<5μm), travel far
3. TB, Measles, Chickenpox = Airborne
4. Influenza, Pertussis = Droplet
5. Malaria = Anopheles, Dengue = Aedes
6. N95 for airborne, surgical mask for droplet
7. Blood-borne: HIV, HBV, HCV
8. Water-borne: Cholera, Typhoid, Polio
:::
`,
    contentHi: `
# 🚀 रोग संचरण के तरीके

---

## 📖 अवलोकन

> **संचरण** संक्रामक एजेंट का भंडार से संवेदनशील मेजबान तक स्थानांतरण है।

---

## 🤝 प्रत्यक्ष संचरण

### व्यक्ति-से-व्यक्ति संपर्क

| प्रकार | उदाहरण |
|:-------|:-------|
| **त्वचा-से-त्वचा** | स्केबीज, इम्पेटिगो |
| **यौन संपर्क** | HIV, सिफलिस, गोनोरिया |
| **चुंबन** | हर्पीस |

### ड्रॉपलेट संचरण

:::info
**विशेषताएं:**
- बड़ी बूंदें (>5 माइक्रोमीटर)
- खांसी, छींक, बोलने से उत्पन्न
- कम दूरी (<1 मीटर) तय करती हैं
- गुरुत्वाकर्षण से जल्दी गिरती हैं
:::

**ड्रॉपलेट से फैलने वाले रोग:**
- इन्फ्लूएंजा, सामान्य सर्दी
- काली खांसी, मेनिंगोकोकल मेनिन्जाइटिस
- डिप्थीरिया, मम्प्स, रूबेला

### ऊर्ध्वाधर संचरण (माँ से बच्चे)

| समय | रोग |
|:----|:-----|
| **ट्रांसप्लेसेंटल** | रूबेला, सिफलिस, HIV |
| **प्रसव के दौरान** | HIV, हेपेटाइटिस B |
| **स्तनपान** | HIV (ARV के बिना) |

---

## 🌬️ वायुजनित संचरण

:::warning
**मुख्य विशेषताएं:**
- छोटे कण (<5 माइक्रोमीटर)
- हवा में लंबे समय तक निलंबित
- लंबी दूरी तय कर सकते हैं
- विशेष वेंटिलेशन आवश्यक
:::

### वायुजनित रोग

| रोग | एजेंट |
|:----|:------|
| **TB** | माइकोबैक्टीरियम ट्यूबरकुलोसिस |
| **खसरा** | खसरा वायरस |
| **चिकनपॉक्स** | वैरिसेला वायरस |
| **COVID-19** | SARS-CoV-2 |

### रोकथाम

| उपाय | उद्देश्य |
|:-----|:--------|
| **नेगेटिव प्रेशर कमरे** | हवा का बाहर जाना रोकना |
| **N95 रेस्पिरेटर** | छोटे कणों को फ़िल्टर |
| **पर्याप्त वेंटिलेशन** | कणों को पतला करना |

---

## 🍽️ वाहन संचरण

### खाद्य-जनित

| रोग | एजेंट | स्रोत |
|:----|:------|:-----|
| **टाइफाइड** | साल्मोनेला | दूषित भोजन |
| **कॉलेरा** | विब्रियो | समुद्री भोजन |
| **हेपेटाइटिस A** | HAV | शेलफिश |
| **साल्मोनेलोसिस** | साल्मोनेला | अंडे, मुर्गी |

### जल-जनित

| रोग | एजेंट |
|:----|:------|
| **कॉलेरा** | विब्रियो कॉलेरा |
| **टाइफाइड** | साल्मोनेला टाइफी |
| **हेपेटाइटिस A/E** | हेपेटाइटिस वायरस |
| **पोलियो** | पोलियोवायरस |

### रक्त-जनित

| रोग | एजेंट |
|:----|:------|
| **HIV** | HIV |
| **हेपेटाइटिस B** | HBV |
| **हेपेटाइटिस C** | HCV |

---

## 🦟 वेक्टर-जनित संचरण

### महत्वपूर्ण वेक्टर-जनित रोग

| रोग | वेक्टर | एजेंट |
|:----|:-------|:------|
| **मलेरिया** | एनोफिलीज मच्छर | प्लाज्मोडियम |
| **डेंगू** | एडीज मच्छर | डेंगू वायरस |
| **चिकनगुनिया** | एडीज मच्छर | चिकनगुनिया वायरस |
| **जापानी इन्सेफेलाइटिस** | क्यूलेक्स मच्छर | JE वायरस |
| **प्लेग** | पिस्सू | यर्सीनिया पेस्टिस |

---

## 🛡️ संचरण मोड द्वारा रोकथाम

| मोड | रोकथाम |
|:----|:--------|
| **प्रत्यक्ष संपर्क** | हाथ स्वच्छता, दस्ताने |
| **ड्रॉपलेट** | मास्क, दूरी (>1 मीटर) |
| **वायुजनित** | N95, नेगेटिव प्रेशर |
| **खाद्य/जल** | पकाना, उबालना, क्लोरीनीकरण |
| **रक्त-जनित** | सुरक्षित इंजेक्शन, रक्त स्क्रीनिंग |
| **वेक्टर** | मच्छरदानी, रिपेलेंट |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. ड्रॉपलेट = बड़ी (>5μm), <1 मीटर
2. वायुजनित = छोटी (<5μm), दूर तक
3. TB, खसरा, चिकनपॉक्स = वायुजनित
4. इन्फ्लूएंजा, काली खांसी = ड्रॉपलेट
5. मलेरिया = एनोफिलीज, डेंगू = एडीज
6. वायुजनित के लिए N95
7. रक्त-जनित: HIV, HBV, HCV
8. जल-जनित: कॉलेरा, टाइफाइड, पोलियो
:::
`
  },
  {
    id: 8,
    titleEn: "Sterilization & Disinfection Methods",
    titleHi: "बंध्याकरण और कीटाणुशोधन विधियां",
    contentEn: `
# 🔥 Sterilization & Disinfection Methods

---

## 📖 Key Definitions

| Term | Definition |
|:-----|:-----------|
| **Sterilization** | Complete elimination of ALL microbial life, including spores |
| **Disinfection** | Elimination of most pathogens (NOT spores) |
| **Antisepsis** | Reduction of microbes on living tissue |
| **Decontamination** | Making items safe to handle |
| **Cleaning** | Removal of visible soil and organic matter |

---

## 📊 Spaulding Classification

| Category | Risk | Processing | Examples |
|:---------|:-----|:-----------|:---------|
| **Critical** | High | Sterilization | Surgical instruments, needles, implants |
| **Semi-critical** | Medium | High-level disinfection | Endoscopes, respiratory equipment |
| **Non-critical** | Low | Low-level disinfection | BP cuffs, stethoscopes, bed rails |

---

## 🔥 Physical Methods of Sterilization

### Heat Methods

| Method | Temperature | Time | Use |
|:-------|:------------|:-----|:----|
| **Autoclaving (Moist Heat)** | 121°C, 15 psi | 15-30 min | Surgical instruments, dressings |
| **Dry Heat Oven** | 160-180°C | 1-2 hours | Glassware, powders, oils |
| **Boiling** | 100°C | 20 min | Emergency (disinfection only) |
| **Pasteurization** | 72°C | 15 seconds | Milk, beverages |
| **Incineration** | Complete destruction | - | Pathological waste |

:::success
**Gold Standard:** Autoclaving (moist heat under pressure)
- Kills by protein denaturation
- Most reliable method
- Cannot use for: Heat-sensitive items, oils
:::

### Other Physical Methods

| Method | Use |
|:-------|:----|
| **UV Radiation** | Surface/air disinfection, limited penetration |
| **Ionizing Radiation** | Industrial sterilization (disposables) |
| **Filtration** | Heat-sensitive liquids, air (0.22 μm pore size) |

---

## 🧪 Chemical Disinfectants

### Levels of Disinfection

| Level | Kills | Examples |
|:------|:------|:---------|
| **High-level** | All except some spores | Glutaraldehyde, OPA, H₂O₂ |
| **Intermediate** | Most bacteria, viruses, fungi | Alcohols, chlorine, phenolics |
| **Low-level** | Most bacteria, some viruses | Quaternary ammonium (Quats) |

### Common Chemical Agents

| Agent | Concentration | Use |
|:------|:-------------|:----|
| **Alcohol** | 60-90% (70% optimal) | Skin antisepsis, surfaces |
| **Bleach (NaOCl)** | 0.5-1% | Surfaces, blood spills |
| **Glutaraldehyde** | 2% | Endoscopes (20-90 min contact) |
| **Chlorhexidine** | 2-4% | Surgical hand scrub |
| **Povidone-Iodine** | 10% | Skin antiseptic |
| **H₂O₂** | 3-6% | Surfaces, wound care |

### Bleach Dilutions

| Use | Concentration | Dilution |
|:----|:-------------|:---------|
| **General cleaning** | 0.5% | 1:10 of 5% bleach |
| **Blood spills** | 1% | 1:5 of 5% bleach |
| **Water treatment** | 0.5-1 mg/L | Few drops per liter |

---

## 📋 Sterilization Monitoring

| Type | What It Checks |
|:-----|:---------------|
| **Physical** | Temperature, pressure, time gauges |
| **Chemical** | Indicator tape, strips (color change) |
| **Biological** | Spore tests (Geobacillus) - Gold standard |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Sterilization = kills ALL (including spores)
2. Disinfection = kills most (NOT spores)
3. Autoclave = 121°C, 15 psi, 15-30 min
4. 70% alcohol is OPTIMAL (not 100%)
5. Critical items = Sterilization required
6. Bleach 0.5% for general, 1% for blood spills
7. Biological indicator = Gold standard monitoring
8. Glutaraldehyde for endoscopes (high-level)
:::
`,
    contentHi: `
# 🔥 बंध्याकरण और कीटाणुशोधन विधियां

---

## 📖 मुख्य परिभाषाएं

| शब्द | परिभाषा |
|:----|:--------|
| **बंध्याकरण** | बीजाणुओं सहित सभी सूक्ष्मजीवी जीवन का पूर्ण उन्मूलन |
| **कीटाणुशोधन** | अधिकांश रोगजनकों का उन्मूलन (बीजाणु नहीं) |
| **एंटीसेप्सिस** | जीवित ऊतक पर सूक्ष्मजीवों की कमी |
| **सफाई** | दृश्य मिट्टी और कार्बनिक पदार्थ हटाना |

---

## 📊 स्पॉल्डिंग वर्गीकरण

| श्रेणी | जोखिम | प्रसंस्करण | उदाहरण |
|:-------|:------|:----------|:-------|
| **क्रिटिकल** | उच्च | बंध्याकरण | सर्जिकल उपकरण, सुई |
| **सेमी-क्रिटिकल** | मध्यम | उच्च-स्तरीय कीटाणुशोधन | एंडोस्कोप |
| **नॉन-क्रिटिकल** | निम्न | निम्न-स्तरीय कीटाणुशोधन | BP कफ |

---

## 🔥 भौतिक बंध्याकरण विधियां

### ताप विधियां

| विधि | तापमान | समय | उपयोग |
|:-----|:-------|:----|:------|
| **ऑटोक्लेविंग** | 121°C, 15 psi | 15-30 मिनट | सर्जिकल उपकरण |
| **शुष्क ताप ओवन** | 160-180°C | 1-2 घंटे | कांच, पाउडर |
| **उबालना** | 100°C | 20 मिनट | आपातकालीन |
| **पाश्चुरीकरण** | 72°C | 15 सेकंड | दूध |
| **भस्मीकरण** | पूर्ण विनाश | - | पैथोलॉजिकल अपशिष्ट |

:::success
**स्वर्ण मानक:** ऑटोक्लेविंग (दबाव में नम ताप)
- प्रोटीन विकृतीकरण से मारता है
- सबसे विश्वसनीय विधि
:::

---

## 🧪 रासायनिक कीटाणुनाशक

### कीटाणुशोधन स्तर

| स्तर | मारता है | उदाहरण |
|:-----|:--------|:-------|
| **उच्च-स्तरीय** | कुछ बीजाणुओं को छोड़कर सभी | ग्लूटारल्डिहाइड, H₂O₂ |
| **मध्यवर्ती** | अधिकांश बैक्टीरिया, वायरस | अल्कोहल, क्लोरीन |
| **निम्न-स्तरीय** | अधिकांश बैक्टीरिया | क्वाटरनरी अमोनियम |

### सामान्य रासायनिक एजेंट

| एजेंट | सांद्रता | उपयोग |
|:------|:--------|:------|
| **अल्कोहल** | 60-90% (70% इष्टतम) | त्वचा, सतह |
| **ब्लीच** | 0.5-1% | सतह, रक्त |
| **ग्लूटारल्डिहाइड** | 2% | एंडोस्कोप |
| **क्लोरहेक्सिडीन** | 2-4% | सर्जिकल स्क्रब |
| **पोविडोन-आयोडीन** | 10% | त्वचा एंटीसेप्टिक |

### ब्लीच तनुकरण

| उपयोग | सांद्रता | तनुकरण |
|:------|:--------|:-------|
| **सामान्य सफाई** | 0.5% | 5% ब्लीच का 1:10 |
| **रक्त** | 1% | 5% ब्लीच का 1:5 |

---

## 📋 बंध्याकरण निगरानी

| प्रकार | क्या जांचता है |
|:-------|:-------------|
| **भौतिक** | तापमान, दबाव, समय गेज |
| **रासायनिक** | इंडिकेटर टेप (रंग परिवर्तन) |
| **जैविक** | बीजाणु परीक्षण - स्वर्ण मानक |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. बंध्याकरण = सभी मारता है (बीजाणु भी)
2. कीटाणुशोधन = अधिकांश (बीजाणु नहीं)
3. ऑटोक्लेव = 121°C, 15 psi, 15-30 मिनट
4. 70% अल्कोहल इष्टतम है (100% नहीं)
5. क्रिटिकल आइटम = बंध्याकरण आवश्यक
6. ब्लीच 0.5% सामान्य, 1% रक्त के लिए
7. जैविक संकेतक = स्वर्ण मानक निगरानी
:::
`
  },
  {
    id: 9,
    titleEn: "Specimen Collection & Handling",
    titleHi: "नमूना संग्रह और प्रबंधन",
    contentEn: `
# 🧪 Specimen Collection & Handling

---

## 📖 Importance

> Accurate diagnosis depends on quality specimen. Poor collection = false results!

:::info
**Principles of Collection:**
1. Collect BEFORE starting antibiotics when possible
2. Collect from actual site of infection
3. Use aseptic technique
4. Adequate quantity
5. Appropriate container
6. Proper labeling
7. Timely transport
:::

---

## 🩸 Blood Specimen Collection

### Venipuncture Sites
- **Antecubital fossa** (most common)
- Dorsum of hand
- **Avoid:** Edematous areas, infected sites, IV lines

### Blood Culture Collection

| Step | Action |
|:-----|:-------|
| 1 | Prepare supplies |
| 2 | Perform hand hygiene |
| 3 | Apply tourniquet, select site |
| 4 | Clean with 70% alcohol, then chlorhexidine |
| 5 | **Allow to dry (critical!)** |
| 6 | Clean bottle tops with alcohol |
| 7 | Collect blood (10 mL/bottle for adults) |
| 8 | Label at bedside |
| 9 | Transport promptly |

:::warning
**Key Points for Blood Cultures:**
- Collect 2-3 sets from different sites
- Collect BEFORE antibiotics if possible
- Volume is critical (more blood = higher yield)
- Do NOT refrigerate
:::

### Peripheral Blood Smear (Malaria)
- Thick and thin smears
- Collect during fever spike
- Air dry, do NOT fix thick smear

---

## 💧 Urine Specimen Collection

### Types of Urine Specimens

| Type | Use |
|:-----|:----|
| **Random** | Routine urinalysis |
| **First morning** | Concentrated, best for routine |
| **Midstream clean-catch** | Culture |
| **Catheterized** | When clean-catch not possible |
| **Suprapubic aspirate** | Gold standard for babies |

### Clean-Catch Midstream Collection

**For Males:**
1. Wash hands
2. Retract foreskin, clean glans
3. Begin urinating into toilet
4. Collect midstream in sterile container
5. Finish in toilet

**For Females:**
1. Wash hands
2. Spread labia, clean front to back
3. Begin urinating into toilet
4. Collect midstream in sterile container

:::tip
**Key Points:**
- Morning specimen preferred for culture
- Process within 2 hours or refrigerate
- Minimum 10-20 mL for culture
:::

---

## 💩 Stool Specimen Collection

### Guidelines
- Collect in clean, dry container
- Avoid urine contamination
- For culture: small amount sufficient
- For ova and parasites: 3 specimens on different days

| Test | Special Instructions |
|:-----|:---------------------|
| **O&P** | Collect in preservative (PVA, formalin) |
| **C. difficile** | Do NOT refrigerate |
| **Occult blood** | Dietary restrictions may apply |
| **Rotavirus** | Fresh specimen, test quickly |

---

## 🫁 Respiratory Specimens

### Sputum Collection
- Early morning specimen (accumulated secretions)
- Rinse mouth with water (NOT mouthwash)
- Deep cough from lower respiratory tract
- Minimum 5 mL
- For AFB: collect 3 early morning specimens

**Quality Assessment:**
| Quality | WBC | Epithelial Cells |
|:--------|:----|:-----------------|
| **Good** | >25/LPF | <10/LPF |
| **Poor/Saliva** | Few | >25/LPF |

### Throat Swab
1. Use tongue depressor
2. Swab both tonsils and posterior pharynx
3. **Avoid:** tongue, teeth, cheeks
4. Place in transport medium

---

## 🩹 Wound Specimens

### Collection Guidelines
- Clean surrounding area first
- Collect from active infection site
- Avoid superficial wound debris
- Use sterile swab or aspirate

### Abscess
- Aspirate pus with syringe (best)
- Or swab deep area after drainage

---

## 📦 Specimen Transport

### General Rules

| Specimen | Transport |
|:---------|:----------|
| **Most bacteria** | Within 2 hours, room temperature |
| **Urine** | Within 2 hours or refrigerate |
| **CSF** | Immediately, keep warm |
| **Anaerobes** | Special anaerobic transport |
| **Viruses** | Cold (4°C), viral transport medium |

:::danger
**NEVER:**
- Leave specimens in direct sunlight
- Freeze (unless specified)
- Delay transport unnecessarily
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Collect specimens BEFORE antibiotics
2. Blood culture: 2-3 sets, 10 mL each
3. Clean-catch urine: Midstream, sterile container
4. Sputum: Early morning, deep cough
5. Throat swab: Tonsils + posterior pharynx
6. Transport most specimens within 2 hours
7. CSF: Immediately, keep warm
8. Proper labeling is essential
:::
`,
    contentHi: `
# 🧪 नमूना संग्रह और प्रबंधन

---

## 📖 महत्व

> सटीक निदान गुणवत्ता नमूने पर निर्भर करता है। खराब संग्रह = गलत परिणाम!

:::info
**संग्रह के सिद्धांत:**
1. जब संभव हो एंटीबायोटिक्स शुरू करने से पहले संग्रह करें
2. संक्रमण की वास्तविक साइट से संग्रह करें
3. एसेप्टिक तकनीक का उपयोग करें
4. पर्याप्त मात्रा
5. उचित कंटेनर
6. उचित लेबलिंग
7. समय पर परिवहन
:::

---

## 🩸 रक्त नमूना संग्रह

### वेनिपंक्चर साइट
- **एंटीक्यूबिटल फोसा** (सबसे आम)
- हाथ का पृष्ठ
- **बचें:** एडेमेटस क्षेत्र, संक्रमित साइट, IV लाइन

### रक्त कल्चर संग्रह

| चरण | क्रिया |
|:----|:------|
| 1 | आपूर्ति तैयार करें |
| 2 | हाथ स्वच्छता करें |
| 3 | टूर्निकेट लगाएं, साइट चुनें |
| 4 | 70% अल्कोहल से साफ करें, फिर क्लोरहेक्सिडीन |
| 5 | **सूखने दें (महत्वपूर्ण!)** |
| 6 | बोतल टॉप को अल्कोहल से साफ करें |
| 7 | रक्त संग्रह करें (वयस्कों के लिए 10 mL/बोतल) |
| 8 | बेडसाइड पर लेबल करें |
| 9 | तुरंत परिवहन करें |

:::warning
**रक्त कल्चर के मुख्य बिंदु:**
- विभिन्न साइटों से 2-3 सेट संग्रह करें
- यदि संभव हो एंटीबायोटिक्स से पहले संग्रह करें
- मात्रा महत्वपूर्ण है (अधिक रक्त = उच्च उपज)
- रेफ्रिजरेट न करें
:::

---

## 💧 मूत्र नमूना संग्रह

### मूत्र नमूनों के प्रकार

| प्रकार | उपयोग |
|:-------|:------|
| **रैंडम** | नियमित यूरिनैलिसिस |
| **सुबह का पहला** | सांद्र, नियमित के लिए सर्वोत्तम |
| **मिडस्ट्रीम क्लीन-कैच** | कल्चर |
| **कैथेटराइज्ड** | जब क्लीन-कैच संभव नहीं |
| **सुप्राप्यूबिक एस्पिरेट** | शिशुओं के लिए स्वर्ण मानक |

### क्लीन-कैच मिडस्ट्रीम संग्रह

**पुरुषों के लिए:**
1. हाथ धोएं
2. फोरस्किन पीछे करें, ग्लैंस साफ करें
3. शौचालय में पेशाब शुरू करें
4. स्टेराइल कंटेनर में मिडस्ट्रीम संग्रह करें
5. शौचालय में समाप्त करें

**महिलाओं के लिए:**
1. हाथ धोएं
2. लेबिया फैलाएं, आगे से पीछे साफ करें
3. शौचालय में पेशाब शुरू करें
4. स्टेराइल कंटेनर में मिडस्ट्रीम संग्रह करें

:::tip
**मुख्य बिंदु:**
- कल्चर के लिए सुबह का नमूना पसंद
- 2 घंटे के भीतर प्रोसेस करें या रेफ्रिजरेट करें
- कल्चर के लिए न्यूनतम 10-20 mL
:::

---

## 💩 मल नमूना संग्रह

### दिशानिर्देश
- स्वच्छ, सूखे कंटेनर में संग्रह करें
- मूत्र संदूषण से बचें
- ओवा और परजीवी के लिए: विभिन्न दिनों में 3 नमूने

| परीक्षण | विशेष निर्देश |
|:--------|:-------------|
| **O&P** | प्रिजर्वेटिव में संग्रह |
| **C. difficile** | रेफ्रिजरेट न करें |
| **रोटावायरस** | ताजा नमूना, जल्दी परीक्षण |

---

## 🫁 श्वसन नमूने

### थूक संग्रह
- सुबह का नमूना (संचित स्राव)
- पानी से मुंह धोएं (माउथवॉश नहीं)
- निचले श्वसन पथ से गहरी खांसी
- न्यूनतम 5 mL
- AFB के लिए: 3 सुबह के नमूने संग्रह करें

### गले का स्वैब
1. जीभ दबाने वाला उपयोग करें
2. दोनों टॉन्सिल और पश्च ग्रसनी को स्वैब करें
3. **बचें:** जीभ, दांत, गाल
4. परिवहन माध्यम में रखें

---

## 📦 नमूना परिवहन

### सामान्य नियम

| नमूना | परिवहन |
|:------|:-------|
| **अधिकांश बैक्टीरिया** | 2 घंटे के भीतर, कमरे का तापमान |
| **मूत्र** | 2 घंटे के भीतर या रेफ्रिजरेट |
| **CSF** | तुरंत, गर्म रखें |
| **वायरस** | ठंडा (4°C), वायरल ट्रांसपोर्ट मीडियम |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. एंटीबायोटिक्स से पहले नमूने संग्रह करें
2. रक्त कल्चर: 2-3 सेट, प्रत्येक 10 mL
3. क्लीन-कैच मूत्र: मिडस्ट्रीम, स्टेराइल कंटेनर
4. थूक: सुबह, गहरी खांसी
5. गला स्वैब: टॉन्सिल + पश्च ग्रसनी
6. अधिकांश नमूने 2 घंटे में परिवहन
7. CSF: तुरंत, गर्म रखें
8. उचित लेबलिंग आवश्यक
:::
`
  },
  {
    id: 10,
    titleEn: "Healthcare-Associated Infections",
    titleHi: "स्वास्थ्य सेवा संबंधित संक्रमण",
    contentEn: `
# 🏥 Healthcare-Associated Infections (HAI)

---

## 📖 Definition

> **Healthcare-Associated Infections (HAI)** are infections acquired in healthcare settings that were NOT present or incubating at admission. Also called nosocomial infections.

:::info
**Criteria:**
- Develops ≥48 hours after admission
- Related to healthcare procedures
- Not present on admission
:::

### Burden
- Affects **5-10%** of hospitalized patients
- Increases mortality, morbidity, length of stay
- Significant healthcare costs
- **Many are preventable!**

---

## 🏥 Common Types of HAI

### 1. Urinary Tract Infections (UTI)

:::danger
**Most common HAI (40%)**
- 80% are catheter-associated (CAUTI)
:::

| Risk Factors | Prevention |
|:-------------|:-----------|
| Catheterization | Avoid unnecessary catheters |
| Duration of catheter | Early removal |
| Female sex | Aseptic insertion |

### 2. Surgical Site Infections (SSI)

**20% of HAIs**

| Classification | Location |
|:---------------|:---------|
| **Superficial** | Skin, subcutaneous |
| **Deep** | Fascia, muscle |
| **Organ/Space** | Internal organs |

| Risk Factors | Prevention |
|:-------------|:-----------|
| Prolonged surgery | Proper skin prep |
| Contamination | Prophylactic antibiotics |
| Diabetes | Sterile technique |

### 3. Hospital-Acquired Pneumonia

| Type | Description |
|:-----|:------------|
| **HAP** | Hospital-acquired pneumonia |
| **VAP** | Ventilator-associated pneumonia |

- **High mortality (30-50%)**
- Risk factors: Intubation, aspiration, impaired consciousness

### 4. Bloodstream Infections (BSI)

- **CLABSI** = Central line-associated BSI
- High mortality
- Risk factors: Central venous catheters, duration

---

## 🦠 Common Nosocomial Pathogens

### Bacteria

| Organism | Common Infections |
|:---------|:------------------|
| **MRSA** | SSI, pneumonia, BSI |
| **Coag-negative Staph** | BSI (catheter-related) |
| **VRE** | UTI, SSI |
| **E. coli** | UTI |
| **Pseudomonas** | Pneumonia, UTI, wounds |
| **Klebsiella** | UTI, pneumonia |
| **C. difficile** | Diarrhea, colitis |

### Multidrug-Resistant Organisms (MDROs)

| Abbreviation | Full Name |
|:-------------|:----------|
| **MRSA** | Methicillin-resistant S. aureus |
| **VRE** | Vancomycin-resistant Enterococcus |
| **ESBL** | Extended-spectrum beta-lactamase producers |
| **CRE** | Carbapenem-resistant Enterobacteriaceae |

---

## 🛡️ Prevention of HAIs

### Standard Precautions (For ALL Patients)

1. Hand hygiene
2. PPE based on exposure risk
3. Respiratory hygiene/cough etiquette
4. Safe injection practices
5. Sterile instruments
6. Clean environment

### Device-Related Bundles

**CAUTI Prevention Bundle:**
| Element | Action |
|:--------|:-------|
| Insert only when necessary | Avoid unnecessary catheters |
| Aseptic technique | Proper insertion |
| Closed drainage | Maintain closed system |
| Daily assessment | Remove when not needed |
| Keep bag below bladder | Prevent backflow |

**CLABSI Prevention Bundle:**
| Element | Action |
|:--------|:-------|
| Hand hygiene | Before insertion |
| Maximal barrier | Full sterile draping |
| Chlorhexidine skin prep | 2% chlorhexidine |
| Optimal site | Subclavian preferred |
| Daily review | Remove when not needed |

**VAP Prevention Bundle:**
| Element | Action |
|:--------|:-------|
| Head elevation | 30-45 degrees |
| Sedation vacation | Daily wake-up trial |
| DVT prophylaxis | Prevent clots |
| Oral care | Chlorhexidine |
| Weaning protocol | Early extubation |

---

## 🔬 Antimicrobial Stewardship

:::success
**Key Principles:**
- Appropriate antibiotic selection
- Correct dose and duration
- De-escalation when possible
- Avoid unnecessary antibiotics
- Reduces resistance development
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. HAI develops ≥48 hours after admission
2. UTI is most common HAI (40%)
3. 80% of UTIs are catheter-associated
4. MRSA, VRE, ESBL, CRE = Important MDROs
5. Bundle approach for prevention
6. Hand hygiene = Most important measure
7. Daily assessment for device removal
8. Antimicrobial stewardship reduces resistance
:::
`,
    contentHi: `
# 🏥 स्वास्थ्य सेवा संबंधित संक्रमण (HAI)

---

## 📖 परिभाषा

> **स्वास्थ्य सेवा संबंधित संक्रमण (HAI)** वे संक्रमण हैं जो स्वास्थ्य सेवा सेटिंग में प्राप्त होते हैं और प्रवेश पर मौजूद या इनक्यूबेट नहीं थे। इन्हें नोसोकोमियल संक्रमण भी कहते हैं।

:::info
**मानदंड:**
- प्रवेश के ≥48 घंटे बाद विकसित
- स्वास्थ्य सेवा प्रक्रियाओं से संबंधित
- प्रवेश पर मौजूद नहीं
:::

### बोझ
- **5-10%** अस्पताल में भर्ती रोगियों को प्रभावित
- मृत्यु दर, रुग्णता, रहने की अवधि बढ़ाता है
- महत्वपूर्ण स्वास्थ्य सेवा लागत
- **कई रोके जा सकते हैं!**

---

## 🏥 HAI के सामान्य प्रकार

### 1. मूत्र पथ संक्रमण (UTI)

:::danger
**सबसे आम HAI (40%)**
- 80% कैथेटर-संबंधित (CAUTI)
:::

| जोखिम कारक | रोकथाम |
|:-----------|:-------|
| कैथेटराइजेशन | अनावश्यक कैथेटर से बचें |
| कैथेटर की अवधि | जल्दी हटाना |
| महिला | एसेप्टिक इंसर्शन |

### 2. सर्जिकल साइट संक्रमण (SSI)

**HAI का 20%**

| वर्गीकरण | स्थान |
|:---------|:------|
| **सतही** | त्वचा, चमड़े के नीचे |
| **गहरा** | फेशिया, मांसपेशी |
| **अंग/स्पेस** | आंतरिक अंग |

### 3. अस्पताल-अधिग्रहित निमोनिया

| प्रकार | विवरण |
|:-------|:------|
| **HAP** | अस्पताल-अधिग्रहित निमोनिया |
| **VAP** | वेंटिलेटर-संबंधित निमोनिया |

- **उच्च मृत्यु दर (30-50%)**

### 4. रक्तप्रवाह संक्रमण (BSI)

- **CLABSI** = सेंट्रल लाइन-संबंधित BSI
- उच्च मृत्यु दर
- जोखिम कारक: सेंट्रल वेनस कैथेटर

---

## 🦠 सामान्य नोसोकोमियल रोगजनक

### बैक्टीरिया

| जीव | सामान्य संक्रमण |
|:----|:---------------|
| **MRSA** | SSI, निमोनिया, BSI |
| **VRE** | UTI, SSI |
| **E. coli** | UTI |
| **स्यूडोमोनास** | निमोनिया, UTI, घाव |
| **C. difficile** | दस्त, कोलाइटिस |

### बहुदवा प्रतिरोधी जीव (MDRO)

| संक्षिप्त | पूर्ण नाम |
|:---------|:---------|
| **MRSA** | मेथिसिलिन-प्रतिरोधी S. aureus |
| **VRE** | वैनकोमाइसिन-प्रतिरोधी एंटरोकोकस |
| **ESBL** | विस्तारित-स्पेक्ट्रम बीटा-लैक्टामेज |
| **CRE** | कार्बापेनेम-प्रतिरोधी एंटरोबैक्टीरियासी |

---

## 🛡️ HAI की रोकथाम

### मानक सावधानियां (सभी रोगियों के लिए)

1. हाथ स्वच्छता
2. एक्सपोजर जोखिम के आधार पर PPE
3. श्वसन स्वच्छता/खांसी शिष्टाचार
4. सुरक्षित इंजेक्शन प्रथाएं
5. स्टेराइल उपकरण
6. स्वच्छ वातावरण

### डिवाइस-संबंधित बंडल

**CAUTI रोकथाम बंडल:**
| तत्व | क्रिया |
|:-----|:------|
| जब आवश्यक हो तभी डालें | अनावश्यक कैथेटर से बचें |
| एसेप्टिक तकनीक | उचित इंसर्शन |
| बंद ड्रेनेज | बंद प्रणाली बनाए रखें |
| दैनिक मूल्यांकन | जब जरूरत न हो तो हटाएं |
| बैग मूत्राशय के नीचे | बैकफ्लो रोकें |

**CLABSI रोकथाम बंडल:**
| तत्व | क्रिया |
|:-----|:------|
| हाथ स्वच्छता | इंसर्शन से पहले |
| अधिकतम बैरियर | पूर्ण स्टेराइल ड्रेपिंग |
| क्लोरहेक्सिडीन स्किन प्रेप | 2% क्लोरहेक्सिडीन |
| इष्टतम साइट | सबक्लेवियन पसंदीदा |
| दैनिक समीक्षा | जब जरूरत न हो तो हटाएं |

**VAP रोकथाम बंडल:**
| तत्व | क्रिया |
|:-----|:------|
| सिर उठाना | 30-45 डिग्री |
| ओरल केयर | क्लोरहेक्सिडीन |
| वीनिंग प्रोटोकॉल | जल्दी एक्सट्यूबेशन |

---

## 🔬 रोगाणुरोधी स्टीवर्डशिप

:::success
**मुख्य सिद्धांत:**
- उपयुक्त एंटीबायोटिक चयन
- सही खुराक और अवधि
- जब संभव हो डी-एस्केलेशन
- अनावश्यक एंटीबायोटिक्स से बचें
- प्रतिरोध विकास कम करता है
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. HAI प्रवेश के ≥48 घंटे बाद विकसित
2. UTI सबसे आम HAI (40%)
3. 80% UTI कैथेटर-संबंधित
4. MRSA, VRE, ESBL, CRE = महत्वपूर्ण MDRO
5. रोकथाम के लिए बंडल दृष्टिकोण
6. हाथ स्वच्छता = सबसे महत्वपूर्ण उपाय
7. डिवाइस हटाने के लिए दैनिक मूल्यांकन
8. रोगाणुरोधी स्टीवर्डशिप प्रतिरोध कम करता है
:::
`
  }
];
