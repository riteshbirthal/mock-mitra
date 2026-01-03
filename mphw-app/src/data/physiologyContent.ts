export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const physiologyLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Physiology & Homeostasis",
    titleHi: "शरीर क्रिया विज्ञान का परिचय",
    contentEn: `
# 🔬 Introduction to Physiology & Homeostasis

---

## 📖 What is Physiology?

> **Physiology** is the study of how living organisms function - how the body works normally.

:::info
**Key Difference:**
- **Anatomy** = Structure (What is it?)
- **Physiology** = Function (How does it work?)
:::

---

## ⚖️ Homeostasis - The Key Concept

> **Homeostasis** is the maintenance of a stable internal environment despite changes in external conditions.

### Examples of Homeostasis

| Parameter | Normal Range | Regulation |
|:----------|:-------------|:-----------|
| 🌡️ **Body Temperature** | 36.5-37.5°C | Sweating, shivering |
| 🍬 **Blood Glucose** | 70-100 mg/dL (fasting) | Insulin, glucagon |
| ⚗️ **Blood pH** | 7.35-7.45 | Buffers, respiration |
| ❤️ **Blood Pressure** | 120/80 mmHg | Heart, vessels, kidneys |
| 🧂 **Sodium (Na⁺)** | 135-145 mEq/L | Kidneys, ADH |
| 🔋 **Potassium (K⁺)** | 3.5-5.0 mEq/L | Kidneys, aldosterone |

---

## 🔄 Feedback Mechanisms

### Negative Feedback (Most Common)
Reverses the change to restore normal state.

:::tip
**Example - Temperature Regulation:**
Body temp rises → Hypothalamus detects → Sweating + vasodilation → Temp decreases back to normal
:::

### Positive Feedback (Less Common)
Amplifies the change until a specific event occurs.

| Process | Mechanism |
|:--------|:----------|
| **Childbirth** | Oxytocin increases contractions |
| **Blood Clotting** | Clotting factors amplify cascade |
| **Ovulation** | LH surge triggers egg release |

---

## 🔢 Levels of Organization

| Level | Description | Examples |
|:------|:------------|:---------|
| 1️⃣ **Chemical** | Atoms, molecules | Water, proteins, DNA |
| 2️⃣ **Cellular** | Basic unit of life | RBC, WBC, neurons |
| 3️⃣ **Tissue** | Similar cells grouped | Muscle, nerve tissue |
| 4️⃣ **Organ** | Multiple tissues | Heart, liver, kidney |
| 5️⃣ **System** | Related organs | Cardiovascular system |
| 6️⃣ **Organism** | Complete being | Human body |

---

## 🧫 Cell Structure

### Key Cell Components

| Organelle | Function |
|:----------|:---------|
| **Cell Membrane** | Controls entry/exit |
| **Nucleus** | Contains DNA, controls cell |
| **Mitochondria** | Energy production (ATP) |
| **Ribosomes** | Protein synthesis |
| **ER** | Transport system |
| **Golgi Apparatus** | Packaging, secretion |

---

## 🚚 Cell Membrane Transport

### Passive Transport (No Energy)

| Type | Description |
|:-----|:------------|
| **Diffusion** | High → Low concentration |
| **Osmosis** | Water movement |
| **Facilitated** | Uses carrier proteins |

### Active Transport (Requires ATP)

| Type | Description |
|:-----|:------------|
| **Na⁺-K⁺ Pump** | Maintains cell potential |
| **Endocytosis** | Cell engulfs substances |
| **Exocytosis** | Cell releases substances |

---

## 💧 Body Fluids

### Distribution

| Compartment | Percentage | Location |
|:------------|:-----------|:---------|
| **Total Body Water** | 60% (males), 50% (females) | Throughout body |
| **Intracellular (ICF)** | 40% | Inside cells |
| **Extracellular (ECF)** | 20% | Outside cells |

:::warning
**Clinical Signs of Dehydration:**
- Dry mucous membranes
- Decreased skin turgor
- Sunken eyes
- Increased heart rate
:::

---

## 📊 Vital Signs & Physiology

| Vital Sign | What It Reflects |
|:-----------|:-----------------|
| **Temperature** | Heat balance, infection |
| **Pulse** | Heart function, blood volume |
| **Respiration** | O₂ needs, acid-base balance |
| **Blood Pressure** | Cardiovascular function |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Physiology = How body WORKS
2. Homeostasis = Maintaining stable internal environment
3. Negative feedback = Most common (reverses change)
4. Normal temp = 36.5-37.5°C
5. Normal pH = 7.35-7.45
6. Normal fasting glucose = 70-100 mg/dL
7. Total body water = 60% in males
8. Mitochondria = Powerhouse of cell
:::
`,
    contentHi: `
# 🔬 शरीर क्रिया विज्ञान का परिचय

---

## 📖 शरीर क्रिया विज्ञान क्या है?

> **शरीर क्रिया विज्ञान (Physiology)** जीवित प्राणियों के शरीर के कार्यों का अध्ययन है - शरीर कैसे काम करता है।

:::info
**मुख्य अंतर:**
- **शरीर रचना (Anatomy)** = संरचना (क्या है?)
- **शरीर क्रिया (Physiology)** = कार्य (कैसे काम करता है?)
:::

---

## ⚖️ होमियोस्टेसिस - मुख्य अवधारणा

> **होमियोस्टेसिस** शरीर की आंतरिक वातावरण को स्थिर रखने की क्षमता है।

### होमियोस्टेसिस के उदाहरण

| पैरामीटर | सामान्य मान | नियंत्रण |
|:---------|:-----------|:--------|
| 🌡️ **शरीर तापमान** | 36.5-37.5°C | पसीना, कंपकंपी |
| 🍬 **रक्त शर्करा** | 70-100 mg/dL | इंसुलिन, ग्लूकागन |
| ⚗️ **रक्त pH** | 7.35-7.45 | बफर, श्वसन |
| ❤️ **रक्तचाप** | 120/80 mmHg | हृदय, वाहिकाएं |
| 🧂 **सोडियम** | 135-145 mEq/L | वृक्क, ADH |
| 🔋 **पोटैशियम** | 3.5-5.0 mEq/L | वृक्क |

---

## 🔄 फीडबैक तंत्र

### नेगेटिव फीडबैक (सबसे आम)
परिवर्तन को उलटकर सामान्य स्थिति बहाल करता है।

:::tip
**उदाहरण - तापमान नियंत्रण:**
तापमान बढ़ता है → हाइपोथैलेमस पहचानता है → पसीना + वासोडाइलेशन → तापमान सामान्य होता है
:::

### पॉजिटिव फीडबैक (कम आम)
परिवर्तन को तेज करता है।

| प्रक्रिया | तंत्र |
|:---------|:------|
| **प्रसव** | ऑक्सीटोसिन संकुचन बढ़ाता है |
| **रक्त का थक्का** | थक्का कारक प्रवर्धित |
| **ओव्यूलेशन** | LH उछाल |

---

## 🔢 संगठन के स्तर

| स्तर | विवरण | उदाहरण |
|:-----|:------|:-------|
| 1️⃣ **रासायनिक** | परमाणु, अणु | जल, प्रोटीन |
| 2️⃣ **कोशिकीय** | जीवन की इकाई | RBC, WBC |
| 3️⃣ **ऊतक** | समान कोशिकाएं | पेशी, तंत्रिका |
| 4️⃣ **अंग** | कई ऊतक | हृदय, यकृत |
| 5️⃣ **तंत्र** | संबंधित अंग | हृदय-वाहिका |
| 6️⃣ **जीव** | संपूर्ण प्राणी | मानव शरीर |

---

## 🧫 कोशिका संरचना

### मुख्य कोशिका घटक

| अंगक | कार्य |
|:-----|:------|
| **कोशिका झिल्ली** | प्रवेश/निकास नियंत्रण |
| **केंद्रक** | DNA, कोशिका नियंत्रण |
| **माइटोकॉन्ड्रिया** | ऊर्जा उत्पादन (ATP) |
| **राइबोसोम** | प्रोटीन संश्लेषण |
| **गॉल्जी उपकरण** | पैकेजिंग, स्राव |

---

## 🚚 कोशिका झिल्ली परिवहन

### निष्क्रिय परिवहन (ऊर्जा नहीं)

| प्रकार | विवरण |
|:-------|:------|
| **विसरण** | उच्च → निम्न सांद्रता |
| **परासरण** | जल गति |
| **सुगम** | वाहक प्रोटीन |

### सक्रिय परिवहन (ATP आवश्यक)

| प्रकार | विवरण |
|:-------|:------|
| **Na⁺-K⁺ पंप** | कोशिका विभव बनाए रखना |
| **एंडोसाइटोसिस** | पदार्थ अंदर लेना |
| **एक्सोसाइटोसिस** | पदार्थ छोड़ना |

---

## 💧 शरीर के तरल

| भाग | प्रतिशत | स्थान |
|:----|:-------|:------|
| **कुल जल** | 60% (पुरुष) | पूरे शरीर में |
| **अंतःकोशिकीय** | 40% | कोशिकाओं के अंदर |
| **बाह्यकोशिकीय** | 20% | कोशिकाओं के बाहर |

:::warning
**निर्जलीकरण के लक्षण:**
- सूखी श्लेष्मा झिल्ली
- त्वचा का कम तनाव
- धंसी आंखें
- तेज हृदय गति
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. Physiology = शरीर कैसे काम करता है
2. होमियोस्टेसिस = स्थिर आंतरिक वातावरण
3. नेगेटिव फीडबैक = सबसे आम
4. सामान्य तापमान = 36.5-37.5°C
5. सामान्य pH = 7.35-7.45
6. फास्टिंग ग्लूकोज = 70-100 mg/dL
7. कुल शरीर जल = 60% (पुरुष)
8. माइटोकॉन्ड्रिया = कोशिका का पावरहाउस
:::
`
  },
  {
    id: 2,
    titleEn: "Blood & Cardiovascular Physiology",
    titleHi: "रक्त एवं हृदय-वाहिका शरीर क्रिया",
    contentEn: `
# 🩸 Blood & Cardiovascular Physiology

---

## 📖 Blood Composition

> **Blood** is a specialized connective tissue that transports oxygen, nutrients, hormones, and waste products.

### Blood Components

| Component | Percentage | Function |
|:----------|:-----------|:---------|
| **Plasma** | 55% | Liquid portion, carries substances |
| **RBCs** | 44% | Oxygen transport |
| **WBCs** | <1% | Immune defense |
| **Platelets** | <1% | Blood clotting |

---

## 🔴 Red Blood Cells (Erythrocytes)

:::info
**Key Facts:**
- **Shape:** Biconcave disc (increases surface area)
- **Lifespan:** 120 days
- **No nucleus** in mature RBCs
- Contains **hemoglobin** for O₂ transport
- Produced in **red bone marrow**
:::

### Hemoglobin

| Type | Normal Value |
|:-----|:-------------|
| **Males** | 14-18 g/dL |
| **Females** | 12-16 g/dL |
| **Newborn** | 14-24 g/dL |

---

## ⚪ White Blood Cells (Leukocytes)

| Type | Percentage | Function |
|:-----|:-----------|:---------|
| **Neutrophils** | 60-70% | Bacterial infection |
| **Lymphocytes** | 20-30% | Viral infection, immunity |
| **Monocytes** | 3-8% | Phagocytosis |
| **Eosinophils** | 1-4% | Allergies, parasites |
| **Basophils** | 0-1% | Inflammatory response |

:::tip
**Memory Trick:** "Never Let Monkeys Eat Bananas"
Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils
:::

---

## 🩹 Platelets & Clotting

### Clotting Process
1. **Vascular spasm** - Blood vessel constricts
2. **Platelet plug** - Platelets aggregate
3. **Coagulation cascade** - Fibrin mesh forms

### Clotting Factors
- **Vitamin K** dependent: II, VII, IX, X
- **Intrinsic pathway:** Contact activation
- **Extrinsic pathway:** Tissue factor

---

## 🅰️ Blood Groups

### ABO System

| Blood Type | Antigens | Antibodies | Can Receive |
|:-----------|:---------|:-----------|:------------|
| **A** | A | Anti-B | A, O |
| **B** | B | Anti-A | B, O |
| **AB** | A and B | None | A, B, AB, O |
| **O** | None | Anti-A, Anti-B | O only |

:::success
**Universal Donor:** O negative
**Universal Recipient:** AB positive
:::

### Rh Factor
- **Rh positive:** Has D antigen (85%)
- **Rh negative:** No D antigen (15%)

---

## ❤️ Cardiac Cycle

### Phases

| Phase | Atria | Ventricles |
|:------|:------|:-----------|
| **Atrial Systole** | Contract | Relax, fill |
| **Ventricular Systole** | Relax | Contract, eject |
| **Diastole** | Both relax, fill |

### Cardiac Output
> **CO = Heart Rate × Stroke Volume**

| Parameter | Normal Value |
|:----------|:-------------|
| **Heart Rate** | 60-100 bpm |
| **Stroke Volume** | 70 mL |
| **Cardiac Output** | 5 L/min |

---

## ⚡ Cardiac Conduction

### Pathway
1. **SA Node** → 2. **AV Node** → 3. **Bundle of His** → 4. **Purkinje Fibers**

:::info
**Pacemaker Rates:**
- SA Node: 60-100 bpm (primary)
- AV Node: 40-60 bpm (backup)
- Ventricles: 20-40 bpm (last resort)
:::

---

## 📊 ECG Waves

| Wave | Represents |
|:-----|:-----------|
| **P wave** | Atrial depolarization |
| **QRS complex** | Ventricular depolarization |
| **T wave** | Ventricular repolarization |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Blood = 55% plasma + 45% cells
2. RBC lifespan = 120 days
3. Hemoglobin: Male 14-18, Female 12-16 g/dL
4. O negative = Universal donor
5. AB positive = Universal recipient
6. Normal HR = 60-100 bpm
7. Cardiac output = 5 L/min
8. SA node = Primary pacemaker
:::
`,
    contentHi: `
# 🩸 रक्त एवं हृदय-वाहिका शरीर क्रिया

---

## 📖 रक्त की संरचना

> **रक्त** एक विशेष संयोजी ऊतक है जो ऑक्सीजन, पोषक तत्व, हार्मोन और अपशिष्ट का परिवहन करता है।

### रक्त घटक

| घटक | प्रतिशत | कार्य |
|:----|:-------|:------|
| **प्लाज्मा** | 55% | तरल भाग |
| **RBC** | 44% | O₂ परिवहन |
| **WBC** | <1% | प्रतिरक्षा |
| **प्लेटलेट्स** | <1% | थक्का जमाना |

---

## 🔴 लाल रक्त कोशिकाएं (RBC)

:::info
**मुख्य तथ्य:**
- **आकार:** द्विअवतल डिस्क
- **जीवनकाल:** 120 दिन
- परिपक्व RBC में **केंद्रक नहीं**
- **हीमोग्लोबिन** होता है
- **लाल अस्थि मज्जा** में बनती हैं
:::

### हीमोग्लोबिन

| प्रकार | सामान्य मान |
|:-------|:-----------|
| **पुरुष** | 14-18 g/dL |
| **महिला** | 12-16 g/dL |
| **नवजात** | 14-24 g/dL |

---

## ⚪ श्वेत रक्त कोशिकाएं (WBC)

| प्रकार | प्रतिशत | कार्य |
|:-------|:-------|:------|
| **न्यूट्रोफिल** | 60-70% | जीवाणु संक्रमण |
| **लिम्फोसाइट** | 20-30% | वायरल, प्रतिरक्षा |
| **मोनोसाइट** | 3-8% | फागोसाइटोसिस |
| **इओसिनोफिल** | 1-4% | एलर्जी, परजीवी |
| **बेसोफिल** | 0-1% | सूजन प्रतिक्रिया |

---

## 🅰️ रक्त समूह

### ABO प्रणाली

| रक्त प्रकार | एंटीजन | एंटीबॉडी | प्राप्त कर सकता है |
|:-----------|:-------|:--------|:-----------------|
| **A** | A | Anti-B | A, O |
| **B** | B | Anti-A | B, O |
| **AB** | A और B | कोई नहीं | A, B, AB, O |
| **O** | कोई नहीं | Anti-A, Anti-B | केवल O |

:::success
**सार्वभौमिक दाता:** O negative
**सार्वभौमिक प्राप्तकर्ता:** AB positive
:::

---

## ❤️ हृदय चक्र

### चरण

| चरण | अलिंद | निलय |
|:----|:------|:-----|
| **अलिंद सिस्टोल** | संकुचन | शिथिल, भरना |
| **निलय सिस्टोल** | शिथिल | संकुचन, निकालना |
| **डायस्टोल** | दोनों शिथिल, भरना |

### कार्डियक आउटपुट
> **CO = हृदय गति × स्ट्रोक वॉल्यूम**

| पैरामीटर | सामान्य मान |
|:---------|:-----------|
| **हृदय गति** | 60-100 bpm |
| **स्ट्रोक वॉल्यूम** | 70 mL |
| **कार्डियक आउटपुट** | 5 L/min |

---

## ⚡ हृदय चालन

### मार्ग
1. **SA Node** → 2. **AV Node** → 3. **Bundle of His** → 4. **Purkinje Fibers**

:::info
**पेसमेकर दरें:**
- SA Node: 60-100 bpm (प्राथमिक)
- AV Node: 40-60 bpm (बैकअप)
- निलय: 20-40 bpm (अंतिम)
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. रक्त = 55% प्लाज्मा + 45% कोशिकाएं
2. RBC जीवनकाल = 120 दिन
3. Hb: पुरुष 14-18, महिला 12-16 g/dL
4. O negative = सार्वभौमिक दाता
5. AB positive = सार्वभौमिक प्राप्तकर्ता
6. सामान्य HR = 60-100 bpm
7. कार्डियक आउटपुट = 5 L/min
8. SA node = प्राथमिक पेसमेकर
:::
`
  },
  {
    id: 3,
    titleEn: "Respiratory Physiology",
    titleHi: "श्वसन शरीर क्रिया",
    contentEn: `
# 🌬️ Respiratory Physiology

---

## 📖 Gas Exchange

> **Respiration** is the exchange of oxygen (O₂) and carbon dioxide (CO₂) between the body and environment.

:::info
**Types of Respiration:**
- **External:** Gas exchange in lungs
- **Internal:** Gas exchange in tissues
- **Cellular:** Energy production in cells
:::

---

## 🫁 Mechanics of Breathing

### Inspiration (Breathing In)

| Event | Result |
|:------|:-------|
| Diaphragm contracts | Moves down |
| External intercostals contract | Ribs move up/out |
| Thoracic volume increases | Lung pressure decreases |
| Air rushes in | Passive process (at rest) |

### Expiration (Breathing Out)

| Event | Result |
|:------|:-------|
| Diaphragm relaxes | Moves up |
| Elastic recoil | Thoracic volume decreases |
| Lung pressure increases | Air pushed out |

---

## 📊 Lung Volumes and Capacities

| Volume | Definition | Normal Value |
|:-------|:-----------|:-------------|
| **Tidal Volume (TV)** | Normal breath | 500 mL |
| **Inspiratory Reserve (IRV)** | Extra inhale | 3000 mL |
| **Expiratory Reserve (ERV)** | Extra exhale | 1100 mL |
| **Residual Volume (RV)** | Always in lungs | 1200 mL |

### Capacities

| Capacity | Formula | Value |
|:---------|:--------|:------|
| **Vital Capacity** | TV + IRV + ERV | 4600 mL |
| **Total Lung Capacity** | VC + RV | 5800 mL |
| **Functional Residual** | ERV + RV | 2300 mL |

---

## 🔄 Gas Transport

### Oxygen Transport

| Method | Percentage |
|:-------|:-----------|
| **Bound to Hemoglobin** | 98.5% |
| **Dissolved in Plasma** | 1.5% |

### Carbon Dioxide Transport

| Method | Percentage |
|:-------|:-----------|
| **Bicarbonate (HCO₃⁻)** | 70% |
| **Bound to Hemoglobin** | 23% |
| **Dissolved** | 7% |

:::tip
**Oxygen-Hemoglobin Dissociation:**
- Hb + O₂ ⇌ HbO₂ (Oxyhemoglobin)
- Each Hb can carry 4 O₂ molecules
:::

---

## 🎛️ Regulation of Breathing

### Respiratory Centers

| Center | Location | Function |
|:-------|:---------|:---------|
| **Medullary** | Medulla | Basic rhythm |
| **Pneumotaxic** | Pons | Limits inspiration |
| **Apneustic** | Pons | Prolongs inspiration |

### Chemical Control

| Stimulus | Response |
|:---------|:---------|
| ↑ CO₂ (hypercapnia) | ↑ Breathing |
| ↓ O₂ (hypoxia) | ↑ Breathing |
| ↓ pH (acidosis) | ↑ Breathing |

---

## 📈 Normal Values

| Parameter | Normal Range |
|:----------|:-------------|
| **Respiratory Rate** | 12-20/min (adult) |
| **Tidal Volume** | 500 mL |
| **Minute Ventilation** | 6 L/min |
| **PaO₂** | 80-100 mmHg |
| **PaCO₂** | 35-45 mmHg |
| **O₂ Saturation** | 95-100% |

---

## ⚠️ Abnormal Breathing Patterns

| Pattern | Description | Cause |
|:--------|:------------|:------|
| **Tachypnea** | Fast (>20/min) | Fever, anxiety |
| **Bradypnea** | Slow (<12/min) | Drugs, brain injury |
| **Dyspnea** | Difficulty | Heart/lung disease |
| **Apnea** | Absent | Sleep apnea, arrest |
| **Cheyne-Stokes** | Cyclic changes | Brain injury, heart failure |
| **Kussmaul** | Deep, rapid | Diabetic ketoacidosis |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Diaphragm = Main muscle of breathing
2. Tidal volume = 500 mL
3. Vital capacity = 4600 mL
4. 98.5% O₂ carried by hemoglobin
5. 70% CO₂ as bicarbonate
6. Normal RR = 12-20/min
7. Normal O₂ saturation = 95-100%
8. CO₂ is main breathing stimulus
:::
`,
    contentHi: `
# 🌬️ श्वसन शरीर क्रिया

---

## 📖 गैस विनिमय

> **श्वसन** शरीर और पर्यावरण के बीच ऑक्सीजन (O₂) और कार्बन डाइऑक्साइड (CO₂) का विनिमय है।

:::info
**श्वसन के प्रकार:**
- **बाह्य:** फेफड़ों में गैस विनिमय
- **आंतरिक:** ऊतकों में गैस विनिमय
- **कोशिकीय:** कोशिकाओं में ऊर्जा उत्पादन
:::

---

## 🫁 श्वसन की क्रियाविधि

### श्वास लेना (Inspiration)

| घटना | परिणाम |
|:-----|:-------|
| डायाफ्राम संकुचन | नीचे जाता है |
| बाहरी अंतर-पसली संकुचन | पसलियां ऊपर/बाहर |
| वक्ष आयतन बढ़ता | फेफड़े का दबाव कम |
| हवा अंदर आती है | निष्क्रिय प्रक्रिया |

### श्वास छोड़ना (Expiration)

| घटना | परिणाम |
|:-----|:-------|
| डायाफ्राम शिथिल | ऊपर जाता है |
| लोचदार प्रत्यावर्तन | वक्ष आयतन कम |
| फेफड़े का दबाव बढ़ता | हवा बाहर |

---

## 📊 फेफड़े की मात्राएं

| मात्रा | परिभाषा | सामान्य मान |
|:-------|:--------|:-----------|
| **ज्वारीय आयतन** | सामान्य सांस | 500 mL |
| **प्रश्वसनीय आरक्षित** | अतिरिक्त श्वास | 3000 mL |
| **निःश्वसनीय आरक्षित** | अतिरिक्त छोड़ना | 1100 mL |
| **अवशिष्ट आयतन** | हमेशा फेफड़ों में | 1200 mL |

### क्षमताएं

| क्षमता | सूत्र | मान |
|:-------|:-----|:----|
| **जीवन क्षमता** | TV+IRV+ERV | 4600 mL |
| **कुल क्षमता** | VC+RV | 5800 mL |

---

## 🔄 गैस परिवहन

### ऑक्सीजन परिवहन

| विधि | प्रतिशत |
|:-----|:-------|
| **हीमोग्लोबिन से बंधा** | 98.5% |
| **प्लाज्मा में घुला** | 1.5% |

### CO₂ परिवहन

| विधि | प्रतिशत |
|:-----|:-------|
| **बाइकार्बोनेट** | 70% |
| **हीमोग्लोबिन से बंधा** | 23% |
| **घुला हुआ** | 7% |

---

## 📈 सामान्य मान

| पैरामीटर | सामान्य सीमा |
|:---------|:-----------|
| **श्वसन दर** | 12-20/मिनट |
| **ज्वारीय आयतन** | 500 mL |
| **PaO₂** | 80-100 mmHg |
| **PaCO₂** | 35-45 mmHg |
| **O₂ संतृप्ति** | 95-100% |

---

## ⚠️ असामान्य श्वसन पैटर्न

| पैटर्न | विवरण | कारण |
|:-------|:------|:-----|
| **तीव्र श्वसन** | तेज (>20/मिनट) | बुखार, चिंता |
| **मंद श्वसन** | धीमा (<12/मिनट) | दवाएं |
| **श्वास कष्ट** | कठिनाई | हृदय/फेफड़े रोग |
| **श्वसन रुकना** | अनुपस्थित | स्लीप एपनिया |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. डायाफ्राम = मुख्य श्वसन पेशी
2. ज्वारीय आयतन = 500 mL
3. जीवन क्षमता = 4600 mL
4. 98.5% O₂ हीमोग्लोबिन से
5. 70% CO₂ बाइकार्बोनेट के रूप में
6. सामान्य RR = 12-20/मिनट
7. O₂ संतृप्ति = 95-100%
8. CO₂ = मुख्य श्वसन उत्तेजक
:::
`
  },
  {
    id: 4,
    titleEn: "Digestive & Renal Physiology",
    titleHi: "पाचन एवं वृक्क शरीर क्रिया",
    contentEn: `
# 🍽️ Digestive & Renal Physiology

---

## 📖 Digestive System Functions

> The **digestive system** breaks down food into nutrients that can be absorbed and used by the body.

### Main Functions
1. **Ingestion** - Taking in food
2. **Digestion** - Breaking down food
3. **Absorption** - Nutrients enter blood
4. **Defecation** - Elimination of waste

---

## 🔄 Digestive Process

| Organ | Secretion | Function |
|:------|:----------|:---------|
| **Mouth** | Saliva, amylase | Starch digestion begins |
| **Stomach** | HCl, pepsin | Protein digestion begins |
| **Liver** | Bile | Fat emulsification |
| **Pancreas** | Enzymes, bicarbonate | All nutrients |
| **Small Intestine** | Enzymes | Absorption |
| **Large Intestine** | Mucus | Water absorption |

---

## 🧪 Digestive Enzymes

### Carbohydrate Digestion
| Enzyme | Source | Substrate | Product |
|:-------|:-------|:----------|:--------|
| **Salivary Amylase** | Saliva | Starch | Maltose |
| **Pancreatic Amylase** | Pancreas | Starch | Maltose |
| **Maltase** | Intestine | Maltose | Glucose |

### Protein Digestion
| Enzyme | Source | pH |
|:-------|:-------|:---|
| **Pepsin** | Stomach | 1.5-2 |
| **Trypsin** | Pancreas | 8 |
| **Chymotrypsin** | Pancreas | 8 |

### Fat Digestion
| Substance | Source | Function |
|:----------|:-------|:---------|
| **Bile** | Liver | Emulsification |
| **Lipase** | Pancreas | Breaks into fatty acids |

---

## 💧 Renal Physiology

### Kidney Functions
1. **Filtration** - Removes waste from blood
2. **Reabsorption** - Returns useful substances
3. **Secretion** - Adds waste to urine
4. **Regulation** - Controls fluid/electrolyte balance

---

## 🔬 Nephron Function

> The **nephron** is the functional unit of the kidney.

### Parts of Nephron

| Structure | Function |
|:----------|:---------|
| **Glomerulus** | Filtration |
| **Proximal Tubule** | Reabsorption (65-70%) |
| **Loop of Henle** | Concentration |
| **Distal Tubule** | Fine-tuning |
| **Collecting Duct** | Final concentration |

---

## 📊 Urine Formation

### Glomerular Filtration Rate (GFR)
- **Normal GFR:** 120-125 mL/min
- **Daily filtrate:** ~180 L
- **Daily urine:** ~1.5 L

### What Gets Filtered
| Filtered | Not Filtered |
|:---------|:-------------|
| Water | Blood cells |
| Glucose | Proteins |
| Amino acids | Large molecules |
| Urea | Albumin |
| Electrolytes | |

---

## 🧪 Normal Urine Values

| Parameter | Normal Value |
|:----------|:-------------|
| **Volume** | 1-2 L/day |
| **pH** | 4.5-8.0 |
| **Specific Gravity** | 1.003-1.030 |
| **Color** | Pale to dark yellow |
| **Glucose** | Absent |
| **Protein** | Absent/trace |

---

## 🔄 Hormones in Kidney Function

| Hormone | Source | Action |
|:--------|:-------|:-------|
| **ADH** | Pituitary | ↑ Water reabsorption |
| **Aldosterone** | Adrenal | ↑ Na⁺ reabsorption |
| **ANP** | Heart | ↑ Na⁺ excretion |
| **Renin** | Kidney | Activates angiotensin |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Pepsin works in acidic pH (stomach)
2. Bile emulsifies fats (doesn't digest)
3. Most absorption in small intestine
4. GFR = 120-125 mL/min
5. Daily urine = 1-2 L
6. ADH increases water reabsorption
7. Aldosterone increases Na⁺ reabsorption
8. Normal urine pH = 4.5-8.0
:::
`,
    contentHi: `
# 🍽️ पाचन एवं वृक्क शरीर क्रिया

---

## 📖 पाचन तंत्र के कार्य

> **पाचन तंत्र** भोजन को पोषक तत्वों में तोड़ता है जो शरीर द्वारा अवशोषित और उपयोग किए जा सकते हैं।

### मुख्य कार्य
1. **अंतर्ग्रहण** - भोजन लेना
2. **पाचन** - भोजन तोड़ना
3. **अवशोषण** - पोषक रक्त में
4. **मलत्याग** - अपशिष्ट निष्कासन

---

## 🔄 पाचन प्रक्रिया

| अंग | स्राव | कार्य |
|:----|:------|:------|
| **मुंह** | लार, एमाइलेज | स्टार्च पाचन शुरू |
| **आमाशय** | HCl, पेप्सिन | प्रोटीन पाचन शुरू |
| **यकृत** | पित्त | वसा पायसीकरण |
| **अग्न्याशय** | एंजाइम | सभी पोषक |
| **छोटी आंत** | एंजाइम | अवशोषण |
| **बड़ी आंत** | श्लेष्मा | जल अवशोषण |

---

## 🧪 पाचक एंजाइम

### कार्बोहाइड्रेट पाचन
| एंजाइम | स्रोत | उत्पाद |
|:-------|:-----|:------|
| **लारीय एमाइलेज** | लार | माल्टोज |
| **अग्नाशयी एमाइलेज** | अग्न्याशय | माल्टोज |
| **माल्टेज** | आंत | ग्लूकोज |

### प्रोटीन पाचन
| एंजाइम | स्रोत | pH |
|:-------|:-----|:---|
| **पेप्सिन** | आमाशय | 1.5-2 |
| **ट्रिप्सिन** | अग्न्याशय | 8 |

### वसा पाचन
| पदार्थ | स्रोत | कार्य |
|:-------|:-----|:------|
| **पित्त** | यकृत | पायसीकरण |
| **लाइपेज** | अग्न्याशय | वसीय अम्ल |

---

## 💧 वृक्क शरीर क्रिया

### वृक्क कार्य
1. **निस्यंदन** - रक्त से अपशिष्ट हटाना
2. **पुनःअवशोषण** - उपयोगी पदार्थ वापस
3. **स्राव** - अपशिष्ट मूत्र में
4. **नियमन** - द्रव/इलेक्ट्रोलाइट संतुलन

---

## 🔬 नेफ्रॉन कार्य

### नेफ्रॉन के भाग

| संरचना | कार्य |
|:-------|:------|
| **ग्लोमेरुलस** | निस्यंदन |
| **समीपस्थ नलिका** | पुनःअवशोषण (65-70%) |
| **हेनले का लूप** | सांद्रण |
| **दूरस्थ नलिका** | सूक्ष्म समायोजन |
| **संग्रहण नलिका** | अंतिम सांद्रण |

---

## 📊 मूत्र निर्माण

### GFR
- **सामान्य GFR:** 120-125 mL/min
- **दैनिक छनित:** ~180 L
- **दैनिक मूत्र:** ~1.5 L

---

## 🧪 सामान्य मूत्र मान

| पैरामीटर | सामान्य मान |
|:---------|:-----------|
| **मात्रा** | 1-2 L/दिन |
| **pH** | 4.5-8.0 |
| **विशिष्ट गुरुत्व** | 1.003-1.030 |
| **रंग** | हल्का से गहरा पीला |
| **ग्लूकोज** | अनुपस्थित |
| **प्रोटीन** | अनुपस्थित |

---

## 🔄 वृक्क में हार्मोन

| हार्मोन | स्रोत | क्रिया |
|:--------|:-----|:------|
| **ADH** | पिट्यूटरी | ↑ जल पुनःअवशोषण |
| **एल्डोस्टेरोन** | अधिवृक्क | ↑ Na⁺ पुनःअवशोषण |
| **ANP** | हृदय | ↑ Na⁺ उत्सर्जन |
| **रेनिन** | वृक्क | एंजियोटेंसिन सक्रिय |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. पेप्सिन अम्लीय pH में काम करता है
2. पित्त वसा का पायसीकरण करता है
3. अधिकांश अवशोषण छोटी आंत में
4. GFR = 120-125 mL/min
5. दैनिक मूत्र = 1-2 L
6. ADH जल पुनःअवशोषण बढ़ाता है
7. एल्डोस्टेरोन Na⁺ पुनःअवशोषण बढ़ाता है
8. सामान्य मूत्र pH = 4.5-8.0
:::
`
  },
  {
    id: 5,
    titleEn: "Nervous & Endocrine System",
    titleHi: "तंत्रिका एवं अंतःस्रावी तंत्र",
    contentEn: `
# 🧠 Nervous & Endocrine System

---

## 📖 Nervous System Overview

> The **nervous system** controls and coordinates all body activities through electrical and chemical signals.

### Organization

| Division | Components |
|:---------|:-----------|
| **CNS** | Brain, Spinal cord |
| **PNS** | Cranial nerves (12), Spinal nerves (31) |
| **ANS** | Sympathetic, Parasympathetic |

---

## ⚡ Neuron Structure

| Part | Function |
|:-----|:---------|
| **Cell Body** | Contains nucleus |
| **Dendrites** | Receive signals |
| **Axon** | Transmits signals away |
| **Myelin Sheath** | Insulation, speeds conduction |
| **Synapse** | Junction between neurons |

### Nerve Impulse
- **Resting potential:** -70 mV
- **Action potential:** +30 mV
- **Saltatory conduction:** Jumping between nodes

---

## 🧠 Brain Regions

| Region | Functions |
|:-------|:----------|
| **Cerebrum** | Thinking, memory, voluntary movement |
| **Cerebellum** | Balance, coordination |
| **Brainstem** | Vital functions (breathing, HR) |
| **Hypothalamus** | Homeostasis, hormones |
| **Thalamus** | Relay station |

---

## 🔄 Autonomic Nervous System

| Feature | Sympathetic | Parasympathetic |
|:--------|:------------|:----------------|
| **Also Called** | Fight or Flight | Rest and Digest |
| **Heart Rate** | ↑ Increases | ↓ Decreases |
| **Pupils** | Dilate | Constrict |
| **Digestion** | ↓ Decreases | ↑ Increases |
| **Bronchi** | Dilate | Constrict |
| **Neurotransmitter** | Norepinephrine | Acetylcholine |

---

## 🧪 Endocrine System

> **Endocrine glands** secrete hormones directly into the bloodstream.

### Major Glands and Hormones

| Gland | Hormones | Functions |
|:------|:---------|:----------|
| **Pituitary** | GH, TSH, ACTH, FSH, LH | Master gland |
| **Thyroid** | T3, T4, Calcitonin | Metabolism, Ca²⁺ |
| **Parathyroid** | PTH | ↑ Blood calcium |
| **Adrenal Cortex** | Cortisol, Aldosterone | Stress, Na⁺/K⁺ |
| **Adrenal Medulla** | Epinephrine | Fight or flight |
| **Pancreas** | Insulin, Glucagon | Blood glucose |
| **Ovaries** | Estrogen, Progesterone | Female reproduction |
| **Testes** | Testosterone | Male reproduction |

---

## 🍬 Blood Glucose Regulation

| Condition | Hormone | Action |
|:----------|:--------|:-------|
| **High glucose** | Insulin | ↓ Glucose, stores as glycogen |
| **Low glucose** | Glucagon | ↑ Glucose, breaks down glycogen |

:::warning
**Diabetes:**
- **Type 1:** No insulin production (autoimmune)
- **Type 2:** Insulin resistance (lifestyle)
:::

---

## 🦴 Calcium Regulation

| Condition | Hormone | Action |
|:----------|:--------|:-------|
| **Low Ca²⁺** | PTH | ↑ Blood calcium |
| **High Ca²⁺** | Calcitonin | ↓ Blood calcium |

---

## 💧 Water Balance

| Condition | Hormone | Action |
|:----------|:--------|:-------|
| **Dehydrated** | ADH ↑ | ↑ Water reabsorption |
| **Overhydrated** | ADH ↓ | ↓ Water reabsorption |

---

## 🧪 Thyroid Hormones

| Hormone | Function |
|:--------|:---------|
| **T3 (Triiodothyronine)** | Most active form |
| **T4 (Thyroxine)** | Converted to T3 |
| **TSH** | Stimulates thyroid |

:::info
**Disorders:**
- **Hyperthyroidism:** Fast metabolism, weight loss
- **Hypothyroidism:** Slow metabolism, weight gain
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. CNS = Brain + Spinal cord
2. 12 cranial nerves, 31 spinal nerves
3. Sympathetic = Fight or Flight
4. Parasympathetic = Rest and Digest
5. Insulin ↓ glucose, Glucagon ↑ glucose
6. PTH ↑ calcium, Calcitonin ↓ calcium
7. ADH ↑ water reabsorption
8. T3 is most active thyroid hormone
:::
`,
    contentHi: `
# 🧠 तंत्रिका एवं अंतःस्रावी तंत्र

---

## 📖 तंत्रिका तंत्र अवलोकन

> **तंत्रिका तंत्र** विद्युत और रासायनिक संकेतों के माध्यम से सभी शारीरिक गतिविधियों को नियंत्रित करता है।

### संगठन

| विभाग | घटक |
|:------|:-----|
| **CNS** | मस्तिष्क, मेरुरज्जु |
| **PNS** | कपाल तंत्रिकाएं (12), मेरु तंत्रिकाएं (31) |
| **ANS** | अनुकंपी, परानुकंपी |

---

## ⚡ न्यूरॉन संरचना

| भाग | कार्य |
|:----|:------|
| **कोशिका काय** | केंद्रक रखता है |
| **डेंड्राइट्स** | संकेत प्राप्त |
| **एक्सॉन** | संकेत प्रसारित |
| **माइलिन शीथ** | इन्सुलेशन |
| **सिनैप्स** | न्यूरॉन जंक्शन |

---

## 🧠 मस्तिष्क क्षेत्र

| क्षेत्र | कार्य |
|:-------|:------|
| **प्रमस्तिष्क** | सोच, स्मृति, ऐच्छिक गति |
| **अनुमस्तिष्क** | संतुलन, समन्वय |
| **मस्तिष्क स्टेम** | महत्वपूर्ण कार्य |
| **हाइपोथैलेमस** | होमियोस्टेसिस |
| **थैलेमस** | रिले स्टेशन |

---

## 🔄 स्वायत्त तंत्रिका तंत्र

| विशेषता | अनुकंपी | परानुकंपी |
|:--------|:--------|:---------|
| **उपनाम** | लड़ो या भागो | आराम और पाचन |
| **हृदय गति** | ↑ बढ़ती | ↓ घटती |
| **पुतलियां** | फैलती | सिकुड़ती |
| **पाचन** | ↓ घटता | ↑ बढ़ता |

---

## 🧪 अंतःस्रावी तंत्र

### प्रमुख ग्रंथियां और हार्मोन

| ग्रंथि | हार्मोन | कार्य |
|:-------|:--------|:------|
| **पिट्यूटरी** | GH, TSH, ACTH | मास्टर ग्रंथि |
| **थायरॉइड** | T3, T4 | चयापचय |
| **पैराथायरॉइड** | PTH | ↑ कैल्शियम |
| **अधिवृक्क** | कॉर्टिसोल | तनाव |
| **अग्न्याशय** | इंसुलिन, ग्लूकागन | रक्त शर्करा |
| **अंडाशय** | एस्ट्रोजन | महिला प्रजनन |
| **वृषण** | टेस्टोस्टेरोन | पुरुष प्रजनन |

---

## 🍬 रक्त शर्करा नियमन

| स्थिति | हार्मोन | क्रिया |
|:-------|:--------|:------|
| **उच्च ग्लूकोज** | इंसुलिन | ↓ ग्लूकोज |
| **निम्न ग्लूकोज** | ग्लूकागन | ↑ ग्लूकोज |

:::warning
**मधुमेह:**
- **टाइप 1:** इंसुलिन उत्पादन नहीं
- **टाइप 2:** इंसुलिन प्रतिरोध
:::

---

## 🦴 कैल्शियम नियमन

| स्थिति | हार्मोन | क्रिया |
|:-------|:--------|:------|
| **निम्न Ca²⁺** | PTH | ↑ रक्त कैल्शियम |
| **उच्च Ca²⁺** | कैल्सिटोनिन | ↓ रक्त कैल्शियम |

---

## 💧 जल संतुलन

| स्थिति | हार्मोन | क्रिया |
|:-------|:--------|:------|
| **निर्जलित** | ADH ↑ | ↑ जल पुनःअवशोषण |
| **अति-जलयुक्त** | ADH ↓ | ↓ जल पुनःअवशोषण |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. CNS = मस्तिष्क + मेरुरज्जु
2. 12 कपाल तंत्रिकाएं, 31 मेरु तंत्रिकाएं
3. अनुकंपी = लड़ो या भागो
4. परानुकंपी = आराम और पाचन
5. इंसुलिन ↓ ग्लूकोज, ग्लूकागन ↑ ग्लूकोज
6. PTH ↑ कैल्शियम, कैल्सिटोनिन ↓
7. ADH ↑ जल पुनःअवशोषण
8. T3 = सबसे सक्रिय थायरॉइड हार्मोन
:::
`
  },
  {
    id: 6,
    titleEn: "Renal System Physiology",
    titleHi: "वृक्क तंत्र शरीर क्रिया",
    contentEn: `
# 🫘 Renal System Physiology

---

## 📖 Kidney Functions Overview

> The **kidneys** are vital organs that maintain homeostasis by filtering blood, regulating fluids, and producing hormones.

:::info
**Major Functions:**
1. **Excretion** - Remove waste (urea, creatinine)
2. **Regulation** - Water, electrolytes, acid-base balance
3. **Blood Pressure Control** - Renin-angiotensin system
4. **Hormone Production** - Erythropoietin, Vitamin D
5. **Gluconeogenesis** - Glucose production during fasting
:::

---

## 🔬 Nephron Structure

> The **nephron** is the functional unit - each kidney has ~1 million nephrons.

### Parts of Nephron

| Structure | Function |
|:----------|:---------|
| **Glomerulus** | Tuft of capillaries where filtration occurs |
| **Bowman's Capsule** | Surrounds glomerulus, collects filtrate |
| **Proximal Tubule (PCT)** | Major reabsorption site (65-70%) |
| **Loop of Henle** | Concentrates urine |
| **Distal Tubule (DCT)** | Fine-tuning of reabsorption |
| **Collecting Duct** | Final concentration of urine |

---

## 💧 Urine Formation

### Three Processes

:::tip
**1. Glomerular Filtration:**
- Blood filtered through glomerulus
- GFR: ~125 mL/min (180 L/day)
- Filtrate contains: water, glucose, amino acids, electrolytes, waste
- NOT filtered: RBCs, proteins, large molecules
:::

:::success
**2. Tubular Reabsorption:**
- 99% of filtrate is reabsorbed
- PCT reabsorbs: Glucose, amino acids, sodium, water
- Loop of Henle: Concentrates urine
- Hormones regulate what is kept or excreted
:::

:::warning
**3. Tubular Secretion:**
- Additional waste added to urine
- H⁺ ions, K⁺, drugs, toxins
:::

---

## 📊 Urine Characteristics

### Normal Urine Values

| Parameter | Normal Value |
|:----------|:-------------|
| 💧 **Volume** | 1-2 liters/day (adults) |
| 🎨 **Color** | Pale yellow (urochrome) |
| ⚗️ **pH** | 4.5-8 (average 6) |
| ⚖️ **Specific Gravity** | 1.003-1.030 |
| 💦 **Composition** | 95% water, 5% solutes |

### Abnormal Findings

| Finding | Definition | Causes |
|:--------|:-----------|:-------|
| **Polyuria** | >3 L/day | Diabetes, excess fluids |
| **Oliguria** | <400 mL/day | Dehydration, kidney failure |
| **Anuria** | <100 mL/day | Kidney failure |
| **Hematuria** | Blood in urine | Infection, stones, trauma |
| **Proteinuria** | Protein in urine | Kidney disease |
| **Glycosuria** | Glucose in urine | Diabetes mellitus |

---

## 💧 Water Balance

### Daily Water Balance

| Intake | Amount | Output | Amount |
|:-------|:-------|:-------|:-------|
| 🚰 Drinking | 1500 mL | 🚽 Urine | 1500 mL |
| 🍽️ Food | 700 mL | 💩 Feces | 100 mL |
| 🔥 Metabolism | 300 mL | 💦 Sweat | 500 mL |
| | | 🫁 Lungs | 400 mL |
| **Total** | **2500 mL** | **Total** | **2500 mL** |

### Regulation Hormones

| Hormone | Source | Action |
|:--------|:-------|:-------|
| **ADH** | Posterior pituitary | ↑ Water reabsorption |
| **Aldosterone** | Adrenal cortex | ↑ Na⁺ (and water) reabsorption |
| **ANP** | Heart | ↑ Na⁺ and water excretion |

---

## ⚡ Electrolyte Balance

### Major Electrolytes

| Electrolyte | Normal Range | Function |
|:------------|:-------------|:---------|
| 🧂 **Sodium (Na⁺)** | 135-145 mEq/L | Fluid balance, nerve function |
| 🔋 **Potassium (K⁺)** | 3.5-5 mEq/L | Muscle function, heart rhythm |
| 💚 **Chloride (Cl⁻)** | 98-106 mEq/L | Fluid balance, gastric acid |
| 🦴 **Calcium (Ca²⁺)** | 8.5-10.5 mg/dL | Bone, muscle, nerve function |

### Electrolyte Disorders

| Disorder | Level | Symptoms |
|:---------|:------|:---------|
| **Hyponatremia** | Low Na⁺ | Confusion, seizures |
| **Hypernatremia** | High Na⁺ | Thirst, confusion |
| **Hypokalemia** | Low K⁺ | Muscle weakness, arrhythmias |
| **Hyperkalemia** | High K⁺ | ⚠️ Dangerous for heart |

---

## ⚗️ Acid-Base Balance

### Normal Blood pH: 7.35-7.45

### Regulation Mechanisms

| Mechanism | Speed | Action |
|:----------|:------|:-------|
| 🧪 **Buffer Systems** | Immediate | Bicarbonate, phosphate, protein |
| 🫁 **Respiratory** | Minutes | CO₂ excretion by lungs |
| 🫘 **Renal** | Hours to days | H⁺ excretion, HCO₃⁻ reabsorption |

### Acid-Base Disorders

| Condition | pH | Cause |
|:----------|:---|:------|
| **Respiratory Acidosis** | <7.35 | ↓ Breathing, ↑ CO₂ |
| **Respiratory Alkalosis** | >7.45 | ↑ Breathing, ↓ CO₂ |
| **Metabolic Acidosis** | <7.35 | Diarrhea, diabetes, kidney failure |
| **Metabolic Alkalosis** | >7.45 | Vomiting, excess bicarbonate |

---

## 🩺 Assessing Hydration

### Signs of Dehydration

| Sign | Mild | Moderate | Severe |
|:-----|:-----|:---------|:-------|
| **Thirst** | Present | Intense | May be absent |
| **Urine** | Concentrated | Very dark | Minimal/absent |
| **Skin Turgor** | Normal | ↓ Decreased | Very poor |
| **Eyes** | Normal | Slightly sunken | Very sunken |
| **Heart Rate** | Normal | ↑ Increased | Very rapid |
| **Blood Pressure** | Normal | Low | Very low |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Each kidney has ~1 million nephrons
2. GFR = 125 mL/min (180 L/day filtered)
3. 99% of filtrate is reabsorbed
4. Normal urine output = 1-2 L/day
5. Normal blood pH = 7.35-7.45
6. ADH ↑ water reabsorption
7. Aldosterone ↑ Na⁺ reabsorption
8. Hyperkalemia is dangerous for heart
:::
`,
    contentHi: `
# 🫘 वृक्क तंत्र शरीर क्रिया

---

## 📖 वृक्क कार्य अवलोकन

> **वृक्क** महत्वपूर्ण अंग हैं जो रक्त को छानकर, तरल पदार्थों को नियंत्रित करके और हार्मोन का उत्पादन करके होमियोस्टेसिस बनाए रखते हैं।

:::info
**प्रमुख कार्य:**
1. **उत्सर्जन** - अपशिष्ट हटाना (यूरिया, क्रिएटिनिन)
2. **नियमन** - जल, इलेक्ट्रोलाइट, अम्ल-क्षार संतुलन
3. **रक्तचाप नियंत्रण** - रेनिन-एंजियोटेंसिन तंत्र
4. **हार्मोन उत्पादन** - एरिथ्रोपोइटिन, विटामिन D
5. **ग्लूकोनियोजेनेसिस** - उपवास में ग्लूकोज उत्पादन
:::

---

## 🔬 नेफ्रॉन संरचना

> **नेफ्रॉन** कार्यात्मक इकाई है - प्रत्येक वृक्क में ~10 लाख नेफ्रॉन होते हैं।

### नेफ्रॉन के भाग

| संरचना | कार्य |
|:-------|:------|
| **ग्लोमेरुलस** | केशिका गुच्छ - निस्यंदन |
| **बोमन कैप्सूल** | छनित एकत्र करना |
| **समीपस्थ नलिका** | प्रमुख पुनःअवशोषण (65-70%) |
| **हेनले का लूप** | मूत्र सांद्रण |
| **दूरस्थ नलिका** | सूक्ष्म समायोजन |
| **संग्रहण नलिका** | अंतिम सांद्रण |

---

## 💧 मूत्र निर्माण

### तीन प्रक्रियाएं

:::tip
**1. ग्लोमेरुलर निस्यंदन:**
- GFR: ~125 mL/min (180 L/दिन)
- छनित में: जल, ग्लूकोज, अमीनो अम्ल, इलेक्ट्रोलाइट
- नहीं छनते: RBC, प्रोटीन, बड़े अणु
:::

:::success
**2. नलिका पुनःअवशोषण:**
- 99% छनित पुनःअवशोषित
- PCT: ग्लूकोज, अमीनो अम्ल, सोडियम, जल
:::

:::warning
**3. नलिका स्राव:**
- अतिरिक्त अपशिष्ट मूत्र में जोड़ा जाता है
- H⁺, K⁺, दवाएं, विषाक्त पदार्थ
:::

---

## 📊 मूत्र विशेषताएं

### सामान्य मूत्र मान

| पैरामीटर | सामान्य मान |
|:---------|:-----------|
| 💧 **मात्रा** | 1-2 लीटर/दिन |
| 🎨 **रंग** | हल्का पीला |
| ⚗️ **pH** | 4.5-8 (औसत 6) |
| ⚖️ **विशिष्ट गुरुत्व** | 1.003-1.030 |
| 💦 **संरचना** | 95% जल, 5% विलेय |

### असामान्य निष्कर्ष

| निष्कर्ष | परिभाषा | कारण |
|:---------|:--------|:-----|
| **पॉलीयूरिया** | >3 L/दिन | मधुमेह, अधिक तरल |
| **ऑलिगुरिया** | <400 mL/दिन | निर्जलीकरण, वृक्क विफलता |
| **एन्यूरिया** | <100 mL/दिन | वृक्क विफलता |
| **हेमट्यूरिया** | मूत्र में रक्त | संक्रमण, पथरी |
| **प्रोटीनूरिया** | मूत्र में प्रोटीन | वृक्क रोग |
| **ग्लाइकोसूरिया** | मूत्र में ग्लूकोज | मधुमेह |

---

## 💧 जल संतुलन

### दैनिक जल संतुलन

| सेवन | मात्रा | निर्गम | मात्रा |
|:-----|:------|:------|:------|
| 🚰 पीना | 1500 mL | 🚽 मूत्र | 1500 mL |
| 🍽️ भोजन | 700 mL | 💩 मल | 100 mL |
| 🔥 चयापचय | 300 mL | 💦 पसीना | 500 mL |
| | | 🫁 फेफड़े | 400 mL |
| **कुल** | **2500 mL** | **कुल** | **2500 mL** |

### नियामक हार्मोन

| हार्मोन | स्रोत | क्रिया |
|:--------|:-----|:------|
| **ADH** | पश्च पिट्यूटरी | ↑ जल पुनःअवशोषण |
| **एल्डोस्टेरोन** | अधिवृक्क प्रांतस्था | ↑ Na⁺ पुनःअवशोषण |
| **ANP** | हृदय | ↑ Na⁺ और जल उत्सर्जन |

---

## ⚡ इलेक्ट्रोलाइट संतुलन

### प्रमुख इलेक्ट्रोलाइट

| इलेक्ट्रोलाइट | सामान्य सीमा | कार्य |
|:-------------|:-----------|:------|
| 🧂 **सोडियम** | 135-145 mEq/L | द्रव संतुलन, तंत्रिका कार्य |
| 🔋 **पोटैशियम** | 3.5-5 mEq/L | मांसपेशी, हृदय ताल |
| 💚 **क्लोराइड** | 98-106 mEq/L | द्रव संतुलन |
| 🦴 **कैल्शियम** | 8.5-10.5 mg/dL | हड्डी, मांसपेशी, तंत्रिका |

### इलेक्ट्रोलाइट विकार

| विकार | स्तर | लक्षण |
|:------|:-----|:------|
| **हाइपोनेट्रेमिया** | निम्न Na⁺ | भ्रम, दौरे |
| **हाइपरनेट्रेमिया** | उच्च Na⁺ | प्यास, भ्रम |
| **हाइपोकैलेमिया** | निम्न K⁺ | मांसपेशी कमजोरी |
| **हाइपरकैलेमिया** | उच्च K⁺ | ⚠️ हृदय के लिए खतरनाक |

---

## ⚗️ अम्ल-क्षार संतुलन

### सामान्य रक्त pH: 7.35-7.45

### नियमन तंत्र

| तंत्र | गति | क्रिया |
|:-----|:----|:------|
| 🧪 **बफर तंत्र** | तत्काल | बाइकार्बोनेट, फॉस्फेट |
| 🫁 **श्वसन** | मिनट | CO₂ उत्सर्जन |
| 🫘 **वृक्क** | घंटे-दिन | H⁺ उत्सर्जन, HCO₃⁻ पुनःअवशोषण |

---

## 🩺 निर्जलीकरण मूल्यांकन

### निर्जलीकरण के लक्षण

| लक्षण | हल्का | मध्यम | गंभीर |
|:------|:-----|:------|:------|
| **प्यास** | उपस्थित | तीव्र | अनुपस्थित हो सकती है |
| **मूत्र** | सांद्र | बहुत गहरा | न्यूनतम/अनुपस्थित |
| **त्वचा तनाव** | सामान्य | ↓ कम | बहुत खराब |
| **आंखें** | सामान्य | थोड़ी धंसी | बहुत धंसी |
| **हृदय गति** | सामान्य | ↑ बढ़ी | बहुत तेज |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. प्रत्येक वृक्क में ~10 लाख नेफ्रॉन
2. GFR = 125 mL/min (180 L/दिन छनित)
3. 99% छनित पुनःअवशोषित
4. सामान्य मूत्र = 1-2 L/दिन
5. सामान्य रक्त pH = 7.35-7.45
6. ADH ↑ जल पुनःअवशोषण
7. एल्डोस्टेरोन ↑ Na⁺ पुनःअवशोषण
8. हाइपरकैलेमिया हृदय के लिए खतरनाक
:::
`
  },
  {
    id: 7,
    titleEn: "Nervous System Physiology",
    titleHi: "तंत्रिका तंत्र शरीर क्रिया",
    contentEn: `
# 🧠 Nervous System Physiology

---

## 📖 Organization Overview

> The **nervous system** controls and coordinates all body activities through electrical impulses and neurotransmitters.

### Divisions

| Division | Components |
|:---------|:-----------|
| **Central (CNS)** | Brain, Spinal cord |
| **Peripheral (PNS)** | Cranial nerves (12), Spinal nerves (31) |
| **Autonomic (ANS)** | Sympathetic, Parasympathetic |

---

## ⚡ Nerve Impulse Transmission

### Resting Membrane Potential

:::info
**Key Points:**
- Inside of neuron is negative (-70mV)
- Maintained by Na⁺-K⁺ pump
- Pump moves 3 Na⁺ out, 2 K⁺ in
:::

### Action Potential Sequence

| Step | Event | Ion Movement |
|:-----|:------|:-------------|
| 1️⃣ | Stimulus reaches threshold | — |
| 2️⃣ | Depolarization | Na⁺ rushes IN |
| 3️⃣ | Repolarization | K⁺ rushes OUT |
| 4️⃣ | Return to resting | Na⁺-K⁺ pump restores |

---

## 🔗 Synapse & Neurotransmitters

### Synaptic Transmission

| Step | Process |
|:-----|:--------|
| 1 | Action potential arrives at axon terminal |
| 2 | Ca²⁺ enters, triggers vesicle release |
| 3 | Neurotransmitter crosses synaptic cleft |
| 4 | Binds to receptors on postsynaptic neuron |
| 5 | Response generated |

### Common Neurotransmitters

| Neurotransmitter | Function |
|:-----------------|:---------|
| **Acetylcholine** | Muscle contraction, memory |
| **Norepinephrine** | Alertness, fight-or-flight |
| **Dopamine** | Pleasure, reward, movement |
| **Serotonin** | Mood, sleep, appetite |
| **GABA** | Inhibitory, calming |
| **Glutamate** | Excitatory, learning |

---

## 🔄 Reflexes

### Reflex Arc Components

| Component | Function |
|:----------|:---------|
| **Receptor** | Detects stimulus |
| **Sensory neuron** | Carries impulse to CNS |
| **Integration center** | Processes in spinal cord/brain |
| **Motor neuron** | Carries response |
| **Effector** | Muscle or gland responds |

### Clinical Reflexes

| Reflex | Test | Normal Response |
|:-------|:-----|:----------------|
| **Knee jerk** | Tap patellar tendon | Leg extends |
| **Ankle jerk** | Tap Achilles tendon | Foot plantar flexes |
| **Pupillary** | Shine light in eye | Pupil constricts |
| **Babinski** | Stroke sole of foot | Toes curl down (adult) |

---

## 🎛️ Autonomic Nervous System

### Comparison

| Feature | Sympathetic | Parasympathetic |
|:--------|:------------|:----------------|
| **Nickname** | "Fight or Flight" | "Rest and Digest" |
| **Heart rate** | ↑ Increases | ↓ Decreases |
| **Breathing** | ↑ Increases | ↓ Decreases |
| **Digestion** | ↓ Decreases | ↑ Increases |
| **Pupils** | Dilate | Constrict |
| **Blood pressure** | ↑ Increases | ↓ Decreases |
| **Neurotransmitter** | Norepinephrine | Acetylcholine |

---

## 🩺 Consciousness Assessment

### Levels of Consciousness

| Level | Description |
|:------|:------------|
| **Alert** | Fully awake, oriented |
| **Drowsy** | Sleepy but arousable |
| **Confused** | Disoriented |
| **Stupor** | Responds only to strong stimuli |
| **Coma** | Unresponsive |

### AVPU Scale (Quick Assessment)

| Letter | Meaning |
|:-------|:--------|
| **A** | Alert |
| **V** | Responds to Voice |
| **P** | Responds to Pain |
| **U** | Unresponsive |

### Glasgow Coma Scale (GCS)

| Response | Score |
|:---------|:------|
| **Eye Opening** | |
| Spontaneous | 4 |
| To voice | 3 |
| To pain | 2 |
| None | 1 |
| **Verbal Response** | |
| Oriented | 5 |
| Confused | 4 |
| Inappropriate | 3 |
| Incomprehensible | 2 |
| None | 1 |
| **Motor Response** | |
| Obeys commands | 6 |
| Localizes pain | 5 |
| Withdraws | 4 |
| Flexion | 3 |
| Extension | 2 |
| None | 1 |
| **Total** | **3-15** |

:::danger
**GCS ≤8 = Severe brain injury** (needs airway protection)
:::

---

## 😖 Pain Physiology

### Types of Pain

| Type | Characteristics |
|:-----|:----------------|
| **Acute** | Short duration, protective |
| **Chronic** | Persistent, may lack clear cause |
| **Referred** | Felt at different site than source |
| **Neuropathic** | Nerve damage, burning/tingling |

### Pain Assessment

| Factor | Ask About |
|:-------|:----------|
| **Location** | Where exactly? |
| **Intensity** | 0-10 scale |
| **Quality** | Sharp, dull, burning? |
| **Duration** | How long? |
| **Timing** | When does it occur? |
| **Aggravating** | What makes it worse? |
| **Relieving** | What helps? |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Resting potential = -70mV
2. Na⁺ in = depolarization
3. K⁺ out = repolarization
4. Sympathetic = Fight or Flight
5. Parasympathetic = Rest and Digest
6. AVPU = Quick consciousness check
7. GCS range = 3-15
8. GCS ≤8 = Severe injury
:::
`,
    contentHi: `
# 🧠 तंत्रिका तंत्र शरीर क्रिया

---

## 📖 संगठन अवलोकन

> **तंत्रिका तंत्र** विद्युत आवेगों और न्यूरोट्रांसमीटरों के माध्यम से सभी शारीरिक गतिविधियों को नियंत्रित करता है।

### विभाजन

| विभाग | घटक |
|:------|:-----|
| **केंद्रीय (CNS)** | मस्तिष्क, मेरुरज्जु |
| **परिधीय (PNS)** | कपाल तंत्रिकाएं (12), मेरु तंत्रिकाएं (31) |
| **स्वायत्त (ANS)** | अनुकंपी, परानुकंपी |

---

## ⚡ तंत्रिका आवेग प्रसारण

### विश्राम झिल्ली विभव

:::info
**मुख्य बिंदु:**
- न्यूरॉन के अंदर ऋणात्मक (-70mV)
- Na⁺-K⁺ पंप द्वारा बनाए रखा
- पंप 3 Na⁺ बाहर, 2 K⁺ अंदर
:::

### क्रिया विभव अनुक्रम

| चरण | घटना | आयन गति |
|:----|:-----|:--------|
| 1️⃣ | उद्दीपन थ्रेशोल्ड तक | — |
| 2️⃣ | विध्रुवण | Na⁺ अंदर आता है |
| 3️⃣ | पुनर्ध्रुवण | K⁺ बाहर जाता है |
| 4️⃣ | विश्राम में वापसी | Na⁺-K⁺ पंप पुनर्स्थापित |

---

## 🔗 सिनैप्स और न्यूरोट्रांसमीटर

### सामान्य न्यूरोट्रांसमीटर

| न्यूरोट्रांसमीटर | कार्य |
|:----------------|:------|
| **एसिटाइलकोलीन** | मांसपेशी संकुचन, स्मृति |
| **नॉरएपिनेफ्रिन** | सतर्कता, लड़ो-भागो |
| **डोपामाइन** | आनंद, पुरस्कार, गति |
| **सेरोटोनिन** | मूड, नींद, भूख |
| **GABA** | निरोधात्मक, शांत करने वाला |
| **ग्लूटामेट** | उत्तेजक, सीखना |

---

## 🔄 प्रतिवर्त

### प्रतिवर्त चाप घटक

| घटक | कार्य |
|:----|:------|
| **ग्राही** | उद्दीपन पहचान |
| **संवेदी न्यूरॉन** | CNS को आवेग |
| **एकीकरण केंद्र** | प्रसंस्करण |
| **चालक न्यूरॉन** | प्रतिक्रिया वहन |
| **प्रभावक** | मांसपेशी/ग्रंथि प्रतिक्रिया |

### नैदानिक प्रतिवर्त

| प्रतिवर्त | परीक्षण | सामान्य प्रतिक्रिया |
|:---------|:-------|:-----------------|
| **घुटना झटका** | पटेलर टेंडन टैप | पैर फैलता है |
| **टखना झटका** | अकिलीज़ टेंडन टैप | पैर प्लांटर फ्लेक्स |
| **पुतली** | आंख में रोशनी | पुतली सिकुड़ती है |

---

## 🎛️ स्वायत्त तंत्रिका तंत्र

### तुलना

| विशेषता | अनुकंपी | परानुकंपी |
|:--------|:--------|:---------|
| **उपनाम** | "लड़ो या भागो" | "आराम और पाचन" |
| **हृदय गति** | ↑ बढ़ती | ↓ घटती |
| **श्वसन** | ↑ बढ़ता | ↓ घटता |
| **पाचन** | ↓ घटता | ↑ बढ़ता |
| **पुतलियां** | फैलती | सिकुड़ती |
| **रक्तचाप** | ↑ बढ़ता | ↓ घटता |
| **न्यूरोट्रांसमीटर** | नॉरएपिनेफ्रिन | एसिटाइलकोलीन |

---

## 🩺 चेतना मूल्यांकन

### चेतना स्तर

| स्तर | विवरण |
|:-----|:------|
| **सतर्क** | पूर्ण जागृत, उन्मुख |
| **उनींदा** | नींद में पर जगाया जा सकता है |
| **भ्रमित** | विचलित |
| **मूर्छा** | केवल तीव्र उद्दीपन पर प्रतिक्रिया |
| **कोमा** | अनुत्तरदायी |

### AVPU स्केल

| अक्षर | अर्थ |
|:------|:-----|
| **A** | सतर्क (Alert) |
| **V** | आवाज पर प्रतिक्रिया (Voice) |
| **P** | दर्द पर प्रतिक्रिया (Pain) |
| **U** | अनुत्तरदायी (Unresponsive) |

### ग्लासगो कोमा स्केल (GCS)

| प्रतिक्रिया | अंक |
|:-----------|:----|
| **आंख खोलना** | |
| स्वतः | 4 |
| आवाज पर | 3 |
| दर्द पर | 2 |
| कोई नहीं | 1 |
| **मौखिक प्रतिक्रिया** | |
| उन्मुख | 5 |
| भ्रमित | 4 |
| अनुचित | 3 |
| अस्पष्ट | 2 |
| कोई नहीं | 1 |
| **चालक प्रतिक्रिया** | |
| आदेश मानना | 6 |
| दर्द स्थानीकरण | 5 |
| वापस खींचना | 4 |
| फ्लेक्सन | 3 |
| एक्सटेंशन | 2 |
| कोई नहीं | 1 |
| **कुल** | **3-15** |

:::danger
**GCS ≤8 = गंभीर मस्तिष्क चोट** (वायुमार्ग सुरक्षा आवश्यक)
:::

---

## 😖 दर्द शरीर क्रिया

### दर्द के प्रकार

| प्रकार | विशेषताएं |
|:-------|:---------|
| **तीव्र** | अल्पकालिक, सुरक्षात्मक |
| **दीर्घकालिक** | लगातार, स्पष्ट कारण नहीं |
| **संदर्भित** | स्रोत से अलग स्थान पर |
| **न्यूरोपैथिक** | तंत्रिका क्षति, जलन/झुनझुनी |

### दर्द मूल्यांकन

| कारक | पूछें |
|:-----|:------|
| **स्थान** | कहाँ? |
| **तीव्रता** | 0-10 स्केल |
| **गुणवत्ता** | तेज, धीमा, जलन? |
| **अवधि** | कितने समय से? |
| **समय** | कब होता है? |
| **बढ़ाने वाले** | क्या बुरा करता है? |
| **राहत** | क्या मदद करता है? |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. विश्राम विभव = -70mV
2. Na⁺ अंदर = विध्रुवण
3. K⁺ बाहर = पुनर्ध्रुवण
4. अनुकंपी = लड़ो या भागो
5. परानुकंपी = आराम और पाचन
6. AVPU = त्वरित चेतना जांच
7. GCS सीमा = 3-15
8. GCS ≤8 = गंभीर चोट
:::
`
  },
  {
    id: 8,
    titleEn: "Endocrine System Physiology",
    titleHi: "अंतःस्रावी तंत्र शरीर क्रिया",
    contentEn: `
# 🧪 Endocrine System Physiology

---

## 📖 Hormones Overview

> **Hormones** are chemical messengers secreted by endocrine glands that regulate metabolism, growth, reproduction, and homeostasis.

:::info
**Hormone Characteristics:**
- Chemical messengers in blood
- Act on target organs
- Work in small amounts
- Regulated by feedback mechanisms
:::

### Types of Hormones

| Type | Examples |
|:-----|:---------|
| **Protein/Peptide** | Insulin, Growth hormone |
| **Steroid** | Cortisol, Estrogen, Testosterone |
| **Amine** | Thyroid hormones, Adrenaline |

---

## 🏛️ Major Endocrine Glands

| Gland | Location | Major Hormones |
|:------|:---------|:---------------|
| **Pituitary** | Base of brain | GH, TSH, ACTH, FSH, LH, Prolactin, ADH, Oxytocin |
| **Thyroid** | Neck | T3, T4, Calcitonin |
| **Parathyroid** | Behind thyroid | PTH |
| **Adrenal** | Above kidneys | Cortisol, Aldosterone, Adrenaline |
| **Pancreas** | Abdomen | Insulin, Glucagon |
| **Gonads** | Pelvis | Estrogen, Progesterone, Testosterone |

---

## 👑 Pituitary Gland (Master Gland)

### Anterior Pituitary Hormones

| Hormone | Target | Function |
|:--------|:-------|:---------|
| **GH** | Bones, muscles | Growth |
| **TSH** | Thyroid | Stimulates thyroid hormones |
| **ACTH** | Adrenal cortex | Stimulates cortisol |
| **FSH** | Gonads | Follicle development, spermatogenesis |
| **LH** | Gonads | Ovulation, testosterone production |
| **Prolactin** | Breast | Milk production |

### Posterior Pituitary Hormones

| Hormone | Function |
|:--------|:---------|
| **ADH (Vasopressin)** | ↑ Water retention by kidneys |
| **Oxytocin** | Uterine contractions, milk ejection |

---

## 🦋 Thyroid Hormones

### Hormones and Functions

| Hormone | Characteristics |
|:--------|:----------------|
| **T3 (Triiodothyronine)** | More active, faster acting |
| **T4 (Thyroxine)** | More abundant, converted to T3 |
| **Calcitonin** | ↓ Blood calcium |

### Thyroid Functions
- ↑ Metabolic rate
- Essential for growth and development
- Brain development in children
- Body temperature regulation

### Thyroid Disorders

| Condition | Cause | Symptoms |
|:----------|:------|:---------|
| **Hypothyroidism** | Low hormones | Fatigue, weight gain, cold intolerance |
| **Hyperthyroidism** | High hormones | Weight loss, heat intolerance, rapid HR |
| **Goiter** | Iodine deficiency | Enlarged thyroid gland |
| **Cretinism** | Congenital hypothyroidism | Mental and physical retardation |

:::warning
**Iodine Requirements:**
- Daily: 150 μg (adults)
- Pregnancy: 250 μg
- Prevention: Use iodized salt
:::

---

## 🍬 Blood Glucose Regulation

### Normal Values

| Condition | Glucose Level |
|:----------|:-------------|
| **Fasting** | 70-100 mg/dL |
| **After meal** | <140 mg/dL |
| **Diabetes (fasting)** | ≥126 mg/dL |
| **Diabetes (random)** | ≥200 mg/dL + symptoms |
| **HbA1c (diabetes)** | ≥6.5% |

### Hormones Involved

| Hormone | Source | Effect |
|:--------|:-------|:-------|
| **Insulin** | Beta cells (pancreas) | ↓ Blood glucose |
| **Glucagon** | Alpha cells (pancreas) | ↑ Blood glucose |
| **Cortisol** | Adrenal cortex | ↑ Blood glucose |
| **Adrenaline** | Adrenal medulla | ↑ Blood glucose |

### Insulin Actions
1. ↑ Glucose uptake by cells
2. ↑ Glycogen storage in liver
3. ↑ Fat storage
4. ↑ Protein synthesis

### Diabetes Types

| Type | Cause | Features |
|:-----|:------|:---------|
| **Type 1** | Insulin deficiency (autoimmune) | Young age, insulin dependent |
| **Type 2** | Insulin resistance | Adults, lifestyle related |
| **Gestational** | Pregnancy-related | Develops during pregnancy |

---

## 🏔️ Adrenal Hormones

### Adrenal Cortex

| Zone | Hormone | Function |
|:-----|:--------|:---------|
| **Outer (Glomerulosa)** | Aldosterone | Na⁺ retention, K⁺ excretion |
| **Middle (Fasciculata)** | Cortisol | Stress response, anti-inflammatory |
| **Inner (Reticularis)** | Androgens | Sex hormone precursors |

### Adrenal Medulla

| Hormone | Function |
|:--------|:---------|
| **Adrenaline (Epinephrine)** | Fight-or-flight response |
| **Noradrenaline** | Similar to adrenaline |

### Stress Response

| Phase | Timing | Response |
|:------|:-------|:---------|
| **Immediate** | Seconds | Adrenaline: ↑ HR, BP, glucose |
| **Prolonged** | Hours | Cortisol: Sustained glucose, immune suppression |

---

## 🦴 Calcium Regulation

| Hormone | Source | Effect |
|:--------|:-------|:-------|
| **PTH** | Parathyroid | ↑ Blood calcium |
| **Calcitonin** | Thyroid | ↓ Blood calcium |
| **Vitamin D** | Skin/Diet | ↑ Calcium absorption |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Pituitary = Master gland
2. T3 is more active than T4
3. Iodine needed for thyroid hormones
4. Insulin ↓ glucose, Glucagon ↑ glucose
5. Fasting glucose: 70-100 mg/dL
6. Diabetes: Fasting ≥126 mg/dL
7. Aldosterone ↑ Na⁺ retention
8. PTH ↑ calcium, Calcitonin ↓ calcium
:::
`,
    contentHi: `
# 🧪 अंतःस्रावी तंत्र शरीर क्रिया

---

## 📖 हार्मोन अवलोकन

> **हार्मोन** अंतःस्रावी ग्रंथियों द्वारा स्रावित रासायनिक संदेशवाहक हैं जो चयापचय, वृद्धि, प्रजनन और होमियोस्टेसिस को नियंत्रित करते हैं।

:::info
**हार्मोन विशेषताएं:**
- रक्त में रासायनिक संदेशवाहक
- लक्ष्य अंगों पर कार्य
- कम मात्रा में काम करते हैं
- फीडबैक तंत्र द्वारा नियंत्रित
:::

### हार्मोन के प्रकार

| प्रकार | उदाहरण |
|:-------|:-------|
| **प्रोटीन/पेप्टाइड** | इंसुलिन, वृद्धि हार्मोन |
| **स्टेरॉयड** | कॉर्टिसोल, एस्ट्रोजन |
| **एमीन** | थायरॉइड हार्मोन, एड्रेनालाइन |

---

## 🏛️ प्रमुख अंतःस्रावी ग्रंथियां

| ग्रंथि | स्थान | प्रमुख हार्मोन |
|:-------|:------|:-------------|
| **पिट्यूटरी** | मस्तिष्क का आधार | GH, TSH, ACTH, FSH, LH, ADH |
| **थायरॉइड** | गर्दन | T3, T4, कैल्सिटोनिन |
| **पैराथायरॉइड** | थायरॉइड के पीछे | PTH |
| **अधिवृक्क** | गुर्दों के ऊपर | कॉर्टिसोल, एल्डोस्टेरोन |
| **अग्न्याशय** | उदर | इंसुलिन, ग्लूकागन |
| **गोनाड** | श्रोणि | एस्ट्रोजन, प्रोजेस्टेरोन, टेस्टोस्टेरोन |

---

## 👑 पिट्यूटरी ग्रंथि (मास्टर ग्रंथि)

### पूर्वकाल पिट्यूटरी हार्मोन

| हार्मोन | लक्ष्य | कार्य |
|:--------|:------|:------|
| **GH** | हड्डियां, मांसपेशियां | वृद्धि |
| **TSH** | थायरॉइड | थायरॉइड हार्मोन उत्तेजना |
| **ACTH** | अधिवृक्क प्रांतस्था | कॉर्टिसोल उत्तेजना |
| **FSH** | गोनाड | फॉलिकल विकास |
| **LH** | गोनाड | ओव्यूलेशन, टेस्टोस्टेरोन |
| **प्रोलैक्टिन** | स्तन | दूध उत्पादन |

### पश्च पिट्यूटरी हार्मोन

| हार्मोन | कार्य |
|:--------|:------|
| **ADH** | ↑ गुर्दों द्वारा जल प्रतिधारण |
| **ऑक्सीटोसिन** | गर्भाशय संकुचन, दूध निकालना |

---

## 🦋 थायरॉइड हार्मोन

### हार्मोन और कार्य

| हार्मोन | विशेषताएं |
|:--------|:---------|
| **T3** | अधिक सक्रिय, तेज क्रिया |
| **T4** | अधिक मात्रा, T3 में बदलता है |
| **कैल्सिटोनिन** | ↓ रक्त कैल्शियम |

### थायरॉइड विकार

| स्थिति | कारण | लक्षण |
|:-------|:-----|:------|
| **हाइपोथायरॉइडिज्म** | कम हार्मोन | थकान, वजन बढ़ना, ठंड असहिष्णुता |
| **हाइपरथायरॉइडिज्म** | अधिक हार्मोन | वजन कम, गर्मी असहिष्णुता |
| **गोइटर** | आयोडीन की कमी | बढ़ी हुई थायरॉइड |
| **क्रेटिनिज्म** | जन्मजात हाइपोथायरॉइडिज्म | मानसिक और शारीरिक मंदता |

:::warning
**आयोडीन आवश्यकताएं:**
- दैनिक: 150 μg (वयस्क)
- गर्भावस्था: 250 μg
- रोकथाम: आयोडीनयुक्त नमक
:::

---

## 🍬 रक्त शर्करा नियमन

### सामान्य मान

| स्थिति | ग्लूकोज स्तर |
|:-------|:-----------|
| **उपवास** | 70-100 mg/dL |
| **भोजन के बाद** | <140 mg/dL |
| **मधुमेह (उपवास)** | ≥126 mg/dL |
| **मधुमेह (यादृच्छिक)** | ≥200 mg/dL + लक्षण |
| **HbA1c (मधुमेह)** | ≥6.5% |

### शामिल हार्मोन

| हार्मोन | स्रोत | प्रभाव |
|:--------|:-----|:------|
| **इंसुलिन** | बीटा कोशिकाएं | ↓ रक्त शर्करा |
| **ग्लूकागन** | अल्फा कोशिकाएं | ↑ रक्त शर्करा |
| **कॉर्टिसोल** | अधिवृक्क प्रांतस्था | ↑ रक्त शर्करा |
| **एड्रेनालाइन** | अधिवृक्क मज्जा | ↑ रक्त शर्करा |

### मधुमेह प्रकार

| प्रकार | कारण | विशेषताएं |
|:-------|:-----|:---------|
| **टाइप 1** | इंसुलिन की कमी (स्वप्रतिरक्षी) | कम उम्र, इंसुलिन निर्भर |
| **टाइप 2** | इंसुलिन प्रतिरोध | वयस्क, जीवनशैली संबंधित |
| **गर्भकालीन** | गर्भावस्था संबंधित | गर्भावस्था में विकसित |

---

## 🏔️ अधिवृक्क हार्मोन

### अधिवृक्क प्रांतस्था

| क्षेत्र | हार्मोन | कार्य |
|:-------|:--------|:------|
| **बाहरी** | एल्डोस्टेरोन | Na⁺ प्रतिधारण, K⁺ उत्सर्जन |
| **मध्य** | कॉर्टिसोल | तनाव प्रतिक्रिया |
| **आंतरिक** | एंड्रोजन | सेक्स हार्मोन अग्रदूत |

### तनाव प्रतिक्रिया

| चरण | समय | प्रतिक्रिया |
|:----|:----|:----------|
| **तत्काल** | सेकंड | एड्रेनालाइन: ↑ HR, BP, ग्लूकोज |
| **लंबा** | घंटे | कॉर्टिसोल: निरंतर ग्लूकोज |

---

## 🦴 कैल्शियम नियमन

| हार्मोन | स्रोत | प्रभाव |
|:--------|:-----|:------|
| **PTH** | पैराथायरॉइड | ↑ रक्त कैल्शियम |
| **कैल्सिटोनिन** | थायरॉइड | ↓ रक्त कैल्शियम |
| **विटामिन D** | त्वचा/आहार | ↑ कैल्शियम अवशोषण |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. पिट्यूटरी = मास्टर ग्रंथि
2. T3, T4 से अधिक सक्रिय
3. थायरॉइड हार्मोन के लिए आयोडीन आवश्यक
4. इंसुलिन ↓ ग्लूकोज, ग्लूकागन ↑ ग्लूकोज
5. उपवास ग्लूकोज: 70-100 mg/dL
6. मधुमेह: उपवास ≥126 mg/dL
7. एल्डोस्टेरोन ↑ Na⁺ प्रतिधारण
8. PTH ↑ कैल्शियम, कैल्सिटोनिन ↓
:::
`
  },
  {
    id: 9,
    titleEn: "Reproductive Physiology",
    titleHi: "प्रजनन शरीर क्रिया",
    contentEn: `
# 👶 Reproductive Physiology

---

## 📖 Overview

> **Reproductive physiology** covers the functions of male and female reproductive systems, menstrual cycle, pregnancy, and lactation.

:::info
**Why This Matters for MPHWs:**
MCH services are a core responsibility. Understanding menstrual cycle, pregnancy physiology, and lactation enables better antenatal care, family planning counseling, and postnatal support.
:::

---

## 👨 Male Reproductive Physiology

### Testicular Functions
1. **Spermatogenesis** - Sperm production
2. **Testosterone production** - Male sex hormone

### Testosterone Functions
- Development of male reproductive organs
- Secondary sexual characteristics (beard, deep voice)
- Sperm production
- Muscle mass, bone density

### Sperm Facts

| Parameter | Value |
|:----------|:------|
| **Production starts** | Puberty |
| **Per ejaculation** | 200-300 million |
| **Lifespan in female tract** | 3-5 days |
| **Journey** | Testis → Epididymis → Vas deferens → Urethra |

---

## 👩 Female Reproductive Physiology

### Ovarian Functions
1. **Oogenesis** - Egg (ovum) production
2. **Hormone production** - Estrogen, Progesterone

### Estrogen Functions
- Development of female reproductive organs
- Secondary sexual characteristics
- Menstrual cycle regulation
- Bone health

### Progesterone Functions
- Prepares uterus for pregnancy
- Maintains pregnancy
- Inhibits uterine contractions

---

## 🔄 The Menstrual Cycle

### Overview
- **Average Duration:** 28 days (21-35 days normal)
- **Menarche:** First period (10-16 years)
- **Menopause:** End of menstruation (~50 years)

### Phases

| Phase | Days | Events |
|:------|:-----|:-------|
| **Menstrual** | 1-5 | Shedding of endometrium, bleeding |
| **Follicular** | 1-14 | FSH stimulates follicle, estrogen rises |
| **Ovulation** | Day 14 | LH surge, ovum released |
| **Luteal** | 15-28 | Corpus luteum forms, progesterone rises |

### Hormone Patterns

| Hormone | Follicular | Ovulation | Luteal |
|:--------|:-----------|:----------|:-------|
| **FSH** | Rising | Falls | Low |
| **LH** | Low | Surge | Low |
| **Estrogen** | Rising | Peak | Moderate |
| **Progesterone** | Low | Rising | Peak, then falls |

:::tip
**Fertile Window:**
5 days before to 1 day after ovulation (Day 9-15 in 28-day cycle)
:::

---

## 🤰 Fertilization & Implantation

### Fertilization
- **Location:** Fallopian tube (ampulla)
- **Timing:** Within 24 hours of ovulation
- **Process:** One sperm penetrates ovum → Zygote

### Journey to Uterus

| Day | Stage |
|:----|:------|
| 1 | Zygote (fertilized egg) |
| 3-4 | Morula (ball of cells) |
| 5-6 | Blastocyst |
| 6-7 | Implantation in uterus |

### hCG (Human Chorionic Gonadotropin)
- Produced by developing embryo
- Maintains corpus luteum
- Detected in pregnancy tests
- Doubles every 48-72 hours in early pregnancy

---

## 🤱 Pregnancy Physiology

### Duration
- **40 weeks** (280 days) from LMP
- **38 weeks** from conception

### Trimesters

| Trimester | Weeks | Key Developments |
|:----------|:------|:-----------------|
| **First** | 1-12 | Organ formation (critical period) |
| **Second** | 13-28 | Rapid growth, movements felt |
| **Third** | 29-40 | Maturation, weight gain |

### Maternal Changes

| System | Changes |
|:-------|:--------|
| **Cardiovascular** | ↑ Blood volume (40-50%), ↑ Heart rate |
| **Respiratory** | ↑ Oxygen consumption, ↑ Tidal volume |
| **Renal** | ↑ GFR, ↑ Urine output |
| **Metabolic** | ↑ Basal metabolic rate |
| **Hematological** | Physiological anemia (dilution) |

### Placental Functions
- Gas exchange (O₂ and CO₂)
- Nutrient transfer
- Waste removal
- Hormone production (hCG, estrogen, progesterone)
- Barrier function

---

## 👶 Physiology of Labor

### Three Stages

| Stage | Events | Duration |
|:------|:-------|:---------|
| **Stage 1** | Cervical dilation (0-10 cm) | 12-16 hrs (primipara) |
| **Stage 2** | Baby delivery | 1-2 hrs (primipara) |
| **Stage 3** | Placenta delivery | 5-30 minutes |

### Hormones in Labor

| Hormone | Action |
|:--------|:-------|
| **Oxytocin** | Uterine contractions |
| **Prostaglandins** | Cervical ripening |

---

## 🍼 Lactation Physiology

### Hormones Involved

| Hormone | Function |
|:--------|:---------|
| **Prolactin** | Milk production |
| **Oxytocin** | Milk ejection (let-down) |

### Breast Milk Composition

| Component | Colostrum | Mature Milk |
|:----------|:----------|:------------|
| **Protein** | High | Moderate |
| **Fat** | Low | High |
| **Antibodies** | High (IgA) | Lower |
| **Calories** | Lower | Higher |

:::success
**Breastfeeding Benefits:**
- Perfect nutrition for baby
- Antibodies for immunity
- Bonding between mother and baby
- Helps uterus contract
- Delays return of menstruation
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Menstrual cycle = 28 days (average)
2. Ovulation = Day 14
3. Fertile window = Day 9-15
4. Fertilization in fallopian tube
5. Implantation Day 6-7
6. Pregnancy = 40 weeks from LMP
7. Oxytocin = Contractions + Milk ejection
8. Prolactin = Milk production
:::
`,
    contentHi: `
# 👶 प्रजनन शरीर क्रिया

---

## 📖 अवलोकन

> **प्रजनन शरीर क्रिया** पुरुष और महिला प्रजनन तंत्र के कार्य, मासिक धर्म चक्र, गर्भावस्था और स्तनपान को शामिल करती है।

:::info
**MPHW के लिए महत्वपूर्ण:**
MCH सेवाएं मुख्य जिम्मेदारी हैं। मासिक धर्म चक्र, गर्भावस्था शरीर क्रिया और स्तनपान को समझने से बेहतर प्रसव पूर्व देखभाल और परिवार नियोजन परामर्श संभव होता है।
:::

---

## 👨 पुरुष प्रजनन शरीर क्रिया

### वृषण कार्य
1. **शुक्राणुजनन** - शुक्राणु उत्पादन
2. **टेस्टोस्टेरोन उत्पादन** - पुरुष सेक्स हार्मोन

### टेस्टोस्टेरोन कार्य
- पुरुष प्रजनन अंगों का विकास
- द्वितीयक यौन विशेषताएं (दाढ़ी, गहरी आवाज)
- शुक्राणु उत्पादन
- मांसपेशी द्रव्यमान, हड्डी घनत्व

### शुक्राणु तथ्य

| पैरामीटर | मान |
|:---------|:----|
| **उत्पादन शुरू** | यौवन |
| **प्रति स्खलन** | 200-300 मिलियन |
| **महिला पथ में जीवनकाल** | 3-5 दिन |
| **यात्रा** | वृषण → एपिडिडाइमिस → वास डेफरेंस → मूत्रमार्ग |

---

## 👩 महिला प्रजनन शरीर क्रिया

### अंडाशय कार्य
1. **अंडजनन** - अंडा (डिंब) उत्पादन
2. **हार्मोन उत्पादन** - एस्ट्रोजन, प्रोजेस्टेरोन

### एस्ट्रोजन कार्य
- महिला प्रजनन अंगों का विकास
- द्वितीयक यौन विशेषताएं
- मासिक धर्म चक्र नियमन
- हड्डी स्वास्थ्य

### प्रोजेस्टेरोन कार्य
- गर्भाशय को गर्भावस्था के लिए तैयार करना
- गर्भावस्था बनाए रखना
- गर्भाशय संकुचन को रोकना

---

## 🔄 मासिक धर्म चक्र

### अवलोकन
- **औसत अवधि:** 28 दिन (21-35 दिन सामान्य)
- **मेनार्चे:** पहला मासिक (10-16 वर्ष)
- **रजोनिवृत्ति:** मासिक का अंत (~50 वर्ष)

### चरण

| चरण | दिन | घटनाएं |
|:----|:----|:-------|
| **मासिक** | 1-5 | एंडोमेट्रियम का झड़ना, रक्तस्राव |
| **फॉलिक्युलर** | 1-14 | FSH फॉलिकल को उत्तेजित, एस्ट्रोजन बढ़ता |
| **ओव्यूलेशन** | दिन 14 | LH उछाल, अंडा निकलता है |
| **ल्यूटियल** | 15-28 | कॉर्पस ल्यूटियम बनता, प्रोजेस्टेरोन बढ़ता |

### हार्मोन पैटर्न

| हार्मोन | फॉलिक्युलर | ओव्यूलेशन | ल्यूटियल |
|:--------|:----------|:---------|:--------|
| **FSH** | बढ़ता | गिरता | कम |
| **LH** | कम | उछाल | कम |
| **एस्ट्रोजन** | बढ़ता | चरम | मध्यम |
| **प्रोजेस्टेरोन** | कम | बढ़ता | चरम, फिर गिरता |

:::tip
**उर्वर खिड़की:**
ओव्यूलेशन से 5 दिन पहले से 1 दिन बाद तक (28-दिन चक्र में दिन 9-15)
:::

---

## 🤰 निषेचन और प्रत्यारोपण

### निषेचन
- **स्थान:** फैलोपियन ट्यूब (एम्पुला)
- **समय:** ओव्यूलेशन के 24 घंटे के भीतर
- **प्रक्रिया:** एक शुक्राणु अंडे में प्रवेश → युग्मज

### गर्भाशय की यात्रा

| दिन | चरण |
|:----|:-----|
| 1 | युग्मज (निषेचित अंडा) |
| 3-4 | मोरुला (कोशिकाओं की गेंद) |
| 5-6 | ब्लास्टोसिस्ट |
| 6-7 | गर्भाशय में प्रत्यारोपण |

### hCG
- विकासशील भ्रूण द्वारा उत्पादित
- कॉर्पस ल्यूटियम बनाए रखता है
- गर्भावस्था परीक्षणों में पता लगाया जाता है
- प्रारंभिक गर्भावस्था में हर 48-72 घंटे में दोगुना

---

## 🤱 गर्भावस्था शरीर क्रिया

### अवधि
- **40 सप्ताह** (280 दिन) LMP से
- **38 सप्ताह** गर्भाधान से

### तिमाही

| तिमाही | सप्ताह | मुख्य विकास |
|:-------|:------|:-----------|
| **पहली** | 1-12 | अंग निर्माण (महत्वपूर्ण अवधि) |
| **दूसरी** | 13-28 | तेज वृद्धि, हलचल महसूस |
| **तीसरी** | 29-40 | परिपक्वता, वजन बढ़ना |

### मातृ परिवर्तन

| तंत्र | परिवर्तन |
|:-----|:---------|
| **हृदय-वाहिका** | ↑ रक्त मात्रा (40-50%), ↑ हृदय गति |
| **श्वसन** | ↑ ऑक्सीजन खपत |
| **वृक्क** | ↑ GFR, ↑ मूत्र उत्पादन |
| **चयापचय** | ↑ आधारीय चयापचय दर |
| **रक्त** | शारीरिक रक्ताल्पता (तनुकरण) |

---

## 👶 प्रसव शरीर क्रिया

### तीन चरण

| चरण | घटनाएं | अवधि |
|:----|:-------|:-----|
| **चरण 1** | गर्भाशय ग्रीवा फैलाव (0-10 cm) | 12-16 घंटे (प्रथमप्रसवा) |
| **चरण 2** | शिशु प्रसव | 1-2 घंटे |
| **चरण 3** | अपरा प्रसव | 5-30 मिनट |

### प्रसव में हार्मोन

| हार्मोन | क्रिया |
|:--------|:------|
| **ऑक्सीटोसिन** | गर्भाशय संकुचन |
| **प्रोस्टाग्लैंडिन** | गर्भाशय ग्रीवा नरम करना |

---

## 🍼 स्तनपान शरीर क्रिया

### शामिल हार्मोन

| हार्मोन | कार्य |
|:--------|:------|
| **प्रोलैक्टिन** | दूध उत्पादन |
| **ऑक्सीटोसिन** | दूध निकालना (लेट-डाउन) |

### स्तन दूध संरचना

| घटक | कोलोस्ट्रम | परिपक्व दूध |
|:----|:---------|:-----------|
| **प्रोटीन** | उच्च | मध्यम |
| **वसा** | कम | उच्च |
| **एंटीबॉडी** | उच्च (IgA) | कम |
| **कैलोरी** | कम | अधिक |

:::success
**स्तनपान के लाभ:**
- शिशु के लिए सही पोषण
- प्रतिरक्षा के लिए एंटीबॉडी
- माँ और बच्चे के बीच बंधन
- गर्भाशय संकुचन में मदद
- मासिक की वापसी में देरी
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मासिक धर्म चक्र = 28 दिन (औसत)
2. ओव्यूलेशन = दिन 14
3. उर्वर खिड़की = दिन 9-15
4. निषेचन फैलोपियन ट्यूब में
5. प्रत्यारोपण दिन 6-7
6. गर्भावस्था = LMP से 40 सप्ताह
7. ऑक्सीटोसिन = संकुचन + दूध निकालना
8. प्रोलैक्टिन = दूध उत्पादन
:::
`
  },
  {
    id: 10,
    titleEn: "Physiology of Special Conditions",
    titleHi: "विशेष स्थितियों की शरीर क्रिया",
    contentEn: `
# 🌡️ Physiology of Special Conditions

---

## 📖 Overview

> This lesson covers physiological changes and responses in special conditions: **exercise, fever, aging, and environmental adaptation**.

:::info
**Why This Matters:**
Patients present in various states - feverish, after exertion, in hot/cold environments, and at different ages. Understanding these helps in proper assessment and care.
:::

---

## 🏃 Physiology of Exercise

### Immediate Responses

| System | Response |
|:-------|:---------|
| **Cardiovascular** | ↑ Heart rate, ↑ Cardiac output, ↑ Blood flow to muscles |
| **Respiratory** | ↑ Rate and depth of breathing |
| **Metabolic** | ↑ Oxygen consumption, ↑ Glucose utilization |
| **Temperature** | ↑ Body heat, sweating |
| **Hormonal** | ↑ Adrenaline, ↑ Cortisol |

### Heart Rate Response

| Activity | Heart Rate |
|:---------|:-----------|
| **Resting** | 60-100 bpm |
| **Light exercise** | 100-120 bpm |
| **Moderate exercise** | 120-150 bpm |
| **Vigorous exercise** | Up to maximum HR |
| **Maximum HR** | ≈ 220 - Age |

### Benefits of Regular Exercise
- Improved cardiovascular fitness
- Better blood glucose control
- Weight management
- Stronger bones and muscles
- Mental health benefits

---

## 🤒 Physiology of Fever

### Normal Body Temperature

| Site | Normal |
|:-----|:-------|
| **Oral** | 36.5-37.5°C (97.7-99.5°F) |
| **Axillary** | 0.5°C lower than oral |
| **Rectal** | 0.5°C higher than oral |

### Fever Definition
- **Oral >37.5°C** or **Rectal >38°C**
- Caused by pyrogens (fever-producing substances)

### Mechanism of Fever

| Step | Event |
|:-----|:------|
| 1 | Infection/inflammation releases pyrogens |
| 2 | Pyrogens act on hypothalamus |
| 3 | Set point raised |
| 4 | Body increases heat production (shivering) |
| 5 | Body decreases heat loss (vasoconstriction) |
| 6 | Temperature rises to new set point |

### Stages of Fever

| Stage | Events | Signs |
|:------|:-------|:------|
| **Rising (Chill)** | Set point rises | Shivering, cold skin, chills |
| **Plateau** | At new set point | Hot skin, flushed |
| **Declining** | Set point returns to normal | Sweating, warm skin |

:::danger
**When to Be Concerned:**
- Fever >40°C (104°F)
- Fever in infant <3 months
- Fever with convulsions
- Fever with altered consciousness
- Fever with non-blanching rash
- Fever >5-7 days
:::

---

## 👴 Physiology of Aging

### System Changes

| System | Changes |
|:-------|:--------|
| **Cardiovascular** | ↓ Cardiac output, ↑ BP, stiff vessels |
| **Respiratory** | ↓ Lung elasticity, ↓ Vital capacity |
| **Renal** | ↓ GFR (~1 mL/min/year after 40) |
| **Metabolic** | ↓ BMR, ↓ Glucose tolerance |
| **Skeletal** | ↓ Bone density (osteoporosis) |
| **Muscular** | ↓ Muscle mass (sarcopenia) |
| **Nervous** | ↓ Reaction time, ↓ Memory |
| **Immune** | ↓ Function, ↑ Infection risk |

### Common Age-Related Changes

| Change | Impact |
|:-------|:-------|
| ↓ Skin elasticity | Wrinkles, slow wound healing |
| ↓ Sensory function | Vision, hearing decline |
| ↓ Sleep quality | Insomnia, less deep sleep |
| ↓ Vaccine response | Need for boosters |

---

## 🌡️ Temperature Regulation

### Heat Balance
> Heat Production = Heat Loss (in equilibrium)

### Heat Production Sources
- Basal metabolism
- Muscle activity
- Food metabolism
- Hormones (thyroid, adrenaline)

### Heat Loss Mechanisms

| Mechanism | Process | Percentage |
|:----------|:--------|:-----------|
| **Radiation** | Heat waves to surroundings | 60% |
| **Convection** | Heat carried by air currents | 15% |
| **Conduction** | Direct contact transfer | 3% |
| **Evaporation** | Sweating | 22% |

### Response to Heat

| Response | Mechanism |
|:---------|:----------|
| **Vasodilation** | Skin vessels widen |
| **Sweating** | Evaporative cooling |
| **Reduced metabolism** | Less heat production |
| **Behavioral** | Seeking shade, removing clothes |

### Response to Cold

| Response | Mechanism |
|:---------|:----------|
| **Vasoconstriction** | Skin vessels narrow |
| **Shivering** | Heat production |
| **Increased metabolism** | More heat production |
| **Behavioral** | Seeking warmth, adding clothes |

---

## 🏔️ Environmental Adaptation

### Heat Acclimatization (1-2 weeks)

| Adaptation | Benefit |
|:-----------|:--------|
| ↑ Sweating ability | Better cooling |
| ↓ Salt loss in sweat | Electrolyte conservation |
| ↑ Plasma volume | Better circulation |

### Cold Adaptation

| Adaptation | Benefit |
|:-----------|:--------|
| ↑ Metabolic rate | More heat production |
| ↑ Shivering threshold | Better tolerance |
| Behavioral changes | Clothing, shelter |

### Heat-Related Illnesses

| Condition | Features | Treatment |
|:----------|:---------|:----------|
| **Heat Cramps** | Muscle cramps | Rest, fluids, salt |
| **Heat Exhaustion** | Fatigue, dizziness, sweating | Cool environment, fluids |
| **Heat Stroke** | High temp, dry skin, confusion | Emergency! Rapid cooling |

:::danger
**Heat Stroke is a Medical Emergency!**
- Temperature >40°C
- Dry, hot skin (sweating stops)
- Altered consciousness
- Rapid pulse
- **Immediate cooling required**
:::

### Cold-Related Illnesses

| Condition | Features | Treatment |
|:----------|:---------|:----------|
| **Hypothermia** | Temp <35°C, confusion, drowsiness | Gradual rewarming |
| **Frostbite** | Frozen tissue, pale/waxy skin | Gradual warming, don't rub |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Maximum HR = 220 - Age
2. Normal oral temp = 36.5-37.5°C
3. Fever = >37.5°C (oral)
4. Heat loss: 60% radiation, 22% evaporation
5. Heat stroke: Dry skin, confusion - Emergency!
6. GFR decreases ~1 mL/min/year after 40
7. Heat acclimatization takes 1-2 weeks
8. Hypothermia = <35°C
:::
`,
    contentHi: `
# 🌡️ विशेष स्थितियों की शरीर क्रिया

---

## 📖 अवलोकन

> यह पाठ विशेष स्थितियों में शारीरिक परिवर्तन और प्रतिक्रियाओं को शामिल करता है: **व्यायाम, बुखार, वृद्धावस्था, और पर्यावरणीय अनुकूलन**।

:::info
**यह क्यों महत्वपूर्ण है:**
रोगी विभिन्न स्थितियों में आते हैं - बुखार के साथ, परिश्रम के बाद, गर्म/ठंडे वातावरण में, और विभिन्न उम्र में। इन्हें समझने से उचित मूल्यांकन और देखभाल में मदद मिलती है।
:::

---

## 🏃 व्यायाम की शरीर क्रिया

### तत्काल प्रतिक्रियाएं

| तंत्र | प्रतिक्रिया |
|:-----|:----------|
| **हृदय-वाहिका** | ↑ हृदय गति, ↑ कार्डियक आउटपुट |
| **श्वसन** | ↑ श्वसन दर और गहराई |
| **चयापचय** | ↑ ऑक्सीजन खपत, ↑ ग्लूकोज उपयोग |
| **तापमान** | ↑ शरीर ताप, पसीना |
| **हार्मोनल** | ↑ एड्रेनालाइन, ↑ कॉर्टिसोल |

### हृदय गति प्रतिक्रिया

| गतिविधि | हृदय गति |
|:--------|:---------|
| **आराम** | 60-100 bpm |
| **हल्का व्यायाम** | 100-120 bpm |
| **मध्यम व्यायाम** | 120-150 bpm |
| **तीव्र व्यायाम** | अधिकतम HR तक |
| **अधिकतम HR** | ≈ 220 - आयु |

### नियमित व्यायाम के लाभ
- बेहतर हृदय-वाहिका स्वास्थ्य
- बेहतर रक्त शर्करा नियंत्रण
- वजन प्रबंधन
- मजबूत हड्डियां और मांसपेशियां
- मानसिक स्वास्थ्य लाभ

---

## 🤒 बुखार की शरीर क्रिया

### सामान्य शरीर तापमान

| स्थान | सामान्य |
|:------|:-------|
| **मुख** | 36.5-37.5°C (97.7-99.5°F) |
| **बगल** | मुख से 0.5°C कम |
| **मलाशय** | मुख से 0.5°C अधिक |

### बुखार परिभाषा
- **मुख >37.5°C** या **मलाशय >38°C**
- पायरोजेन (बुखार उत्पादक पदार्थ) के कारण

### बुखार तंत्र

| चरण | घटना |
|:----|:-----|
| 1 | संक्रमण/सूजन पायरोजेन छोड़ती है |
| 2 | पायरोजेन हाइपोथैलेमस पर कार्य |
| 3 | सेट पॉइंट बढ़ता है |
| 4 | शरीर ताप उत्पादन बढ़ाता है (कंपकंपी) |
| 5 | शरीर ताप हानि कम करता है |
| 6 | तापमान नए सेट पॉइंट तक बढ़ता है |

### बुखार के चरण

| चरण | घटनाएं | लक्षण |
|:----|:-------|:------|
| **बढ़ना (ठंड)** | सेट पॉइंट बढ़ता | कंपकंपी, ठंडी त्वचा |
| **पठार** | नए सेट पॉइंट पर | गर्म त्वचा, लाल |
| **गिरना** | सेट पॉइंट सामान्य | पसीना, गर्म त्वचा |

:::danger
**चिंता कब करें:**
- बुखार >40°C (104°F)
- <3 महीने के शिशु में बुखार
- दौरे के साथ बुखार
- बदली चेतना के साथ बुखार
- गैर-ब्लैंचिंग रैश के साथ बुखार
- >5-7 दिन का बुखार
:::

---

## 👴 वृद्धावस्था की शरीर क्रिया

### तंत्र परिवर्तन

| तंत्र | परिवर्तन |
|:-----|:---------|
| **हृदय-वाहिका** | ↓ कार्डियक आउटपुट, ↑ BP |
| **श्वसन** | ↓ फेफड़े की लोच, ↓ जीवन क्षमता |
| **वृक्क** | ↓ GFR (~1 mL/min/वर्ष 40 के बाद) |
| **चयापचय** | ↓ BMR, ↓ ग्लूकोज सहनशीलता |
| **कंकाल** | ↓ हड्डी घनत्व (ऑस्टियोपोरोसिस) |
| **पेशी** | ↓ मांसपेशी द्रव्यमान (सार्कोपेनिया) |
| **तंत्रिका** | ↓ प्रतिक्रिया समय, ↓ स्मृति |
| **प्रतिरक्षा** | ↓ कार्य, ↑ संक्रमण जोखिम |

---

## 🌡️ तापमान नियमन

### ताप संतुलन
> ताप उत्पादन = ताप हानि (संतुलन में)

### ताप हानि तंत्र

| तंत्र | प्रक्रिया | प्रतिशत |
|:-----|:--------|:-------|
| **विकिरण** | परिवेश में ताप तरंगें | 60% |
| **संवहन** | वायु धाराओं द्वारा ताप | 15% |
| **चालन** | प्रत्यक्ष संपर्क स्थानांतरण | 3% |
| **वाष्पीकरण** | पसीना | 22% |

### गर्मी पर प्रतिक्रिया

| प्रतिक्रिया | तंत्र |
|:----------|:------|
| **वासोडाइलेशन** | त्वचा वाहिकाएं फैलती हैं |
| **पसीना** | वाष्पीकरण शीतलन |
| **कम चयापचय** | कम ताप उत्पादन |
| **व्यवहारिक** | छाया खोजना, कपड़े उतारना |

### ठंड पर प्रतिक्रिया

| प्रतिक्रिया | तंत्र |
|:----------|:------|
| **वासोकंस्ट्रिक्शन** | त्वचा वाहिकाएं सिकुड़ती हैं |
| **कंपकंपी** | ताप उत्पादन |
| **बढ़ा चयापचय** | अधिक ताप उत्पादन |
| **व्यवहारिक** | गर्मी खोजना, कपड़े पहनना |

---

## 🏔️ पर्यावरणीय अनुकूलन

### गर्मी अनुकूलन (1-2 सप्ताह)

| अनुकूलन | लाभ |
|:--------|:----|
| ↑ पसीने की क्षमता | बेहतर शीतलन |
| ↓ पसीने में नमक हानि | इलेक्ट्रोलाइट संरक्षण |
| ↑ प्लाज्मा मात्रा | बेहतर परिसंचरण |

### गर्मी संबंधित बीमारियां

| स्थिति | विशेषताएं | उपचार |
|:-------|:---------|:------|
| **हीट क्रैम्प्स** | मांसपेशी ऐंठन | आराम, तरल, नमक |
| **हीट एग्जॉस्टन** | थकान, चक्कर, पसीना | ठंडा वातावरण, तरल |
| **हीट स्ट्रोक** | उच्च तापमान, सूखी त्वचा, भ्रम | आपातकाल! तेज शीतलन |

:::danger
**हीट स्ट्रोक चिकित्सा आपातकाल है!**
- तापमान >40°C
- सूखी, गर्म त्वचा (पसीना रुक जाता है)
- बदली चेतना
- तेज नाड़ी
- **तत्काल शीतलन आवश्यक**
:::

### ठंड संबंधित बीमारियां

| स्थिति | विशेषताएं | उपचार |
|:-------|:---------|:------|
| **हाइपोथर्मिया** | तापमान <35°C, भ्रम | धीरे-धीरे गर्म करना |
| **फ्रॉस्टबाइट** | जमे ऊतक, पीली त्वचा | धीरे गर्म करना, न रगड़ें |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. अधिकतम HR = 220 - आयु
2. सामान्य मुख तापमान = 36.5-37.5°C
3. बुखार = >37.5°C (मुख)
4. ताप हानि: 60% विकिरण, 22% वाष्पीकरण
5. हीट स्ट्रोक: सूखी त्वचा, भ्रम - आपातकाल!
6. GFR 40 के बाद ~1 mL/min/वर्ष घटता है
7. गर्मी अनुकूलन 1-2 सप्ताह लगते हैं
8. हाइपोथर्मिया = <35°C
:::
`
  }
];
