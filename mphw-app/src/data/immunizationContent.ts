export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const immunizationLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Principles of Immunization",
    titleHi: "टीकाकरण के सिद्धांत",
    contentEn: `
# 💉 Principles of Immunization

---

## 📖 Key Definitions

| Term | Definition |
|:-----|:-----------|
| **Immunity** | Body's ability to fight infections |
| **Immunization** | Process of making immune |
| **Vaccination** | Administration of vaccine |
| **Vaccine** | Biological preparation for immunity |
| **Antigen** | Foreign substance triggering immune response |
| **Antibody** | Protein produced to fight antigen |

---

## 🔄 Types of Immunity

### Active Immunity
> Body produces its **own antibodies**

| Type | Source | Duration |
|:-----|:-------|:---------|
| **Natural** | Getting disease | Long-lasting |
| **Artificial** | Vaccination | Long-lasting |

### Passive Immunity
> Body receives **ready-made antibodies**

| Type | Source | Duration |
|:-----|:-------|:---------|
| **Natural** | Mother to baby | Short (6 months) |
| **Artificial** | Immunoglobulin injection | Short (weeks) |

---

## 🛡️ Herd Immunity

> When enough people are vaccinated, disease spread is reduced even for unvaccinated.

:::info
**Herd immunity threshold:**
- Measles: 95%
- Polio: 80-85%
- Diphtheria: 85%
:::

---

## 💉 Types of Vaccines

| Type | Description | Examples |
|:-----|:------------|:---------|
| **Live attenuated** | Weakened pathogen | BCG, OPV, Measles |
| **Killed/Inactivated** | Dead pathogen | IPV, Hepatitis A |
| **Toxoid** | Inactivated toxin | DPT (D & T) |
| **Subunit** | Part of pathogen | Hepatitis B |

---

## ❄️ Cold Chain

> Temperature-controlled supply chain for vaccines.

### Temperature Requirements

| Temperature | Vaccines |
|:------------|:---------|
| **-15 to -25°C** | OPV (freezer) |
| **+2 to +8°C** | Most vaccines (ILR) |
| **Never freeze** | DPT, Hepatitis B, TT |

:::danger
**Freeze-sensitive vaccines get damaged if frozen!**
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Active immunity = Own antibodies (long-lasting)
2. Passive immunity = Ready-made antibodies (short)
3. Live vaccines: BCG, OPV, Measles
4. Killed vaccines: IPV, Hepatitis A
5. Cold chain: +2 to +8°C for most vaccines
6. OPV stored in freezer (-15 to -25°C)
7. Never freeze DPT, Hepatitis B, TT
:::
`,
    contentHi: `
# 💉 टीकाकरण के सिद्धांत

---

## 📖 मुख्य परिभाषाएं

| शब्द | परिभाषा |
|:-----|:--------|
| **प्रतिरक्षा** | संक्रमण से लड़ने की क्षमता |
| **टीकाकरण** | प्रतिरक्षित बनाने की प्रक्रिया |
| **वैक्सीन** | प्रतिरक्षा के लिए जैविक तैयारी |
| **एंटीजन** | विदेशी पदार्थ |
| **एंटीबॉडी** | एंटीजन से लड़ने वाला प्रोटीन |

---

## 🔄 प्रतिरक्षा के प्रकार

### सक्रिय प्रतिरक्षा
> शरीर **अपनी एंटीबॉडी** बनाता है

| प्रकार | स्रोत | अवधि |
|:-------|:-----|:------|
| **प्राकृतिक** | रोग होना | दीर्घकालिक |
| **कृत्रिम** | टीकाकरण | दीर्घकालिक |

### निष्क्रिय प्रतिरक्षा
> शरीर **तैयार एंटीबॉडी** प्राप्त करता है

| प्रकार | स्रोत | अवधि |
|:-------|:-----|:------|
| **प्राकृतिक** | मां से बच्चे को | कम (6 महीने) |
| **कृत्रिम** | इम्युनोग्लोबुलिन | कम (सप्ताह) |

---

## 💉 टीकों के प्रकार

| प्रकार | विवरण | उदाहरण |
|:-------|:------|:-------|
| **जीवित क्षीण** | कमजोर रोगजनक | BCG, OPV, खसरा |
| **मृत/निष्क्रिय** | मृत रोगजनक | IPV, हेपेटाइटिस A |
| **टॉक्सॉइड** | निष्क्रिय विष | DPT (D & T) |
| **सबयूनिट** | रोगजनक का भाग | हेपेटाइटिस B |

---

## ❄️ कोल्ड चेन

### तापमान आवश्यकताएं

| तापमान | टीके |
|:-------|:-----|
| **-15 से -25°C** | OPV (फ्रीजर) |
| **+2 से +8°C** | अधिकांश टीके |
| **कभी फ्रीज न करें** | DPT, हेपेटाइटिस B, TT |

:::danger
**फ्रीज-संवेदनशील टीके जमने पर खराब हो जाते हैं!**
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सक्रिय = अपनी एंटीबॉडी (दीर्घकालिक)
2. निष्क्रिय = तैयार एंटीबॉडी (कम)
3. जीवित टीके: BCG, OPV, खसरा
4. मृत टीके: IPV, हेपेटाइटिस A
5. कोल्ड चेन: +2 से +8°C
6. OPV फ्रीजर में (-15 से -25°C)
7. DPT, हेपेटाइटिस B कभी फ्रीज न करें
:::
`
  },
  {
    id: 2,
    titleEn: "National Immunization Schedule",
    titleHi: "राष्ट्रीय टीकाकरण अनुसूची",
    contentEn: `
# 📅 National Immunization Schedule

---

## 👶 Birth Vaccines

| Vaccine | When | Route | Site |
|:--------|:-----|:------|:-----|
| **BCG** | At birth | Intradermal | Left upper arm |
| **OPV-0** | At birth | Oral | Mouth |
| **Hepatitis B (Birth)** | Within 24 hrs | IM | Thigh |

---

## 📆 Primary Schedule

| Age | Vaccines |
|:----|:---------|
| **6 weeks** | OPV-1, Pentavalent-1, Rota-1, fIPV-1, PCV-1 |
| **10 weeks** | OPV-2, Pentavalent-2, Rota-2 |
| **14 weeks** | OPV-3, Pentavalent-3, Rota-3, fIPV-2, PCV-2 |

### Pentavalent Vaccine Contains
- **D** - Diphtheria
- **P** - Pertussis
- **T** - Tetanus
- **Hib** - Haemophilus influenzae b
- **HepB** - Hepatitis B

---

## 💉 9-12 Months

| Age | Vaccines |
|:----|:---------|
| **9-12 months** | MR-1, JE-1*, PCV Booster |

*JE = Japanese Encephalitis (in endemic areas)

---

## 🔄 Boosters

| Age | Vaccines |
|:----|:---------|
| **16-24 months** | MR-2, JE-2*, DPT Booster-1, OPV Booster |
| **5-6 years** | DPT Booster-2 |
| **10 years** | TT |
| **16 years** | TT |

---

## 📊 Quick Reference Table

| Vaccine | Doses | Schedule |
|:--------|:------|:---------|
| **BCG** | 1 | Birth |
| **OPV** | 5 | Birth, 6w, 10w, 14w, 16-24m |
| **Hepatitis B** | 4 | Birth, 6w, 10w, 14w |
| **Pentavalent** | 3 | 6w, 10w, 14w |
| **Rotavirus** | 3 | 6w, 10w, 14w |
| **IPV** | 2 | 6w, 14w |
| **PCV** | 3 | 6w, 14w, 9m |
| **MR** | 2 | 9-12m, 16-24m |
| **DPT Booster** | 2 | 16-24m, 5-6y |
| **TT** | 2 | 10y, 16y |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. BCG, OPV-0, Hep B at birth
2. Primary series at 6, 10, 14 weeks
3. Pentavalent = DPT + Hib + HepB
4. MR at 9-12 months (1st dose)
5. DPT booster at 16-24 months
6. TT at 10 and 16 years
:::
`,
    contentHi: `
# 📅 राष्ट्रीय टीकाकरण अनुसूची

---

## 👶 जन्म पर टीके

| टीका | कब | मार्ग | स्थान |
|:-----|:---|:------|:------|
| **BCG** | जन्म पर | इंट्राडर्मल | बायां ऊपरी बांह |
| **OPV-0** | जन्म पर | मौखिक | मुंह |
| **हेपेटाइटिस B** | 24 घंटे के भीतर | IM | जांघ |

---

## 📆 प्राथमिक अनुसूची

| आयु | टीके |
|:----|:-----|
| **6 सप्ताह** | OPV-1, पेंटावैलेंट-1, रोटा-1, fIPV-1, PCV-1 |
| **10 सप्ताह** | OPV-2, पेंटावैलेंट-2, रोटा-2 |
| **14 सप्ताह** | OPV-3, पेंटावैलेंट-3, रोटा-3, fIPV-2, PCV-2 |

### पेंटावैलेंट में शामिल
- **D** - डिप्थीरिया
- **P** - पर्टुसिस
- **T** - टेटनस
- **Hib** - हीमोफिलस इन्फ्लुएंजा b
- **HepB** - हेपेटाइटिस B

---

## 💉 9-12 महीने

| आयु | टीके |
|:----|:-----|
| **9-12 महीने** | MR-1, JE-1*, PCV बूस्टर |

---

## 🔄 बूस्टर

| आयु | टीके |
|:----|:-----|
| **16-24 महीने** | MR-2, JE-2*, DPT बूस्टर-1, OPV बूस्टर |
| **5-6 वर्ष** | DPT बूस्टर-2 |
| **10 वर्ष** | TT |
| **16 वर्ष** | TT |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. BCG, OPV-0, Hep B जन्म पर
2. प्राथमिक श्रृंखला 6, 10, 14 सप्ताह
3. पेंटावैलेंट = DPT + Hib + HepB
4. MR 9-12 महीने पर (पहली खुराक)
5. DPT बूस्टर 16-24 महीने पर
6. TT 10 और 16 वर्ष पर
:::
`
  },
  {
    id: 3,
    titleEn: "Vaccine Administration",
    titleHi: "टीका प्रशासन",
    contentEn: `
# 💉 Vaccine Administration

---

## 📍 Routes of Administration

| Route | Description | Vaccines |
|:------|:------------|:---------|
| **Oral** | By mouth | OPV, Rotavirus |
| **Intradermal (ID)** | Into skin | BCG |
| **Subcutaneous (SC)** | Under skin | MR, JE |
| **Intramuscular (IM)** | Into muscle | DPT, Hepatitis B, IPV |

---

## 📏 Needle Size & Site

### Intramuscular Injections

| Age | Site | Needle Size |
|:----|:-----|:------------|
| **Infant (<1 year)** | Anterolateral thigh | 22-25G, 1 inch |
| **Child (1-3 years)** | Anterolateral thigh | 22-25G, 1-1.25 inch |
| **>3 years/Adult** | Deltoid | 22-25G, 1-1.5 inch |

### Angle of Insertion

| Route | Angle |
|:------|:------|
| **Intradermal** | 10-15° |
| **Subcutaneous** | 45° |
| **Intramuscular** | 90° |

---

## ✅ Before Vaccination

### Check These:
1. Vaccine name and expiry date
2. VVM (Vaccine Vial Monitor) status
3. Proper cold chain maintenance
4. Any contraindications
5. Informed consent

### VVM (Vaccine Vial Monitor)

| VVM Status | Action |
|:-----------|:-------|
| Square lighter than circle | **USE** |
| Square same as circle | **USE immediately** |
| Square darker than circle | **DISCARD** |

---

## ⚠️ Contraindications

### Absolute Contraindications
- Severe allergic reaction to previous dose
- Immunocompromised (for live vaccines)

### NOT Contraindications
- Minor illness/fever
- Mild diarrhea
- Antibiotic use
- Malnutrition
- Prematurity

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. OPV, Rotavirus = Oral
2. BCG = Intradermal (15°)
3. MR = Subcutaneous (45°)
4. DPT, HepB = Intramuscular (90°)
5. Infant IM site = Anterolateral thigh
6. Adult IM site = Deltoid
7. VVM: Square lighter than circle = Use
:::
`,
    contentHi: `
# 💉 टीका प्रशासन

---

## 📍 प्रशासन के मार्ग

| मार्ग | विवरण | टीके |
|:------|:------|:-----|
| **मौखिक** | मुंह से | OPV, रोटावायरस |
| **इंट्राडर्मल (ID)** | त्वचा में | BCG |
| **सबक्यूटेनियस (SC)** | त्वचा के नीचे | MR, JE |
| **इंट्रामस्क्युलर (IM)** | मांसपेशी में | DPT, हेपेटाइटिस B |

---

## 📏 सुई का आकार और स्थान

### इंट्रामस्क्युलर इंजेक्शन

| आयु | स्थान | सुई का आकार |
|:----|:------|:-----------|
| **शिशु (<1 वर्ष)** | एंटेरोलेटरल जांघ | 22-25G, 1 इंच |
| **बच्चा (1-3 वर्ष)** | एंटेरोलेटरल जांघ | 22-25G, 1-1.25 इंच |
| **>3 वर्ष/वयस्क** | डेल्टॉइड | 22-25G, 1-1.5 इंच |

### प्रविष्टि का कोण

| मार्ग | कोण |
|:------|:-----|
| **इंट्राडर्मल** | 10-15° |
| **सबक्यूटेनियस** | 45° |
| **इंट्रामस्क्युलर** | 90° |

---

## ✅ टीकाकरण से पहले

### जांचें:
1. टीके का नाम और समाप्ति तिथि
2. VVM स्थिति
3. कोल्ड चेन
4. कोई मतभेद
5. सूचित सहमति

### VVM (वैक्सीन वायल मॉनिटर)

| VVM स्थिति | कार्रवाई |
|:----------|:--------|
| वर्ग वृत्त से हल्का | **उपयोग करें** |
| वर्ग वृत्त के समान | **तुरंत उपयोग** |
| वर्ग वृत्त से गहरा | **फेंक दें** |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. OPV, रोटावायरस = मौखिक
2. BCG = इंट्राडर्मल (15°)
3. MR = सबक्यूटेनियस (45°)
4. DPT, HepB = इंट्रामस्क्युलर (90°)
5. शिशु IM स्थान = एंटेरोलेटरल जांघ
6. वयस्क IM स्थान = डेल्टॉइड
7. VVM: वर्ग वृत्त से हल्का = उपयोग करें
:::
`
  },
  {
    id: 4,
    titleEn: "AEFI - Adverse Events",
    titleHi: "AEFI - प्रतिकूल घटनाएं",
    contentEn: `
# ⚠️ AEFI - Adverse Events Following Immunization

---

## 📖 What is AEFI?

> **AEFI** is any untoward medical occurrence following immunization, which may or may not be caused by the vaccine.

---

## 🔄 Types of AEFI

### By Cause

| Type | Description | Example |
|:-----|:------------|:--------|
| **Vaccine product** | Due to vaccine properties | Fever after DPT |
| **Vaccine quality** | Manufacturing defect | Contamination |
| **Immunization error** | Program error | Wrong dose, site |
| **Immunization anxiety** | Fear/stress related | Fainting |
| **Coincidental** | Unrelated to vaccine | Disease was incubating |

---

## 📊 Classification by Severity

### Minor AEFI (Common)

| Reaction | Vaccines | Management |
|:---------|:---------|:-----------|
| **Local pain/swelling** | Most | Cold compress |
| **Mild fever** | DPT, MR | Paracetamol |
| **BCG abscess** | BCG | Usually heals |
| **Irritability** | Most | Reassurance |

### Serious AEFI (Rare)

| Reaction | Description | Action |
|:---------|:------------|:-------|
| **Anaphylaxis** | Severe allergic | Emergency treatment |
| **Convulsions** | Seizures | Hospital referral |
| **Encephalopathy** | Brain inflammation | Hospital care |
| **Death** | Any death after vaccine | Report immediately |

---

## 🚨 Anaphylaxis Management

### Signs
- Difficulty breathing
- Swelling of face/throat
- Rapid heartbeat
- Low blood pressure
- Rash/hives

### Treatment
1. **Adrenaline** (1:1000) 0.01 mL/kg IM
2. Position patient (legs elevated)
3. Oxygen if available
4. IV fluids
5. Refer to hospital

:::danger
**Always keep adrenaline ready during immunization sessions!**
:::

---

## 📝 AEFI Reporting

### What to Report
- All serious AEFI
- Clusters of AEFI
- Any AEFI of public concern

### To Whom
- District Immunization Officer
- State surveillance officer
- AEFI Committee

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. AEFI = Any adverse event after immunization
2. Most AEFI are minor (fever, pain)
3. Serious AEFI are rare
4. Anaphylaxis needs Adrenaline 1:1000 IM
5. Report all serious AEFI
6. Keep adrenaline ready during vaccination
7. Coincidental events are NOT vaccine-caused
:::
`,
    contentHi: `
# ⚠️ AEFI - टीकाकरण के बाद प्रतिकूल घटनाएं

---

## 📖 AEFI क्या है?

> **AEFI** टीकाकरण के बाद कोई भी अवांछित चिकित्सा घटना है, जो टीके के कारण हो भी सकती है और नहीं भी।

---

## 🔄 AEFI के प्रकार

| प्रकार | विवरण | उदाहरण |
|:-------|:------|:-------|
| **टीका उत्पाद** | टीके के गुण | DPT के बाद बुखार |
| **टीका गुणवत्ता** | निर्माण दोष | संदूषण |
| **टीकाकरण त्रुटि** | कार्यक्रम त्रुटि | गलत खुराक |
| **टीकाकरण चिंता** | भय/तनाव | बेहोशी |
| **संयोग** | टीके से असंबंधित | रोग इनक्यूबेट था |

---

## 📊 गंभीरता द्वारा वर्गीकरण

### मामूली AEFI (सामान्य)

| प्रतिक्रिया | टीके | प्रबंधन |
|:----------|:-----|:--------|
| **स्थानीय दर्द/सूजन** | अधिकांश | ठंडा सेक |
| **हल्का बुखार** | DPT, MR | पैरासिटामोल |
| **BCG फोड़ा** | BCG | आमतौर पर ठीक |
| **चिड़चिड़ापन** | अधिकांश | आश्वासन |

### गंभीर AEFI (दुर्लभ)

| प्रतिक्रिया | विवरण | कार्रवाई |
|:----------|:------|:--------|
| **एनाफिलेक्सिस** | गंभीर एलर्जी | आपातकालीन उपचार |
| **आक्षेप** | दौरे | अस्पताल रेफर |
| **एन्सेफैलोपैथी** | मस्तिष्क सूजन | अस्पताल देखभाल |
| **मृत्यु** | टीके के बाद | तुरंत रिपोर्ट |

---

## 🚨 एनाफिलेक्सिस प्रबंधन

### लक्षण
- सांस लेने में कठिनाई
- चेहरे/गले में सूजन
- तेज धड़कन
- निम्न रक्तचाप
- दाने

### उपचार
1. **एड्रेनालाइन** (1:1000) 0.01 mL/kg IM
2. रोगी की स्थिति (पैर ऊंचे)
3. ऑक्सीजन
4. IV तरल
5. अस्पताल रेफर

:::danger
**टीकाकरण सत्र में हमेशा एड्रेनालाइन तैयार रखें!**
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. AEFI = टीकाकरण के बाद कोई प्रतिकूल घटना
2. अधिकांश AEFI मामूली (बुखार, दर्द)
3. गंभीर AEFI दुर्लभ
4. एनाफिलेक्सिस के लिए एड्रेनालाइन 1:1000 IM
5. सभी गंभीर AEFI रिपोर्ट करें
6. टीकाकरण में एड्रेनालाइन तैयार रखें
:::
`
  },
  {
    id: 5,
    titleEn: "Cold Chain & Storage",
    titleHi: "कोल्ड चेन और भंडारण",
    contentEn: `
# ❄️ Cold Chain & Storage

---

## 📖 What is Cold Chain?

> **Cold Chain** is the system of transporting and storing vaccines at recommended temperatures from manufacturer to recipient.

---

## 🌡️ Temperature Requirements

### Standard Temperatures

| Equipment | Temperature | Vaccines |
|:----------|:------------|:---------|
| **Deep Freezer** | -15 to -25°C | OPV |
| **ILR (Ice-Lined Refrigerator)** | +2 to +8°C | Most vaccines |
| **Vaccine Carrier** | +2 to +8°C | Transport |
| **Cold Box** | +2 to +8°C | Long transport |

---

## ⚠️ Freeze-Sensitive Vaccines

:::danger
**Never Freeze These:**
- DPT/Pentavalent
- Hepatitis B
- TT
- IPV
- PCV
:::

### Shake Test
To check if vaccine was frozen:
1. Take suspect vial and known good vial
2. Shake both vigorously
3. Let stand 15-30 minutes
4. If sediment settles faster in suspect vial = **DAMAGED**

---

## 📊 VVM (Vaccine Vial Monitor)

| Stage | Appearance | Action |
|:------|:-----------|:-------|
| **1** | Square much lighter | Use first |
| **2** | Square lighter | Use |
| **3** | Square same color | Use immediately |
| **4** | Square darker | **DISCARD** |

---

## 🧊 Cold Chain Equipment

### At PHC/Sub-centre

| Equipment | Purpose |
|:----------|:--------|
| **ILR** | Store vaccines +2 to +8°C |
| **Deep Freezer** | Make ice packs, store OPV |
| **Vaccine Carrier** | Transport to session site |
| **Ice Packs** | Maintain temperature |

### Ice Pack Conditioning
- Freeze ice packs completely
- Take out and wait until sweating
- Use when water droplets appear
- This prevents freeze damage

---

## 📝 Storage Rules

### In ILR
- Diluents on top shelf
- Freeze-sensitive vaccines on middle
- OPV at bottom (from freezer transfer)
- Never store food or medicines

### First-In-First-Out (FIFO)
- Use vaccines with earlier expiry first
- Check expiry dates regularly
- Maintain stock register

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Cold chain: +2 to +8°C for most vaccines
2. OPV in freezer (-15 to -25°C)
3. Never freeze DPT, HepB, TT
4. Shake test detects freeze damage
5. VVM: Square darker = Discard
6. Condition ice packs before use
7. FIFO: Use earlier expiry first
:::
`,
    contentHi: `
# ❄️ कोल्ड चेन और भंडारण

---

## 📖 कोल्ड चेन क्या है?

> **कोल्ड चेन** निर्माता से प्राप्तकर्ता तक टीकों को अनुशंसित तापमान पर परिवहन और भंडारण की प्रणाली।

---

## 🌡️ तापमान आवश्यकताएं

| उपकरण | तापमान | टीके |
|:-------|:-------|:-----|
| **डीप फ्रीजर** | -15 से -25°C | OPV |
| **ILR** | +2 से +8°C | अधिकांश टीके |
| **वैक्सीन कैरियर** | +2 से +8°C | परिवहन |
| **कोल्ड बॉक्स** | +2 से +8°C | लंबा परिवहन |

---

## ⚠️ फ्रीज-संवेदनशील टीके

:::danger
**इन्हें कभी फ्रीज न करें:**
- DPT/पेंटावैलेंट
- हेपेटाइटिस B
- TT
- IPV
- PCV
:::

### शेक टेस्ट
1. संदिग्ध और अच्छी वायल लें
2. दोनों को जोर से हिलाएं
3. 15-30 मिनट खड़ा रहने दें
4. संदिग्ध में तलछट जल्दी बैठे = **क्षतिग्रस्त**

---

## 📊 VVM (वैक्सीन वायल मॉनिटर)

| चरण | दिखावट | कार्रवाई |
|:----|:------|:--------|
| **1** | वर्ग बहुत हल्का | पहले उपयोग |
| **2** | वर्ग हल्का | उपयोग करें |
| **3** | वर्ग समान रंग | तुरंत उपयोग |
| **4** | वर्ग गहरा | **फेंक दें** |

---

## 🧊 कोल्ड चेन उपकरण

### PHC/उप-केंद्र पर

| उपकरण | उद्देश्य |
|:-------|:--------|
| **ILR** | +2 से +8°C पर भंडारण |
| **डीप फ्रीजर** | आइस पैक बनाना, OPV |
| **वैक्सीन कैरियर** | सत्र स्थल पर परिवहन |
| **आइस पैक** | तापमान बनाए रखना |

### आइस पैक कंडीशनिंग
- आइस पैक पूरी तरह जमाएं
- निकालें और पसीना आने तक प्रतीक्षा करें
- पानी की बूंदें दिखने पर उपयोग करें
- यह फ्रीज क्षति रोकता है

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. कोल्ड चेन: +2 से +8°C
2. OPV फ्रीजर में (-15 से -25°C)
3. DPT, HepB, TT कभी फ्रीज न करें
4. शेक टेस्ट फ्रीज क्षति पहचानता है
5. VVM: वर्ग गहरा = फेंक दें
6. उपयोग से पहले आइस पैक कंडीशन करें
7. FIFO: पहले समाप्ति पहले उपयोग
:::
`
  },
  {
    id: 6,
    titleEn: "Vaccines: 1 Year to Adolescence",
    titleHi: "टीके: 1 वर्ष से किशोरावस्था",
    contentEn: `
# 💉 Vaccines: 1 Year to Adolescence

---

## 📋 Booster Doses Schedule

> After completing primary immunization, booster doses strengthen and extend immunity.

### 16-24 Months Boosters

| Vaccine | Route | Site | Dose |
|:--------|:------|:-----|:-----|
| **DPT Booster-1** | IM | Anterolateral thigh | 0.5 ml |
| **OPV Booster** | Oral | Mouth | 2 drops |
| **Measles-Rubella 2** | SC | Right upper arm | 0.5 ml |

:::info
**Key Point:** DPT Booster-1 given 6 months after Pentavalent-3
:::

---

## 🏫 School Age Vaccinations (5-6 Years)

| Vaccine | Route | Site | Purpose |
|:--------|:------|:-----|:--------|
| **DPT Booster-2** | IM | Upper arm | Reinforce diphtheria, tetanus, pertussis |
| **OPV Booster-2** | Oral | Mouth | Maintain polio immunity |

:::tip
**School Health Program:** These vaccines are often given through school health programs
:::

---

## 👦 10 Years Vaccines

| Vaccine | Route | Site | Dose |
|:--------|:------|:-----|:-----|
| **TT-1** | IM | Upper arm | 0.5 ml |

---

## 👧 16 Years Vaccines

| Vaccine | Route | Site | Dose |
|:--------|:------|:-----|:-----|
| **TT-2** | IM | Upper arm | 0.5 ml |

---

## 🤰 TT Schedule for Women

### First Pregnancy

| Dose | Timing | Protection |
|:-----|:-------|:-----------|
| **TT-1** | Early pregnancy | None alone |
| **TT-2** | 4 weeks after TT-1 | 3 years - 80% |

### Previously Immunized

| Previous Status | Current Pregnancy |
|:----------------|:------------------|
| **TT-2 received <3 years ago** | 1 booster dose |
| **TT-2 received >3 years ago** | 2 doses (TT-1 & TT-2) |
| **5 doses in childhood** | No TT needed |

:::success
**Goal:** Every pregnant woman should receive 2 doses of TT minimum for neonatal tetanus protection
:::

---

## 🔄 Catch-up Immunization

> For children who missed scheduled vaccines

### Principles

| Principle | Description |
|:----------|:------------|
| **Never restart** | Continue from where left off |
| **Minimum intervals** | Maintain at least 4 weeks between doses |
| **Multiple vaccines** | Can give multiple vaccines in same visit |
| **Age limits** | Some vaccines have upper age limits |

### Minimum Intervals Between Doses

| Vaccine | Minimum Interval |
|:--------|:-----------------|
| **OPV/IPV doses** | 4 weeks |
| **Pentavalent doses** | 4 weeks |
| **MR/Measles doses** | 4 weeks |
| **TT doses** | 4 weeks |

---

## ⏰ BCG Timing

:::warning
**BCG Guidelines:**
- **Ideal:** At birth or as early as possible
- **Up to 1 year:** Can give without tuberculin test
- **1-5 years:** Give after tuberculin test (if negative)
- **After 5 years:** Not routinely recommended
:::

---

## 📊 Complete NIS Schedule Summary

| Age | Vaccines |
|:----|:---------|
| **Birth** | BCG, OPV-0, Hep B-0 |
| **6 weeks** | OPV-1, Pentavalent-1, Rota-1, fIPV-1, PCV-1 |
| **10 weeks** | OPV-2, Pentavalent-2, Rota-2 |
| **14 weeks** | OPV-3, Pentavalent-3, Rota-3, fIPV-2, PCV-2 |
| **9 months** | MR-1, JE-1, PCV-Booster |
| **16-24 months** | MR-2, JE-2, DPT B-1, OPV B |
| **5-6 years** | DPT B-2, OPV B-2 |
| **10 years** | TT-1 |
| **16 years** | TT-2 |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. DPT B-1 at 16-24 months (6 months after Pentavalent-3)
2. MR-2 at 16-24 months
3. School vaccines: DPT B-2 + OPV B-2 at 5-6 years
4. TT-1 at 10 years, TT-2 at 16 years
5. Pregnant women: Minimum 2 TT doses
6. Catch-up: Never restart, maintain 4-week intervals
7. BCG after 1 year needs tuberculin test
:::
`,
    contentHi: `
# 💉 टीके: 1 वर्ष से किशोरावस्था

---

## 📋 बूस्टर खुराक अनुसूची

> प्राथमिक टीकाकरण पूरा करने के बाद, बूस्टर खुराक प्रतिरक्षा को मजबूत और विस्तारित करती हैं।

### 16-24 महीने बूस्टर

| टीका | मार्ग | स्थान | खुराक |
|:-----|:------|:------|:------|
| **DPT बूस्टर-1** | IM | जांघ का बाहरी भाग | 0.5 ml |
| **OPV बूस्टर** | मुखीय | मुंह | 2 बूंद |
| **खसरा-रूबेला 2** | SC | दाहिना ऊपरी बांह | 0.5 ml |

:::info
**मुख्य बिंदु:** DPT बूस्टर-1 पेंटावैलेंट-3 के 6 महीने बाद दिया जाता है
:::

---

## 🏫 स्कूल आयु टीकाकरण (5-6 वर्ष)

| टीका | मार्ग | स्थान | उद्देश्य |
|:-----|:------|:------|:---------|
| **DPT बूस्टर-2** | IM | ऊपरी बांह | डिप्थीरिया, टेटनस, पर्टुसिस |
| **OPV बूस्टर-2** | मुखीय | मुंह | पोलियो प्रतिरक्षा |

---

## 👦 10 वर्ष टीके

| टीका | मार्ग | स्थान | खुराक |
|:-----|:------|:------|:------|
| **TT-1** | IM | ऊपरी बांह | 0.5 ml |

---

## 👧 16 वर्ष टीके

| टीका | मार्ग | स्थान | खुराक |
|:-----|:------|:------|:------|
| **TT-2** | IM | ऊपरी बांह | 0.5 ml |

---

## 🤰 महिलाओं के लिए TT अनुसूची

### पहली गर्भावस्था

| खुराक | समय | सुरक्षा |
|:------|:-----|:--------|
| **TT-1** | प्रारंभिक गर्भावस्था | अकेले कोई नहीं |
| **TT-2** | TT-1 के 4 सप्ताह बाद | 3 वर्ष - 80% |

### पूर्व टीकाकृत

| पिछली स्थिति | वर्तमान गर्भावस्था |
|:-------------|:-------------------|
| **TT-2 <3 वर्ष पहले** | 1 बूस्टर खुराक |
| **TT-2 >3 वर्ष पहले** | 2 खुराक (TT-1 & TT-2) |
| **बचपन में 5 खुराक** | TT की जरूरत नहीं |

:::success
**लक्ष्य:** नवजात टेटनस सुरक्षा के लिए हर गर्भवती को न्यूनतम 2 TT खुराक
:::

---

## 🔄 कैच-अप टीकाकरण

> जिन बच्चों ने निर्धारित टीके छोड़े

### सिद्धांत

| सिद्धांत | विवरण |
|:---------|:-------|
| **कभी पुनः आरंभ न करें** | जहां छोड़ा वहां से जारी रखें |
| **न्यूनतम अंतराल** | खुराकों के बीच कम से कम 4 सप्ताह |
| **एकाधिक टीके** | एक विज़िट में कई टीके दे सकते हैं |
| **आयु सीमा** | कुछ टीकों की ऊपरी आयु सीमा |

---

## ⏰ BCG समय

:::warning
**BCG दिशानिर्देश:**
- **आदर्श:** जन्म पर या जितनी जल्दी हो
- **1 वर्ष तक:** ट्यूबरकुलिन टेस्ट के बिना दे सकते हैं
- **1-5 वर्ष:** ट्यूबरकुलिन टेस्ट के बाद (यदि नकारात्मक)
- **5 वर्ष के बाद:** नियमित रूप से अनुशंसित नहीं
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. DPT B-1 16-24 महीने पर (पेंटावैलेंट-3 के 6 महीने बाद)
2. MR-2 16-24 महीने पर
3. स्कूल टीके: DPT B-2 + OPV B-2 5-6 वर्ष पर
4. TT-1 10 वर्ष, TT-2 16 वर्ष पर
5. गर्भवती: न्यूनतम 2 TT खुराक
6. कैच-अप: कभी पुनः आरंभ न करें, 4 सप्ताह अंतराल
7. 1 वर्ष के बाद BCG के लिए ट्यूबरकुलिन टेस्ट
:::
`
  },
  {
    id: 7,
    titleEn: "Cold Chain System",
    titleHi: "कोल्ड चेन प्रणाली",
    contentEn: `
# ❄️ Cold Chain System

---

## 📖 Understanding Cold Chain

> **Cold Chain** is the system of transporting and storing vaccines within the recommended temperature range from manufacturer to beneficiary.

### Why Cold Chain Matters

| Aspect | Impact |
|:-------|:-------|
| **Vaccine Potency** | Maintains effectiveness |
| **Safety** | Prevents adverse reactions |
| **Program Success** | Ensures immunization goals |
| **Resource Efficiency** | Prevents wastage |

:::danger
**Critical:** A broken cold chain = ineffective vaccine = unprotected child
:::

---

## 🏢 Cold Chain Points

### Supply Chain Flow

\`\`\`
GMSDs (4 locations)
      ↓
State Vaccine Store
      ↓
Regional/Divisional Store
      ↓
District Vaccine Store
      ↓
PHC/CHC
      ↓
Session Site
\`\`\`

---

## 🧊 Cold Chain Equipment

### Deep Freezer

| Feature | Specification |
|:--------|:-------------|
| **Temperature** | -15°C to -25°C |
| **Purpose** | Store OPV, make ice packs |
| **Capacity** | Various (large, medium, small) |
| **Power backup** | Hold-over time 14+ hours |

### Ice Lined Refrigerator (ILR)

| Feature | Specification |
|:--------|:-------------|
| **Temperature** | +2°C to +8°C |
| **Ice lining** | Maintains temp during power cut |
| **Hold-over time** | 6-12 hours without power |
| **Use** | Store all vaccines except OPV |

### Vaccine Carrier

| Feature | Specification |
|:--------|:-------------|
| **Capacity** | 1.5-2.5 liters |
| **Ice packs** | 4 conditioned ice packs |
| **Duration** | Maintain temp 6-8 hours |
| **Use** | Transport to session site |

### Cold Box

| Feature | Specification |
|:--------|:-------------|
| **Capacity** | 5-25 liters |
| **Duration** | 2-7 days |
| **Use** | Long distance transport |
| **Ice packs** | Multiple required |

---

## 🌡️ Temperature Monitoring

### Equipment Used

| Equipment | Function |
|:----------|:---------|
| **Dial Thermometer** | Shows current temperature |
| **Digital Thermometer** | Precise reading |
| **Stem Thermometer** | Placed in water bottle |
| **Freeze Watch** | Indicates freezing exposure |
| **Freeze Tag** | Electronic freeze indicator |

### Monitoring Schedule

| Frequency | Action |
|:----------|:-------|
| **Twice daily** | Record temperature |
| **Morning** | Before starting work |
| **Evening** | Before leaving |
| **After power cut** | Check immediately |

:::warning
**Record in Temperature Log Book:**
- Date and time
- Temperature reading
- Any abnormalities
- Action taken
:::

---

## 📱 eVIN (Electronic Vaccine Intelligence Network)

> Digital platform for real-time vaccine tracking

### Features

| Feature | Benefit |
|:--------|:--------|
| **Stock tracking** | Real-time inventory |
| **Temperature alerts** | Immediate SMS notification |
| **Vaccine wastage** | Monitor and reduce |
| **Distribution planning** | Optimize supply |

---

## ⚡ Ice Pack Conditioning

### Why Conditioning?

:::info
**Purpose:** Prevent freeze-sensitive vaccines from freezing when ice packs are too cold
:::

### Steps

1. **Freeze completely** - Keep in deep freezer overnight
2. **Remove from freezer** - Take out before use
3. **Wait for sweating** - Surface becomes wet
4. **Water droplets appear** - Ice pack is "conditioned"
5. **Place in carrier** - Now safe to use

### Visual Guide

\`\`\`
❄️ FROZEN → 💧 SWEATING → 💦 DROPLETS → ✅ READY

Time needed: 15-30 minutes depending on room temp
\`\`\`

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Cold chain: +2°C to +8°C for most vaccines
2. Deep freezer: -15°C to -25°C for OPV and ice packs
3. ILR has ice lining for power cuts
4. Condition ice packs before use (prevent freezing)
5. Monitor temperature twice daily
6. eVIN provides real-time tracking
7. Cold box for long-distance transport
:::
`,
    contentHi: `
# ❄️ कोल्ड चेन प्रणाली

---

## 📖 कोल्ड चेन को समझना

> **कोल्ड चेन** निर्माता से लाभार्थी तक टीकों को अनुशंसित तापमान सीमा में परिवहन और भंडारण की प्रणाली है।

### कोल्ड चेन का महत्व

| पहलू | प्रभाव |
|:-----|:-------|
| **टीके की शक्ति** | प्रभावशीलता बनाए रखता है |
| **सुरक्षा** | प्रतिकूल प्रतिक्रियाएं रोकता है |
| **कार्यक्रम सफलता** | टीकाकरण लक्ष्य सुनिश्चित |
| **संसाधन दक्षता** | बर्बादी रोकता है |

:::danger
**महत्वपूर्ण:** टूटी कोल्ड चेन = अप्रभावी टीका = असुरक्षित बच्चा
:::

---

## 🏢 कोल्ड चेन पॉइंट

### आपूर्ति श्रृंखला प्रवाह

\`\`\`
GMSDs (4 स्थान)
      ↓
राज्य टीका भंडार
      ↓
क्षेत्रीय/मंडल भंडार
      ↓
जिला टीका भंडार
      ↓
PHC/CHC
      ↓
सत्र स्थल
\`\`\`

---

## 🧊 कोल्ड चेन उपकरण

### डीप फ्रीजर

| विशेषता | विनिर्देश |
|:--------|:----------|
| **तापमान** | -15°C से -25°C |
| **उद्देश्य** | OPV भंडारण, आइस पैक बनाना |
| **होल्ड-ओवर समय** | 14+ घंटे |

### आइस लाइन्ड रेफ्रिजरेटर (ILR)

| विशेषता | विनिर्देश |
|:--------|:----------|
| **तापमान** | +2°C से +8°C |
| **आइस लाइनिंग** | बिजली कट में तापमान बनाए |
| **होल्ड-ओवर समय** | बिजली के बिना 6-12 घंटे |
| **उपयोग** | OPV को छोड़कर सभी टीके |

### वैक्सीन कैरियर

| विशेषता | विनिर्देश |
|:--------|:----------|
| **क्षमता** | 1.5-2.5 लीटर |
| **आइस पैक** | 4 कंडीशन्ड आइस पैक |
| **अवधि** | 6-8 घंटे तापमान बनाए |
| **उपयोग** | सत्र स्थल तक परिवहन |

### कोल्ड बॉक्स

| विशेषता | विनिर्देश |
|:--------|:----------|
| **क्षमता** | 5-25 लीटर |
| **अवधि** | 2-7 दिन |
| **उपयोग** | लंबी दूरी परिवहन |

---

## 🌡️ तापमान निगरानी

### उपयोग किए जाने वाले उपकरण

| उपकरण | कार्य |
|:-------|:------|
| **डायल थर्मामीटर** | वर्तमान तापमान दिखाता है |
| **डिजिटल थर्मामीटर** | सटीक रीडिंग |
| **स्टेम थर्मामीटर** | पानी की बोतल में रखा |
| **फ्रीज वॉच** | फ्रीजिंग एक्सपोजर दर्शाता है |
| **फ्रीज टैग** | इलेक्ट्रॉनिक फ्रीज इंडिकेटर |

### निगरानी अनुसूची

| आवृत्ति | कार्रवाई |
|:--------|:--------|
| **दिन में दो बार** | तापमान रिकॉर्ड करें |
| **सुबह** | काम शुरू करने से पहले |
| **शाम** | जाने से पहले |
| **बिजली कट के बाद** | तुरंत जांचें |

---

## 📱 eVIN (इलेक्ट्रॉनिक वैक्सीन इंटेलिजेंस नेटवर्क)

> रीयल-टाइम टीका ट्रैकिंग के लिए डिजिटल प्लेटफॉर्म

### विशेषताएं

| विशेषता | लाभ |
|:--------|:-----|
| **स्टॉक ट्रैकिंग** | रीयल-टाइम इन्वेंटरी |
| **तापमान अलर्ट** | तत्काल SMS सूचना |
| **टीका बर्बादी** | निगरानी और कमी |
| **वितरण योजना** | आपूर्ति अनुकूलन |

---

## ⚡ आइस पैक कंडीशनिंग

### कंडीशनिंग क्यों?

:::info
**उद्देश्य:** जब आइस पैक बहुत ठंडे हों तो फ्रीज-संवेदनशील टीकों को जमने से रोकें
:::

### चरण

1. **पूरी तरह जमाएं** - रात भर डीप फ्रीजर में
2. **फ्रीजर से निकालें** - उपयोग से पहले
3. **पसीना आने तक प्रतीक्षा करें** - सतह गीली हो जाती है
4. **पानी की बूंदें दिखें** - आइस पैक "कंडीशन्ड"
5. **कैरियर में रखें** - अब उपयोग के लिए सुरक्षित

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. कोल्ड चेन: +2°C से +8°C अधिकांश टीकों के लिए
2. डीप फ्रीजर: -15°C से -25°C OPV और आइस पैक के लिए
3. ILR में बिजली कट के लिए आइस लाइनिंग
4. उपयोग से पहले आइस पैक कंडीशन करें
5. दिन में दो बार तापमान निगरानी
6. eVIN रीयल-टाइम ट्रैकिंग प्रदान करता है
7. लंबी दूरी परिवहन के लिए कोल्ड बॉक्स
:::
`
  },
  {
    id: 8,
    titleEn: "Vaccine Storage & Handling",
    titleHi: "टीका भंडारण और संचालन",
    contentEn: `
# 📦 Vaccine Storage & Handling

---

## 🗄️ Storage in ILR

### Shelf Arrangement

| Shelf | What to Store |
|:------|:-------------|
| **Top Shelf** | Diluents (when required) |
| **Middle Shelves** | Freeze-sensitive vaccines (DPT, TT, HepB, Pentavalent, IPV, PCV) |
| **Bottom Shelf** | OPV (transferred from freezer) |

:::warning
**Important Rules:**
- Never store food, drinks, or medicines
- Keep vaccines in original packing
- Don't overcrowd shelves
- Maintain proper air circulation
:::

---

## 📋 FEFO Principle

> **First Expiry First Out** - Use vaccines with earliest expiry date first

### Implementation

| Step | Action |
|:-----|:-------|
| **Arrange** | Earlier expiry in front |
| **Check** | Review expiry dates regularly |
| **Record** | Maintain stock register |
| **Monitor** | Track vaccines approaching expiry |

### Stock Management

\`\`\`
+----------------------------------+
|     NEW STOCK (Later Expiry)     |
|           → BACK OF ILR          |
+----------------------------------+
|    OLD STOCK (Earlier Expiry)    |
|          → FRONT OF ILR          |
+----------------------------------+
         ↓
    Use OLD stock first!
\`\`\`

---

## 🔍 Shake Test

> Test to detect freeze damage in freeze-sensitive vaccines

### When to Perform

- Suspect vaccine was frozen
- Power failure occurred
- Temperature excursion recorded
- Vaccine received in unknown condition

### Procedure

| Step | Action |
|:-----|:-------|
| **1** | Take suspect vial and known good vial of same vaccine |
| **2** | Shake both vigorously for 10-15 seconds |
| **3** | Place both on flat surface |
| **4** | Wait 15-30 minutes |
| **5** | Observe sedimentation |

### Reading Results

| Observation | Result |
|:------------|:-------|
| **Suspect settles faster** | FROZEN - DISCARD |
| **Both settle at same rate** | OK to use |
| **Known good settles faster** | Test invalid, repeat |

:::danger
**Freeze-Damaged Vaccines:**
- Lose potency permanently
- Cannot be restored
- Must be discarded
:::

---

## 📊 VVM (Vaccine Vial Monitor)

> Heat-sensitive label that changes color based on cumulative heat exposure

### VVM Stages

| Stage | Appearance | Action |
|:------|:-----------|:-------|
| **Stage 1** | Inner square much lighter than outer | ✅ USE - Good condition |
| **Stage 2** | Inner square lighter than outer | ✅ USE - Still effective |
| **Stage 3** | Inner square same color as outer | ⚠️ USE IMMEDIATELY |
| **Stage 4** | Inner square darker than outer | ❌ DISCARD |

### Visual Guide

\`\`\`
Stage 1:    Stage 2:    Stage 3:    Stage 4:
 [  □  ]     [  ▪  ]     [  ■  ]     [  ▓  ]
   OK          OK       USE NOW     DISCARD
\`\`\`

:::info
**Key Point:** VVM reading + Expiry date - both should be valid before use
:::

---

## 💉 Reconstitution

### Vaccines Requiring Reconstitution

| Vaccine | Diluent | Discard Time After Opening |
|:--------|:--------|:---------------------------|
| **BCG** | Specific diluent | 4 hours |
| **Measles/MR** | Specific diluent | 4 hours |
| **JE** | Specific diluent | 4 hours |

### Rules of Reconstitution

1. **Use only manufacturer's diluent** - Never substitute
2. **Maintain aseptic technique** - Prevent contamination
3. **Reconstitute just before use** - At session site
4. **Discard after 4 hours** - Or end of session, whichever is earlier
5. **Never pre-mix vaccines** - Reconstitute one vial at a time

:::danger
**Using wrong diluent can cause:**
- Vaccine failure
- Severe adverse reactions
- Death in some cases
:::

---

## 🗑️ Open Vial Policy

### Multi-Dose Vials

| Vaccine Type | Policy |
|:-------------|:-------|
| **OPV, IPV** | Can use until expiry if VVM OK |
| **DPT, TT, Pentavalent** | Can use until expiry if VVM OK |
| **Hep B** | Can use until expiry if VVM OK |
| **Reconstituted vaccines** | Discard after 4 hours |

### Conditions for Reuse

| Condition | Required |
|:----------|:---------|
| **VVM** | Stage 1, 2, or 3 |
| **Expiry** | Not exceeded |
| **Storage** | Maintained cold chain |
| **Contamination** | No evidence |
| **Labeling** | Date/time of opening noted |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. FEFO: First Expiry First Out
2. Shake test: Suspects settles faster = frozen
3. VVM: Inner darker than outer = discard
4. Reconstituted vaccines: 4 hours maximum
5. Never use wrong diluent
6. Multi-dose vials: Follow open vial policy
7. Top shelf for diluents, middle for freeze-sensitive
:::
`,
    contentHi: `
# 📦 टीका भंडारण और संचालन

---

## 🗄️ ILR में भंडारण

### शेल्फ व्यवस्था

| शेल्फ | क्या रखें |
|:------|:---------|
| **ऊपरी शेल्फ** | डाइल्युएंट (जब आवश्यक) |
| **मध्य शेल्फ** | फ्रीज-संवेदनशील टीके (DPT, TT, HepB, पेंटावैलेंट, IPV, PCV) |
| **निचला शेल्फ** | OPV (फ्रीजर से स्थानांतरित) |

:::warning
**महत्वपूर्ण नियम:**
- भोजन, पेय, या दवाएं कभी न रखें
- टीके मूल पैकिंग में रखें
- शेल्फ पर भीड़ न करें
- उचित वायु संचार बनाए रखें
:::

---

## 📋 FEFO सिद्धांत

> **पहले समाप्ति पहले बाहर** - सबसे पहले समाप्त होने वाले टीके पहले उपयोग करें

### कार्यान्वयन

| चरण | कार्रवाई |
|:-----|:--------|
| **व्यवस्थित करें** | पहले समाप्ति सामने |
| **जांचें** | नियमित रूप से समाप्ति तिथि देखें |
| **रिकॉर्ड** | स्टॉक रजिस्टर बनाए रखें |
| **निगरानी** | समाप्ति नजदीक टीकों को ट्रैक करें |

---

## 🔍 शेक टेस्ट

> फ्रीज-संवेदनशील टीकों में फ्रीज क्षति का पता लगाने के लिए टेस्ट

### प्रक्रिया

| चरण | कार्रवाई |
|:-----|:--------|
| **1** | संदिग्ध वायल और ज्ञात अच्छी वायल लें |
| **2** | दोनों को 10-15 सेकंड जोर से हिलाएं |
| **3** | दोनों को सपाट सतह पर रखें |
| **4** | 15-30 मिनट प्रतीक्षा करें |
| **5** | अवसादन देखें |

### परिणाम पढ़ना

| अवलोकन | परिणाम |
|:-------|:-------|
| **संदिग्ध जल्दी बैठे** | जमा हुआ - फेंक दें |
| **दोनों समान गति से बैठें** | उपयोग के लिए ठीक |

:::danger
**फ्रीज-क्षतिग्रस्त टीके:**
- स्थायी रूप से शक्ति खो देते हैं
- बहाल नहीं किए जा सकते
- फेंक देने चाहिए
:::

---

## 📊 VVM (वैक्सीन वायल मॉनिटर)

> गर्मी-संवेदनशील लेबल जो संचयी गर्मी एक्सपोजर के आधार पर रंग बदलता है

### VVM चरण

| चरण | दिखावट | कार्रवाई |
|:----|:------|:--------|
| **चरण 1** | आंतरिक वर्ग बाहरी से बहुत हल्का | ✅ उपयोग करें |
| **चरण 2** | आंतरिक वर्ग बाहरी से हल्का | ✅ उपयोग करें |
| **चरण 3** | आंतरिक वर्ग बाहरी के समान रंग | ⚠️ तुरंत उपयोग करें |
| **चरण 4** | आंतरिक वर्ग बाहरी से गहरा | ❌ फेंक दें |

:::info
**मुख्य बिंदु:** VVM रीडिंग + समाप्ति तिथि - उपयोग से पहले दोनों वैध होने चाहिए
:::

---

## 💉 पुनर्गठन

### पुनर्गठन की आवश्यकता वाले टीके

| टीका | डाइल्युएंट | खोलने के बाद फेंकने का समय |
|:-----|:---------|:---------------------------|
| **BCG** | विशिष्ट डाइल्युएंट | 4 घंटे |
| **खसरा/MR** | विशिष्ट डाइल्युएंट | 4 घंटे |
| **JE** | विशिष्ट डाइल्युएंट | 4 घंटे |

### पुनर्गठन के नियम

1. **केवल निर्माता का डाइल्युएंट उपयोग करें** - कभी विकल्प न दें
2. **असेप्टिक तकनीक बनाए रखें** - संदूषण रोकें
3. **उपयोग से ठीक पहले पुनर्गठित करें** - सत्र स्थल पर
4. **4 घंटे बाद फेंक दें** - या सत्र का अंत, जो भी पहले हो
5. **कभी पहले से मिश्रित न करें** - एक समय में एक वायल

:::danger
**गलत डाइल्युएंट उपयोग करने से:**
- टीका विफलता
- गंभीर प्रतिकूल प्रतिक्रियाएं
- कुछ मामलों में मृत्यु
:::

---

## 🗑️ ओपन वायल पॉलिसी

### मल्टी-डोज वायल

| टीका प्रकार | नीति |
|:-----------|:-----|
| **OPV, IPV** | VVM ठीक होने तक समाप्ति तक उपयोग |
| **DPT, TT, पेंटावैलेंट** | VVM ठीक होने तक समाप्ति तक उपयोग |
| **Hep B** | VVM ठीक होने तक समाप्ति तक उपयोग |
| **पुनर्गठित टीके** | 4 घंटे बाद फेंक दें |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. FEFO: पहले समाप्ति पहले बाहर
2. शेक टेस्ट: संदिग्ध जल्दी बैठे = जमा हुआ
3. VVM: आंतरिक बाहरी से गहरा = फेंक दें
4. पुनर्गठित टीके: अधिकतम 4 घंटे
5. कभी गलत डाइल्युएंट उपयोग न करें
6. मल्टी-डोज वायल: ओपन वायल पॉलिसी का पालन
7. डाइल्युएंट के लिए ऊपरी शेल्फ
:::
`
  },
  {
    id: 9,
    titleEn: "Injection Techniques",
    titleHi: "इंजेक्शन तकनीक",
    contentEn: `
# 💉 Injection Techniques

---

## 📍 Routes of Administration

### Three Main Routes

| Route | Angle | Depth | Vaccines |
|:------|:------|:------|:---------|
| **Intradermal (ID)** | 15° | Into dermis | BCG |
| **Subcutaneous (SC)** | 45° | Under skin, above muscle | MR, Measles, JE |
| **Intramuscular (IM)** | 90° | Into muscle | Pentavalent, IPV, DPT, TT, Hep B, PCV |

---

## 🎯 Injection Sites by Age

### Infants and Young Children

| Route | Site | Age |
|:------|:-----|:----|
| **ID** | Left upper arm (deltoid area) | All ages |
| **SC** | Right upper arm | All ages |
| **IM** | Anterolateral thigh | <2 years |
| **IM** | Deltoid (upper arm) | >2 years |

:::info
**Why Anterolateral Thigh for Infants?**
- Largest muscle mass in infants
- No major nerves or blood vessels
- Easy to access
- Less risk of injury
:::

### Visual Site Guide

\`\`\`
ANTEROLATERAL THIGH (for IM in infants):

  Front of Leg
       |
  +----|----+
  |    |    |
  | ●--|--  |  ← Inject HERE
  |    |    |     (outer middle third)
  +----|----+
       |
\`\`\`

---

## 💉 Needle Selection

| Route | Needle Size | Gauge |
|:------|:------------|:------|
| **ID** | 10mm (3/8 inch) | 26G |
| **SC** | 16mm (5/8 inch) | 24-25G |
| **IM (infant)** | 25mm (1 inch) | 22-23G |
| **IM (adult)** | 25-38mm | 22-23G |

---

## 🔒 AD Syringes (Auto-Disable)

> Single-use syringes that lock after one use

### Features

| Feature | Benefit |
|:--------|:--------|
| **Auto-lock** | Prevents reuse |
| **Pre-sterilized** | Ready to use |
| **Single use** | No transmission of infections |
| **Tamper evident** | Cannot be reused |

### How AD Syringe Works

\`\`\`
1. DRAW vaccine    2. INJECT          3. LOCKED
   [====|→]          [====>|]           [==X==]
   Plunger moves    Push plunger      Cannot pull back
   freely           to end            or reuse
\`\`\`

:::tip
**All UIP vaccines now use AD syringes** - Ensures injection safety
:::

---

## ✅ Safe Injection Practices

### Before Injection

| Step | Action |
|:-----|:-------|
| **1** | Verify vaccine and VVM |
| **2** | Check expiry date |
| **3** | Select correct site |
| **4** | Clean site with water (not alcohol for ID) |
| **5** | Use new AD syringe |

### During Injection

| Route | Technique |
|:------|:----------|
| **ID** | Stretch skin, insert at 15°, create wheal |
| **SC** | Pinch skin, insert at 45°, release, inject |
| **IM** | Stretch skin (children) or bunch muscle, 90° |

### After Injection

| Step | Action |
|:-----|:-------|
| **1** | Remove needle quickly |
| **2** | Apply gentle pressure (not rubbing) |
| **3** | Dispose syringe in hub cutter/safety box |
| **4** | Record in register |
| **5** | Observe child for 30 minutes |

---

## 🩹 Reconstitution Technique

### Steps

1. **Check vaccine and diluent** - Same manufacturer
2. **Check VVM and expiry** - Both valid
3. **Draw diluent** - Full amount into syringe
4. **Inject into vaccine vial** - Slowly along side
5. **Swirl gently** - Do not shake vigorously
6. **Withdraw dose** - Use immediately

:::warning
**Never:**
- Use water for injection as diluent
- Mix diluent from different manufacturers
- Pre-reconstitute vaccines
- Shake reconstituted vaccine vigorously
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. BCG: ID at 15° on left arm
2. MR/Measles: SC at 45° on right arm
3. Pentavalent/IPV: IM at 90° on anterolateral thigh (<2 years)
4. AD syringes: Auto-lock after single use
5. Clean site with water for BCG (not alcohol)
6. Reconstituted vaccines: Use within 4 hours
7. Observe 30 minutes post-injection for AEFI
:::
`,
    contentHi: `
# 💉 इंजेक्शन तकनीक

---

## 📍 प्रशासन के मार्ग

### तीन मुख्य मार्ग

| मार्ग | कोण | गहराई | टीके |
|:------|:----|:------|:-----|
| **इंट्राडर्मल (ID)** | 15° | डर्मिस में | BCG |
| **सबक्यूटेनियस (SC)** | 45° | त्वचा के नीचे, मांसपेशी के ऊपर | MR, खसरा, JE |
| **इंट्रामस्क्युलर (IM)** | 90° | मांसपेशी में | पेंटावैलेंट, IPV, DPT, TT, Hep B, PCV |

---

## 🎯 आयु के अनुसार इंजेक्शन स्थल

### शिशु और छोटे बच्चे

| मार्ग | स्थान | आयु |
|:------|:------|:----|
| **ID** | बायां ऊपरी बांह (डेल्टॉइड क्षेत्र) | सभी आयु |
| **SC** | दाहिना ऊपरी बांह | सभी आयु |
| **IM** | जांघ का बाहरी-सामने का भाग | <2 वर्ष |
| **IM** | डेल्टॉइड (ऊपरी बांह) | >2 वर्ष |

:::info
**शिशुओं के लिए जांघ का बाहरी-सामने का भाग क्यों?**
- शिशुओं में सबसे बड़ी मांसपेशी
- कोई प्रमुख नसें या रक्त वाहिकाएं नहीं
- आसान पहुंच
- चोट का कम जोखिम
:::

---

## 💉 सुई चयन

| मार्ग | सुई का आकार | गेज |
|:------|:------------|:----|
| **ID** | 10mm (3/8 इंच) | 26G |
| **SC** | 16mm (5/8 इंच) | 24-25G |
| **IM (शिशु)** | 25mm (1 इंच) | 22-23G |
| **IM (वयस्क)** | 25-38mm | 22-23G |

---

## 🔒 AD सीरिंज (ऑटो-डिसेबल)

> एकल उपयोग सीरिंज जो एक उपयोग के बाद लॉक हो जाती हैं

### विशेषताएं

| विशेषता | लाभ |
|:--------|:-----|
| **ऑटो-लॉक** | पुन: उपयोग रोकता है |
| **पूर्व-निष्फल** | उपयोग के लिए तैयार |
| **एकल उपयोग** | संक्रमण संचरण नहीं |
| **टैम्पर एविडेंट** | पुन: उपयोग नहीं किया जा सकता |

:::tip
**सभी UIP टीके अब AD सीरिंज का उपयोग करते हैं** - इंजेक्शन सुरक्षा सुनिश्चित करता है
:::

---

## ✅ सुरक्षित इंजेक्शन प्रथाएं

### इंजेक्शन से पहले

| चरण | कार्रवाई |
|:-----|:--------|
| **1** | टीका और VVM सत्यापित करें |
| **2** | समाप्ति तिथि जांचें |
| **3** | सही स्थान चुनें |
| **4** | पानी से स्थान साफ करें (ID के लिए अल्कोहल नहीं) |
| **5** | नई AD सीरिंज का उपयोग करें |

### इंजेक्शन के दौरान

| मार्ग | तकनीक |
|:------|:-------|
| **ID** | त्वचा खींचें, 15° पर डालें, व्हील बनाएं |
| **SC** | त्वचा चुटकी लें, 45° पर डालें, छोड़ें, इंजेक्ट करें |
| **IM** | त्वचा खींचें (बच्चे) या मांसपेशी इकट्ठा करें, 90° |

### इंजेक्शन के बाद

| चरण | कार्रवाई |
|:-----|:--------|
| **1** | सुई जल्दी निकालें |
| **2** | हल्का दबाव लगाएं (रगड़ें नहीं) |
| **3** | हब कटर/सेफ्टी बॉक्स में सीरिंज का निपटान |
| **4** | रजिस्टर में रिकॉर्ड करें |
| **5** | 30 मिनट बच्चे का निरीक्षण करें |

---

## 🩹 पुनर्गठन तकनीक

### चरण

1. **टीका और डाइल्युएंट जांचें** - एक ही निर्माता
2. **VVM और समाप्ति जांचें** - दोनों वैध
3. **डाइल्युएंट खींचें** - सीरिंज में पूरी मात्रा
4. **टीके की वायल में इंजेक्ट करें** - धीरे-धीरे किनारे से
5. **धीरे से घुमाएं** - जोर से न हिलाएं
6. **खुराक निकालें** - तुरंत उपयोग करें

:::warning
**कभी नहीं:**
- डाइल्युएंट के रूप में इंजेक्शन के लिए पानी
- विभिन्न निर्माताओं के डाइल्युएंट मिलाएं
- पहले से टीके पुनर्गठित करें
- पुनर्गठित टीके को जोर से हिलाएं
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. BCG: ID बाएं बांह पर 15° पर
2. MR/खसरा: SC दाहिने बांह पर 45° पर
3. पेंटावैलेंट/IPV: IM जांघ के बाहरी-सामने भाग पर 90° (<2 वर्ष)
4. AD सीरिंज: एकल उपयोग के बाद ऑटो-लॉक
5. BCG के लिए पानी से साफ करें (अल्कोहल नहीं)
6. पुनर्गठित टीके: 4 घंटे के भीतर उपयोग
7. AEFI के लिए इंजेक्शन के बाद 30 मिनट निरीक्षण
:::
`
  },
  {
    id: 10,
    titleEn: "Conducting Immunization Sessions",
    titleHi: "टीकाकरण सत्र संचालन",
    contentEn: `
# 📋 Conducting Immunization Sessions

---

## 📝 Micro-Planning

> Detailed planning for immunization coverage in assigned area

### Components of Micro-Plan

| Component | Details |
|:----------|:--------|
| **Head count** | Total population, 0-5 year children |
| **Session sites** | Fixed, outreach locations |
| **Due list** | Children due for vaccination |
| **Schedule** | Date and time of sessions |
| **Logistics** | Vaccines, syringes, cold chain |

---

## 📊 Preparing Due List

### Sources of Information

| Source | Use |
|:-------|:----|
| **Immunization register** | Previous vaccination records |
| **Birth register** | New births |
| **ASHA diary** | Community records |
| **RCH portal** | Digital tracking |
| **House visits** | Verification |

### Due List Categories

| Category | Action |
|:---------|:-------|
| **Due** | Scheduled for this session |
| **Overdue** | Missed previous doses |
| **Left out** | Never started vaccination |
| **Drop out** | Started but didn't complete |

---

## 📦 Session Preparation

### One Day Before

| Item | Action |
|:-----|:-------|
| **Vaccines** | Ensure adequate stock |
| **Diluents** | Match with vaccines |
| **AD syringes** | 10% extra for wastage |
| **Hub cutter/Safety box** | For disposal |
| **Ice packs** | Freeze overnight |

### On Session Day

| Step | Action |
|:-----|:-------|
| **1** | Condition ice packs (15-30 minutes) |
| **2** | Load vaccine carrier correctly |
| **3** | Check due list and registers |
| **4** | Carry IEC materials |
| **5** | Reach site 30 minutes early |

---

## 🏥 Session Site Setup

### Requirements

| Requirement | Purpose |
|:------------|:--------|
| **Clean, shaded area** | Comfort and safety |
| **Seating for mothers** | Waiting area |
| **Table for vaccines** | Organized workspace |
| **Observation area** | 30-minute monitoring |
| **Waste disposal** | Hub cutter, safety box |

### Session Flow

\`\`\`
1. REGISTRATION          2. SCREENING
   ↓                        ↓
   Record details           Check contraindications
   
3. VACCINATION           4. OBSERVATION
   ↓                        ↓
   Administer vaccines      Wait 30 minutes
   
5. RECORDING             6. NEXT DATE
   ↓                        ↓
   Update register          Inform return date
\`\`\`

---

## ⚠️ Screening Before Vaccination

### Contraindications to Check

| Condition | Action |
|:----------|:-------|
| **High fever** | Postpone, treat illness |
| **Severe illness** | Postpone |
| **Previous severe reaction** | Refer to higher facility |
| **Immunocompromised (for live vaccines)** | Avoid live vaccines |

### NOT Contraindications

:::info
**These are NOT reasons to postpone:**
- Mild fever or cold
- Diarrhea (except for OPV if severe)
- Minor illness
- Prematurity
- Malnutrition
- Recent exposure to infection
:::

---

## 📝 Recording and Reporting

### At Session

| Record | Purpose |
|:-------|:--------|
| **Immunization register** | Child-wise details |
| **Tally sheet** | Session summary |
| **MCP card** | Mother's record |
| **ASHA diary** | Community tracking |

### After Session

| Action | Timeline |
|:-------|:---------|
| **Return unused vaccines** | Same day |
| **Complete reports** | Same day |
| **Update RCH portal** | Within 48 hours |
| **Plan next session** | Before month end |

---

## 📈 Dropout Tracking

### Dropout Rate Formula

:::info
**Dropout Rate Calculation:**

\`\`\`
Dropout Rate = [(Dose 1 - Dose 3) / Dose 1] × 100
\`\`\`

**Example:** BCG given to 100, Measles to 80
Dropout = [(100-80)/100] × 100 = **20%**
:::

### Acceptable Levels

| Rate | Status |
|:-----|:-------|
| **<10%** | ✅ Good program |
| **10-20%** | ⚠️ Needs improvement |
| **>20%** | ❌ Urgent action needed |

### Reasons for Dropout

| Reason | Solution |
|:-------|:---------|
| **Unaware of next date** | Clear communication |
| **Fear of side effects** | Counseling |
| **Long distance** | Outreach sessions |
| **Mother working** | Flexible timing |
| **Child sick on due date** | Home visits |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Micro-planning includes head count, due list, logistics
2. Condition ice packs before loading carrier
3. Reach session site 30 minutes early
4. Screen for contraindications (fever is NOT mild cold)
5. Observe children 30 minutes after vaccination
6. Dropout rate >10% needs attention
7. Update RCH portal within 48 hours
:::
`,
    contentHi: `
# 📋 टीकाकरण सत्र संचालन

---

## 📝 माइक्रो-प्लानिंग

> निर्धारित क्षेत्र में टीकाकरण कवरेज के लिए विस्तृत योजना

### माइक्रो-प्लान के घटक

| घटक | विवरण |
|:----|:-------|
| **सिर गणना** | कुल जनसंख्या, 0-5 वर्ष के बच्चे |
| **सत्र स्थल** | स्थायी, आउटरीच स्थान |
| **देय सूची** | टीकाकरण के लिए देय बच्चे |
| **अनुसूची** | सत्रों की तारीख और समय |
| **लॉजिस्टिक्स** | टीके, सीरिंज, कोल्ड चेन |

---

## 📊 देय सूची तैयार करना

### जानकारी के स्रोत

| स्रोत | उपयोग |
|:------|:-------|
| **टीकाकरण रजिस्टर** | पिछले टीकाकरण रिकॉर्ड |
| **जन्म रजिस्टर** | नए जन्म |
| **आशा डायरी** | सामुदायिक रिकॉर्ड |
| **RCH पोर्टल** | डिजिटल ट्रैकिंग |
| **घर की विज़िट** | सत्यापन |

### देय सूची श्रेणियां

| श्रेणी | कार्रवाई |
|:-------|:--------|
| **देय** | इस सत्र के लिए निर्धारित |
| **अतिदेय** | पिछली खुराक छूट गई |
| **छोड़ दिए गए** | कभी टीकाकरण शुरू नहीं किया |
| **ड्रॉप आउट** | शुरू किया लेकिन पूरा नहीं किया |

---

## 📦 सत्र की तैयारी

### एक दिन पहले

| वस्तु | कार्रवाई |
|:------|:--------|
| **टीके** | पर्याप्त स्टॉक सुनिश्चित करें |
| **डाइल्युएंट** | टीकों से मिलान करें |
| **AD सीरिंज** | बर्बादी के लिए 10% अतिरिक्त |
| **हब कटर/सेफ्टी बॉक्स** | निपटान के लिए |
| **आइस पैक** | रात भर जमाएं |

### सत्र के दिन

| चरण | कार्रवाई |
|:-----|:--------|
| **1** | आइस पैक कंडीशन करें (15-30 मिनट) |
| **2** | वैक्सीन कैरियर सही ढंग से लोड करें |
| **3** | देय सूची और रजिस्टर जांचें |
| **4** | IEC सामग्री ले जाएं |
| **5** | स्थल पर 30 मिनट पहले पहुंचें |

---

## 🏥 सत्र स्थल सेटअप

### आवश्यकताएं

| आवश्यकता | उद्देश्य |
|:---------|:---------|
| **साफ, छायादार क्षेत्र** | आराम और सुरक्षा |
| **माताओं के लिए बैठक** | प्रतीक्षा क्षेत्र |
| **टीकों के लिए मेज** | व्यवस्थित कार्यक्षेत्र |
| **अवलोकन क्षेत्र** | 30 मिनट निगरानी |
| **कचरा निपटान** | हब कटर, सेफ्टी बॉक्स |

---

## ⚠️ टीकाकरण से पहले स्क्रीनिंग

### जांच करने के लिए मतभेद

| स्थिति | कार्रवाई |
|:-------|:--------|
| **तेज बुखार** | स्थगित करें, बीमारी का इलाज करें |
| **गंभीर बीमारी** | स्थगित करें |
| **पिछली गंभीर प्रतिक्रिया** | उच्च सुविधा में रेफर करें |
| **प्रतिरक्षा-समझौता (जीवित टीकों के लिए)** | जीवित टीकों से बचें |

### मतभेद नहीं

:::info
**ये स्थगित करने के कारण नहीं हैं:**
- हल्का बुखार या सर्दी
- दस्त (गंभीर होने पर OPV को छोड़कर)
- मामूली बीमारी
- समय से पहले जन्म
- कुपोषण
- हाल ही में संक्रमण के संपर्क में आना
:::

---

## 📈 ड्रॉपआउट ट्रैकिंग

### ड्रॉपआउट दर फॉर्मूला

:::info
**ड्रॉपआउट दर गणना:**

\`\`\`
ड्रॉपआउट दर = [(खुराक 1 - खुराक 3) / खुराक 1] × 100
\`\`\`

**उदाहरण:** BCG 100 को दिया, खसरा 80 को
ड्रॉपआउट = [(100-80)/100] × 100 = **20%**
:::

### स्वीकार्य स्तर

| दर | स्थिति |
|:---|:-------|
| **<10%** | ✅ अच्छा कार्यक्रम |
| **10-20%** | ⚠️ सुधार की जरूरत |
| **>20%** | ❌ तत्काल कार्रवाई |

### ड्रॉपआउट के कारण

| कारण | समाधान |
|:-----|:-------|
| **अगली तारीख की जानकारी नहीं** | स्पष्ट संचार |
| **साइड इफेक्ट्स का डर** | परामर्श |
| **लंबी दूरी** | आउटरीच सत्र |
| **माता काम पर** | लचीला समय |
| **देय तारीख पर बच्चा बीमार** | घर की विज़िट |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. माइक्रो-प्लानिंग में सिर गणना, देय सूची, लॉजिस्टिक्स
2. कैरियर लोड करने से पहले आइस पैक कंडीशन करें
3. सत्र स्थल पर 30 मिनट पहले पहुंचें
4. मतभेदों के लिए स्क्रीन करें (हल्का सर्दी नहीं)
5. टीकाकरण के बाद 30 मिनट बच्चों का निरीक्षण
6. ड्रॉपआउट दर >10% पर ध्यान दें
7. RCH पोर्टल 48 घंटे के भीतर अपडेट करें
:::
`
  },
  {
    id: 11,
    titleEn: "AEFI Management",
    titleHi: "AEFI प्रबंधन",
    contentEn: `
# ⚠️ AEFI Management

---

## 📖 Understanding AEFI

> **AEFI (Adverse Event Following Immunization):** Any untoward medical occurrence that follows immunization and does not necessarily have a causal relationship with the vaccine.

---

## 📊 Classification of AEFI

### By Cause

| Type | Description | Examples |
|:-----|:------------|:---------|
| **Vaccine product-related** | Due to vaccine properties | Local reactions, fever |
| **Vaccine quality defect** | Manufacturing error | Contamination |
| **Immunization error** | Wrong technique | Abscess, nerve damage |
| **Immunization anxiety** | Fear-related | Fainting, hyperventilation |
| **Coincidental** | Unrelated event | Pre-existing illness |

### By Severity

| Category | Definition |
|:---------|:-----------|
| **Minor** | Local pain, mild fever, no treatment needed |
| **Severe** | Requires hospitalization or causes significant illness |
| **Serious** | Death, life-threatening, permanent disability |

---

## 🔴 Common AEFI by Vaccine

| Vaccine | Common Reactions | Rare/Severe |
|:--------|:-----------------|:------------|
| **BCG** | Local ulcer, lymphadenitis | Disseminated BCG (immunocompromised) |
| **DPT** | Local pain, fever | Encephalopathy, HHE |
| **OPV** | None usually | VAPP (very rare) |
| **Measles/MR** | Fever, rash | Encephalitis, thrombocytopenia |
| **Pentavalent** | Local reaction, fever | Anaphylaxis |

---

## 🚨 Anaphylaxis Recognition

> Medical emergency requiring immediate treatment

### Signs and Symptoms

| System | Signs |
|:-------|:------|
| **Skin** | Urticaria (hives), angioedema, flushing |
| **Respiratory** | Stridor, wheeze, dyspnea, cyanosis |
| **Cardiovascular** | Hypotension, weak pulse, dizziness |
| **GI** | Nausea, vomiting, abdominal pain |
| **General** | Anxiety, feeling of impending doom |

### Onset Time

:::danger
**Anaphylaxis usually occurs within:**
- **5-30 minutes** after injection
- Rarely up to 2 hours
- This is why **30-minute observation** is critical!
:::

---

## 💉 Anaphylaxis Management

### IMMEDIATE ACTIONS

| Step | Action |
|:-----|:-------|
| **1** | Call for help |
| **2** | Lay patient flat, raise legs |
| **3** | Give **Adrenaline IM** immediately |
| **4** | Maintain airway |
| **5** | Give oxygen if available |
| **6** | Start IV fluids |
| **7** | Arrange emergency transport |

### Adrenaline Dosing (1:1000 = 1mg/ml)

| Age/Weight | Dose |
|:-----------|:-----|
| **<6 months (<6 kg)** | 0.05 ml (50 mcg) |
| **6 months-6 years (6-20 kg)** | 0.1-0.2 ml (100-200 mcg) |
| **6-12 years (20-40 kg)** | 0.3 ml (300 mcg) |
| **>12 years and adults** | 0.5 ml (500 mcg) |

:::warning
**Route:** Intramuscular (IM) in anterolateral thigh
**Can repeat:** Every 5-15 minutes if needed
:::

### After Initial Response

| Action | Details |
|:-------|:--------|
| **Continue monitoring** | Vital signs every 5 minutes |
| **Antihistamine** | Chlorpheniramine/Promethazine |
| **Steroid** | Hydrocortisone IV if available |
| **Transport** | To hospital for observation |
| **Watch for** | Biphasic reaction (4-12 hours) |

---

## 📝 AEFI Reporting

### What to Report

| Must Report | Timeline |
|:------------|:---------|
| **All deaths** | Within 24 hours |
| **Hospitalization** | Within 24 hours |
| **Cluster events** | Within 24 hours |
| **Severe local reaction** | Monthly |
| **Minor reactions** | Monthly (aggregate) |

### Reporting Flow

\`\`\`
Session Site → PHC/SC → District → State → National

Serious AEFI → Immediate reporting required!
\`\`\`

### Information to Record

| Item | Details |
|:-----|:--------|
| **Patient details** | Name, age, sex, address |
| **Vaccine details** | Name, batch, manufacturer |
| **Event details** | Time, symptoms, severity |
| **Treatment given** | Medications, outcome |
| **Investigation findings** | If applicable |

---

## 🏥 AEFI Kit Contents

### Essential Items at Session Site

| Item | Purpose |
|:-----|:--------|
| **Adrenaline (1:1000)** | Anaphylaxis treatment |
| **Disposable syringes** | Drug administration |
| **Cotton, spirit swabs** | Injection site preparation |
| **Emergency contact numbers** | Quick referral |

### At PHC Level (Additional)

| Item | Purpose |
|:-----|:--------|
| **IV fluids** | Shock management |
| **Antihistamines** | Allergic reaction |
| **Hydrocortisone** | Severe allergy |
| **Oxygen** | Respiratory support |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. AEFI: Any adverse event after immunization
2. Observe all vaccinees for 30 minutes
3. Anaphylaxis: Give Adrenaline IM immediately
4. Adrenaline dose: 0.01 ml/kg of 1:1000
5. Report serious AEFI within 24 hours
6. AEFI kit must be available at every session
7. Deaths and clusters = immediate reporting
:::
`,
    contentHi: `
# ⚠️ AEFI प्रबंधन

---

## 📖 AEFI को समझना

> **AEFI (टीकाकरण के बाद प्रतिकूल घटना):** टीकाकरण के बाद होने वाली कोई भी अवांछित चिकित्सा घटना जिसका टीके से कारण संबंध आवश्यक नहीं।

---

## 📊 AEFI का वर्गीकरण

### कारण के अनुसार

| प्रकार | विवरण | उदाहरण |
|:-------|:-------|:-------|
| **टीका उत्पाद-संबंधित** | टीके के गुणों के कारण | स्थानीय प्रतिक्रियाएं, बुखार |
| **टीका गुणवत्ता दोष** | निर्माण त्रुटि | संदूषण |
| **टीकाकरण त्रुटि** | गलत तकनीक | फोड़ा, नस क्षति |
| **टीकाकरण चिंता** | भय-संबंधित | बेहोशी, हाइपरवेंटिलेशन |
| **संयोग** | असंबंधित घटना | पहले से मौजूद बीमारी |

### गंभीरता के अनुसार

| श्रेणी | परिभाषा |
|:-------|:--------|
| **मामूली** | स्थानीय दर्द, हल्का बुखार, उपचार की जरूरत नहीं |
| **गंभीर** | अस्पताल में भर्ती या महत्वपूर्ण बीमारी |
| **गंभीर** | मृत्यु, जीवन-धमकी, स्थायी विकलांगता |

---

## 🔴 टीके के अनुसार सामान्य AEFI

| टीका | सामान्य प्रतिक्रियाएं | दुर्लभ/गंभीर |
|:-----|:---------------------|:-------------|
| **BCG** | स्थानीय अल्सर, लिम्फैडेनाइटिस | प्रसारित BCG |
| **DPT** | स्थानीय दर्द, बुखार | एन्सेफैलोपैथी, HHE |
| **OPV** | आमतौर पर कोई नहीं | VAPP (बहुत दुर्लभ) |
| **खसरा/MR** | बुखार, दाने | एन्सेफलाइटिस |
| **पेंटावैलेंट** | स्थानीय प्रतिक्रिया, बुखार | एनाफिलेक्सिस |

---

## 🚨 एनाफिलेक्सिस पहचान

> तत्काल उपचार की आवश्यकता वाली चिकित्सा आपातकाल

### संकेत और लक्षण

| प्रणाली | संकेत |
|:--------|:------|
| **त्वचा** | पित्ती, एंजियोएडिमा, फ्लशिंग |
| **श्वसन** | स्ट्राइडर, व्हीज, डिस्पनिया, सायनोसिस |
| **हृदय** | हाइपोटेंशन, कमजोर नब्ज, चक्कर |
| **GI** | मतली, उल्टी, पेट दर्द |
| **सामान्य** | चिंता, आसन्न विपदा की भावना |

### शुरुआत का समय

:::danger
**एनाफिलेक्सिस आमतौर पर होता है:**
- इंजेक्शन के **5-30 मिनट** बाद
- शायद ही कभी 2 घंटे तक
- इसलिए **30 मिनट अवलोकन** महत्वपूर्ण!
:::

---

## 💉 एनाफिलेक्सिस प्रबंधन

### तत्काल कार्रवाई

| चरण | कार्रवाई |
|:-----|:--------|
| **1** | मदद के लिए बुलाएं |
| **2** | रोगी को सपाट लिटाएं, पैर ऊपर उठाएं |
| **3** | तुरंत **एड्रेनालाइन IM** दें |
| **4** | वायुमार्ग बनाए रखें |
| **5** | उपलब्ध हो तो ऑक्सीजन दें |
| **6** | IV तरल पदार्थ शुरू करें |
| **7** | आपातकालीन परिवहन की व्यवस्था करें |

### एड्रेनालाइन खुराक (1:1000 = 1mg/ml)

| आयु/वजन | खुराक |
|:---------|:------|
| **<6 महीने (<6 kg)** | 0.05 ml (50 mcg) |
| **6 महीने-6 वर्ष (6-20 kg)** | 0.1-0.2 ml (100-200 mcg) |
| **6-12 वर्ष (20-40 kg)** | 0.3 ml (300 mcg) |
| **>12 वर्ष और वयस्क** | 0.5 ml (500 mcg) |

:::warning
**मार्ग:** इंट्रामस्क्युलर (IM) जांघ के बाहरी-सामने भाग में
**दोहरा सकते हैं:** जरूरत पड़ने पर हर 5-15 मिनट
:::

---

## 📝 AEFI रिपोर्टिंग

### क्या रिपोर्ट करें

| रिपोर्ट करना होगा | समयसीमा |
|:------------------|:---------|
| **सभी मृत्यु** | 24 घंटे के भीतर |
| **अस्पताल में भर्ती** | 24 घंटे के भीतर |
| **क्लस्टर घटनाएं** | 24 घंटे के भीतर |
| **गंभीर स्थानीय प्रतिक्रिया** | मासिक |
| **मामूली प्रतिक्रियाएं** | मासिक (समग्र) |

### रिपोर्टिंग प्रवाह

\`\`\`
सत्र स्थल → PHC/SC → जिला → राज्य → राष्ट्रीय

गंभीर AEFI → तत्काल रिपोर्टिंग आवश्यक!
\`\`\`

---

## 🏥 AEFI किट सामग्री

### सत्र स्थल पर आवश्यक वस्तुएं

| वस्तु | उद्देश्य |
|:------|:---------|
| **एड्रेनालाइन (1:1000)** | एनाफिलेक्सिस उपचार |
| **डिस्पोजेबल सीरिंज** | दवा प्रशासन |
| **कॉटन, स्पिरिट स्वैब** | इंजेक्शन साइट तैयारी |
| **आपातकालीन संपर्क नंबर** | त्वरित रेफरल |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. AEFI: टीकाकरण के बाद कोई भी प्रतिकूल घटना
2. सभी टीकाकृतों का 30 मिनट निरीक्षण
3. एनाफिलेक्सिस: तुरंत एड्रेनालाइन IM दें
4. एड्रेनालाइन खुराक: 1:1000 का 0.01 ml/kg
5. गंभीर AEFI 24 घंटे के भीतर रिपोर्ट करें
6. AEFI किट हर सत्र में उपलब्ध होनी चाहिए
7. मृत्यु और क्लस्टर = तत्काल रिपोर्टिंग
:::
`
  },
  {
    id: 12,
    titleEn: "Campaigns & Community Engagement",
    titleHi: "अभियान और सामुदायिक सहभागिता",
    contentEn: `
# 🎯 Campaigns & Community Engagement

---

## 🏥 Special Immunization Campaigns

### Pulse Polio Immunization (PPI)

| Feature | Details |
|:--------|:--------|
| **Target** | All children 0-5 years |
| **Vaccine** | 2 drops OPV |
| **Frequency** | National Immunization Days (NIDs) |
| **Strategy** | Booth + house-to-house |
| **Goal** | Polio eradication |

### Measles-Rubella Campaign

| Feature | Details |
|:--------|:--------|
| **Target** | Children 9 months - 15 years |
| **Vaccine** | MR vaccine |
| **Setting** | Schools + outreach |
| **Purpose** | Eliminate measles, prevent CRS |

---

## 🎪 Mission Indradhanush

> Intensified immunization program to reach unvaccinated and partially vaccinated children

### Original Mission Indradhanush (2014)

| Feature | Details |
|:--------|:--------|
| **Focus** | 201 high focus districts |
| **Target** | Left out, dropped out children |
| **Sessions** | 7 consecutive days/month |
| **Goal** | 90% coverage |

### Intensified Mission Indradhanush (IMI)

| Version | Year | Features |
|:--------|:-----|:---------|
| **IMI 1.0** | 2017 | 4 rounds, 7 days each |
| **IMI 2.0** | 2019 | 121 districts, block-level focus |
| **IMI 3.0** | 2021 | 250 districts, COVID era |
| **IMI 4.0** | 2022 | Focus on urban, tribal areas |

### IMI Strategy

\`\`\`
Pre-Campaign          During Campaign         Post-Campaign
    ↓                       ↓                      ↓
- Microplanning         - Fixed sites          - Validation
- IEC activities        - Outreach             - Data analysis
- Training              - Mobile teams         - Gap identification
- Social mobilization   - Special focus        - Follow-up
                          areas
\`\`\`

---

## 👥 Community Mobilization

### Key Stakeholders

| Stakeholder | Role |
|:------------|:-----|
| **ASHA** | House visits, mobilization, tracking |
| **AWW** | Center-based sessions, awareness |
| **PRI members** | Community support, advocacy |
| **Self-help groups** | Peer education, support |
| **Religious leaders** | Address vaccine hesitancy |
| **Teachers** | School-based vaccination |

### Mobilization Activities

| Activity | Purpose |
|:---------|:--------|
| **Home visits** | Identify due children, counsel |
| **Community meetings** | Address concerns, build trust |
| **IEC materials** | Posters, pamphlets, videos |
| **Announcements** | Miking, loudspeakers |
| **Social media** | WhatsApp groups, Facebook |

---

## 😰 Addressing Vaccine Hesitancy

### Common Reasons for Hesitancy

| Reason | Response |
|:-------|:---------|
| **Fear of side effects** | Explain minor reactions are normal |
| **Religious concerns** | Engage religious leaders |
| **Misinformation** | Provide correct information |
| **Past bad experience** | Address specific concerns |
| **Don't think vaccines work** | Share success stories |
| **Inconvenient timing** | Flexible session scheduling |

### Communication Strategies

| Strategy | Implementation |
|:---------|:---------------|
| **Empathy** | Listen to concerns first |
| **Evidence** | Share facts and data |
| **Stories** | Use success stories from community |
| **Trusted voices** | Involve respected community members |
| **Repetition** | Multiple touchpoints |

:::tip
**RESPECT Model:**
- **R**ecognize concerns
- **E**mpathize genuinely
- **S**upply factual information
- **P**rovide alternatives
- **E**ncourage questions
- **C**ommit to follow-up
- **T**hank for listening
:::

---

## 📅 VHSND (Village Health Sanitation and Nutrition Day)

> Monthly fixed-day platform for health services delivery

### Services Provided

| Service | Details |
|:--------|:--------|
| **Immunization** | All routine vaccines |
| **ANC checkup** | Pregnant women registration |
| **Growth monitoring** | Under-5 children |
| **Health education** | Nutrition, hygiene |
| **Referrals** | For complicated cases |

### VHSND Organization

| Role | Responsibility |
|:-----|:---------------|
| **ANM** | Clinical services, vaccines |
| **ASHA** | Mobilization, follow-up |
| **AWW** | Venue, nutrition services |
| **AWC** | Session site |

---

## 📱 Digital Initiatives

### U-WIN Portal

| Feature | Benefit |
|:--------|:--------|
| **Digital registry** | Individual tracking |
| **Due list generation** | Automated alerts |
| **Vaccination certificate** | Digital record |
| **National database** | Unified tracking |

### eVIN

| Feature | Use |
|:--------|:----|
| **Stock tracking** | Prevent stock-outs |
| **Temperature monitoring** | Cold chain alerts |
| **Distribution planning** | Optimize logistics |

---

## 📊 Coverage Monitoring

### Key Indicators

| Indicator | Formula |
|:----------|:--------|
| **Full immunization** | Children receiving all vaccines / Total children × 100 |
| **BCG to Measles dropout** | (BCG - Measles) / BCG × 100 |
| **Penta 1-3 dropout** | (Penta1 - Penta3) / Penta1 × 100 |
| **Left out** | Never received any vaccine |

### Acceptable Levels

| Indicator | Target |
|:----------|:-------|
| **Full immunization** | >90% |
| **Dropout rate** | <10% |
| **Left out** | <5% |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Pulse Polio: All 0-5 years children, 2 drops OPV
2. Mission Indradhanush: Reach left out and dropped out
3. IMI: Intensified 7-day sessions for rapid coverage
4. VHSND: Monthly fixed day for all health services
5. Vaccine hesitancy: RESPECT model communication
6. ASHA/AWW: Key to community mobilization
7. Target: >90% full immunization, <10% dropout
:::
`,
    contentHi: `
# 🎯 अभियान और सामुदायिक सहभागिता

---

## 🏥 विशेष टीकाकरण अभियान

### पल्स पोलियो टीकाकरण (PPI)

| विशेषता | विवरण |
|:--------|:-------|
| **लक्ष्य** | सभी 0-5 वर्ष के बच्चे |
| **टीका** | 2 बूंद OPV |
| **आवृत्ति** | राष्ट्रीय टीकाकरण दिवस (NIDs) |
| **रणनीति** | बूथ + घर-घर |
| **लक्ष्य** | पोलियो उन्मूलन |

### खसरा-रूबेला अभियान

| विशेषता | विवरण |
|:--------|:-------|
| **लक्ष्य** | 9 महीने - 15 वर्ष के बच्चे |
| **टीका** | MR टीका |
| **सेटिंग** | स्कूल + आउटरीच |
| **उद्देश्य** | खसरा उन्मूलन, CRS रोकथाम |

---

## 🎪 मिशन इंद्रधनुष

> टीकाकरण से वंचित और आंशिक रूप से टीकाकृत बच्चों तक पहुंचने के लिए गहन टीकाकरण कार्यक्रम

### मूल मिशन इंद्रधनुष (2014)

| विशेषता | विवरण |
|:--------|:-------|
| **फोकस** | 201 उच्च फोकस जिले |
| **लक्ष्य** | छोड़ दिए गए, ड्रॉप आउट बच्चे |
| **सत्र** | 7 लगातार दिन/महीना |
| **लक्ष्य** | 90% कवरेज |

### इंटेंसिफाइड मिशन इंद्रधनुष (IMI)

| संस्करण | वर्ष | विशेषताएं |
|:--------|:-----|:----------|
| **IMI 1.0** | 2017 | 4 राउंड, प्रत्येक 7 दिन |
| **IMI 2.0** | 2019 | 121 जिले, ब्लॉक-स्तरीय फोकस |
| **IMI 3.0** | 2021 | 250 जिले, COVID युग |
| **IMI 4.0** | 2022 | शहरी, जनजातीय क्षेत्रों पर फोकस |

---

## 👥 सामुदायिक लामबंदी

### प्रमुख हितधारक

| हितधारक | भूमिका |
|:--------|:-------|
| **आशा** | घर विज़िट, लामबंदी, ट्रैकिंग |
| **AWW** | केंद्र-आधारित सत्र, जागरूकता |
| **PRI सदस्य** | सामुदायिक समर्थन, वकालत |
| **स्व-सहायता समूह** | सहकर्मी शिक्षा, समर्थन |
| **धार्मिक नेता** | टीका संकोच को संबोधित |
| **शिक्षक** | स्कूल-आधारित टीकाकरण |

### लामबंदी गतिविधियां

| गतिविधि | उद्देश्य |
|:---------|:---------|
| **घर विज़िट** | देय बच्चों की पहचान, परामर्श |
| **सामुदायिक बैठकें** | चिंताओं को संबोधित, विश्वास निर्माण |
| **IEC सामग्री** | पोस्टर, पैम्फलेट, वीडियो |
| **घोषणाएं** | माइकिंग, लाउडस्पीकर |
| **सोशल मीडिया** | WhatsApp समूह, Facebook |

---

## 😰 टीका संकोच को संबोधित करना

### संकोच के सामान्य कारण

| कारण | प्रतिक्रिया |
|:-----|:---------|
| **साइड इफेक्ट्स का डर** | समझाएं कि मामूली प्रतिक्रियाएं सामान्य हैं |
| **धार्मिक चिंताएं** | धार्मिक नेताओं को शामिल करें |
| **गलत सूचना** | सही जानकारी प्रदान करें |
| **पिछला बुरा अनुभव** | विशिष्ट चिंताओं को संबोधित करें |
| **नहीं लगता टीके काम करते** | सफलता की कहानियां साझा करें |
| **असुविधाजनक समय** | लचीला सत्र शेड्यूलिंग |

### संचार रणनीतियां

:::tip
**RESPECT मॉडल:**
- **R**ecognize चिंताओं को पहचानें
- **E**mpathize वास्तव में सहानुभूति
- **S**upply तथ्यात्मक जानकारी
- **P**rovide विकल्प प्रदान करें
- **E**ncourage प्रश्नों को प्रोत्साहित करें
- **C**ommit अनुवर्ती के लिए प्रतिबद्ध
- **T**hank सुनने के लिए धन्यवाद
:::

---

## 📅 VHSND (ग्राम स्वास्थ्य स्वच्छता और पोषण दिवस)

> स्वास्थ्य सेवाओं के वितरण के लिए मासिक निश्चित-दिवस मंच

### प्रदान की जाने वाली सेवाएं

| सेवा | विवरण |
|:-----|:-------|
| **टीकाकरण** | सभी नियमित टीके |
| **ANC जांच** | गर्भवती महिला पंजीकरण |
| **विकास निगरानी** | 5 वर्ष से कम बच्चे |
| **स्वास्थ्य शिक्षा** | पोषण, स्वच्छता |
| **रेफरल** | जटिल मामलों के लिए |

---

## 📱 डिजिटल पहल

### U-WIN पोर्टल

| विशेषता | लाभ |
|:--------|:-----|
| **डिजिटल रजिस्ट्री** | व्यक्तिगत ट्रैकिंग |
| **देय सूची जनरेशन** | स्वचालित अलर्ट |
| **टीकाकरण प्रमाणपत्र** | डिजिटल रिकॉर्ड |
| **राष्ट्रीय डेटाबेस** | एकीकृत ट्रैकिंग |

---

## 📊 कवरेज निगरानी

### प्रमुख संकेतक

| संकेतक | फॉर्मूला |
|:-------|:--------|
| **पूर्ण टीकाकरण** | सभी टीके प्राप्त बच्चे / कुल बच्चे × 100 |
| **BCG से खसरा ड्रॉपआउट** | (BCG - खसरा) / BCG × 100 |
| **Penta 1-3 ड्रॉपआउट** | (Penta1 - Penta3) / Penta1 × 100 |
| **छोड़ दिए गए** | कभी कोई टीका नहीं मिला |

### स्वीकार्य स्तर

| संकेतक | लक्ष्य |
|:-------|:-------|
| **पूर्ण टीकाकरण** | >90% |
| **ड्रॉपआउट दर** | <10% |
| **छोड़ दिए गए** | <5% |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. पल्स पोलियो: सभी 0-5 वर्ष के बच्चे, 2 बूंद OPV
2. मिशन इंद्रधनुष: छोड़ दिए गए और ड्रॉप आउट तक पहुंचें
3. IMI: त्वरित कवरेज के लिए गहन 7-दिवसीय सत्र
4. VHSND: सभी स्वास्थ्य सेवाओं के लिए मासिक निश्चित दिन
5. टीका संकोच: RESPECT मॉडल संचार
6. आशा/AWW: सामुदायिक लामबंदी की कुंजी
7. लक्ष्य: >90% पूर्ण टीकाकरण, <10% ड्रॉपआउट
:::
`
  }
];
