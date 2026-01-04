export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const mchLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to MCH",
    titleHi: "MCH का परिचय",
    contentEn: `
# 👩‍👧 Introduction to Maternal & Child Health

---

## 📖 What is MCH?

> **Maternal Health** = Health of women during pregnancy, childbirth, and postpartum
> **Child Health** = Physical, mental, social well-being of children from birth to adolescence

### MCH Services Include:
- Antenatal care (ANC)
- Intranatal care (delivery)
- Postnatal care (PNC)
- Newborn care
- Immunization
- Family planning

---

## 📊 Key MCH Indicators

### Maternal Indicators

| Indicator | Definition | India (Current) |
|:----------|:-----------|:----------------|
| **MMR** | Maternal deaths per 100,000 live births | ~97 |
| **Institutional Delivery** | % deliveries in health facilities | 89% |
| **ANC Coverage** | % with 4+ ANC visits | ~58% |

### Child Indicators

| Indicator | Definition | India (Current) |
|:----------|:-----------|:----------------|
| **IMR** | Deaths <1 year per 1000 live births | 35 |
| **NMR** | Deaths <28 days per 1000 live births | 25 |
| **U5MR** | Deaths <5 years per 1000 live births | 42 |

---

## 🏥 National MCH Programs

| Program | Key Feature |
|:--------|:------------|
| **JSY** | Cash for institutional delivery |
| **JSSK** | Free delivery, drugs, transport |
| **PMSMA** | Quality ANC on 9th of every month |
| **PMMVY** | Rs. 5000 for first live birth |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. MMR = Maternal deaths per 100,000 live births
2. IMR = Infant deaths per 1000 live births
3. NMR = Neonatal deaths (0-28 days) per 1000
4. JSY = Cash incentive for delivery
5. JSSK = Free and cashless delivery
6. PMSMA = 9th of every month ANC
:::
`,
    contentHi: `
# 👩‍👧 मातृ एवं शिशु स्वास्थ्य का परिचय

---

## 📖 MCH क्या है?

> **मातृ स्वास्थ्य** = गर्भावस्था, प्रसव और प्रसवोत्तर में महिलाओं का स्वास्थ्य
> **शिशु स्वास्थ्य** = जन्म से किशोरावस्था तक बच्चों का कल्याण

### MCH सेवाओं में शामिल:
- प्रसवपूर्व देखभाल (ANC)
- प्रसव देखभाल
- प्रसवोत्तर देखभाल (PNC)
- नवजात देखभाल
- टीकाकरण
- परिवार नियोजन

---

## 📊 प्रमुख MCH संकेतक

### मातृ संकेतक

| संकेतक | परिभाषा | भारत |
|:-------|:--------|:-----|
| **MMR** | मातृ मृत्यु प्रति 100,000 जन्म | ~97 |
| **संस्थागत प्रसव** | स्वास्थ्य सुविधाओं में प्रसव % | 89% |

### शिशु संकेतक

| संकेतक | परिभाषा | भारत |
|:-------|:--------|:-----|
| **IMR** | <1 वर्ष मृत्यु प्रति 1000 | 35 |
| **NMR** | <28 दिन मृत्यु प्रति 1000 | 25 |

---

## 🏥 राष्ट्रीय MCH कार्यक्रम

| कार्यक्रम | मुख्य विशेषता |
|:---------|:-------------|
| **JSY** | संस्थागत प्रसव के लिए नकद |
| **JSSK** | मुफ्त प्रसव, दवाएं, परिवहन |
| **PMSMA** | हर 9 तारीख को गुणवत्ता ANC |
| **PMMVY** | पहले जन्म पर Rs. 5000 |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. MMR = मातृ मृत्यु प्रति 100,000
2. IMR = शिशु मृत्यु प्रति 1000
3. NMR = नवजात मृत्यु (0-28 दिन)
4. JSY = प्रसव के लिए नकद
5. JSSK = मुफ्त और कैशलेस प्रसव
:::
`
  },
  {
    id: 2,
    titleEn: "Antenatal Care",
    titleHi: "प्रसवपूर्व देखभाल",
    contentEn: `
# 🤰 Antenatal Care (ANC)

---

## 📖 What is ANC?

> **ANC** is the care of a woman and her unborn baby during pregnancy.

### Goals of ANC
- Monitor pregnancy progress
- Identify high-risk pregnancies
- Prevent complications
- Promote healthy behaviors
- Prepare for safe delivery

---

## 📅 ANC Schedule

### Minimum 4 Visits (WHO Recommended)

| Visit | Timing | Focus |
|:------|:-------|:------|
| **1st** | <12 weeks | Registration, baseline |
| **2nd** | 14-26 weeks | Growth, screening |
| **3rd** | 28-34 weeks | Complications check |
| **4th** | 36-40 weeks | Delivery planning |

---

## ✅ ANC Components

### History Taking
- Last menstrual period (LMP)
- Previous pregnancies
- Medical history
- Family history

### Physical Examination

| Parameter | Normal Value |
|:----------|:-------------|
| **Weight gain** | 10-12 kg total |
| **Blood pressure** | <140/90 mmHg |
| **Fundal height** | ~weeks of gestation |
| **Fetal heart rate** | 120-160 bpm |

### Investigations

| Test | Purpose |
|:-----|:--------|
| **Hemoglobin** | Detect anemia |
| **Blood group** | Emergency preparedness |
| **Urine routine** | Detect UTI, preeclampsia |
| **HIV, Syphilis** | PPTCT |
| **Blood sugar** | Gestational diabetes |

---

## 💊 Essential Supplements

| Supplement | Dose | Purpose |
|:-----------|:-----|:--------|
| **Iron** | 100 mg/day | Prevent anemia |
| **Folic acid** | 500 μg/day | Prevent neural tube defects |
| **Calcium** | 1 g/day | Bone development |
| **TT vaccine** | 2 doses | Prevent neonatal tetanus |

---

## ⚠️ Danger Signs in Pregnancy

:::danger
**Refer Immediately If:**
- Vaginal bleeding
- Severe headache
- Blurred vision
- Severe abdominal pain
- Reduced fetal movements
- Convulsions
- High fever
- Water leak before term
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Minimum 4 ANC visits recommended
2. First visit before 12 weeks
3. IFA tablet daily throughout pregnancy
4. TT vaccine: 2 doses
5. Hemoglobin <11 g/dL = Anemia
6. BP >140/90 = High risk
7. Know the 8 danger signs
:::
`,
    contentHi: `
# 🤰 प्रसवपूर्व देखभाल (ANC)

---

## 📖 ANC क्या है?

> **ANC** गर्भावस्था के दौरान महिला और उसके अजन्मे बच्चे की देखभाल है।

---

## 📅 ANC अनुसूची

### न्यूनतम 4 विज़िट

| विज़िट | समय | फोकस |
|:------|:----|:-----|
| **1st** | <12 सप्ताह | पंजीकरण |
| **2nd** | 14-26 सप्ताह | वृद्धि, स्क्रीनिंग |
| **3rd** | 28-34 सप्ताह | जटिलता जांच |
| **4th** | 36-40 सप्ताह | प्रसव योजना |

---

## ✅ ANC घटक

### शारीरिक परीक्षा

| पैरामीटर | सामान्य मान |
|:---------|:-----------|
| **वजन वृद्धि** | कुल 10-12 kg |
| **रक्तचाप** | <140/90 mmHg |
| **भ्रूण हृदय गति** | 120-160 bpm |

### जांच

| परीक्षण | उद्देश्य |
|:--------|:--------|
| **हीमोग्लोबिन** | एनीमिया पता |
| **रक्त समूह** | आपातकालीन तैयारी |
| **मूत्र परीक्षण** | UTI, प्रीक्लेम्पसिया |
| **HIV, सिफलिस** | PPTCT |

---

## 💊 आवश्यक पूरक

| पूरक | खुराक | उद्देश्य |
|:-----|:-----|:--------|
| **आयरन** | 100 mg/दिन | एनीमिया रोकें |
| **फोलिक एसिड** | 500 μg/दिन | न्यूरल ट्यूब दोष रोकें |
| **कैल्शियम** | 1 g/दिन | हड्डी विकास |
| **TT टीका** | 2 खुराक | नवजात टेटनस रोकें |

---

## ⚠️ गर्भावस्था में खतरे के संकेत

:::danger
**तुरंत रेफर करें:**
- योनि से रक्तस्राव
- गंभीर सिरदर्द
- धुंधली दृष्टि
- गंभीर पेट दर्द
- भ्रूण गति कम
- आक्षेप
- तेज बुखार
- समय से पहले पानी रिसाव
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. न्यूनतम 4 ANC विज़िट
2. पहली विज़िट 12 सप्ताह से पहले
3. प्रतिदिन IFA टैबलेट
4. TT टीका: 2 खुराक
5. Hb <11 g/dL = एनीमिया
6. BP >140/90 = उच्च जोखिम
:::
`
  },
  {
    id: 3,
    titleEn: "Safe Delivery & Postnatal Care",
    titleHi: "सुरक्षित प्रसव और प्रसवोत्तर देखभाल",
    contentEn: `
# 👶 Safe Delivery & Postnatal Care

---

## 🏥 Safe Delivery

### Signs of Labor
- Regular painful contractions
- Show (blood-tinged mucus)
- Water breaking

### Five Cleans for Safe Delivery

:::success
**5 Cleans:**
1. Clean hands
2. Clean surface
3. Clean blade (to cut cord)
4. Clean cord tie
5. Clean cloth (to wrap baby)
:::

### Essential Newborn Care (ENBC)

| Step | Action |
|:-----|:-------|
| **Drying** | Dry baby immediately |
| **Warmth** | Keep baby warm (skin-to-skin) |
| **Cord care** | Clamp and cut with clean blade |
| **Breastfeeding** | Initiate within 1 hour |
| **Vitamin K** | Give 1 mg IM |
| **Eye care** | Apply antibiotic ointment |

---

## 🍼 Early Breastfeeding

### Key Points
- Initiate within **1 hour** of birth
- Give **colostrum** (first milk)
- **Exclusive** breastfeeding for 6 months
- No prelacteal feeds (honey, water, etc.)

---

## 🏠 Postnatal Care

### PNC Schedule

| Visit | Timing | Focus |
|:------|:-------|:------|
| **1st** | Within 24 hours | Bleeding, breastfeeding |
| **2nd** | Day 3 | Jaundice, feeding |
| **3rd** | Day 7 | Cord care, weight |
| **4th** | Week 6 | Family planning |

### Mother - Danger Signs

:::danger
**Refer If:**
- Heavy bleeding
- High fever
- Foul-smelling discharge
- Severe headache
- Convulsions
:::

### Newborn - Danger Signs

:::danger
**Refer If:**
- Not feeding well
- Convulsions
- Fast breathing (>60/min)
- Severe chest indrawing
- Fever or cold to touch
- Yellow palms/soles
- Umbilical infection
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 5 Cleans for safe delivery
2. Breastfeed within 1 hour
3. Colostrum = First milk (must give)
4. Exclusive breastfeeding for 6 months
5. 4 PNC visits
6. Watch for danger signs in mother and baby
:::
`,
    contentHi: `
# 👶 सुरक्षित प्रसव और प्रसवोत्तर देखभाल

---

## 🏥 सुरक्षित प्रसव

### प्रसव के संकेत
- नियमित दर्दनाक संकुचन
- शो (रक्त-युक्त श्लेष्मा)
- पानी टूटना

### सुरक्षित प्रसव के लिए पांच स्वच्छ

:::success
**5 स्वच्छ:**
1. साफ हाथ
2. साफ सतह
3. साफ ब्लेड (गर्भनाल काटने)
4. साफ गर्भनाल बंधन
5. साफ कपड़ा (बच्चे लपेटने)
:::

### आवश्यक नवजात देखभाल

| चरण | क्रिया |
|:----|:------|
| **सुखाना** | तुरंत सुखाएं |
| **गर्माहट** | गर्म रखें (स्किन-टू-स्किन) |
| **गर्भनाल** | साफ ब्लेड से काटें |
| **स्तनपान** | 1 घंटे में शुरू |
| **विटामिन K** | 1 mg IM |

---

## 🍼 प्रारंभिक स्तनपान

### मुख्य बिंदु
- जन्म के **1 घंटे** में शुरू
- **कोलोस्ट्रम** (पहला दूध) दें
- 6 महीने **केवल** स्तनपान
- कोई प्रीलैक्टियल फीड नहीं

---

## 🏠 प्रसवोत्तर देखभाल

### PNC अनुसूची

| विज़िट | समय | फोकस |
|:------|:----|:-----|
| **1st** | 24 घंटे में | रक्तस्राव, स्तनपान |
| **2nd** | दिन 3 | पीलिया, दूध |
| **3rd** | दिन 7 | गर्भनाल, वजन |
| **4th** | सप्ताह 6 | परिवार नियोजन |

### माता - खतरे के संकेत

:::danger
**रेफर करें:**
- भारी रक्तस्राव
- तेज बुखार
- दुर्गंधयुक्त स्राव
- गंभीर सिरदर्द
:::

### नवजात - खतरे के संकेत

:::danger
**रेफर करें:**
- ठीक से नहीं पीता
- दौरे
- तेज सांस (>60/मिनट)
- छाती धंसना
- बुखार या ठंडा
- पीली हथेलियां/तलवे
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सुरक्षित प्रसव के 5 स्वच्छ
2. 1 घंटे में स्तनपान
3. कोलोस्ट्रम = पहला दूध (जरूर दें)
4. 6 महीने केवल स्तनपान
5. 4 PNC विज़िट
:::
`
  },
  {
    id: 4,
    titleEn: "Family Planning",
    titleHi: "परिवार नियोजन",
    contentEn: `
# 💑 Family Planning

---

## 📖 What is Family Planning?

> **Family Planning** allows individuals and couples to decide the number and spacing of their children.

### Benefits
- Healthier mothers and children
- Reduced maternal/infant mortality
- Economic benefits
- Women's empowerment

---

## 💊 Contraceptive Methods

### Temporary Methods

| Method | Effectiveness | Duration |
|:-------|:-------------|:---------|
| **Condoms** | 85-98% | Per use |
| **OCPs** | 91-99% | Daily |
| **IUCD** | 99% | 5-10 years |
| **Injectables** | 97-99% | 3 months |

### Permanent Methods

| Method | For Whom |
|:-------|:---------|
| **Tubectomy** | Women (female sterilization) |
| **Vasectomy** | Men (male sterilization) |

---

## 🔷 IUCD (Copper-T)

### Types

| Type | Duration |
|:-----|:---------|
| **Cu-T 380A** | 10 years |
| **Cu-T 375** | 5 years |
| **PPIUCD** | Post-partum insertion |

### Timing of Insertion
- Interval: Any time (preferably during menses)
- Post-partum: Within 48 hours or after 6 weeks
- Post-abortion: Immediately

### Side Effects
- Increased bleeding
- Cramping
- Spotting

---

## 💉 Injectable Contraceptives

| Type | Dose | Interval |
|:-----|:-----|:---------|
| **DMPA (Antara)** | 150 mg IM | Every 3 months |

---

## 🔴 Emergency Contraception

| Method | Timing | Dose |
|:-------|:-------|:-----|
| **Levonorgestrel** | Within 72 hours | 1.5 mg single dose |
| **IUCD** | Within 5 days | Copper-T insertion |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Condom = Only method protecting against STIs
2. IUCD Cu-T 380A = 10 years effective
3. PPIUCD = Within 48 hours of delivery
4. DMPA = Every 3 months injection
5. Emergency contraception within 72 hours
6. Vasectomy is simpler than tubectomy
:::
`,
    contentHi: `
# 💑 परिवार नियोजन

---

## 📖 परिवार नियोजन क्या है?

> **परिवार नियोजन** व्यक्तियों और जोड़ों को बच्चों की संख्या और अंतराल तय करने की अनुमति देता है।

---

## 💊 गर्भनिरोधक विधियां

### अस्थायी विधियां

| विधि | प्रभावशीलता | अवधि |
|:-----|:----------|:------|
| **कंडोम** | 85-98% | प्रति उपयोग |
| **गोलियां** | 91-99% | दैनिक |
| **IUCD** | 99% | 5-10 वर्ष |
| **इंजेक्शन** | 97-99% | 3 महीने |

### स्थायी विधियां

| विधि | किसके लिए |
|:-----|:---------|
| **ट्यूबेक्टॉमी** | महिला नसबंदी |
| **वेसेक्टॉमी** | पुरुष नसबंदी |

---

## 🔷 IUCD (कॉपर-T)

### प्रकार

| प्रकार | अवधि |
|:-------|:-----|
| **Cu-T 380A** | 10 वर्ष |
| **Cu-T 375** | 5 वर्ष |
| **PPIUCD** | प्रसवोत्तर |

### प्रविष्टि का समय
- अंतराल: कभी भी (मासिक के दौरान)
- प्रसवोत्तर: 48 घंटे में या 6 सप्ताह बाद

---

## 💉 इंजेक्टेबल गर्भनिरोधक

| प्रकार | खुराक | अंतराल |
|:-------|:-----|:-------|
| **DMPA (अंतरा)** | 150 mg IM | हर 3 महीने |

---

## 🔴 आपातकालीन गर्भनिरोधक

| विधि | समय | खुराक |
|:-----|:----|:-----|
| **लेवोनोर्जेस्ट्रेल** | 72 घंटे में | 1.5 mg |
| **IUCD** | 5 दिन में | कॉपर-T |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. कंडोम = STI से बचाव करने वाली एकमात्र विधि
2. IUCD Cu-T 380A = 10 वर्ष प्रभावी
3. PPIUCD = प्रसव के 48 घंटे में
4. DMPA = हर 3 महीने इंजेक्शन
5. आपातकालीन गर्भनिरोधक 72 घंटे में
:::
`
  },
  {
    id: 5,
    titleEn: "Child Health & IMNCI",
    titleHi: "बाल स्वास्थ्य और IMNCI",
    contentEn: `
# 👶 Child Health & IMNCI

---

## 📖 IMNCI

> **IMNCI** = Integrated Management of Neonatal and Childhood Illness

### Age Groups
- **0-2 months:** Young infant
- **2 months - 5 years:** Sick child

---

## 🔴 Danger Signs (Young Infant)

:::danger
**Refer Urgently If:**
- Not feeding well
- Convulsions/history of convulsions
- Fast breathing (≥60/min)
- Severe chest indrawing
- Fever (≥38°C) or Hypothermia (<35.5°C)
- Movement only when stimulated
:::

---

## 🔴 Danger Signs (2 months - 5 years)

:::danger
**General Danger Signs:**
- Unable to drink/breastfeed
- Vomits everything
- Convulsions
- Lethargic/unconscious
:::

---

## 📊 Assessment of Sick Child

### Check for Main Symptoms:
1. **Cough/Difficulty breathing** → Pneumonia
2. **Diarrhea** → Dehydration
3. **Fever** → Malaria, other infections
4. **Ear problem** → Ear infection
5. **Malnutrition** → Assess nutritional status

---

## 🌬️ Pneumonia Classification

| Classification | Signs | Treatment |
|:---------------|:------|:----------|
| **Severe pneumonia** | Chest indrawing | Refer urgently |
| **Pneumonia** | Fast breathing | Antibiotics |
| **No pneumonia** | Only cough/cold | Home care |

### Fast Breathing Cut-offs

| Age | Fast Breathing |
|:----|:---------------|
| **0-2 months** | ≥60/min |
| **2-12 months** | ≥50/min |
| **1-5 years** | ≥40/min |

---

## 💧 Diarrhea & Dehydration

### Dehydration Assessment

| Sign | No Dehydration | Some | Severe |
|:-----|:---------------|:-----|:-------|
| **Condition** | Well | Restless | Lethargic |
| **Eyes** | Normal | Sunken | Very sunken |
| **Thirst** | Normal | Thirsty | Cannot drink |
| **Skin pinch** | Goes back quickly | Goes back slowly | Goes back very slowly |

### Treatment Plans

| Plan | Dehydration | Treatment |
|:-----|:------------|:----------|
| **Plan A** | No dehydration | ORS at home |
| **Plan B** | Some dehydration | ORS in facility |
| **Plan C** | Severe | IV fluids + refer |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. IMNCI = Integrated Management of Neonatal & Childhood Illness
2. Fast breathing: 0-2m ≥60, 2-12m ≥50, 1-5y ≥40
3. Chest indrawing = Severe pneumonia (refer)
4. Plan A/B/C for diarrhea based on dehydration
5. Always check for danger signs first
6. Skin pinch >2 seconds = severe dehydration
:::
`,
    contentHi: `
# 👶 बाल स्वास्थ्य और IMNCI

---

## 📖 IMNCI

> **IMNCI** = नवजात और बाल्यावस्था बीमारी का एकीकृत प्रबंधन

### आयु समूह
- **0-2 महीने:** युवा शिशु
- **2 महीने - 5 वर्ष:** बीमार बच्चा

---

## 🔴 खतरे के संकेत (युवा शिशु)

:::danger
**तत्काल रेफर करें:**
- ठीक से नहीं पीता
- दौरे/दौरे का इतिहास
- तेज सांस (≥60/मिनट)
- गंभीर छाती धंसना
- बुखार (≥38°C) या हाइपोथर्मिया
- केवल उत्तेजित होने पर हिलना
:::

---

## 📊 बीमार बच्चे का आकलन

### मुख्य लक्षणों की जांच:
1. **खांसी/सांस में कठिनाई** → निमोनिया
2. **दस्त** → निर्जलीकरण
3. **बुखार** → मलेरिया, अन्य संक्रमण
4. **कान की समस्या** → कान संक्रमण
5. **कुपोषण** → पोषण स्थिति

---

## 🌬️ निमोनिया वर्गीकरण

| वर्गीकरण | संकेत | उपचार |
|:---------|:------|:-------|
| **गंभीर निमोनिया** | छाती धंसना | तत्काल रेफर |
| **निमोनिया** | तेज सांस | एंटीबायोटिक्स |
| **निमोनिया नहीं** | केवल खांसी | घर पर देखभाल |

### तेज सांस कट-ऑफ

| आयु | तेज सांस |
|:----|:--------|
| **0-2 महीने** | ≥60/मिनट |
| **2-12 महीने** | ≥50/मिनट |
| **1-5 वर्ष** | ≥40/मिनट |

---

## 💧 दस्त और निर्जलीकरण

### उपचार योजनाएं

| योजना | निर्जलीकरण | उपचार |
|:------|:----------|:-------|
| **प्लान A** | नहीं | घर पर ORS |
| **प्लान B** | कुछ | सुविधा में ORS |
| **प्लान C** | गंभीर | IV तरल + रेफर |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. IMNCI = नवजात और बाल्यावस्था बीमारी प्रबंधन
2. तेज सांस: 0-2m ≥60, 2-12m ≥50, 1-5y ≥40
3. छाती धंसना = गंभीर निमोनिया (रेफर)
4. दस्त के लिए प्लान A/B/C
5. पहले खतरे के संकेत जांचें
:::
`
  },
  {
    id: 6,
    titleEn: "Infant & Child Health",
    titleHi: "शिशु और बाल स्वास्थ्य",
    contentEn: `
# 👶 Infant & Child Health

---

## 📊 Growth Monitoring

> Regular measurement to detect growth faltering early

### Growth Parameters

| Parameter | Purpose |
|:----------|:--------|
| **Weight for age** | Detect underweight |
| **Height/Length for age** | Detect stunting |
| **Weight for height** | Detect wasting |
| **MUAC** | Quick malnutrition screening |
| **Head circumference** | Brain development |

---

## 📉 Malnutrition Classification (Z-scores)

### Underweight (Weight for Age)

| Z-score | Classification |
|:--------|:---------------|
| **-1 to -2** | Mild underweight |
| **-2 to -3** | Moderate underweight |
| **Below -3** | Severe underweight |

### Stunting (Height for Age)

| Z-score | Classification |
|:--------|:---------------|
| **Below -2** | Stunted |
| **Below -3** | Severely stunted |

### Wasting (Weight for Height)

| Z-score | Classification |
|:--------|:---------------|
| **Below -2** | Wasted (MAM) |
| **Below -3** | Severely wasted (SAM) |

---

## 📏 MUAC Classification (6 months - 5 years)

| MUAC | Classification | Color Code |
|:-----|:---------------|:-----------|
| **≥13.5 cm** | Normal | 🟢 Green |
| **12.5-13.4 cm** | MAM | 🟡 Yellow |
| **<11.5 cm** | SAM | 🔴 Red |

:::danger
**MUAC <11.5 cm = SAM → Urgent referral to NRC!**
:::

---

## 💧 ORS Preparation and Use

### Low-Osmolarity ORS Composition

| Component | Amount |
|:----------|:-------|
| **Sodium chloride** | 2.6 g |
| **Glucose** | 13.5 g |
| **Potassium chloride** | 1.5 g |
| **Trisodium citrate** | 2.9 g |
| **Water** | 1 liter |

### Amount After Each Loose Stool

| Age | Amount |
|:----|:-------|
| **<2 years** | 50-100 mL |
| **2-10 years** | 100-200 mL |
| **>10 years** | As much as wanted |

---

## 💊 Zinc Supplementation

| Age | Dose | Duration |
|:----|:-----|:---------|
| **<6 months** | 10 mg/day | 14 days |
| **6 months - 5 years** | 20 mg/day | 14 days |

:::success
**Benefits of Zinc:**
- Reduces diarrhea duration
- Reduces severity
- Prevents recurrence for 2-3 months
:::

---

## 🍼 Infant & Young Child Feeding (IYCF)

### Key Recommendations

1. **Early initiation** - Within 1 hour of birth
2. **Exclusive breastfeeding** - For 6 months
3. **Complementary feeding** - From 6 months
4. **Continue breastfeeding** - Until 2 years

### Complementary Feeding Schedule

| Age | Frequency | Amount |
|:----|:----------|:-------|
| **6-8 months** | 2-3 times + snacks | Start with 2-3 tbsp |
| **9-11 months** | 3-4 times + snacks | ½ bowl (250 mL) |
| **12-23 months** | 3-4 times + snacks | ¾-1 bowl |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Growth monitoring at every contact
2. MUAC <11.5 cm = SAM (urgent referral)
3. Zinc for 14 days in ALL diarrhea cases
4. ORS within 24 hours of preparation
5. Exclusive breastfeeding for 6 months
6. Complementary feeding from 6 months
7. Continue breastfeeding until 2 years
:::
`,
    contentHi: `
# 👶 शिशु और बाल स्वास्थ्य

---

## 📊 विकास निगरानी

> विकास में गिरावट का जल्दी पता लगाने के लिए नियमित माप

### विकास पैरामीटर

| पैरामीटर | उद्देश्य |
|:---------|:---------|
| **उम्र के लिए वजन** | कम वजन का पता लगाना |
| **उम्र के लिए ऊंचाई** | बौनापन का पता लगाना |
| **ऊंचाई के लिए वजन** | क्षीणता का पता लगाना |
| **MUAC** | त्वरित कुपोषण जांच |

---

## 📉 कुपोषण वर्गीकरण (Z-स्कोर)

### कम वजन (उम्र के लिए वजन)

| Z-स्कोर | वर्गीकरण |
|:--------|:---------|
| **-1 से -2** | हल्का कम वजन |
| **-2 से -3** | मध्यम कम वजन |
| **-3 से नीचे** | गंभीर कम वजन |

### बौनापन (उम्र के लिए ऊंचाई)

| Z-स्कोर | वर्गीकरण |
|:--------|:---------|
| **-2 से नीचे** | बौना |
| **-3 से नीचे** | गंभीर बौना |

### क्षीणता (ऊंचाई के लिए वजन)

| Z-स्कोर | वर्गीकरण |
|:--------|:---------|
| **-2 से नीचे** | क्षीण (MAM) |
| **-3 से नीचे** | गंभीर क्षीण (SAM) |

---

## 📏 MUAC वर्गीकरण (6 महीने - 5 वर्ष)

| MUAC | वर्गीकरण | रंग कोड |
|:-----|:---------|:--------|
| **≥13.5 सेमी** | सामान्य | 🟢 हरा |
| **12.5-13.4 सेमी** | MAM | 🟡 पीला |
| **<11.5 सेमी** | SAM | 🔴 लाल |

:::danger
**MUAC <11.5 सेमी = SAM → NRC में तत्काल रेफरल!**
:::

---

## 💧 ORS तैयारी और उपयोग

### हर दस्त के बाद मात्रा

| आयु | मात्रा |
|:----|:-------|
| **<2 वर्ष** | 50-100 मिली |
| **2-10 वर्ष** | 100-200 मिली |
| **>10 वर्ष** | जितना चाहे |

---

## 💊 जिंक पूरक

| आयु | खुराक | अवधि |
|:----|:------|:-----|
| **<6 महीने** | 10 मिग्रा/दिन | 14 दिन |
| **6 महीने - 5 वर्ष** | 20 मिग्रा/दिन | 14 दिन |

:::success
**जिंक के लाभ:**
- दस्त की अवधि कम करता है
- गंभीरता कम करता है
- 2-3 महीने तक पुनरावृत्ति रोकता है
:::

---

## 🍼 शिशु और छोटे बच्चे का आहार (IYCF)

### मुख्य सिफारिशें

1. **जल्दी शुरुआत** - जन्म के 1 घंटे के भीतर
2. **विशेष स्तनपान** - 6 महीने तक
3. **पूरक आहार** - 6 महीने से
4. **स्तनपान जारी** - 2 वर्ष तक

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. हर संपर्क पर विकास निगरानी
2. MUAC <11.5 सेमी = SAM (तत्काल रेफरल)
3. सभी दस्त में 14 दिन जिंक
4. तैयारी के 24 घंटे के भीतर ORS
5. 6 महीने तक विशेष स्तनपान
6. 6 महीने से पूरक आहार
7. 2 वर्ष तक स्तनपान जारी
:::
`
  },
  {
    id: 7,
    titleEn: "Child Health Programs",
    titleHi: "बाल स्वास्थ्य कार्यक्रम",
    contentEn: `
# 🏥 Child Health Programs

---

## 🏠 ICDS (Integrated Child Development Services)

> **Launch:** October 2, 1975

### Target Beneficiaries
- Children 0-6 years
- Pregnant women
- Lactating mothers
- Adolescent girls (11-18 years)

---

## 📋 Six Services of ICDS

| Service | Target Group |
|:--------|:-------------|
| **Supplementary Nutrition** | Children, PW, LM |
| **Pre-school Education** | Children 3-6 years |
| **Immunization** | Children <6 years, PW |
| **Health Check-up** | All beneficiaries |
| **Referral Services** | All beneficiaries |
| **Nutrition & Health Education** | Women 15-45 years |

---

## 👩 Anganwadi Worker (AWW)

### Coverage
- **Rural:** 400-800 population
- **Urban:** 300-800 population

### Responsibilities

| Duty | Activity |
|:-----|:---------|
| **Nutrition** | Supplementary feeding, THR distribution |
| **Growth monitoring** | Monthly weighing |
| **Pre-school education** | Age-appropriate activities |
| **Home visits** | Counseling, follow-up |
| **Records** | Maintain registers |

---

## 📊 Supplementary Nutrition Norms

| Beneficiary | Calories | Protein |
|:------------|:---------|:--------|
| **Children 6m - 3y** | 500 kcal | 12-15 g |
| **Children 3-6y** | 500 kcal | 12-15 g |
| **Severely malnourished** | 800 kcal | 20-25 g |
| **Pregnant & Lactating** | 600 kcal | 18-20 g |

---

## 🔍 RBSK (Rashtriya Bal Swasthya Karyakram)

> **Launch:** February 2013
> **Target:** Children 0-18 years

### 4Ds of RBSK

| D | Screening For |
|:--|:-------------|
| **D**efects at birth | Neural tube defects, cleft lip, club foot, CHD |
| **D**eficiencies | Anemia, Vitamin A, Vitamin D, SAM |
| **D**iseases | Skin conditions, otitis media, dental caries |
| **D**evelopmental delays | Vision, hearing, motor, cognitive, language |

### RBSK Implementation

| Age Group | Location | Frequency |
|:----------|:---------|:----------|
| **0-6 weeks** | Home | 6 visits by ASHA |
| **6 weeks - 6 years** | AWC | 2 times/year |
| **6-18 years** | Schools | 1 time/year |

:::info
**Mobile Health Team:** AYUSH doctor + ANM per block
**DEIC:** District Early Intervention Center for management
:::

---

## 🏫 School Health Programme

### Components
1. Health screening
2. WIFS (Weekly IFA Supplementation)
3. Biannual deworming
4. Health education
5. Safe water and sanitation

### WIFS Schedule
- **Target:** Adolescents 10-19 years
- **Dose:** 100 mg iron + 500 mcg folic acid
- **Frequency:** Weekly (fixed day)
- **Duration:** 52 tablets/year

### Deworming
- **Drug:** Albendazole 400 mg
- **Frequency:** Twice yearly
- **Days:** February 10 & August 10 (National Deworming Day)

---

## 🏨 NRC (Nutrition Rehabilitation Centre)

### Admission Criteria
- Weight for height < -3 SD
- MUAC < 11.5 cm
- Bilateral pitting edema

### Management Phases

| Phase | Food | Purpose |
|:------|:-----|:--------|
| **Stabilization (Day 1-7)** | F-75 | Treat infections, correct deficiencies |
| **Transition** | F-75 → F-100 | Gradual shift |
| **Rehabilitation** | F-100 | Catch-up growth, 15% weight gain |

### Duration
- **Stay:** 14-21 days
- **Target:** 15% weight gain before discharge

---

## 🌟 POSHAN Abhiyaan

> **Launch:** March 8, 2018

### Targets by 2022

| Indicator | Annual Reduction |
|:----------|:-----------------|
| **Stunting** | 2% per year |
| **Undernutrition** | 2% per year |
| **Anemia** | 3% per year |
| **Low birth weight** | 2% per year |

### Four Pillars
1. Inter-sectoral convergence
2. Use of technology (ICT-CAS)
3. Behavioral change communication
4. Incentives for states/UTs

:::success
**POSHAN Maah:** September is Nutrition Awareness Month
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. ICDS provides 6 services
2. AWW is key functionary at village level
3. RBSK screens for 4Ds
4. WIFS: Weekly IFA for adolescents 10-19 years
5. Deworming: Feb 10 & Aug 10
6. NRC: F-75 (stabilization) → F-100 (rehabilitation)
7. POSHAN targets 2% annual reduction in stunting
:::
`,
    contentHi: `
# 🏥 बाल स्वास्थ्य कार्यक्रम

---

## 🏠 ICDS (एकीकृत बाल विकास सेवाएं)

> **शुरुआत:** 2 अक्टूबर, 1975

### लक्षित लाभार्थी
- 0-6 वर्ष के बच्चे
- गर्भवती महिलाएं
- स्तनपान कराने वाली माताएं
- किशोर लड़कियां (11-18 वर्ष)

---

## 📋 ICDS की छह सेवाएं

| सेवा | लक्ष्य समूह |
|:-----|:----------|
| **पूरक पोषण** | बच्चे, PW, LM |
| **पूर्व-स्कूली शिक्षा** | 3-6 वर्ष के बच्चे |
| **टीकाकरण** | <6 वर्ष के बच्चे, PW |
| **स्वास्थ्य जांच** | सभी लाभार्थी |
| **रेफरल सेवाएं** | सभी लाभार्थी |
| **पोषण और स्वास्थ्य शिक्षा** | 15-45 वर्ष की महिलाएं |

---

## 👩 आंगनवाड़ी कार्यकर्ता (AWW)

### कवरेज
- **ग्रामीण:** 400-800 जनसंख्या
- **शहरी:** 300-800 जनसंख्या

### जिम्मेदारियां
- पूरक आहार
- विकास निगरानी (मासिक वजन)
- पूर्व-स्कूली शिक्षा
- घर की विज़िट
- रिकॉर्ड रखरखाव

---

## 📊 पूरक पोषण मानक

| लाभार्थी | कैलोरी | प्रोटीन |
|:---------|:-------|:--------|
| **बच्चे 6m - 3y** | 500 kcal | 12-15 g |
| **बच्चे 3-6y** | 500 kcal | 12-15 g |
| **गंभीर कुपोषित** | 800 kcal | 20-25 g |
| **गर्भवती और स्तनपान** | 600 kcal | 18-20 g |

---

## 🔍 RBSK (राष्ट्रीय बाल स्वास्थ्य कार्यक्रम)

> **शुरुआत:** फरवरी 2013
> **लक्ष्य:** 0-18 वर्ष के बच्चे

### RBSK के 4Ds

| D | स्क्रीनिंग |
|:--|:---------|
| **D**efects जन्म दोष | न्यूरल ट्यूब दोष, कटे होंठ, क्लब फुट |
| **D**eficiencies कमियां | एनीमिया, विटामिन A, D, SAM |
| **D**iseases बीमारियां | त्वचा, ओटिटिस मीडिया, दंत क्षय |
| **D**evelopmental विकासात्मक | दृष्टि, श्रवण, मोटर, संज्ञानात्मक |

---

## 🏫 स्कूल स्वास्थ्य कार्यक्रम

### WIFS अनुसूची
- **लक्ष्य:** 10-19 वर्ष किशोर
- **खुराक:** 100 मिग्रा आयरन + 500 mcg फोलिक एसिड
- **आवृत्ति:** साप्ताहिक (निश्चित दिन)

### कृमि निवारण
- **दवा:** एल्बेंडाजोल 400 मिग्रा
- **आवृत्ति:** वर्ष में दो बार
- **दिन:** 10 फरवरी और 10 अगस्त

---

## 🏨 NRC (पोषण पुनर्वास केंद्र)

### प्रवेश मानदंड
- ऊंचाई के लिए वजन < -3 SD
- MUAC < 11.5 सेमी
- द्विपक्षीय गड्ढा एडिमा

### प्रबंधन चरण

| चरण | भोजन | उद्देश्य |
|:----|:-----|:---------|
| **स्थिरीकरण (दिन 1-7)** | F-75 | संक्रमण उपचार |
| **संक्रमण** | F-75 → F-100 | धीरे-धीरे बदलाव |
| **पुनर्वास** | F-100 | 15% वजन वृद्धि |

---

## 🌟 पोषण अभियान

> **शुरुआत:** 8 मार्च, 2018

### 2022 तक लक्ष्य

| संकेतक | वार्षिक कमी |
|:-------|:-----------|
| **बौनापन** | 2% प्रति वर्ष |
| **कुपोषण** | 2% प्रति वर्ष |
| **एनीमिया** | 3% प्रति वर्ष |
| **जन्म के समय कम वजन** | 2% प्रति वर्ष |

:::success
**पोषण माह:** सितंबर पोषण जागरूकता महीना
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. ICDS 6 सेवाएं प्रदान करता है
2. AWW गांव स्तर पर मुख्य कार्यकर्ता
3. RBSK 4Ds के लिए स्क्रीनिंग
4. WIFS: 10-19 वर्ष किशोरों के लिए साप्ताहिक IFA
5. कृमि निवारण: 10 फरवरी और 10 अगस्त
6. NRC: F-75 (स्थिरीकरण) → F-100 (पुनर्वास)
7. पोषण अभियान बौनापन में 2% वार्षिक कमी
:::
`
  },
  {
    id: 8,
    titleEn: "Family Planning",
    titleHi: "परिवार नियोजन",
    contentEn: `
# 💑 Family Planning

---

## 📖 Overview

> **Family Planning:** Practice of controlling the number and spacing of children

### Objectives
1. Reduce population growth rate
2. Reduce maternal and infant mortality
3. Improve maternal and child health
4. Allow couples to have desired family size

**Eligible Couple:** Wife in reproductive age (15-49 years)

---

## 📊 Classification of Methods

### By Reversibility

| Type | Methods |
|:-----|:--------|
| **Temporary (Spacing)** | Condoms, Pills, IUCD, Injectables |
| **Permanent (Limiting)** | Tubectomy, Vasectomy |

---

## 🛡️ Spacing Methods

### Condom (Nirodh)

| Feature | Detail |
|:--------|:-------|
| **Type** | Male barrier method |
| **Effectiveness** | 85-98% |
| **Advantage** | Protects against STIs/HIV |
| **Availability** | Free at health facilities |

### Combined Oral Contraceptives (Mala-N)

| Feature | Detail |
|:--------|:-------|
| **Composition** | Ethinyl estradiol + Levonorgestrel |
| **Pack** | 21 active + 7 placebo pills |
| **Effectiveness** | >99% with perfect use |

:::warning
**Contraindications:**
- Breastfeeding <6 weeks
- Hypertension
- Thromboembolism history
- Smokers >35 years
:::

### Centchroman (Chhaya)

| Feature | Detail |
|:--------|:-------|
| **Type** | Non-hormonal weekly pill |
| **Schedule** | Twice weekly (first 3 months), then once weekly |
| **Advantage** | Safe during breastfeeding |

### Injectable (Antara - DMPA)

| Feature | Detail |
|:--------|:-------|
| **Dose** | 150 mg IM |
| **Frequency** | Every 3 months |
| **Introduced** | 2017 in India |

### Emergency Contraceptive (ECP)

| Feature | Detail |
|:--------|:-------|
| **Composition** | Levonorgestrel 1.5 mg |
| **Timing** | Within 72 hours of unprotected sex |
| **Mechanism** | Prevents/delays ovulation |

---

## 🔘 IUCD (Intrauterine Device)

### Types in India

| Type | Duration |
|:-----|:---------|
| **CuT 380A** | 10 years |
| **Cu 375** | 5 years |
| **PPIUCD** | 10 years (post-partum) |

### PPIUCD Timing

| Type | Timing |
|:-----|:-------|
| **Post-placental** | Within 10 minutes of placenta |
| **Immediate postpartum** | Within 48 hours |
| **Post-cesarean** | During surgery |

### Follow-up
- First visit: 4-6 weeks
- Then annually
- Check strings

---

## ✂️ Permanent Methods

### Female Sterilization (Tubectomy)

| Feature | Detail |
|:--------|:-------|
| **Types** | Minilaparotomy, Laparoscopic |
| **Timing** | Interval or Post-partum (within 7 days) |
| **Effectiveness** | >99% |
| **Compensation** | Rs. 3000 (BPL, public facility) |

### Male Sterilization (Vasectomy)

| Feature | Detail |
|:--------|:-------|
| **Types** | Conventional, NSV (No-scalpel) |
| **Advantage** | Simpler, safer than tubectomy |
| **Important** | Use condom for 3 months post-procedure |
| **Compensation** | Rs. 2000 (public facility) |

:::info
**NSV is NOT immediately effective** - Condom required for 3 months or until negative semen analysis
:::

---

## 🗣️ GATHER Framework for Counseling

| Step | Action |
|:-----|:-------|
| **G** | Greet warmly |
| **A** | Ask about needs |
| **T** | Tell about options |
| **H** | Help choose |
| **E** | Explain how to use |
| **R** | Return visit scheduled |

---

## 📈 Family Planning Indicators

| Indicator | Current (NFHS-5) |
|:----------|:-----------------|
| **CPR** | 67% |
| **TFR** | 2.0 |
| **Female sterilization** | 38% |
| **Male sterilization** | 0.3% |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Condom is ONLY method protecting against STIs
2. IUCD is most cost-effective spacing method
3. PPIUCD within 48 hours of delivery
4. NSV safer than tubectomy
5. ECP within 72 hours
6. Injectable (DMPA) every 3 months
7. GATHER framework for counseling
8. India's TFR = 2.0 (at replacement level)
:::
`,
    contentHi: `
# 💑 परिवार नियोजन

---

## 📖 अवलोकन

> **परिवार नियोजन:** बच्चों की संख्या और अंतर को नियंत्रित करने का अभ्यास

### उद्देश्य
1. जनसंख्या वृद्धि दर कम करना
2. मातृ और शिशु मृत्यु दर कम करना
3. मातृ और शिशु स्वास्थ्य में सुधार
4. जोड़ों को वांछित परिवार का आकार

**पात्र दंपती:** पत्नी प्रजनन आयु में (15-49 वर्ष)

---

## 📊 विधियों का वर्गीकरण

### प्रतिवर्तनीयता के अनुसार

| प्रकार | विधियां |
|:-------|:--------|
| **अस्थायी (अंतर)** | कंडोम, गोलियां, IUCD, इंजेक्शन |
| **स्थायी (सीमित)** | ट्यूबेक्टोमी, वेसेक्टोमी |

---

## 🛡️ अंतर विधियां

### कंडोम (निरोध)

| विशेषता | विवरण |
|:--------|:-------|
| **प्रकार** | पुरुष बाधा विधि |
| **प्रभावशीलता** | 85-98% |
| **लाभ** | STIs/HIV से सुरक्षा |
| **उपलब्धता** | स्वास्थ्य सुविधाओं में मुफ्त |

### संयुक्त मौखिक गर्भनिरोधक (माला-एन)

| विशेषता | विवरण |
|:--------|:-------|
| **संरचना** | एथिनाइल एस्ट्राडियोल + लेवोनोर्जेस्ट्रेल |
| **पैक** | 21 सक्रिय + 7 प्लेसबो गोलियां |
| **प्रभावशीलता** | सही उपयोग के साथ >99% |

### सेंटक्रोमन (छाया)

| विशेषता | विवरण |
|:--------|:-------|
| **प्रकार** | गैर-हार्मोनल साप्ताहिक गोली |
| **अनुसूची** | सप्ताह में दो बार (पहले 3 महीने), फिर सप्ताह में एक बार |
| **लाभ** | स्तनपान के दौरान सुरक्षित |

### इंजेक्शन (अंतरा - DMPA)

| विशेषता | विवरण |
|:--------|:-------|
| **खुराक** | 150 मिग्रा IM |
| **आवृत्ति** | हर 3 महीने |

### आपातकालीन गर्भनिरोधक (ECP)

| विशेषता | विवरण |
|:--------|:-------|
| **संरचना** | लेवोनोर्जेस्ट्रेल 1.5 मिग्रा |
| **समय** | असुरक्षित संभोग के 72 घंटे के भीतर |

---

## 🔘 IUCD (अंतर्गर्भाशयी उपकरण)

### भारत में प्रकार

| प्रकार | अवधि |
|:-------|:------|
| **CuT 380A** | 10 वर्ष |
| **Cu 375** | 5 वर्ष |
| **PPIUCD** | 10 वर्ष (प्रसवोत्तर) |

### PPIUCD समय

| प्रकार | समय |
|:-------|:-----|
| **पोस्ट-प्लेसेंटल** | प्लेसेंटा के 10 मिनट के भीतर |
| **तत्काल प्रसवोत्तर** | 48 घंटे के भीतर |
| **पोस्ट-सिजेरियन** | सर्जरी के दौरान |

---

## ✂️ स्थायी विधियां

### महिला नसबंदी (ट्यूबेक्टोमी)

| विशेषता | विवरण |
|:--------|:-------|
| **प्रकार** | मिनीलैपरोटॉमी, लैप्रोस्कोपिक |
| **प्रभावशीलता** | >99% |
| **मुआवजा** | रु. 3000 (BPL, सरकारी सुविधा) |

### पुरुष नसबंदी (वेसेक्टोमी)

| विशेषता | विवरण |
|:--------|:-------|
| **प्रकार** | पारंपरिक, NSV (नो-स्केलपेल) |
| **लाभ** | ट्यूबेक्टोमी से सरल, सुरक्षित |
| **महत्वपूर्ण** | प्रक्रिया के बाद 3 महीने कंडोम |
| **मुआवजा** | रु. 2000 (सरकारी सुविधा) |

---

## 🗣️ परामर्श के लिए GATHER फ्रेमवर्क

| चरण | कार्रवाई |
|:-----|:--------|
| **G** | गर्मजोशी से अभिवादन |
| **A** | जरूरतों के बारे में पूछें |
| **T** | विकल्पों के बारे में बताएं |
| **H** | चुनने में मदद करें |
| **E** | उपयोग करना समझाएं |
| **R** | वापसी विज़िट निर्धारित |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. कंडोम STIs से बचाने वाली एकमात्र विधि
2. IUCD सबसे किफायती अंतर विधि
3. PPIUCD प्रसव के 48 घंटे के भीतर
4. NSV ट्यूबेक्टोमी से सुरक्षित
5. ECP 72 घंटे के भीतर
6. इंजेक्शन (DMPA) हर 3 महीने
7. परामर्श के लिए GATHER फ्रेमवर्क
8. भारत का TFR = 2.0 (प्रतिस्थापन स्तर पर)
:::
`
  },
  {
    id: 9,
    titleEn: "Adolescent Health",
    titleHi: "किशोर स्वास्थ्य",
    contentEn: `
# 👦👧 Adolescent Health

---

## 📖 Understanding Adolescence

> **Adolescence:** Age 10-19 years (WHO)

### Phases

| Phase | Age |
|:------|:----|
| **Early adolescence** | 10-14 years |
| **Late adolescence** | 15-19 years |

:::info
**Adolescents = 22% of India's population**
Critical period for health behaviors
:::

---

## ⚠️ Adolescent Health Issues

### Physical Health
- Nutritional anemia
- Undernutrition/obesity
- Menstrual problems
- Skin problems (acne)
- Injuries and accidents

### Mental Health
- Depression and anxiety
- Substance abuse
- Eating disorders
- Academic stress
- Suicide

### Reproductive Health
- Early marriage and pregnancy
- STIs/RTIs
- Sexual abuse
- Contraceptive needs

### Behavioral Issues
- Tobacco use
- Alcohol use
- Drug abuse
- Violence
- Risky sexual behavior

---

## 🏥 RKSK (Rashtriya Kishor Swasthya Karyakram)

> **Launch:** January 2014
> **Target:** Adolescents 10-19 years

### Six Strategic Priorities

| Priority | Focus Areas |
|:---------|:-----------|
| **1. Nutrition** | Anemia prevention, WIFS, counseling |
| **2. SRH** | Menstrual hygiene, contraception, RTI/STI |
| **3. Mental Health** | Life skills, counseling, peer education |
| **4. Injuries & Violence** | Road safety, violence prevention |
| **5. Substance Misuse** | Prevention, intervention, referral |
| **6. NCDs** | Physical activity, diet, tobacco prevention |

---

## 🏪 Adolescent Friendly Health Clinic (AFHC)

### Characteristics

| Feature | Description |
|:--------|:------------|
| **Accessible** | Convenient location, timing |
| **Acceptable** | Private, confidential |
| **Appropriate** | Age-suitable services |
| **Effective** | Trained providers |
| **Equitable** | For all adolescents |

### Services
- Growth monitoring
- Anemia management
- Menstrual health
- RTI/STI management
- Contraception
- Mental health counseling
- Substance abuse counseling

---

## 🌸 Menstrual Hygiene

### Menstrual Hygiene Scheme
- Provision of sanitary napkins
- MHM education
- Disposal facilities in schools

:::success
**Menstrual Hygiene Day:** May 28
:::

---

## 🧠 10 Core Life Skills (WHO)

| # | Life Skill |
|:--|:-----------|
| 1 | Self-awareness |
| 2 | Empathy |
| 3 | Critical thinking |
| 4 | Creative thinking |
| 5 | Decision making |
| 6 | Problem solving |
| 7 | Effective communication |
| 8 | Interpersonal relationships |
| 9 | Coping with stress |
| 10 | Coping with emotions |

---

## 💊 WIFS for Adolescents

| Feature | Detail |
|:--------|:-------|
| **Target** | Adolescents 10-19 years |
| **Dose** | 100 mg iron + 500 mcg folic acid |
| **Frequency** | Weekly (fixed day) |
| **Tablets/year** | 52 tablets |
| **Setting** | Schools, AWCs |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Adolescence: 10-19 years
2. 22% of India's population are adolescents
3. RKSK has 6 strategic priorities
4. AFHC: Accessible, Acceptable, Appropriate
5. Menstrual Hygiene Day: May 28
6. WHO defines 10 core life skills
7. WIFS: Weekly IFA for 10-19 years
8. Life skills education is key component
:::
`,
    contentHi: `
# 👦👧 किशोर स्वास्थ्य

---

## 📖 किशोरावस्था को समझना

> **किशोरावस्था:** 10-19 वर्ष की आयु (WHO)

### चरण

| चरण | आयु |
|:----|:----|
| **प्रारंभिक किशोरावस्था** | 10-14 वर्ष |
| **देर से किशोरावस्था** | 15-19 वर्ष |

:::info
**किशोर = भारत की जनसंख्या का 22%**
स्वास्थ्य व्यवहारों के लिए महत्वपूर्ण अवधि
:::

---

## ⚠️ किशोर स्वास्थ्य मुद्दे

### शारीरिक स्वास्थ्य
- पोषक एनीमिया
- कुपोषण/मोटापा
- मासिक धर्म की समस्याएं
- त्वचा की समस्याएं (मुंहासे)
- चोट और दुर्घटनाएं

### मानसिक स्वास्थ्य
- अवसाद और चिंता
- पदार्थ दुरुपयोग
- खाने के विकार
- शैक्षणिक तनाव
- आत्महत्या

### प्रजनन स्वास्थ्य
- शादी और गर्भावस्था जल्दी
- STIs/RTIs
- यौन शोषण
- गर्भनिरोधक जरूरतें

---

## 🏥 RKSK (राष्ट्रीय किशोर स्वास्थ्य कार्यक्रम)

> **शुरुआत:** जनवरी 2014
> **लक्ष्य:** 10-19 वर्ष के किशोर

### छह रणनीतिक प्राथमिकताएं

| प्राथमिकता | फोकस क्षेत्र |
|:----------|:----------|
| **1. पोषण** | एनीमिया रोकथाम, WIFS, परामर्श |
| **2. SRH** | मासिक स्वच्छता, गर्भनिरोधक, RTI/STI |
| **3. मानसिक स्वास्थ्य** | जीवन कौशल, परामर्श, सहकर्मी शिक्षा |
| **4. चोट और हिंसा** | सड़क सुरक्षा, हिंसा रोकथाम |
| **5. पदार्थ दुरुपयोग** | रोकथाम, हस्तक्षेप, रेफरल |
| **6. NCDs** | शारीरिक गतिविधि, आहार, तंबाकू रोकथाम |

---

## 🏪 किशोर अनुकूल स्वास्थ्य क्लिनिक (AFHC)

### विशेषताएं

| विशेषता | विवरण |
|:--------|:-------|
| **सुलभ** | सुविधाजनक स्थान, समय |
| **स्वीकार्य** | निजी, गोपनीय |
| **उचित** | आयु-उपयुक्त सेवाएं |
| **प्रभावी** | प्रशिक्षित प्रदाता |
| **समान** | सभी किशोरों के लिए |

### सेवाएं
- विकास निगरानी
- एनीमिया प्रबंधन
- मासिक स्वास्थ्य
- RTI/STI प्रबंधन
- गर्भनिरोधक
- मानसिक स्वास्थ्य परामर्श

---

## 🌸 मासिक स्वच्छता

### मासिक स्वच्छता योजना
- सैनिटरी नैपकिन का प्रावधान
- MHM शिक्षा
- स्कूलों में निपटान सुविधाएं

:::success
**मासिक स्वच्छता दिवस:** 28 मई
:::

---

## 🧠 10 मूल जीवन कौशल (WHO)

| # | जीवन कौशल |
|:--|:---------|
| 1 | आत्म-जागरूकता |
| 2 | सहानुभूति |
| 3 | आलोचनात्मक सोच |
| 4 | रचनात्मक सोच |
| 5 | निर्णय लेना |
| 6 | समस्या समाधान |
| 7 | प्रभावी संचार |
| 8 | पारस्परिक संबंध |
| 9 | तनाव से निपटना |
| 10 | भावनाओं से निपटना |

---

## 💊 किशोरों के लिए WIFS

| विशेषता | विवरण |
|:--------|:-------|
| **लक्ष्य** | 10-19 वर्ष किशोर |
| **खुराक** | 100 मिग्रा आयरन + 500 mcg फोलिक एसिड |
| **आवृत्ति** | साप्ताहिक (निश्चित दिन) |
| **टैबलेट/वर्ष** | 52 टैबलेट |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. किशोरावस्था: 10-19 वर्ष
2. भारत की जनसंख्या का 22% किशोर
3. RKSK में 6 रणनीतिक प्राथमिकताएं
4. AFHC: सुलभ, स्वीकार्य, उचित
5. मासिक स्वच्छता दिवस: 28 मई
6. WHO 10 मूल जीवन कौशल परिभाषित करता है
7. WIFS: 10-19 वर्ष के लिए साप्ताहिक IFA
8. जीवन कौशल शिक्षा महत्वपूर्ण घटक
:::
`
  },
  {
    id: 10,
    titleEn: "RMNCH+A Strategy",
    titleHi: "RMNCH+A रणनीति",
    contentEn: `
# 🎯 RMNCH+A Strategy

---

## 📖 Understanding RMNCH+A

> **Full Form:** Reproductive, Maternal, Newborn, Child and Adolescent Health
> **Launch:** 2013

---

## 🔄 Continuum of Care Approach

### Life Course

\`\`\`
Adolescence → Pre-conception → Pregnancy → Birth → Postnatal → Infancy → Childhood
\`\`\`

### Place of Care

\`\`\`
Home → Community → Health Facility
\`\`\`

---

## 📊 Key Interventions by Life Stage

| Stage | Key Interventions |
|:------|:------------------|
| **Adolescent** | Nutrition, ARSH, Life skills |
| **Pre-conception** | Folic acid, anemia treatment |
| **Antenatal** | 4+ ANC, TT, IFA, birth preparedness |
| **Delivery** | Skilled birth attendance, AMTSL |
| **Postnatal** | HBNC, breastfeeding, PNC visits |
| **Newborn** | Essential newborn care, immunization |
| **Infant** | IYCF, immunization, growth monitoring |
| **Child** | IMNCI, nutrition, immunization |

---

## 📈 MCH Indicators

### Maternal Health Indicators

| Indicator | Current (2020) | SDG Target |
|:----------|:---------------|:-----------|
| **MMR** | 97/100,000 | <70 |
| **Institutional delivery** | 89% | >95% |
| **Skilled birth attendance** | 89% | >95% |
| **ANC (4+ visits)** | 58% | >90% |
| **C-section rate** | 21% | 10-15% |

### Child Health Indicators

| Indicator | Current (NFHS-5) | SDG Target |
|:----------|:-----------------|:-----------|
| **IMR** | 35/1000 | <25 |
| **NMR** | 25/1000 | <12 |
| **U5MR** | 42/1000 | <25 |
| **Stunting** | 36% | <20% |
| **Wasting** | 19% | <5% |
| **Underweight** | 32% | - |
| **Full immunization** | 76% | >90% |

### Fertility Indicators

| Indicator | Current | Target |
|:----------|:--------|:-------|
| **TFR** | 2.0 | 2.1 (replacement) |
| **CPR** | 67% | >75% |
| **Unmet need** | 9% | <5% |

---

## 🗺️ High Focus Areas

### High Focus States (8)
1. Bihar
2. Jharkhand
3. Madhya Pradesh
4. Chhattisgarh
5. Odisha
6. Rajasthan
7. Uttar Pradesh
8. Uttarakhand

:::info
**Criteria:** States with poor MCH indicators
:::

---

## 👩‍⚕️ Role of MPHW in MCH

### Registration & Tracking
- Register all pregnancies
- Maintain eligible couple register
- Update MCTS (Mother and Child Tracking System)
- Follow-up on dropouts

### Service Delivery
- Antenatal checkups
- Postnatal home visits
- Immunization services
- Growth monitoring
- Family planning services

### Identification & Referral
- High-risk pregnancies
- Sick newborns
- Malnourished children
- Complications

### Health Education
- Birth preparedness
- Danger signs
- Breastfeeding
- Complementary feeding
- Family planning

### Coordination
- With ASHA
- With AWW
- With Medical Officers
- With other departments

### Recording & Reporting
- Maintain records
- Submit reports on time
- Participate in review meetings

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. RMNCH+A covers adolescent to childhood
2. Continuum of care: home → community → facility
3. MMR target: <70 per 100,000 (SDG)
4. NMR target: <12 per 1000 (SDG)
5. India's TFR = 2.0 (at replacement level)
6. 8 high focus states identified
7. MPHW is key link in MCH service delivery
8. MCTS for tracking mother and child
:::
`,
    contentHi: `
# 🎯 RMNCH+A रणनीति

---

## 📖 RMNCH+A को समझना

> **पूर्ण रूप:** प्रजनन, मातृ, नवजात, बाल और किशोर स्वास्थ्य
> **शुरुआत:** 2013

---

## 🔄 देखभाल की निरंतरता दृष्टिकोण

### जीवन पाठ्यक्रम

\`\`\`
किशोरावस्था → गर्भधारण पूर्व → गर्भावस्था → जन्म → प्रसवोत्तर → शैशवावस्था → बचपन
\`\`\`

### देखभाल का स्थान

\`\`\`
घर → समुदाय → स्वास्थ्य सुविधा
\`\`\`

---

## 📊 जीवन चरण के अनुसार मुख्य हस्तक्षेप

| चरण | मुख्य हस्तक्षेप |
|:----|:--------------|
| **किशोर** | पोषण, ARSH, जीवन कौशल |
| **गर्भधारण पूर्व** | फोलिक एसिड, एनीमिया उपचार |
| **प्रसवपूर्व** | 4+ ANC, TT, IFA, जन्म तैयारी |
| **प्रसव** | कुशल प्रसव सहायता, AMTSL |
| **प्रसवोत्तर** | HBNC, स्तनपान, PNC विज़िट |
| **नवजात** | आवश्यक नवजात देखभाल, टीकाकरण |
| **शिशु** | IYCF, टीकाकरण, विकास निगरानी |
| **बच्चा** | IMNCI, पोषण, टीकाकरण |

---

## 📈 MCH संकेतक

### मातृ स्वास्थ्य संकेतक

| संकेतक | वर्तमान (2020) | SDG लक्ष्य |
|:-------|:--------------|:----------|
| **MMR** | 97/100,000 | <70 |
| **संस्थागत प्रसव** | 89% | >95% |
| **कुशल प्रसव सहायता** | 89% | >95% |
| **ANC (4+ विज़िट)** | 58% | >90% |

### बाल स्वास्थ्य संकेतक

| संकेतक | वर्तमान (NFHS-5) | SDG लक्ष्य |
|:-------|:----------------|:----------|
| **IMR** | 35/1000 | <25 |
| **NMR** | 25/1000 | <12 |
| **U5MR** | 42/1000 | <25 |
| **बौनापन** | 36% | <20% |
| **क्षीणता** | 19% | <5% |
| **कम वजन** | 32% | - |
| **पूर्ण टीकाकरण** | 76% | >90% |

### प्रजनन संकेतक

| संकेतक | वर्तमान | लक्ष्य |
|:-------|:--------|:------|
| **TFR** | 2.0 | 2.1 (प्रतिस्थापन) |
| **CPR** | 67% | >75% |
| **अधूरी जरूरत** | 9% | <5% |

---

## 🗺️ उच्च फोकस क्षेत्र

### उच्च फोकस राज्य (8)
1. बिहार
2. झारखंड
3. मध्य प्रदेश
4. छत्तीसगढ़
5. ओडिशा
6. राजस्थान
7. उत्तर प्रदेश
8. उत्तराखंड

---

## 👩‍⚕️ MCH में MPHW की भूमिका

### पंजीकरण और ट्रैकिंग
- सभी गर्भधारण पंजीकृत करें
- पात्र दंपती रजिस्टर बनाए रखें
- MCTS (माता और बाल ट्रैकिंग प्रणाली) अपडेट करें
- ड्रॉपआउट का फॉलो-अप

### सेवा वितरण
- प्रसवपूर्व जांच
- प्रसवोत्तर घर विज़िट
- टीकाकरण सेवाएं
- विकास निगरानी
- परिवार नियोजन सेवाएं

### पहचान और रेफरल
- उच्च जोखिम गर्भधारण
- बीमार नवजात
- कुपोषित बच्चे
- जटिलताएं

### स्वास्थ्य शिक्षा
- जन्म तैयारी
- खतरे के संकेत
- स्तनपान
- पूरक आहार
- परिवार नियोजन

### समन्वय
- आशा के साथ
- AWW के साथ
- चिकित्सा अधिकारियों के साथ
- अन्य विभागों के साथ

### रिकॉर्डिंग और रिपोर्टिंग
- रिकॉर्ड बनाए रखें
- समय पर रिपोर्ट जमा करें
- समीक्षा बैठकों में भाग लें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. RMNCH+A किशोर से बचपन तक कवर
2. देखभाल की निरंतरता: घर → समुदाय → सुविधा
3. MMR लक्ष्य: <70 प्रति 100,000 (SDG)
4. NMR लक्ष्य: <12 प्रति 1000 (SDG)
5. भारत का TFR = 2.0 (प्रतिस्थापन स्तर पर)
6. 8 उच्च फोकस राज्य पहचाने गए
7. MPHW MCH सेवा वितरण में महत्वपूर्ण कड़ी
8. माता और बच्चे की ट्रैकिंग के लिए MCTS
:::
`
  },
  {
    id: 11,
    titleEn: "Adolescent Health (RKSK)",
    titleHi: "किशोर स्वास्थ्य (RKSK)",
    contentEn: `
# 👧 Adolescent Health (RKSK)

## 📖 Overview

:::info
**RKSK = Rashtriya Kishor Swasthya Karyakram**
- Launched: 2014
- Target: 10-19 years (243 million adolescents)
:::

---

## 🎯 Six Priority Areas

| Area | Key Issues |
|:-----|:-----------|
| 1. **Nutrition** | Anemia, undernutrition |
| 2. **Sexual & Reproductive Health** | Menstrual hygiene, early pregnancy |
| 3. **Mental Health** | Depression, anxiety, stress |
| 4. **Injuries & Violence** | Accidents, abuse |
| 5. **Substance Misuse** | Tobacco, alcohol, drugs |
| 6. **NCDs** | Obesity, diabetes risk |

---

## 🏥 Service Delivery Platforms

| Platform | Description |
|:---------|:------------|
| **AFHC** | Adolescent Friendly Health Clinics at facilities |
| **Community** | Peer educators, outreach |
| **School** | School health programs |

### AFHC Characteristics
- Non-judgmental attitude
- Privacy and confidentiality
- Convenient timings
- Free services
- Trained providers

---

## 💊 Weekly IFA Supplementation

| Group | Dosage | Frequency |
|:------|:-------|:----------|
| 10-19 years | 60 mg Iron + 500 mcg Folic Acid | Weekly (52 weeks/year) |

### WIFS Days
- Schools: Usually Wednesday
- Out-of-school: Through Anganwadi/health facility

---

## 🩸 Menstrual Hygiene

### Key Messages
- Menstruation is normal and healthy
- Change pad/cloth every 4-6 hours
- Wash properly, dry in sunlight
- Dispose safely (wrap and bin)
- Track cycle

### Scheme: Menstrual Hygiene Scheme (MHS)
- Free sanitary napkins to adolescent girls
- Through schools and ASHA

---

## 🧠 Adolescent Mental Health

### Common Issues
- Academic stress
- Peer pressure
- Identity issues
- Family conflicts
- Body image concerns

### Warning Signs
- Withdrawal from friends/activities
- Changes in sleep/appetite
- Declining academic performance
- Self-harm thoughts/behaviors
- Substance use

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. RKSK: 6 priority areas for 10-19 years
2. AFHC = Adolescent Friendly Health Clinic
3. Weekly IFA: 60 mg Iron + 500 mcg FA
4. MHS provides free sanitary napkins
5. Mental health is priority area
6. Peer education is key strategy
7. Non-judgmental approach essential
:::
`,
    contentHi: `
# 👧 किशोर स्वास्थ्य (RKSK)

## 📖 अवलोकन

:::info
**RKSK = राष्ट्रीय किशोर स्वास्थ्य कार्यक्रम**
- शुरुआत: 2014
- लक्ष्य: 10-19 वर्ष (243 मिलियन किशोर)
:::

---

## 🎯 छह प्राथमिकता क्षेत्र

| क्षेत्र | मुख्य मुद्दे |
|:-------|:----------|
| 1. **पोषण** | एनीमिया, कुपोषण |
| 2. **यौन और प्रजनन स्वास्थ्य** | मासिक धर्म स्वच्छता, प्रारंभिक गर्भावस्था |
| 3. **मानसिक स्वास्थ्य** | अवसाद, चिंता, तनाव |
| 4. **चोट और हिंसा** | दुर्घटनाएं, दुर्व्यवहार |
| 5. **मादक पदार्थ दुरुपयोग** | तंबाकू, शराब, ड्रग्स |
| 6. **NCDs** | मोटापा, मधुमेह जोखिम |

---

## 🏥 सेवा वितरण प्लेटफॉर्म

| प्लेटफॉर्म | विवरण |
|:----------|:------|
| **AFHC** | सुविधाओं पर किशोर मित्र स्वास्थ्य क्लिनिक |
| **समुदाय** | साथी शिक्षक, आउटरीच |
| **स्कूल** | स्कूल स्वास्थ्य कार्यक्रम |

### AFHC विशेषताएं
- गैर-न्यायिक रवैया
- गोपनीयता
- सुविधाजनक समय
- मुफ्त सेवाएं
- प्रशिक्षित प्रदाता

---

## 💊 साप्ताहिक IFA पूरकता

| समूह | खुराक | आवृत्ति |
|:-----|:------|:--------|
| 10-19 वर्ष | 60 mg आयरन + 500 mcg फोलिक एसिड | साप्ताहिक (52 सप्ताह/वर्ष) |

### WIFS दिन
- स्कूल: आमतौर पर बुधवार
- स्कूल से बाहर: आंगनवाड़ी/स्वास्थ्य सुविधा के माध्यम से

---

## 🩸 मासिक धर्म स्वच्छता

### मुख्य संदेश
- मासिक धर्म सामान्य और स्वस्थ है
- हर 4-6 घंटे में पैड/कपड़ा बदलें
- ठीक से धोएं, धूप में सुखाएं
- सुरक्षित निपटान (लपेटें और डिब्बे में)
- चक्र ट्रैक करें

### योजना: मासिक धर्म स्वच्छता योजना (MHS)
- किशोरियों को मुफ्त सैनिटरी नैपकिन
- स्कूलों और आशा के माध्यम से

---

## 🧠 किशोर मानसिक स्वास्थ्य

### सामान्य समस्याएं
- शैक्षिक तनाव
- साथियों का दबाव
- पहचान के मुद्दे
- पारिवारिक संघर्ष
- शरीर छवि चिंताएं

### चेतावनी संकेत
- दोस्तों/गतिविधियों से पीछे हटना
- नींद/भूख में बदलाव
- शैक्षिक प्रदर्शन में गिरावट
- आत्म-नुकसान विचार/व्यवहार
- मादक पदार्थ उपयोग

---

## 🎯 त्वरित संशोधन

:::tip
**याद रखें:**
1. RKSK: 10-19 वर्ष के लिए 6 प्राथमिकता क्षेत्र
2. AFHC = किशोर मित्र स्वास्थ्य क्लिनिक
3. साप्ताहिक IFA: 60 mg आयरन + 500 mcg FA
4. MHS मुफ्त सैनिटरी नैपकिन प्रदान करता है
5. मानसिक स्वास्थ्य प्राथमिकता क्षेत्र है
6. साथी शिक्षा प्रमुख रणनीति
7. गैर-न्यायिक दृष्टिकोण आवश्यक
:::
`
  },
  {
    id: 12,
    titleEn: "Safe Motherhood & JSY",
    titleHi: "सुरक्षित मातृत्व और JSY",
    contentEn: `
# 🤰 Safe Motherhood & JSY

## 📖 Safe Motherhood Initiative

:::info
**Goal:** Every woman receives care during pregnancy, childbirth, and postpartum to prevent maternal deaths.
:::

### Four Pillars

| Pillar | Description |
|:-------|:------------|
| 1. **Family Planning** | Prevent unwanted pregnancies |
| 2. **Antenatal Care** | Detect and manage complications |
| 3. **Clean & Safe Delivery** | Skilled attendance at birth |
| 4. **Essential Obstetric Care** | EmOC for complications |

---

## 💰 JSY (Janani Suraksha Yojana)

### Objectives
- Reduce maternal and neonatal mortality
- Promote institutional delivery

### Cash Incentives

| Category | Rural | Urban |
|:---------|:------|:------|
| **LPS States** (Low Performing) | Rs. 1400 | Rs. 1000 |
| **HPS States** (High Performing) | Rs. 700 | Rs. 600 |

### LPS States
- UP, Uttarakhand, Bihar, Jharkhand, MP, Chhattisgarh, Assam, Rajasthan, Odisha, J&K

### Eligibility
- All pregnant women in government/accredited facilities
- All women in LPS states
- BPL/SC/ST women in HPS states

### ASHA Incentive
- Rs. 600 in rural areas for facilitating institutional delivery

---

## 🏥 JSSK (Janani Shishu Suraksha Karyakram)

### Entitlements (Cashless)

| For Mother | For Sick Newborn |
|:-----------|:-----------------|
| Free delivery | Free treatment up to 30 days |
| Free C-section | Free drugs and consumables |
| Free drugs | Free diagnostics |
| Free diagnostics | Free blood |
| Free blood | Free transport |
| Free diet | Free diet for mother |
| Free transport | |

---

## 🚑 Referral Transport

### 102/108 Ambulance
- Free transport for pregnant women
- Available 24x7
- For delivery and complications

### PMSMA (Pradhan Mantri Surakshit Matritva Abhiyan)
- 9th of every month
- Free ANC checkup
- USG for high-risk pregnancies

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 4 pillars: FP, ANC, Safe Delivery, EmOC
2. JSY: Cash incentive for institutional delivery
3. LPS states get higher incentive (Rs. 1400 rural)
4. JSSK: Completely cashless services
5. ASHA gets Rs. 600 for facilitating delivery
6. PMSMA: 9th of every month
7. 102/108 = Free ambulance service
:::
`,
    contentHi: `
# 🤰 सुरक्षित मातृत्व और JSY

## 📖 सुरक्षित मातृत्व पहल

:::info
**लक्ष्य:** हर महिला को मातृ मृत्यु रोकने के लिए गर्भावस्था, प्रसव और प्रसवोत्तर के दौरान देखभाल मिले।
:::

### चार स्तंभ

| स्तंभ | विवरण |
|:------|:------|
| 1. **परिवार नियोजन** | अवांछित गर्भधारण रोकें |
| 2. **प्रसवपूर्व देखभाल** | जटिलताओं का पता लगाना और प्रबंधन |
| 3. **स्वच्छ और सुरक्षित प्रसव** | जन्म पर कुशल उपस्थिति |
| 4. **आवश्यक प्रसूति देखभाल** | जटिलताओं के लिए EmOC |

---

## 💰 JSY (जननी सुरक्षा योजना)

### उद्देश्य
- मातृ और नवजात मृत्यु दर कम करना
- संस्थागत प्रसव को बढ़ावा देना

### नकद प्रोत्साहन

| श्रेणी | ग्रामीण | शहरी |
|:-------|:-------|:-----|
| **LPS राज्य** (निम्न प्रदर्शन) | रु. 1400 | रु. 1000 |
| **HPS राज्य** (उच्च प्रदर्शन) | रु. 700 | रु. 600 |

### LPS राज्य
- UP, उत्तराखंड, बिहार, झारखंड, MP, छत्तीसगढ़, असम, राजस्थान, ओडिशा, J&K

### पात्रता
- सरकारी/मान्यता प्राप्त सुविधाओं में सभी गर्भवती महिलाएं
- LPS राज्यों में सभी महिलाएं
- HPS राज्यों में BPL/SC/ST महिलाएं

### आशा प्रोत्साहन
- ग्रामीण क्षेत्रों में संस्थागत प्रसव सुविधा के लिए रु. 600

---

## 🏥 JSSK (जननी शिशु सुरक्षा कार्यक्रम)

### हकदारी (कैशलेस)

| माता के लिए | बीमार नवजात के लिए |
|:------------|:------------------|
| मुफ्त प्रसव | 30 दिनों तक मुफ्त उपचार |
| मुफ्त सी-सेक्शन | मुफ्त दवाएं और उपभोग्य |
| मुफ्त दवाएं | मुफ्त निदान |
| मुफ्त निदान | मुफ्त रक्त |
| मुफ्त रक्त | मुफ्त परिवहन |
| मुफ्त आहार | माता के लिए मुफ्त आहार |
| मुफ्त परिवहन | |

---

## 🚑 रेफरल परिवहन

### 102/108 एम्बुलेंस
- गर्भवती महिलाओं के लिए मुफ्त परिवहन
- 24x7 उपलब्ध
- प्रसव और जटिलताओं के लिए

### PMSMA (प्रधान मंत्री सुरक्षित मातृत्व अभियान)
- हर महीने की 9 तारीख
- मुफ्त ANC जांच
- उच्च जोखिम गर्भधारण के लिए USG

---

## 🎯 त्वरित संशोधन

:::tip
**याद रखें:**
1. 4 स्तंभ: FP, ANC, सुरक्षित प्रसव, EmOC
2. JSY: संस्थागत प्रसव के लिए नकद प्रोत्साहन
3. LPS राज्यों को अधिक प्रोत्साहन (रु. 1400 ग्रामीण)
4. JSSK: पूर्णतः कैशलेस सेवाएं
5. आशा को प्रसव सुविधा के लिए रु. 600
6. PMSMA: हर महीने की 9 तारीख
7. 102/108 = मुफ्त एम्बुलेंस सेवा
:::
`
  }
];
