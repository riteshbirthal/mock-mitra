export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const healthHygieneLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Health & Hygiene",
    titleHi: "स्वास्थ्य और स्वच्छता का परिचय",
    contentEn: `
# 🧼 Introduction to Health & Hygiene

---

## 📖 Definition of Health (WHO)

> **Health** is a state of complete physical, mental, and social well-being and not merely the absence of disease.

### Dimensions of Health

| Dimension | Description |
|:----------|:------------|
| 🏃 **Physical** | Body functioning optimally |
| 🧠 **Mental** | Psychological well-being |
| 👥 **Social** | Ability to interact with others |
| 💫 **Spiritual** | Sense of purpose and meaning |
| ❤️ **Emotional** | Ability to express feelings |

---

## 🧴 What is Hygiene?

> **Hygiene** refers to conditions and practices that help maintain health and prevent disease spread.

### Types of Hygiene

| Type | Description |
|:-----|:------------|
| **Personal** | Individual cleanliness practices |
| **Environmental** | Sanitation of surroundings |
| **Food** | Safe handling of food |
| **Mental** | Practices for psychological health |

---

## 🔗 Chain of Infection

:::info
**6 Links in the Chain:**
1. Infectious agent (pathogen)
2. Reservoir (where pathogen lives)
3. Portal of exit (how it leaves)
4. Mode of transmission
5. Portal of entry (how it enters)
6. Susceptible host
:::

### How Hygiene Breaks the Chain
- **Handwashing** removes pathogens
- **Safe water** prevents waterborne diseases
- **Proper sanitation** prevents fecal-oral transmission
- **Food hygiene** prevents foodborne illness

---

## 🖐️ Personal Hygiene Components

| Component | Practice |
|:----------|:---------|
| **Hand hygiene** | Wash with soap regularly |
| **Oral hygiene** | Brush teeth twice daily |
| **Body hygiene** | Bathe daily, wear clean clothes |
| **Hair care** | Regular washing, combing |
| **Nail care** | Trim short, keep clean |
| **Menstrual hygiene** | Safe practices |
| **Foot care** | Wear footwear, keep clean |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Health = Physical + Mental + Social well-being
2. Hygiene = Practices to maintain health
3. Chain of infection has 6 links
4. Handwashing is most important hygiene practice
5. Personal + Environmental hygiene both essential
:::
`,
    contentHi: `
# 🧼 स्वास्थ्य और स्वच्छता का परिचय

---

## 📖 स्वास्थ्य की परिभाषा (WHO)

> **स्वास्थ्य** पूर्ण शारीरिक, मानसिक और सामाजिक कल्याण की स्थिति है, न कि केवल रोग की अनुपस्थिति।

### स्वास्थ्य के आयाम

| आयाम | विवरण |
|:-----|:------|
| 🏃 **शारीरिक** | शरीर का इष्टतम कार्य |
| 🧠 **मानसिक** | मनोवैज्ञानिक कल्याण |
| 👥 **सामाजिक** | दूसरों के साथ बातचीत |
| 💫 **आध्यात्मिक** | उद्देश्य और अर्थ |
| ❤️ **भावनात्मक** | भावनाओं को व्यक्त करना |

---

## 🧴 स्वच्छता क्या है?

> **स्वच्छता** वे स्थितियां और प्रथाएं हैं जो स्वास्थ्य बनाए रखने और रोग प्रसार को रोकने में मदद करती हैं।

### स्वच्छता के प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **व्यक्तिगत** | व्यक्तिगत सफाई |
| **पर्यावरणीय** | आसपास की स्वच्छता |
| **खाद्य** | भोजन की सुरक्षित हैंडलिंग |
| **मानसिक** | मनोवैज्ञानिक स्वास्थ्य |

---

## 🔗 संक्रमण की श्रृंखला

:::info
**श्रृंखला में 6 कड़ियां:**
1. संक्रामक एजेंट (रोगजनक)
2. जलाशय (जहां रोगजनक रहता है)
3. निकास द्वार
4. संचरण का तरीका
5. प्रवेश द्वार
6. अतिसंवेदनशील मेजबान
:::

---

## 🖐️ व्यक्तिगत स्वच्छता

| घटक | अभ्यास |
|:----|:-------|
| **हाथ स्वच्छता** | साबुन से नियमित धोएं |
| **मौखिक स्वच्छता** | दिन में दो बार ब्रश |
| **शरीर स्वच्छता** | रोज नहाएं, साफ कपड़े |
| **बाल देखभाल** | नियमित धोना |
| **नाखून देखभाल** | छोटे रखें, साफ |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. स्वास्थ्य = शारीरिक + मानसिक + सामाजिक
2. स्वच्छता = स्वास्थ्य बनाए रखने की प्रथाएं
3. संक्रमण श्रृंखला में 6 कड़ियां
4. हाथ धोना सबसे महत्वपूर्ण
:::
`
  },
  {
    id: 2,
    titleEn: "Hand Hygiene & Handwashing",
    titleHi: "हाथ स्वच्छता और हाथ धोना",
    contentEn: `
# 🖐️ Hand Hygiene & Handwashing

---

## 📖 Why Hand Hygiene?

> **Hand hygiene** is the single most important measure to prevent infections.

:::success
**Fact:** Proper handwashing can reduce diarrheal diseases by 30-50% and respiratory infections by 20%!
:::

---

## 🕐 When to Wash Hands

### Critical Times

| Situation | Why |
|:----------|:----|
| **Before eating** | Prevent ingesting germs |
| **Before cooking** | Prevent food contamination |
| **After toilet** | Remove fecal bacteria |
| **After changing diapers** | Prevent disease spread |
| **After touching animals** | Remove animal germs |
| **After coughing/sneezing** | Prevent respiratory spread |
| **After handling garbage** | Remove contaminants |
| **When hands are dirty** | Remove visible dirt |

---

## 🧼 How to Wash Hands

### 7 Steps of Handwashing

:::tip
**Duration:** 40-60 seconds with soap and water
:::

| Step | Action |
|:-----|:-------|
| 1️⃣ | Wet hands with clean water |
| 2️⃣ | Apply soap |
| 3️⃣ | Rub palm to palm |
| 4️⃣ | Rub between fingers |
| 5️⃣ | Rub back of hands |
| 6️⃣ | Rub thumbs and fingertips |
| 7️⃣ | Rinse and dry with clean towel |

---

## 🏥 WHO 5 Moments (Healthcare)

| Moment | When |
|:-------|:-----|
| 1️⃣ | Before touching patient |
| 2️⃣ | Before clean/aseptic procedure |
| 3️⃣ | After body fluid exposure |
| 4️⃣ | After touching patient |
| 5️⃣ | After touching patient surroundings |

---

## 🧴 Hand Sanitizer

### When to Use
- When soap and water not available
- For visibly clean hands
- Quick disinfection needed

### How to Use
- Use 70% alcohol-based sanitizer
- Apply enough to cover all surfaces
- Rub for 20-30 seconds until dry

:::warning
**Note:** Hand sanitizer does NOT work on visibly dirty hands - use soap and water!
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Hand hygiene = #1 infection prevention
2. Wash before eating, after toilet
3. 40-60 seconds with soap
4. 7 steps of handwashing
5. WHO 5 Moments for healthcare
6. Sanitizer for clean hands only
7. 70% alcohol is effective
:::
`,
    contentHi: `
# 🖐️ हाथ स्वच्छता और हाथ धोना

---

## 📖 हाथ स्वच्छता क्यों?

> **हाथ स्वच्छता** संक्रमण रोकने का सबसे महत्वपूर्ण उपाय है।

:::success
**तथ्य:** उचित हाथ धोने से दस्त 30-50% और श्वसन संक्रमण 20% कम होता है!
:::

---

## 🕐 कब हाथ धोएं

| स्थिति | क्यों |
|:-------|:-----|
| **खाने से पहले** | कीटाणु न खाएं |
| **खाना बनाने से पहले** | भोजन दूषण रोकें |
| **शौचालय के बाद** | मल बैक्टीरिया हटाएं |
| **डायपर बदलने के बाद** | रोग प्रसार रोकें |
| **जानवरों को छूने के बाद** | कीटाणु हटाएं |
| **खांसने/छींकने के बाद** | श्वसन प्रसार रोकें |

---

## 🧼 हाथ कैसे धोएं

### हाथ धोने के 7 चरण

:::tip
**अवधि:** साबुन और पानी से 40-60 सेकंड
:::

| चरण | क्रिया |
|:----|:------|
| 1️⃣ | साफ पानी से हाथ गीले करें |
| 2️⃣ | साबुन लगाएं |
| 3️⃣ | हथेली से हथेली रगड़ें |
| 4️⃣ | उंगलियों के बीच रगड़ें |
| 5️⃣ | हाथों की पीठ रगड़ें |
| 6️⃣ | अंगूठे और उंगलियों के सिरे |
| 7️⃣ | धोएं और साफ तौलिए से सुखाएं |

---

## 🏥 WHO 5 क्षण

| क्षण | कब |
|:----|:---|
| 1️⃣ | रोगी छूने से पहले |
| 2️⃣ | स्वच्छ प्रक्रिया से पहले |
| 3️⃣ | शरीर द्रव संपर्क के बाद |
| 4️⃣ | रोगी छूने के बाद |
| 5️⃣ | परिवेश छूने के बाद |

---

## 🧴 हैंड सैनिटाइज़र

### कब उपयोग करें
- साबुन-पानी उपलब्ध नहीं
- दृश्य रूप से साफ हाथ
- त्वरित कीटाणुशोधन

:::warning
**नोट:** गंदे हाथों पर सैनिटाइज़र काम नहीं करता!
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. हाथ स्वच्छता = #1 संक्रमण रोकथाम
2. खाने से पहले, शौचालय के बाद धोएं
3. साबुन से 40-60 सेकंड
4. हाथ धोने के 7 चरण
5. WHO 5 क्षण
6. सैनिटाइज़र साफ हाथों के लिए
:::
`
  },
  {
    id: 3,
    titleEn: "Water & Sanitation",
    titleHi: "जल और स्वच्छता",
    contentEn: `
# 💧 Water & Sanitation

---

## 📖 Safe Drinking Water

> **Safe water** is free from pathogens, harmful chemicals, and acceptable in taste, color, and odor.

### Water-Borne Diseases

| Disease | Causative Agent |
|:--------|:----------------|
| **Cholera** | Vibrio cholerae |
| **Typhoid** | Salmonella typhi |
| **Hepatitis A/E** | Hepatitis virus |
| **Dysentery** | Shigella, Amoeba |
| **Polio** | Poliovirus |

---

## 🧪 Water Purification Methods

### Household Methods

| Method | How It Works |
|:-------|:-------------|
| **Boiling** | Kill pathogens at 100°C |
| **Chlorination** | Chemical disinfection |
| **Filtration** | Remove particles |
| **SODIS** | Solar disinfection |
| **RO/UV** | Advanced purification |

:::success
**Boiling:** Most effective household method - boil for 1 minute at rolling boil!
:::

### Chlorination
- **Household:** 1-2 drops bleach per liter
- **Contact time:** 30 minutes
- **Residual chlorine:** 0.2-0.5 mg/L

---

## 🚽 Sanitation

> **Sanitation** is the safe disposal of human waste to prevent disease.

### Types of Latrines

| Type | Description |
|:-----|:------------|
| **Water-seal** | Uses water trap |
| **Pit latrine** | Simple pit in ground |
| **Septic tank** | Underground treatment |
| **Soak pit** | Absorption of liquids |

---

## 🏠 ODF (Open Defecation Free)

### Swachh Bharat Mission Goals
- Eliminate open defecation
- Construct household toilets
- Proper waste management
- Behavior change communication

:::warning
**Open Defecation Risks:**
- Contamination of water sources
- Spread of diarrheal diseases
- Soil and food contamination
- Loss of dignity
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Safe water = No pathogens, chemicals
2. Boiling is most effective household method
3. Chlorination: 1-2 drops/liter, 30 min contact
4. Water-seal latrines prevent flies/smell
5. ODF = Open Defecation Free
6. Swachh Bharat promotes sanitation
:::
`,
    contentHi: `
# 💧 जल और स्वच्छता

---

## 📖 सुरक्षित पेयजल

> **सुरक्षित जल** रोगजनकों, हानिकारक रसायनों से मुक्त और स्वाद, रंग में स्वीकार्य है।

### जल-जनित रोग

| रोग | कारक |
|:----|:-----|
| **हैजा** | विब्रियो कॉलेरी |
| **टायफॉइड** | साल्मोनेला टाइफी |
| **हेपेटाइटिस A/E** | हेपेटाइटिस वायरस |
| **पेचिश** | शिगेला, अमीबा |
| **पोलियो** | पोलियो वायरस |

---

## 🧪 जल शुद्धिकरण विधियां

| विधि | कैसे काम करती है |
|:-----|:----------------|
| **उबालना** | 100°C पर रोगजनक मारें |
| **क्लोरीनीकरण** | रासायनिक कीटाणुशोधन |
| **छानना** | कण हटाना |
| **SODIS** | सौर कीटाणुशोधन |
| **RO/UV** | उन्नत शुद्धिकरण |

:::success
**उबालना:** सबसे प्रभावी - 1 मिनट उबालें!
:::

### क्लोरीनीकरण
- **घरेलू:** 1-2 बूंद ब्लीच प्रति लीटर
- **संपर्क समय:** 30 मिनट

---

## 🚽 स्वच्छता

### शौचालय के प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **वाटर-सील** | पानी की सील |
| **पिट लैट्रिन** | जमीन में गड्ढा |
| **सेप्टिक टैंक** | भूमिगत उपचार |

---

## 🏠 ODF (खुले में शौच मुक्त)

### स्वच्छ भारत मिशन
- खुले में शौच समाप्त
- घरेलू शौचालय निर्माण
- उचित अपशिष्ट प्रबंधन
- व्यवहार परिवर्तन

:::warning
**खुले में शौच के जोखिम:**
- जल स्रोत प्रदूषण
- दस्त रोग प्रसार
- मिट्टी और भोजन दूषण
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सुरक्षित जल = रोगजनक मुक्त
2. उबालना सबसे प्रभावी
3. क्लोरीनीकरण: 1-2 बूंद/लीटर
4. वाटर-सील मक्खी/गंध रोकता है
5. ODF = खुले में शौच मुक्त
:::
`
  },
  {
    id: 4,
    titleEn: "Food Hygiene & Safety",
    titleHi: "खाद्य स्वच्छता और सुरक्षा",
    contentEn: `
# 🍽️ Food Hygiene & Safety

---

## 📖 What is Food Hygiene?

> **Food hygiene** refers to all conditions and measures to ensure food safety from production to consumption.

---

## ⚠️ Food-Borne Diseases

| Disease | Cause | Source |
|:--------|:------|:-------|
| **Food poisoning** | Bacteria toxins | Contaminated food |
| **Typhoid** | Salmonella | Contaminated water/food |
| **Cholera** | V. cholerae | Contaminated water |
| **Hepatitis A** | Virus | Fecal contamination |
| **Worm infestations** | Parasites | Raw meat, vegetables |

---

## 🛡️ Five Keys to Safer Food (WHO)

### 1. Keep Clean
- Wash hands before handling food
- Clean surfaces and equipment
- Protect food from insects/animals

### 2. Separate Raw and Cooked
- Use separate cutting boards
- Store raw meat separately
- Don't mix utensils

### 3. Cook Thoroughly
- Heat to 70°C throughout
- Reheat food properly
- Boil soups and stews

### 4. Keep at Safe Temperatures
- Don't leave cooked food at room temp >2 hours
- Refrigerate promptly (<5°C)
- Keep hot food hot (>60°C)

### 5. Use Safe Water and Materials
- Use clean water
- Select fresh foods
- Check expiry dates

---

## 🌡️ Temperature Danger Zone

:::danger
**Danger Zone: 5°C to 60°C**
Bacteria multiply rapidly in this range!
:::

| Temperature | Safety |
|:------------|:-------|
| >60°C | Safe (hot) |
| 5-60°C | DANGER ZONE |
| <5°C | Safe (cold) |

---

## 🥬 Vegetable & Fruit Safety

| Step | Action |
|:-----|:-------|
| 1 | Wash under running water |
| 2 | Soak in salt water (10 min) |
| 3 | Rinse thoroughly |
| 4 | Store properly |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. WHO 5 Keys to Safer Food
2. Danger zone: 5-60°C
3. Cook to 70°C minimum
4. Refrigerate below 5°C
5. Separate raw and cooked
6. Wash hands before cooking
7. Don't leave food out >2 hours
:::
`,
    contentHi: `
# 🍽️ खाद्य स्वच्छता और सुरक्षा

---

## 📖 खाद्य स्वच्छता क्या है?

> **खाद्य स्वच्छता** उत्पादन से उपभोग तक खाद्य सुरक्षा सुनिश्चित करने की सभी स्थितियां और उपाय।

---

## ⚠️ खाद्य-जनित रोग

| रोग | कारण | स्रोत |
|:----|:-----|:------|
| **फूड पॉइज़निंग** | बैक्टीरिया विष | दूषित भोजन |
| **टायफॉइड** | साल्मोनेला | दूषित जल/भोजन |
| **हैजा** | V. cholerae | दूषित जल |
| **हेपेटाइटिस A** | वायरस | मल दूषण |

---

## 🛡️ सुरक्षित भोजन की 5 कुंजियां (WHO)

### 1. साफ रखें
- भोजन संभालने से पहले हाथ धोएं
- सतह और उपकरण साफ करें

### 2. कच्चा और पका अलग
- अलग कटिंग बोर्ड उपयोग करें
- कच्चा मांस अलग रखें

### 3. अच्छी तरह पकाएं
- पूरे भोजन में 70°C
- भोजन ठीक से गर्म करें

### 4. सुरक्षित तापमान पर रखें
- पका भोजन 2 घंटे से ज्यादा बाहर न छोड़ें
- रेफ्रिजरेट करें (<5°C)

### 5. सुरक्षित जल और सामग्री
- साफ पानी उपयोग करें
- ताजा भोजन चुनें

---

## 🌡️ तापमान खतरा क्षेत्र

:::danger
**खतरा क्षेत्र: 5°C से 60°C**
इस सीमा में बैक्टीरिया तेजी से बढ़ते हैं!
:::

| तापमान | सुरक्षा |
|:-------|:-------|
| >60°C | सुरक्षित (गर्म) |
| 5-60°C | खतरा क्षेत्र |
| <5°C | सुरक्षित (ठंडा) |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. WHO 5 कुंजियां
2. खतरा क्षेत्र: 5-60°C
3. न्यूनतम 70°C पर पकाएं
4. 5°C से नीचे रेफ्रिजरेट
5. कच्चा और पका अलग
6. खाना बनाने से पहले हाथ धोएं
:::
`
  },
  {
    id: 5,
    titleEn: "Environmental Hygiene",
    titleHi: "पर्यावरणीय स्वच्छता",
    contentEn: `
# 🏠 Environmental Hygiene

---

## 📖 What is Environmental Hygiene?

> **Environmental hygiene** refers to creating and maintaining a clean, healthy environment in homes and communities.

---

## 🗑️ Solid Waste Management

### Types of Waste

| Type | Examples | Disposal |
|:-----|:---------|:---------|
| **Biodegradable** | Food waste, leaves | Composting |
| **Non-biodegradable** | Plastic, glass | Recycling |
| **Hazardous** | Batteries, chemicals | Special disposal |

### 3 R's of Waste Management

:::success
**Reduce → Reuse → Recycle**
:::

---

## 🦟 Vector Control

### Common Disease Vectors

| Vector | Diseases |
|:-------|:---------|
| **Mosquito** | Malaria, Dengue, Chikungunya |
| **Housefly** | Diarrhea, Typhoid |
| **Rat** | Plague, Leptospirosis |
| **Cockroach** | Gastroenteritis |

### Prevention Methods

| Method | Action |
|:-------|:-------|
| **Source reduction** | Remove breeding sites |
| **Screens** | Prevent entry |
| **Insecticides** | Kill vectors |
| **Bed nets** | Prevent bites |

---

## 🏠 Healthy Housing

### Essential Requirements

| Component | Standard |
|:----------|:---------|
| **Ventilation** | Fresh air circulation |
| **Lighting** | Natural + artificial |
| **Space** | Minimum 50 sq ft/person |
| **Kitchen** | Separate, ventilated |
| **Toilet** | Water-sealed, separate |
| **Water supply** | Safe, adequate |

---

## 💨 Air Quality

### Indoor Air Pollution Sources
- Cooking fuel (wood, coal, dung)
- Tobacco smoke
- Incense/mosquito coils
- Chemicals

### Health Effects
- Respiratory infections
- COPD
- Lung cancer
- Eye irritation

:::tip
**Prevention:**
- Use clean cooking fuel (LPG)
- Improve ventilation
- Avoid smoking indoors
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 3 R's: Reduce, Reuse, Recycle
2. Mosquitoes spread Malaria, Dengue
3. Remove stagnant water for mosquito control
4. Minimum 50 sq ft space per person
5. Use LPG to reduce indoor pollution
6. Proper ventilation is essential
:::
`,
    contentHi: `
# 🏠 पर्यावरणीय स्वच्छता

---

## 📖 पर्यावरणीय स्वच्छता क्या है?

> **पर्यावरणीय स्वच्छता** घरों और समुदायों में स्वच्छ, स्वस्थ वातावरण बनाना और बनाए रखना।

---

## 🗑️ ठोस अपशिष्ट प्रबंधन

### अपशिष्ट के प्रकार

| प्रकार | उदाहरण | निपटान |
|:-------|:-------|:-------|
| **जैव-निम्नीकरणीय** | भोजन, पत्ते | खाद बनाना |
| **गैर-जैव-निम्नीकरणीय** | प्लास्टिक, कांच | पुनर्चक्रण |
| **खतरनाक** | बैटरी, रसायन | विशेष निपटान |

### अपशिष्ट प्रबंधन के 3 R

:::success
**कम करो → पुनः उपयोग → पुनर्चक्रण**
:::

---

## 🦟 वेक्टर नियंत्रण

### सामान्य रोग वाहक

| वाहक | रोग |
|:-----|:----|
| **मच्छर** | मलेरिया, डेंगू, चिकनगुनिया |
| **घरेलू मक्खी** | दस्त, टायफॉइड |
| **चूहा** | प्लेग, लेप्टोस्पायरोसिस |
| **तिलचट्टा** | आंत्रशोथ |

### रोकथाम विधियां

| विधि | क्रिया |
|:-----|:------|
| **स्रोत कमी** | प्रजनन स्थल हटाएं |
| **जाली** | प्रवेश रोकें |
| **कीटनाशक** | वाहक मारें |
| **बेड नेट** | काटने से रोकें |

---

## 🏠 स्वस्थ आवास

| घटक | मानक |
|:----|:------|
| **वेंटिलेशन** | ताजी हवा संचार |
| **प्रकाश** | प्राकृतिक + कृत्रिम |
| **स्थान** | न्यूनतम 50 वर्ग फुट/व्यक्ति |
| **रसोई** | अलग, हवादार |
| **शौचालय** | वाटर-सील, अलग |

---

## 💨 वायु गुणवत्ता

### इनडोर प्रदूषण स्रोत
- खाना पकाने का ईंधन (लकड़ी, कोयला)
- तंबाकू धुआं
- मच्छर कॉइल

:::tip
**रोकथाम:**
- स्वच्छ ईंधन (LPG) उपयोग करें
- वेंटिलेशन सुधारें
- घर में धूम्रपान से बचें
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. 3 R: कम करो, पुनः उपयोग, पुनर्चक्रण
2. मच्छर मलेरिया, डेंगू फैलाते हैं
3. रुके पानी हटाएं
4. न्यूनतम 50 वर्ग फुट/व्यक्ति
5. LPG से इनडोर प्रदूषण कम करें
:::
`
  },
  {
    id: 6,
    titleEn: "Food Hygiene & Safety",
    titleHi: "खाद्य स्वच्छता और सुरक्षा",
    contentEn: `
# 🍽️ Food Hygiene & Safety

---

## 📖 What is Food Safety?

> **Food safety** refers to handling, preparing, and storing food in ways that prevent foodborne illness.

:::info
**Food hygiene** = All conditions and measures to ensure safety and suitability of food at all stages.
:::

---

## 🦠 Sources of Food Contamination

### Types of Contamination

| Type | Examples |
|:-----|:---------|
| **Biological** | Bacteria (Salmonella, E. coli), Viruses, Parasites |
| **Chemical** | Pesticides, Heavy metals, Adulterants |
| **Physical** | Hair, Glass, Insects, Stones |

### Cross-Contamination
- Transfer from raw to cooked food
- Through cutting boards, utensils
- Through hands of food handlers
- Through contaminated water

---

## 🔑 WHO's Five Keys to Safer Food

:::success
### Key 1: Keep Clean 🧼
- Wash hands before and during food preparation
- Wash hands after using toilet
- Clean all surfaces and equipment
- Protect food from insects and animals
:::

### Key 2: Separate Raw and Cooked 🔀
- Separate raw meat from other foods
- Use separate utensils for raw and cooked
- Different cutting boards for each

### Key 3: Cook Thoroughly 🔥
- Cook food thoroughly, especially meat and eggs
- Internal temperature should reach **70°C**
- Bring soups and stews to boiling
- Reheat cooked food thoroughly

### Key 4: Keep Food at Safe Temperatures 🌡️

| Zone | Temperature | Action |
|:-----|:------------|:-------|
| **Danger Zone** | 5°C to 60°C | Bacteria grow rapidly! |
| **Refrigeration** | Below 5°C | Slows bacterial growth |
| **Hot Holding** | Above 60°C | Prevents growth |

:::warning
Don't leave cooked food at room temperature for more than **2 hours**!
:::

### Key 5: Use Safe Water and Raw Materials 💧
- Use safe water or treat it
- Select fresh and wholesome foods
- Wash fruits and vegetables thoroughly
- Don't use food beyond expiry date

---

## 🦠 Common Foodborne Diseases

| Disease | Organism | Source | Symptoms |
|:--------|:---------|:-------|:---------|
| **Salmonellosis** | Salmonella | Eggs, poultry | Diarrhea, fever |
| **Food Poisoning** | S. aureus | Handled foods | Vomiting, cramps |
| **E. coli Infection** | E. coli O157 | Undercooked meat | Bloody diarrhea |
| **Cholera** | V. cholerae | Water, seafood | Watery diarrhea |
| **Hepatitis A** | Virus | Water, shellfish | Jaundice, fatigue |

---

## 🧪 Food Adulteration

### Common Adulterants in India

| Food | Adulterant |
|:-----|:-----------|
| **Milk** | Water, urea |
| **Sweets** | Artificial colors |
| **Pulses** | Stones |
| **Turmeric** | Lead chromate |
| **Honey** | Sugar syrup |

### Prevention
- Buy from reliable sources
- Check for FSSAI license
- Be aware of common adulterants
- Report suspected adulteration

---

## 🍳 Food Handler Hygiene

### Personal Hygiene
- Regular bathing
- Clean clothes, apron
- Hair covered
- Short, clean nails
- No jewelry while cooking

### During Food Preparation
- Wash hands frequently
- Don't handle food if ill
- Cover cuts and wounds
- Don't touch face, hair
- Use utensils, not hands

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Five Keys: Clean, Separate, Cook, Safe Temp, Safe Water
2. Danger Zone: 5-60°C
3. Cook food to 70°C
4. Don't leave cooked food out >2 hours
5. Separate raw and cooked foods
6. Check FSSAI license when buying
7. Food handlers must maintain strict hygiene
:::
`,
    contentHi: `
# 🍽️ खाद्य स्वच्छता और सुरक्षा

---

## 📖 खाद्य सुरक्षा क्या है?

> **खाद्य सुरक्षा** भोजन को संभालने, तैयार करने और स्टोर करने को संदर्भित करता है जो खाद्य जनित बीमारी को रोकता है।

---

## 🦠 खाद्य संदूषण के स्रोत

### संदूषण के प्रकार

| प्रकार | उदाहरण |
|:-------|:-------|
| **जैविक** | बैक्टीरिया, वायरस, परजीवी |
| **रासायनिक** | कीटनाशक, भारी धातु, मिलावट |
| **भौतिक** | बाल, कांच, कीड़े, पत्थर |

---

## 🔑 WHO की सुरक्षित भोजन की पांच चाबियां

:::success
### चाबी 1: साफ रखें 🧼
- खाना बनाने से पहले और दौरान हाथ धोएं
- शौचालय के बाद हाथ धोएं
- सभी सतहों को साफ करें
- कीड़ों और जानवरों से भोजन बचाएं
:::

### चाबी 2: कच्चा और पका अलग रखें 🔀
- कच्चे मांस को अन्य खाद्य पदार्थों से अलग करें
- अलग बर्तन उपयोग करें

### चाबी 3: अच्छी तरह पकाएं 🔥
- भोजन अच्छी तरह पकाएं
- आंतरिक तापमान **70°C** तक पहुंचे
- सूप और स्टू उबालें

### चाबी 4: सुरक्षित तापमान पर रखें 🌡️

| क्षेत्र | तापमान | क्रिया |
|:-------|:-------|:------|
| **खतरे का क्षेत्र** | 5-60°C | बैक्टीरिया तेजी से बढ़ते हैं! |
| **रेफ्रिजरेशन** | 5°C से नीचे | विकास धीमा |
| **गर्म रखना** | 60°C से ऊपर | विकास रोकता है |

:::warning
पके भोजन को कमरे के तापमान पर **2 घंटे** से अधिक न छोड़ें!
:::

### चाबी 5: सुरक्षित पानी और कच्चा माल उपयोग करें 💧
- सुरक्षित पानी उपयोग करें
- ताजा खाद्य पदार्थ चुनें
- फल और सब्जियां अच्छी तरह धोएं

---

## 🦠 आम खाद्य जनित रोग

| रोग | जीव | स्रोत | लक्षण |
|:----|:-----|:-----|:------|
| **साल्मोनेलोसिस** | साल्मोनेला | अंडे, मुर्गी | दस्त, बुखार |
| **फूड पॉइजनिंग** | S. aureus | हाथ से छुआ भोजन | उल्टी, ऐंठन |
| **हैजा** | V. cholerae | पानी, समुद्री भोजन | पानी जैसा दस्त |

---

## 🧪 खाद्य मिलावट

### भारत में आम मिलावट

| खाद्य | मिलावट |
|:-----|:-------|
| **दूध** | पानी, यूरिया |
| **मिठाई** | कृत्रिम रंग |
| **दालें** | पत्थर |
| **हल्दी** | लेड क्रोमेट |

### रोकथाम
- विश्वसनीय स्रोतों से खरीदें
- FSSAI लाइसेंस जांचें
- मिलावट की रिपोर्ट करें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. पांच चाबियां: साफ, अलग, पकाओ, सुरक्षित तापमान, सुरक्षित पानी
2. खतरे का क्षेत्र: 5-60°C
3. 70°C तक पकाएं
4. पका भोजन 2 घंटे से ज्यादा बाहर न छोड़ें
5. कच्चा और पका अलग रखें
6. FSSAI लाइसेंस जांचें
:::
`
  },
  {
    id: 7,
    titleEn: "Housing & Ventilation",
    titleHi: "आवास और वेंटिलेशन",
    contentEn: `
# 🏠 Housing & Ventilation

---

## 📖 Healthy Housing

> **Healthy housing** provides shelter that protects against health hazards and promotes physical and mental well-being.

### Components of Healthy Housing

| Component | Description |
|:----------|:------------|
| 🏗️ **Protection** | From weather elements |
| 💧 **Water supply** | Safe and adequate |
| 🚽 **Sanitation** | Proper toilets |
| 💨 **Ventilation** | Fresh air circulation |
| 💡 **Lighting** | Natural and artificial |
| 🍳 **Cooking** | Safe facilities |
| 🦟 **Vector proof** | Protection from insects |
| 📐 **Space** | Adequate per person |

---

## 📏 Housing Standards

| Requirement | Standard |
|:------------|:---------|
| **Floor area** | 9-10 sq.m per person |
| **Ceiling height** | Minimum 3 meters |
| **Window area** | 10-20% of floor area |
| **Ventilation** | 15-20% of floor area |

### Site Selection
- Well-drained land
- Away from swamps/stagnant water
- Not in flood-prone areas
- Access to essential services

---

## 💨 Ventilation

### Importance of Ventilation

:::info
**Good ventilation:**
- Removes stale air and odors
- Supplies fresh oxygen
- Removes excess moisture
- Dilutes indoor air pollutants
- Regulates temperature
:::

### Types of Ventilation

| Type | Method |
|:-----|:-------|
| **Natural** | Windows, doors, cross-ventilation |
| **Mechanical** | Exhaust fans, air conditioning |

### Cross-Ventilation
> Openings on opposite walls allow air to flow through

### Signs of Poor Ventilation
- Stuffy, stale air
- Condensation on windows
- Musty odors
- Mold growth
- Accumulation of smoke

---

## 💡 Lighting Requirements

### Natural Lighting
- Best source of illumination
- Reduces electricity cost
- Kills some pathogens
- Improves mood and productivity

### Artificial Lighting Standards

| Activity | Required Lux |
|:---------|:-------------|
| **Reading** | 300-500 lux |
| **General** | 100-200 lux |
| **Kitchen** | 300 lux |

### Window Placement
- North-facing (in India): Consistent light
- South-facing: More heat gain
- Window sill height: 75-90 cm

---

## 👥 Effects of Overcrowding

### Definition
> More persons living in a space than recommended standards allow

### Health Effects

:::danger
**Overcrowding causes:**
1. **Respiratory infections** - TB, influenza spread easily
2. **Skin diseases** - Scabies, ringworm
3. **Mental health** - Stress, depression
4. **Poor hygiene** - Inadequate facilities
5. **Accidents** - Especially for children
:::

### Standards
- Maximum 2 persons per habitable room
- Minimum 50 sq.ft per person
- Separate sleeping for adults of opposite sex

---

## 💨 Indoor Air Pollution

### Sources

| Source | Examples |
|:-------|:---------|
| **Cooking fuels** | Wood, dung, coal, kerosene |
| **Tobacco smoke** | Active and passive |
| **Building materials** | Paint, adhesives |
| **Biological** | Mold, dust mites |

### Health Effects
- Acute respiratory infections (children)
- COPD (Chronic Obstructive Pulmonary Disease)
- Lung cancer
- Eye irritation and cataracts
- Low birth weight

:::warning
**4 million deaths annually** from indoor air pollution globally!
Women and children most affected.
:::

---

## 🔥 Prevention of Indoor Air Pollution

### Solutions

| Solution | Description |
|:---------|:------------|
| **Improved stoves** | More efficient, chimney |
| **Clean fuels** | LPG (Ujjwala Yojana), electricity |
| **Ventilation** | Exhaust fans, chimneys |
| **Separate kitchen** | Away from living space |

### Government Initiatives
- Pradhan Mantri Ujjwala Yojana (LPG)
- National Biomass Cookstove Programme
- Solar energy promotion

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Floor area: 9-10 sq.m per person
2. Window area: 10-20% of floor area
3. Cross-ventilation = Openings on opposite walls
4. Overcrowding increases respiratory and skin diseases
5. Indoor air pollution: 4 million deaths/year
6. LPG (Ujjwala Yojana) reduces pollution
7. Adequate ventilation removes pollutants
:::
`,
    contentHi: `
# 🏠 आवास और वेंटिलेशन

---

## 📖 स्वस्थ आवास

> **स्वस्थ आवास** ऐसा आश्रय प्रदान करता है जो स्वास्थ्य खतरों से बचाता है और शारीरिक तथा मानसिक स्वास्थ्य को बढ़ावा देता है।

### स्वस्थ आवास के घटक

| घटक | विवरण |
|:----|:------|
| 🏗️ **सुरक्षा** | मौसम से |
| 💧 **जल आपूर्ति** | सुरक्षित और पर्याप्त |
| 🚽 **स्वच्छता** | उचित शौचालय |
| 💨 **वेंटिलेशन** | ताजी हवा संचार |
| 💡 **प्रकाश** | प्राकृतिक और कृत्रिम |

---

## 📏 आवास मानक

| आवश्यकता | मानक |
|:---------|:-----|
| **फर्श क्षेत्र** | 9-10 वर्ग मीटर प्रति व्यक्ति |
| **छत ऊंचाई** | न्यूनतम 3 मीटर |
| **खिड़की क्षेत्र** | फर्श का 10-20% |
| **वेंटिलेशन** | फर्श का 15-20% |

---

## 💨 वेंटिलेशन

### वेंटिलेशन का महत्व

:::info
**अच्छा वेंटिलेशन:**
- बासी हवा और गंध हटाता है
- ताजी ऑक्सीजन प्रदान करता है
- अतिरिक्त नमी हटाता है
- इनडोर प्रदूषकों को पतला करता है
- तापमान नियंत्रित करता है
:::

### क्रॉस-वेंटिलेशन
> विपरीत दीवारों पर खुली जगह हवा को बहने देती है

### खराब वेंटिलेशन के संकेत
- भरी, बासी हवा
- खिड़कियों पर संघनन
- फफूंदी की गंध
- मोल्ड वृद्धि

---

## 👥 अधिक भीड़ के प्रभाव

### स्वास्थ्य प्रभाव

:::danger
**अधिक भीड़ से:**
1. **श्वसन संक्रमण** - टीबी, इन्फ्लुएंजा
2. **त्वचा रोग** - खाज, दाद
3. **मानसिक स्वास्थ्य** - तनाव, अवसाद
4. **खराब स्वच्छता** - अपर्याप्त सुविधाएं
:::

### मानक
- अधिकतम 2 व्यक्ति प्रति कमरा
- न्यूनतम 50 वर्ग फुट प्रति व्यक्ति

---

## 💨 इनडोर वायु प्रदूषण

### स्रोत

| स्रोत | उदाहरण |
|:-----|:-------|
| **खाना पकाने का ईंधन** | लकड़ी, गोबर, कोयला |
| **तंबाकू धुआं** | सक्रिय और निष्क्रिय |
| **निर्माण सामग्री** | पेंट, चिपकने वाले |

### स्वास्थ्य प्रभाव
- तीव्र श्वसन संक्रमण
- COPD
- फेफड़ों का कैंसर
- आंखों में जलन

:::warning
इनडोर वायु प्रदूषण से विश्व स्तर पर **40 लाख मौतें** सालाना!
:::

---

## 🔥 इनडोर वायु प्रदूषण की रोकथाम

### समाधान

| समाधान | विवरण |
|:-------|:------|
| **बेहतर चूल्हे** | अधिक कुशल, चिमनी |
| **स्वच्छ ईंधन** | LPG (उज्ज्वला योजना) |
| **वेंटिलेशन** | एग्जॉस्ट फैन, चिमनी |

### सरकारी पहल
- प्रधानमंत्री उज्ज्वला योजना
- राष्ट्रीय बायोमास कुकस्टोव कार्यक्रम

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. फर्श क्षेत्र: 9-10 वर्ग मीटर प्रति व्यक्ति
2. खिड़की क्षेत्र: फर्श का 10-20%
3. क्रॉस-वेंटिलेशन = विपरीत दीवारों पर खुली जगह
4. अधिक भीड़ से श्वसन और त्वचा रोग बढ़ते हैं
5. इनडोर प्रदूषण: 40 लाख मौतें/वर्ष
6. उज्ज्वला योजना (LPG) प्रदूषण कम करती है
:::
`
  },
  {
    id: 8,
    titleEn: "Vector Control",
    titleHi: "वेक्टर नियंत्रण",
    contentEn: `
# 🦟 Vector Control

---

## 📖 What are Vectors?

> **Vectors** are living organisms that can transmit infectious pathogens between humans or from animals to humans.

### Types of Vectors

| Type | Description | Example |
|:-----|:------------|:--------|
| **Mechanical** | Carry pathogens on body | Flies |
| **Biological** | Pathogens multiply inside | Mosquitoes |

---

## 🦟 Major Vectors and Diseases

| Vector | Diseases |
|:-------|:---------|
| 🦟 **Mosquitoes** | Malaria, Dengue, Chikungunya, Japanese Encephalitis, Filariasis, Zika |
| 🪰 **Flies** | Diarrhea, Dysentery, Typhoid, Cholera |
| 🐀 **Rats** | Plague, Leptospirosis, Rat-bite fever |
| 🪳 **Cockroaches** | Diarrhea, Dysentery |
| 🕷️ **Sandflies** | Kala-azar (Leishmaniasis) |
| 🪲 **Ticks** | Typhus, Lyme disease |

---

## 🦟 Mosquito Species and Breeding Sites

### Anopheles (Malaria)
- **Breeding:** Clean, unpolluted water
- **Biting time:** Dusk to dawn
- **Sites:** Ponds, rice fields, slow streams

### Aedes (Dengue, Chikungunya)
- **Breeding:** Clean stagnant water (containers)
- **Biting time:** Day (early morning, late afternoon)
- **Sites:** Coolers, tires, flower pots, coconut shells

### Culex (Filariasis, Japanese Encephalitis)
- **Breeding:** Polluted water, drains
- **Biting time:** Night
- **Sites:** Blocked drains, cesspools, septic tanks

:::warning
**Aedes breeds in clean container water** - Check coolers, tires, flower pots!
:::

---

## 🔄 Integrated Vector Management (IVM)

### Definition
> Rational decision-making process for optimal use of resources for vector control

### Components

| Method | Examples |
|:-------|:---------|
| **Environmental** | Source reduction, drainage, filling ditches |
| **Biological** | Larvivorous fish (Gambusia), Bti |
| **Chemical** | Larvicides, adulticides, IRS, fogging |
| **Personal Protection** | Bed nets, repellents, clothing |

---

## 🛡️ Personal Protective Measures

### Against Mosquitoes

:::success
**Protection Methods:**
- Use bed nets (LLIN preferred)
- Apply mosquito repellents
- Wear long-sleeved clothes
- Install screens on windows
- Use mosquito coils/vaporizers
- Avoid outdoor activities during peak biting
:::

### Against Flies
- Cover food
- Use fly screens
- Keep surroundings clean
- Dispose garbage properly

### Against Rats
- Store food in rodent-proof containers
- Keep surroundings clean
- Block entry points in buildings

---

## 💊 Chemical Control Methods

### Larviciding
- Applied to water bodies
- Temephos (Abate)
- Bti (biological larvicide)

### Adult Mosquito Control

| Method | Description |
|:-------|:------------|
| **IRS** | Indoor Residual Spraying on walls |
| **Fogging** | Space spraying for adult mosquitoes |
| **LLINs** | Long-Lasting Insecticidal Nets |

### Safety Precautions
- Use approved insecticides
- Wear protective equipment
- Proper storage and disposal

---

## 👥 Community Participation

### Source Reduction Activities
- Weekly dry day (empty containers)
- Clean surroundings
- Cover water storage
- Fill pits and ditches

### Surveillance
- Report cases to health workers
- Identify breeding sites
- Monitor vector density

---

## 🏛️ National Vector Borne Disease Control Programme

### Components
1. Malaria control
2. Dengue and Chikungunya control
3. Japanese Encephalitis control
4. Filariasis elimination
5. Kala-azar elimination

### Strategies
- Early diagnosis and treatment
- Vector control
- Personal protection
- Behavior change communication
- Surveillance and outbreak response

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Vectors transmit diseases between hosts
2. Anopheles = Malaria (clean water, night biting)
3. Aedes = Dengue (container water, day biting)
4. Culex = Filariasis (polluted water, night)
5. IVM = Integrated approach (multiple methods)
6. Source reduction = Most sustainable approach
7. LLINs and repellents for personal protection
8. Weekly dry day - empty all containers
:::
`,
    contentHi: `
# 🦟 वेक्टर नियंत्रण

---

## 📖 वेक्टर क्या हैं?

> **वेक्टर** जीवित जीव हैं जो मनुष्यों के बीच या जानवरों से मनुष्यों में संक्रामक रोगजनकों को प्रसारित कर सकते हैं।

---

## 🦟 प्रमुख वेक्टर और रोग

| वेक्टर | रोग |
|:-------|:----|
| 🦟 **मच्छर** | मलेरिया, डेंगू, चिकनगुनिया, जापानी इंसेफेलाइटिस, फाइलेरिया |
| 🪰 **मक्खी** | दस्त, पेचिश, टायफॉइड, हैजा |
| 🐀 **चूहे** | प्लेग, लेप्टोस्पायरोसिस |
| 🪳 **तिलचट्टा** | दस्त, पेचिश |
| 🕷️ **सैंडफ्लाई** | काला-अजार |

---

## 🦟 मच्छर प्रजातियां और प्रजनन स्थल

### एनोफिलीज (मलेरिया)
- **प्रजनन:** साफ, अप्रदूषित पानी
- **काटने का समय:** शाम से सुबह
- **स्थान:** तालाब, धान के खेत

### एडीज (डेंगू, चिकनगुनिया)
- **प्रजनन:** साफ रुका पानी (कंटेनर)
- **काटने का समय:** दिन (सुबह, दोपहर बाद)
- **स्थान:** कूलर, टायर, गमले, नारियल के खोल

### क्यूलेक्स (फाइलेरिया)
- **प्रजनन:** प्रदूषित पानी, नालियां
- **काटने का समय:** रात
- **स्थान:** अवरुद्ध नालियां, सेप्टिक टैंक

:::warning
**एडीज साफ कंटेनर पानी में पैदा होता है** - कूलर, टायर, गमले जांचें!
:::

---

## 🔄 एकीकृत वेक्टर प्रबंधन (IVM)

### घटक

| विधि | उदाहरण |
|:-----|:-------|
| **पर्यावरणीय** | स्रोत कमी, जल निकासी |
| **जैविक** | लार्वाभक्षी मछली (गैम्बूसिया) |
| **रासायनिक** | लार्विसाइड, IRS, फॉगिंग |
| **व्यक्तिगत सुरक्षा** | बेड नेट, रिपेलेंट |

---

## 🛡️ व्यक्तिगत सुरक्षा उपाय

### मच्छरों के खिलाफ

:::success
**सुरक्षा के तरीके:**
- बेड नेट उपयोग करें (LLIN बेहतर)
- मच्छर भगाने वाली क्रीम लगाएं
- लंबी आस्तीन के कपड़े पहनें
- खिड़कियों पर जाली लगाएं
- मच्छर कॉइल/वेपोराइज़र उपयोग करें
:::

### मक्खियों के खिलाफ
- भोजन ढकें
- फ्लाई स्क्रीन उपयोग करें
- आसपास साफ रखें

### चूहों के खिलाफ
- भोजन चूहा-प्रूफ कंटेनर में रखें
- प्रवेश बिंदु बंद करें

---

## 💊 रासायनिक नियंत्रण विधियां

### लार्विसाइडिंग
- जल निकायों में लगाया जाता है
- टेमीफोस (अबेट)

### वयस्क मच्छर नियंत्रण

| विधि | विवरण |
|:-----|:------|
| **IRS** | दीवारों पर इनडोर स्प्रे |
| **फॉगिंग** | वयस्क मच्छरों के लिए स्पेस स्प्रे |
| **LLINs** | लंबे समय तक चलने वाली कीटनाशक जाली |

---

## 👥 सामुदायिक भागीदारी

### स्रोत कमी गतिविधियां
- साप्ताहिक सूखा दिन (कंटेनर खाली करें)
- आसपास साफ करें
- पानी भंडारण ढकें
- गड्ढे भरें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. वेक्टर मेजबानों के बीच रोग प्रसारित करते हैं
2. एनोफिलीज = मलेरिया (साफ पानी, रात काटना)
3. एडीज = डेंगू (कंटेनर पानी, दिन काटना)
4. क्यूलेक्स = फाइलेरिया (प्रदूषित पानी)
5. IVM = एकीकृत दृष्टिकोण
6. स्रोत कमी = सबसे टिकाऊ तरीका
7. LLIN और रिपेलेंट व्यक्तिगत सुरक्षा के लिए
8. साप्ताहिक सूखा दिन - सभी कंटेनर खाली करें
:::
`
  },
  {
    id: 9,
    titleEn: "School Health & Hygiene",
    titleHi: "विद्यालय स्वास्थ्य और स्वच्छता",
    contentEn: `
# 🏫 School Health & Hygiene

---

## 📖 Why Focus on Schools?

:::info
**Importance of School Health:**
- Children spend significant time in school
- Habits formed early persist into adulthood
- Children can influence families
- Schools reach large numbers efficiently
- Prevention and promotion of health
:::

### Components of School Health
1. Health services (screening, treatment)
2. Health education
3. Healthy school environment
4. Community and family involvement

---

## 🚽 School Sanitation Facilities

### Toilet Requirements

| Requirement | Standard |
|:------------|:---------|
| **Separate toilets** | For boys and girls |
| **Ratio** | 1 toilet per 40 students |
| **Urinals** | 1 per 20 boys |
| **Features** | Clean, lockable doors, soap, water |

### Menstrual Hygiene Facilities
- Separate toilets for girls
- Water supply in cubicle
- Sanitary pad vending machine
- Disposal bins with lids
- Incinerator for safe disposal
- Rest room for emergencies

### Handwashing Stations
- Near toilets and eating areas
- Soap or hand sanitizer
- Posters on technique

---

## 🍱 Mid-Day Meal (MDM) Hygiene

### Importance
- Improves nutritional status
- Increases school attendance
- Enhances learning
- Reduces classroom hunger

### Food Safety Requirements

| Area | Requirements |
|:-----|:-------------|
| **Kitchen** | Clean, ventilated, pest-proof, safe water |
| **Food handlers** | Health check-ups, personal hygiene, training |
| **Preparation** | Fresh ingredients, proper washing, thorough cooking |
| **Serving** | Clean plates, handwashing before eating |

### Storage
- First In First Out (FIFO)
- Check for pests
- Proper grain storage (raised, dry)

---

## 📚 Health Education in Schools

### Topics to Cover
1. Personal hygiene
2. Handwashing
3. Dental care
4. Nutrition
5. Physical activity
6. Safety and first aid
7. Disease prevention
8. Mental health awareness
9. Substance abuse prevention
10. Reproductive health (age-appropriate)

### Methods

| Method | Examples |
|:-------|:---------|
| **Interactive** | Demonstrations, role plays, peer education |
| **Visual** | Posters, charts |
| **Participatory** | Health clubs, competitions |
| **Reinforcement** | Morning assembly talks |

---

## 🩺 Common Health Problems in School Children

### Nutritional Problems
- Undernutrition
- Anemia (iron deficiency)
- Vitamin A deficiency
- Iodine deficiency
- Obesity (increasingly common)

### Infectious Diseases
- Respiratory infections
- Diarrheal diseases
- Skin infections (scabies, ringworm)
- Worm infestations
- Conjunctivitis

### Other Issues
- Dental caries
- Refractive errors (eye problems)
- Injuries and accidents
- Mental health problems

---

## 🏥 School Health Services

### Health Screening
- General physical examination
- Height and weight (growth monitoring)
- Vision testing
- Hearing assessment
- Dental examination
- Screening for anemia

### Preventive Services
- Immunization (school entry)
- De-worming (biannual)
- Iron-folic acid supplementation
- Vitamin A supplementation

### First Aid
- First aid kit in school
- Trained teacher/staff
- Emergency procedures

---

## 🏛️ National School Health Programs

### RBSK (Rashtriya Bal Swasthya Karyakram)
- Health screening for children 0-18 years
- Early identification of defects, deficiencies, diseases
- Free treatment for identified conditions
- Mobile health teams visit schools

### WIFS (Weekly Iron and Folic Acid Supplementation)
- Weekly IFA tablets
- Target: Adolescents 10-19 years
- Biannual deworming
- Aims to reduce anemia

### Swachh Vidyalaya
- Clean drinking water
- Separate toilets for girls and boys
- Handwashing with soap
- Part of Swachh Bharat Mission

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 1 toilet per 40 students
2. Separate facilities for girls essential
3. MDM needs strict food hygiene
4. Common problems: Anemia, worms, dental, eye
5. RBSK provides systematic health screening
6. WIFS: Weekly IFA for adolescents
7. De-worming twice a year
8. Health education should be interactive
:::
`,
    contentHi: `
# 🏫 विद्यालय स्वास्थ्य और स्वच्छता

---

## 📖 स्कूलों पर ध्यान क्यों?

:::info
**विद्यालय स्वास्थ्य का महत्व:**
- बच्चे स्कूल में महत्वपूर्ण समय बिताते हैं
- जल्दी बनी आदतें वयस्कता तक रहती हैं
- बच्चे परिवारों को प्रभावित कर सकते हैं
- स्कूल बड़ी संख्या तक कुशलता से पहुंचते हैं
:::

### विद्यालय स्वास्थ्य के घटक
1. स्वास्थ्य सेवाएं (स्क्रीनिंग, उपचार)
2. स्वास्थ्य शिक्षा
3. स्वस्थ स्कूल वातावरण
4. समुदाय और परिवार की भागीदारी

---

## 🚽 विद्यालय स्वच्छता सुविधाएं

### शौचालय आवश्यकताएं

| आवश्यकता | मानक |
|:---------|:-----|
| **अलग शौचालय** | लड़कों और लड़कियों के लिए |
| **अनुपात** | 1 शौचालय प्रति 40 छात्र |
| **मूत्रालय** | 1 प्रति 20 लड़के |
| **सुविधाएं** | साफ, ताला लगने वाला दरवाजा, साबुन, पानी |

### मासिक धर्म स्वच्छता सुविधाएं
- लड़कियों के लिए अलग शौचालय
- क्यूबिकल में पानी की आपूर्ति
- सैनिटरी पैड वेंडिंग मशीन
- ढक्कन वाली निपटान बिन
- सुरक्षित निपटान के लिए इंसीनरेटर

---

## 🍱 मध्याह्न भोजन (MDM) स्वच्छता

### महत्व
- पोषण स्थिति में सुधार
- स्कूल उपस्थिति बढ़ाता है
- सीखने में वृद्धि
- कक्षा में भूख कम करता है

### खाद्य सुरक्षा आवश्यकताएं

| क्षेत्र | आवश्यकताएं |
|:-------|:----------|
| **रसोई** | साफ, हवादार, कीट-प्रूफ |
| **खाद्य संचालक** | स्वास्थ्य जांच, व्यक्तिगत स्वच्छता |
| **तैयारी** | ताजी सामग्री, अच्छी धुलाई, पूर्ण पकाना |
| **परोसना** | साफ प्लेट, खाने से पहले हाथ धोना |

---

## 📚 स्कूलों में स्वास्थ्य शिक्षा

### कवर करने के विषय
1. व्यक्तिगत स्वच्छता
2. हाथ धोना
3. दंत देखभाल
4. पोषण
5. शारीरिक गतिविधि
6. सुरक्षा और प्राथमिक चिकित्सा
7. रोग रोकथाम
8. मानसिक स्वास्थ्य जागरूकता

---

## 🩺 स्कूली बच्चों में आम स्वास्थ्य समस्याएं

### पोषण संबंधी समस्याएं
- कुपोषण
- एनीमिया (आयरन की कमी)
- विटामिन A की कमी
- मोटापा (बढ़ता हुआ)

### संक्रामक रोग
- श्वसन संक्रमण
- दस्त रोग
- त्वचा संक्रमण (खाज, दाद)
- कृमि संक्रमण

### अन्य मुद्दे
- दांतों की सड़न
- अपवर्तक त्रुटियां (आंख की समस्या)
- चोट और दुर्घटनाएं

---

## 🏛️ राष्ट्रीय विद्यालय स्वास्थ्य कार्यक्रम

### RBSK (राष्ट्रीय बाल स्वास्थ्य कार्यक्रम)
- 0-18 वर्ष के बच्चों की स्वास्थ्य जांच
- दोष, कमी, रोगों की प्रारंभिक पहचान
- पहचानी गई स्थितियों का मुफ्त उपचार
- मोबाइल स्वास्थ्य टीमें स्कूलों का दौरा

### WIFS (साप्ताहिक आयरन और फोलिक एसिड)
- साप्ताहिक IFA गोलियां
- लक्ष्य: 10-19 वर्ष के किशोर
- द्विवार्षिक कृमि निवारण
- एनीमिया कम करने का लक्ष्य

### स्वच्छ विद्यालय
- स्वच्छ पेयजल
- लड़कियों और लड़कों के लिए अलग शौचालय
- साबुन से हाथ धोना

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. 1 शौचालय प्रति 40 छात्र
2. लड़कियों के लिए अलग सुविधाएं आवश्यक
3. MDM को सख्त खाद्य स्वच्छता चाहिए
4. आम समस्याएं: एनीमिया, कृमि, दंत, आंख
5. RBSK व्यवस्थित स्वास्थ्य जांच प्रदान करता है
6. WIFS: किशोरों के लिए साप्ताहिक IFA
7. साल में दो बार कृमि निवारण
:::
`
  },
  {
    id: 10,
    titleEn: "Community Hygiene Promotion",
    titleHi: "सामुदायिक स्वच्छता प्रोत्साहन",
    contentEn: `
# 🏘️ Community Hygiene Promotion

---

## 📖 Health Education for Hygiene Promotion

> **Health education** is learning experiences designed to help individuals and communities improve health by increasing knowledge and influencing attitudes.

### Objectives
1. Increase knowledge about hygiene practices
2. Change attitudes toward hygiene
3. Develop healthy behaviors
4. Enable community action
5. Create supportive environments

### Principles
- Start from what people know
- Be relevant to local context
- Use simple, clear messages
- Involve the community
- Repeat key messages
- Use multiple channels

---

## 📢 Communication Methods

### Individual Methods
- Home visits
- One-to-one counseling
- Clinic consultations

### Group Methods
- Group discussions
- Demonstrations
- Role plays
- Health camps

### Mass Methods
- Posters and banners
- Radio/TV programs
- Social media
- Street plays (Nukkad Natak)
- Wall paintings

:::success
**Effective Communication:**
- Use local language
- Simple, clear messages
- Visual aids enhance understanding
- Two-way communication preferred
- Check for understanding
:::

---

## 🔄 Behavior Change Communication (BCC)

### Understanding Behavior Change

| Factor | Description |
|:-------|:------------|
| **Knowledge** | What to do |
| **Attitudes** | Willingness to do |
| **Skills** | How to do |
| **Access** | Resources to do |
| **Social norms** | What others do |

### Stages of Change
1. **Pre-contemplation:** Not aware of need
2. **Contemplation:** Thinking about change
3. **Preparation:** Planning to change
4. **Action:** Making the change
5. **Maintenance:** Sustaining the change

### Key BCC Messages for Hygiene
- Wash hands with soap at critical times
- Use toilets, stop open defecation
- Store drinking water safely
- Keep food covered and cook thoroughly
- Keep surroundings clean

---

## 👥 Community Participation

### Importance
- Sustainability of programs
- Local ownership
- Better acceptance
- Identification of local solutions
- Resource mobilization

### Methods to Engage Community

| Forum | Use |
|:------|:----|
| **Gram Sabha** | Major decisions |
| **Mahila Mandal** | Women's issues |
| **Self-help groups** | Small group action |
| **Youth clubs** | Youth engagement |

### CLTS (Community-Led Total Sanitation)
- Triggering disgust about open defecation
- Community analysis of sanitation situation
- Community-driven action
- Focus on behavior change
- No subsidies initially

---

## 📣 Hygiene Promotion Campaigns

### Planning a Campaign
1. Situation analysis
2. Define objectives
3. Identify target audience
4. Develop key messages
5. Select communication channels
6. Plan activities and timeline
7. Implement
8. Monitor and evaluate

### National Campaigns

| Campaign | Focus |
|:---------|:------|
| **Swachh Bharat Abhiyan** | Overall cleanliness |
| **Global Handwashing Day** | October 15 |
| **World Toilet Day** | November 19 |
| **World Water Day** | March 22 |

### Local Campaign Ideas
- Cleanliness drives
- Rally for sanitation
- Poster/essay competitions
- Street plays on hygiene
- School demonstrations

---

## 📊 Monitoring & Evaluation

### Why Monitor and Evaluate
- Track progress
- Identify problems
- Learn what works
- Accountability
- Improve future programs

### Indicators for Hygiene Programs

| Type | Examples |
|:-----|:---------|
| **Process** | Sessions conducted, home visits |
| **Output** | Households with toilets |
| **Outcome** | Reduced open defecation, ODF villages |

### Methods
- Household surveys
- Observation checklists
- Focus group discussions
- Review of records

---

## 👨‍⚕️ Role of MPHW in Hygiene Promotion

### Key Activities
1. Conduct home visits for hygiene education
2. Organize community meetings
3. Demonstrate handwashing
4. Support sanitation construction
5. Monitor ODF sustainability
6. Participate in campaigns
7. Coordinate with ASHA and ANM
8. Report hygiene indicators to PHC

### Skills Needed
- Communication skills
- Facilitation skills
- Counseling skills
- Community mobilization
- Basic data collection

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Health education uses multiple methods
2. Behavior change = Knowledge + Attitude + Skills + Access
3. Stages: Pre-contemplation → Contemplation → Preparation → Action → Maintenance
4. CLTS triggers community action against OD
5. Community participation ensures sustainability
6. IEC materials should be pre-tested
7. Global Handwashing Day: October 15
8. World Toilet Day: November 19
9. Monitoring helps track progress and improve
:::
`,
    contentHi: `
# 🏘️ सामुदायिक स्वच्छता प्रोत्साहन

---

## 📖 स्वच्छता प्रोत्साहन के लिए स्वास्थ्य शिक्षा

> **स्वास्थ्य शिक्षा** ज्ञान बढ़ाकर और दृष्टिकोण प्रभावित करके व्यक्तियों और समुदायों को स्वास्थ्य सुधारने में मदद करने के लिए डिज़ाइन किए गए सीखने के अनुभव हैं।

### उद्देश्य
1. स्वच्छता प्रथाओं के बारे में ज्ञान बढ़ाना
2. स्वच्छता के प्रति दृष्टिकोण बदलना
3. स्वस्थ व्यवहार विकसित करना
4. सामुदायिक कार्रवाई सक्षम करना
5. सहायक वातावरण बनाना

### सिद्धांत
- लोग जो जानते हैं वहां से शुरू करें
- स्थानीय संदर्भ के अनुरूप हों
- सरल, स्पष्ट संदेश उपयोग करें
- समुदाय को शामिल करें
- प्रमुख संदेश दोहराएं

---

## 📢 संचार विधियां

### व्यक्तिगत विधियां
- घर का दौरा
- एक-से-एक परामर्श
- क्लिनिक परामर्श

### समूह विधियां
- समूह चर्चा
- प्रदर्शन
- रोल प्ले
- स्वास्थ्य शिविर

### जन विधियां
- पोस्टर और बैनर
- रेडियो/टीवी कार्यक्रम
- सोशल मीडिया
- नुक्कड़ नाटक
- दीवार पेंटिंग

:::success
**प्रभावी संचार:**
- स्थानीय भाषा उपयोग करें
- सरल, स्पष्ट संदेश
- दृश्य सहायता समझ बढ़ाती है
- दो-तरफा संचार बेहतर
:::

---

## 🔄 व्यवहार परिवर्तन संचार (BCC)

### व्यवहार परिवर्तन को समझना

| कारक | विवरण |
|:-----|:------|
| **ज्ञान** | क्या करना है |
| **दृष्टिकोण** | करने की इच्छा |
| **कौशल** | कैसे करना है |
| **पहुंच** | करने के लिए संसाधन |
| **सामाजिक मानदंड** | दूसरे क्या करते हैं |

### परिवर्तन के चरण
1. **पूर्व-चिंतन:** आवश्यकता से अनजान
2. **चिंतन:** परिवर्तन के बारे में सोचना
3. **तैयारी:** परिवर्तन की योजना
4. **कार्रवाई:** परिवर्तन करना
5. **रखरखाव:** परिवर्तन बनाए रखना

### स्वच्छता के लिए प्रमुख BCC संदेश
- महत्वपूर्ण समय पर साबुन से हाथ धोएं
- शौचालय उपयोग करें, खुले में शौच बंद
- पीने का पानी सुरक्षित रखें
- भोजन ढककर रखें और अच्छी तरह पकाएं

---

## 👥 सामुदायिक भागीदारी

### महत्व
- कार्यक्रमों की स्थिरता
- स्थानीय स्वामित्व
- बेहतर स्वीकृति
- स्थानीय समाधानों की पहचान

### समुदाय को शामिल करने के तरीके

| मंच | उपयोग |
|:----|:------|
| **ग्राम सभा** | प्रमुख निर्णय |
| **महिला मंडल** | महिलाओं के मुद्दे |
| **स्वयं सहायता समूह** | छोटे समूह कार्रवाई |
| **युवा क्लब** | युवा भागीदारी |

### CLTS (समुदाय नेतृत्व संपूर्ण स्वच्छता)
- खुले में शौच के प्रति घृणा जगाना
- स्वच्छता स्थिति का सामुदायिक विश्लेषण
- समुदाय संचालित कार्रवाई
- व्यवहार परिवर्तन पर ध्यान

---

## 📣 स्वच्छता प्रोत्साहन अभियान

### राष्ट्रीय अभियान

| अभियान | फोकस |
|:-------|:-----|
| **स्वच्छ भारत अभियान** | समग्र स्वच्छता |
| **वैश्विक हाथ धोने का दिन** | 15 अक्टूबर |
| **विश्व शौचालय दिवस** | 19 नवंबर |
| **विश्व जल दिवस** | 22 मार्च |

### स्थानीय अभियान विचार
- सफाई अभियान
- स्वच्छता के लिए रैली
- पोस्टर/निबंध प्रतियोगिता
- स्वच्छता पर नुक्कड़ नाटक

---

## 📊 निगरानी और मूल्यांकन

### निगरानी और मूल्यांकन क्यों
- प्रगति ट्रैक करें
- समस्याएं पहचानें
- क्या काम करता है सीखें
- जवाबदेही
- भविष्य के कार्यक्रम सुधारें

### स्वच्छता कार्यक्रमों के संकेतक

| प्रकार | उदाहरण |
|:-------|:-------|
| **प्रक्रिया** | सत्र आयोजित, घर का दौरा |
| **आउटपुट** | शौचालय वाले घर |
| **परिणाम** | कम खुले में शौच, ODF गांव |

---

## 👨‍⚕️ स्वच्छता प्रोत्साहन में MPHW की भूमिका

### प्रमुख गतिविधियां
1. स्वच्छता शिक्षा के लिए घर का दौरा
2. सामुदायिक बैठकें आयोजित करें
3. हाथ धोने का प्रदर्शन
4. स्वच्छता निर्माण में सहायता
5. ODF स्थिरता की निगरानी
6. अभियानों में भाग लें
7. ASHA और ANM के साथ समन्वय
8. PHC को स्वच्छता संकेतक रिपोर्ट करें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. स्वास्थ्य शिक्षा कई विधियां उपयोग करती है
2. व्यवहार परिवर्तन = ज्ञान + दृष्टिकोण + कौशल + पहुंच
3. चरण: पूर्व-चिंतन → चिंतन → तैयारी → कार्रवाई → रखरखाव
4. CLTS खुले में शौच के खिलाफ सामुदायिक कार्रवाई ट्रिगर करता है
5. सामुदायिक भागीदारी स्थिरता सुनिश्चित करती है
6. वैश्विक हाथ धोने का दिन: 15 अक्टूबर
7. विश्व शौचालय दिवस: 19 नवंबर
8. निगरानी प्रगति ट्रैक करने में मदद करती है
:::
`
  }
];
