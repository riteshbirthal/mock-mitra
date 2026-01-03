export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const publicHealthLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Public Health",
    titleHi: "सार्वजनिक स्वास्थ्य का परिचय",
    contentEn: `
# 🏥 Introduction to Public Health

---

## 📖 What is Public Health?

> **Public Health** is the science and art of preventing disease, prolonging life, and promoting health through organized community efforts.

### Public Health vs Clinical Medicine

| Clinical Medicine | Public Health |
|:------------------|:--------------|
| Individual patient | Population/Community |
| Diagnosis & Treatment | Prevention & Promotion |
| One person at a time | Thousands at once |

---

## 🎯 Core Functions

| Function | Description | MPHW Role |
|:---------|:------------|:----------|
| **Assessment** | Monitor health status | Disease surveillance |
| **Policy Development** | Create plans | Follow guidelines |
| **Assurance** | Ensure services | Immunization, ANC |

---

## 📊 Health Indicators

### Mortality Indicators

| Indicator | Definition |
|:----------|:-----------|
| **Crude Death Rate** | Deaths per 1000 population |
| **IMR** | Infant deaths per 1000 live births |
| **MMR** | Maternal deaths per 100,000 live births |
| **NMR** | Neonatal deaths per 1000 live births |

### Morbidity Indicators

| Indicator | Definition |
|:----------|:-----------|
| **Incidence** | New cases in a period |
| **Prevalence** | Total cases at a point |
| **Attack Rate** | Cases among exposed |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Public Health = Population focus
2. Prevention > Cure
3. 3 Core functions: Assessment, Policy, Assurance
4. Incidence = New cases
5. Prevalence = Total cases
:::
`,
    contentHi: `
# 🏥 सार्वजनिक स्वास्थ्य का परिचय

---

## 📖 सार्वजनिक स्वास्थ्य क्या है?

> **सार्वजनिक स्वास्थ्य** संगठित सामुदायिक प्रयासों के माध्यम से रोग को रोकने, जीवन को लम्बा करने और स्वास्थ्य को बढ़ावा देने का विज्ञान और कला है।

### सार्वजनिक स्वास्थ्य बनाम नैदानिक चिकित्सा

| नैदानिक चिकित्सा | सार्वजनिक स्वास्थ्य |
|:----------------|:------------------|
| व्यक्तिगत रोगी | जनसंख्या/समुदाय |
| निदान और उपचार | रोकथाम और प्रचार |
| एक समय में एक व्यक्ति | एक साथ हजारों |

---

## 🎯 मुख्य कार्य

| कार्य | विवरण | MPHW भूमिका |
|:------|:------|:----------|
| **आकलन** | स्वास्थ्य निगरानी | रोग निगरानी |
| **नीति विकास** | योजनाएं बनाना | दिशानिर्देश पालन |
| **आश्वासन** | सेवाएं सुनिश्चित | टीकाकरण, ANC |

---

## 📊 स्वास्थ्य संकेतक

### मृत्यु दर संकेतक

| संकेतक | परिभाषा |
|:-------|:--------|
| **क्रूड मृत्यु दर** | प्रति 1000 जनसंख्या |
| **IMR** | प्रति 1000 जीवित जन्म |
| **MMR** | प्रति 100,000 जीवित जन्म |

### रुग्णता संकेतक

| संकेतक | परिभाषा |
|:-------|:--------|
| **घटना** | अवधि में नए मामले |
| **प्रसार** | एक बिंदु पर कुल मामले |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सार्वजनिक स्वास्थ्य = जनसंख्या फोकस
2. रोकथाम > इलाज
3. 3 मुख्य कार्य: आकलन, नीति, आश्वासन
4. घटना = नए मामले
5. प्रसार = कुल मामले
:::
`
  },
  {
    id: 2,
    titleEn: "Levels of Prevention",
    titleHi: "रोकथाम के स्तर",
    contentEn: `
# 🛡️ Levels of Prevention

---

## 📊 Three Levels

| Level | Goal | Examples |
|:------|:-----|:---------|
| **Primary** | Prevent disease occurrence | Vaccination, health education |
| **Secondary** | Early detection & treatment | Screening, early diagnosis |
| **Tertiary** | Reduce disability | Rehabilitation |

---

## 1️⃣ Primary Prevention

> Prevent disease before it occurs

### Methods
- **Health Promotion:** Education, lifestyle
- **Specific Protection:** Vaccination, PPE

### Examples

| Intervention | Disease Prevented |
|:-------------|:------------------|
| Vaccination | Measles, Polio, TB |
| Safe water | Cholera, Typhoid |
| Bed nets | Malaria |
| Hand washing | Diarrhea |

---

## 2️⃣ Secondary Prevention

> Detect and treat early

### Methods
- Screening programs
- Early diagnosis
- Prompt treatment

### Examples

| Screening | Disease |
|:----------|:--------|
| Sputum microscopy | TB |
| Blood smear/RDT | Malaria |
| Pap smear | Cervical cancer |
| Blood pressure | Hypertension |

---

## 3️⃣ Tertiary Prevention

> Reduce complications and disability

### Methods
- Rehabilitation
- Disability limitation
- Prevent complications

### Examples
- Physiotherapy after stroke
- Dialysis for kidney failure
- Prosthetics for amputees

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Primary = Prevent disease (vaccination)
2. Secondary = Early detection (screening)
3. Tertiary = Reduce disability (rehabilitation)
4. Prevention is better than cure
5. Most cost-effective = Primary prevention
:::
`,
    contentHi: `
# 🛡️ रोकथाम के स्तर

---

## 📊 तीन स्तर

| स्तर | लक्ष्य | उदाहरण |
|:-----|:------|:-------|
| **प्राथमिक** | रोग होने से रोकें | टीकाकरण, स्वास्थ्य शिक्षा |
| **द्वितीयक** | प्रारंभिक पहचान और उपचार | स्क्रीनिंग |
| **तृतीयक** | विकलांगता कम करें | पुनर्वास |

---

## 1️⃣ प्राथमिक रोकथाम

> रोग होने से पहले रोकें

### विधियां
- **स्वास्थ्य संवर्धन:** शिक्षा, जीवनशैली
- **विशिष्ट सुरक्षा:** टीकाकरण, PPE

### उदाहरण

| हस्तक्षेप | रोग रोका |
|:---------|:---------|
| टीकाकरण | खसरा, पोलियो, TB |
| सुरक्षित जल | हैजा, टायफॉइड |
| बेड नेट | मलेरिया |
| हाथ धोना | दस्त |

---

## 2️⃣ द्वितीयक रोकथाम

> प्रारंभिक पहचान और उपचार

### उदाहरण

| स्क्रीनिंग | रोग |
|:---------|:----|
| थूक माइक्रोस्कोपी | TB |
| RDT | मलेरिया |
| रक्तचाप | उच्च रक्तचाप |

---

## 3️⃣ तृतीयक रोकथाम

> जटिलताएं और विकलांगता कम करें

### उदाहरण
- स्ट्रोक के बाद फिजियोथेरेपी
- किडनी फेलियर के लिए डायलिसिस

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. प्राथमिक = रोग रोकें (टीकाकरण)
2. द्वितीयक = प्रारंभिक पहचान (स्क्रीनिंग)
3. तृतीयक = विकलांगता कम करें (पुनर्वास)
4. रोकथाम इलाज से बेहतर
5. सबसे किफायती = प्राथमिक रोकथाम
:::
`
  },
  {
    id: 3,
    titleEn: "National Health Programs",
    titleHi: "राष्ट्रीय स्वास्थ्य कार्यक्रम",
    contentEn: `
# 🇮🇳 National Health Programs

---

## 🏥 Major National Programs

### Disease Control Programs

| Program | Target Disease |
|:--------|:---------------|
| **NTEP** | Tuberculosis |
| **NVBDCP** | Vector-borne diseases |
| **NACP** | HIV/AIDS |
| **NLEP** | Leprosy |
| **NPPCF** | Blindness |

---

## 🫁 NTEP (National TB Elimination Program)

### Key Features
- Target: TB elimination by 2025
- DOTS strategy
- Free diagnosis and treatment
- Nikshay portal for tracking

### Treatment
- Daily regimen (no intermittent)
- 6 months minimum
- HRZE (Intensive) + HR (Continuation)

---

## 🦟 NVBDCP

### Diseases Covered
- Malaria
- Dengue
- Chikungunya
- Japanese Encephalitis
- Filariasis

### Strategies
- Vector control (IRS, LLIN)
- Early diagnosis and treatment
- Surveillance

---

## 🎗️ NACP (National AIDS Control Program)

### Key Components
- Prevention (awareness, condoms)
- Testing and counseling
- ART for all HIV positive
- PPTCT

---

## 👩‍👧 RMNCH+A

> Reproductive, Maternal, Newborn, Child and Adolescent Health

### Programs Under RMNCH+A
- JSY, JSSK
- PMSMA, PMMVY
- Immunization
- RBSK (Rashtriya Bal Swasthya Karyakram)

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. NTEP = TB elimination by 2025
2. NVBDCP = Vector-borne diseases
3. NACP = HIV/AIDS control
4. RMNCH+A = Mother and child health
5. DOTS = TB treatment strategy
6. Nikshay = TB tracking portal
:::
`,
    contentHi: `
# 🇮🇳 राष्ट्रीय स्वास्थ्य कार्यक्रम

---

## 🏥 प्रमुख राष्ट्रीय कार्यक्रम

### रोग नियंत्रण कार्यक्रम

| कार्यक्रम | लक्षित रोग |
|:---------|:----------|
| **NTEP** | तपेदिक |
| **NVBDCP** | वेक्टर-जनित रोग |
| **NACP** | HIV/AIDS |
| **NLEP** | कुष्ठ रोग |

---

## 🫁 NTEP (राष्ट्रीय TB उन्मूलन कार्यक्रम)

### मुख्य विशेषताएं
- लक्ष्य: 2025 तक TB उन्मूलन
- DOTS रणनीति
- मुफ्त निदान और उपचार
- निक्षय पोर्टल

### उपचार
- दैनिक आहार
- न्यूनतम 6 महीने
- HRZE (गहन) + HR (निरंतरता)

---

## 🦟 NVBDCP

### कवर किए गए रोग
- मलेरिया
- डेंगू
- चिकनगुनिया
- जापानी एन्सेफलाइटिस
- फाइलेरिया

### रणनीतियां
- वेक्टर नियंत्रण (IRS, LLIN)
- प्रारंभिक निदान और उपचार
- निगरानी

---

## 🎗️ NACP

### मुख्य घटक
- रोकथाम (जागरूकता, कंडोम)
- परीक्षण और परामर्श
- सभी HIV पॉजिटिव के लिए ART
- PPTCT

---

## 👩‍👧 RMNCH+A

### कार्यक्रम
- JSY, JSSK
- PMSMA, PMMVY
- टीकाकरण
- RBSK

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. NTEP = 2025 तक TB उन्मूलन
2. NVBDCP = वेक्टर-जनित रोग
3. NACP = HIV/AIDS नियंत्रण
4. RMNCH+A = माता और शिशु स्वास्थ्य
5. DOTS = TB उपचार रणनीति
:::
`
  },
  {
    id: 4,
    titleEn: "Epidemiology Basics",
    titleHi: "महामारी विज्ञान की मूल बातें",
    contentEn: `
# 📊 Epidemiology Basics

---

## 📖 What is Epidemiology?

> **Epidemiology** is the study of distribution and determinants of disease in populations.

---

## 📈 Disease Measures

### Incidence vs Prevalence

| Measure | Definition | Formula |
|:--------|:-----------|:--------|
| **Incidence** | New cases in period | New cases / Population at risk |
| **Prevalence** | Total cases at point | Total cases / Total population |

:::info
**Key Difference:**
- Incidence = New cases (flow)
- Prevalence = All cases (snapshot)
:::

---

## 📊 Rates and Ratios

### Mortality Rates

| Rate | Formula |
|:-----|:--------|
| **Crude Death Rate** | Deaths × 1000 / Mid-year population |
| **IMR** | Infant deaths × 1000 / Live births |
| **MMR** | Maternal deaths × 100,000 / Live births |

### Attack Rate
> Proportion of exposed who develop disease

Attack Rate = Cases / Exposed × 100

---

## 🔍 Types of Studies

| Type | Description |
|:-----|:------------|
| **Descriptive** | Who, What, When, Where |
| **Analytical** | Why, How (cause-effect) |
| **Experimental** | Intervention studies |

### Study Designs

| Design | Features |
|:-------|:---------|
| **Cross-sectional** | Snapshot at one point |
| **Cohort** | Follow over time |
| **Case-control** | Compare cases with controls |

---

## 📈 Disease Occurrence

| Pattern | Definition |
|:--------|:-----------|
| **Sporadic** | Occasional cases |
| **Endemic** | Constant presence |
| **Epidemic** | Unusual increase |
| **Pandemic** | Worldwide spread |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Incidence = New cases
2. Prevalence = Total cases
3. Endemic = constant, Epidemic = unusual increase
4. Pandemic = worldwide
5. Cohort = follow over time
6. Case-control = compare cases vs controls
:::
`,
    contentHi: `
# 📊 महामारी विज्ञान की मूल बातें

---

## 📖 महामारी विज्ञान क्या है?

> **महामारी विज्ञान** जनसंख्या में रोग के वितरण और निर्धारकों का अध्ययन है।

---

## 📈 रोग माप

### घटना बनाम प्रसार

| माप | परिभाषा |
|:----|:--------|
| **घटना** | अवधि में नए मामले |
| **प्रसार** | एक बिंदु पर कुल मामले |

:::info
**मुख्य अंतर:**
- घटना = नए मामले (प्रवाह)
- प्रसार = सभी मामले (स्नैपशॉट)
:::

---

## 📊 दरें और अनुपात

### मृत्यु दर

| दर | सूत्र |
|:---|:-----|
| **क्रूड मृत्यु दर** | मृत्यु × 1000 / मध्य-वर्ष जनसंख्या |
| **IMR** | शिशु मृत्यु × 1000 / जीवित जन्म |
| **MMR** | मातृ मृत्यु × 100,000 / जीवित जन्म |

---

## 🔍 अध्ययन प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **वर्णनात्मक** | कौन, क्या, कब, कहां |
| **विश्लेषणात्मक** | क्यों, कैसे (कारण-प्रभाव) |
| **प्रयोगात्मक** | हस्तक्षेप अध्ययन |

---

## 📈 रोग घटना

| पैटर्न | परिभाषा |
|:-------|:--------|
| **छिटपुट** | कभी-कभी मामले |
| **एंडेमिक** | निरंतर उपस्थिति |
| **एपिडेमिक** | असामान्य वृद्धि |
| **पैंडेमिक** | विश्वव्यापी प्रसार |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. घटना = नए मामले
2. प्रसार = कुल मामले
3. एंडेमिक = निरंतर, एपिडेमिक = असामान्य वृद्धि
4. पैंडेमिक = विश्वव्यापी
:::
`
  },
  {
    id: 5,
    titleEn: "Health Care Delivery System",
    titleHi: "स्वास्थ्य सेवा वितरण प्रणाली",
    contentEn: `
# 🏥 Health Care Delivery System in India

---

## 📊 Three-Tier System

| Level | Facility | Population |
|:------|:---------|:-----------|
| **Primary** | Sub-centre, PHC | 3000-5000, 20000-30000 |
| **Secondary** | CHC, Sub-district | 80000-120000 |
| **Tertiary** | District Hospital | District level |

---

## 🏠 Sub-Centre (SC)

### Staff
- 1 ANM (mandatory)
- 1 Male Health Worker

### Services
- Maternal and child health
- Immunization
- Family planning
- Basic curative care

### Population Coverage
- **Plain:** 5000
- **Hilly/Tribal:** 3000

---

## 🏥 Primary Health Centre (PHC)

### Staff
- Medical Officer
- 14 paramedical staff
- ANM, Health Worker, LHV

### Services
- OPD services
- Referral services
- Preventive and promotive care
- National program implementation

### Population Coverage
- **Plain:** 30000
- **Hilly/Tribal:** 20000

---

## 🏨 Community Health Centre (CHC)

### Staff
- 4 Medical Specialists
- 21 paramedical staff

### Facilities
- 30 beds
- Operation theatre
- Labour room
- Laboratory

### Population Coverage
- **Plain:** 120000
- **Hilly/Tribal:** 80000

---

## 👥 Health Workers

| Worker | Role |
|:-------|:-----|
| **ASHA** | Community link, mobilization |
| **ANM** | MCH, immunization at SC |
| **MPW (Male)** | Disease surveillance, sanitation |
| **AWW** | ICDS services, nutrition |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. SC population: 5000 (plain), 3000 (hilly)
2. PHC population: 30000 (plain), 20000 (hilly)
3. CHC population: 120000 (plain), 80000 (hilly)
4. CHC = 30 beds, 4 specialists
5. ASHA = Community link worker
6. ANM = MCH services at Sub-centre
:::
`,
    contentHi: `
# 🏥 भारत में स्वास्थ्य सेवा वितरण प्रणाली

---

## 📊 तीन-स्तरीय प्रणाली

| स्तर | सुविधा | जनसंख्या |
|:-----|:-------|:---------|
| **प्राथमिक** | उप-केंद्र, PHC | 3000-5000, 20000-30000 |
| **द्वितीयक** | CHC, उप-जिला | 80000-120000 |
| **तृतीयक** | जिला अस्पताल | जिला स्तर |

---

## 🏠 उप-केंद्र (SC)

### स्टाफ
- 1 ANM (अनिवार्य)
- 1 पुरुष स्वास्थ्य कार्यकर्ता

### सेवाएं
- मातृ और शिशु स्वास्थ्य
- टीकाकरण
- परिवार नियोजन
- बुनियादी उपचारात्मक देखभाल

### जनसंख्या कवरेज
- **मैदान:** 5000
- **पहाड़ी/जनजातीय:** 3000

---

## 🏥 प्राथमिक स्वास्थ्य केंद्र (PHC)

### स्टाफ
- चिकित्सा अधिकारी
- 14 पैरामेडिकल स्टाफ

### जनसंख्या कवरेज
- **मैदान:** 30000
- **पहाड़ी/जनजातीय:** 20000

---

## 🏨 सामुदायिक स्वास्थ्य केंद्र (CHC)

### स्टाफ
- 4 चिकित्सा विशेषज्ञ
- 21 पैरामेडिकल स्टाफ

### सुविधाएं
- 30 बेड
- ऑपरेशन थियेटर
- प्रसव कक्ष
- प्रयोगशाला

### जनसंख्या कवरेज
- **मैदान:** 120000
- **पहाड़ी/जनजातीय:** 80000

---

## 👥 स्वास्थ्य कार्यकर्ता

| कार्यकर्ता | भूमिका |
|:---------|:------|
| **ASHA** | सामुदायिक लिंक |
| **ANM** | MCH, टीकाकरण |
| **MPW (पुरुष)** | रोग निगरानी |
| **AWW** | ICDS सेवाएं |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. SC जनसंख्या: 5000 (मैदान), 3000 (पहाड़ी)
2. PHC जनसंख्या: 30000 (मैदान), 20000 (पहाड़ी)
3. CHC जनसंख्या: 120000 (मैदान), 80000 (पहाड़ी)
4. CHC = 30 बेड, 4 विशेषज्ञ
5. ASHA = सामुदायिक लिंक कार्यकर्ता
:::
`
  },
  {
    id: 6,
    titleEn: "National Health Mission (NHM)",
    titleHi: "राष्ट्रीय स्वास्थ्य मिशन (NHM)",
    contentEn: `
# 🇮🇳 National Health Mission (NHM)

---

## 📖 Overview

:::info
**NHM** is the umbrella program for public health in India, covering rural (NRHM) and urban (NUHM) health.

**Key Fact:** NHM covers over <mark>700 million</mark> rural Indians and 70 million urban poor.
:::

---

## 📊 NHM Evolution

| Year | Development |
|:-----|:------------|
| **1951-2005** | Vertical disease programs |
| **2005** | NRHM launched |
| **2013** | NHM formed (NRHM + NUHM) |
| **2018** | Ayushman Bharat added |

---

## 🎯 NHM Goals

| Goal | Target |
|:-----|:-------|
| **MMR** | <mark><70</mark> per 100,000 live births |
| **IMR** | <mark><25</mark> per 1,000 live births |
| **TFR** | <mark>2.1</mark> |
| **U5MR** | <mark><25</mark> per 1,000 live births |

---

## 📋 7 Key Strategies

:::success
**NHM Strategies:**
1. Health System Strengthening
2. RMNCH+A (Life-cycle approach)
3. Communicable Disease Control
4. Non-Communicable Disease Control
5. Infrastructure & HR
6. Community Processes
7. Flexible Financing
:::

---

## 👩 ASHA Program

:::info
**ASHA = Accredited Social Health Activist**
:::

| Feature | Details |
|:--------|:--------|
| Selection | Woman from same village, 25-45 years |
| Education | 8th pass minimum |
| Population | <mark>1,000</mark> per ASHA |
| Total ASHAs | <mark>~10 lakh</mark> across India |
| Payment | Performance-based incentives |

### ASHA Roles
- Link between community and health system
- Mobilize for immunization, ANC
- Accompany women for delivery
- Promote family planning
- Provide ORS, contraceptives
- Disease surveillance

---

## 🏘️ VHSNC

:::info
**VHSNC = Village Health Sanitation & Nutrition Committee**
:::

### Composition
- ASHA (Member Secretary)
- ANM, AWW
- PRI members
- SHG representatives
- Community members

### Functions
- Village health planning
- Monitor health services
- Manage untied funds (<mark>₹10,000/year</mark>)
- Address local health issues
- Support health campaigns

---

## 💊 Key Programs Under NHM

### RMNCH+A Programs

| Program | Focus |
|:--------|:------|
| **JSY** | Cash incentive for institutional delivery |
| **JSSK** | Free delivery, drugs, transport |
| **PMSMA** | Quality ANC on 9th of each month |
| **RBSK** | 4Ds screening in schools |
| **RKSK** | Adolescent health |
| **MAA** | Breastfeeding promotion |

### Disease Control Programs

| Program | Focus |
|:--------|:------|
| **NTEP** | TB elimination |
| **NVBDCP** | Malaria, Dengue control |
| **NACP** | HIV/AIDS |
| **NLEP** | Leprosy elimination |
| **IDSP** | Disease surveillance |

---

## 🏥 Ayushman Bharat (2018)

### Two Components

| Component | Details |
|:----------|:--------|
| **Health & Wellness Centres (HWC)** | Upgrade 150,000 SC/PHCs, comprehensive primary care |
| **PM-JAY Insurance** | <mark>₹5 lakh</mark> coverage, 50 crore beneficiaries |

### HWC 12 Service Packages
1. Pregnancy & childbirth care
2. Neonatal & infant care
3. Child & adolescent health
4. Family planning
5. Communicable diseases
6. NCD management
7. NCD screening
8. Eye & ENT problems
9. Oral health care
10. Elderly & palliative care
11. Emergency services
12. Mental health screening

---

## 👨‍⚕️ MPHW Role in NHM

- Implement national health programs
- Support ASHA workers
- Participate in VHSNC meetings
- Report program data
- Conduct outreach services
- Coordinate with ANM, AWW

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. NHM = NRHM (rural) + NUHM (urban)
2. ASHA covers 1,000 population
3. 10 lakh ASHAs in India
4. VHSNC gets ₹10,000/year untied funds
5. Ayushman Bharat = HWC + PM-JAY
6. PM-JAY = ₹5 lakh coverage
7. NHM Goals: MMR <70, IMR <25, TFR 2.1
8. PMSMA = 9th of every month ANC
:::
`,
    contentHi: `
# 🇮🇳 राष्ट्रीय स्वास्थ्य मिशन (NHM)

---

## 📖 अवलोकन

:::info
**NHM** भारत में सार्वजनिक स्वास्थ्य के लिए छत्र कार्यक्रम है, जिसमें ग्रामीण (NRHM) और शहरी (NUHM) स्वास्थ्य शामिल है।

**मुख्य तथ्य:** NHM <mark>70 करोड़</mark> से अधिक ग्रामीण भारतीयों को कवर करता है।
:::

---

## 📊 NHM विकास

| वर्ष | विकास |
|:-----|:------|
| **1951-2005** | ऊर्ध्वाधर रोग कार्यक्रम |
| **2005** | NRHM शुरू |
| **2013** | NHM गठन (NRHM + NUHM) |
| **2018** | आयुष्मान भारत जोड़ा गया |

---

## 🎯 NHM लक्ष्य

| लक्ष्य | टारगेट |
|:-------|:-------|
| **MMR** | <mark><70</mark> प्रति 100,000 जीवित जन्म |
| **IMR** | <mark><25</mark> प्रति 1,000 जीवित जन्म |
| **TFR** | <mark>2.1</mark> |

---

## 📋 7 मुख्य रणनीतियां

:::success
**NHM रणनीतियां:**
1. स्वास्थ्य प्रणाली सुदृढ़ीकरण
2. RMNCH+A (जीवन-चक्र दृष्टिकोण)
3. संचारी रोग नियंत्रण
4. गैर-संचारी रोग नियंत्रण
5. बुनियादी ढांचा और मानव संसाधन
6. सामुदायिक प्रक्रियाएं
7. लचीला वित्तपोषण
:::

---

## 👩 ASHA कार्यक्रम

:::info
**ASHA = मान्यता प्राप्त सामाजिक स्वास्थ्य कार्यकर्ता**
:::

| विशेषता | विवरण |
|:--------|:------|
| चयन | उसी गांव की महिला, 25-45 वर्ष |
| शिक्षा | न्यूनतम 8वीं पास |
| जनसंख्या | <mark>1,000</mark> प्रति ASHA |
| कुल ASHAs | <mark>~10 लाख</mark> भारत में |
| भुगतान | प्रदर्शन-आधारित प्रोत्साहन |

### ASHA की भूमिकाएं
- समुदाय और स्वास्थ्य प्रणाली के बीच कड़ी
- टीकाकरण, ANC के लिए गतिशीलता
- महिलाओं को प्रसव के लिए साथ ले जाना
- परिवार नियोजन को बढ़ावा देना

---

## 🏘️ VHSNC

:::info
**VHSNC = ग्राम स्वास्थ्य स्वच्छता और पोषण समिति**
:::

### संरचना
- ASHA (सदस्य सचिव)
- ANM, AWW
- PRI सदस्य
- SHG प्रतिनिधि

### कार्य
- ग्राम स्वास्थ्य योजना
- स्वास्थ्य सेवाओं की निगरानी
- अनबंधित निधि प्रबंधन (<mark>₹10,000/वर्ष</mark>)

---

## 💊 NHM के तहत मुख्य कार्यक्रम

### RMNCH+A कार्यक्रम

| कार्यक्रम | फोकस |
|:---------|:-----|
| **JSY** | संस्थागत प्रसव के लिए नकद प्रोत्साहन |
| **JSSK** | मुफ्त प्रसव, दवाएं, परिवहन |
| **PMSMA** | हर महीने 9 तारीख को गुणवत्तापूर्ण ANC |
| **RBSK** | स्कूलों में 4Ds स्क्रीनिंग |

---

## 🏥 आयुष्मान भारत (2018)

### दो घटक

| घटक | विवरण |
|:----|:------|
| **HWC** | 150,000 SC/PHC अपग्रेड |
| **PM-JAY बीमा** | <mark>₹5 लाख</mark> कवरेज, 50 करोड़ लाभार्थी |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. NHM = NRHM (ग्रामीण) + NUHM (शहरी)
2. ASHA 1,000 जनसंख्या कवर करती है
3. भारत में 10 लाख ASHAs
4. VHSNC को ₹10,000/वर्ष अनबंधित निधि
5. आयुष्मान भारत = HWC + PM-JAY
6. PM-JAY = ₹5 लाख कवरेज
7. NHM लक्ष्य: MMR <70, IMR <25, TFR 2.1
8. PMSMA = हर महीने 9 तारीख ANC
:::
`
  },
  {
    id: 7,
    titleEn: "RMNCH+A Programs",
    titleHi: "RMNCH+A कार्यक्रम",
    contentEn: `
# 👩‍👧 RMNCH+A Programs

---

## 📖 What is RMNCH+A?

:::info
**RMNCH+A** = Reproductive, Maternal, Newborn, Child, and Adolescent Health

A comprehensive life-cycle approach covering all stages of health.
:::

---

## 🤰 Maternal Health Programs

### JSY (Janani Suraksha Yojana)

:::success
**Purpose:** Promote institutional delivery through cash incentives
:::

| State Category | Rural | Urban |
|:---------------|:------|:------|
| **LPS States*** | <mark>₹1,400</mark> | ₹1,000 |
| **HPS States** | ₹700 | ₹600 |

*LPS = Low Performing States (UP, Bihar, MP, etc.)

**ASHA Incentive:** ₹600 (rural) / ₹400 (urban)

### JSSK (Janani Shishu Suraksha Karyakram)

:::info
**Free Entitlements for Pregnant Women:**
- Free delivery (normal and C-section)
- Free drugs and consumables
- Free diagnostics
- Free blood (up to 3 units)
- Free diet during stay
- Free transport (home to facility and back)
:::

### PMSMA (Pradhan Mantri Surakshit Matritva Abhiyan)

| Feature | Details |
|:--------|:--------|
| When | <mark>9th of every month</mark> |
| Where | PHC/CHC/DH |
| Who | Pregnant women 2nd/3rd trimester |
| Services | Comprehensive ANC, specialist exam, USG |

**Risk Stickers:**
- 🟢 Green = Normal (PHC delivery)
- 🟡 Yellow = Some risk (CHC delivery)
- 🔴 Red = High risk (DH delivery)

---

## 👶 ANC Package

### Visit Schedule

| Visit | Timing |
|:------|:-------|
| 1st | <mark><12 weeks</mark> (Registration) |
| 2nd | 14-26 weeks |
| 3rd | 28-34 weeks |
| 4th | 36 weeks - delivery |

**Target: Minimum 4 ANC visits (ANC4)**

### ANC Services
- Weight, BP, abdominal exam
- Hb estimation
- Urine test (albumin, sugar)
- TT vaccination (2 doses)
- IFA tablets (<mark>180 tablets</mark>)
- Calcium tablets
- Deworming (Albendazole)
- High-risk identification
- Birth preparedness counseling

---

## 👶 Newborn Health Programs

### Essential Newborn Care (ENBC)

:::success
**At Birth:**
1. **WARMTH** - Dry, skin-to-skin, delayed bathing (after 24 hrs)
2. **BREATHING** - Clear airway, stimulate, resuscitate if needed
3. **BREASTFEEDING** - Within <mark>1 hour</mark>, exclusive
4. **CORD CARE** - Clean cut, dry care
5. **EYE CARE** - Clean eyes
:::

### Facility-Based Newborn Care

| Level | Facility | Services |
|:------|:---------|:---------|
| **NBCC** | All delivery points | Essential newborn care, resuscitation |
| **NBSU** | CHC/SDH | Stabilization, phototherapy |
| **SNCU** | DH | Sick newborn care, ventilation, CPAP |

### HBNC (Home-Based Newborn Care by ASHA)

**Visit Schedule:**

| Day | Visit |
|:----|:------|
| Day 1 | Within 24 hours |
| Day 3 | Third day |
| Day 7 | One week |
| Day 14 | Two weeks |
| Day 21 | Three weeks |
| Day 28 | Four weeks |
| Day 42 | Six weeks |

---

## 👧 Child Health Programs

### IMNCI (Integrated Management of Neonatal & Childhood Illness)

:::info
**Target:** Children 0-5 years

**Approach:** ASSESS → CLASSIFY → TREAT → COUNSEL → FOLLOW-UP
:::

**Color-Coded Classification:**
- 🔴 PINK = Urgent referral
- 🟡 YELLOW = Treat at facility
- 🟢 GREEN = Home care

### RBSK (Rashtriya Bal Swasthya Karyakram)

:::success
**4Ds Screening:**
1. **D**efects at Birth (congenital anomalies)
2. **D**eficiencies (anemia, vitamin deficiencies)
3. **D**iseases (skin, otitis media, dental)
4. **D**evelopmental Delays (motor, vision, hearing)
:::

**Mobile Health Teams visit:**
- Anganwadi centres (0-6 years)
- Government schools (6-18 years)

---

## 👩‍🎓 Adolescent Health Programs

### RKSK (Rashtriya Kishor Swasthya Karyakram)

:::info
**Target:** 10-19 years (<mark>253 million</mark> in India)
:::

### 6 Priority Areas

| Priority | Focus |
|:---------|:------|
| 1. Nutrition | IFA (WIFS), counseling |
| 2. Sexual & Reproductive Health | Menstrual hygiene |
| 3. Mental Health | Stress management, life skills |
| 4. Injuries & Violence | Safety, GBV prevention |
| 5. Substance Misuse | Tobacco, alcohol, drugs |
| 6. NCDs | Healthy lifestyle |

### WIFS (Weekly Iron Folic Acid Supplementation)

| Feature | Details |
|:--------|:--------|
| Target | Adolescents 10-19 years |
| Dosage | <mark>1 tablet weekly</mark> |
| Iron | 100mg elemental iron |
| Folic acid | 500mcg |
| Plus | Biannual deworming (Albendazole 400mg) |

### Adolescent Friendly Health Clinics (AFHC)
- Dedicated space at PHC/CHC
- Trained counselor
- Confidential services
- Peer educators (4 per 1000 adolescents)

---

## 💊 Family Planning Program

### Spacing Methods

| Method | Provider | Duration |
|:-------|:---------|:---------|
| Condoms | ASHA/SC | Per use |
| OCPs (Mala-N) | SC/ASHA | Daily |
| Centchroman (Chhaya) | SC | Weekly |
| IUCD (Cu-T 380A) | ANM/MO | <mark>10 years</mark> |
| Injectable (DMPA) | ANM | 3 months |

### Sterilization Incentives

| Category | Female | Male (NSV) |
|:---------|:-------|:-----------|
| **BPL/SC/ST (Public)** | <mark>₹3,000</mark> | ₹2,000 |
| **BPL/SC/ST (Private)** | ₹2,000 | ₹1,500 |
| **Others (Public)** | ₹1,000 | ₹1,500 |

**ASHA Incentive:** ₹200 for sterilization motivation

---

## 👨‍⚕️ MPHW Role in RMNCH+A

- Track pregnant women with ANM
- Ensure JSY benefits
- Identify high-risk pregnancies
- Support immunization sessions
- Assist in VHND
- WIFS distribution support
- School health activities
- Condom distribution
- Eligible couple registration

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. JSY: ₹1,400 (rural LPS), ₹1,000 (urban LPS)
2. JSSK = Free entitlements (delivery, drugs, transport)
3. PMSMA = 9th of every month
4. ANC4 = Minimum 4 antenatal visits
5. IFA = 180 tablets during pregnancy
6. Breastfeeding within 1 hour of birth
7. RBSK = 4Ds screening
8. WIFS = Weekly IFA for adolescents
9. IUCD = 10 years duration
10. Sterilization: ₹3,000 (female BPL), ₹2,000 (male BPL)
:::
`,
    contentHi: `
# 👩‍👧 RMNCH+A कार्यक्रम

---

## 📖 RMNCH+A क्या है?

:::info
**RMNCH+A** = प्रजनन, मातृ, नवजात, शिशु और किशोर स्वास्थ्य

सभी स्वास्थ्य चरणों को कवर करने वाला व्यापक जीवन-चक्र दृष्टिकोण।
:::

---

## 🤰 मातृ स्वास्थ्य कार्यक्रम

### JSY (जननी सुरक्षा योजना)

| राज्य श्रेणी | ग्रामीण | शहरी |
|:------------|:-------|:------|
| **LPS राज्य** | <mark>₹1,400</mark> | ₹1,000 |
| **HPS राज्य** | ₹700 | ₹600 |

**ASHA प्रोत्साहन:** ₹600 (ग्रामीण) / ₹400 (शहरी)

### JSSK

:::info
**गर्भवती महिलाओं के लिए मुफ्त सुविधाएं:**
- मुफ्त प्रसव (सामान्य और सी-सेक्शन)
- मुफ्त दवाएं
- मुफ्त निदान
- मुफ्त रक्त (3 यूनिट तक)
- मुफ्त भोजन
- मुफ्त परिवहन
:::

### PMSMA

| विशेषता | विवरण |
|:--------|:------|
| कब | <mark>हर महीने 9 तारीख</mark> |
| कहां | PHC/CHC/DH |
| कौन | गर्भवती महिलाएं 2nd/3rd तिमाही |

**जोखिम स्टिकर:**
- 🟢 हरा = सामान्य
- 🟡 पीला = कुछ जोखिम
- 🔴 लाल = उच्च जोखिम

---

## 👶 ANC पैकेज

### विजिट अनुसूची

| विजिट | समय |
|:------|:----|
| 1st | <mark><12 सप्ताह</mark> |
| 2nd | 14-26 सप्ताह |
| 3rd | 28-34 सप्ताह |
| 4th | 36 सप्ताह - प्रसव |

**लक्ष्य: न्यूनतम 4 ANC विजिट**

### ANC सेवाएं
- वजन, BP, पेट की जांच
- Hb अनुमान
- TT टीकाकरण (2 खुराक)
- IFA गोलियां (<mark>180 गोलियां</mark>)
- कैल्शियम गोलियां
- उच्च जोखिम पहचान

---

## 👶 नवजात स्वास्थ्य कार्यक्रम

### आवश्यक नवजात देखभाल

:::success
**जन्म पर:**
1. **गर्मी** - सुखाएं, त्वचा-से-त्वचा, 24 घंटे बाद स्नान
2. **श्वास** - वायुमार्ग साफ करें
3. **स्तनपान** - <mark>1 घंटे</mark> के भीतर
4. **नाभि देखभाल** - साफ कट, सूखी देखभाल
:::

### HBNC (ASHA द्वारा)

| दिन | विजिट |
|:----|:------|
| दिन 1 | 24 घंटे में |
| दिन 3 | तीसरा दिन |
| दिन 7 | एक सप्ताह |
| दिन 14, 21, 28 | दो, तीन, चार सप्ताह |
| दिन 42 | छह सप्ताह |

---

## 👧 शिशु स्वास्थ्य कार्यक्रम

### RBSK

:::success
**4Ds स्क्रीनिंग:**
1. **D**efects - जन्मजात विसंगतियां
2. **D**eficiencies - एनीमिया, विटामिन कमी
3. **D**iseases - त्वचा, कान, दांत
4. **D**evelopmental Delays - मोटर, दृष्टि, श्रवण
:::

---

## 👩‍🎓 किशोर स्वास्थ्य कार्यक्रम

### RKSK

:::info
**लक्ष्य:** 10-19 वर्ष (<mark>253 मिलियन</mark> भारत में)
:::

### 6 प्राथमिकता क्षेत्र

| प्राथमिकता | फोकस |
|:----------|:-----|
| 1. पोषण | IFA (WIFS) |
| 2. यौन और प्रजनन स्वास्थ्य | मासिक स्वच्छता |
| 3. मानसिक स्वास्थ्य | तनाव प्रबंधन |
| 4. चोट और हिंसा | सुरक्षा |
| 5. मादक द्रव्य | तंबाकू, शराब |
| 6. NCDs | स्वस्थ जीवनशैली |

### WIFS

| विशेषता | विवरण |
|:--------|:------|
| लक्ष्य | किशोर 10-19 वर्ष |
| खुराक | <mark>साप्ताहिक 1 गोली</mark> |
| आयरन | 100mg |
| फोलिक एसिड | 500mcg |

---

## 💊 परिवार नियोजन कार्यक्रम

### नसबंदी प्रोत्साहन

| श्रेणी | महिला | पुरुष (NSV) |
|:-------|:-------|:-----------|
| **BPL/SC/ST** | <mark>₹3,000</mark> | ₹2,000 |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. JSY: ₹1,400 (ग्रामीण LPS)
2. JSSK = मुफ्त सुविधाएं
3. PMSMA = हर महीने 9 तारीख
4. ANC4 = न्यूनतम 4 विजिट
5. IFA = 180 गोलियां
6. 1 घंटे में स्तनपान
7. RBSK = 4Ds स्क्रीनिंग
8. WIFS = साप्ताहिक IFA
9. IUCD = 10 वर्ष
10. नसबंदी: ₹3,000 (महिला BPL)
:::
`
  },
  {
    id: 8,
    titleEn: "Communicable Disease Control Programs",
    titleHi: "संचारी रोग नियंत्रण कार्यक्रम",
    contentEn: `
# 🦠 Communicable Disease Control Programs

---

## 🫁 NTEP (National TB Elimination Programme)

:::danger
**Goal:** Eliminate TB by <mark>2025</mark> (5 years ahead of global target)

**India's Burden:** 27% of global TB cases
:::

### DOTS Strategy - 5 Components

1. Political commitment
2. Quality diagnosis (sputum microscopy, CBNAAT)
3. Standardized treatment (FDCs)
4. Regular drug supply
5. Monitoring & accountability

### TB Symptoms

:::warning
**Suspect TB if:**
- Cough ≥ <mark>2 weeks</mark> (most important)
- Fever
- Night sweats
- Weight loss
- Hemoptysis (blood in sputum)
:::

### TB Treatment

| Phase | Duration | Drugs |
|:------|:---------|:------|
| **Intensive** | 2 months | <mark>HRZE</mark> (daily) |
| **Continuation** | 4 months | <mark>HR</mark> (daily) |

**Total: 6 months**

**NIKSHAY** = Online TB notification and monitoring system

### MPHW Role in TB
- Identify suspects (cough ≥2 weeks)
- Collect 2 sputum samples
- Ensure DOT compliance
- Monthly home visits
- Contact tracing
- Maintain TB register

---

## 🦟 NVBDCP (Vector Borne Disease Control)

### Diseases Covered

| Disease | Vector | Key Intervention |
|:--------|:-------|:-----------------|
| **Malaria** | Anopheles | LLIN, IRS, ACT |
| **Dengue** | Aedes | Source reduction |
| **Chikungunya** | Aedes | Source reduction |
| **Japanese Encephalitis** | Culex | Vaccination |
| **Filariasis** | Culex | MDA |
| **Kala-azar** | Sandfly | IRS, case management |

### Malaria Control

:::success
**Key Strategies:**
- <mark>LLIN</mark> (Long Lasting Insecticidal Nets)
- <mark>IRS</mark> (Indoor Residual Spraying)
- Early diagnosis (RDT, blood smear)
- Prompt treatment
:::

**Treatment:**
- P. falciparum: <mark>ACT</mark> (Artemisinin Combination Therapy)
- P. vivax: Chloroquine + Primaquine

**Rule: TEST BEFORE TREAT**

### Dengue Prevention

:::warning
**Source Reduction (Key intervention):**
- Remove/cover water weekly
- Coolers, flower pots, tyres, tanks
- Temephos larvicide
:::

**Warning Signs for Referral:**
- Abdominal pain
- Persistent vomiting
- Bleeding
- Cold extremities

---

## 🎗️ NACP (National AIDS Control Program)

:::info
**Goal:** End AIDS as public health threat by 2030
:::

### Key Strategies

| Strategy | Details |
|:---------|:--------|
| **Prevention** | Targeted interventions, condoms, PMTCT |
| **Testing** | ICTC, community-based testing |
| **Treatment** | <mark>ART for all HIV+</mark> ("Test and Treat") |

### HIV Testing Protocol
- Pre-test counseling
- HIV test (rapid/ELISA)
- If positive → confirmatory test
- Post-test counseling
- Link to ART center

### PMTCT (Prevention of Mother-to-Child Transmission)
- Test all pregnant women for HIV
- If positive: Start ART immediately (lifelong)
- Baby: Nevirapine prophylaxis at birth

---

## 🟢 NLEP (National Leprosy Eradication Programme)

:::success
**Achievement:** India achieved elimination (<mark><1/10,000</mark>) in 2005
:::

### Leprosy Classification

| Type | Skin Lesions | Nerves | Duration |
|:-----|:-------------|:-------|:---------|
| **Paucibacillary (PB)** | 1-5 patches | 0-1 | 6 months MDT |
| **Multibacillary (MB)** | >5 patches | >1 | 12 months MDT |

### Cardinal Signs of Leprosy
1. Hypopigmented/red patch with <mark>loss of sensation</mark>
2. Thickened peripheral nerves
3. Positive skin smear

### MDT (Multi-Drug Therapy)

| Type | Drugs | Duration |
|:-----|:------|:---------|
| **PB** | Rifampicin (monthly) + Dapsone (daily) | <mark>6 months</mark> |
| **MB** | Rifampicin + Clofazimine (monthly) + Dapsone (daily) | <mark>12 months</mark> |

### Prevention of Disability (POD)
- Daily foot/hand inspection
- Soaking, oiling
- Protective footwear
- Self-care training

---

## 📊 IDSP (Integrated Disease Surveillance)

### Reporting Forms

| Form | Who Fills | What |
|:-----|:----------|:-----|
| **S Form** | MPHW/ANM | Syndromes (weekly) |
| **P Form** | MO | Presumptive diagnosis |
| **L Form** | Lab Tech | Lab confirmed |

### Notifiable Diseases (Immediate Report)
- Cholera
- Plague
- Viral hemorrhagic fevers
- Meningococcal meningitis
- Diphtheria
- AFP (Polio surveillance)

**Report within 24 hours**

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. TB: Cough ≥2 weeks, DOTS, 6 months treatment
2. NIKSHAY = TB tracking portal
3. Malaria: Test before treat, ACT for P. falciparum
4. Dengue: Source reduction is key
5. HIV: Test and Treat (ART for all)
6. Leprosy PB = 6 months MDT
7. Leprosy MB = 12 months MDT
8. IDSP S-Form = Weekly syndrome reporting
9. Report notifiable diseases within 24 hours
:::
`,
    contentHi: `
# 🦠 संचारी रोग नियंत्रण कार्यक्रम

---

## 🫁 NTEP (राष्ट्रीय TB उन्मूलन कार्यक्रम)

:::danger
**लक्ष्य:** <mark>2025</mark> तक TB उन्मूलन

**भारत का बोझ:** वैश्विक TB मामलों का 27%
:::

### DOTS रणनीति - 5 घटक

1. राजनीतिक प्रतिबद्धता
2. गुणवत्ता निदान (थूक माइक्रोस्कोपी, CBNAAT)
3. मानकीकृत उपचार (FDCs)
4. नियमित दवा आपूर्ति
5. निगरानी और जवाबदेही

### TB लक्षण

:::warning
**TB का संदेह करें:**
- खांसी ≥ <mark>2 सप्ताह</mark> (सबसे महत्वपूर्ण)
- बुखार
- रात का पसीना
- वजन घटना
- खून की उल्टी
:::

### TB उपचार

| चरण | अवधि | दवाएं |
|:----|:-----|:------|
| **गहन** | 2 महीने | <mark>HRZE</mark> |
| **निरंतरता** | 4 महीने | <mark>HR</mark> |

**कुल: 6 महीने**

---

## 🦟 NVBDCP

### कवर किए गए रोग

| रोग | वेक्टर | मुख्य हस्तक्षेप |
|:----|:------|:--------------|
| **मलेरिया** | एनोफिलीज | LLIN, IRS, ACT |
| **डेंगू** | एडीज | स्रोत कमी |
| **फाइलेरिया** | क्यूलेक्स | MDA |
| **काला-अजार** | सैंडफ्लाई | IRS |

### मलेरिया नियंत्रण

:::success
**मुख्य रणनीतियां:**
- <mark>LLIN</mark> (बेड नेट)
- <mark>IRS</mark> (इनडोर स्प्रेइंग)
- प्रारंभिक निदान (RDT)
:::

**नियम: उपचार से पहले परीक्षण**

---

## 🎗️ NACP

:::info
**लक्ष्य:** 2030 तक AIDS को समाप्त करना
:::

### मुख्य रणनीतियां

| रणनीति | विवरण |
|:-------|:------|
| **रोकथाम** | कंडोम, PMTCT |
| **परीक्षण** | ICTC |
| **उपचार** | <mark>सभी HIV+ के लिए ART</mark> |

---

## 🟢 NLEP (कुष्ठ उन्मूलन कार्यक्रम)

:::success
**उपलब्धि:** भारत ने 2005 में उन्मूलन (<mark><1/10,000</mark>) प्राप्त किया
:::

### MDT

| प्रकार | दवाएं | अवधि |
|:-------|:------|:-----|
| **PB** | रिफैम्पिसिन + डैप्सोन | <mark>6 महीने</mark> |
| **MB** | रिफैम्पिसिन + क्लोफाज़ीमीन + डैप्सोन | <mark>12 महीने</mark> |

---

## 📊 IDSP

### रिपोर्टिंग फॉर्म

| फॉर्म | कौन भरता है | क्या |
|:------|:-----------|:----|
| **S फॉर्म** | MPHW/ANM | सिंड्रोम (साप्ताहिक) |
| **P फॉर्म** | MO | अनुमानित निदान |
| **L फॉर्म** | लैब टेक | लैब पुष्टि |

### सूचनीय रोग
- हैजा, प्लेग
- वायरल रक्तस्रावी बुखार
- AFP

**24 घंटे में रिपोर्ट करें**

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. TB: खांसी ≥2 सप्ताह, DOTS, 6 महीने उपचार
2. NIKSHAY = TB ट्रैकिंग पोर्टल
3. मलेरिया: उपचार से पहले परीक्षण
4. डेंगू: स्रोत कमी महत्वपूर्ण
5. HIV: सभी के लिए ART
6. कुष्ठ PB = 6 महीने MDT
7. कुष्ठ MB = 12 महीने MDT
8. S-फॉर्म = साप्ताहिक सिंड्रोम रिपोर्टिंग
:::
`
  },
  {
    id: 9,
    titleEn: "Non-Communicable Disease Programs",
    titleHi: "गैर-संचारी रोग कार्यक्रम",
    contentEn: `
# 🫀 Non-Communicable Disease Programs

---

## 📖 NPCDCS Overview

:::danger
**NCDs cause 63% of all deaths in India**

India has:
- <mark>77 million</mark> diabetics
- <mark>200 million</mark> with hypertension
:::

### Target NCDs
- Diabetes mellitus
- Hypertension
- Cardiovascular diseases
- Cancers (oral, breast, cervical)
- COPD, CKD

### Common Risk Factors
- Tobacco use
- Unhealthy diet
- Physical inactivity
- Harmful alcohol use

---

## 🔬 NCD Screening at HWC

:::info
**Target:** All adults ≥<mark>30 years</mark> (annually)
:::

### Screening Package

| Measurement | Purpose |
|:------------|:--------|
| Blood pressure | Hypertension |
| Blood glucose | Diabetes |
| Height, weight, BMI | Obesity |
| Waist circumference | Central obesity |

### Cancer Screening

| Cancer | Method | Target |
|:-------|:-------|:-------|
| **Oral** | Visual examination | All adults |
| **Breast** | Clinical breast exam (CBE) | Women ≥30 |
| **Cervical** | VIA (Visual Inspection with Acetic Acid) | Women 30-65 |

---

## 🩸 Diabetes Screening & Management

### Diagnosis

| Test | Normal | Prediabetes | Diabetes |
|:-----|:-------|:------------|:---------|
| **Fasting glucose** | <100 mg/dL | 100-125 | <mark>≥126</mark> |
| **Random glucose** | - | - | <mark>≥200</mark> (with symptoms) |

### Management

:::success
**Lifestyle Modification (All patients):**
- Reduce sugar, sweets, refined carbs
- Increase fiber (vegetables, whole grains)
- 30 minutes exercise daily, 5 days/week
- Maintain BMI 18.5-23
:::

**Medications:**
- Metformin (first-line)
- Sulfonylureas
- Insulin (if oral drugs fail)

**Targets:**
- Fasting: 80-130 mg/dL
- Post-meal: <180 mg/dL

### Complications - Screen Yearly

| Complication | Screening |
|:-------------|:----------|
| Eye (retinopathy) | Fundus exam |
| Kidney (nephropathy) | Urine protein |
| Nerve (neuropathy) | Monofilament test |
| Foot | Foot examination |

---

## 🩺 Hypertension Screening & Management

### BP Classification

| Category | Systolic | Diastolic |
|:---------|:---------|:----------|
| Normal | <120 | <80 |
| Elevated | 120-129 | <80 |
| Stage 1 HTN | <mark>130-139</mark> | <mark>80-89</mark> |
| Stage 2 HTN | <mark>≥140</mark> | <mark>≥90</mark> |
| Crisis | >180 | >120 |

### Correct BP Measurement
- Patient seated quietly 5 minutes
- Arm at heart level
- Correct cuff size
- No caffeine/smoking 30 min before
- Two readings, average

### Management

:::success
**DASH Diet:**
- Reduce salt (<mark><5g/day = 1 teaspoon</mark>)
- Increase fruits/vegetables
- Reduce saturated fats
- Limit processed foods
:::

**Medications:**
- Amlodipine (Calcium channel blocker)
- Enalapril/Losartan (ACE-I/ARB)
- Hydrochlorothiazide (Diuretic)

**Target:** <mark><140/90 mmHg</mark> (<130/80 if diabetes)

### Warning Signs - Refer Immediately

:::danger
**Refer if:**
- Severe headache
- Chest pain
- Difficulty breathing
- Sudden weakness/paralysis
- BP >180/120
:::

---

## 🎗️ Cancer Screening

### Oral Cancer

:::warning
**High-Risk Groups:**
- Tobacco users (smoking/chewing)
- Betel nut/paan users
- Heavy alcohol users

**Look for:**
- White patch (leukoplakia)
- Red patch (erythroplakia)
- Non-healing ulcer (>2 weeks)
- Lump or thickening
:::

### Breast Cancer Screening (CBE)

**Breast Self-Examination (BSE):**
- When: Monthly, 7-10 days after periods
- Look for: Size change, skin changes, nipple changes
- Feel for: Lumps in breast/armpit

### Cervical Cancer (VIA)

| Feature | Details |
|:--------|:--------|
| Procedure | Apply 5% acetic acid, wait 1 minute |
| VIA Negative | No white areas |
| VIA Positive | White areas → Refer |
| Frequency | Every <mark>5 years</mark> (women 30-65) |

---

## 🧠 Mental Health Program (NMHP)

:::info
**Burden:** 10-20% population has mental health issues
:::

### Common Conditions

| Condition | Key Features |
|:----------|:-------------|
| **Depression** | Persistent sadness >2 weeks, loss of interest |
| **Anxiety** | Excessive worry, restlessness |
| **Severe mental illness** | Talking to self, strange behavior |
| **Alcohol/substance use** | Craving, withdrawal |

### MPHW Role
- Screen for depression during home visits
- Identify substance abuse
- Refer to PHC/mental health clinic
- Urgent referral for suicidal ideation
- Reduce stigma

---

## 👴 Elderly Care (NPHCE)

:::info
**Target:** Population ≥60 years (104 million in India)
:::

### Common Problems
- NCDs (hypertension, diabetes)
- Arthritis, joint pain
- Vision/hearing problems
- Falls and fractures
- Depression, dementia

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. NCDs = 63% of deaths in India
2. Screen all adults ≥30 years annually
3. Diabetes: Fasting ≥126 mg/dL
4. Hypertension: ≥140/90 mmHg
5. Salt <5g/day (1 teaspoon)
6. Target BP <140/90 (<130/80 if diabetic)
7. VIA every 5 years (women 30-65)
8. Oral cancer: Look for white/red patches
9. Non-healing ulcer >2 weeks = suspect oral cancer
10. 10-20% have mental health issues
:::
`,
    contentHi: `
# 🫀 गैर-संचारी रोग कार्यक्रम

---

## 📖 NPCDCS अवलोकन

:::danger
**NCDs भारत में 63% मौतों का कारण हैं**

भारत में:
- <mark>77 मिलियन</mark> मधुमेह रोगी
- <mark>200 मिलियन</mark> उच्च रक्तचाप वाले
:::

### लक्षित NCDs
- मधुमेह
- उच्च रक्तचाप
- हृदय रोग
- कैंसर (मुंह, स्तन, गर्भाशय ग्रीवा)

### सामान्य जोखिम कारक
- तंबाकू उपयोग
- अस्वास्थ्यकर आहार
- शारीरिक निष्क्रियता
- शराब

---

## 🔬 HWC में NCD स्क्रीनिंग

:::info
**लक्ष्य:** सभी वयस्क ≥<mark>30 वर्ष</mark> (वार्षिक)
:::

### कैंसर स्क्रीनिंग

| कैंसर | विधि | लक्ष्य |
|:------|:-----|:------|
| **मुंह** | दृश्य परीक्षण | सभी वयस्क |
| **स्तन** | CBE | महिलाएं ≥30 |
| **गर्भाशय ग्रीवा** | VIA | महिलाएं 30-65 |

---

## 🩸 मधुमेह

### निदान

| परीक्षण | सामान्य | प्रीडायबिटीज | मधुमेह |
|:--------|:--------|:-----------|:-------|
| **उपवास ग्लूकोज** | <100 | 100-125 | <mark>≥126</mark> |
| **रैंडम ग्लूकोज** | - | - | <mark>≥200</mark> |

### प्रबंधन

:::success
**जीवनशैली संशोधन:**
- चीनी, मिठाई कम करें
- फाइबर बढ़ाएं (सब्जियां, साबुत अनाज)
- दैनिक 30 मिनट व्यायाम
- BMI 18.5-23 बनाए रखें
:::

**लक्ष्य:**
- उपवास: 80-130 mg/dL
- भोजन के बाद: <180 mg/dL

---

## 🩺 उच्च रक्तचाप

### BP वर्गीकरण

| श्रेणी | सिस्टोलिक | डायस्टोलिक |
|:-------|:---------|:----------|
| सामान्य | <120 | <80 |
| स्टेज 1 HTN | <mark>130-139</mark> | <mark>80-89</mark> |
| स्टेज 2 HTN | <mark>≥140</mark> | <mark>≥90</mark> |

### प्रबंधन

:::success
**DASH आहार:**
- नमक कम करें (<mark><5g/दिन = 1 चम्मच</mark>)
- फल/सब्जियां बढ़ाएं
- प्रोसेस्ड फूड सीमित करें
:::

**लक्ष्य:** <mark><140/90 mmHg</mark>

---

## 🎗️ कैंसर स्क्रीनिंग

### मुंह का कैंसर

:::warning
**देखें:**
- सफेद पैच (ल्यूकोप्लाकिया)
- लाल पैच
- ठीक न होने वाला अल्सर (>2 सप्ताह)
:::

### VIA (गर्भाशय ग्रीवा कैंसर)

| विशेषता | विवरण |
|:--------|:------|
| प्रक्रिया | 5% एसिटिक एसिड लगाएं |
| VIA नेगेटिव | कोई सफेद क्षेत्र नहीं |
| VIA पॉजिटिव | सफेद क्षेत्र → रेफर |
| आवृत्ति | हर <mark>5 वर्ष</mark> |

---

## 🧠 मानसिक स्वास्थ्य (NMHP)

### सामान्य स्थितियां

| स्थिति | मुख्य विशेषताएं |
|:-------|:---------------|
| **अवसाद** | लगातार उदासी >2 सप्ताह |
| **चिंता** | अत्यधिक चिंता |
| **मादक द्रव्य उपयोग** | लालसा, विदड्रॉल |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. NCDs = भारत में 63% मौतें
2. ≥30 वर्ष वार्षिक स्क्रीनिंग
3. मधुमेह: उपवास ≥126 mg/dL
4. उच्च रक्तचाप: ≥140/90 mmHg
5. नमक <5g/दिन (1 चम्मच)
6. VIA हर 5 वर्ष
7. मुंह कैंसर: सफेद/लाल पैच देखें
8. 10-20% में मानसिक स्वास्थ्य समस्याएं
:::
`
  },
  {
    id: 10,
    titleEn: "Health Promotion & IEC",
    titleHi: "स्वास्थ्य संवर्धन और IEC",
    contentEn: `
# 📢 Health Promotion & IEC

---

## 📖 Definitions

:::info
**Health Promotion:** Creating conditions for health (broader concept)
- Policy changes
- Environmental modifications
- Community organization
- Personal skills development

**Health Education:** Providing information and skills (specific activity)
- Knowledge transfer
- Attitude change
- Behavior modification
:::

---

## 🌍 Ottawa Charter - 5 Action Areas

| Area | Examples |
|:-----|:---------|
| **1. Build Healthy Public Policy** | Tobacco ban, iodized salt policy |
| **2. Create Supportive Environments** | Safe water, clean air |
| **3. Strengthen Community Action** | VHSNC, self-help groups |
| **4. Develop Personal Skills** | Health education, life skills |
| **5. Reorient Health Services** | Preventive focus, community-based |

---

## 📚 Levels of Health Education

| Level | Target | Goal | Examples |
|:------|:-------|:-----|:---------|
| **Primary** | Healthy people | Prevent disease | Immunization education, hand hygiene |
| **Secondary** | At-risk/early disease | Early detection | Cancer screening awareness, TB symptoms |
| **Tertiary** | People with disease | Prevent disability | Diabetes foot care, leprosy self-care |

---

## 📊 IEC vs BCC

| IEC | BCC |
|:----|:----|
| Information, Education, Communication | Behavior Change Communication |
| <mark>One-way</mark> information flow | <mark>Two-way</mark> dialogue |
| Awareness creation | Actual behavior change |
| Facts and data | Audience-centered approach |

---

## 🔄 Stages of Behavior Change

| Stage | Description | Approach |
|:------|:------------|:---------|
| **1. Pre-contemplation** | "I don't have a problem" | Raise awareness |
| **2. Contemplation** | "Maybe I should change" | Discuss pros/cons |
| **3. Preparation** | "I'm ready to change" | Help make a plan |
| **4. Action** | "I'm doing it" | Support, reinforce |
| **5. Maintenance** | "I've been doing it" | Prevent relapse |

---

## 📝 Health Education Methods

### By Audience Size

| Type | Methods |
|:-----|:--------|
| **Individual** | Personal counseling, home visits, clinic consultations |
| **Group** | Health talks, group discussions, demonstrations, role plays |
| **Mass** | Radio, TV, newspapers, social media, posters |

### Health Talk Steps

:::success
**PREPARE:**
- Know your topic well
- Know your audience
- Prepare 3-5 main messages
- Gather visual aids

**DELIVER:**
- Start with story/question
- Use local language, simple words
- Use examples from daily life
- Show pictures/demonstrations
- Involve audience

**CONCLUDE:**
- Summarize key points
- Ask for questions
- Give action points

**Duration:** 15-20 minutes maximum
:::

### Demonstration Steps
1. Explain what you will do
2. Demonstrate slowly
3. Ask participant to repeat
4. Correct mistakes
5. Practice until confident

**Good for:** Handwashing, ORS preparation, breastfeeding position

---

## 📄 IEC Materials

### Types

| Type | Use |
|:-----|:----|
| Posters | Display at facility, public place |
| Pamphlets | Take-home information |
| Flip charts | Group education |
| Flashcards | One-to-one counseling |
| Banners | Campaigns, rallies |
| Videos | Group screenings |

### Principles of Good IEC Materials

:::success
**SIMPLE:** One message, simple language, no jargon
**ATTRACTIVE:** Eye-catching colors, clear pictures
**ACCURATE:** Correct, up-to-date information
**CULTURALLY APPROPRIATE:** Local context, respect beliefs
**ACTION-ORIENTED:** Clear call to action
:::

---

## 💬 Communication Skills

### GATHER Technique (Counseling)

| Letter | Action |
|:-------|:-------|
| **G** | <mark>G</mark>reet warmly |
| **A** | <mark>A</mark>sk about concerns |
| **T** | <mark>T</mark>ell relevant information |
| **H** | <mark>H</mark>elp make decisions |
| **E** | <mark>E</mark>xplain clearly |
| **R** | <mark>R</mark>eturn for follow-up |

---

## 📅 Health Campaigns

### Important Health Days

| Date | Campaign |
|:-----|:---------|
| January 30 | World Leprosy Day |
| March 24 | <mark>World TB Day</mark> |
| April 7 | <mark>World Health Day</mark> |
| April 25 | World Malaria Day |
| May 31 | <mark>World No Tobacco Day</mark> |
| August 1-7 | World Breastfeeding Week |
| November 14 | <mark>World Diabetes Day</mark> |
| December 1 | <mark>World AIDS Day</mark> |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Health Promotion > Health Education
2. IEC = One-way, BCC = Two-way
3. 5 stages of behavior change
4. Health talk = 15-20 minutes max
5. 3-5 key messages per talk
6. GATHER technique for counseling
7. Pre-test IEC materials with audience
8. March 24 = World TB Day
9. April 7 = World Health Day
10. December 1 = World AIDS Day
:::
`,
    contentHi: `
# 📢 स्वास्थ्य संवर्धन और IEC

---

## 📖 परिभाषाएं

:::info
**स्वास्थ्य संवर्धन:** स्वास्थ्य के लिए परिस्थितियां बनाना
- नीति परिवर्तन
- पर्यावरण संशोधन
- सामुदायिक संगठन

**स्वास्थ्य शिक्षा:** जानकारी और कौशल प्रदान करना
- ज्ञान हस्तांतरण
- दृष्टिकोण परिवर्तन
- व्यवहार संशोधन
:::

---

## 🌍 ओटावा चार्टर - 5 कार्य क्षेत्र

| क्षेत्र | उदाहरण |
|:-------|:-------|
| **1. स्वस्थ सार्वजनिक नीति** | तंबाकू प्रतिबंध |
| **2. सहायक वातावरण** | सुरक्षित जल |
| **3. सामुदायिक कार्य** | VHSNC |
| **4. व्यक्तिगत कौशल** | स्वास्थ्य शिक्षा |
| **5. स्वास्थ्य सेवाओं को पुनः उन्मुख करना** | निवारक फोकस |

---

## 📊 IEC बनाम BCC

| IEC | BCC |
|:----|:----|
| सूचना, शिक्षा, संचार | व्यवहार परिवर्तन संचार |
| <mark>एक-तरफा</mark> सूचना | <mark>दो-तरफा</mark> संवाद |
| जागरूकता निर्माण | वास्तविक व्यवहार परिवर्तन |

---

## 🔄 व्यवहार परिवर्तन के चरण

| चरण | विवरण | दृष्टिकोण |
|:----|:------|:---------|
| **1. पूर्व-विचार** | "मुझे समस्या नहीं" | जागरूकता बढ़ाएं |
| **2. विचार** | "शायद मुझे बदलना चाहिए" | लाभ/हानि चर्चा |
| **3. तैयारी** | "मैं बदलने के लिए तैयार" | योजना बनाने में मदद |
| **4. कार्रवाई** | "मैं कर रहा हूं" | समर्थन |
| **5. रखरखाव** | "मैं करता रहा हूं" | पतन रोकें |

---

## 📝 स्वास्थ्य शिक्षा विधियां

### दर्शकों के आकार के अनुसार

| प्रकार | विधियां |
|:-------|:-------|
| **व्यक्तिगत** | परामर्श, घर का दौरा |
| **समूह** | स्वास्थ्य वार्ता, प्रदर्शन |
| **जनसमूह** | रेडियो, TV, सोशल मीडिया |

### स्वास्थ्य वार्ता चरण

:::success
**तैयारी:**
- विषय अच्छी तरह जानें
- 3-5 मुख्य संदेश तैयार करें

**प्रस्तुति:**
- स्थानीय भाषा, सरल शब्द
- दैनिक जीवन के उदाहरण
- दर्शकों को शामिल करें

**समापन:**
- मुख्य बिंदुओं का सारांश
- प्रश्नों के लिए पूछें

**अवधि:** अधिकतम 15-20 मिनट
:::

---

## 💬 GATHER तकनीक

| अक्षर | कार्य |
|:------|:------|
| **G** | <mark>G</mark>reet - गर्मजोशी से स्वागत |
| **A** | <mark>A</mark>sk - चिंताओं के बारे में पूछें |
| **T** | <mark>T</mark>ell - प्रासंगिक जानकारी दें |
| **H** | <mark>H</mark>elp - निर्णय लेने में मदद |
| **E** | <mark>E</mark>xplain - स्पष्ट रूप से समझाएं |
| **R** | <mark>R</mark>eturn - फॉलो-अप के लिए |

---

## 📅 स्वास्थ्य अभियान

### महत्वपूर्ण स्वास्थ्य दिवस

| तारीख | अभियान |
|:------|:-------|
| 30 जनवरी | विश्व कुष्ठ दिवस |
| 24 मार्च | <mark>विश्व TB दिवस</mark> |
| 7 अप्रैल | <mark>विश्व स्वास्थ्य दिवस</mark> |
| 31 मई | <mark>विश्व तंबाकू निषेध दिवस</mark> |
| 14 नवंबर | <mark>विश्व मधुमेह दिवस</mark> |
| 1 दिसंबर | <mark>विश्व AIDS दिवस</mark> |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. स्वास्थ्य संवर्धन > स्वास्थ्य शिक्षा
2. IEC = एक-तरफा, BCC = दो-तरफा
3. व्यवहार परिवर्तन के 5 चरण
4. स्वास्थ्य वार्ता = अधिकतम 15-20 मिनट
5. प्रति वार्ता 3-5 मुख्य संदेश
6. GATHER तकनीक
7. 24 मार्च = विश्व TB दिवस
8. 7 अप्रैल = विश्व स्वास्थ्य दिवस
:::
`
  },
  {
    id: 11,
    titleEn: "Disease Surveillance & IDSP",
    titleHi: "रोग निगरानी और IDSP",
    contentEn: `
# 🔍 Disease Surveillance & IDSP

---

## 📖 What is Surveillance?

:::info
**Definition:** Continuous, systematic collection, analysis, interpretation, and dissemination of health data for <mark>public health action</mark>.

**Purpose:** "Information for Action"
:::

### Surveillance Purposes
1. <mark>DETECT</mark> outbreaks early
2. <mark>MONITOR</mark> disease trends
3. <mark>IDENTIFY</mark> high-risk areas/populations
4. <mark>EVALUATE</mark> program effectiveness
5. <mark>PLAN</mark> resource allocation

---

## 📊 Types of Surveillance

| Type | Description | Example |
|:-----|:------------|:--------|
| **Passive** | Routine reporting from facilities | Weekly IDSP reports |
| **Active** | Health workers search for cases | Polio AFP, TB ACF |
| **Sentinel** | Selected sites report specific diseases | HIV sentinel sites |
| **Syndromic** | Based on symptoms, not confirmed diagnosis | Fever, diarrhea |

---

## 🏥 IDSP (Integrated Disease Surveillance Programme)

:::info
**Launched:** 2004

**Coverage:** All 36 States/UTs, 766 districts
:::

### IDSP Structure

| Level | Unit | Function |
|:------|:-----|:---------|
| **National** | CSU (Central Surveillance Unit) | National coordination, IHR reporting |
| **State** | SSU (State Surveillance Unit) | Compile district data, coordinate response |
| **District** | DSU (District Surveillance Unit) | Compile PHC data, investigate outbreaks |
| **Peripheral** | PHC, CHC, Hospitals, SC | Weekly data collection |

---

## 📋 IDSP Reporting Forms

| Form | Who Fills | When | What |
|:-----|:----------|:-----|:-----|
| **S Form** | <mark>MPHW, ANM</mark> | Weekly (Monday) | Syndromes |
| **P Form** | Medical Officer | Weekly | Presumptive diagnosis |
| **L Form** | Lab Technician | Weekly | Lab confirmed |

### S-Form Syndromes

| Syndrome | Definition |
|:---------|:-----------|
| **Fever** | Temp >38°C (100.4°F) |
| **Acute Diarrhea** | ≥3 loose stools/24 hours, <14 days |
| **ARI** | Cough with fast breathing |
| **Jaundice** | Yellow eyes/skin, acute onset |
| **AFP** | Sudden limb weakness, <mark><15 years</mark> |
| **Unusual Event** | Clustering beyond expected |

---

## 🚨 Notifiable Diseases

:::danger
**Report within 24 hours:**
- Cholera
- Plague
- Yellow fever
- Viral hemorrhagic fevers
- Meningococcal meningitis
- Diphtheria
- <mark>AFP (Acute Flaccid Paralysis)</mark>
- Any unusual clustering
:::

---

## 🦠 Outbreak/Epidemic

:::info
**Definition:** Occurrence of cases <mark>in excess</mark> of what is normally expected in that population, time, and place.
:::

### Disease Patterns

| Pattern | Definition |
|:--------|:-----------|
| **Endemic** | Constant presence (normal level) |
| **Epidemic** | Sudden increase above expected (outbreak) |
| **Pandemic** | Epidemic across countries/continents |

### Recognizing an Outbreak

:::warning
**Warning Signs:**
- Unusual increase in similar symptoms
- Multiple cases from same area
- Cases clustering in time
- Common exposure (water, food)
- Rumors of illness in community
:::

---

## 🔬 Outbreak Investigation - 9 Steps

| Step | Action |
|:-----|:-------|
| 1 | <mark>Verify</mark> the outbreak |
| 2 | <mark>Confirm</mark> diagnosis (lab tests) |
| 3 | <mark>Define</mark> a case (criteria) |
| 4 | <mark>Find</mark> all cases (line listing) |
| 5 | <mark>Describe</mark> by Person, Place, Time |
| 6 | <mark>Generate</mark> hypotheses |
| 7 | <mark>Test</mark> hypotheses |
| 8 | <mark>Implement</mark> control measures |
| 9 | <mark>Communicate</mark> findings |

### Descriptive Epidemiology

| Dimension | Tool |
|:----------|:-----|
| **Time** | <mark>Epidemic curve</mark> |
| **Place** | <mark>Spot map</mark> |
| **Person** | Age, sex analysis |

---

## 🔴 AFP Surveillance (Polio)

:::danger
**Definition:** Any child <mark><15 years</mark> with sudden onset of weakness/paralysis in limbs

**Report:** Within <mark>24 hours</mark>

**Stool collection:** Within <mark>14 days</mark>

**Target:** AFP rate ≥2 per 100,000 children <15 years

**India certified polio-free: 2014**

**EVEN ONE TRUE POLIO CASE = NATIONAL EMERGENCY**
:::

---

## 👨‍⚕️ MPHW Role in Surveillance

### Routine
- Be alert for unusual illness clusters
- Note cases with reportable syndromes
- Complete S-Form weekly (every Monday)
- <mark>Zero reporting</mark> if no cases (confirms active surveillance)

### During Outbreak
- Active case search (house-to-house)
- Line listing of cases
- Sample collection (as directed)
- Daily reporting to outbreak team
- Health education to community
- Support control measures

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Surveillance = "Information for Action"
2. S-Form = MPHW fills weekly (Monday)
3. P-Form = MO fills
4. L-Form = Lab Tech fills
5. Zero report is also important
6. Notifiable diseases = Report within 24 hours
7. AFP = <15 years, sudden weakness
8. AFP report within 24 hours
9. Stool within 14 days for AFP
10. Outbreak investigation = 9 steps
11. Endemic = constant; Epidemic = unusual increase
12. Epidemic curve = Time; Spot map = Place
:::
`,
    contentHi: `
# 🔍 रोग निगरानी और IDSP

---

## 📖 निगरानी क्या है?

:::info
**परिभाषा:** <mark>सार्वजनिक स्वास्थ्य कार्रवाई</mark> के लिए स्वास्थ्य डेटा का निरंतर, व्यवस्थित संग्रह, विश्लेषण और प्रसार।

**उद्देश्य:** "कार्रवाई के लिए जानकारी"
:::

### निगरानी के उद्देश्य
1. प्रकोप जल्दी <mark>पता लगाना</mark>
2. रोग प्रवृत्तियों की <mark>निगरानी</mark>
3. उच्च जोखिम क्षेत्रों की <mark>पहचान</mark>
4. कार्यक्रम प्रभावशीलता का <mark>मूल्यांकन</mark>

---

## 📊 निगरानी के प्रकार

| प्रकार | विवरण | उदाहरण |
|:-------|:------|:-------|
| **निष्क्रिय** | सुविधाओं से नियमित रिपोर्टिंग | साप्ताहिक IDSP |
| **सक्रिय** | स्वास्थ्य कार्यकर्ता मामले खोजते हैं | पोलियो AFP |
| **सेंटिनेल** | चुनिंदा साइट विशिष्ट रोग रिपोर्ट | HIV |
| **सिंड्रोमिक** | लक्षणों पर आधारित | बुखार, दस्त |

---

## 🏥 IDSP

:::info
**शुरुआत:** 2004

**कवरेज:** सभी 36 राज्य/केंद्र शासित प्रदेश, 766 जिले
:::

---

## 📋 IDSP रिपोर्टिंग फॉर्म

| फॉर्म | कौन भरता है | कब | क्या |
|:------|:-----------|:---|:----|
| **S फॉर्म** | <mark>MPHW, ANM</mark> | साप्ताहिक (सोमवार) | सिंड्रोम |
| **P फॉर्म** | चिकित्सा अधिकारी | साप्ताहिक | अनुमानित निदान |
| **L फॉर्म** | लैब टेक | साप्ताहिक | लैब पुष्टि |

### S-फॉर्म सिंड्रोम

| सिंड्रोम | परिभाषा |
|:---------|:--------|
| **बुखार** | तापमान >38°C |
| **तीव्र दस्त** | ≥3 पतले मल/24 घंटे |
| **ARI** | खांसी + तेज श्वास |
| **पीलिया** | पीली आंखें/त्वचा |
| **AFP** | अचानक अंग कमजोरी, <mark><15 वर्ष</mark> |

---

## 🚨 सूचनीय रोग

:::danger
**24 घंटे में रिपोर्ट करें:**
- हैजा
- प्लेग
- पीला बुखार
- वायरल रक्तस्रावी बुखार
- मेनिंगोकोकल मेनिनजाइटिस
- डिप्थीरिया
- <mark>AFP</mark>
- कोई भी असामान्य समूहन
:::

---

## 🦠 प्रकोप/महामारी

:::info
**परिभाषा:** उस जनसंख्या, समय और स्थान में सामान्य से <mark>अधिक</mark> मामलों की घटना।
:::

### रोग पैटर्न

| पैटर्न | परिभाषा |
|:-------|:--------|
| **एंडेमिक** | निरंतर उपस्थिति |
| **एपिडेमिक** | अचानक असामान्य वृद्धि |
| **पैंडेमिक** | देशों में फैली महामारी |

---

## 🔬 प्रकोप जांच - 9 चरण

| चरण | कार्य |
|:----|:------|
| 1 | प्रकोप <mark>सत्यापित</mark> करें |
| 2 | निदान <mark>पुष्टि</mark> करें |
| 3 | केस <mark>परिभाषित</mark> करें |
| 4 | सभी मामले <mark>खोजें</mark> |
| 5 | व्यक्ति, स्थान, समय द्वारा <mark>वर्णन</mark> |
| 6 | परिकल्पनाएं <mark>बनाएं</mark> |
| 7 | परिकल्पनाओं का <mark>परीक्षण</mark> |
| 8 | नियंत्रण उपाय <mark>लागू</mark> करें |
| 9 | निष्कर्ष <mark>संप्रेषित</mark> करें |

---

## 🔴 AFP निगरानी (पोलियो)

:::danger
**परिभाषा:** <mark><15 वर्ष</mark> का कोई भी बच्चा जिसमें अंगों में अचानक कमजोरी/पक्षाघात

**रिपोर्ट:** <mark>24 घंटे</mark> में

**मल संग्रह:** <mark>14 दिन</mark> में

**भारत पोलियो-मुक्त: 2014**

**एक भी सच्चा पोलियो केस = राष्ट्रीय आपातकाल**
:::

---

## 👨‍⚕️ MPHW की भूमिका

### नियमित
- असामान्य बीमारी समूहों के लिए सतर्क रहें
- साप्ताहिक S-फॉर्म भरें (हर सोमवार)
- <mark>शून्य रिपोर्टिंग</mark> अगर कोई मामला नहीं

### प्रकोप के दौरान
- सक्रिय केस खोज (घर-घर)
- मामलों की लाइन लिस्टिंग
- नमूना संग्रह
- दैनिक रिपोर्टिंग
- समुदाय को स्वास्थ्य शिक्षा

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. निगरानी = "कार्रवाई के लिए जानकारी"
2. S-फॉर्म = MPHW साप्ताहिक भरे (सोमवार)
3. शून्य रिपोर्ट भी महत्वपूर्ण
4. सूचनीय रोग = 24 घंटे में रिपोर्ट
5. AFP = <15 वर्ष, अचानक कमजोरी
6. AFP रिपोर्ट 24 घंटे में
7. मल 14 दिन में AFP के लिए
8. प्रकोप जांच = 9 चरण
9. एंडेमिक = निरंतर; एपिडेमिक = असामान्य वृद्धि
:::
`
  },
  {
    id: 12,
    titleEn: "Community Health Planning",
    titleHi: "सामुदायिक स्वास्थ्य योजना",
    contentEn: `
# 📋 Community Health Planning

---

## 📖 What is Community Health Planning?

:::info
**Definition:** A systematic process of assessing health needs, setting priorities, planning interventions, implementing activities, and evaluating outcomes at the community level.
:::

### Planning Cycle

| Step | Action |
|:-----|:-------|
| 1 | <mark>Assessment</mark> - What are the health problems? |
| 2 | <mark>Prioritization</mark> - Which problems are most important? |
| 3 | <mark>Planning</mark> - What will we do? |
| 4 | <mark>Implementation</mark> - Doing the planned activities |
| 5 | <mark>Monitoring</mark> - Are we doing what we planned? |
| 6 | <mark>Evaluation</mark> - Did it work? |

---

## 📊 Levels of Health Planning in India

| Level | Plan |
|:------|:-----|
| **National** | National Health Policy, NHM Framework |
| **State** | State Programme Implementation Plan (PIP) |
| **District** | District Health Action Plan (DHAP) |
| **Block/PHC** | Block Action Plan |
| **Sub-Centre** | <mark>Micro-plans, Due lists</mark> (MPHW level) |

---

## 🔍 Community Health Needs Assessment

### Data Sources

| Type | Sources |
|:-----|:--------|
| **Primary** | House surveys, registration, focus groups, observation |
| **Secondary** | Census, PHC reports, HMIS, NFHS, ASHA diaries |

### Community Profile Data

:::success
**Demographic:**
- Total population, households
- Age distribution
- Women 15-49, Children <5
- SC/ST, BPL families

**Socio-economic:**
- Occupation, literacy
- Access to safe water
- Toilet coverage
- Distance to facility

**Health:**
- Common diseases
- Maternal/child deaths
- Immunization coverage
- Institutional delivery rate
:::

### Prioritization Criteria

| Criterion | Question |
|:----------|:---------|
| **Magnitude** | How many affected? |
| **Severity** | Does it cause death/disability? |
| **Feasibility** | Can we do something about it? |
| **Community concern** | Do people see it as important? |
| **Effectiveness** | Is there a proven solution? |

---

## 📝 Micro-Planning

:::info
**Definition:** Detailed planning at the smallest unit (village/Sub-Centre) to ensure every beneficiary is covered.
:::

### Micro-Plan Components

| Component | Details |
|:----------|:--------|
| **Head count** | All pregnant women, infants, children, eligible couples |
| **Due lists** | Who needs services this month? |
| **Session plan** | When, where, what supplies? |
| **Tracking** | How to follow up left-outs/dropouts? |

### Steps to Develop Micro-Plan

1. <mark>Enumerate</mark> beneficiaries (pregnant women, infants by month)
2. <mark>Prepare due lists</mark> (ANC, immunization, PNC)
3. <mark>Plan sessions</mark> (VHND dates, outreach sites)
4. <mark>Identify left-outs/dropouts</mark> - Plan special visits

---

## 📊 Monitoring vs Evaluation

| Monitoring | Evaluation |
|:-----------|:-----------|
| <mark>Continuous</mark> | Periodic |
| Tracks <mark>activities</mark> | Measures <mark>outcomes</mark> |
| "Are we doing what we planned?" | "Did it make a difference?" |
| Internal (self) | Often external |
| Immediate feedback | Long-term assessment |

---

## 📈 Key Health Indicators

### Maternal Health

| Indicator | Formula |
|:----------|:--------|
| ANC Registration | (Registered / Expected pregnancies) × 100 |
| ANC Coverage (4 visits) | (4+ ANC / Total deliveries) × 100 |
| Institutional Delivery | (Inst. deliveries / Total deliveries) × 100 |

### Child Health

| Indicator | Formula |
|:----------|:--------|
| Full Immunization | (Fully immunized / Target infants) × 100 |
| BCG Coverage | (BCG given / Live births) × 100 |

### Important Rate Calculations

| Rate | Formula |
|:-----|:--------|
| **IMR** | (Infant deaths / Live births) × <mark>1000</mark> |
| **MMR** | (Maternal deaths / Live births) × <mark>100,000</mark> |
| **CBR** | (Live births / Mid-year population) × 1000 |
| **CDR** | (Deaths / Mid-year population) × 1000 |

---

## 📚 Essential Registers at Sub-Centre

| Register | Purpose |
|:---------|:--------|
| **Eligible Couple** | All married women 15-49, pregnancies, contraceptive use |
| **ANC/PNC** | Pregnant women, ANC visits, delivery, PNC |
| **Child Immunization** | Children 0-5, immunization record |
| **Family Planning** | FP acceptors, method, follow-up |
| **Birth & Death** | All births and deaths |
| **Stock** | Vaccines, drugs, supplies |
| **Disease Surveillance** | Syndrome cases, notifiable diseases |

---

## 📤 Monthly Reporting

| Report | Due Date | Contains |
|:-------|:---------|:---------|
| Monthly Activity Report | 3rd of month | Services provided, coverage |
| HMIS Forms | 5th of month | All health program data |
| Stock Report | 5th of month | Vaccine/drug stock position |
| IDSP S-Form | Every Monday | Syndrome data |

### HMIS Data Quality

:::success
**Data must be:**
- <mark>Complete</mark> - All fields filled
- <mark>Accurate</mark> - Correct numbers
- <mark>Timely</mark> - Submitted on time
- <mark>Consistent</mark> - Matches registers
:::

---

## 🏘️ VHSNC (Village Health Sanitation & Nutrition Committee)

### Composition
- ASHA (Member Secretary)
- ANM, AWW
- PRI members (Sarpanch)
- SHG representatives
- MPHW attends meetings

### Functions
- Prepare village health plan
- Monitor VHND and health services
- Manage untied funds (<mark>₹10,000/year</mark>)
- Address local health issues
- Social audit of services

---

## 👨‍⚕️ MPHW Role in Planning

### Assessment
- Maintain updated population data
- Know all pregnant women, infants, children
- Identify high-risk individuals

### Planning (Each month)
- Prepare due list for services
- Plan outreach sessions/VHND
- Estimate supply requirements
- Identify left-outs

### Implementation
- Conduct planned sessions
- Document all services in registers

### Monitoring
- Check coverage against targets
- Identify gaps and reasons
- Plan corrective action

### Reporting
- Complete monthly reports accurately
- Submit by due date
- Weekly IDSP forms

### Community Engagement
- Attend VHSNC meetings
- Work with ASHA, AWW
- Engage community leaders

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Planning cycle: Assessment → Prioritization → Planning → Implementation → Monitoring → Evaluation
2. Micro-plan = Due lists + Session plan + Tracking
3. Monitoring = Continuous; Evaluation = Periodic
4. IMR formula = (Infant deaths / Live births) × 1000
5. MMR formula = (Maternal deaths / Live births) × 100,000
6. HMIS data: Complete, Accurate, Timely, Consistent
7. VHSNC gets ₹10,000/year untied funds
8. Submit monthly report by 3rd-5th of month
9. IDSP S-Form every Monday
10. Good planning = Better coverage
:::
`,
    contentHi: `
# 📋 सामुदायिक स्वास्थ्य योजना

---

## 📖 सामुदायिक स्वास्थ्य योजना क्या है?

:::info
**परिभाषा:** सामुदायिक स्तर पर स्वास्थ्य आवश्यकताओं का आकलन, प्राथमिकताएं निर्धारित करना, हस्तक्षेप योजना बनाना, गतिविधियां लागू करना और परिणामों का मूल्यांकन करने की व्यवस्थित प्रक्रिया।
:::

### योजना चक्र

| चरण | कार्य |
|:----|:------|
| 1 | <mark>आकलन</mark> - स्वास्थ्य समस्याएं क्या हैं? |
| 2 | <mark>प्राथमिकता</mark> - कौन सी समस्याएं महत्वपूर्ण? |
| 3 | <mark>योजना</mark> - हम क्या करेंगे? |
| 4 | <mark>कार्यान्वयन</mark> - योजित गतिविधियां करना |
| 5 | <mark>निगरानी</mark> - क्या हम वही कर रहे जो योजना थी? |
| 6 | <mark>मूल्यांकन</mark> - क्या यह काम आया? |

---

## 📊 भारत में स्वास्थ्य योजना के स्तर

| स्तर | योजना |
|:-----|:------|
| **राष्ट्रीय** | राष्ट्रीय स्वास्थ्य नीति, NHM फ्रेमवर्क |
| **राज्य** | राज्य कार्यक्रम कार्यान्वयन योजना (PIP) |
| **जिला** | जिला स्वास्थ्य कार्य योजना (DHAP) |
| **ब्लॉक/PHC** | ब्लॉक कार्य योजना |
| **उप-केंद्र** | <mark>माइक्रो-प्लान, ड्यू लिस्ट</mark> (MPHW स्तर) |

---

## 🔍 सामुदायिक स्वास्थ्य आवश्यकता आकलन

### डेटा स्रोत

| प्रकार | स्रोत |
|:-------|:------|
| **प्राथमिक** | घर सर्वेक्षण, पंजीकरण, फोकस ग्रुप, अवलोकन |
| **द्वितीयक** | जनगणना, PHC रिपोर्ट, HMIS, NFHS, ASHA डायरी |

### सामुदायिक प्रोफाइल डेटा

:::success
**जनसांख्यिकीय:**
- कुल जनसंख्या, परिवार
- आयु वितरण
- महिलाएं 15-49, बच्चे <5
- SC/ST, BPL परिवार

**सामाजिक-आर्थिक:**
- व्यवसाय, साक्षरता
- सुरक्षित पानी पहुंच
- शौचालय कवरेज
- सुविधा से दूरी

**स्वास्थ्य:**
- सामान्य बीमारियां
- मातृ/शिशु मृत्यु
- टीकाकरण कवरेज
- संस्थागत प्रसव दर
:::

### प्राथमिकता मानदंड

| मानदंड | प्रश्न |
|:-------|:-------|
| **परिमाण** | कितने प्रभावित? |
| **गंभीरता** | क्या मृत्यु/विकलांगता? |
| **व्यवहार्यता** | क्या हम कुछ कर सकते? |
| **समुदाय चिंता** | लोग महत्वपूर्ण मानते? |
| **प्रभावशीलता** | सिद्ध समाधान है? |

---

## 📝 माइक्रो-प्लानिंग

:::info
**परिभाषा:** सबसे छोटी इकाई (गांव/उप-केंद्र) पर विस्तृत योजना ताकि हर लाभार्थी कवर हो।
:::

### माइक्रो-प्लान घटक

| घटक | विवरण |
|:-----|:-------|
| **हेड काउंट** | सभी गर्भवती, शिशु, बच्चे, पात्र दंपति |
| **ड्यू लिस्ट** | इस महीने किसे सेवा चाहिए? |
| **सत्र योजना** | कब, कहां, क्या आपूर्ति? |
| **ट्रैकिंग** | लेफ्ट-आउट/ड्रॉप-आउट फॉलो-अप कैसे? |

### माइक्रो-प्लान विकास चरण

1. <mark>गणना</mark> करें (गर्भवती, शिशु महीने अनुसार)
2. <mark>ड्यू लिस्ट तैयार</mark> (ANC, टीकाकरण, PNC)
3. <mark>सत्र योजना</mark> (VHND तिथियां, आउटरीच स्थल)
4. <mark>लेफ्ट-आउट/ड्रॉप-आउट पहचानें</mark> - विशेष विज़िट

---

## 📊 निगरानी बनाम मूल्यांकन

| निगरानी | मूल्यांकन |
|:--------|:----------|
| <mark>निरंतर</mark> | आवधिक |
| <mark>गतिविधियां</mark> ट्रैक | <mark>परिणाम</mark> मापें |
| "क्या हम योजनानुसार कर रहे?" | "क्या फर्क पड़ा?" |
| आंतरिक (स्वयं) | अक्सर बाहरी |
| तत्काल प्रतिक्रिया | दीर्घकालिक आकलन |

---

## 📈 प्रमुख स्वास्थ्य संकेतक

### मातृ स्वास्थ्य

| संकेतक | सूत्र |
|:-------|:------|
| ANC पंजीकरण | (पंजीकृत / अपेक्षित गर्भधारण) × 100 |
| ANC कवरेज (4 विज़िट) | (4+ ANC / कुल प्रसव) × 100 |
| संस्थागत प्रसव | (संस्था प्रसव / कुल प्रसव) × 100 |

### शिशु स्वास्थ्य

| संकेतक | सूत्र |
|:-------|:------|
| पूर्ण टीकाकरण | (पूर्ण टीकाकृत / लक्ष्य शिशु) × 100 |
| BCG कवरेज | (BCG दिया / जीवित जन्म) × 100 |

### महत्वपूर्ण दर गणना

| दर | सूत्र |
|:---|:------|
| **IMR** | (शिशु मृत्यु / जीवित जन्म) × <mark>1000</mark> |
| **MMR** | (मातृ मृत्यु / जीवित जन्म) × <mark>100,000</mark> |
| **CBR** | (जीवित जन्म / मध्य-वर्ष जनसंख्या) × 1000 |
| **CDR** | (मृत्यु / मध्य-वर्ष जनसंख्या) × 1000 |

---

## 📚 उप-केंद्र पर आवश्यक रजिस्टर

| रजिस्टर | उद्देश्य |
|:--------|:---------|
| **पात्र दंपति** | सभी विवाहित महिलाएं 15-49, गर्भधारण, गर्भनिरोधक |
| **ANC/PNC** | गर्भवती, ANC विज़िट, प्रसव, PNC |
| **बाल टीकाकरण** | बच्चे 0-5, टीकाकरण रिकॉर्ड |
| **परिवार नियोजन** | FP स्वीकारक, विधि, फॉलो-अप |
| **जन्म-मृत्यु** | सभी जन्म और मृत्यु |
| **स्टॉक** | टीके, दवाएं, आपूर्ति |
| **रोग निगरानी** | सिंड्रोम केस, सूचनीय रोग |

---

## 📤 मासिक रिपोर्टिंग

| रिपोर्ट | नियत तिथि | सामग्री |
|:--------|:----------|:--------|
| मासिक गतिविधि रिपोर्ट | माह की 3 तारीख | सेवाएं, कवरेज |
| HMIS फॉर्म | माह की 5 तारीख | सभी कार्यक्रम डेटा |
| स्टॉक रिपोर्ट | माह की 5 तारीख | टीका/दवा स्थिति |
| IDSP S-फॉर्म | हर सोमवार | सिंड्रोम डेटा |

### HMIS डेटा गुणवत्ता

:::success
**डेटा होना चाहिए:**
- <mark>पूर्ण</mark> - सभी फील्ड भरे
- <mark>सटीक</mark> - सही संख्या
- <mark>समय पर</mark> - नियत तिथि पर जमा
- <mark>सुसंगत</mark> - रजिस्टर से मेल
:::

---

## 🏘️ VHSNC (ग्राम स्वास्थ्य स्वच्छता एवं पोषण समिति)

### संरचना
- ASHA (सदस्य सचिव)
- ANM, AWW
- PRI सदस्य (सरपंच)
- SHG प्रतिनिधि
- MPHW बैठकों में भाग लें

### कार्य
- ग्राम स्वास्थ्य योजना बनाना
- VHND और स्वास्थ्य सेवाओं की निगरानी
- अनटाइड फंड प्रबंधन (<mark>₹10,000/वर्ष</mark>)
- स्थानीय स्वास्थ्य मुद्दे
- सेवाओं का सामाजिक ऑडिट

---

## 👨‍⚕️ योजना में MPHW भूमिका

### आकलन
- अद्यतन जनसंख्या डेटा रखें
- सभी गर्भवती, शिशु, बच्चे जानें
- उच्च-जोखिम व्यक्ति पहचानें

### योजना (हर महीने)
- सेवाओं के लिए ड्यू लिस्ट
- आउटरीच/VHND योजना
- आपूर्ति आवश्यकता अनुमान
- लेफ्ट-आउट पहचानें

### कार्यान्वयन
- योजित सत्र संचालित करें
- रजिस्टर में सभी सेवाएं दर्ज करें

### निगरानी
- लक्ष्य के विरुद्ध कवरेज जांचें
- अंतराल और कारण पहचानें
- सुधारात्मक कार्रवाई योजना

### रिपोर्टिंग
- मासिक रिपोर्ट सही से पूर्ण करें
- नियत तिथि तक जमा करें
- साप्ताहिक IDSP फॉर्म

### समुदाय जुड़ाव
- VHSNC बैठकों में भाग लें
- ASHA, AWW के साथ काम
- समुदाय नेताओं को जोड़ें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. योजना चक्र: आकलन → प्राथमिकता → योजना → कार्यान्वयन → निगरानी → मूल्यांकन
2. माइक्रो-प्लान = ड्यू लिस्ट + सत्र योजना + ट्रैकिंग
3. निगरानी = निरंतर; मूल्यांकन = आवधिक
4. IMR सूत्र = (शिशु मृत्यु / जीवित जन्म) × 1000
5. MMR सूत्र = (मातृ मृत्यु / जीवित जन्म) × 100,000
6. HMIS डेटा: पूर्ण, सटीक, समय पर, सुसंगत
7. VHSNC को ₹10,000/वर्ष अनटाइड फंड
8. मासिक रिपोर्ट माह की 3-5 तारीख तक
9. IDSP S-फॉर्म हर सोमवार
10. अच्छी योजना = बेहतर कवरेज
:::
`
  }
];

export default publicHealthLessons
