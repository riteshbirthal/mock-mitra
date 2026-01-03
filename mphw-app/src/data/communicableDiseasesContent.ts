export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const communicableDiseasesLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Communicable Diseases",
    titleHi: "संचारी रोगों का परिचय",
    contentEn: `
# 🦠 Introduction to Communicable Diseases

---

## 📖 What is a Communicable Disease?

> A **communicable disease** can be transmitted from one person to another or from animal to human.

---

## 🔗 Chain of Infection

:::info
**6 Links in the Chain:**
1. **Infectious Agent** - Pathogen (bacteria, virus)
2. **Reservoir** - Where agent lives (human, animal)
3. **Portal of Exit** - How it leaves (respiratory, GI)
4. **Mode of Transmission** - How it travels
5. **Portal of Entry** - How it enters new host
6. **Susceptible Host** - Person who can get infected
:::

**Breaking any link prevents transmission!**

---

## 📊 Classification

### By Causative Agent

| Agent | Examples |
|:------|:---------|
| **Bacterial** | TB, Typhoid, Cholera |
| **Viral** | HIV, Hepatitis, Measles |
| **Parasitic** | Malaria, Filariasis |
| **Fungal** | Candidiasis |

### By Mode of Transmission

| Mode | Examples |
|:-----|:---------|
| **Air-borne** | TB, Measles |
| **Water-borne** | Cholera, Typhoid |
| **Vector-borne** | Malaria, Dengue |
| **Contact** | STIs, Skin infections |
| **Fecal-oral** | Polio, Hepatitis A |

---

## 📈 Disease Patterns

| Pattern | Definition | Example |
|:--------|:-----------|:--------|
| **Endemic** | Constant presence | Malaria in some areas |
| **Epidemic** | Unusual increase | Cholera outbreak |
| **Pandemic** | Worldwide spread | COVID-19 |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 6 links in chain of infection
2. Breaking any link prevents transmission
3. Endemic = constant, Epidemic = unusual increase
4. Pandemic = worldwide
5. Vector = living carrier (mosquito)
6. Fomite = non-living carrier (doorknob)
:::
`,
    contentHi: `
# 🦠 संचारी रोगों का परिचय

---

## 📖 संचारी रोग क्या है?

> **संचारी रोग** एक व्यक्ति से दूसरे या जानवर से मनुष्य में फैल सकता है।

---

## 🔗 संक्रमण की श्रृंखला

:::info
**श्रृंखला में 6 कड़ियां:**
1. **संक्रामक एजेंट** - रोगजनक
2. **जलाशय** - जहां एजेंट रहता है
3. **निकास द्वार** - कैसे निकलता है
4. **संचरण का तरीका** - कैसे यात्रा करता है
5. **प्रवेश द्वार** - कैसे प्रवेश करता है
6. **अतिसंवेदनशील मेजबान** - जो संक्रमित हो सकता है
:::

**किसी भी कड़ी को तोड़ना संचरण रोकता है!**

---

## 📊 वर्गीकरण

### कारक एजेंट द्वारा

| एजेंट | उदाहरण |
|:------|:-------|
| **जीवाणु** | TB, टायफॉइड, हैजा |
| **विषाणु** | HIV, हेपेटाइटिस |
| **परजीवी** | मलेरिया, फाइलेरिया |

### संचरण के तरीके द्वारा

| तरीका | उदाहरण |
|:------|:-------|
| **वायु-जनित** | TB, खसरा |
| **जल-जनित** | हैजा, टायफॉइड |
| **वेक्टर-जनित** | मलेरिया, डेंगू |
| **मल-मौखिक** | पोलियो, हेपेटाइटिस A |

---

## 📈 रोग पैटर्न

| पैटर्न | परिभाषा | उदाहरण |
|:-------|:--------|:-------|
| **एंडेमिक** | निरंतर उपस्थिति | कुछ क्षेत्रों में मलेरिया |
| **एपिडेमिक** | असामान्य वृद्धि | हैजा प्रकोप |
| **पैंडेमिक** | विश्वव्यापी | COVID-19 |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. संक्रमण श्रृंखला में 6 कड़ियां
2. किसी भी कड़ी को तोड़ना संचरण रोकता है
3. एंडेमिक = निरंतर, एपिडेमिक = असामान्य वृद्धि
4. पैंडेमिक = विश्वव्यापी
:::
`
  },
  {
    id: 2,
    titleEn: "Malaria & Dengue",
    titleHi: "मलेरिया और डेंगू",
    contentEn: `
# 🦟 Malaria & Dengue

---

## 🔴 Malaria

### Causative Agent & Vector
- **Agent:** Plasmodium (P. vivax, P. falciparum)
- **Vector:** Female Anopheles mosquito
- **Bites:** Dusk to dawn

### Types

| Species | Fever Pattern | Severity |
|:--------|:-------------|:---------|
| **P. vivax** | Every 48 hours | Mild |
| **P. falciparum** | Irregular | Severe (cerebral) |

### Symptoms
- High fever with chills
- Rigor (shaking)
- Sweating
- Headache
- Body ache

### Diagnosis
- **RDT** (Rapid Diagnostic Test)
- **Blood smear** (Gold standard)

### Treatment
- **P. vivax:** Chloroquine + Primaquine
- **P. falciparum:** ACT (Artemisinin Combination Therapy)

---

## 🟡 Dengue

### Causative Agent & Vector
- **Agent:** Dengue virus (4 serotypes)
- **Vector:** Aedes aegypti mosquito
- **Bites:** Daytime (early morning, late afternoon)
- **Breeding:** Clean stagnant water

### Symptoms

| Phase | Symptoms |
|:------|:---------|
| **Febrile** | High fever, headache, body ache |
| **Critical** | Plasma leakage, bleeding |
| **Recovery** | Fluid reabsorption |

### Warning Signs

:::danger
**Refer Immediately:**
- Severe abdominal pain
- Persistent vomiting
- Bleeding (gums, nose)
- Lethargy
- Fluid accumulation
:::

### Treatment
- No specific antiviral
- Supportive care
- Fluid management
- Platelet monitoring

---

## 🛡️ Prevention

| Malaria | Dengue |
|:--------|:-------|
| Bed nets (LLIN) | Remove stagnant water |
| Indoor spraying | Cover water containers |
| Chemoprophylaxis | Use repellents |
| Anopheles control | Aedes control |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Malaria = Anopheles (night biter)
2. Dengue = Aedes (day biter)
3. P. falciparum = Most dangerous malaria
4. Dengue = Clean water breeding
5. Malaria RDT for diagnosis
6. Dengue = Platelet monitoring important
7. ACT for falciparum malaria
:::
`,
    contentHi: `
# 🦟 मलेरिया और डेंगू

---

## 🔴 मलेरिया

### कारक और वाहक
- **एजेंट:** प्लाज्मोडियम
- **वाहक:** मादा एनोफिलीज मच्छर
- **काटता है:** शाम से सुबह

### प्रकार

| प्रजाति | बुखार पैटर्न | गंभीरता |
|:--------|:-----------|:--------|
| **P. vivax** | हर 48 घंटे | हल्का |
| **P. falciparum** | अनियमित | गंभीर |

### लक्षण
- ठंड के साथ तेज बुखार
- कंपकंपी
- पसीना
- सिरदर्द

### निदान
- **RDT** (रैपिड डायग्नोस्टिक टेस्ट)
- **ब्लड स्मीयर** (गोल्ड स्टैंडर्ड)

### उपचार
- **P. vivax:** क्लोरोक्वीन + प्राइमाक्वीन
- **P. falciparum:** ACT

---

## 🟡 डेंगू

### कारक और वाहक
- **एजेंट:** डेंगू वायरस
- **वाहक:** एडीज एजिप्टी मच्छर
- **काटता है:** दिन में (सुबह/शाम)
- **प्रजनन:** साफ रुका पानी

### चेतावनी संकेत

:::danger
**तुरंत रेफर:**
- गंभीर पेट दर्द
- लगातार उल्टी
- रक्तस्राव (मसूड़े, नाक)
- सुस्ती
- तरल संचय
:::

### उपचार
- कोई विशेष एंटीवायरल नहीं
- सहायक देखभाल
- प्लेटलेट निगरानी

---

## 🛡️ रोकथाम

| मलेरिया | डेंगू |
|:--------|:------|
| बेड नेट (LLIN) | रुका पानी हटाएं |
| इनडोर स्प्रे | पानी के बर्तन ढकें |
| कीमोप्रोफाइलैक्सिस | रिपेलेंट लगाएं |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मलेरिया = एनोफिलीज (रात में काटता)
2. डेंगू = एडीज (दिन में काटता)
3. P. falciparum = सबसे खतरनाक
4. डेंगू = साफ पानी में प्रजनन
5. मलेरिया RDT निदान
6. डेंगू = प्लेटलेट निगरानी
:::
`
  },
  {
    id: 3,
    titleEn: "Tuberculosis (TB)",
    titleHi: "तपेदिक (TB)",
    contentEn: `
# 🫁 Tuberculosis (TB)

---

## 📖 What is TB?

> **TB** is a chronic bacterial infection caused by Mycobacterium tuberculosis.

### Key Facts
- **Agent:** Mycobacterium tuberculosis
- **Transmission:** Airborne droplets
- **Primarily affects:** Lungs (Pulmonary TB)
- **Can affect:** Any organ (Extra-pulmonary TB)

---

## 🔍 Types of TB

| Type | Description |
|:-----|:------------|
| **Pulmonary TB** | Lungs affected (most common) |
| **Extra-pulmonary** | Other organs (lymph nodes, spine, etc.) |
| **Drug-sensitive** | Responds to standard treatment |
| **Drug-resistant** | MDR-TB, XDR-TB |

---

## ⚠️ Symptoms

### Pulmonary TB

:::warning
**Suspect TB if:**
- Cough >2 weeks
- Fever (especially evening)
- Night sweats
- Weight loss
- Loss of appetite
- Blood in sputum (hemoptysis)
:::

---

## 🔬 Diagnosis

| Test | Description |
|:-----|:------------|
| **Sputum microscopy** | AFB (Acid-Fast Bacilli) |
| **CBNAAT/GeneXpert** | Rapid molecular test |
| **Chest X-ray** | Lung involvement |
| **Mantoux test** | Screening (TST) |

### Sputum Collection
- Collect 2 samples (spot + early morning)
- Use wide-mouth container
- Patient should cough deeply

---

## 💊 Treatment (DOTS)

### DOTS = Directly Observed Treatment, Short-course

| Phase | Duration | Drugs |
|:------|:---------|:------|
| **Intensive** | 2 months | HRZE (4 drugs) |
| **Continuation** | 4 months | HR (2 drugs) |

### Drugs
- **H** = Isoniazid
- **R** = Rifampicin
- **Z** = Pyrazinamide
- **E** = Ethambutol

:::success
**Key:** Daily regimen for 6 months minimum
:::

---

## 🛡️ Prevention

- BCG vaccination at birth
- Early case detection
- Contact tracing
- Infection control (cough hygiene)
- Adequate ventilation

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. TB = Mycobacterium tuberculosis
2. Cough >2 weeks = Suspect TB
3. Diagnosis = Sputum microscopy, CBNAAT
4. DOTS = Directly Observed Treatment
5. 6 months minimum treatment
6. HRZE drugs (Intensive), HR (Continuation)
7. BCG vaccine at birth
8. Airborne transmission
:::
`,
    contentHi: `
# 🫁 तपेदिक (TB)

---

## 📖 TB क्या है?

> **TB** माइकोबैक्टीरियम ट्यूबरकुलोसिस द्वारा होने वाला जीर्ण जीवाणु संक्रमण है।

### मुख्य तथ्य
- **एजेंट:** माइकोबैक्टीरियम ट्यूबरकुलोसिस
- **संचरण:** वायुजनित बूंदें
- **मुख्य रूप से:** फेफड़े (पल्मोनरी TB)

---

## ⚠️ लक्षण

### पल्मोनरी TB

:::warning
**TB का संदेह करें:**
- 2 सप्ताह से अधिक खांसी
- बुखार (विशेष रूप से शाम को)
- रात को पसीना
- वजन कम होना
- भूख न लगना
- थूक में खून
:::

---

## 🔬 निदान

| परीक्षण | विवरण |
|:--------|:------|
| **थूक माइक्रोस्कोपी** | AFB |
| **CBNAAT/GeneXpert** | तेज आणविक परीक्षण |
| **छाती X-ray** | फेफड़े की भागीदारी |
| **मैंटौक्स टेस्ट** | स्क्रीनिंग |

### थूक संग्रह
- 2 नमूने (स्पॉट + सुबह)
- चौड़े मुंह का कंटेनर
- गहरी खांसी करें

---

## 💊 उपचार (DOTS)

### DOTS = प्रत्यक्ष निरीक्षित उपचार

| चरण | अवधि | दवाएं |
|:----|:-----|:------|
| **गहन** | 2 महीने | HRZE (4 दवाएं) |
| **निरंतरता** | 4 महीने | HR (2 दवाएं) |

### दवाएं
- **H** = आइसोनियाज़िड
- **R** = रिफैम्पिसिन
- **Z** = पाइराज़िनामाइड
- **E** = एथमब्यूटोल

:::success
**मुख्य:** न्यूनतम 6 महीने दैनिक उपचार
:::

---

## 🛡️ रोकथाम

- जन्म पर BCG टीकाकरण
- प्रारंभिक केस पता
- संपर्क ट्रेसिंग
- खांसी स्वच्छता
- पर्याप्त वेंटिलेशन

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. TB = माइकोबैक्टीरियम ट्यूबरकुलोसिस
2. 2 सप्ताह से अधिक खांसी = TB संदेह
3. निदान = थूक माइक्रोस्कोपी, CBNAAT
4. DOTS = प्रत्यक्ष निरीक्षित उपचार
5. न्यूनतम 6 महीने उपचार
6. HRZE (गहन), HR (निरंतरता)
7. जन्म पर BCG टीका
:::
`
  },
  {
    id: 4,
    titleEn: "Diarrheal Diseases",
    titleHi: "दस्त संबंधी रोग",
    contentEn: `
# 💧 Diarrheal Diseases

---

## 📖 What is Diarrhea?

> **Diarrhea** = 3 or more loose/watery stools in 24 hours

### Types

| Type | Duration |
|:-----|:---------|
| **Acute** | <14 days |
| **Persistent** | ≥14 days |
| **Dysentery** | Blood in stool |

---

## 🦠 Common Causes

| Disease | Agent | Transmission |
|:--------|:------|:-------------|
| **Cholera** | V. cholerae | Water, food |
| **Typhoid** | S. typhi | Fecal-oral |
| **Rotavirus** | Rotavirus | Fecal-oral |
| **Amoebiasis** | E. histolytica | Water, food |

---

## 💧 Dehydration Assessment

### Signs

| Sign | None | Some | Severe |
|:-----|:-----|:-----|:-------|
| **General** | Well | Restless | Lethargic |
| **Eyes** | Normal | Sunken | Very sunken |
| **Tears** | Present | Absent | Absent |
| **Thirst** | Normal | Thirsty | Cannot drink |
| **Skin pinch** | Quick | Slow (<2s) | Very slow (>2s) |

---

## 💊 Treatment (ORS Therapy)

### Plan A - No Dehydration
- ORS at home
- Continue feeding
- Return if worse

### Plan B - Some Dehydration
- ORS in health facility
- 75 mL/kg over 4 hours
- Reassess after 4 hours

### Plan C - Severe Dehydration
- IV fluids (Ringer's Lactate)
- 100 mL/kg
- Refer urgently

---

## 🧂 ORS Composition

| Component | Amount |
|:----------|:-------|
| **Sodium** | 75 mEq/L |
| **Glucose** | 75 mmol/L |
| **Osmolarity** | 245 mOsm/L |

### How to Prepare
- 1 packet in 1 liter clean water
- Use within 24 hours
- Discard if not used

---

## 🛡️ Prevention

- Safe drinking water
- Hand washing
- Proper sanitation
- Safe food handling
- Rotavirus vaccination
- Exclusive breastfeeding

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Diarrhea = ≥3 loose stools in 24 hours
2. Dehydration assessment: Eyes, Skin pinch, Thirst
3. Plan A = Home ORS (no dehydration)
4. Plan B = ORS at facility (some)
5. Plan C = IV fluids (severe)
6. ORS = 1 packet in 1 liter water
7. Skin pinch >2 seconds = severe
8. Continue feeding during diarrhea
:::
`,
    contentHi: `
# 💧 दस्त संबंधी रोग

---

## 📖 दस्त क्या है?

> **दस्त** = 24 घंटे में 3 या अधिक पतले/पानी जैसे मल

### प्रकार

| प्रकार | अवधि |
|:-------|:-----|
| **तीव्र** | <14 दिन |
| **लगातार** | ≥14 दिन |
| **पेचिश** | मल में खून |

---

## 💧 निर्जलीकरण आकलन

| संकेत | नहीं | कुछ | गंभीर |
|:------|:----|:----|:------|
| **सामान्य** | ठीक | बेचैन | सुस्त |
| **आंखें** | सामान्य | धंसी | बहुत धंसी |
| **प्यास** | सामान्य | प्यासा | पी नहीं सकता |
| **त्वचा चुटकी** | तेज | धीमी | बहुत धीमी |

---

## 💊 उपचार (ORS थेरेपी)

### प्लान A - निर्जलीकरण नहीं
- घर पर ORS
- खिलाना जारी
- बिगड़ने पर वापस आएं

### प्लान B - कुछ निर्जलीकरण
- स्वास्थ्य सुविधा में ORS
- 4 घंटे में 75 mL/kg
- 4 घंटे बाद पुनर्मूल्यांकन

### प्लान C - गंभीर निर्जलीकरण
- IV तरल (रिंगर लैक्टेट)
- 100 mL/kg
- तत्काल रेफर

---

## 🧂 ORS बनाना

- 1 पैकेट 1 लीटर साफ पानी में
- 24 घंटे में उपयोग करें
- उपयोग न होने पर फेंक दें

---

## 🛡️ रोकथाम

- सुरक्षित पेयजल
- हाथ धोना
- उचित स्वच्छता
- सुरक्षित भोजन
- रोटावायरस टीकाकरण
- केवल स्तनपान

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. दस्त = 24 घंटे में ≥3 पतले मल
2. निर्जलीकरण: आंखें, त्वचा चुटकी, प्यास
3. प्लान A = घर पर ORS
4. प्लान B = सुविधा में ORS
5. प्लान C = IV तरल
6. ORS = 1 पैकेट 1 लीटर में
7. त्वचा चुटकी >2 सेकंड = गंभीर
8. दस्त में खिलाना जारी रखें
:::
`
  },
  {
    id: 5,
    titleEn: "HIV/AIDS & STIs",
    titleHi: "HIV/AIDS और STI",
    contentEn: `
# 🎗️ HIV/AIDS & STIs

---

## 📖 What is HIV/AIDS?

> **HIV** = Human Immunodeficiency Virus (attacks CD4 cells)
> **AIDS** = Acquired Immunodeficiency Syndrome (advanced HIV)

---

## 🔄 Transmission

### HIV is transmitted through:
- **Sexual contact** (most common)
- **Blood** (needles, transfusion)
- **Mother to child** (pregnancy, delivery, breastfeeding)

### HIV is NOT transmitted through:
- Handshake, hugging
- Sharing food, utensils
- Mosquito bites
- Toilet seats
- Coughing, sneezing

---

## 🔬 Diagnosis

| Test | Window Period |
|:-----|:-------------|
| **ELISA** | 3 weeks |
| **Rapid test** | 3-4 weeks |
| **Western Blot** | Confirmatory |
| **CD4 count** | Disease stage |

---

## 💊 Treatment (ART)

> **ART** = Antiretroviral Therapy (lifelong)

### Goals
- Suppress viral load
- Restore immunity
- Prevent transmission
- Improve quality of life

### Key Points
- Start ART for all HIV positive
- Take daily, lifelong
- Never stop without medical advice

---

## 🤰 PPTCT

> **PPTCT** = Prevention of Parent to Child Transmission

| Intervention | Details |
|:-------------|:--------|
| **ART to mother** | Throughout pregnancy |
| **Safe delivery** | Institutional |
| **Infant prophylaxis** | Nevirapine syrup |
| **Feeding** | Exclusive breastfeeding or exclusive formula |

---

## 🦠 Other STIs

| STI | Agent | Symptoms |
|:----|:------|:---------|
| **Syphilis** | T. pallidum | Painless ulcer |
| **Gonorrhea** | N. gonorrhoeae | Discharge |
| **Chlamydia** | C. trachomatis | Discharge, PID |
| **Genital Herpes** | HSV | Painful blisters |
| **HPV** | Papillomavirus | Warts, cancer |

---

## 🛡️ Prevention

- Safe sex (condoms)
- Avoid multiple partners
- Screen blood products
- Use sterile needles
- PPTCT for pregnant women
- PrEP for high-risk groups

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. HIV attacks CD4 cells
2. AIDS = CD4 <200 cells/μL
3. Sexual contact = most common transmission
4. ART = lifelong treatment
5. PPTCT = Prevention of Parent to Child Transmission
6. Condom = best prevention
7. HIV testing: ELISA, Rapid test
8. Cannot transmit through casual contact
:::
`,
    contentHi: `
# 🎗️ HIV/AIDS और STI

---

## 📖 HIV/AIDS क्या है?

> **HIV** = ह्यूमन इम्युनोडेफिशिएंसी वायरस (CD4 कोशिकाओं पर हमला)
> **AIDS** = एक्वायर्ड इम्युनोडेफिशिएंसी सिंड्रोम (उन्नत HIV)

---

## 🔄 संचरण

### HIV इनसे फैलता है:
- **यौन संपर्क** (सबसे आम)
- **रक्त** (सुई, ट्रांसफ्यूजन)
- **माता से बच्चे** (गर्भावस्था, प्रसव, स्तनपान)

### HIV इनसे नहीं फैलता:
- हाथ मिलाना, गले लगना
- भोजन साझा करना
- मच्छर काटने से
- शौचालय सीट
- खांसना, छींकना

---

## 🔬 निदान

| परीक्षण | विंडो पीरियड |
|:--------|:-----------|
| **ELISA** | 3 सप्ताह |
| **रैपिड टेस्ट** | 3-4 सप्ताह |
| **CD4 गणना** | रोग चरण |

---

## 💊 उपचार (ART)

> **ART** = एंटीरेट्रोवायरल थेरेपी (आजीवन)

### मुख्य बिंदु
- सभी HIV पॉजिटिव के लिए ART शुरू
- दैनिक, आजीवन लें
- बिना चिकित्सा सलाह न रोकें

---

## 🤰 PPTCT

> **PPTCT** = माता से बच्चे को संचरण की रोकथाम

| हस्तक्षेप | विवरण |
|:---------|:------|
| **माता को ART** | पूरी गर्भावस्था |
| **सुरक्षित प्रसव** | संस्थागत |
| **शिशु प्रोफाइलैक्सिस** | नेविरापीन सिरप |

---

## 🛡️ रोकथाम

- सुरक्षित यौन (कंडोम)
- एकाधिक साथी से बचें
- रक्त उत्पाद स्क्रीन करें
- बाँझ सुई उपयोग करें
- गर्भवती के लिए PPTCT

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. HIV = CD4 कोशिकाओं पर हमला
2. AIDS = CD4 <200 cells/μL
3. यौन संपर्क = सबसे आम संचरण
4. ART = आजीवन उपचार
5. PPTCT = माता से बच्चे को रोकथाम
6. कंडोम = सबसे अच्छी रोकथाम
7. सामान्य संपर्क से नहीं फैलता
:::
`
  },
  {
    id: 6,
    titleEn: "Diarrheal Diseases & Enteric Infections",
    titleHi: "दस्त रोग और आंत्र संक्रमण",
    contentEn: `
# 🦠 Diarrheal Diseases & Enteric Infections

---

## 📖 Acute Diarrheal Disease

:::info
**Definition:** 
- ≥3 loose/watery stools in 24 hours
- <mark>Acute</mark>: Less than 14 days
- <mark>Persistent</mark>: 14+ days
:::

---

## 📊 Classification by Dehydration

| Category | Signs | Treatment Plan |
|:---------|:------|:---------------|
| **No dehydration** | Alert, drinks normally, skin pinch normal | <mark>Plan A</mark>: ORS at home |
| **Some dehydration** | Restless, thirsty, skin pinch slow (<2 sec) | <mark>Plan B</mark>: ORS at facility |
| **Severe dehydration** | Lethargic, unable to drink, skin pinch >2 sec | <mark>Plan C</mark>: IV fluids |

---

## 🔬 Common Causes

| Cause | Key Features |
|:------|:-------------|
| **Rotavirus** | Most common in children <5 |
| **E. coli** | ETEC (traveler's diarrhea) |
| **Cholera** | Rice-water stool |
| **Shigella** | Bloody diarrhea |
| **Salmonella** | Food poisoning |
| **Giardia** | Parasite, foul-smelling |
| **E. histolytica** | Amoebic dysentery |

---

## 💊 Treatment Principles

:::success
**4 Pillars of Treatment:**
1. **ORS** - Oral Rehydration Solution (prevent/treat dehydration)
2. **Zinc** - 10-14 days (reduces duration & future episodes)
3. **Continue feeding** - Including breastfeeding
4. **Antibiotics** - Only for specific indications
:::

### ORS Composition (WHO Formula)

| Component | Amount |
|:----------|:-------|
| Sodium | 75 mEq/L |
| Glucose | 75 mmol/L |
| Osmolarity | <mark>245 mOsm/L</mark> |

### Zinc Dosing

| Age | Daily Dose | Duration |
|:----|:-----------|:---------|
| <6 months | 10 mg/day | 10-14 days |
| >6 months | 20 mg/day | 10-14 days |

---

## 🌊 Cholera

### Causative Agent
- <mark>Vibrio cholerae</mark> (O1, O139 serotypes)

### Key Features
- Occurs in <mark>epidemics</mark>
- Associated with poor sanitation
- Can cause rapid severe dehydration

:::danger
**Pathognomonic Sign:**
- **Rice-water stool** (watery, flecks)
- Profuse diarrhea (lose liters/hour)
- No fever usually
- Muscle cramps
- Can be fatal in hours without treatment
:::

### Diagnosis
- Stool culture (definitive)
- Rapid diagnostic tests
- Dark-field microscopy (darting motility)

### Treatment
- **Aggressive rehydration** (IV for severe)
- ORS for mild-moderate
- Antibiotics: Doxycycline, Azithromycin (shorten duration)

### Prevention
- Safe water & sanitation
- Hand hygiene
- <mark>Oral cholera vaccine</mark> (for outbreaks/endemic areas)

---

## 🌡️ Typhoid Fever

### Causative Agent
- <mark>Salmonella typhi</mark>
- S. paratyphi (paratyphoid)

### Transmission
- Fecal-oral via contaminated food/water
- <mark>Carriers</mark> (chronic gallbladder infection)

### Clinical Features by Week

| Week | Features |
|:-----|:---------|
| **Week 1** | <mark>Step-ladder fever</mark> (rising daily), headache, relative bradycardia |
| **Week 2-3** | Sustained high fever, <mark>rose spots</mark> (faint rash), hepatosplenomegaly |
| **Complications** | Intestinal perforation (serious), GI bleeding, encephalopathy |

### Diagnosis

| Test | Timing |
|:-----|:-------|
| **Blood culture** | Gold standard, Week 1 |
| **Widal test** | Serological, less reliable |
| **Stool/urine culture** | Carrier detection |

### Treatment
- Antibiotics: Ceftriaxone, Azithromycin, Fluoroquinolones
- Supportive care
- Monitor for complications

### Prevention
- Safe water and food
- Sanitation
- <mark>Typhoid Conjugate Vaccine (TCV)</mark> - now in UIP

---

## 🟡 Viral Hepatitis (A & E)

### Hepatitis A

| Feature | Details |
|:--------|:--------|
| Transmission | <mark>Fecal-oral</mark> |
| Severity | Usually mild, self-limiting |
| Symptoms | Fever, jaundice, dark urine, pale stool |
| Chronic infection | **NO** |
| Prevention | Hep A vaccine, safe water |

### Hepatitis E

| Feature | Details |
|:--------|:--------|
| Transmission | Fecal-oral (waterborne outbreaks) |
| Severity | Usually self-limiting |
| Prevention | Safe water, sanitation |

:::danger
**DANGER IN PREGNANCY:**
- Hepatitis E mortality: <mark>20-25%</mark> in pregnant women
- Risk of fulminant hepatic failure
- Third trimester most dangerous
:::

---

## 🔵 Poliomyelitis

### Causative Agent
- <mark>Poliovirus</mark> (types 1, 2, 3)
- Enterovirus family

### Transmission
- Fecal-oral (primary)
- Respiratory (some)

### Clinical Forms

| Form | Percentage |
|:-----|:-----------|
| Asymptomatic | 95% |
| Minor illness | Fever, headache |
| Aseptic meningitis | Rare |
| <mark>Paralytic polio</mark> | <1% |

:::warning
**Paralytic Polio Features:**
- Acute Flaccid Paralysis (AFP)
- Asymmetric
- Lower limbs common
- No sensory loss
:::

### AFP Surveillance

:::info
**Critical for Polio Eradication:**
- Report ALL cases of AFP in children <15 years
- Report within <mark>24 hours</mark>
- Stool collection within <mark>14 days</mark>
- India certified <mark>polio-free in 2014</mark>
:::

### Prevention
- **OPV** (Oral Polio Vaccine)
- **IPV** (Injectable Polio Vaccine)
- Pulse Polio Immunization campaigns

---

## 🚿 WASH Prevention Strategy

| Component | Actions |
|:----------|:--------|
| **W**ater | Safe drinking water, chlorination, protected sources |
| **S**anitation | Safe excreta disposal, proper toilets, no open defecation |
| **H**ygiene | Handwashing with soap, food hygiene, safe food handling |

---

## 👨‍⚕️ MPHW Role

- Identify and treat diarrhea (ORS, zinc)
- Assess dehydration using signs
- Refer severe cases immediately
- Outbreak investigation support
- Water source protection
- Chlorination of water
- Health education (WASH)
- AFP surveillance and reporting
- Immunization support

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Diarrhea = ≥3 loose stools in 24 hours
2. ORS osmolarity = 245 mOsm/L
3. Zinc for 10-14 days
4. Cholera = Rice-water stool
5. Typhoid = Step-ladder fever, rose spots
6. Hep E = 20-25% mortality in pregnancy
7. India polio-free since 2014
8. AFP report within 24 hours
9. WASH = Water, Sanitation, Hygiene
:::
`,
    contentHi: `
# 🦠 दस्त रोग और आंत्र संक्रमण

---

## 📖 तीव्र दस्त रोग

:::info
**परिभाषा:** 
- 24 घंटे में ≥3 पतले/पानीदार मल
- <mark>तीव्र</mark>: 14 दिन से कम
- <mark>लगातार</mark>: 14+ दिन
:::

---

## 📊 निर्जलीकरण के अनुसार वर्गीकरण

| श्रेणी | लक्षण | उपचार योजना |
|:-------|:------|:-----------|
| **कोई निर्जलीकरण नहीं** | सतर्क, सामान्य रूप से पीता है | <mark>प्लान A</mark>: घर पर ORS |
| **कुछ निर्जलीकरण** | बेचैन, प्यासा, त्वचा चुटकी धीमी | <mark>प्लान B</mark>: सुविधा में ORS |
| **गंभीर निर्जलीकरण** | सुस्त, पी नहीं सकता, त्वचा चुटकी >2 सेकंड | <mark>प्लान C</mark>: IV तरल |

---

## 🔬 सामान्य कारण

| कारण | मुख्य विशेषताएं |
|:-----|:---------------|
| **रोटावायरस** | बच्चों में सबसे आम |
| **ई. कोलाई** | यात्री दस्त |
| **हैजा** | चावल के पानी जैसा मल |
| **शिगेला** | खूनी दस्त |
| **जिआर्डिया** | परजीवी, दुर्गंध |

---

## 💊 उपचार सिद्धांत

:::success
**उपचार के 4 स्तंभ:**
1. **ORS** - मौखिक पुनर्जलीकरण घोल
2. **जिंक** - 10-14 दिन
3. **खिलाना जारी** - स्तनपान सहित
4. **एंटीबायोटिक** - केवल विशेष मामलों में
:::

### जिंक खुराक

| उम्र | दैनिक खुराक | अवधि |
|:-----|:-----------|:-----|
| <6 महीने | 10 mg/दिन | 10-14 दिन |
| >6 महीने | 20 mg/दिन | 10-14 दिन |

---

## 🌊 हैजा (Cholera)

### कारक एजेंट
- <mark>विब्रियो कॉलेरी</mark> (O1, O139 सेरोटाइप)

:::danger
**पैथोग्नोमोनिक संकेत:**
- **चावल के पानी जैसा मल**
- भारी दस्त (लीटर/घंटे)
- आमतौर पर बुखार नहीं
- बिना उपचार घंटों में घातक हो सकता है
:::

### उपचार
- **आक्रामक पुनर्जलीकरण** (गंभीर के लिए IV)
- हल्के-मध्यम के लिए ORS
- एंटीबायोटिक: डॉक्सीसाइक्लिन

---

## 🌡️ टाइफाइड बुखार

### कारक एजेंट
- <mark>सालमोनेला टाइफी</mark>

### नैदानिक विशेषताएं

| सप्ताह | विशेषताएं |
|:-------|:---------|
| **सप्ताह 1** | <mark>सीढ़ी बुखार</mark> (दैनिक बढ़ता), सिरदर्द |
| **सप्ताह 2-3** | उच्च बुखार, <mark>गुलाबी धब्बे</mark>, हेपेटोस्प्लेनोमेगाली |
| **जटिलताएं** | आंत्र छिद्रण, GI रक्तस्राव |

### निदान

| परीक्षण | समय |
|:--------|:----|
| **ब्लड कल्चर** | गोल्ड स्टैंडर्ड, सप्ताह 1 |
| **विडाल टेस्ट** | सेरोलॉजिकल |

### रोकथाम
- सुरक्षित पानी और भोजन
- स्वच्छता
- <mark>टाइफाइड कंजुगेट वैक्सीन (TCV)</mark>

---

## 🟡 वायरल हेपेटाइटिस (A और E)

### हेपेटाइटिस A
- संचरण: <mark>मल-मौखिक</mark>
- आमतौर पर हल्का
- हेप A वैक्सीन से रोकथाम

### हेपेटाइटिस E

:::danger
**गर्भावस्था में खतरा:**
- हेप E मृत्यु दर: <mark>20-25%</mark> गर्भवती में
- तीसरी तिमाही सबसे खतरनाक
:::

---

## 🔵 पोलियोमाइलाइटिस

### नैदानिक रूप

| रूप | प्रतिशत |
|:----|:-------|
| लक्षणरहित | 95% |
| मामूली बीमारी | बुखार, सिरदर्द |
| <mark>पक्षाघात पोलियो</mark> | <1% |

:::warning
**AFP विशेषताएं:**
- तीव्र शिथिल पक्षाघात
- असममित
- निचले अंग आम
:::

### AFP निगरानी

:::info
**महत्वपूर्ण:**
- <15 वर्ष बच्चों में सभी AFP केस रिपोर्ट करें
- <mark>24 घंटे</mark> में रिपोर्ट
- <mark>14 दिन</mark> में मल संग्रह
- भारत <mark>2014 में पोलियो-मुक्त</mark>
:::

---

## 🚿 WASH रोकथाम रणनीति

| घटक | कार्य |
|:----|:------|
| **W**ater | सुरक्षित पेयजल, क्लोरीनेशन |
| **S**anitation | सुरक्षित मल निपटान, खुले में शौच नहीं |
| **H**ygiene | साबुन से हाथ धोना, भोजन स्वच्छता |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. दस्त = 24 घंटे में ≥3 पतले मल
2. ORS ऑस्मोलैरिटी = 245 mOsm/L
3. जिंक 10-14 दिन
4. हैजा = चावल के पानी जैसा मल
5. टाइफाइड = सीढ़ी बुखार, गुलाबी धब्बे
6. हेप E = गर्भावस्था में 20-25% मृत्यु
7. भारत 2014 से पोलियो-मुक्त
8. AFP 24 घंटे में रिपोर्ट
:::
`
  },
  {
    id: 7,
    titleEn: "Respiratory Infections",
    titleHi: "श्वसन संक्रमण",
    contentEn: `
# 🫁 Respiratory Infections

---

## 📖 Acute Respiratory Infections (ARI)

### Classification

| Type | Examples |
|:-----|:---------|
| **Upper Respiratory** | Common cold, pharyngitis, tonsillitis, otitis media, sinusitis |
| **Lower Respiratory** | Pneumonia, bronchitis, bronchiolitis |

### Common Causes

| Agent | Type |
|:------|:-----|
| **Viruses** (most common) | Rhinovirus, RSV, Influenza, Parainfluenza |
| **Bacteria** | S. pneumoniae, H. influenzae, S. aureus |

---

## 👶 ARI in Children (IMNCI Classification)

| Classification | Signs | Treatment |
|:---------------|:------|:----------|
| **Very severe pneumonia** | Chest indrawing + danger signs | <mark>Refer urgently</mark> |
| **Pneumonia** | Fast breathing | Oral antibiotics |
| **No pneumonia** | No fast breathing, no chest indrawing | Home care |

### Fast Breathing Criteria (CRITICAL!)

| Age | Rate |
|:----|:-----|
| <2 months | <mark>≥60 breaths/min</mark> |
| 2-12 months | <mark>≥50 breaths/min</mark> |
| 12 months-5 years | <mark>≥40 breaths/min</mark> |

:::danger
**Danger Signs in Children:**
- Unable to drink/breastfeed
- Vomits everything
- Convulsions
- Lethargic/unconscious
- Stridor in calm child
:::

---

## 🔥 Pneumonia

### Common Causes

| Type | Agent |
|:-----|:------|
| **Community-acquired** | S. pneumoniae (most common bacterial) |
| **Children** | RSV (viral), H. influenzae type b |
| **Atypical** | Mycoplasma, Chlamydia |

### Clinical Features
- Cough
- Fever
- Fast/difficult breathing
- <mark>Chest indrawing</mark>
- Hypoxia (low oxygen)
- Crackles on auscultation

### Treatment
- Antibiotics (<mark>Amoxicillin</mark> first-line)
- Oxygen if hypoxic
- Supportive care
- Referral if severe

### Prevention
- <mark>Pneumococcal vaccine (PCV)</mark>
- <mark>Hib vaccine</mark>
- Exclusive breastfeeding
- Good nutrition
- Reduced indoor air pollution
- Handwashing

---

## 🤧 Influenza

### Causative Agent
- <mark>Influenza A</mark> (pandemics, epidemics)
- Influenza B (epidemics)
- Influenza C (mild)

### Transmission
- Respiratory droplets
- Contact with contaminated surfaces
- Highly contagious

### Clinical Features
- <mark>Sudden onset</mark>
- High fever
- Headache, myalgia
- Cough, sore throat
- Recovery in 1-2 weeks usually

### High-Risk Groups
- Elderly
- Young children
- Pregnant women
- Chronic diseases (diabetes, heart, lung)

### Treatment
- Usually supportive
- <mark>Oseltamivir</mark> for severe/high-risk
- Must start within <mark>48 hours</mark> of symptoms

### Prevention
- <mark>Annual influenza vaccine</mark>
- Hand hygiene
- Respiratory etiquette
- Isolation of cases

---

## 🦠 COVID-19

### Causative Agent
- <mark>SARS-CoV-2</mark> (Coronavirus)

### Transmission
- Respiratory droplets
- Aerosols (poorly ventilated spaces)
- Contact with contaminated surfaces

### Clinical Spectrum

| Severity | Features |
|:---------|:---------|
| **Asymptomatic** | ~40% of cases |
| **Mild** | Fever, cough, fatigue, <mark>loss of taste/smell</mark> |
| **Moderate** | Pneumonia |
| **Severe** | Hypoxia, respiratory failure |
| **Critical** | ARDS, multi-organ failure |

### High-Risk Groups
- Elderly
- Diabetes, hypertension
- Obesity
- Immunocompromised
- Chronic lung/heart disease

### Diagnosis

| Test | Details |
|:-----|:--------|
| **RT-PCR** | Gold standard |
| **Rapid Antigen Test (RAT)** | Quick screening |
| **CT chest** | CORADS scoring |

### Prevention
- <mark>Vaccination</mark>
- Masking
- Physical distancing
- Hand hygiene
- Ventilation
- Isolation of cases

---

## 🔴 Measles

### Causative Agent
- <mark>Measles virus</mark> (Paramyxovirus)
- <mark>R0 = 12-18</mark> (Highly contagious!)

### Transmission
- Airborne
- Respiratory droplets

### Clinical Features

| Stage | Features |
|:------|:---------|
| **Prodrome** | Fever, cough, coryza, conjunctivitis (3 Cs) |
| **Pathognomonic** | <mark>Koplik spots</mark> (white spots on buccal mucosa) |
| **Rash** | Maculopapular, starts face, spreads down |

:::info
**Koplik Spots:**
- White spots like grains of salt
- Appear on inner cheek
- Present before rash (diagnostic clue)
:::

### Complications
- <mark>Pneumonia</mark> (most common cause of death)
- Encephalitis
- Otitis media
- Diarrhea
- Malnutrition worsening
- SSPE (rare, late)

### Treatment
- Supportive
- <mark>Vitamin A</mark> (reduces mortality)
- Antibiotics for secondary infections

### Prevention
- <mark>MR/MMR vaccine</mark> (2 doses)
- Very high coverage needed (<mark>95%</mark>)
- Outbreak response immunization

---

## 🔵 Pertussis (Whooping Cough)

### Causative Agent
- <mark>Bordetella pertussis</mark>

### Clinical Stages

| Stage | Duration | Features |
|:------|:---------|:---------|
| **Catarrhal** | 1-2 weeks | Cold-like symptoms |
| **Paroxysmal** | 2-8 weeks | Severe coughing spells, <mark>inspiratory whoop</mark>, post-tussive vomiting |
| **Convalescent** | Weeks | Gradual recovery |

:::warning
**Characteristic Features:**
- Severe coughing fits (paroxysms)
- **Inspiratory "whoop"** sound
- Post-tussive vomiting
- Worse at night
- Highest mortality in young infants
:::

### Complications
- Pneumonia
- Seizures
- Encephalopathy
- Death (highest in young infants)

### Treatment
- <mark>Macrolide antibiotics</mark> (Azithromycin, Erythromycin)
- Most effective if given early
- Supportive care

### Prevention
- <mark>DPT/Pentavalent vaccine</mark>
- Tdap booster for pregnant women

---

## 🏥 Respiratory Infection Control

| Type | Measures |
|:-----|:---------|
| **Administrative** | Triage, isolation, early diagnosis, cough etiquette |
| **Environmental** | Ventilation, air cleaning (HEPA, UV) |
| **Personal** | Masks (surgical, N95), hand hygiene, eye protection |

---

## 👨‍⚕️ MPHW Role

- ARI case management (IMNCI protocol)
- Counting respiratory rate accurately
- Identifying danger signs
- Referral of severe cases
- Immunization (measles, pertussis, PCV)
- Health education (hygiene, vaccination)
- Outbreak reporting
- COVID vaccination support

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Fast breathing <2 months: ≥60/min
2. Fast breathing 2-12 months: ≥50/min
3. Fast breathing 1-5 years: ≥40/min
4. Pneumonia first-line = Amoxicillin
5. Measles R0 = 12-18 (very contagious)
6. Koplik spots = pathognomonic for measles
7. Measles needs 95% coverage
8. Pertussis = whooping cough
9. Oseltamivir within 48 hours
10. Vitamin A reduces measles mortality
:::
`,
    contentHi: `
# 🫁 श्वसन संक्रमण

---

## 📖 तीव्र श्वसन संक्रमण (ARI)

### वर्गीकरण

| प्रकार | उदाहरण |
|:-------|:-------|
| **ऊपरी श्वसन** | सामान्य सर्दी, गले का संक्रमण, कान का संक्रमण |
| **निचला श्वसन** | निमोनिया, ब्रोंकाइटिस |

---

## 👶 बच्चों में ARI (IMNCI वर्गीकरण)

| वर्गीकरण | लक्षण | उपचार |
|:---------|:------|:------|
| **बहुत गंभीर निमोनिया** | छाती धंसना + खतरे के संकेत | <mark>तुरंत रेफर</mark> |
| **निमोनिया** | तेज श्वास | मौखिक एंटीबायोटिक |
| **निमोनिया नहीं** | तेज श्वास नहीं | घर पर देखभाल |

### तेज श्वास मानदंड (महत्वपूर्ण!)

| उम्र | दर |
|:-----|:---|
| <2 महीने | <mark>≥60 श्वास/मिनट</mark> |
| 2-12 महीने | <mark>≥50 श्वास/मिनट</mark> |
| 1-5 वर्ष | <mark>≥40 श्वास/मिनट</mark> |

:::danger
**बच्चों में खतरे के संकेत:**
- पी नहीं सकता/स्तनपान नहीं
- सब कुछ उल्टी
- आक्षेप
- सुस्त/बेहोश
- शांत बच्चे में स्ट्राइडर
:::

---

## 🔥 निमोनिया

### उपचार
- एंटीबायोटिक (<mark>एमोक्सिसिलिन</mark> पहली पसंद)
- हाइपोक्सिक में ऑक्सीजन
- गंभीर में रेफरल

### रोकथाम
- <mark>PCV वैक्सीन</mark>
- <mark>Hib वैक्सीन</mark>
- विशेष स्तनपान
- अच्छा पोषण
- इनडोर वायु प्रदूषण कम करें

---

## 🤧 इन्फ्लुएंजा

### कारक एजेंट
- <mark>इन्फ्लुएंजा A</mark> (महामारी)
- इन्फ्लुएंजा B (महामारी)

### नैदानिक विशेषताएं
- <mark>अचानक शुरुआत</mark>
- तेज बुखार
- सिरदर्द, मांसपेशी दर्द
- खांसी, गले में खराश

### उपचार
- आमतौर पर सहायक
- <mark>ओसेल्टामिविर</mark> गंभीर में
- लक्षणों के <mark>48 घंटे</mark> के भीतर शुरू

### रोकथाम
- <mark>वार्षिक इन्फ्लुएंजा वैक्सीन</mark>
- हाथ स्वच्छता
- श्वसन शिष्टाचार

---

## 🦠 COVID-19

### नैदानिक स्पेक्ट्रम

| गंभीरता | विशेषताएं |
|:--------|:---------|
| **लक्षणरहित** | ~40% केस |
| **हल्का** | बुखार, खांसी, <mark>स्वाद/गंध की हानि</mark> |
| **मध्यम** | निमोनिया |
| **गंभीर** | हाइपोक्सिया, श्वसन विफलता |

### निदान

| परीक्षण | विवरण |
|:--------|:------|
| **RT-PCR** | गोल्ड स्टैंडर्ड |
| **RAT** | त्वरित स्क्रीनिंग |

### रोकथाम
- <mark>टीकाकरण</mark>
- मास्क
- शारीरिक दूरी
- हाथ स्वच्छता
- वेंटिलेशन

---

## 🔴 खसरा (Measles)

### कारक एजेंट
- <mark>खसरा वायरस</mark>
- <mark>R0 = 12-18</mark> (बहुत संक्रामक!)

### नैदानिक विशेषताएं

| चरण | विशेषताएं |
|:----|:---------|
| **प्रोड्रोम** | बुखार, खांसी, नाक बहना, आंख लाल (3 Cs) |
| **पैथोग्नोमोनिक** | <mark>कोपलिक स्पॉट</mark> (गाल के अंदर सफेद धब्बे) |
| **रैश** | चेहरे से शुरू, नीचे फैलता है |

### जटिलताएं
- <mark>निमोनिया</mark> (मृत्यु का सबसे आम कारण)
- एन्सेफलाइटिस
- कान का संक्रमण
- दस्त

### उपचार
- सहायक
- <mark>विटामिन A</mark> (मृत्यु दर कम)

### रोकथाम
- <mark>MR/MMR वैक्सीन</mark> (2 खुराक)
- <mark>95%</mark> कवरेज जरूरी

---

## 🔵 काली खांसी (Pertussis)

### कारक एजेंट
- <mark>बोर्डेटेला पर्टुसिस</mark>

### नैदानिक चरण

| चरण | अवधि | विशेषताएं |
|:----|:-----|:---------|
| **कैटरल** | 1-2 सप्ताह | सर्दी जैसे |
| **पैरॉक्सिस्मल** | 2-8 सप्ताह | गंभीर खांसी, <mark>हूप</mark> आवाज |
| **कन्वेलेसेंट** | सप्ताह | धीरे-धीरे ठीक |

:::warning
**विशेष लक्षण:**
- गंभीर खांसी के दौरे
- **"हूप"** आवाज
- खांसी के बाद उल्टी
- रात में बदतर
- छोटे शिशुओं में सबसे अधिक मृत्यु
:::

### उपचार
- <mark>मैक्रोलाइड एंटीबायोटिक</mark> (एज़िथ्रोमाइसिन)

### रोकथाम
- <mark>DPT/पेंटावैलेंट वैक्सीन</mark>

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. तेज श्वास <2 महीने: ≥60/मिनट
2. तेज श्वास 2-12 महीने: ≥50/मिनट
3. तेज श्वास 1-5 वर्ष: ≥40/मिनट
4. निमोनिया पहली पसंद = एमोक्सिसिलिन
5. खसरा R0 = 12-18 (बहुत संक्रामक)
6. कोपलिक स्पॉट = खसरा का संकेत
7. खसरा 95% कवरेज जरूरी
8. काली खांसी = हूप आवाज
9. ओसेल्टामिविर 48 घंटे में
10. विटामिन A खसरा मृत्यु कम करे
:::
`
  },
  {
    id: 8,
    titleEn: "Vaccine-Preventable Diseases",
    titleHi: "टीका-रोकथाम योग्य रोग",
    contentEn: `
# 💉 Vaccine-Preventable Diseases

---

## 🔴 Diphtheria

### Causative Agent
- <mark>Corynebacterium diphtheriae</mark>
- Produces exotoxin

### Transmission
- Respiratory droplets
- Direct contact

### Clinical Features

:::danger
**Pathognomonic Sign:**
- <mark>Pseudomembrane</mark> (grayish-white membrane)
- Bleeds on removal
- Located on throat/tonsils
:::

| Feature | Description |
|:--------|:------------|
| Sore throat | Early symptom |
| Pseudomembrane | Gray-white, adherent |
| <mark>Bull neck</mark> | Cervical lymphadenopathy |
| Fever | Low-grade |
| Toxin effects | Myocarditis, neuropathy |

### Treatment
- <mark>Diphtheria Antitoxin (DAT)</mark> - urgent
- Antibiotics (Penicillin, Erythromycin)
- Isolation
- Supportive care

### Prevention
- <mark>DPT vaccine</mark> (part of Pentavalent)

---

## 🔵 Tetanus

### Causative Agent
- <mark>Clostridium tetani</mark>
- Spores in soil, rust
- Produces <mark>tetanospasmin</mark> (neurotoxin)

### Transmission
- Contaminated wounds
- Umbilical stump (neonatal tetanus)

### Clinical Features

:::danger
**Classic Triad:**
1. <mark>Trismus</mark> (lockjaw)
2. <mark>Risus sardonicus</mark> (grimacing smile)
3. <mark>Opisthotonus</mark> (body arching backward)
:::

| Feature | Description |
|:--------|:------------|
| Muscle spasms | Painful, triggered by stimuli |
| Rigidity | Board-like abdomen |
| Autonomic instability | BP fluctuations, sweating |

### Neonatal Tetanus

| Feature | Details |
|:--------|:--------|
| Onset | 3-14 days after birth |
| Sign | Inability to suck |
| Features | Rigidity, spasms |
| Mortality | Very high |

### Treatment
- <mark>TIG</mark> (Tetanus Immunoglobulin)
- Wound debridement
- Antibiotics (Metronidazole)
- Muscle relaxants
- ICU care often needed

### Prevention
- <mark>TT vaccine</mark> (5 doses for lifelong immunity)
- TT for pregnant women (2 doses)
- Clean delivery practices
- Proper wound care + TT for injuries

---

## 🟡 Mumps

### Causative Agent
- <mark>Mumps virus</mark> (Paramyxovirus)

### Transmission
- Respiratory droplets

### Clinical Features
- Fever, headache
- <mark>Parotid gland swelling</mark> (bilateral or unilateral)
- Pain on chewing

### Complications
- <mark>Orchitis</mark> (post-pubertal males) - can cause infertility
- Meningitis
- Pancreatitis
- Deafness

### Prevention
- <mark>MMR vaccine</mark>

---

## 🟢 Rubella (German Measles)

### Causative Agent
- <mark>Rubella virus</mark>

### Clinical Features
- Mild fever
- <mark>Lymphadenopathy</mark> (post-auricular, suboccipital)
- Fine maculopapular rash

### Congenital Rubella Syndrome (CRS)

:::danger
**CRS - Most dangerous if infection in first trimester:**
- <mark>Deafness</mark>
- <mark>Cataracts</mark>
- <mark>Congenital heart defects</mark>
- Intellectual disability
- Microcephaly
:::

### Prevention
- <mark>MR/MMR vaccine</mark>
- Women of childbearing age should be immune
- Rubella elimination goal in India

---

## 🟠 Hepatitis B

### Causative Agent
- <mark>Hepatitis B virus (HBV)</mark>
- DNA virus

### Transmission
- Blood and body fluids
- Sexual contact
- <mark>Mother to child (perinatal)</mark>
- Unsafe injections

### Clinical Progression

| Stage | Details |
|:------|:--------|
| **Acute hepatitis** | Some recover completely |
| **Chronic hepatitis** | Especially if infected young |
| **Cirrhosis** | Long-term complication |
| **Hepatocellular carcinoma** | Liver cancer risk |

### Diagnosis

| Marker | Meaning |
|:-------|:--------|
| <mark>HBsAg</mark> | Current infection |
| Anti-HBs | Immunity |
| Anti-HBc | Exposure history |

### Prevention
- <mark>Hepatitis B vaccine</mark> (3 doses in UIP)
- <mark>Birth dose within 24 hours</mark> (critical!)
- Safe injection practices
- Blood safety
- HBIG for high-risk exposures

---

## 🔵 Rotavirus

### Key Points
- <mark>Most common cause of severe diarrhea in children <5</mark>
- Fecal-oral transmission
- Causes severe watery diarrhea, vomiting, fever
- Can lead to rapid dehydration

### Prevention
- <mark>Rotavirus vaccine (ROTAVAC)</mark> - Indian vaccine
- Given orally at 6, 10, 14 weeks
- Part of UIP

---

## 🟣 Pneumococcal Disease

### Causative Agent
- <mark>Streptococcus pneumoniae</mark>

### Diseases Caused
- Pneumonia
- Meningitis
- Bacteremia
- Otitis media

### Prevention
- <mark>PCV (Pneumococcal Conjugate Vaccine)</mark>
- Schedule: 6, 14 weeks + 9 months booster
- Part of UIP (expanding coverage)

---

## 🔴 Hib (Haemophilus influenzae type b)

### Diseases Caused
- Meningitis
- Pneumonia
- Epiglottitis

### Prevention
- <mark>Hib vaccine</mark> (included in Pentavalent)

---

## 📋 Universal Immunization Programme (UIP) Schedule

| Age | Vaccines |
|:----|:---------|
| **Birth** | BCG, OPV-0, <mark>Hep B-0</mark> |
| **6 weeks** | Penta-1, OPV-1, Rota-1, IPV-1, PCV-1 |
| **10 weeks** | Penta-2, OPV-2, Rota-2 |
| **14 weeks** | Penta-3, OPV-3, Rota-3, IPV-2, PCV-2 |
| **9-12 months** | MR-1, JE-1*, Vit A, PCV booster |
| **16-24 months** | DPT booster-1, MR-2, OPV booster, JE-2* |
| **5-6 years** | DPT booster-2 |
| **10 years** | TT |
| **16 years** | TT |
| **Pregnant women** | TT-1, TT-2 (or Td) |

*JE in endemic areas

### Pentavalent Vaccine Contains

:::info
**5 antigens in 1 injection:**
1. **D** - Diphtheria
2. **P** - Pertussis
3. **T** - Tetanus
4. **Hep B** - Hepatitis B
5. **Hib** - Haemophilus influenzae b
:::

---

## ❄️ Vaccine Storage (Cold Chain)

| Temperature | Vaccines |
|:------------|:---------|
| **+2 to +8°C** | Most vaccines |
| **-15 to -25°C** | OPV (frozen) |

:::danger
**Never Freeze These:**
- DPT
- Pentavalent
- Hepatitis B
- IPV
- PCV
- Td
:::

---

## 🎯 Mission Indradhanush

:::success
**Accelerated Immunization Campaign:**
- Focus on missed/partially vaccinated children
- Target: Urban slums, difficult areas
- Intensified Mission Indradhanush (IMI)
- Quarterly rounds
:::

---

## 👨‍⚕️ MPHW Role

- Conduct immunization sessions
- Maintain cold chain properly
- Prepare due lists
- Track dropouts
- Monitor and report AEFI
- Community mobilization
- Session planning

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Diphtheria = Pseudomembrane, bull neck
2. Tetanus = Trismus, opisthotonus
3. TT = 5 doses for lifelong immunity
4. Mumps = Parotid swelling, orchitis risk
5. Rubella = CRS (deafness, cataracts, heart)
6. Hep B birth dose within 24 hours
7. Pentavalent = DPT + HepB + Hib
8. Cold chain = +2 to +8°C
9. Never freeze DPT, Pentavalent, HepB
10. Mission Indradhanush = missed children
:::
`,
    contentHi: `
# 💉 टीका-रोकथाम योग्य रोग

---

## 🔴 डिप्थीरिया

### कारक एजेंट
- <mark>कोरीनेबैक्टीरियम डिप्थीरिया</mark>
- एक्सोटॉक्सिन उत्पन्न करता है

### नैदानिक विशेषताएं

:::danger
**पैथोग्नोमोनिक संकेत:**
- <mark>स्यूडोमेम्ब्रेन</mark> (भूरी-सफेद झिल्ली)
- हटाने पर खून निकलता है
:::

| विशेषता | विवरण |
|:--------|:------|
| गले में खराश | शुरुआती लक्षण |
| स्यूडोमेम्ब्रेन | भूरी-सफेद |
| <mark>बुल नेक</mark> | गर्दन की सूजन |
| टॉक्सिन प्रभाव | मायोकार्डाइटिस, न्यूरोपैथी |

### उपचार
- <mark>डिप्थीरिया एंटीटॉक्सिन (DAT)</mark>
- एंटीबायोटिक (पेनिसिलिन)
- आइसोलेशन

### रोकथाम
- <mark>DPT वैक्सीन</mark> (पेंटावैलेंट में)

---

## 🔵 टेटनस

### कारक एजेंट
- <mark>क्लॉस्ट्रीडियम टेटानी</mark>
- मिट्टी, जंग में बीजाणु
- <mark>टेटानोस्पास्मिन</mark> (न्यूरोटॉक्सिन)

### नैदानिक विशेषताएं

:::danger
**क्लासिक त्रय:**
1. <mark>ट्रिसमस</mark> (जबड़ा लॉक)
2. <mark>रिसस सार्डोनिकस</mark> (मुस्कान जैसा चेहरा)
3. <mark>ओपिस्थोटोनस</mark> (शरीर धनुष जैसा)
:::

### नवजात टेटनस

| विशेषता | विवरण |
|:--------|:------|
| शुरुआत | जन्म के 3-14 दिन बाद |
| संकेत | दूध नहीं पी सकता |
| मृत्यु दर | बहुत अधिक |

### उपचार
- <mark>TIG</mark> (टेटनस इम्युनोग्लोबुलिन)
- घाव की सफाई
- एंटीबायोटिक (मेट्रोनिडाज़ोल)

### रोकथाम
- <mark>TT वैक्सीन</mark> (आजीवन प्रतिरक्षा के लिए 5 खुराक)
- गर्भवती के लिए TT (2 खुराक)
- स्वच्छ प्रसव

---

## 🟡 मम्प्स (गलसुआ)

### नैदानिक विशेषताएं
- बुखार, सिरदर्द
- <mark>पैरोटिड ग्रंथि सूजन</mark>
- चबाने पर दर्द

### जटिलताएं
- <mark>ऑर्काइटिस</mark> (यौवन के बाद पुरुषों में)
- मेनिनजाइटिस
- बहरापन

### रोकथाम
- <mark>MMR वैक्सीन</mark>

---

## 🟢 रूबेला (जर्मन खसरा)

### नैदानिक विशेषताएं
- हल्का बुखार
- <mark>लिम्फैडेनोपैथी</mark> (कान के पीछे)
- हल्का रैश

### जन्मजात रूबेला सिंड्रोम (CRS)

:::danger
**CRS - पहली तिमाही में सबसे खतरनाक:**
- <mark>बहरापन</mark>
- <mark>मोतियाबिंद</mark>
- <mark>जन्मजात हृदय दोष</mark>
- बौद्धिक विकलांगता
:::

### रोकथाम
- <mark>MR/MMR वैक्सीन</mark>

---

## 🟠 हेपेटाइटिस B

### संचरण
- रक्त और शरीर के तरल
- यौन संपर्क
- <mark>माता से बच्चे (जन्मकालीन)</mark>
- असुरक्षित इंजेक्शन

### निदान

| मार्कर | अर्थ |
|:-------|:-----|
| <mark>HBsAg</mark> | वर्तमान संक्रमण |
| Anti-HBs | प्रतिरक्षा |

### रोकथाम
- <mark>हेपेटाइटिस B वैक्सीन</mark>
- <mark>जन्म खुराक 24 घंटे में</mark> (महत्वपूर्ण!)
- सुरक्षित इंजेक्शन

---

## 🔵 रोटावायरस

- <mark>बच्चों में गंभीर दस्त का सबसे आम कारण</mark>
- मल-मौखिक संचरण

### रोकथाम
- <mark>रोटावैक वैक्सीन</mark> (भारतीय)
- 6, 10, 14 सप्ताह में मौखिक

---

## 🟣 न्यूमोकोकल रोग

- <mark>स्ट्रेप्टोकोकस न्यूमोनिया</mark>
- निमोनिया, मेनिनजाइटिस

### रोकथाम
- <mark>PCV वैक्सीन</mark>
- 6, 14 सप्ताह + 9 महीने बूस्टर

---

## 📋 UIP अनुसूची

| उम्र | टीके |
|:-----|:-----|
| **जन्म** | BCG, OPV-0, <mark>Hep B-0</mark> |
| **6 सप्ताह** | पेंटा-1, OPV-1, रोटा-1, IPV-1, PCV-1 |
| **10 सप्ताह** | पेंटा-2, OPV-2, रोटा-2 |
| **14 सप्ताह** | पेंटा-3, OPV-3, रोटा-3, IPV-2, PCV-2 |
| **9-12 महीने** | MR-1, JE-1*, विट A, PCV बूस्टर |
| **16-24 महीने** | DPT बूस्टर-1, MR-2, OPV बूस्टर |
| **5-6 वर्ष** | DPT बूस्टर-2 |
| **10 वर्ष** | TT |
| **16 वर्ष** | TT |

### पेंटावैलेंट वैक्सीन

:::info
**1 इंजेक्शन में 5 एंटीजन:**
1. **D** - डिप्थीरिया
2. **P** - पर्टुसिस
3. **T** - टेटनस
4. **Hep B** - हेपेटाइटिस B
5. **Hib** - हीमोफिलस इन्फ्लुएंजा b
:::

---

## ❄️ वैक्सीन भंडारण

| तापमान | टीके |
|:-------|:-----|
| **+2 से +8°C** | अधिकांश टीके |
| **-15 से -25°C** | OPV (जमा) |

:::danger
**कभी फ्रीज न करें:**
- DPT, पेंटावैलेंट
- हेपेटाइटिस B
- IPV, PCV
:::

---

## 🎯 मिशन इंद्रधनुष

:::success
**त्वरित टीकाकरण अभियान:**
- छूटे/आंशिक टीकाकृत बच्चे
- शहरी झुग्गी, कठिन क्षेत्र
- तिमाही राउंड
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. डिप्थीरिया = स्यूडोमेम्ब्रेन, बुल नेक
2. टेटनस = ट्रिसमस, ओपिस्थोटोनस
3. TT = आजीवन के लिए 5 खुराक
4. मम्प्स = पैरोटिड सूजन, ऑर्काइटिस
5. रूबेला = CRS (बहरापन, मोतियाबिंद, हृदय)
6. हेप B जन्म खुराक 24 घंटे में
7. पेंटावैलेंट = DPT + HepB + Hib
8. कोल्ड चेन = +2 से +8°C
9. DPT, पेंटावैलेंट कभी फ्रीज न करें
10. मिशन इंद्रधनुष = छूटे बच्चों के लिए
:::
`
  },
  {
    id: 9,
    titleEn: "Neglected Tropical Diseases (NTDs)",
    titleHi: "उपेक्षित उष्णकटिबंधीय रोग (NTDs)",
    contentEn: `
# 🌴 Neglected Tropical Diseases (NTDs)

---

## 🔴 Kala-azar (Visceral Leishmaniasis)

### Epidemiology
- Endemic in <mark>Bihar, Jharkhand, West Bengal, eastern UP</mark>
- Elimination target: <mark><1 case per 10,000 population</mark>

### Causative Agent
- <mark>Leishmania donovani</mark>

### Vector
- <mark>Phlebotomus argentipes</mark> (sandfly)
- Bites at night
- Breeds in cracks, crevices, organic matter

### Clinical Features

:::danger
**Classic Presentation:**
- Prolonged irregular fever (weeks to months)
- <mark>Massive splenomegaly</mark> (crosses umbilicus)
- Hepatomegaly
- Weight loss, weakness
- <mark>Pancytopenia</mark>
- Hyperpigmentation (Kala-azar = "black fever")
- <mark>100% fatal if untreated</mark>
:::

### Diagnosis

| Test | Type |
|:-----|:-----|
| <mark>rK39 rapid test</mark> | Field test |
| Bone marrow/splenic aspirate | Gold standard |
| Serology | Supporting |

### Treatment
- <mark>Single dose Liposomal Amphotericin B (AmBisome)</mark> - preferred
- Miltefosine (oral)
- Combination therapy

### Post Kala-azar Dermal Leishmaniasis (PKDL)
- Skin lesions after treatment
- Important reservoir
- Must treat to prevent transmission

### Prevention
- <mark>IRS (Indoor Residual Spraying)</mark> with DDT/synthetic pyrethroids
- Personal protection (bed nets, repellents)
- Early case detection and complete treatment
- PKDL treatment

---

## 🔵 Lymphatic Filariasis

### Causative Agent
- <mark>Wuchereria bancrofti</mark> (most common in India)
- Brugia malayi

### Vector
- <mark>Culex quinquefasciatus</mark> (night-biting mosquito)
- Breeds in polluted water

### Transmission
- Mosquito bite
- Microfilariae in blood (nocturnal periodicity)

### Clinical Features

| Stage | Features |
|:------|:---------|
| **Acute** | Acute adenolymphangitis (ADL), fever, lymphangitis |
| **Chronic** | <mark>Lymphedema</mark>, <mark>Elephantiasis</mark>, <mark>Hydrocele</mark>, Chyluria |

### Diagnosis

| Test | Timing |
|:-----|:-------|
| Night blood smear | 10 PM - 2 AM |
| <mark>ICT card test</mark> | Antigen detection (any time) |
| Ultrasound | "Filarial dance" sign |

### Treatment
- DEC (Diethylcarbamazine) - individual treatment
- Ivermectin (with MDA)
- Management of lymphedema and hydrocele

### Prevention - MDA (Mass Drug Administration)

:::success
**MDA Strategy:**
- Annual single dose in endemic areas
- <mark>DEC + Albendazole</mark> (2-drug)
- <mark>IDA (Ivermectin + DEC + Albendazole)</mark> - triple drug
- 5 effective rounds to achieve elimination
:::

### Morbidity Management (MMDP)
- Lymphedema care (washing, elevation, exercises)
- Hydrocele surgery camps

---

## 🟢 Leprosy

### Causative Agent
- <mark>Mycobacterium leprae</mark>
- Acid-fast bacillus
- Slow-growing

### Transmission
- Prolonged close contact
- Respiratory droplets
- Low transmissibility

### WHO Classification

| Type | Criteria |
|:-----|:---------|
| <mark>Paucibacillary (PB)</mark> | 1-5 skin lesions, single nerve |
| <mark>Multibacillary (MB)</mark> | >5 skin lesions, >1 nerve |

### Clinical Features

| Feature | Details |
|:--------|:--------|
| Skin patches | Hypopigmented or erythematous |
| <mark>Sensory loss</mark> | In patches (cardinal sign) |
| <mark>Nerve thickening</mark> | Peripheral nerves |
| Deformities | Claw hand, foot drop, facial palsy |

### Diagnosis
- Clinical (skin lesion + sensory loss + nerve thickening)
- Slit-skin smear (for classification)

### Treatment - MDT (Multi Drug Therapy)

| Type | Duration | Drugs |
|:-----|:---------|:------|
| <mark>PB</mark> | 6 months | Rifampicin (monthly) + Dapsone (daily) |
| <mark>MB</mark> | 12 months | Rifampicin + Clofazimine (monthly) + Dapsone (daily) |

### Leprosy Reactions

| Type | Features | Treatment |
|:-----|:---------|:----------|
| **Type 1** (Reversal) | Nerve/skin inflammation | Corticosteroids |
| **Type 2** (ENL) | Erythema Nodosum Leprosum (MB patients) | Steroids, Thalidomide |

### Disability Prevention
- Early treatment
- Wound care
- Self-care practices
- Protective footwear
- Reconstructive surgery

### NLEP Achievement
- <mark>Elimination achieved nationally (<1/10,000)</mark>
- Focus on new case detection
- Disability prevention
- Stigma reduction

---

## 🔴 Rabies

### Causative Agent
- <mark>Rabies virus</mark> (Rhabdovirus/Lyssavirus)

### Transmission
- Animal bite (dogs most common in India - 96%)
- Scratch from infected animal
- Rarely: Organ transplant, bat exposure

### Clinical Forms

| Form | Features |
|:-----|:---------|
| **Furious rabies** | Agitation, <mark>hydrophobia</mark>, aerophobia |
| **Paralytic rabies** | Ascending paralysis |

:::danger
**CRITICAL:**
- Incubation: Weeks to months (shorter if bite near head)
- <mark>100% fatal once symptomatic</mark>
- NO CURE after symptoms appear
:::

### Post-Exposure Prophylaxis (PEP)

| Category | Description | Treatment |
|:---------|:------------|:----------|
| **I** | Touch, feeding, licks on intact skin | No PEP needed |
| **II** | Minor scratches, licks on broken skin | <mark>Vaccine only</mark> |
| **III** | Deep wounds, licks on mucosa, bat exposure | <mark>Vaccine + RIG</mark> |

### Wound Management

:::warning
**Immediate First Aid:**
1. Wash with soap and water for <mark>15 minutes</mark>
2. Apply povidone iodine
3. Do NOT suture immediately
4. Seek medical care urgently
:::

### Anti-Rabies Vaccine (ARV)

| Regimen | Schedule |
|:--------|:---------|
| **IM regimen** | <mark>0, 3, 7, 14, 28 days (5 doses)</mark> |
| **ID regimen** | 2-site ID on 0, 3, 7, 28 days (4 visits) |

### Rabies Immunoglobulin (RIG)

| Type | Dose |
|:-----|:-----|
| <mark>HRIG</mark> (Human) | 20 IU/kg |
| <mark>ERIG</mark> (Equine) | 40 IU/kg |

- Infiltrate around wound
- Give once, at start of vaccination
- Only for Category III

### Prevention
- Dog vaccination (<mark>70% coverage eliminates rabies</mark>)
- Stray dog population control (ABC program)
- Pre-exposure prophylaxis for high-risk groups
- Community awareness

---

## 📋 NTD Elimination Strategies

| Strategy | Diseases |
|:---------|:---------|
| <mark>Mass Drug Administration</mark> | Filariasis (DEC+Alb), Trachoma (Azithromycin) |
| **WASH interventions** | Multiple NTDs |
| **Case management** | Kala-azar, Leprosy |
| **Vector control** | Kala-azar (IRS), Filariasis (mosquito control) |

---

## 👨‍⚕️ MPHW Role

- Active case search for NTDs
- Drug distribution during MDA
- Treatment support (MDT for leprosy)
- Wound care and self-care training
- Disability prevention education
- Vector surveillance
- PEP awareness for rabies
- Stigma reduction
- Reporting cases

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Kala-azar = Sandfly, massive splenomegaly
2. Kala-azar elimination: <1/10,000
3. Filariasis = Culex, elephantiasis, hydrocele
4. MDA for filariasis: DEC + Albendazole
5. Leprosy PB = 6 months MDT
6. Leprosy MB = 12 months MDT
7. Leprosy elimination: <1/10,000 (achieved nationally)
8. Rabies = 100% fatal once symptomatic
9. ARV IM: 0, 3, 7, 14, 28 days (5 doses)
10. Dog vaccination 70% = eliminates rabies
:::
`,
    contentHi: `
# 🌴 उपेक्षित उष्णकटिबंधीय रोग (NTDs)

---

## 🔴 काला-अजार (विसेरल लीशमैनियासिस)

### महामारी विज्ञान
- <mark>बिहार, झारखंड, पश्चिम बंगाल, पूर्वी UP</mark> में स्थानिक
- उन्मूलन लक्ष्य: <mark><1 केस प्रति 10,000 जनसंख्या</mark>

### कारक एजेंट
- <mark>लीशमैनिया डोनोवानी</mark>

### वेक्टर
- <mark>फ्लेबोटोमस अर्जेंटाइप्स</mark> (सैंडफ्लाई)
- रात में काटता है
- दरारों, जैविक पदार्थ में पनपता है

### नैदानिक विशेषताएं

:::danger
**क्लासिक प्रस्तुति:**
- लंबा अनियमित बुखार (सप्ताह से महीने)
- <mark>विशाल स्प्लेनोमेगाली</mark> (नाभि पार)
- हेपेटोमेगाली
- वजन घटना, कमजोरी
- <mark>पैनसाइटोपेनिया</mark>
- हाइपरपिगमेंटेशन (काला-अजार = "काला बुखार")
- <mark>बिना इलाज 100% घातक</mark>
:::

### निदान

| परीक्षण | प्रकार |
|:--------|:------|
| <mark>rK39 रैपिड टेस्ट</mark> | फील्ड टेस्ट |
| बोन मैरो/स्प्लीनिक एस्पिरेट | गोल्ड स्टैंडर्ड |

### उपचार
- <mark>एकल खुराक लिपोसोमल एम्फोटेरिसिन B</mark> - पसंदीदा
- मिल्टेफोसीन (मौखिक)

### रोकथाम
- <mark>IRS (इनडोर रेसिड्युअल स्प्रेइंग)</mark>
- व्यक्तिगत सुरक्षा
- शीघ्र केस पता और उपचार

---

## 🔵 लिम्फैटिक फाइलेरियासिस

### कारक एजेंट
- <mark>वुचेरेरिया बैंक्रोफ्टी</mark> (भारत में सबसे आम)

### वेक्टर
- <mark>क्यूलेक्स क्विंक्वेफैसिएटस</mark>
- प्रदूषित पानी में पनपता है

### नैदानिक विशेषताएं

| चरण | विशेषताएं |
|:----|:---------|
| **तीव्र** | बुखार, लिम्फांगाइटिस |
| **पुरानी** | <mark>लिम्फेडेमा</mark>, <mark>एलिफेंटियासिस</mark>, <mark>हाइड्रोसील</mark> |

### निदान

| परीक्षण | समय |
|:--------|:----|
| रात्रि रक्त स्मीयर | 10 PM - 2 AM |
| <mark>ICT कार्ड टेस्ट</mark> | कभी भी |

### रोकथाम - MDA

:::success
**MDA रणनीति:**
- स्थानिक क्षेत्रों में वार्षिक एकल खुराक
- <mark>DEC + एल्बेंडाजोल</mark>
- <mark>IDA (आइवरमेक्टिन + DEC + एल्बेंडाजोल)</mark> - ट्रिपल
- उन्मूलन के लिए 5 प्रभावी राउंड
:::

### रुग्णता प्रबंधन
- लिम्फेडेमा देखभाल (धोना, ऊंचाई, व्यायाम)
- हाइड्रोसील सर्जरी कैंप

---

## 🟢 कुष्ठ रोग (Leprosy)

### कारक एजेंट
- <mark>माइकोबैक्टीरियम लेप्री</mark>
- एसिड-फास्ट बैसिलस
- धीमी वृद्धि

### WHO वर्गीकरण

| प्रकार | मानदंड |
|:-------|:------|
| <mark>पॉसीबैसिलरी (PB)</mark> | 1-5 त्वचा घाव, एकल तंत्रिका |
| <mark>मल्टीबैसिलरी (MB)</mark> | >5 त्वचा घाव, >1 तंत्रिका |

### नैदानिक विशेषताएं

| विशेषता | विवरण |
|:--------|:------|
| त्वचा पैच | हाइपोपिगमेंटेड या एरिथेमेटस |
| <mark>संवेदना हानि</mark> | पैच में (मुख्य संकेत) |
| <mark>तंत्रिका मोटाई</mark> | परिधीय तंत्रिकाएं |
| विकृतियां | क्लॉ हैंड, फुट ड्रॉप |

### उपचार - MDT

| प्रकार | अवधि | दवाएं |
|:-------|:-----|:------|
| <mark>PB</mark> | 6 महीने | रिफैम्पिसिन + डैप्सोन |
| <mark>MB</mark> | 12 महीने | रिफैम्पिसिन + क्लोफाज़ीमीन + डैप्सोन |

### कुष्ठ प्रतिक्रियाएं

| प्रकार | विशेषताएं |
|:-------|:---------|
| **टाइप 1** | तंत्रिका/त्वचा सूजन |
| **टाइप 2 (ENL)** | एरिथेमा नोडोसम (MB में) |

### NLEP उपलब्धि
- <mark>राष्ट्रीय स्तर पर उन्मूलन (<1/10,000)</mark>
- नए केस पता पर ध्यान
- विकलांगता रोकथाम

---

## 🔴 रेबीज

### कारक एजेंट
- <mark>रेबीज वायरस</mark>

### संचरण
- पशु काटने (भारत में कुत्ते 96%)
- संक्रमित पशु का खरोंच

### नैदानिक रूप

| रूप | विशेषताएं |
|:----|:---------|
| **उग्र रेबीज** | उत्तेजना, <mark>हाइड्रोफोबिया</mark> |
| **पैरालिटिक** | आरोही पक्षाघात |

:::danger
**महत्वपूर्ण:**
- ऊष्मायन: सप्ताह से महीने
- <mark>लक्षण शुरू होने पर 100% घातक</mark>
- लक्षणों के बाद कोई इलाज नहीं
:::

### पोस्ट-एक्सपोजर प्रोफाइलैक्सिस (PEP)

| श्रेणी | विवरण | उपचार |
|:-------|:------|:------|
| **I** | छूना, खिलाना | PEP नहीं |
| **II** | मामूली खरोंच | <mark>केवल वैक्सीन</mark> |
| **III** | गहरे घाव, म्यूकोसा पर चाटना | <mark>वैक्सीन + RIG</mark> |

### घाव प्रबंधन

:::warning
**तत्काल प्राथमिक चिकित्सा:**
1. साबुन-पानी से <mark>15 मिनट</mark> धोएं
2. पोविडोन आयोडीन लगाएं
3. तुरंत टांके न लगाएं
4. तुरंत चिकित्सा लें
:::

### एंटी-रेबीज वैक्सीन (ARV)

| रेजीमेन | अनुसूची |
|:--------|:-------|
| **IM** | <mark>0, 3, 7, 14, 28 दिन (5 खुराक)</mark> |
| **ID** | 0, 3, 7, 28 दिन (4 विजिट) |

### रेबीज इम्युनोग्लोबुलिन (RIG)

| प्रकार | खुराक |
|:-------|:------|
| <mark>HRIG</mark> | 20 IU/kg |
| <mark>ERIG</mark> | 40 IU/kg |

- घाव के चारों ओर इन्फिल्ट्रेट करें
- केवल श्रेणी III के लिए

### रोकथाम
- कुत्ते का टीकाकरण (<mark>70% कवरेज से रेबीज समाप्त</mark>)
- आवारा कुत्ते नियंत्रण (ABC कार्यक्रम)

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. काला-अजार = सैंडफ्लाई, विशाल स्प्लीन
2. काला-अजार उन्मूलन: <1/10,000
3. फाइलेरियासिस = क्यूलेक्स, एलिफेंटियासिस
4. MDA: DEC + एल्बेंडाजोल
5. कुष्ठ PB = 6 महीने MDT
6. कुष्ठ MB = 12 महीने MDT
7. कुष्ठ उन्मूलन: <1/10,000 (प्राप्त)
8. रेबीज = लक्षण पर 100% घातक
9. ARV IM: 0, 3, 7, 14, 28 दिन
10. 70% कुत्ते टीकाकरण = रेबीज समाप्त
:::
`
  },
  {
    id: 10,
    titleEn: "Emerging & Re-emerging Infections",
    titleHi: "उभरते और पुनः उभरते संक्रमण",
    contentEn: `
# 🦠 Emerging & Re-emerging Infections

---

## 📖 Definitions

| Type | Definition | Examples |
|:-----|:-----------|:---------|
| <mark>Emerging</mark> | New infection appearing in population for first time | COVID-19, Zika, Nipah |
| <mark>Re-emerging</mark> | Known infection increasing after decline | MDR-TB, Dengue resurgence, Measles outbreaks |

---

## 🔄 Factors Contributing to Emergence

### Microbial Factors
- Genetic mutation/adaptation
- Antimicrobial resistance
- Evolution of new strains

### Human/Social Factors
- Population growth
- Urbanization
- International travel
- Behavioral changes
- Healthcare practices

### Environmental Factors
- Climate change
- Deforestation
- Land use changes
- Agriculture intensification

---

## 🐾 Zoonoses

:::info
**Definition:** Infections transmitted from animals to humans
:::

### Common Zoonoses

| Disease | Animal Source | Transmission |
|:--------|:--------------|:-------------|
| **Rabies** | Dogs, wildlife | Bite |
| **Avian Influenza** | Birds | Direct contact, respiratory |
| **Swine Flu** | Pigs | Respiratory |
| **Nipah** | Bats, pigs | Direct contact, contaminated food |
| **Anthrax** | Cattle, sheep | Contact, ingestion |
| **Brucellosis** | Cattle, goats | Contact, unpasteurized dairy |
| **Leptospirosis** | Rodents | Contact with infected urine/water |
| **Plague** | Rodents | Flea bite |
| **Scrub typhus** | Rodents | Mite bite |

### One Health Approach

:::success
**Interconnected Health:**
- Human health
- Animal health
- Environmental health

**Key Principle:** Collaborative, multidisciplinary approach essential for zoonoses prevention
:::

---

## 🦇 Nipah Virus

### Epidemiology
- Outbreaks in <mark>India (Kerala)</mark>, Bangladesh, Malaysia
- <mark>Case Fatality Rate: 40-75%</mark>

### Transmission
- Fruit bats (reservoir)
- Direct contact with infected pigs/humans
- Contaminated date palm sap
- Person-to-person (close contact)

### Clinical Features
- Fever, headache
- Encephalitis
- Respiratory illness
- High mortality

### Prevention
- Avoid exposure to bats
- Don't drink raw date palm sap
- Strict infection control in healthcare
- No vaccine available yet

---

## 🐔 Avian Influenza (Bird Flu)

### Strains of Concern
- <mark>H5N1</mark>, H7N9

### Transmission to Humans
- Direct contact with infected birds
- Limited human-to-human spread currently

### Clinical Features
- Severe respiratory illness
- High mortality

### Prevention
- Avoid contact with sick/dead birds
- Cook poultry thoroughly
- Surveillance in poultry
- Culling of infected flocks

:::warning
**Pandemic Potential:**
Concern if virus develops efficient human-to-human transmission
:::

---

## 💊 Antimicrobial Resistance (AMR)

:::danger
**GLOBAL HEALTH THREAT:**
Microorganisms that survive exposure to antimicrobials that would normally kill them
:::

### Major Resistant Organisms

| Organism | Abbreviation |
|:---------|:-------------|
| Methicillin-resistant Staph aureus | <mark>MRSA</mark> |
| Multi-drug resistant TB | <mark>MDR-TB</mark> |
| Extended-spectrum beta-lactamase | <mark>ESBL</mark> |
| Carbapenem-resistant Enterobacteriaceae | <mark>CRE</mark> |
| Drug-resistant malaria | - |

### Causes of AMR

| Factor | Details |
|:-------|:--------|
| **Overuse/misuse** | Unnecessary antibiotic prescriptions |
| **Incomplete courses** | Stopping early promotes resistance |
| **Agricultural use** | Antibiotics in animals/feed |
| **Poor infection control** | Spread in healthcare settings |
| **Lack of new drugs** | Limited pharmaceutical development |

### Consequences
- Treatment failures
- Increased mortality
- Higher healthcare costs
- Return to pre-antibiotic era

### Prevention Strategies

**For Patients:**
- Complete prescribed course
- Don't demand antibiotics
- Don't share antibiotics

**For Healthcare:**
- Antimicrobial stewardship
- Infection prevention
- Culture before antibiotics (when possible)

### National Action Plan on AMR

:::info
**5 Strategic Priorities:**
1. Awareness and understanding
2. Surveillance
3. Infection prevention
4. Optimizing antimicrobial use
5. Research and innovation
:::

---

## 🔍 Outbreak Investigation

### 9 Steps of Investigation

| Step | Action |
|:-----|:-------|
| **1** | Prepare for fieldwork (team, supplies) |
| **2** | Establish existence of outbreak (compare current vs. expected) |
| **3** | Verify diagnosis (clinical, laboratory) |
| **4** | Define and identify cases (case definition) |
| **5** | Describe outbreak (Time, Place, Person) |
| **6** | Develop hypothesis (source, transmission) |
| **7** | Evaluate hypothesis (analytical studies) |
| **8** | Implement control measures |
| **9** | Communicate findings (report, public communication) |

### Descriptive Epidemiology

| Dimension | Tool |
|:----------|:-----|
| **Time** | <mark>Epidemic curve</mark> |
| **Place** | <mark>Spot map</mark> |
| **Person** | Age, sex, characteristics analysis |

---

## 🏥 Infection Prevention in Healthcare

### Standard Precautions (For ALL Patients)

| Precaution | Details |
|:-----------|:--------|
| Hand hygiene | Before and after patient contact |
| PPE | When indicated (gloves, gown, mask) |
| Respiratory hygiene | Cough etiquette |
| Safe injection | One needle, one syringe, one patient |
| Environmental cleaning | Regular disinfection |
| Waste management | Proper segregation and disposal |
| Linen handling | Safe collection and laundering |

### Transmission-Based Precautions

| Type | Measures | Diseases |
|:-----|:---------|:---------|
| <mark>Contact</mark> | Gown + gloves, single room | MRSA, VRE, C. diff, scabies |
| <mark>Droplet</mark> | Surgical mask within 1 meter | Influenza, pertussis, meningitis |
| <mark>Airborne</mark> | N95 respirator, negative pressure room | TB, measles, chickenpox |

### Hand Hygiene - 5 Moments

:::success
**WHO 5 Moments for Hand Hygiene:**
1. <mark>Before</mark> touching patient
2. <mark>Before</mark> clean/aseptic procedure
3. <mark>After</mark> body fluid exposure risk
4. <mark>After</mark> touching patient
5. <mark>After</mark> touching patient surroundings
:::

### Healthcare-Associated Infections (HAI)

| Type | Abbreviation |
|:-----|:-------------|
| Catheter-associated UTI | <mark>CAUTI</mark> |
| Surgical site infections | <mark>SSI</mark> |
| Central line-associated bloodstream infections | <mark>CLABSI</mark> |
| Ventilator-associated pneumonia | <mark>VAP</mark> |

---

## ☣️ Bioterrorism Preparedness

### Category A Agents (High Priority)

| Agent | Disease |
|:------|:--------|
| Bacillus anthracis | <mark>Anthrax</mark> |
| Variola major | <mark>Smallpox</mark> |
| Yersinia pestis | <mark>Plague</mark> |
| Clostridium botulinum | Botulism |
| Francisella tularensis | Tularemia |
| Viral hemorrhagic fever viruses | Ebola, Marburg |

### Recognition Clues
- Unusual disease pattern
- Uncommon disease in the area
- Higher than expected severity
- Unusual geographic clustering
- Multiple simultaneous outbreaks

---

## 📊 Syndromic Surveillance

:::info
**Definition:** Surveillance based on symptoms/syndromes rather than confirmed diagnosis
:::

### Syndromes Monitored

| Syndrome | Abbreviation |
|:---------|:-------------|
| Acute Diarrheal Disease | ADD |
| Acute Respiratory Infection | ARI |
| Acute Febrile Illness | AFI |
| Acute Encephalitis Syndrome | <mark>AES</mark> |
| Acute Flaccid Paralysis | <mark>AFP</mark> |

### Value
- Early warning of outbreaks
- Faster than laboratory-based surveillance
- Useful for novel/unknown diseases

---

## 👨‍⚕️ MPHW Role

- Surveillance and timely reporting
- Identifying unusual disease patterns
- Practicing standard precautions
- Community health education
- Outbreak response support
- Contact tracing
- Hand hygiene promotion
- Antibiotic awareness education

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Emerging = new infection; Re-emerging = returning
2. Zoonoses = animal to human transmission
3. One Health = human + animal + environment
4. Nipah CFR: 40-75%
5. AMR = major global threat
6. Complete antibiotic course always
7. Outbreak investigation = 9 steps
8. Hand hygiene = 5 moments
9. Standard precautions = for ALL patients
10. Contact/Droplet/Airborne = transmission-based precautions
11. Syndromic surveillance = early warning system
:::
`,
    contentHi: `
# 🦠 उभरते और पुनः उभरते संक्रमण

---

## 📖 परिभाषाएं

| प्रकार | परिभाषा | उदाहरण |
|:-------|:--------|:-------|
| <mark>उभरता</mark> | पहली बार जनसंख्या में नया संक्रमण | COVID-19, जीका, निपाह |
| <mark>पुनः उभरता</mark> | गिरावट के बाद बढ़ता ज्ञात संक्रमण | MDR-TB, डेंगू |

---

## 🔄 उभरने में योगदान करने वाले कारक

### सूक्ष्मजीव कारक
- आनुवंशिक उत्परिवर्तन
- रोगाणुरोधी प्रतिरोध
- नए स्ट्रेन का विकास

### मानव/सामाजिक कारक
- जनसंख्या वृद्धि
- शहरीकरण
- अंतर्राष्ट्रीय यात्रा
- व्यवहार परिवर्तन

### पर्यावरणीय कारक
- जलवायु परिवर्तन
- वनों की कटाई
- भूमि उपयोग परिवर्तन

---

## 🐾 जूनोसिस

:::info
**परिभाषा:** जानवरों से मनुष्यों में फैलने वाले संक्रमण
:::

### सामान्य जूनोसिस

| रोग | पशु स्रोत | संचरण |
|:----|:---------|:------|
| **रेबीज** | कुत्ते | काटना |
| **एवियन इन्फ्लुएंजा** | पक्षी | सीधा संपर्क |
| **निपाह** | चमगादड़, सूअर | संपर्क, दूषित भोजन |
| **एंथ्रैक्स** | मवेशी | संपर्क |
| **लेप्टोस्पायरोसिस** | चूहे | संक्रमित पानी |

### वन हेल्थ दृष्टिकोण

:::success
**परस्पर जुड़े स्वास्थ्य:**
- मानव स्वास्थ्य
- पशु स्वास्थ्य
- पर्यावरण स्वास्थ्य
:::

---

## 🦇 निपाह वायरस

### महामारी विज्ञान
- <mark>भारत (केरल)</mark>, बांग्लादेश में प्रकोप
- <mark>मृत्यु दर: 40-75%</mark>

### संचरण
- फल चमगादड़ (भंडार)
- संक्रमित सूअर/मनुष्यों से संपर्क
- दूषित ताड़ी का रस
- व्यक्ति से व्यक्ति

### रोकथाम
- चमगादड़ों से बचें
- कच्ची ताड़ी न पिएं
- स्वास्थ्य सुविधाओं में संक्रमण नियंत्रण
- अभी कोई वैक्सीन नहीं

---

## 🐔 एवियन इन्फ्लुएंजा (बर्ड फ्लू)

### चिंता के स्ट्रेन
- <mark>H5N1</mark>, H7N9

### रोकथाम
- बीमार/मृत पक्षियों से बचें
- पोल्ट्री अच्छी तरह पकाएं
- संक्रमित झुंडों को नष्ट करना

---

## 💊 रोगाणुरोधी प्रतिरोध (AMR)

:::danger
**वैश्विक स्वास्थ्य खतरा:**
सूक्ष्मजीव जो रोगाणुरोधी दवाओं से बच जाते हैं
:::

### प्रमुख प्रतिरोधी जीव

| जीव | संक्षेप |
|:----|:-------|
| मेथिसिलिन-प्रतिरोधी स्टैफ | <mark>MRSA</mark> |
| मल्टी-ड्रग प्रतिरोधी TB | <mark>MDR-TB</mark> |
| कार्बापेनेम-प्रतिरोधी | <mark>CRE</mark> |

### AMR के कारण

| कारक | विवरण |
|:-----|:------|
| **अति/दुरुपयोग** | अनावश्यक एंटीबायोटिक |
| **अधूरा कोर्स** | जल्दी बंद करना |
| **कृषि उपयोग** | जानवरों में एंटीबायोटिक |
| **खराब संक्रमण नियंत्रण** | स्वास्थ्य सुविधाओं में फैलाव |

### रोकथाम रणनीतियां

**मरीजों के लिए:**
- निर्धारित कोर्स पूरा करें
- एंटीबायोटिक की मांग न करें
- एंटीबायोटिक साझा न करें

### राष्ट्रीय AMR कार्य योजना

:::info
**5 रणनीतिक प्राथमिकताएं:**
1. जागरूकता
2. निगरानी
3. संक्रमण रोकथाम
4. रोगाणुरोधी उपयोग अनुकूलन
5. अनुसंधान और नवाचार
:::

---

## 🔍 प्रकोप जांच

### जांच के 9 चरण

| चरण | कार्य |
|:----|:------|
| **1** | फील्डवर्क की तैयारी |
| **2** | प्रकोप की पुष्टि |
| **3** | निदान सत्यापन |
| **4** | केस परिभाषा और पहचान |
| **5** | प्रकोप वर्णन (समय, स्थान, व्यक्ति) |
| **6** | परिकल्पना विकास |
| **7** | परिकल्पना मूल्यांकन |
| **8** | नियंत्रण उपाय |
| **9** | निष्कर्ष संचार |

### वर्णनात्मक महामारी विज्ञान

| आयाम | उपकरण |
|:-----|:------|
| **समय** | <mark>महामारी वक्र</mark> |
| **स्थान** | <mark>स्पॉट मैप</mark> |
| **व्यक्ति** | आयु, लिंग विश्लेषण |

---

## 🏥 स्वास्थ्य सुविधाओं में संक्रमण रोकथाम

### मानक सावधानियां (सभी मरीजों के लिए)

| सावधानी | विवरण |
|:--------|:------|
| हाथ स्वच्छता | संपर्क से पहले और बाद |
| PPE | संकेत होने पर |
| श्वसन स्वच्छता | खांसी शिष्टाचार |
| सुरक्षित इंजेक्शन | एक सुई, एक सिरिंज, एक मरीज |
| पर्यावरण सफाई | नियमित कीटाणुशोधन |
| अपशिष्ट प्रबंधन | उचित पृथक्करण |

### संचरण-आधारित सावधानियां

| प्रकार | उपाय | रोग |
|:-------|:-----|:----|
| <mark>संपर्क</mark> | गाउन + दस्ताने | MRSA, C. diff |
| <mark>ड्रॉपलेट</mark> | 1 मीटर में सर्जिकल मास्क | इन्फ्लुएंजा, पर्टुसिस |
| <mark>वायुजनित</mark> | N95, नेगेटिव प्रेशर रूम | TB, खसरा |

### हाथ स्वच्छता - 5 क्षण

:::success
**WHO 5 क्षण:**
1. मरीज को छूने से <mark>पहले</mark>
2. साफ प्रक्रिया से <mark>पहले</mark>
3. शरीर तरल जोखिम के <mark>बाद</mark>
4. मरीज को छूने के <mark>बाद</mark>
5. मरीज के आसपास छूने के <mark>बाद</mark>
:::

### स्वास्थ्य देखभाल-संबंधित संक्रमण (HAI)

| प्रकार | संक्षेप |
|:-------|:-------|
| कैथेटर-संबंधित UTI | <mark>CAUTI</mark> |
| सर्जिकल साइट संक्रमण | <mark>SSI</mark> |
| सेंट्रल लाइन-संबंधित | <mark>CLABSI</mark> |
| वेंटिलेटर-संबंधित निमोनिया | <mark>VAP</mark> |

---

## ☣️ बायोटेररिज्म तैयारी

### श्रेणी A एजेंट

| एजेंट | रोग |
|:------|:----|
| बैसिलस एंथ्रेसिस | <mark>एंथ्रैक्स</mark> |
| वेरियोला मेजर | <mark>स्मॉलपॉक्स</mark> |
| येर्सिनिया पेस्टिस | <mark>प्लेग</mark> |

### पहचान संकेत
- असामान्य रोग पैटर्न
- क्षेत्र में असामान्य रोग
- अपेक्षा से अधिक गंभीरता
- एकाधिक एक साथ प्रकोप

---

## 📊 सिंड्रोमिक निगरानी

:::info
**परिभाषा:** पुष्ट निदान के बजाय लक्षणों पर आधारित निगरानी
:::

### निगरानी किए जाने वाले सिंड्रोम

| सिंड्रोम | संक्षेप |
|:---------|:-------|
| तीव्र दस्त रोग | ADD |
| तीव्र श्वसन संक्रमण | ARI |
| तीव्र ज्वर बीमारी | AFI |
| तीव्र एन्सेफलाइटिस सिंड्रोम | <mark>AES</mark> |
| तीव्र शिथिल पक्षाघात | <mark>AFP</mark> |

### मूल्य
- प्रकोप की शीघ्र चेतावनी
- प्रयोगशाला-आधारित से तेज
- नए/अज्ञात रोगों के लिए उपयोगी

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. उभरता = नया; पुनः उभरता = लौटता
2. जूनोसिस = पशु से मानव
3. वन हेल्थ = मानव + पशु + पर्यावरण
4. निपाह मृत्यु दर: 40-75%
5. AMR = वैश्विक खतरा
6. एंटीबायोटिक कोर्स पूरा करें
7. प्रकोप जांच = 9 चरण
8. हाथ स्वच्छता = 5 क्षण
9. मानक सावधानियां = सभी मरीजों के लिए
10. संपर्क/ड्रॉपलेट/वायुजनित = संचरण-आधारित
11. सिंड्रोमिक निगरानी = शीघ्र चेतावनी
:::
`
  }
];
