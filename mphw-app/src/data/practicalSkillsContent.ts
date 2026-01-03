export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const practicalSkillsLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Vital Signs Assessment",
    titleHi: "जीवन संकेत आकलन",
    contentEn: `
# 🩺 Vital Signs Assessment

---

## 📊 Four Vital Signs

| Vital Sign | Normal Range | Method |
|:-----------|:-------------|:-------|
| **Temperature** | 36.1-37.2°C (97-99°F) | Thermometer |
| **Pulse** | 60-100/min | Radial artery |
| **Respiration** | 12-20/min | Observation |
| **Blood Pressure** | 120/80 mmHg | Sphygmomanometer |

---

## 🌡️ Temperature

### Sites for Measurement

| Site | Duration | Normal |
|:-----|:---------|:-------|
| **Oral** | 3-5 min | 37°C (98.6°F) |
| **Axillary** | 5-10 min | 36.5°C (add 0.5°C) |
| **Rectal** | 2-3 min | 37.5°C |

### Fever Classification

| Level | Temperature |
|:------|:------------|
| **Low grade** | 37.2-38°C |
| **Moderate** | 38-39°C |
| **High** | 39-40°C |
| **Very high** | >40°C |

---

## 💓 Pulse

### Assessment Points
- **Rate:** Count for 60 seconds
- **Rhythm:** Regular or irregular
- **Volume:** Strong or weak

### Common Sites
- Radial (wrist) - most common
- Carotid (neck) - emergency
- Brachial (arm) - infants

### Normal Pulse Rates

| Age | Rate/min |
|:----|:---------|
| **Newborn** | 120-160 |
| **Infant** | 100-120 |
| **Child** | 80-100 |
| **Adult** | 60-100 |

---

## 🫁 Respiration

### Assessment
- Count for 60 seconds
- Don't tell patient (they may change)
- Note rhythm, depth, effort

### Abnormal Patterns

| Pattern | Description |
|:--------|:------------|
| **Tachypnea** | Fast breathing |
| **Bradypnea** | Slow breathing |
| **Dyspnea** | Difficult breathing |
| **Apnea** | No breathing |

---

## 🩸 Blood Pressure

### Steps
1. Patient seated, arm supported
2. Cuff at heart level
3. Find systolic (first sound)
4. Find diastolic (sound disappears)

### Classification

| Category | Systolic | Diastolic |
|:---------|:---------|:----------|
| **Normal** | <120 | <80 |
| **Elevated** | 120-129 | <80 |
| **Stage 1 HTN** | 130-139 | 80-89 |
| **Stage 2 HTN** | ≥140 | ≥90 |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 4 vitals: Temp, Pulse, RR, BP
2. Normal temp = 37°C oral
3. Normal pulse = 60-100/min
4. Normal RR = 12-20/min
5. Normal BP = 120/80 mmHg
6. Count pulse/RR for full 60 seconds
:::
`,
    contentHi: `
# 🩺 जीवन संकेत आकलन

---

## 📊 चार जीवन संकेत

| संकेत | सामान्य सीमा | विधि |
|:------|:-----------|:-----|
| **तापमान** | 36.1-37.2°C | थर्मामीटर |
| **नाड़ी** | 60-100/मिनट | रेडियल धमनी |
| **श्वसन** | 12-20/मिनट | अवलोकन |
| **रक्तचाप** | 120/80 mmHg | स्फिग्मोमैनोमीटर |

---

## 🌡️ तापमान

### बुखार वर्गीकरण

| स्तर | तापमान |
|:-----|:-------|
| **निम्न श्रेणी** | 37.2-38°C |
| **मध्यम** | 38-39°C |
| **उच्च** | 39-40°C |
| **बहुत उच्च** | >40°C |

---

## 💓 नाड़ी

### सामान्य नाड़ी दरें

| आयु | दर/मिनट |
|:----|:--------|
| **नवजात** | 120-160 |
| **शिशु** | 100-120 |
| **बच्चा** | 80-100 |
| **वयस्क** | 60-100 |

---

## 🩸 रक्तचाप

### वर्गीकरण

| श्रेणी | सिस्टोलिक | डायस्टोलिक |
|:-------|:---------|:----------|
| **सामान्य** | <120 | <80 |
| **उच्च** | 120-129 | <80 |
| **चरण 1 HTN** | 130-139 | 80-89 |
| **चरण 2 HTN** | ≥140 | ≥90 |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. 4 जीवन संकेत: तापमान, नाड़ी, RR, BP
2. सामान्य तापमान = 37°C मौखिक
3. सामान्य नाड़ी = 60-100/मिनट
4. सामान्य RR = 12-20/मिनट
5. सामान्य BP = 120/80 mmHg
:::
`
  },
  {
    id: 2,
    titleEn: "Wound Care & Dressing",
    titleHi: "घाव देखभाल और ड्रेसिंग",
    contentEn: `
# 🩹 Wound Care & Dressing

---

## 📖 Types of Wounds

| Type | Description |
|:-----|:------------|
| **Incision** | Clean cut (knife) |
| **Laceration** | Torn, jagged edges |
| **Abrasion** | Scrape (friction) |
| **Puncture** | Deep, narrow (nail) |
| **Avulsion** | Skin torn away |
| **Burn** | Heat, chemical, electrical |

---

## 🧼 Wound Cleaning

### Steps

1. **Wash hands** and wear gloves
2. **Stop bleeding** with pressure
3. **Clean wound** with saline/clean water
4. **Remove debris** gently
5. **Pat dry** with clean gauze
6. **Apply antiseptic** (povidone-iodine)
7. **Dress the wound**

---

## 🩹 Types of Dressings

| Dressing | Use |
|:---------|:----|
| **Dry gauze** | Clean wounds |
| **Moist dressing** | Burns, ulcers |
| **Adhesive bandage** | Small cuts |
| **Compression** | Edema, bleeding |

---

## ⚠️ Signs of Infection

:::danger
**Watch For:**
- Increased redness
- Swelling
- Warmth
- Pus discharge
- Fever
- Red streaks
:::

---

## 💉 Tetanus Prevention

### TT Vaccine

| Wound Type | Immunized | Not Immunized |
|:-----------|:----------|:--------------|
| **Clean, minor** | No TT needed | TT if >10 years |
| **Dirty, deep** | TT if >5 years | TT + TIG |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Clean wounds with saline/clean water
2. Stop bleeding with direct pressure
3. Watch for infection signs
4. TT for dirty wounds if >5 years since last
5. Change dressing daily or when wet
6. Refer deep/infected wounds
:::
`,
    contentHi: `
# 🩹 घाव देखभाल और ड्रेसिंग

---

## 📖 घावों के प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **चीरा** | साफ कट (चाकू) |
| **छीलन** | फटा, दांतेदार किनारे |
| **घर्षण** | खरोंच (रगड़) |
| **पंचर** | गहरा, संकीर्ण (कील) |
| **जलना** | गर्मी, रासायनिक |

---

## 🧼 घाव सफाई

### चरण

1. **हाथ धोएं** और दस्ताने पहनें
2. दबाव से **रक्तस्राव रोकें**
3. सेलाइन से **घाव साफ करें**
4. धीरे से **मलबा हटाएं**
5. साफ गॉज से **सुखाएं**
6. **एंटीसेप्टिक लगाएं**
7. **ड्रेसिंग करें**

---

## 🩹 ड्रेसिंग के प्रकार

| ड्रेसिंग | उपयोग |
|:--------|:------|
| **सूखा गॉज** | साफ घाव |
| **नम ड्रेसिंग** | जलन, अल्सर |
| **चिपकने वाली पट्टी** | छोटे कट |
| **कम्प्रेशन** | सूजन, रक्तस्राव |

---

## ⚠️ संक्रमण के संकेत

:::danger
**देखें:**
- बढ़ी हुई लालिमा
- सूजन
- गर्माहट
- मवाद स्राव
- बुखार
- लाल धारियां
:::

---

## 💉 टेटनस रोकथाम

| घाव प्रकार | टीकाकृत | गैर-टीकाकृत |
|:----------|:-------|:-----------|
| **साफ, मामूली** | TT नहीं | >10 वर्ष हो तो TT |
| **गंदा, गहरा** | >5 वर्ष हो तो TT | TT + TIG |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सेलाइन/साफ पानी से साफ करें
2. सीधे दबाव से रक्तस्राव रोकें
3. संक्रमण संकेत देखें
4. गंदे घाव में TT यदि >5 वर्ष
5. दैनिक या गीला होने पर ड्रेसिंग बदलें
:::
`
  },
  {
    id: 3,
    titleEn: "Sample Collection",
    titleHi: "नमूना संग्रह",
    contentEn: `
# 🧪 Sample Collection

---

## 🩸 Blood Collection

### Venipuncture Sites
- **Median cubital vein** (preferred)
- Cephalic vein
- Basilic vein

### Steps

1. Identify patient and explain procedure
2. Wash hands, wear gloves
3. Apply tourniquet
4. Select vein (palpate)
5. Clean site with alcohol
6. Insert needle at 15-30° angle
7. Collect required amount
8. Release tourniquet
9. Remove needle, apply pressure
10. Label sample immediately

### Safety

:::danger
**Never:**
- Recap needles
- Use same syringe twice
- Take blood from infected site
:::

---

## 🧫 Sputum Collection

### For TB Diagnosis
- Collect 2 samples (spot + early morning)
- Wide-mouth container
- Patient coughs deeply
- Minimum 3-5 mL

### Instructions to Patient
1. Rinse mouth with water
2. Take deep breaths
3. Cough deeply from chest
4. Spit into container
5. Close lid tightly

---

## 🔬 Urine Collection

### Types

| Type | Method |
|:-----|:-------|
| **Random** | Any time |
| **Midstream** | Clean catch |
| **24-hour** | Collected all day |
| **First morning** | Most concentrated |

### Midstream Collection
1. Clean genital area
2. Start urinating in toilet
3. Collect mid-portion in container
4. Finish in toilet

---

## 💩 Stool Collection

### Steps
1. Collect in clean, dry container
2. Fresh sample preferred
3. Include mucus/blood if present
4. Don't mix with urine
5. Transport quickly to lab

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Always label samples immediately
2. Sputum = 2 samples (spot + early morning)
3. Midstream urine for culture
4. Never recap used needles
5. Fresh stool sample preferred
6. Median cubital vein for blood
:::
`,
    contentHi: `
# 🧪 नमूना संग्रह

---

## 🩸 रक्त संग्रह

### वेनिपंक्चर स्थान
- **मीडियन क्यूबिटल वेन** (पसंदीदा)
- सेफेलिक वेन
- बेसिलिक वेन

### चरण

1. रोगी की पहचान करें और प्रक्रिया समझाएं
2. हाथ धोएं, दस्ताने पहनें
3. टूर्निकेट लगाएं
4. नस चुनें (टटोलें)
5. अल्कोहल से स्थान साफ करें
6. 15-30° कोण पर सुई डालें
7. आवश्यक मात्रा लें
8. टूर्निकेट छोड़ें
9. सुई निकालें, दबाव लगाएं
10. तुरंत नमूना लेबल करें

---

## 🧫 थूक संग्रह

### TB निदान के लिए
- 2 नमूने लें (स्पॉट + सुबह)
- चौड़े मुंह का कंटेनर
- गहरी खांसी से थूकें
- न्यूनतम 3-5 mL

### रोगी को निर्देश
1. मुंह पानी से धोएं
2. गहरी सांस लें
3. छाती से गहरी खांसी करें
4. कंटेनर में थूकें
5. ढक्कन कसकर बंद करें

---

## 🔬 मूत्र संग्रह

### प्रकार

| प्रकार | विधि |
|:-------|:-----|
| **रैंडम** | कभी भी |
| **मिडस्ट्रीम** | क्लीन कैच |
| **24-घंटे** | पूरे दिन |
| **पहली सुबह** | सबसे गाढ़ा |

---

## 💩 मल संग्रह

### चरण
1. साफ, सूखे कंटेनर में लें
2. ताजा नमूना पसंदीदा
3. बलगम/रक्त शामिल करें
4. मूत्र के साथ न मिलाएं
5. जल्दी लैब भेजें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. हमेशा तुरंत नमूने लेबल करें
2. थूक = 2 नमूने (स्पॉट + सुबह)
3. कल्चर के लिए मिडस्ट्रीम मूत्र
4. इस्तेमाल की गई सुई कभी न ढकें
5. ताजा मल नमूना पसंदीदा
:::
`
  },
  {
    id: 4,
    titleEn: "Basic Diagnostic Tests",
    titleHi: "बुनियादी नैदानिक परीक्षण",
    contentEn: `
# 🔬 Basic Diagnostic Tests

---

## 💉 Hemoglobin Estimation

### Methods

| Method | Equipment |
|:-------|:----------|
| **Sahli's** | Hemoglobinometer |
| **Tallquist** | Color chart |
| **Cyanmethemoglobin** | Spectrophotometer |

### Normal Values

| Group | Normal Hb |
|:------|:----------|
| **Adult male** | 13-17 g/dL |
| **Adult female** | 12-16 g/dL |
| **Pregnant** | 11 g/dL (min) |
| **Children** | 11-14 g/dL |

### Anemia Classification

| Severity | Hb Level |
|:---------|:---------|
| **Mild** | 10-10.9 g/dL |
| **Moderate** | 7-9.9 g/dL |
| **Severe** | <7 g/dL |

---

## 🦟 Malaria RDT

### Procedure
1. Clean finger with alcohol
2. Prick with lancet
3. Collect blood drop
4. Apply to test cassette
5. Add buffer drops
6. Read result in 15-20 minutes

### Interpretation

| Line | Result |
|:-----|:-------|
| **C only** | Negative |
| **C + Pf** | P. falciparum |
| **C + Pan** | P. vivax or other |
| **C + Pf + Pan** | Mixed infection |
| **No C** | Invalid (repeat) |

---

## 💧 Urine Tests

### Urine Routine

| Test | Normal | Abnormal Indicates |
|:-----|:-------|:------------------|
| **Color** | Pale yellow | Dehydration, blood |
| **Protein** | Negative | Kidney disease |
| **Sugar** | Negative | Diabetes |
| **Pus cells** | 0-5/HPF | UTI |

### Pregnancy Test (urine)
- Detects hCG hormone
- Best with first morning urine
- Wait 3-5 minutes for result

---

## 🩸 Blood Glucose

### Normal Values

| Test | Normal | Diabetes |
|:-----|:-------|:---------|
| **Fasting** | <100 mg/dL | ≥126 mg/dL |
| **Random** | <140 mg/dL | ≥200 mg/dL |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Normal Hb: Male 13-17, Female 12-16 g/dL
2. Severe anemia = Hb <7 g/dL
3. Malaria RDT: Read in 15-20 min
4. C line must appear for valid result
5. Fasting glucose <100 mg/dL normal
6. Pregnancy test: First morning urine best
:::
`,
    contentHi: `
# 🔬 बुनियादी नैदानिक परीक्षण

---

## 💉 हीमोग्लोबिन अनुमान

### सामान्य मान

| समूह | सामान्य Hb |
|:-----|:----------|
| **वयस्क पुरुष** | 13-17 g/dL |
| **वयस्क महिला** | 12-16 g/dL |
| **गर्भवती** | 11 g/dL (न्यूनतम) |
| **बच्चे** | 11-14 g/dL |

### एनीमिया वर्गीकरण

| गंभीरता | Hb स्तर |
|:--------|:--------|
| **हल्का** | 10-10.9 g/dL |
| **मध्यम** | 7-9.9 g/dL |
| **गंभीर** | <7 g/dL |

---

## 🦟 मलेरिया RDT

### प्रक्रिया
1. अल्कोहल से उंगली साफ करें
2. लैंसेट से चुभोएं
3. रक्त बूंद लें
4. टेस्ट कैसेट पर लगाएं
5. बफर बूंदें डालें
6. 15-20 मिनट में परिणाम पढ़ें

### व्याख्या

| लाइन | परिणाम |
|:-----|:-------|
| **केवल C** | नेगेटिव |
| **C + Pf** | P. falciparum |
| **C + Pan** | P. vivax |
| **कोई C नहीं** | अमान्य (दोहराएं) |

---

## 💧 मूत्र परीक्षण

| परीक्षण | सामान्य | असामान्य |
|:--------|:-------|:--------|
| **रंग** | हल्का पीला | निर्जलीकरण, रक्त |
| **प्रोटीन** | नेगेटिव | किडनी रोग |
| **शुगर** | नेगेटिव | मधुमेह |
| **पस कोशिकाएं** | 0-5/HPF | UTI |

---

## 🩸 रक्त ग्लूकोज

| परीक्षण | सामान्य | मधुमेह |
|:--------|:-------|:-------|
| **फास्टिंग** | <100 mg/dL | ≥126 mg/dL |
| **रैंडम** | <140 mg/dL | ≥200 mg/dL |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सामान्य Hb: पुरुष 13-17, महिला 12-16 g/dL
2. गंभीर एनीमिया = Hb <7 g/dL
3. मलेरिया RDT: 15-20 मिनट में पढ़ें
4. C लाइन वैध परिणाम के लिए आवश्यक
5. फास्टिंग ग्लूकोज <100 mg/dL सामान्य
:::
`
  },
  {
    id: 5,
    titleEn: "Equipment Care & Sterilization",
    titleHi: "उपकरण देखभाल और नसबंदी",
    contentEn: `
# 🧹 Equipment Care & Sterilization

---

## 📖 Types of Cleaning

| Level | Purpose | Method |
|:------|:--------|:-------|
| **Cleaning** | Remove dirt | Soap and water |
| **Disinfection** | Kill most germs | Chemicals |
| **Sterilization** | Kill all germs | Heat, chemicals |

---

## 🔥 Sterilization Methods

### Heat Methods

| Method | Temperature | Time |
|:-------|:------------|:-----|
| **Boiling** | 100°C | 20 min |
| **Autoclaving** | 121°C, 15 psi | 15-20 min |
| **Hot air oven** | 160°C | 1 hour |
| **Flaming** | Direct flame | Until red hot |

### Chemical Methods

| Chemical | Use | Contact Time |
|:---------|:----|:-------------|
| **Chlorine (0.5%)** | Surfaces, spills | 10 min |
| **Glutaraldehyde (2%)** | Equipment | 20 min |
| **Alcohol (70%)** | Skin, surfaces | Quick |

---

## 🩺 Equipment Care

### Thermometer
- Clean with alcohol before/after use
- Check for cracks
- Store in case
- Shake down mercury type

### Stethoscope
- Clean earpieces and diaphragm
- Wipe with alcohol
- Check tubing for cracks
- Store properly

### BP Apparatus
- Clean cuff regularly
- Check tubing connections
- Calibrate periodically
- Store with cuff deflated

---

## 🗑️ Biomedical Waste Management

### Color Coding

| Color | Waste Type | Treatment |
|:------|:-----------|:----------|
| **Yellow** | Infectious | Incineration |
| **Red** | Contaminated plastic | Autoclave, shred |
| **Blue/White** | Glass, sharps | Autoclave |
| **Black** | General waste | Landfill |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Autoclave = 121°C, 15 psi, 15-20 min
2. Boiling = 100°C for 20 min
3. 0.5% chlorine for surfaces
4. Yellow bag = Infectious waste
5. Red bag = Contaminated plastic
6. Sharps in puncture-proof container
:::
`,
    contentHi: `
# 🧹 उपकरण देखभाल और नसबंदी

---

## 📖 सफाई के प्रकार

| स्तर | उद्देश्य | विधि |
|:-----|:--------|:-----|
| **सफाई** | गंदगी हटाएं | साबुन और पानी |
| **कीटाणुशोधन** | अधिकांश कीटाणु मारें | रसायन |
| **नसबंदी** | सभी कीटाणु मारें | गर्मी, रसायन |

---

## 🔥 नसबंदी विधियां

### गर्मी विधियां

| विधि | तापमान | समय |
|:-----|:-------|:----|
| **उबालना** | 100°C | 20 मिनट |
| **ऑटोक्लेविंग** | 121°C, 15 psi | 15-20 मिनट |
| **हॉट एयर ओवन** | 160°C | 1 घंटा |

### रासायनिक विधियां

| रसायन | उपयोग | संपर्क समय |
|:-------|:-----|:---------|
| **क्लोरीन (0.5%)** | सतह, स्पिल | 10 मिनट |
| **ग्लूटारल्डिहाइड (2%)** | उपकरण | 20 मिनट |
| **अल्कोहल (70%)** | त्वचा, सतह | त्वरित |

---

## 🗑️ बायोमेडिकल वेस्ट प्रबंधन

### रंग कोडिंग

| रंग | कचरा प्रकार | उपचार |
|:----|:----------|:-------|
| **पीला** | संक्रामक | भस्मीकरण |
| **लाल** | दूषित प्लास्टिक | ऑटोक्लेव, श्रेड |
| **नीला/सफेद** | कांच, शार्प्स | ऑटोक्लेव |
| **काला** | सामान्य कचरा | लैंडफिल |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. ऑटोक्लेव = 121°C, 15 psi, 15-20 मिनट
2. उबालना = 100°C 20 मिनट
3. सतहों के लिए 0.5% क्लोरीन
4. पीला बैग = संक्रामक कचरा
5. लाल बैग = दूषित प्लास्टिक
6. शार्प्स पंचर-प्रूफ कंटेनर में
:::
`
  },
  {
    id: 6,
    titleEn: "Injection Techniques",
    titleHi: "इंजेक्शन तकनीक",
    contentEn: `
# 💉 Injection Techniques

---

## 📖 Routes of Administration

| Route | Abbreviation | Absorption |
|:------|:------------|:-----------|
| **Intramuscular** | IM | Fast (15-20 min) |
| **Subcutaneous** | SC | Slow (20-30 min) |
| **Intradermal** | ID | Very slow |
| **Intravenous** | IV | Immediate |

---

## 💪 Intramuscular (IM) Injection

### Common Sites

| Site | Muscle | Maximum Volume |
|:-----|:-------|:---------------|
| **Deltoid** | Upper arm | 1-2 mL |
| **Vastus lateralis** | Outer thigh | 5 mL (adults) |
| **Gluteus** | Buttock | 5 mL |
| **Ventrogluteal** | Hip | 5 mL |

### Deltoid Site
- **Location:** 2-3 finger widths below acromion process
- **Angle:** 90° to skin
- **Needle:** 22-25 gauge, 1-1.5 inch
- **Uses:** Vaccines, small volume drugs

### Vastus Lateralis Site
- **Location:** Middle third of outer thigh
- **Best for:** Infants and children
- **Angle:** 90° to skin
- **Needle:** 22-25 gauge

### Gluteal Sites

:::warning
**Dorsogluteal (Upper Outer Quadrant):**
- Risk of sciatic nerve injury
- Divide buttock into 4 quadrants
- Use upper outer quadrant ONLY
- NOT recommended for children <3 years
:::

### IM Injection Steps

1. Verify patient identity and medication
2. Select appropriate site
3. Clean site with alcohol (circular motion, inside out)
4. Let alcohol dry completely
5. Spread skin taut OR use Z-track method
6. Insert needle at 90° quickly
7. Aspirate for blood (except vaccines)
8. Inject slowly (10 sec/mL)
9. Withdraw needle, apply pressure
10. Dispose syringe in sharps container

---

## 🔵 Subcutaneous (SC) Injection

### Sites
- Outer upper arm
- Abdomen (avoid 2 inches around navel)
- Anterior thigh
- Upper back

### Technique

| Parameter | Value |
|:----------|:------|
| **Angle** | 45° (thin patients) or 90° (obese) |
| **Needle** | 25-27 gauge, 5/8 inch |
| **Volume** | 0.5-1 mL maximum |
| **Aspiration** | NOT required |

### Common SC Medications
- Insulin
- Heparin
- Vaccines (some)
- Growth hormone

---

## 🔴 Intradermal (ID) Injection

### Characteristics
- **Site:** Inner forearm (volar surface)
- **Angle:** 5-15° (almost flat)
- **Needle:** 26-27 gauge, 3/8 inch
- **Volume:** 0.1-0.5 mL
- **Result:** Wheal (bleb) formation

### Uses
- Tuberculin test (Mantoux)
- Allergy testing
- BCG vaccine

### ID Injection Steps
1. Clean inner forearm
2. Stretch skin taut
3. Insert needle bevel up at 5-15°
4. Inject slowly
5. Observe wheal formation (6-10 mm)
6. Do NOT massage
7. Mark the site for reading

---

## 💧 Intravenous (IV) Injection

### Sites
- Median cubital vein (antecubital fossa)
- Cephalic vein
- Basilic vein
- Dorsal hand veins

### Steps
1. Apply tourniquet 3-4 inches above site
2. Select vein, palpate
3. Clean site with alcohol
4. Anchor vein with thumb
5. Insert needle at 15-30° angle, bevel up
6. Watch for flashback (blood in hub)
7. Release tourniquet
8. Inject slowly
9. Remove needle, apply pressure 2-3 minutes

---

## ⚠️ Safe Injection Practices

:::danger
**NEVER:**
- Reuse syringes or needles
- Recap needles
- Touch needle with bare hands
- Use multi-dose vials without aseptic technique
- Inject through infected skin
:::

### One Syringe, One Needle, One Patient Policy
- Use new syringe and needle for each patient
- Use new syringe for each medication
- Dispose immediately after use

### Auto-Disable (AD) Syringes
- Single-use only
- Lock mechanism after one use
- Mandatory for immunization

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. IM = 90°, SC = 45-90°, ID = 5-15°
2. Deltoid max 1-2 mL, Gluteus max 5 mL
3. Aspirate for IM (except vaccines)
4. ID produces wheal (bleb)
5. IV - wait for flashback
6. Never recap used needles
7. One syringe, one needle, one patient
:::
`,
    contentHi: `
# 💉 इंजेक्शन तकनीक

---

## 📖 प्रशासन के मार्ग

| मार्ग | संक्षेप | अवशोषण |
|:------|:-------|:-------|
| **इंट्रामस्कुलर** | IM | तेज (15-20 मिनट) |
| **सबक्यूटेनियस** | SC | धीमा (20-30 मिनट) |
| **इंट्राडर्मल** | ID | बहुत धीमा |
| **इंट्रावेनस** | IV | तुरंत |

---

## 💪 इंट्रामस्कुलर (IM) इंजेक्शन

### सामान्य स्थान

| स्थान | मांसपेशी | अधिकतम मात्रा |
|:------|:--------|:-------------|
| **डेल्टॉइड** | ऊपरी बांह | 1-2 mL |
| **वास्टस लेटरेलिस** | बाहरी जांघ | 5 mL |
| **ग्लूटियस** | नितंब | 5 mL |

### डेल्टॉइड स्थान
- **स्थान:** एक्रोमियन से 2-3 उंगली नीचे
- **कोण:** त्वचा से 90°
- **सुई:** 22-25 गेज, 1-1.5 इंच
- **उपयोग:** टीके, कम मात्रा की दवाएं

### IM इंजेक्शन चरण

1. रोगी और दवा सत्यापित करें
2. उचित स्थान चुनें
3. अल्कोहल से साफ करें (वृत्ताकार गति)
4. अल्कोहल पूरी तरह सूखने दें
5. त्वचा तनाव में रखें
6. 90° पर जल्दी सुई डालें
7. रक्त के लिए एस्पिरेट करें
8. धीरे-धीरे इंजेक्ट करें
9. सुई निकालें, दबाव लगाएं
10. शार्प्स कंटेनर में निपटान

---

## 🔵 सबक्यूटेनियस (SC) इंजेक्शन

### स्थान
- बाहरी ऊपरी बांह
- पेट (नाभि के 2 इंच आसपास से बचें)
- पूर्वकाल जांघ

### तकनीक

| पैरामीटर | मान |
|:---------|:----|
| **कोण** | 45° (पतले) या 90° (मोटे) |
| **सुई** | 25-27 गेज, 5/8 इंच |
| **मात्रा** | 0.5-1 mL अधिकतम |
| **एस्पिरेशन** | आवश्यक नहीं |

### सामान्य SC दवाएं
- इंसुलिन
- हेपरिन
- कुछ टीके

---

## 🔴 इंट्राडर्मल (ID) इंजेक्शन

### विशेषताएं
- **स्थान:** भीतरी अग्रबाहु
- **कोण:** 5-15° (लगभग सपाट)
- **सुई:** 26-27 गेज
- **मात्रा:** 0.1-0.5 mL
- **परिणाम:** व्हील (ब्लेब) बनना

### उपयोग
- ट्यूबरकुलिन टेस्ट (मैंटोक्स)
- एलर्जी परीक्षण
- BCG टीका

---

## 💧 इंट्रावेनस (IV) इंजेक्शन

### स्थान
- मीडियन क्यूबिटल वेन
- सेफेलिक वेन
- बेसिलिक वेन

### चरण
1. टूर्निकेट 3-4 इंच ऊपर लगाएं
2. नस चुनें, टटोलें
3. अल्कोहल से साफ करें
4. अंगूठे से नस को स्थिर करें
5. 15-30° पर सुई डालें
6. फ्लैशबैक देखें
7. टूर्निकेट छोड़ें
8. धीरे-धीरे इंजेक्ट करें
9. सुई निकालें, 2-3 मिनट दबाव लगाएं

---

## ⚠️ सुरक्षित इंजेक्शन अभ्यास

:::danger
**कभी नहीं:**
- सीरिंज या सुई का पुन: उपयोग
- सुई को वापस ढकना
- नंगे हाथों से सुई छूना
- संक्रमित त्वचा से इंजेक्ट करना
:::

### एक सीरिंज, एक सुई, एक रोगी नीति
- प्रत्येक रोगी के लिए नई सीरिंज और सुई
- उपयोग के तुरंत बाद निपटान

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. IM = 90°, SC = 45-90°, ID = 5-15°
2. डेल्टॉइड अधिकतम 1-2 mL
3. IM में एस्पिरेट करें (टीके छोड़कर)
4. ID में व्हील बनता है
5. IV - फ्लैशबैक का इंतजार करें
6. इस्तेमाल की गई सुई कभी न ढकें
7. एक सीरिंज, एक सुई, एक रोगी
:::
`
  },
  {
    id: 7,
    titleEn: "Physical Examination Skills",
    titleHi: "शारीरिक परीक्षा कौशल",
    contentEn: `
# 🔍 Physical Examination Skills

---

## 📖 Four Basic Techniques

| Technique | Method | Use |
|:----------|:-------|:----|
| **Inspection** | Looking | First step, observe |
| **Palpation** | Touching | Feel temperature, masses |
| **Percussion** | Tapping | Assess organs, fluid |
| **Auscultation** | Listening | Heart, lungs, bowel |

---

## 👀 Inspection (Looking)

### General Observations
- **Appearance:** Well/ill, comfortable/distress
- **Built:** Thin, average, obese
- **Nutrition:** Well-nourished, malnourished
- **Posture:** Normal, guarding
- **Skin:** Color, rashes, wounds

### Signs to Note

| Sign | Indicates |
|:-----|:----------|
| **Pallor** | Anemia |
| **Cyanosis** | Low oxygen |
| **Jaundice** | Liver disease |
| **Edema** | Fluid retention |

---

## ✋ Palpation (Touching)

### Principles
- Warm hands before examination
- Start with light palpation
- Progress to deep palpation
- Watch patient's face for pain

### What to Assess

| Finding | Normal | Abnormal |
|:--------|:-------|:---------|
| **Temperature** | Warm | Hot (fever), Cold (shock) |
| **Pulse** | Regular, strong | Irregular, weak |
| **Lymph nodes** | Not palpable | Enlarged, tender |
| **Abdomen** | Soft, non-tender | Hard, tender |

### Lymph Node Areas
- Cervical (neck)
- Axillary (armpit)
- Inguinal (groin)
- Supraclavicular

---

## 🔔 Percussion (Tapping)

### Sounds

| Sound | Character | Location |
|:------|:----------|:---------|
| **Resonant** | Hollow | Normal lung |
| **Dull** | Flat | Liver, heart |
| **Tympanic** | Drum-like | Stomach, intestines |
| **Hyperresonant** | Very hollow | Pneumothorax |

### Technique
1. Place middle finger flat on surface
2. Strike with other middle finger
3. Strike at distal interphalangeal joint
4. Quick, snapping motion

---

## 🩺 Auscultation (Listening)

### Heart Sounds

| Sound | Timing | Cause |
|:------|:-------|:------|
| **S1 (Lub)** | Start systole | AV valve closure |
| **S2 (Dub)** | End systole | Semilunar valve closure |
| **Murmur** | Various | Abnormal flow |

### Heart Auscultation Areas
- **Aortic:** Right 2nd intercostal space
- **Pulmonic:** Left 2nd intercostal space
- **Tricuspid:** Left 4th intercostal space
- **Mitral:** Left 5th intercostal space (apex)

### Lung Sounds

| Sound | Character | Indicates |
|:------|:----------|:----------|
| **Vesicular** | Soft, rustling | Normal |
| **Crackles** | Popping | Pneumonia, heart failure |
| **Wheezes** | Whistling | Asthma, COPD |
| **Stridor** | High-pitched | Upper airway obstruction |
| **Absent** | No sound | Pleural effusion, pneumothorax |

### Bowel Sounds
- **Normal:** 5-30 sounds/minute
- **Hyperactive:** Diarrhea, obstruction
- **Hypoactive:** Post-surgery, peritonitis
- **Absent:** Paralytic ileus

---

## 📊 Systematic Examination

### Head-to-Toe Approach

| Area | What to Check |
|:-----|:--------------|
| **General** | Consciousness, distress |
| **Head** | Scalp, face, eyes |
| **Neck** | Thyroid, lymph nodes, JVP |
| **Chest** | Heart, lungs |
| **Abdomen** | Organs, tenderness |
| **Extremities** | Pulses, edema |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. IPPA: Inspect, Palpate, Percuss, Auscultate
2. Always inspect first
3. Warm hands before palpation
4. Lub-Dub = S1-S2 heart sounds
5. Crackles = Pneumonia, Wheezes = Asthma
6. Absent bowel sounds = Paralytic ileus
7. Cervical, axillary, inguinal lymph nodes
:::
`,
    contentHi: `
# 🔍 शारीरिक परीक्षा कौशल

---

## 📖 चार बुनियादी तकनीकें

| तकनीक | विधि | उपयोग |
|:-------|:-----|:-----|
| **निरीक्षण** | देखना | पहला कदम |
| **पैल्पेशन** | छूना | तापमान, गांठ महसूस करें |
| **पर्कशन** | थपथपाना | अंग, तरल पदार्थ |
| **ऑस्कल्टेशन** | सुनना | हृदय, फेफड़े, आंत |

---

## 👀 निरीक्षण (देखना)

### सामान्य अवलोकन
- **उपस्थिति:** स्वस्थ/बीमार, आरामदायक/संकट
- **बनावट:** पतला, औसत, मोटा
- **पोषण:** अच्छी तरह से पोषित, कुपोषित
- **त्वचा:** रंग, चकत्ते, घाव

### देखने के संकेत

| संकेत | संकेत करता है |
|:------|:-----------|
| **पीलापन** | एनीमिया |
| **सायनोसिस** | कम ऑक्सीजन |
| **पीलिया** | यकृत रोग |
| **एडिमा** | द्रव प्रतिधारण |

---

## ✋ पैल्पेशन (छूना)

### सिद्धांत
- परीक्षा से पहले हाथ गर्म करें
- हल्के पैल्पेशन से शुरू करें
- गहरे पैल्पेशन तक बढ़ें
- दर्द के लिए रोगी का चेहरा देखें

### क्या आकलन करें

| खोज | सामान्य | असामान्य |
|:----|:-------|:--------|
| **तापमान** | गर्म | गर्म (बुखार), ठंडा (शॉक) |
| **नाड़ी** | नियमित, मजबूत | अनियमित, कमजोर |
| **लिम्फ नोड्स** | महसूस न हो | बढ़े, दर्दनाक |
| **पेट** | नरम | कठोर, दर्दनाक |

---

## 🔔 पर्कशन (थपथपाना)

### ध्वनियां

| ध्वनि | चरित्र | स्थान |
|:------|:-------|:-----|
| **रेसोनेंट** | खोखला | सामान्य फेफड़ा |
| **डल** | सपाट | यकृत, हृदय |
| **टिम्पैनिक** | ढोल जैसा | पेट, आंत |

---

## 🩺 ऑस्कल्टेशन (सुनना)

### हृदय ध्वनियां

| ध्वनि | समय | कारण |
|:------|:----|:-----|
| **S1 (लब)** | सिस्टोल शुरू | AV वाल्व बंद |
| **S2 (डब)** | सिस्टोल समाप्त | सेमिलुनर वाल्व बंद |

### फेफड़े की ध्वनियां

| ध्वनि | चरित्र | संकेत करता है |
|:------|:-------|:-----------|
| **वेसिक्युलर** | नरम | सामान्य |
| **क्रैकल्स** | पॉपिंग | निमोनिया |
| **व्हीज़** | सीटी | अस्थमा |
| **अनुपस्थित** | कोई ध्वनि नहीं | प्लूरल इफ्यूजन |

### आंत की ध्वनियां
- **सामान्य:** 5-30 ध्वनि/मिनट
- **हाइपरएक्टिव:** दस्त, रुकावट
- **हाइपोएक्टिव:** सर्जरी के बाद
- **अनुपस्थित:** पैरालिटिक इलियस

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. IPPA: निरीक्षण, पैल्पेशन, पर्कशन, ऑस्कल्टेशन
2. हमेशा पहले निरीक्षण करें
3. पैल्पेशन से पहले हाथ गर्म करें
4. लब-डब = S1-S2 हृदय ध्वनि
5. क्रैकल्स = निमोनिया, व्हीज़ = अस्थमा
6. अनुपस्थित आंत ध्वनि = पैरालिटिक इलियस
:::
`
  },
  {
    id: 8,
    titleEn: "Growth Monitoring & Anthropometry",
    titleHi: "विकास निगरानी और मानवमिति",
    contentEn: `
# 📏 Growth Monitoring & Anthropometry

---

## 📖 What is Anthropometry?

**Definition:** Measurement of human body dimensions to assess nutritional status and growth.

### Key Measurements

| Measurement | Tool | Age Group |
|:------------|:-----|:----------|
| **Weight** | Weighing scale | All ages |
| **Height/Length** | Stadiometer/infantometer | All ages |
| **Mid-upper arm circumference (MUAC)** | MUAC tape | 6 months - 5 years |
| **Head circumference** | Measuring tape | 0-2 years |

---

## ⚖️ Weight Measurement

### Equipment
- **Infants:** Spring scale with sling, digital scale
- **Children:** Electronic or beam scale
- **Adults:** Platform scale

### Technique for Infants
1. Zero/calibrate scale
2. Undress baby (keep diaper if cold)
3. Place baby in center of scale
4. Wait for reading to stabilize
5. Record to nearest 10g (0.01 kg)

### Technique for Children/Adults
1. Calibrate scale to zero
2. Minimal clothing, no shoes
3. Stand still in center
4. Arms at sides
5. Record to nearest 100g

---

## 📐 Height/Length Measurement

### Length (Children <2 years)
- **Position:** Lying down (recumbent)
- **Equipment:** Infantometer
- **Technique:**
  1. Two people required
  2. Head against fixed headboard
  3. Legs straight
  4. Moveable footboard against soles
  5. Record to nearest 0.1 cm

### Height (Children ≥2 years & Adults)
- **Position:** Standing
- **Equipment:** Stadiometer
- **Technique:**
  1. No shoes
  2. Heels, buttocks, shoulders against wall
  3. Look straight ahead (Frankfurt plane)
  4. Lower headpiece to crown
  5. Record to nearest 0.1 cm

---

## 💪 Mid-Upper Arm Circumference (MUAC)

### Why MUAC?
- Quick screening for acute malnutrition
- Ages 6 months to 5 years
- Does not require weight/height

### Technique
1. Find midpoint of left upper arm
2. Measure from acromion to olecranon
3. Mark midpoint
4. Wrap MUAC tape around arm at mark
5. Read to nearest 0.1 cm

### MUAC Classification

| MUAC | Nutritional Status | Action |
|:-----|:------------------|:-------|
| **≥13.5 cm** | Normal | Continue monitoring |
| **12.5-13.4 cm** | At risk (MAM) | Counseling, follow-up |
| **11.5-12.4 cm** | Moderate acute malnutrition | Supplementary feeding |
| **<11.5 cm** | Severe acute malnutrition (SAM) | Urgent referral |

### Color Bands on MUAC Tape
- **Green:** ≥13.5 cm (Normal)
- **Yellow:** 12.5-13.4 cm (At risk)
- **Orange:** 11.5-12.4 cm (MAM)
- **Red:** <11.5 cm (SAM)

---

## 👶 Head Circumference

### Importance
- Brain growth assessment (0-2 years)
- Detects hydrocephalus, microcephaly

### Technique
1. Non-stretchable tape
2. Above eyebrows (supraorbital ridge)
3. Around widest part of occiput
4. Record to nearest 0.1 cm

### Normal Values

| Age | Head Circumference |
|:----|:------------------|
| **Birth** | 33-35 cm |
| **1 year** | 47 cm (average) |
| **2 years** | 49 cm (average) |

---

## 📊 Growth Charts

### WHO Growth Standards
- Weight-for-age (underweight)
- Height-for-age (stunting)
- Weight-for-height (wasting)
- BMI-for-age

### Z-Score Classification

| Z-Score | Interpretation |
|:--------|:---------------|
| **>+2** | Overweight/obesity |
| **+2 to -2** | Normal |
| **-2 to -3** | Moderate malnutrition |
| **<-3** | Severe malnutrition |

### Indicators

| Indicator | Z-score <-2 | Condition |
|:----------|:------------|:----------|
| **Weight-for-age** | Underweight | Acute or chronic |
| **Height-for-age** | Stunted | Chronic malnutrition |
| **Weight-for-height** | Wasted | Acute malnutrition |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. MUAC <11.5 cm = SAM (Red band) - Urgent referral
2. MUAC 11.5-12.4 cm = MAM (Orange) - Supplementary feeding
3. Length = lying down (<2 years)
4. Height = standing (≥2 years)
5. Head circumference at birth = 33-35 cm
6. Z-score <-3 = Severe malnutrition
7. Weight-for-height = Acute (wasting)
8. Height-for-age = Chronic (stunting)
:::
`,
    contentHi: `
# 📏 विकास निगरानी और मानवमिति

---

## 📖 मानवमिति क्या है?

**परिभाषा:** पोषण स्थिति और विकास का आकलन करने के लिए मानव शरीर के आयामों का मापन।

### प्रमुख माप

| माप | उपकरण | आयु समूह |
|:-----|:-----|:--------|
| **वजन** | तराजू | सभी आयु |
| **ऊंचाई/लंबाई** | स्टेडियोमीटर | सभी आयु |
| **MUAC** | MUAC टेप | 6 माह - 5 वर्ष |
| **सिर परिधि** | मापने वाला टेप | 0-2 वर्ष |

---

## ⚖️ वजन मापन

### शिशुओं के लिए तकनीक
1. स्केल शून्य/कैलिब्रेट करें
2. बच्चे के कपड़े उतारें
3. स्केल के केंद्र में रखें
4. रीडिंग स्थिर होने तक प्रतीक्षा करें
5. निकटतम 10g पर दर्ज करें

---

## 📐 ऊंचाई/लंबाई माप

### लंबाई (बच्चे <2 वर्ष)
- **स्थिति:** लेटकर
- **उपकरण:** इन्फैंटोमीटर
- **तकनीक:**
  1. दो लोग आवश्यक
  2. सिर स्थिर हेडबोर्ड के खिलाफ
  3. पैर सीधे
  4. तलवों के खिलाफ फुटबोर्ड

### ऊंचाई (बच्चे ≥2 वर्ष)
- **स्थिति:** खड़े होकर
- **उपकरण:** स्टेडियोमीटर
- **तकनीक:**
  1. बिना जूते
  2. एड़ी, नितंब, कंधे दीवार के खिलाफ
  3. सीधे आगे देखें
  4. हेडपीस नीचे करें

---

## 💪 मिड-अपर आर्म सर्कमफरेंस (MUAC)

### MUAC क्यों?
- तीव्र कुपोषण की त्वरित स्क्रीनिंग
- 6 माह से 5 वर्ष की आयु
- वजन/ऊंचाई की आवश्यकता नहीं

### तकनीक
1. बाईं ऊपरी बांह का मध्यबिंदु खोजें
2. एक्रोमियन से ओलेक्रानन तक मापें
3. मध्यबिंदु चिह्नित करें
4. निशान पर MUAC टेप लपेटें
5. निकटतम 0.1 cm पर पढ़ें

### MUAC वर्गीकरण

| MUAC | पोषण स्थिति | कार्रवाई |
|:-----|:----------|:-------|
| **≥13.5 cm** | सामान्य | निगरानी जारी |
| **12.5-13.4 cm** | जोखिम में (MAM) | परामर्श |
| **11.5-12.4 cm** | मध्यम कुपोषण | पूरक आहार |
| **<11.5 cm** | गंभीर कुपोषण (SAM) | तत्काल रेफरल |

### MUAC टेप पर रंग बैंड
- **हरा:** ≥13.5 cm (सामान्य)
- **पीला:** 12.5-13.4 cm (जोखिम में)
- **नारंगी:** 11.5-12.4 cm (MAM)
- **लाल:** <11.5 cm (SAM)

---

## 👶 सिर परिधि

### महत्व
- मस्तिष्क विकास आकलन (0-2 वर्ष)
- हाइड्रोसेफेलस, माइक्रोसेफली का पता

### तकनीक
1. गैर-खिंचाव वाला टेप
2. भौंहों के ऊपर
3. ओसीपुट के सबसे चौड़े हिस्से के चारों ओर
4. निकटतम 0.1 cm पर दर्ज करें

### सामान्य मान

| आयु | सिर परिधि |
|:----|:---------|
| **जन्म** | 33-35 cm |
| **1 वर्ष** | 47 cm |
| **2 वर्ष** | 49 cm |

---

## 📊 विकास चार्ट

### Z-स्कोर वर्गीकरण

| Z-स्कोर | व्याख्या |
|:--------|:-------|
| **>+2** | अधिक वजन/मोटापा |
| **+2 से -2** | सामान्य |
| **-2 से -3** | मध्यम कुपोषण |
| **<-3** | गंभीर कुपोषण |

### संकेतक

| संकेतक | Z-स्कोर <-2 | स्थिति |
|:-------|:----------|:------|
| **वजन-आयु** | कम वजन | तीव्र या पुरानी |
| **ऊंचाई-आयु** | स्टंटेड | पुरानी कुपोषण |
| **वजन-ऊंचाई** | वेस्टेड | तीव्र कुपोषण |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. MUAC <11.5 cm = SAM (लाल) - तत्काल रेफरल
2. MUAC 11.5-12.4 cm = MAM (नारंगी)
3. लंबाई = लेटकर (<2 वर्ष)
4. ऊंचाई = खड़े होकर (≥2 वर्ष)
5. जन्म पर सिर परिधि = 33-35 cm
6. Z-स्कोर <-3 = गंभीर कुपोषण
7. वजन-ऊंचाई = तीव्र (वेस्टिंग)
8. ऊंचाई-आयु = पुरानी (स्टंटिंग)
:::
`
  },
  {
    id: 9,
    titleEn: "Cold Chain Management",
    titleHi: "शीत श्रृंखला प्रबंधन",
    contentEn: `
# ❄️ Cold Chain Management

---

## 📖 What is Cold Chain?

**Definition:** A system of storing and transporting vaccines at recommended temperatures from manufacturer to beneficiary.

### Cold Chain Components
1. **Cold chain equipment** (refrigerators, ILR, freezers)
2. **Cold chain personnel** (trained staff)
3. **Cold chain procedures** (SOPs)
4. **Cold chain monitoring** (temperature logs)

---

## 🌡️ Temperature Requirements

### Vaccine Storage Temperature

| Vaccine Type | Temperature |
|:-------------|:------------|
| **Most vaccines** | +2°C to +8°C |
| **OPV (diluent for some)** | -15°C to -25°C (freezer) |
| **Ice packs** | -15°C to -25°C |

:::danger
**Critical Points:**
- Never freeze vaccines (except OPV)
- Freezing damages DPT, TT, Hep B, IPV
- Frozen vaccines lose potency permanently
:::

---

## 🧊 Cold Chain Equipment

### Ice Lined Refrigerator (ILR)

| Feature | Specification |
|:--------|:-------------|
| **Temperature** | +2°C to +8°C |
| **Location** | PHC, CHC |
| **Holdover time** | 6 hours (without power) |
| **Ice packs** | At bottom |

### Deep Freezer (DF)

| Feature | Specification |
|:--------|:-------------|
| **Temperature** | -15°C to -25°C |
| **Use** | Freeze ice packs, store OPV |
| **Holdover time** | 8-10 hours |

### Vaccine Carriers

| Type | Capacity | Holdover Time |
|:-----|:---------|:--------------|
| **Small** | 0.8 L | 6-8 hours |
| **Large** | 1.7-2.6 L | 12-18 hours |

### Cold Boxes

| Type | Capacity | Holdover Time |
|:-----|:---------|:--------------|
| **Small** | 5-8 L | 2-3 days |
| **Large** | 20-25 L | 3-5 days |

---

## 🧊 Ice Pack Conditioning

### Why Condition Ice Packs?
- Freshly frozen packs are too cold (-20°C)
- Can freeze vaccines on contact
- Must be conditioned to 0°C

### Conditioning Steps
1. Remove ice packs from freezer
2. Leave at room temperature
3. Wait until sweating starts
4. Shake - listen for water sound
5. Surface should be wet
6. Temperature reaches 0°C
7. Ready for use

:::tip
**Remember:** Ice packs MUST be conditioned before placing with vaccines. Unconditioned packs can freeze and damage vaccines!
:::

---

## 📦 Vaccine Storage Rules

### ILR Storage Arrangement

| Position | What to Store |
|:---------|:-------------|
| **Top basket** | OPV, measles, MR, BCG diluents |
| **Middle basket** | DPT, Pentavalent, TT, Hep B |
| **Bottom** | Ice packs (frozen) |

### Storage Rules
- Do NOT store food, drinks, or medicines
- Do NOT overload refrigerator
- Leave space for air circulation
- Keep vaccines in original packaging
- Follow EEFO (Earliest Expiry First Out)

---

## 📊 Temperature Monitoring

### Twice Daily Recording
- **Morning:** Before starting work
- **Evening:** Before leaving

### Temperature Log Book
- Date, time, morning temp, evening temp
- Signature of recorder
- Any unusual events

### Thermometer Placement
- One inside ILR (on vaccine tray)
- Record both min and max if available

---

## ⚠️ Shake Test (for Freeze-Damaged Vaccines)

### When to Perform
- Suspected freezing exposure
- Equipment failure
- Vaccines left outside

### Procedure
1. Take suspect vial and fresh vial of SAME vaccine
2. Shake both vials vigorously
3. Place side by side
4. Observe sedimentation

### Interpretation

| Observation | Result |
|:------------|:-------|
| **Same rate of settling** | OK to use |
| **Suspect settles faster** | Freeze damaged - DISCARD |
| **Suspect forms layers** | Freeze damaged - DISCARD |

---

## 🚨 Cold Chain Emergencies

### Power Failure Actions
1. Do NOT open ILR door
2. Note time of failure
3. Record temperature
4. Cover with blanket
5. Inform supervisor

### ILR Breakdown
1. Transfer vaccines to cold box with conditioned ice packs
2. Inform repair team
3. Document incident
4. Continue temperature monitoring

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Vaccine temperature = +2°C to +8°C
2. Never freeze vaccines (except OPV)
3. Condition ice packs before use
4. Shake test for freeze damage
5. EEFO - Earliest Expiry First Out
6. Record temperature twice daily
7. ILR holdover = 6 hours
8. Don't store food in vaccine refrigerator
:::
`,
    contentHi: `
# ❄️ शीत श्रृंखला प्रबंधन

---

## 📖 शीत श्रृंखला क्या है?

**परिभाषा:** निर्माता से लाभार्थी तक अनुशंसित तापमान पर टीकों को संग्रहीत और परिवहन करने की प्रणाली।

### शीत श्रृंखला घटक
1. **शीत श्रृंखला उपकरण** (रेफ्रिजरेटर, ILR, फ्रीजर)
2. **शीत श्रृंखला कर्मचारी** (प्रशिक्षित स्टाफ)
3. **शीत श्रृंखला प्रक्रियाएं** (SOP)
4. **शीत श्रृंखला निगरानी** (तापमान लॉग)

---

## 🌡️ तापमान आवश्यकताएं

### टीका भंडारण तापमान

| टीका प्रकार | तापमान |
|:----------|:-------|
| **अधिकांश टीके** | +2°C से +8°C |
| **OPV** | -15°C से -25°C (फ्रीजर) |
| **आइस पैक** | -15°C से -25°C |

:::danger
**महत्वपूर्ण बिंदु:**
- टीकों को कभी फ्रीज न करें (OPV छोड़कर)
- फ्रीजिंग से DPT, TT, Hep B क्षतिग्रस्त
- फ्रोजन टीके स्थायी रूप से शक्ति खो देते हैं
:::

---

## 🧊 शीत श्रृंखला उपकरण

### आइस लाइन्ड रेफ्रिजरेटर (ILR)

| विशेषता | विनिर्देश |
|:--------|:---------|
| **तापमान** | +2°C से +8°C |
| **स्थान** | PHC, CHC |
| **होल्डओवर समय** | 6 घंटे (बिना बिजली) |

### डीप फ्रीजर (DF)

| विशेषता | विनिर्देश |
|:--------|:---------|
| **तापमान** | -15°C से -25°C |
| **उपयोग** | आइस पैक फ्रीज, OPV स्टोर |
| **होल्डओवर समय** | 8-10 घंटे |

### वैक्सीन कैरियर

| प्रकार | क्षमता | होल्डओवर समय |
|:-------|:------|:-----------|
| **छोटा** | 0.8 L | 6-8 घंटे |
| **बड़ा** | 1.7-2.6 L | 12-18 घंटे |

---

## 🧊 आइस पैक कंडीशनिंग

### कंडीशनिंग क्यों?
- ताजे फ्रोजन पैक बहुत ठंडे होते हैं (-20°C)
- संपर्क में टीकों को फ्रीज कर सकते हैं
- 0°C पर कंडीशन होना चाहिए

### कंडीशनिंग चरण
1. फ्रीजर से आइस पैक निकालें
2. कमरे के तापमान पर रखें
3. पसीना आने तक प्रतीक्षा करें
4. हिलाएं - पानी की आवाज सुनें
5. सतह गीली होनी चाहिए
6. तापमान 0°C पहुंचता है
7. उपयोग के लिए तैयार

:::tip
**याद रखें:** टीकों के साथ रखने से पहले आइस पैक कंडीशन होने चाहिए। बिना कंडीशन के पैक टीकों को फ्रीज कर सकते हैं!
:::

---

## 📦 टीका भंडारण नियम

### ILR भंडारण व्यवस्था

| स्थिति | क्या रखें |
|:-------|:---------|
| **ऊपरी बास्केट** | OPV, खसरा, MR, BCG डाइल्यूएंट |
| **मध्य बास्केट** | DPT, पेंटावेलेंट, TT, Hep B |
| **तल** | आइस पैक (फ्रोजन) |

### भंडारण नियम
- भोजन, पेय, या दवाएं न रखें
- रेफ्रिजरेटर को ओवरलोड न करें
- हवा के संचार के लिए जगह छोड़ें
- टीके मूल पैकेजिंग में रखें
- EEFO का पालन करें

---

## 📊 तापमान निगरानी

### दैनिक दो बार रिकॉर्डिंग
- **सुबह:** काम शुरू करने से पहले
- **शाम:** जाने से पहले

### तापमान लॉग बुक
- तारीख, समय, सुबह तापमान, शाम तापमान
- रिकॉर्डर के हस्ताक्षर
- कोई असामान्य घटना

---

## ⚠️ शेक टेस्ट (फ्रीज-क्षतिग्रस्त टीकों के लिए)

### कब करें
- संदिग्ध फ्रीजिंग एक्सपोजर
- उपकरण विफलता
- बाहर छोड़े गए टीके

### प्रक्रिया
1. संदिग्ध वायल और उसी टीके की ताजी वायल लें
2. दोनों को जोर से हिलाएं
3. साथ-साथ रखें
4. सेडिमेंटेशन देखें

### व्याख्या

| अवलोकन | परिणाम |
|:--------|:-------|
| **एक जैसी दर से बैठना** | उपयोग योग्य |
| **संदिग्ध तेजी से बैठे** | फ्रीज क्षतिग्रस्त - त्यागें |
| **संदिग्ध में परतें बनें** | फ्रीज क्षतिग्रस्त - त्यागें |

---

## 🚨 शीत श्रृंखला आपातकाल

### बिजली विफलता क्रियाएं
1. ILR दरवाजा न खोलें
2. विफलता का समय नोट करें
3. तापमान रिकॉर्ड करें
4. कंबल से ढकें
5. सुपरवाइजर को सूचित करें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. टीका तापमान = +2°C से +8°C
2. टीकों को कभी फ्रीज न करें (OPV छोड़कर)
3. उपयोग से पहले आइस पैक कंडीशन करें
4. फ्रीज क्षति के लिए शेक टेस्ट
5. EEFO - पहले समाप्ति पहले बाहर
6. दिन में दो बार तापमान रिकॉर्ड करें
7. ILR होल्डओवर = 6 घंटे
8. टीका रेफ्रिजरेटर में भोजन न रखें
:::
`
  },
  {
    id: 10,
    titleEn: "IV Cannulation & Fluid Administration",
    titleHi: "IV कैन्युलेशन और द्रव प्रशासन",
    contentEn: `
# 💧 IV Cannulation & Fluid Administration

---

## 📖 Introduction

**IV Cannulation:** Insertion of a plastic cannula into a peripheral vein for fluid and medication administration.

### Indications
- Fluid replacement
- Blood transfusion
- IV medication
- Nutrition (TPN)
- Emergency access

---

## 🩸 Site Selection

### Common Sites (in order of preference)

| Site | Vein | Notes |
|:-----|:-----|:------|
| **Forearm** | Cephalic, basilic | Preferred - stable |
| **Dorsum of hand** | Metacarpal veins | Common choice |
| **Antecubital fossa** | Median cubital | Emergency, blood draw |
| **Lower limb** | Saphenous | Last resort (adults) |

### Avoid
- Sites over joints (flexion = kinking)
- Infected skin
- Bruised areas
- Limb with AV fistula
- Same side as mastectomy
- Edematous limbs

---

## 💉 IV Cannula Sizes

### Color Coding

| Color | Gauge | Flow Rate | Use |
|:------|:------|:----------|:----|
| **Orange** | 14G | 270 mL/min | Rapid transfusion |
| **Grey** | 16G | 180 mL/min | Surgery, trauma |
| **Green** | 18G | 90 mL/min | Blood transfusion |
| **Pink** | 20G | 60 mL/min | Routine IV fluids |
| **Blue** | 22G | 36 mL/min | Children, elderly |
| **Yellow** | 24G | 22 mL/min | Pediatrics, small veins |

:::tip
**Remember:** Larger gauge = Smaller number = Faster flow
:::

---

## 🔧 IV Cannulation Procedure

### Equipment
- Appropriate size cannula
- Tourniquet
- Alcohol swabs
- Sterile gauze
- Transparent dressing
- IV fluid and giving set
- Gloves
- Sharps container

### Steps

1. **Prepare patient**
   - Explain procedure
   - Position comfortably
   - Select site

2. **Apply tourniquet**
   - 3-4 inches above site
   - Ask patient to clench fist

3. **Select vein**
   - Palpate, should be bouncy
   - Avoid arteries (pulsating)

4. **Clean site**
   - Alcohol swab, circular motion
   - Let dry completely

5. **Insert cannula**
   - Anchor vein with thumb
   - 15-30° angle, bevel up
   - Watch for flashback
   - Advance slightly
   - Thread cannula, withdraw needle

6. **Secure cannula**
   - Release tourniquet
   - Flush with saline
   - Apply transparent dressing
   - Document date of insertion

---

## 💧 IV Fluids

### Types of IV Fluids

| Type | Example | Use |
|:-----|:--------|:----|
| **Crystalloids** | NS, RL, D5W | Most common |
| **Colloids** | Albumin, Dextran | Severe hypovolemia |
| **Blood products** | PRBC, FFP | Blood loss |

### Common Crystalloids

| Fluid | Composition | Use |
|:------|:------------|:----|
| **Normal Saline (0.9%)** | NaCl 154 mEq/L | Dehydration, shock |
| **Ringer's Lactate** | Na, K, Ca, Lactate | Burns, surgery |
| **5% Dextrose** | Glucose 50g/L | Hypoglycemia, maintenance |
| **DNS** | Dextrose + NS | Maintenance |

---

## ⚙️ IV Drip Rate Calculation

### Formula

\`\`\`
Drops/min = (Volume × Drop factor) ÷ Time in minutes
\`\`\`

### Drop Factors

| Set Type | Drops/mL |
|:---------|:---------|
| **Standard (macro)** | 15-20 drops/mL |
| **Pediatric (micro)** | 60 drops/mL |

### Example Calculation

:::info
**Problem:** Give 1000 mL NS over 8 hours using standard set (20 drops/mL)

**Solution:**
- Time = 8 × 60 = 480 minutes
- Drops/min = (1000 × 20) ÷ 480
- Drops/min = 20000 ÷ 480
- **Answer: ≈42 drops/minute**
:::

---

## ⚠️ Complications

### Local Complications

| Complication | Signs | Action |
|:-------------|:------|:-------|
| **Infiltration** | Swelling, cool, pale | Stop IV, remove cannula |
| **Phlebitis** | Red, warm, tender along vein | Remove, warm compress |
| **Hematoma** | Bruising, swelling | Apply pressure |
| **Extravasation** | Pain, swelling (irritant drugs) | Stop immediately, antidote |

### Systemic Complications

| Complication | Signs | Action |
|:-------------|:------|:-------|
| **Fluid overload** | Dyspnea, edema, JVP raised | Slow/stop IV, diuretics |
| **Air embolism** | Chest pain, dyspnea | Trendelenburg, O2 |
| **Sepsis** | Fever, chills | Remove cannula, culture |

---

## 📋 IV Site Care

### Daily Monitoring
- Check for redness, swelling, pain
- Check flow rate
- Ensure dressing intact
- Flush regularly

### Cannula Change
- Change every 72-96 hours (routine)
- Change immediately if complications
- Document insertion/change dates

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Green (18G) for blood, Pink (20G) for routine
2. Larger gauge = Smaller number = Faster flow
3. 15-30° angle, bevel up
4. Watch for flashback
5. Change cannula every 72-96 hours
6. Drops/min = (Volume × Drop factor) ÷ Time
7. Standard set = 20 drops/mL
8. Phlebitis = Red, warm, tender - Remove cannula
:::
`,
    contentHi: `
# 💧 IV कैन्युलेशन और द्रव प्रशासन

---

## 📖 परिचय

**IV कैन्युलेशन:** द्रव और दवा प्रशासन के लिए परिधीय शिरा में प्लास्टिक कैन्युला का प्रवेश।

### संकेत
- द्रव प्रतिस्थापन
- रक्त आधान
- IV दवा
- पोषण (TPN)
- आपातकालीन पहुंच

---

## 🩸 स्थान चयन

### सामान्य स्थान (वरीयता क्रम में)

| स्थान | शिरा | नोट्स |
|:------|:-----|:-----|
| **अग्रबाहु** | सेफेलिक, बेसिलिक | पसंदीदा - स्थिर |
| **हाथ का पृष्ठ** | मेटाकार्पल | सामान्य विकल्प |
| **एंटीक्यूबिटल फोसा** | मीडियन क्यूबिटल | आपातकाल |

### बचें
- जोड़ों पर स्थान
- संक्रमित त्वचा
- चोट वाले क्षेत्र
- AV फिस्टुला वाला अंग
- सूजे हुए अंग

---

## 💉 IV कैन्युला आकार

### रंग कोडिंग

| रंग | गेज | प्रवाह दर | उपयोग |
|:----|:-----|:---------|:-----|
| **नारंगी** | 14G | 270 mL/min | तीव्र आधान |
| **ग्रे** | 16G | 180 mL/min | सर्जरी, आघात |
| **हरा** | 18G | 90 mL/min | रक्त आधान |
| **गुलाबी** | 20G | 60 mL/min | नियमित IV |
| **नीला** | 22G | 36 mL/min | बच्चे, बुजुर्ग |
| **पीला** | 24G | 22 mL/min | बाल चिकित्सा |

:::tip
**याद रखें:** बड़ा गेज = छोटी संख्या = तेज प्रवाह
:::

---

## 🔧 IV कैन्युलेशन प्रक्रिया

### उपकरण
- उचित आकार का कैन्युला
- टूर्निकेट
- अल्कोहल स्वाब
- बाँझ गॉज
- पारदर्शी ड्रेसिंग
- IV द्रव और सेट
- दस्ताने
- शार्प्स कंटेनर

### चरण

1. **रोगी तैयार करें**
   - प्रक्रिया समझाएं
   - आराम से स्थिति
   - स्थान चुनें

2. **टूर्निकेट लगाएं**
   - स्थान से 3-4 इंच ऊपर
   - मुट्ठी बंद करने को कहें

3. **शिरा चुनें**
   - टटोलें, उछालदार होनी चाहिए
   - धमनियों से बचें (स्पंदित)

4. **स्थान साफ करें**
   - अल्कोहल स्वाब, वृत्ताकार गति
   - पूरी तरह सूखने दें

5. **कैन्युला डालें**
   - अंगूठे से शिरा को स्थिर करें
   - 15-30° कोण, बेवल ऊपर
   - फ्लैशबैक देखें
   - थोड़ा आगे बढ़ाएं
   - कैन्युला थ्रेड करें, सुई निकालें

6. **कैन्युला सुरक्षित करें**
   - टूर्निकेट छोड़ें
   - सेलाइन से फ्लश करें
   - पारदर्शी ड्रेसिंग लगाएं
   - प्रवेश तिथि दर्ज करें

---

## 💧 IV द्रव

### IV द्रव के प्रकार

| प्रकार | उदाहरण | उपयोग |
|:-------|:-------|:-----|
| **क्रिस्टलॉइड्स** | NS, RL, D5W | सबसे आम |
| **कोलॉइड्स** | एल्ब्यूमिन | गंभीर हाइपोवोलेमिया |
| **रक्त उत्पाद** | PRBC, FFP | रक्त हानि |

### सामान्य क्रिस्टलॉइड्स

| द्रव | उपयोग |
|:-----|:-----|
| **नॉर्मल सेलाइन (0.9%)** | निर्जलीकरण, शॉक |
| **रिंगर्स लैक्टेट** | जलन, सर्जरी |
| **5% डेक्सट्रोज** | हाइपोग्लाइसीमिया |

---

## ⚙️ IV ड्रिप दर गणना

### सूत्र

\`\`\`
बूंद/मिनट = (मात्रा × ड्रॉप फैक्टर) ÷ मिनटों में समय
\`\`\`

### ड्रॉप फैक्टर

| सेट प्रकार | बूंद/mL |
|:----------|:-------|
| **मानक (मैक्रो)** | 15-20 बूंद/mL |
| **बाल चिकित्सा (माइक्रो)** | 60 बूंद/mL |

---

## ⚠️ जटिलताएं

### स्थानीय जटिलताएं

| जटिलता | संकेत | कार्रवाई |
|:-------|:------|:-------|
| **इनफिल्ट्रेशन** | सूजन, ठंडा, पीला | IV रोकें, कैन्युला हटाएं |
| **फ्लेबाइटिस** | लाल, गर्म, दर्दनाक | हटाएं, गर्म सेक |
| **हेमेटोमा** | चोट, सूजन | दबाव लगाएं |

### प्रणालीगत जटिलताएं

| जटिलता | संकेत | कार्रवाई |
|:-------|:------|:-------|
| **द्रव अधिभार** | सांस फूलना, सूजन | IV धीमा/बंद करें |
| **वायु एम्बोलिज्म** | सीने में दर्द | ट्रेंडेलनबर्ग, O2 |
| **सेप्सिस** | बुखार, कंपकंपी | कैन्युला हटाएं |

---

## 📋 IV साइट देखभाल

### दैनिक निगरानी
- लालिमा, सूजन, दर्द जांचें
- प्रवाह दर जांचें
- ड्रेसिंग बरकरार सुनिश्चित करें
- नियमित फ्लश करें

### कैन्युला बदलें
- हर 72-96 घंटे बदलें (नियमित)
- जटिलताओं पर तुरंत बदलें
- प्रवेश/बदलाव तिथियां दर्ज करें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. हरा (18G) रक्त के लिए, गुलाबी (20G) नियमित
2. बड़ा गेज = छोटी संख्या = तेज प्रवाह
3. 15-30° कोण, बेवल ऊपर
4. फ्लैशबैक देखें
5. हर 72-96 घंटे कैन्युला बदलें
6. बूंद/मिनट = (मात्रा × ड्रॉप फैक्टर) ÷ समय
7. मानक सेट = 20 बूंद/mL
8. फ्लेबाइटिस = लाल, गर्म - कैन्युला हटाएं
:::
`
  },
  {
    id: 11,
    titleEn: "Catheterization & Nasogastric Tube",
    titleHi: "कैथीटेराइजेशन और नासोगैस्ट्रिक ट्यूब",
    contentEn: `
# 🏥 Catheterization & Nasogastric Tube

---

## 📖 Urinary Catheterization

### Indications
- Urinary retention
- Accurate urine output monitoring
- Surgery (bladder emptying)
- Incontinence (if other methods fail)
- Bladder irrigation

### Types of Catheters

| Type | Use | Duration |
|:-----|:----|:---------|
| **Foley (indwelling)** | Long-term | Days to weeks |
| **Straight** | Single use | One-time |
| **Three-way** | Irrigation | Post-surgery |

### Catheter Sizes (French scale)

| Size | Use |
|:-----|:----|
| **12-14 Fr** | Adult female |
| **14-16 Fr** | Adult male |
| **18-20 Fr** | Post-surgery, clots |
| **6-10 Fr** | Children |

:::tip
**French Scale:** Circumference in mm. Higher number = Larger diameter
:::

---

## 🚺 Female Catheterization

### Equipment
- Sterile catheter (appropriate size)
- Sterile gloves
- Antiseptic solution
- Sterile drapes
- Lubricant (water-soluble)
- Urine bag
- Syringe with sterile water (for balloon)

### Procedure

1. **Position:** Dorsal recumbent, knees bent, thighs apart
2. **Drape:** Create sterile field
3. **Clean:** Labia apart, clean urethral meatus with antiseptic (front to back)
4. **Lubricate:** Catheter tip
5. **Insert:** Into urethral opening (5-7 cm)
6. **Advance:** Until urine flows
7. **Inflate balloon:** With 10 mL sterile water
8. **Connect:** To drainage bag
9. **Secure:** Catheter to thigh

---

## 🚹 Male Catheterization

### Procedure

1. **Position:** Supine, legs slightly apart
2. **Drape:** Create sterile field
3. **Retract:** Foreskin (if present)
4. **Hold:** Penis perpendicular to body
5. **Clean:** Glans and meatus with antiseptic (circular, center out)
6. **Lubricate:** Instill gel into urethra
7. **Insert:** Catheter slowly (15-20 cm)
8. **Resistance:** At prostate - ask patient to breathe deeply
9. **Advance:** To bifurcation
10. **Inflate balloon:** 10 mL sterile water
11. **Connect:** To drainage bag
12. **Replace:** Foreskin to prevent paraphimosis

---

## ⚠️ Catheter Care

### Daily Care
- Clean around meatus daily
- Empty bag when 2/3 full
- Keep bag below bladder level
- Check for kinks in tubing
- Maintain closed system

### Complications

| Complication | Prevention |
|:-------------|:-----------|
| **UTI** | Aseptic technique, early removal |
| **Trauma** | Proper lubrication, correct size |
| **Blockage** | Adequate hydration, irrigation |
| **Balloon rupture** | Use correct water volume |

---

## 🔴 Nasogastric (NG) Tube

### Indications
- Gastric decompression
- Feeding (enteral nutrition)
- Medication administration
- Gastric lavage (poisoning)
- Diagnosis (GI bleed)

### Types

| Type | Use | Features |
|:-----|:----|:---------|
| **Ryle's tube** | Feeding, aspiration | Single lumen |
| **Levin tube** | Decompression | Single lumen, vent |
| **Salem sump** | Continuous suction | Double lumen |

---

## 📏 Measuring NG Tube Length

### NEX Method (Nose-Ear-Xiphoid)

1. Measure from **Nose** tip
2. To **Ear** lobe
3. To **Xiphoid** process (bottom of sternum)
4. Mark this length on tube

:::tip
**Average Length:**
- Adult: 50-60 cm
- Mark at nostril entry point
:::

---

## 🔧 NG Tube Insertion Procedure

### Equipment
- NG tube (appropriate size)
- Lubricant (water-soluble)
- Syringe (50 mL)
- Stethoscope
- Tape for fixing
- Kidney tray
- Glass of water with straw

### Steps

1. **Position:** Sitting upright or semi-Fowler's
2. **Measure:** NEX length, mark tube
3. **Lubricate:** Distal 10 cm of tube
4. **Insert:** Through nostril, aim down and back
5. **Advance:** When reaching pharynx - ask to swallow
6. **Continue:** Advance while patient swallows water
7. **Check position:** Aspirate gastric contents OR auscultate air injection
8. **Secure:** Tape to nose (not pulling)
9. **Confirm:** X-ray (for feeding tubes)

### Position Confirmation Methods

| Method | How |
|:-------|:----|
| **Aspiration** | Withdraw gastric contents (green/yellow) |
| **Auscultation** | Inject 10-20 mL air, listen at epigastrium |
| **X-ray** | Gold standard for feeding tubes |
| **pH testing** | Gastric aspirate pH <5.5 |

---

## ⚠️ NG Tube Complications

| Complication | Prevention |
|:-------------|:-----------|
| **Nasal irritation** | Alternate nostrils, proper taping |
| **Aspiration** | Elevate head, check position |
| **Esophageal injury** | Never force, use lubricant |
| **Tube displacement** | Secure properly, mark position |
| **Sinusitis** | Use smallest effective size |

:::danger
**Stop insertion if:**
- Respiratory distress
- Coughing/cyanosis (may be in trachea)
- Unable to speak
- Resistance felt
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Male catheter = 14-16 Fr, Female = 12-14 Fr
2. Insert female 5-7 cm, male 15-20 cm
3. Inflate balloon with 10 mL sterile water
4. Keep urine bag below bladder level
5. NG tube length = NEX (Nose-Ear-Xiphoid)
6. Confirm NG position by aspiration or auscultation
7. X-ray = gold standard for feeding tube
8. Stop if coughing/respiratory distress
:::
`,
    contentHi: `
# 🏥 कैथीटेराइजेशन और नासोगैस्ट्रिक ट्यूब

---

## 📖 मूत्र कैथीटेराइजेशन

### संकेत
- मूत्र प्रतिधारण
- सटीक मूत्र उत्पादन निगरानी
- सर्जरी (मूत्राशय खाली करना)
- असंयम
- मूत्राशय सिंचाई

### कैथेटर के प्रकार

| प्रकार | उपयोग | अवधि |
|:-------|:-----|:-----|
| **फोले (इंडवेलिंग)** | दीर्घकालिक | दिन से सप्ताह |
| **स्ट्रेट** | एकल उपयोग | एक बार |
| **थ्री-वे** | सिंचाई | पोस्ट-सर्जरी |

### कैथेटर आकार (फ्रेंच स्केल)

| आकार | उपयोग |
|:-----|:-----|
| **12-14 Fr** | वयस्क महिला |
| **14-16 Fr** | वयस्क पुरुष |
| **18-20 Fr** | पोस्ट-सर्जरी |
| **6-10 Fr** | बच्चे |

---

## 🚺 महिला कैथीटेराइजेशन

### प्रक्रिया

1. **स्थिति:** पृष्ठीय अवलंबित, घुटने मुड़े
2. **ड्रेप:** बाँझ क्षेत्र बनाएं
3. **साफ करें:** लेबिया अलग, एंटीसेप्टिक से (आगे से पीछे)
4. **चिकनाई:** कैथेटर टिप
5. **डालें:** मूत्रमार्ग में (5-7 cm)
6. **आगे बढ़ाएं:** जब तक मूत्र न बहे
7. **बैलून फुलाएं:** 10 mL बाँझ पानी से
8. **जोड़ें:** ड्रेनेज बैग से
9. **सुरक्षित करें:** जांघ पर

---

## 🚹 पुरुष कैथीटेराइजेशन

### प्रक्रिया

1. **स्थिति:** सुपाइन, पैर थोड़े अलग
2. **फोरस्किन पीछे करें** (यदि हो)
3. **लिंग पकड़ें** शरीर से लंबवत
4. **साफ करें:** एंटीसेप्टिक से (वृत्ताकार)
5. **चिकनाई:** मूत्रमार्ग में जेल डालें
6. **डालें:** धीरे-धीरे (15-20 cm)
7. **प्रतिरोध:** प्रोस्टेट पर - गहरी सांस लेने को कहें
8. **द्विभाजन तक आगे बढ़ाएं**
9. **बैलून फुलाएं:** 10 mL बाँझ पानी
10. **ड्रेनेज बैग से जोड़ें**
11. **फोरस्किन वापस रखें** (पैराफिमोसिस रोकने के लिए)

---

## ⚠️ कैथेटर देखभाल

### दैनिक देखभाल
- मीटस के आसपास दैनिक सफाई
- 2/3 भरने पर बैग खाली करें
- बैग मूत्राशय स्तर से नीचे रखें
- ट्यूबिंग में किंक जांचें
- बंद प्रणाली बनाए रखें

### जटिलताएं

| जटिलता | रोकथाम |
|:-------|:-------|
| **UTI** | एसेप्टिक तकनीक, जल्दी निकालना |
| **आघात** | उचित चिकनाई, सही आकार |
| **रुकावट** | पर्याप्त हाइड्रेशन |

---

## 🔴 नासोगैस्ट्रिक (NG) ट्यूब

### संकेत
- गैस्ट्रिक डिकंप्रेशन
- फीडिंग (एंटरल न्यूट्रिशन)
- दवा प्रशासन
- गैस्ट्रिक लैवेज (विषाक्तता)
- निदान (GI ब्लीड)

### प्रकार

| प्रकार | उपयोग | विशेषताएं |
|:-------|:-----|:---------|
| **राइल्स ट्यूब** | फीडिंग, एस्पिरेशन | सिंगल लुमेन |
| **लेविन ट्यूब** | डिकंप्रेशन | सिंगल लुमेन, वेंट |
| **सेलम सम्प** | निरंतर सक्शन | डबल लुमेन |

---

## 📏 NG ट्यूब लंबाई मापना

### NEX विधि (नाक-कान-जिफॉइड)

1. **नाक** की नोक से मापें
2. **कान** के लोब तक
3. **जिफॉइड** प्रक्रिया तक (स्टर्नम का निचला भाग)
4. ट्यूब पर यह लंबाई चिह्नित करें

:::tip
**औसत लंबाई:**
- वयस्क: 50-60 cm
- नथुने प्रवेश बिंदु पर चिह्न
:::

---

## 🔧 NG ट्यूब प्रवेश प्रक्रिया

### उपकरण
- NG ट्यूब (उचित आकार)
- चिकनाई (पानी में घुलनशील)
- सीरिंज (50 mL)
- स्टेथोस्कोप
- टेप
- किडनी ट्रे
- स्ट्रॉ के साथ पानी का गिलास

### चरण

1. **स्थिति:** बैठे या सेमी-फाउलर्स
2. **मापें:** NEX लंबाई, ट्यूब चिह्नित करें
3. **चिकनाई:** ट्यूब के डिस्टल 10 cm
4. **डालें:** नथुने से, नीचे और पीछे की ओर
5. **आगे बढ़ाएं:** ग्रसनी पहुंचने पर - निगलने को कहें
6. **जारी रखें:** रोगी पानी निगलते समय आगे बढ़ाएं
7. **स्थिति जांचें:** गैस्ट्रिक सामग्री एस्पिरेट करें
8. **सुरक्षित करें:** नाक पर टेप
9. **पुष्टि:** X-ray (फीडिंग ट्यूब के लिए)

### स्थिति पुष्टि विधियां

| विधि | कैसे |
|:-----|:----|
| **एस्पिरेशन** | गैस्ट्रिक सामग्री निकालें (हरा/पीला) |
| **ऑस्कल्टेशन** | 10-20 mL हवा इंजेक्ट करें, एपिगैस्ट्रियम पर सुनें |
| **X-ray** | फीडिंग ट्यूब के लिए स्वर्ण मानक |
| **pH परीक्षण** | गैस्ट्रिक एस्पिरेट pH <5.5 |

---

## ⚠️ NG ट्यूब जटिलताएं

| जटिलता | रोकथाम |
|:-------|:-------|
| **नाक जलन** | वैकल्पिक नथुने, उचित टेपिंग |
| **एस्पिरेशन** | सिर ऊंचा, स्थिति जांचें |
| **इसोफेजियल चोट** | कभी जबरदस्ती न करें |
| **ट्यूब विस्थापन** | ठीक से सुरक्षित करें |

:::danger
**प्रवेश रोकें यदि:**
- श्वसन संकट
- खांसी/सायनोसिस (ट्रेकिया में हो सकता है)
- बोलने में असमर्थ
- प्रतिरोध महसूस हो
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. पुरुष कैथेटर = 14-16 Fr, महिला = 12-14 Fr
2. महिला 5-7 cm, पुरुष 15-20 cm डालें
3. 10 mL बाँझ पानी से बैलून फुलाएं
4. मूत्र बैग मूत्राशय स्तर से नीचे रखें
5. NG ट्यूब लंबाई = NEX (नाक-कान-जिफॉइड)
6. एस्पिरेशन या ऑस्कल्टेशन से NG स्थिति पुष्टि
7. X-ray = फीडिंग ट्यूब के लिए स्वर्ण मानक
8. खांसी/श्वसन संकट पर रोकें
:::
`
  },
  {
    id: 12,
    titleEn: "Community Health Procedures",
    titleHi: "सामुदायिक स्वास्थ्य प्रक्रियाएं",
    contentEn: `
# 🏘️ Community Health Procedures

---

## 📖 Home Visits

### Purpose
- Health assessment
- Follow-up care
- Health education
- Environmental assessment
- Family welfare services

### Types of Home Visits

| Type | Purpose |
|:-----|:--------|
| **Initial visit** | Assessment, baseline data |
| **Follow-up visit** | Monitor progress, reinforce education |
| **Emergency visit** | Urgent health concern |
| **Referral visit** | Post-discharge, referred cases |

### Home Visit Bag Contents

| Category | Items |
|:---------|:------|
| **Assessment** | BP apparatus, thermometer, stethoscope |
| **Maternal** | Fetoscope, MUAC tape, urine strips |
| **Child** | Growth chart, ORS packets |
| **Supplies** | Dressings, cotton, gloves |
| **Records** | MCH card, referral slips, register |

---

## 📊 Conducting Health Survey

### Steps

1. **Planning**
   - Define objectives
   - Select sample
   - Prepare tools

2. **Data Collection**
   - Household listing
   - Interview schedule
   - Clinical examination

3. **Recording**
   - Complete all fields
   - Use standard codes
   - Verify data

4. **Analysis**
   - Compile data
   - Calculate rates
   - Identify priorities

### Key Health Indicators to Collect

| Category | Indicators |
|:---------|:-----------|
| **Demographic** | Population, births, deaths |
| **Maternal** | ANC registration, institutional delivery |
| **Child** | Immunization, malnutrition |
| **Disease** | Morbidity patterns |
| **Environmental** | Water source, sanitation |

---

## 💉 Organizing Immunization Sessions

### Session Planning

| Task | Timeline |
|:-----|:---------|
| **Micro-plan** | Monthly |
| **Due list** | Before session |
| **Vaccine indent** | 2-3 days before |
| **Mobilization** | Day before |

### Session Site Requirements
- Clean, shaded area
- Safe drinking water
- Seating for mothers
- Waste disposal
- IEC materials

### Session Checklist

| Equipment | ✓ |
|:----------|:--|
| ILR/Vaccine carrier | □ |
| Conditioned ice packs | □ |
| All required vaccines | □ |
| AD syringes | □ |
| Tally sheets | □ |
| Immunization cards | □ |
| AEFI kit | □ |

---

## 🏥 Health Camp Organization

### Types of Health Camps

| Camp Type | Services |
|:----------|:---------|
| **General health** | Screening, treatment, referral |
| **Eye camp** | Vision testing, cataract surgery |
| **Dental camp** | Oral health, extractions |
| **Specialist** | ENT, cardiac, orthopedic |
| **NCD screening** | BP, blood sugar, BMI |

### Planning Steps

1. **Site selection:** Accessible, adequate space
2. **Date/time:** Convenient for community
3. **Team formation:** Doctors, nurses, volunteers
4. **Equipment:** Medical supplies, records
5. **Publicity:** IEC, announcements
6. **Registration:** Token system, record keeping
7. **Follow-up:** Referral, treatment continuation

---

## 📝 Health Education Sessions

### Steps for Conducting Session

1. **Preparation**
   - Identify topic based on need
   - Know your audience
   - Prepare teaching aids
   - Rehearse

2. **Introduction**
   - Greet audience
   - State topic and objectives
   - Create interest

3. **Presentation**
   - Use simple language
   - Show, don't just tell
   - Use local examples
   - Encourage questions

4. **Summary**
   - Recap key points
   - Check understanding
   - Provide take-home message

### Teaching Aids

| Type | Example |
|:-----|:--------|
| **Visual** | Posters, flip charts, models |
| **Audio-visual** | Videos, slides |
| **Real objects** | ORS packet, condom demo |
| **Printed** | Pamphlets, booklets |

---

## 🔍 Contact Tracing

### Process

1. **Index case identification**
2. **Contact listing**
   - Household contacts
   - Close contacts
   - Casual contacts

3. **Contact investigation**
   - Clinical examination
   - Laboratory tests
   - Chemoprophylaxis if indicated

4. **Follow-up**
   - Monitor for symptoms
   - Repeat testing
   - Complete treatment

### Diseases Requiring Contact Tracing

| Disease | Contacts to Trace |
|:--------|:-----------------|
| **Tuberculosis** | Household, close contacts |
| **Leprosy** | Household contacts |
| **STI/HIV** | Sexual partners |
| **COVID-19** | Close contacts |
| **Measles** | School, community |

---

## 🌍 Environmental Sanitation Assessment

### Areas to Assess

| Area | What to Check |
|:-----|:--------------|
| **Water** | Source, storage, treatment |
| **Sanitation** | Toilet type, use, maintenance |
| **Waste** | Solid waste disposal |
| **Housing** | Ventilation, overcrowding |
| **Vectors** | Mosquito breeding, rodents |

### Water Source Safety

| Source | Risk Level |
|:-------|:-----------|
| **Piped water** | Low (if chlorinated) |
| **Bore well** | Low-Medium |
| **Protected well** | Medium |
| **Unprotected well** | High |
| **Pond/river** | Very high |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Home visit bag: BP apparatus, thermometer, MUAC tape
2. Session planning: Micro-plan → Due list → Vaccine indent → Mobilization
3. Always condition ice packs before immunization session
4. Health education: Know audience, use simple language, local examples
5. Contact tracing priority: Household > Close > Casual
6. Water safety: Piped (safe) > Bore well > Protected well > Unprotected (unsafe)
7. Health camp needs: Site, team, equipment, publicity, registration
8. Environmental assessment: Water, sanitation, waste, housing, vectors
:::
`,
    contentHi: `
# 🏘️ सामुदायिक स्वास्थ्य प्रक्रियाएं

---

## 📖 घर का दौरा

### उद्देश्य
- स्वास्थ्य मूल्यांकन
- फॉलो-अप देखभाल
- स्वास्थ्य शिक्षा
- पर्यावरण मूल्यांकन
- परिवार कल्याण सेवाएं

### घर के दौरे के प्रकार

| प्रकार | उद्देश्य |
|:-------|:--------|
| **प्रारंभिक दौरा** | मूल्यांकन, आधारभूत डेटा |
| **फॉलो-अप दौरा** | प्रगति निगरानी |
| **आपातकालीन दौरा** | तत्काल स्वास्थ्य चिंता |
| **रेफरल दौरा** | डिस्चार्ज के बाद |

### घर के दौरे के बैग की सामग्री

| श्रेणी | आइटम |
|:-------|:-----|
| **मूल्यांकन** | BP उपकरण, थर्मामीटर, स्टेथोस्कोप |
| **मातृ** | फेटोस्कोप, MUAC टेप, यूरिन स्ट्रिप्स |
| **बच्चा** | विकास चार्ट, ORS पैकेट |
| **आपूर्ति** | ड्रेसिंग, कॉटन, दस्ताने |
| **रिकॉर्ड** | MCH कार्ड, रेफरल स्लिप, रजिस्टर |

---

## 📊 स्वास्थ्य सर्वेक्षण संचालन

### चरण

1. **योजना**
   - उद्देश्य परिभाषित करें
   - नमूना चुनें
   - उपकरण तैयार करें

2. **डेटा संग्रह**
   - घर की सूची
   - साक्षात्कार अनुसूची
   - नैदानिक परीक्षा

3. **रिकॉर्डिंग**
   - सभी फ़ील्ड पूरी करें
   - मानक कोड का उपयोग करें
   - डेटा सत्यापित करें

4. **विश्लेषण**
   - डेटा संकलित करें
   - दरें गणना करें
   - प्राथमिकताएं पहचानें

---

## 💉 टीकाकरण सत्र आयोजन

### सत्र योजना

| कार्य | समयरेखा |
|:-----|:-------|
| **माइक्रो-प्लान** | मासिक |
| **ड्यू लिस्ट** | सत्र से पहले |
| **वैक्सीन इंडेंट** | 2-3 दिन पहले |
| **मोबिलाइजेशन** | एक दिन पहले |

### सत्र स्थल आवश्यकताएं
- साफ, छायादार क्षेत्र
- सुरक्षित पेयजल
- माताओं के लिए बैठने की जगह
- कचरा निपटान
- IEC सामग्री

### सत्र चेकलिस्ट

| उपकरण | ✓ |
|:------|:--|
| ILR/वैक्सीन कैरियर | □ |
| कंडीशन्ड आइस पैक | □ |
| सभी आवश्यक टीके | □ |
| AD सीरिंज | □ |
| टैली शीट | □ |
| टीकाकरण कार्ड | □ |
| AEFI किट | □ |

---

## 🏥 स्वास्थ्य शिविर संगठन

### स्वास्थ्य शिविर के प्रकार

| शिविर प्रकार | सेवाएं |
|:----------|:------|
| **सामान्य स्वास्थ्य** | स्क्रीनिंग, उपचार, रेफरल |
| **नेत्र शिविर** | दृष्टि परीक्षण, मोतियाबिंद सर्जरी |
| **दंत शिविर** | मौखिक स्वास्थ्य, निष्कर्षण |
| **विशेषज्ञ** | ENT, कार्डियक, आर्थोपेडिक |
| **NCD स्क्रीनिंग** | BP, ब्लड शुगर, BMI |

### योजना चरण

1. **स्थल चयन:** सुलभ, पर्याप्त जगह
2. **तारीख/समय:** समुदाय के लिए सुविधाजनक
3. **टीम गठन:** डॉक्टर, नर्स, स्वयंसेवक
4. **उपकरण:** चिकित्सा आपूर्ति, रिकॉर्ड
5. **प्रचार:** IEC, घोषणाएं
6. **पंजीकरण:** टोकन प्रणाली
7. **फॉलो-अप:** रेफरल, उपचार जारी

---

## 📝 स्वास्थ्य शिक्षा सत्र

### सत्र संचालन के चरण

1. **तैयारी**
   - आवश्यकता के आधार पर विषय पहचानें
   - अपने दर्शकों को जानें
   - शिक्षण सहायक तैयार करें
   - अभ्यास करें

2. **परिचय**
   - दर्शकों का अभिवादन करें
   - विषय और उद्देश्य बताएं
   - रुचि पैदा करें

3. **प्रस्तुति**
   - सरल भाषा का उपयोग करें
   - दिखाएं, केवल बताएं नहीं
   - स्थानीय उदाहरण उपयोग करें
   - प्रश्न प्रोत्साहित करें

4. **सारांश**
   - मुख्य बिंदुओं का पुनर्कथन
   - समझ जांचें
   - घर ले जाने का संदेश दें

---

## 🔍 संपर्क अनुरेखण

### प्रक्रिया

1. **इंडेक्स केस पहचान**
2. **संपर्क सूची**
   - घरेलू संपर्क
   - निकट संपर्क
   - आकस्मिक संपर्क

3. **संपर्क जांच**
   - नैदानिक परीक्षा
   - प्रयोगशाला परीक्षण
   - यदि संकेत हो तो केमोप्रोफिलैक्सिस

4. **फॉलो-अप**
   - लक्षणों के लिए निगरानी
   - दोहराना परीक्षण
   - उपचार पूरा करें

### संपर्क अनुरेखण आवश्यक रोग

| रोग | अनुरेखित करने के संपर्क |
|:----|:---------------------|
| **क्षय रोग** | घरेलू, निकट संपर्क |
| **कुष्ठ** | घरेलू संपर्क |
| **STI/HIV** | यौन साथी |
| **COVID-19** | निकट संपर्क |
| **खसरा** | स्कूल, समुदाय |

---

## 🌍 पर्यावरण स्वच्छता मूल्यांकन

### मूल्यांकन क्षेत्र

| क्षेत्र | क्या जांचें |
|:-------|:----------|
| **पानी** | स्रोत, भंडारण, उपचार |
| **स्वच्छता** | शौचालय प्रकार, उपयोग, रखरखाव |
| **कचरा** | ठोस कचरा निपटान |
| **आवास** | वेंटिलेशन, अधिक भीड़ |
| **वेक्टर** | मच्छर प्रजनन, कृंतक |

### जल स्रोत सुरक्षा

| स्रोत | जोखिम स्तर |
|:------|:---------|
| **पाइप्ड पानी** | कम (यदि क्लोरीनेटेड) |
| **बोर वेल** | कम-मध्यम |
| **संरक्षित कुआं** | मध्यम |
| **असुरक्षित कुआं** | उच्च |
| **तालाब/नदी** | बहुत उच्च |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. घर के दौरे का बैग: BP उपकरण, थर्मामीटर, MUAC टेप
2. सत्र योजना: माइक्रो-प्लान → ड्यू लिस्ट → वैक्सीन इंडेंट → मोबिलाइजेशन
3. टीकाकरण सत्र से पहले आइस पैक कंडीशन करें
4. स्वास्थ्य शिक्षा: दर्शकों को जानें, सरल भाषा, स्थानीय उदाहरण
5. संपर्क अनुरेखण प्राथमिकता: घरेलू > निकट > आकस्मिक
6. जल सुरक्षा: पाइप्ड (सुरक्षित) > बोर वेल > संरक्षित > असुरक्षित
7. स्वास्थ्य शिविर: स्थल, टीम, उपकरण, प्रचार, पंजीकरण
8. पर्यावरण मूल्यांकन: पानी, स्वच्छता, कचरा, आवास, वेक्टर
:::
`
  }
];
