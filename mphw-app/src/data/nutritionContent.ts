export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const nutritionLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Nutrition",
    titleHi: "पोषण का परिचय",
    contentEn: `
# 🥗 Introduction to Nutrition

---

## 📖 What is Nutrition?

> **Nutrition** is the science of food and its relationship to health - how the body uses food for energy, growth, and repair.

---

## 🍽️ Nutrients

### Classification

| Type | Examples | Amount Needed |
|:-----|:---------|:--------------|
| **Macronutrients** | Carbs, Proteins, Fats | Large amounts |
| **Micronutrients** | Vitamins, Minerals | Small amounts |
| **Water** | H₂O | Essential |

---

## 🔥 Functions of Food

| Function | Nutrients | Examples |
|:---------|:----------|:---------|
| **Energy-giving** | Carbs, Fats | Rice, oil |
| **Body-building** | Proteins | Dal, milk |
| **Protective** | Vitamins, Minerals | Fruits, vegetables |

---

## ⚖️ Balanced Diet

> A **balanced diet** contains all nutrients in correct proportions.

### Food Groups

| Group | Examples | Function |
|:------|:---------|:---------|
| **Cereals** | Rice, wheat, millets | Energy |
| **Pulses** | Dal, beans | Protein |
| **Dairy** | Milk, curd, paneer | Protein, calcium |
| **Fruits & Vegetables** | All fresh produce | Vitamins, minerals |
| **Fats & Oils** | Cooking oil, ghee | Energy, essential fats |

---

## 📊 Calorie Requirements

| Category | Calories/day |
|:---------|:-------------|
| Sedentary male | 2320 kcal |
| Sedentary female | 1900 kcal |
| Moderate work male | 2730 kcal |
| Moderate work female | 2230 kcal |
| Pregnant woman | +350 kcal |
| Lactating woman | +600 kcal |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Macronutrients = Carbs, Proteins, Fats
2. Micronutrients = Vitamins, Minerals
3. Balanced diet = All nutrients in correct proportion
4. Cereals = Energy, Pulses = Protein
5. Pregnancy needs +350 kcal/day
6. Lactation needs +600 kcal/day
:::
`,
    contentHi: `
# 🥗 पोषण का परिचय

---

## 📖 पोषण क्या है?

> **पोषण** भोजन और स्वास्थ्य के संबंध का विज्ञान है - शरीर भोजन का उपयोग ऊर्जा, वृद्धि और मरम्मत के लिए कैसे करता है।

---

## 🍽️ पोषक तत्व

| प्रकार | उदाहरण | मात्रा |
|:-------|:-------|:------|
| **मैक्रोन्यूट्रिएंट्स** | कार्ब्स, प्रोटीन, वसा | बड़ी मात्रा |
| **माइक्रोन्यूट्रिएंट्स** | विटामिन, खनिज | छोटी मात्रा |
| **जल** | H₂O | आवश्यक |

---

## 🔥 भोजन के कार्य

| कार्य | पोषक | उदाहरण |
|:------|:-----|:-------|
| **ऊर्जा देने वाला** | कार्ब्स, वसा | चावल, तेल |
| **शरीर निर्माण** | प्रोटीन | दाल, दूध |
| **सुरक्षात्मक** | विटामिन, खनिज | फल, सब्जियां |

---

## ⚖️ संतुलित आहार

### खाद्य समूह

| समूह | उदाहरण | कार्य |
|:-----|:-------|:------|
| **अनाज** | चावल, गेहूं | ऊर्जा |
| **दालें** | दाल, बीन्स | प्रोटीन |
| **डेयरी** | दूध, दही | प्रोटीन, कैल्शियम |
| **फल-सब्जी** | ताजा उत्पाद | विटामिन |
| **वसा-तेल** | तेल, घी | ऊर्जा |

---

## 📊 कैलोरी आवश्यकता

| श्रेणी | कैलोरी/दिन |
|:-------|:----------|
| गतिहीन पुरुष | 2320 kcal |
| गतिहीन महिला | 1900 kcal |
| गर्भवती | +350 kcal |
| स्तनपान | +600 kcal |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मैक्रो = कार्ब्स, प्रोटीन, वसा
2. माइक्रो = विटामिन, खनिज
3. संतुलित आहार = सही अनुपात में सभी पोषक
4. अनाज = ऊर्जा, दालें = प्रोटीन
5. गर्भावस्था +350 kcal/दिन
6. स्तनपान +600 kcal/दिन
:::
`
  },
  {
    id: 2,
    titleEn: "Macronutrients",
    titleHi: "मैक्रोन्यूट्रिएंट्स",
    contentEn: `
# 🍞 Macronutrients

---

## 🌾 Carbohydrates

> **Carbohydrates** are the main source of energy for the body.

### Types

| Type | Examples | Digestion |
|:-----|:---------|:----------|
| **Simple** | Sugar, honey | Fast |
| **Complex** | Rice, wheat, potato | Slow |
| **Fiber** | Vegetables, whole grains | Not digested |

### Energy Value
- **1 gram = 4 kcal**
- Should provide 55-60% of total calories

---

## 🥩 Proteins

> **Proteins** are essential for growth, repair, and body building.

### Classification

| Type | Source | Quality |
|:-----|:-------|:--------|
| **Complete** | Egg, meat, milk | All essential amino acids |
| **Incomplete** | Dal, beans | Missing some amino acids |

### Functions
- Build and repair tissues
- Make enzymes and hormones
- Immune function
- Energy (when needed)

### Energy Value
- **1 gram = 4 kcal**
- RDA: 1 g/kg body weight/day

---

## 🥑 Fats

> **Fats** provide concentrated energy and essential fatty acids.

### Types

| Type | Source | Health Effect |
|:-----|:-------|:--------------|
| **Saturated** | Ghee, butter | ↑ Heart risk |
| **Unsaturated** | Vegetable oils | ↓ Heart risk |
| **Trans fats** | Processed foods | Very harmful |

### Functions
- Concentrated energy source
- Absorb fat-soluble vitamins (A, D, E, K)
- Insulation and protection
- Essential fatty acids

### Energy Value
- **1 gram = 9 kcal** (highest!)
- Should be <30% of total calories

---

## 📊 Summary Table

| Nutrient | Energy | % of Diet | Sources |
|:---------|:-------|:----------|:--------|
| **Carbs** | 4 kcal/g | 55-60% | Rice, wheat |
| **Proteins** | 4 kcal/g | 10-15% | Dal, milk, egg |
| **Fats** | 9 kcal/g | <30% | Oil, ghee |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Carbs = 4 kcal/g, 55-60% of diet
2. Proteins = 4 kcal/g, 10-15% of diet
3. Fats = 9 kcal/g (highest), <30% of diet
4. Complete proteins = eggs, milk, meat
5. Saturated fats increase heart disease risk
6. Fiber aids digestion, not digested
:::
`,
    contentHi: `
# 🍞 मैक्रोन्यूट्रिएंट्स

---

## 🌾 कार्बोहाइड्रेट

> **कार्बोहाइड्रेट** शरीर के लिए ऊर्जा का मुख्य स्रोत है।

### प्रकार

| प्रकार | उदाहरण | पाचन |
|:-------|:-------|:-----|
| **सरल** | चीनी, शहद | तेज |
| **जटिल** | चावल, गेहूं | धीमा |
| **फाइबर** | सब्जियां | पचता नहीं |

### ऊर्जा मान
- **1 ग्राम = 4 kcal**
- कुल कैलोरी का 55-60%

---

## 🥩 प्रोटीन

> **प्रोटीन** वृद्धि, मरम्मत और शरीर निर्माण के लिए आवश्यक।

### वर्गीकरण

| प्रकार | स्रोत | गुणवत्ता |
|:-------|:-----|:---------|
| **पूर्ण** | अंडा, मांस, दूध | सभी आवश्यक अमीनो एसिड |
| **अपूर्ण** | दाल, बीन्स | कुछ अमीनो एसिड गायब |

### ऊर्जा मान
- **1 ग्राम = 4 kcal**
- RDA: 1 g/kg शरीर भार/दिन

---

## 🥑 वसा

> **वसा** केंद्रित ऊर्जा और आवश्यक फैटी एसिड प्रदान करती है।

### प्रकार

| प्रकार | स्रोत | स्वास्थ्य प्रभाव |
|:-------|:-----|:---------------|
| **संतृप्त** | घी, मक्खन | ↑ हृदय जोखिम |
| **असंतृप्त** | वनस्पति तेल | ↓ हृदय जोखिम |
| **ट्रांस वसा** | प्रसंस्कृत भोजन | बहुत हानिकारक |

### ऊर्जा मान
- **1 ग्राम = 9 kcal** (सबसे अधिक!)
- कुल कैलोरी का <30%

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. कार्ब्स = 4 kcal/g, 55-60%
2. प्रोटीन = 4 kcal/g, 10-15%
3. वसा = 9 kcal/g, <30%
4. पूर्ण प्रोटीन = अंडा, दूध
5. संतृप्त वसा हृदय रोग बढ़ाती है
:::
`
  },
  {
    id: 3,
    titleEn: "Vitamins & Minerals",
    titleHi: "विटामिन और खनिज",
    contentEn: `
# 💊 Vitamins & Minerals

---

## 🔶 Vitamins

### Fat-Soluble Vitamins (ADEK)

| Vitamin | Function | Source | Deficiency |
|:--------|:---------|:-------|:-----------|
| **A** | Vision, immunity | Carrot, liver | Night blindness |
| **D** | Calcium absorption | Sunlight, fish | Rickets |
| **E** | Antioxidant | Oils, nuts | Rare |
| **K** | Blood clotting | Green vegetables | Bleeding |

### Water-Soluble Vitamins

| Vitamin | Function | Source | Deficiency |
|:--------|:---------|:-------|:-----------|
| **B1 (Thiamine)** | Energy metabolism | Whole grains | Beriberi |
| **B2 (Riboflavin)** | Cell function | Milk, eggs | Angular stomatitis |
| **B3 (Niacin)** | Energy | Meat, nuts | Pellagra |
| **B9 (Folic Acid)** | DNA synthesis | Green leafy | Neural tube defects |
| **B12** | RBC formation | Animal products | Anemia |
| **C** | Collagen, immunity | Citrus fruits | Scurvy |

---

## ⚫ Minerals

### Major Minerals

| Mineral | Function | Source | Deficiency |
|:--------|:---------|:-------|:-----------|
| **Calcium** | Bones, teeth | Milk, dairy | Osteoporosis |
| **Iron** | Hemoglobin | Meat, spinach | Anemia |
| **Iodine** | Thyroid | Iodized salt | Goiter |
| **Zinc** | Immunity | Meat, nuts | Growth retardation |

---

## ⚠️ Deficiency Diseases

| Disease | Nutrient | Signs |
|:--------|:---------|:------|
| **Night Blindness** | Vitamin A | Cannot see in dim light |
| **Rickets** | Vitamin D | Bone deformities |
| **Scurvy** | Vitamin C | Bleeding gums |
| **Beriberi** | Vitamin B1 | Weakness, heart problems |
| **Pellagra** | Vitamin B3 | 3 D's: Dermatitis, Diarrhea, Dementia |
| **Anemia** | Iron, B12, Folic acid | Weakness, pallor |
| **Goiter** | Iodine | Enlarged thyroid |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Fat-soluble = ADEK (stored in body)
2. Water-soluble = B, C (excreted daily)
3. Vitamin A deficiency = Night blindness
4. Vitamin D deficiency = Rickets
5. Iron deficiency = Anemia
6. Iodine deficiency = Goiter
7. Folic acid prevents neural tube defects
:::
`,
    contentHi: `
# 💊 विटामिन और खनिज

---

## 🔶 विटामिन

### वसा में घुलनशील (ADEK)

| विटामिन | कार्य | स्रोत | कमी |
|:--------|:-----|:------|:----|
| **A** | दृष्टि, प्रतिरक्षा | गाजर, जिगर | रतौंधी |
| **D** | कैल्शियम अवशोषण | सूर्य, मछली | रिकेट्स |
| **E** | एंटीऑक्सीडेंट | तेल, मेवे | दुर्लभ |
| **K** | रक्त थक्का | हरी सब्जियां | रक्तस्राव |

### जल में घुलनशील

| विटामिन | कार्य | स्रोत | कमी |
|:--------|:-----|:------|:----|
| **B1** | ऊर्जा | साबुत अनाज | बेरीबेरी |
| **B9 (फोलिक एसिड)** | DNA | हरी पत्तेदार | न्यूरल ट्यूब दोष |
| **B12** | RBC निर्माण | पशु उत्पाद | एनीमिया |
| **C** | कोलेजन | खट्टे फल | स्कर्वी |

---

## ⚫ खनिज

| खनिज | कार्य | स्रोत | कमी |
|:-----|:-----|:------|:----|
| **कैल्शियम** | हड्डी, दांत | दूध | ऑस्टियोपोरोसिस |
| **आयरन** | हीमोग्लोबिन | मांस, पालक | एनीमिया |
| **आयोडीन** | थायरॉइड | आयोडीन नमक | गॉइटर |
| **जिंक** | प्रतिरक्षा | मांस, मेवे | वृद्धि मंदन |

---

## ⚠️ कमी रोग

| रोग | पोषक | लक्षण |
|:----|:-----|:------|
| **रतौंधी** | विटामिन A | कम रोशनी में न देखना |
| **रिकेट्स** | विटामिन D | हड्डी विकृति |
| **स्कर्वी** | विटामिन C | मसूड़ों से खून |
| **बेरीबेरी** | विटामिन B1 | कमजोरी |
| **पेलाग्रा** | विटामिन B3 | 3 D: डर्माटाइटिस, डायरिया, डिमेंशिया |
| **एनीमिया** | आयरन, B12 | कमजोरी, पीलापन |
| **गॉइटर** | आयोडीन | थायरॉइड बड़ा |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. वसा में घुलनशील = ADEK
2. जल में घुलनशील = B, C
3. विटामिन A कमी = रतौंधी
4. विटामिन D कमी = रिकेट्स
5. आयरन कमी = एनीमिया
6. आयोडीन कमी = गॉइटर
7. फोलिक एसिड न्यूरल ट्यूब दोष रोकता है
:::
`
  },
  {
    id: 4,
    titleEn: "Malnutrition",
    titleHi: "कुपोषण",
    contentEn: `
# ⚠️ Malnutrition

---

## 📖 What is Malnutrition?

> **Malnutrition** is a condition resulting from inadequate or unbalanced nutrition.

### Types

| Type | Description |
|:-----|:------------|
| **Undernutrition** | Not enough nutrients |
| **Overnutrition** | Excess nutrients (obesity) |
| **Micronutrient deficiency** | Specific vitamin/mineral lack |

---

## 👶 Protein-Energy Malnutrition (PEM)

### Types of PEM

| Condition | Cause | Features |
|:----------|:------|:---------|
| **Marasmus** | Total calorie deficiency | Wasting, "old man" look |
| **Kwashiorkor** | Protein deficiency | Edema, pot belly, hair changes |
| **Marasmic-Kwashiorkor** | Both | Mixed features |

### Key Differences

| Feature | Marasmus | Kwashiorkor |
|:--------|:---------|:------------|
| **Edema** | Absent | Present |
| **Wasting** | Severe | Present |
| **Fat** | Lost | Some preserved |
| **Hair** | Normal | Sparse, discolored |
| **Liver** | Normal | Fatty, enlarged |
| **Appetite** | Good | Poor |

---

## 📏 Assessment of Malnutrition

### Anthropometric Measurements

| Indicator | Purpose |
|:----------|:--------|
| **Weight-for-age** | Underweight |
| **Height-for-age** | Stunting |
| **Weight-for-height** | Wasting |
| **MUAC** | Acute malnutrition |
| **BMI** | Adult nutrition status |

### MUAC (Mid-Upper Arm Circumference)

| Color | MUAC | Status |
|:------|:-----|:-------|
| 🟢 **Green** | >13.5 cm | Normal |
| 🟡 **Yellow** | 12.5-13.5 cm | Moderate malnutrition |
| 🔴 **Red** | <12.5 cm | Severe malnutrition |

---

## 🏥 Management

### Community Programs
- ICDS (Integrated Child Development Services)
- Mid-day meal scheme
- Anganwadi services
- Take-home rations

### Treatment
- Therapeutic feeding
- Treat infections
- Micronutrient supplementation
- Nutrition counseling

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Marasmus = Total calorie deficiency (wasting)
2. Kwashiorkor = Protein deficiency (edema)
3. MUAC <12.5 cm = Severe acute malnutrition
4. Weight-for-height = Wasting indicator
5. Height-for-age = Stunting indicator
6. ICDS provides nutrition services
:::
`,
    contentHi: `
# ⚠️ कुपोषण

---

## 📖 कुपोषण क्या है?

> **कुपोषण** अपर्याप्त या असंतुलित पोषण से होने वाली स्थिति।

### प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **अल्पपोषण** | पर्याप्त पोषक नहीं |
| **अतिपोषण** | अधिक पोषक (मोटापा) |
| **सूक्ष्म पोषक कमी** | विशिष्ट विटामिन/खनिज |

---

## 👶 प्रोटीन-ऊर्जा कुपोषण (PEM)

### PEM के प्रकार

| स्थिति | कारण | विशेषताएं |
|:-------|:-----|:---------|
| **मरास्मस** | कुल कैलोरी कमी | क्षीणता, "बूढ़ा" दिखना |
| **क्वाशियोरकोर** | प्रोटीन कमी | सूजन, पेट फूलना |

### मुख्य अंतर

| विशेषता | मरास्मस | क्वाशियोरकोर |
|:--------|:-------|:------------|
| **सूजन** | अनुपस्थित | उपस्थित |
| **क्षीणता** | गंभीर | उपस्थित |
| **बाल** | सामान्य | विरल, रंगहीन |
| **भूख** | अच्छी | कम |

---

## 📏 कुपोषण का आकलन

### MUAC (मध्य-ऊपरी बांह परिधि)

| रंग | MUAC | स्थिति |
|:----|:-----|:-------|
| 🟢 **हरा** | >13.5 cm | सामान्य |
| 🟡 **पीला** | 12.5-13.5 cm | मध्यम कुपोषण |
| 🔴 **लाल** | <12.5 cm | गंभीर कुपोषण |

---

## 🏥 प्रबंधन

### सामुदायिक कार्यक्रम
- ICDS (एकीकृत बाल विकास सेवाएं)
- मध्याह्न भोजन योजना
- आंगनवाड़ी सेवाएं

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मरास्मस = कुल कैलोरी कमी (क्षीणता)
2. क्वाशियोरकोर = प्रोटीन कमी (सूजन)
3. MUAC <12.5 cm = गंभीर तीव्र कुपोषण
4. वजन-ऊंचाई = क्षीणता सूचक
5. ऊंचाई-आयु = स्टंटिंग सूचक
6. ICDS पोषण सेवाएं प्रदान करता है
:::
`
  },
  {
    id: 5,
    titleEn: "Nutrition in Special Groups",
    titleHi: "विशेष समूहों में पोषण",
    contentEn: `
# 👨‍👩‍👧‍👦 Nutrition in Special Groups

---

## 🤰 Pregnancy Nutrition

### Extra Requirements

| Nutrient | Extra Amount | Why |
|:---------|:-------------|:----|
| **Calories** | +350 kcal/day | Fetal growth |
| **Protein** | +15 g/day | Tissue building |
| **Iron** | 35 mg/day | Prevent anemia |
| **Folic acid** | 500 μg/day | Prevent neural tube defects |
| **Calcium** | 1200 mg/day | Bone development |

### Important Points
- Iron-folic acid (IFA) tablets daily
- Iodized salt use
- Avoid alcohol, tobacco
- Regular weight monitoring

---

## 🍼 Lactation Nutrition

### Extra Requirements

| Nutrient | Extra Amount |
|:---------|:-------------|
| **Calories** | +600 kcal/day |
| **Protein** | +25 g/day |
| **Calcium** | 1200 mg/day |
| **Fluids** | Extra 2-3 liters |

---

## 👶 Infant Nutrition

### Breastfeeding Guidelines

| Stage | Feeding |
|:------|:--------|
| **0-6 months** | Exclusive breastfeeding |
| **6-8 months** | Breastfeeding + semi-solid |
| **9-12 months** | Family foods, mashed |
| **12-24 months** | Continue breastfeeding + family food |

:::success
**Colostrum:** First milk - rich in antibodies, must give to newborn!
:::

### Complementary Feeding (After 6 months)

| Age | Frequency | Amount |
|:----|:----------|:-------|
| 6-8 months | 2-3 times | 2-3 tbsp |
| 9-11 months | 3-4 times | 1/2 cup |
| 12-24 months | 3-4 times + snacks | 3/4 cup |

---

## 👴 Elderly Nutrition

### Special Needs
- Lower calorie requirement
- Same protein need
- More calcium, Vitamin D
- Adequate fiber and water
- Easy to chew foods

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Pregnancy: +350 kcal, Iron 35 mg, Folic acid 500 μg
2. Lactation: +600 kcal, +25 g protein
3. Exclusive breastfeeding: 0-6 months
4. Complementary feeding starts at 6 months
5. Colostrum = First milk, rich in antibodies
6. Give IFA tablets to pregnant women daily
:::
`,
    contentHi: `
# 👨‍👩‍👧‍👦 विशेष समूहों में पोषण

---

## 🤰 गर्भावस्था पोषण

### अतिरिक्त आवश्यकताएं

| पोषक | अतिरिक्त | क्यों |
|:-----|:---------|:-----|
| **कैलोरी** | +350 kcal/दिन | भ्रूण वृद्धि |
| **प्रोटीन** | +15 g/दिन | ऊतक निर्माण |
| **आयरन** | 35 mg/दिन | एनीमिया रोकें |
| **फोलिक एसिड** | 500 μg/दिन | न्यूरल ट्यूब दोष रोकें |
| **कैल्शियम** | 1200 mg/दिन | हड्डी विकास |

### महत्वपूर्ण बिंदु
- प्रतिदिन IFA टैबलेट
- आयोडीन नमक
- शराब, तंबाकू से बचें

---

## 🍼 स्तनपान पोषण

| पोषक | अतिरिक्त |
|:-----|:---------|
| **कैलोरी** | +600 kcal/दिन |
| **प्रोटीन** | +25 g/दिन |
| **कैल्शियम** | 1200 mg/दिन |
| **तरल** | 2-3 लीटर अतिरिक्त |

---

## 👶 शिशु पोषण

### स्तनपान दिशानिर्देश

| चरण | आहार |
|:----|:-----|
| **0-6 महीने** | केवल स्तनपान |
| **6-8 महीने** | स्तनपान + अर्ध-ठोस |
| **9-12 महीने** | पारिवारिक भोजन, मसला |
| **12-24 महीने** | स्तनपान जारी + पारिवारिक |

:::success
**कोलोस्ट्रम:** पहला दूध - एंटीबॉडी से भरपूर, नवजात को जरूर दें!
:::

### पूरक आहार (6 महीने बाद)

| आयु | बार | मात्रा |
|:----|:----|:------|
| 6-8 महीने | 2-3 बार | 2-3 चम्मच |
| 9-11 महीने | 3-4 बार | 1/2 कप |
| 12-24 महीने | 3-4 बार + स्नैक्स | 3/4 कप |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. गर्भावस्था: +350 kcal, आयरन 35 mg, फोलिक एसिड 500 μg
2. स्तनपान: +600 kcal, +25 g प्रोटीन
3. केवल स्तनपान: 0-6 महीने
4. पूरक आहार 6 महीने पर शुरू
5. कोलोस्ट्रम = पहला दूध, एंटीबॉडी से भरपूर
6. गर्भवती को प्रतिदिन IFA टैबलेट
:::
`
  },
  {
    id: 6,
    titleEn: "Minerals",
    titleHi: "खनिज",
    contentEn: `
# ⚫ Minerals

---

## 📖 Introduction

> **Minerals** are inorganic elements essential for various body functions.

### Classification

| Type | Requirement | Examples |
|:-----|:------------|:---------|
| **Macro minerals** | >100 mg/day | Calcium, Phosphorus, Magnesium |
| **Micro minerals (Trace)** | <100 mg/day | Iron, Iodine, Zinc, Fluoride |

---

## 🦴 Calcium

### Sources
- 🥛 Milk and dairy (best source)
- 🌾 Ragi (finger millet)
- 🥬 Green leafy vegetables
- 🐟 Small fish with bones
- 🥜 Sesame seeds, almonds

### Functions
| Function | Details |
|:---------|:--------|
| **Bone & teeth** | 99% stored in bones |
| **Muscle contraction** | Essential for movement |
| **Nerve transmission** | Signal conduction |
| **Blood clotting** | Coagulation cascade |
| **Enzyme activation** | Cofactor role |

### Deficiency

| Age Group | Condition |
|:----------|:----------|
| **Children** | Rickets (with Vit D deficiency) |
| **Adults** | Osteomalacia |
| **Elderly** | Osteoporosis |
| **All ages** | Tetany (muscle spasms) |

### RDA

| Category | Amount |
|:---------|:-------|
| Adults | 600-1000 mg/day |
| Pregnant/Lactating | **1200 mg/day** |
| Children | 500-800 mg/day |

:::tip
**Absorption Enhancers:** Vitamin D, lactose, acid pH

**Absorption Inhibitors:** Phytates, oxalates, fiber, caffeine
:::

---

## 🩸 Iron

### Types

| Type | Source | Absorption |
|:-----|:-------|:-----------|
| **Heme iron** | Animal sources | 20-30% (better) |
| **Non-heme iron** | Plant sources | 5-10% (lower) |

### Sources

**Heme Iron Sources:**
- Meat, liver, organ meats
- Fish, poultry

**Non-Heme Iron Sources:**
- 🥬 Green leafy vegetables
- 🫘 Legumes, jaggery
- 🍇 Dried fruits
- 🌾 Fortified cereals

### Functions
1. **Hemoglobin** - Oxygen transport in blood
2. **Myoglobin** - Muscle oxygen storage
3. **Enzymes** - Various metabolic processes
4. **Immunity** - Immune function

### Iron Deficiency Anemia (IDA)

:::danger
**Symptoms:**
- Fatigue, weakness
- Pale skin and conjunctiva
- Breathlessness
- 🥄 Koilonychia (spoon-shaped nails)
- Pica (eating non-food items)
- Poor concentration
:::

**At-Risk Groups:**
- Women of reproductive age
- Pregnant women
- Children
- Vegetarians

### RDA

| Category | Amount |
|:---------|:-------|
| Adult male | 17 mg/day |
| Adult female | 21 mg/day |
| **Pregnant** | **35 mg/day** |

### Absorption Factors

| Enhancers ✅ | Inhibitors ❌ |
|:-------------|:-------------|
| Vitamin C | Phytates (cereals) |
| Meat protein | Tannins (tea, coffee) |
| Organic acids | Calcium, Oxalates |

---

## 🧂 Iodine

### Sources
- 🧂 Iodized salt (main source)
- 🐟 Seafood, sea fish
- 🥛 Milk (if animals fed iodine)

### Functions
- Thyroid hormone synthesis (T3, T4)
- Metabolic regulation
- **Brain development** (critical!)

### Iodine Deficiency Disorders (IDD)

| Condition | Features |
|:----------|:---------|
| **Goiter** | Enlarged thyroid gland |
| **Hypothyroidism** | Low metabolism |
| **Cretinism** | Severe mental/physical retardation |
| **Stillbirths** | Pregnancy complications |
| **Deaf-mutism** | Hearing and speech impairment |

:::warning
**Endemic Areas:** Himalayan regions, tribal areas - common goiter belt
:::

### Prevention

:::success
**Universal Salt Iodization (USI)** - Main strategy!
- At production: 30 ppm
- At consumer level: ≥15 ppm
:::

**RDA:** 150 mcg/day (adults)

---

## ⚡ Zinc

### Sources
- 🥩 Meat, seafood
- 🫘 Legumes, nuts
- 🌾 Whole grains
- 🥛 Dairy products

### Functions
| Function | Details |
|:---------|:--------|
| **Growth** | Essential for development |
| **Immunity** | Immune function |
| **Wound healing** | Tissue repair |
| **Taste & smell** | Sensory function |
| **DNA synthesis** | Cell replication |
| **Enzymes** | 300+ enzyme systems |

### Deficiency Signs
- Growth retardation
- Delayed sexual maturation
- Impaired immunity
- Prolonged diarrhea
- Skin lesions, hair loss
- Poor wound healing

### Therapeutic Use

:::success
**Zinc in Diarrhea:**
- Dose: 10-20 mg for 14 days
- Given with ORS
- Reduces duration and severity
:::

**RDA:** 10-12 mg/day

---

## 🦷 Fluoride

### Sources
- 💧 Fluoridated water
- 🍵 Tea
- 🐟 Seafood
- 🪥 Toothpaste

### Functions
- Strengthens tooth enamel
- Prevents dental caries
- Bone structure

### Fluorosis (Excess)

| Type | Features |
|:-----|:---------|
| **Dental** | Mottled, discolored teeth; pitting of enamel |
| **Skeletal** | Bone/joint pain, stiffness, crippling deformities |

:::danger
**Endemic Areas:** Rajasthan, Gujarat, Andhra Pradesh

**Optimal Level:** 0.7-1.2 ppm in water
:::

---

## 🔬 Other Trace Elements

| Mineral | Sources | Functions | Deficiency |
|:--------|:--------|:----------|:-----------|
| **Copper** | Liver, nuts, legumes | Iron metabolism, connective tissue | Anemia, neutropenia |
| **Selenium** | Seafood, meat, grains | Antioxidant, thyroid function | Keshan disease (heart) |
| **Chromium** | Meat, whole grains | Glucose metabolism | Impaired glucose tolerance |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Calcium: 99% in bones; dairy best source; RDA 1200 mg in pregnancy
2. Iron deficiency = Most common nutritional deficiency globally
3. Vitamin C enhances iron absorption; tea inhibits it
4. Iodized salt prevents IDD - use USI strategy
5. Zinc given with ORS for diarrhea (10-20 mg x 14 days)
6. Excess fluoride causes fluorosis
7. Heme iron (animal) absorbed better than non-heme (plant)
:::
`,
    contentHi: `
# ⚫ खनिज

---

## 📖 परिचय

> **खनिज** विभिन्न शारीरिक कार्यों के लिए आवश्यक अकार्बनिक तत्व हैं।

### वर्गीकरण

| प्रकार | आवश्यकता | उदाहरण |
|:-------|:---------|:-------|
| **मैक्रो खनिज** | >100 mg/दिन | कैल्शियम, फॉस्फोरस, मैग्नीशियम |
| **माइक्रो खनिज (ट्रेस)** | <100 mg/दिन | आयरन, आयोडीन, जिंक, फ्लोराइड |

---

## 🦴 कैल्शियम

### स्रोत
- 🥛 दूध और डेयरी (सबसे अच्छा)
- 🌾 रागी (फिंगर मिलेट)
- 🥬 हरी पत्तेदार सब्जियां
- 🐟 हड्डियों सहित छोटी मछली
- 🥜 तिल, बादाम

### कार्य
| कार्य | विवरण |
|:------|:-------|
| **हड्डी और दांत** | 99% हड्डियों में |
| **मांसपेशी संकुचन** | गति के लिए आवश्यक |
| **तंत्रिका संचरण** | सिग्नल चालन |
| **रक्त थक्का** | जमाव प्रक्रिया |

### कमी

| आयु समूह | स्थिति |
|:---------|:-------|
| **बच्चे** | रिकेट्स (विटामिन D कमी के साथ) |
| **वयस्क** | ऑस्टियोमलेशिया |
| **बुजुर्ग** | ऑस्टियोपोरोसिस |
| **सभी** | टेटनी (मांसपेशी ऐंठन) |

### RDA

| श्रेणी | मात्रा |
|:-------|:------|
| वयस्क | 600-1000 mg/दिन |
| गर्भवती/स्तनपान | **1200 mg/दिन** |
| बच्चे | 500-800 mg/दिन |

---

## 🩸 आयरन

### प्रकार

| प्रकार | स्रोत | अवशोषण |
|:-------|:-----|:-------|
| **हीम आयरन** | पशु स्रोत | 20-30% (बेहतर) |
| **नॉन-हीम आयरन** | पौधे स्रोत | 5-10% (कम) |

### आयरन की कमी से एनीमिया (IDA)

:::danger
**लक्षण:**
- थकान, कमजोरी
- पीली त्वचा और कंजंक्टिवा
- सांस की तकलीफ
- 🥄 कोइलोनीचिया (चम्मच के आकार के नाखून)
- पाइका (गैर-खाद्य पदार्थ खाना)
:::

### RDA

| श्रेणी | मात्रा |
|:-------|:------|
| वयस्क पुरुष | 17 mg/दिन |
| वयस्क महिला | 21 mg/दिन |
| **गर्भवती** | **35 mg/दिन** |

### अवशोषण कारक

| वर्धक ✅ | अवरोधक ❌ |
|:---------|:----------|
| विटामिन C | फाइटेट्स (अनाज) |
| मांस प्रोटीन | टैनिन (चाय, कॉफी) |

---

## 🧂 आयोडीन

### आयोडीन की कमी विकार (IDD)

| स्थिति | विशेषताएं |
|:-------|:---------|
| **गोइटर** | बढ़ी हुई थायराइड |
| **हाइपोथायरायडिज्म** | कम चयापचय |
| **क्रेटिनिज्म** | गंभीर मानसिक/शारीरिक मंदता |
| **बहरा-गूंगापन** | श्रवण और वाक् हानि |

:::success
**यूनिवर्सल सॉल्ट आयोडाइजेशन (USI)** - मुख्य रणनीति!
- उत्पादन पर: 30 ppm
- उपभोक्ता स्तर: ≥15 ppm
:::

---

## ⚡ जिंक

### चिकित्सीय उपयोग

:::success
**दस्त में जिंक:**
- खुराक: 14 दिनों के लिए 10-20 mg
- ORS के साथ दिया जाता है
- अवधि और गंभीरता कम करता है
:::

---

## 🦷 फ्लोराइड

### फ्लोरोसिस (अधिकता)

| प्रकार | विशेषताएं |
|:-------|:---------|
| **डेंटल** | धब्बेदार, मलिन दांत |
| **स्केलेटल** | हड्डी/जोड़ दर्द, अकड़न |

:::danger
**एंडेमिक क्षेत्र:** राजस्थान, गुजरात, आंध्र प्रदेश

**इष्टतम स्तर:** पानी में 0.7-1.2 ppm
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. कैल्शियम: 99% हड्डियों में; डेयरी सबसे अच्छा; गर्भावस्था में 1200 mg
2. आयरन की कमी = सबसे आम पोषण संबंधी कमी
3. विटामिन C आयरन अवशोषण बढ़ाता है; चाय रोकती है
4. आयोडीन युक्त नमक IDD रोकता है - USI रणनीति
5. दस्त में ORS के साथ जिंक (10-20 mg x 14 दिन)
6. अधिक फ्लोराइड से फ्लोरोसिस
7. हीम आयरन (पशु) नॉन-हीम (पौधे) से बेहतर अवशोषित
:::
`
  },
  {
    id: 7,
    titleEn: "Nutritional Assessment",
    titleHi: "पोषण मूल्यांकन",
    contentEn: `
# 📏 Nutritional Assessment

---

## 📖 Introduction

> **Nutritional Assessment** is the systematic process of collecting and interpreting information to determine nutritional status.

---

## 🔤 Methods - ABCD Approach

| Letter | Method | Description |
|:-------|:-------|:------------|
| **A** | Anthropometry | Physical measurements |
| **B** | Biochemical | Laboratory tests |
| **C** | Clinical | Physical examination |
| **D** | Dietary | Food intake assessment |

---

## 📐 A - Anthropometric Assessment

### Common Measurements

#### 1. Weight
- Most basic measurement
- Use calibrated scale
- Minimal clothing
- Same time of day

**Birth Weight Classifications:**

| Category | Weight |
|:---------|:-------|
| **Normal** | ≥2500 g |
| **Low Birth Weight (LBW)** | <2500 g |
| **Very Low Birth Weight** | <1500 g |
| **Extremely Low Birth Weight** | <1000 g |

#### 2. Height/Length
- **Length:** Lying down (<2 years)
- **Height:** Standing (>2 years & adults)

#### 3. Mid-Upper Arm Circumference (MUAC)

:::success
**MUAC Classifications (Children 6-59 months):**

| Color | MUAC | Status |
|:------|:-----|:-------|
| 🟢 **Green** | ≥13.5 cm | Normal |
| 🟡 **Yellow** | 12.5-13.4 cm | MAM (Moderate Acute Malnutrition) |
| 🔴 **Red** | <11.5 cm | SAM (Severe Acute Malnutrition) |
:::

#### 4. Head Circumference
- Important in infants
- Reflects brain growth
- Measured at largest circumference

#### 5. Skin Fold Thickness
- Measures subcutaneous fat
- Sites: Triceps, subscapular, suprailiac

### Derived Indices

#### Body Mass Index (BMI)

**Formula:** Weight (kg) / Height² (m²)

**Adult BMI Classification (WHO):**

| BMI | Category |
|:----|:---------|
| <18.5 | Underweight |
| 18.5-24.9 | Normal |
| 25-29.9 | Overweight |
| ≥30 | Obese |

**Asian Cutoffs:**
| BMI | Category |
|:----|:---------|
| <18.5 | Underweight |
| 18.5-22.9 | Normal |
| 23-24.9 | Overweight |
| ≥25 | Obese |

### Key Indicators

| Indicator | Reflects | What it shows |
|:----------|:---------|:--------------|
| **Weight-for-Age** | Underweight | Acute + chronic malnutrition |
| **Height-for-Age** | Stunting | Chronic/past malnutrition |
| **Weight-for-Height** | Wasting | Acute/recent malnutrition |

### Z-Score Classification

| Status | Z-Score |
|:-------|:--------|
| **Normal** | > -2 SD |
| **Moderate** | -2 to -3 SD |
| **Severe** | < -3 SD |

---

## 🧪 B - Biochemical Assessment

### Common Tests

| Test | Indicates |
|:-----|:----------|
| **Hemoglobin** | Anemia |
| **Serum ferritin** | Iron stores |
| **Serum albumin** | Protein status |
| **Blood glucose** | Diabetes |
| **Urinary iodine** | Iodine status |

### Hemoglobin Cutoffs for Anemia (g/dL)

| Population | Mild | Moderate | Severe |
|:-----------|:-----|:---------|:-------|
| Children 6m-5y | 10-10.9 | 7-9.9 | <7 |
| Children 5-11y | 11-11.4 | 8-10.9 | <8 |
| Pregnant women | 10-10.9 | 7-9.9 | <7 |
| Non-pregnant women | 11-11.9 | 8-10.9 | <8 |
| Men | 11-12.9 | 8-10.9 | <8 |

---

## 🩺 C - Clinical Assessment

### Signs of Deficiencies

**Hair:**
- Sparse, thin → PEM
- Easily pluckable → PEM
- Flag sign → PEM
- Discolored → Zinc deficiency

**Eyes:**
- Pale conjunctiva → Anemia
- Bitot's spots → Vitamin A deficiency
- Xerosis → Vitamin A deficiency

**Mouth:**
- Angular stomatitis → Riboflavin, Iron
- Cheilosis → B-vitamins
- Bleeding gums → Vitamin C
- Mottled teeth → Fluorosis

**Skin:**
- Pallor → Anemia
- Edema → PEM, B1 deficiency
- Dermatitis → Niacin, Zinc

**Nails:**
- 🥄 Koilonychia → Iron deficiency
- Brittle → Protein, Zinc

**Skeletal:**
- Rickets signs → Vitamin D
- Bow legs, knock knees
- Rachitic rosary

---

## 🍽️ D - Dietary Assessment

### Methods

| Method | Description | Use |
|:-------|:------------|:----|
| **24-Hour Recall** | All food in past 24 hours | Quick, easy |
| **Food Frequency** | List with frequency | Population studies |
| **Diet History** | Detailed pattern over time | Comprehensive |
| **Weighed Food Record** | Actual weighing | Most accurate |
| **Food Diary** | Subject records (3-7 days) | Individual assessment |

---

## 📊 Growth Monitoring

### WHO Growth Standards
- Plot measurements over time
- Identify growth faltering early
- Road to Health Card

### Surveys
- NFHS (National Family Health Survey)
- NNMB (National Nutrition Monitoring Bureau)
- DLHS (District Level Household Survey)

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. ABCD = Anthropometry, Biochemical, Clinical, Dietary
2. MUAC <11.5 cm = SAM (Red zone - severe)
3. MUAC 12.5-13.4 cm = MAM (Yellow zone - moderate)
4. Weight-for-Height shows WASTING (acute)
5. Height-for-Age shows STUNTING (chronic)
6. Z-score < -3 SD = Severe malnutrition
7. Koilonychia = Spoon nails = Iron deficiency
8. Bitot's spots = Vitamin A deficiency
:::
`,
    contentHi: `
# 📏 पोषण मूल्यांकन

---

## 📖 परिचय

> **पोषण मूल्यांकन** पोषण स्थिति निर्धारित करने के लिए जानकारी एकत्र करने की व्यवस्थित प्रक्रिया है।

---

## 🔤 तरीके - ABCD दृष्टिकोण

| अक्षर | तरीका | विवरण |
|:------|:------|:------|
| **A** | मानवमिति | शारीरिक माप |
| **B** | जैव रासायनिक | प्रयोगशाला परीक्षण |
| **C** | नैदानिक | शारीरिक परीक्षा |
| **D** | आहार | भोजन सेवन मूल्यांकन |

---

## 📐 A - मानवमितीय मूल्यांकन

### जन्म वजन वर्गीकरण

| श्रेणी | वजन |
|:-------|:-----|
| **सामान्य** | ≥2500 ग्राम |
| **कम जन्म वजन (LBW)** | <2500 ग्राम |
| **बहुत कम** | <1500 ग्राम |
| **अत्यंत कम** | <1000 ग्राम |

### MUAC वर्गीकरण (6-59 महीने के बच्चे)

:::success
| रंग | MUAC | स्थिति |
|:----|:-----|:-------|
| 🟢 **हरा** | ≥13.5 सेमी | सामान्य |
| 🟡 **पीला** | 12.5-13.4 सेमी | MAM (मध्यम तीव्र कुपोषण) |
| 🔴 **लाल** | <11.5 सेमी | SAM (गंभीर तीव्र कुपोषण) |
:::

### BMI वर्गीकरण (WHO)

| BMI | श्रेणी |
|:----|:-------|
| <18.5 | कम वजन |
| 18.5-24.9 | सामान्य |
| 25-29.9 | अधिक वजन |
| ≥30 | मोटा |

### मुख्य संकेतक

| संकेतक | दर्शाता है | क्या दिखाता है |
|:-------|:----------|:--------------|
| **वजन-आयु के लिए** | कम वजन | तीव्र + जीर्ण कुपोषण |
| **ऊंचाई-आयु के लिए** | स्टंटिंग | जीर्ण/पिछला कुपोषण |
| **वजन-ऊंचाई के लिए** | वेस्टिंग | तीव्र/हालिया कुपोषण |

### Z-स्कोर वर्गीकरण

| स्थिति | Z-स्कोर |
|:-------|:--------|
| **सामान्य** | > -2 SD |
| **मध्यम** | -2 से -3 SD |
| **गंभीर** | < -3 SD |

---

## 🧪 B - जैव रासायनिक मूल्यांकन

### एनीमिया के लिए हीमोग्लोबिन कटऑफ (g/dL)

| जनसंख्या | हल्का | मध्यम | गंभीर |
|:---------|:------|:-------|:------|
| बच्चे 6म-5व | 10-10.9 | 7-9.9 | <7 |
| गर्भवती महिलाएं | 10-10.9 | 7-9.9 | <7 |
| पुरुष | 11-12.9 | 8-10.9 | <8 |

---

## 🩺 C - नैदानिक मूल्यांकन

### कमियों के संकेत

**आंखें:**
- पीला कंजंक्टिवा → एनीमिया
- बिटोट स्पॉट्स → विटामिन A कमी

**मुंह:**
- एंगुलर स्टोमेटाइटिस → राइबोफ्लेविन, आयरन
- मसूड़ों से खून → विटामिन C
- धब्बेदार दांत → फ्लोरोसिस

**नाखून:**
- 🥄 कोइलोनीचिया → आयरन कमी

---

## 🍽️ D - आहार मूल्यांकन

### तरीके

| तरीका | विवरण |
|:-------|:------|
| **24-घंटे रिकॉल** | पिछले 24 घंटों का भोजन |
| **खाद्य आवृत्ति** | आवृत्ति के साथ सूची |
| **आहार इतिहास** | विस्तृत पैटर्न |
| **तौला गया रिकॉर्ड** | सबसे सटीक |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. ABCD = मानवमिति, जैव रासायनिक, नैदानिक, आहार
2. MUAC <11.5 सेमी = SAM (लाल - गंभीर)
3. MUAC 12.5-13.4 सेमी = MAM (पीला - मध्यम)
4. वजन-ऊंचाई = वेस्टिंग (तीव्र)
5. ऊंचाई-आयु = स्टंटिंग (जीर्ण)
6. Z-स्कोर < -3 SD = गंभीर कुपोषण
7. कोइलोनीचिया = चम्मच नाखून = आयरन कमी
8. बिटोट स्पॉट्स = विटामिन A कमी
:::
`
  },
  {
    id: 8,
    titleEn: "Nutrition Through Life Cycle",
    titleHi: "जीवन चक्र में पोषण",
    contentEn: `
# 🔄 Nutrition Through Life Cycle

---

## 📖 Introduction

> Nutritional needs vary throughout life based on **growth, development, and physiological changes**.

---

## 👶 Infant Nutrition (0-12 months)

### Breastfeeding - Gold Standard

#### Key Practices

| Practice | Details |
|:---------|:--------|
| **Early initiation** | Within 1 hour of birth |
| **Exclusive breastfeeding** | 0-6 months (only breast milk) |
| **Colostrum** | First milk - MUST give! |
| **On-demand feeding** | Whenever baby shows hunger |
| **Continue** | Up to 2 years or beyond |

:::success
**Colostrum Benefits:**
- Rich in antibodies (IgA)
- First vaccine for baby
- Yellow, thick - perfectly normal!
- Never discard it!
:::

#### Breast Milk Composition
- Carbohydrates: Lactose
- Proteins: Whey, casein, immunoglobulins
- Fats: Essential fatty acids, DHA
- Anti-infective factors

### Complementary Feeding (After 6 months)

**When to Start:** At exactly 6 months (not before 4, not after 6)

| Age | Frequency | Amount | Texture |
|:----|:----------|:-------|:--------|
| 6-8 months | 2-3 times/day | 2-3 tbsp | Mashed, pureed |
| 9-11 months | 3-4 times/day | 1/2 cup | Finely chopped |
| 12-24 months | 3-4 times + snacks | 3/4-1 cup | Family foods |

**First Foods:**
- Mashed rice, dal
- Mashed banana, papaya
- Mashed potato, vegetables

---

## 🧒 Young Child Nutrition (1-5 years)

### Key Points
- 3 main meals + 2 snacks
- Continue breastfeeding up to 2 years
- Energy-dense foods (add oil/ghee)
- Include all food groups
- Avoid junk food, excessive sugar

### Nutritional Requirements

| Nutrient | Amount |
|:---------|:-------|
| Energy | 1000-1400 kcal/day |
| Protein | 16-20 g/day |

### Common Problems
- Poor appetite
- Food fads/picky eating
- Iron deficiency anemia
- Protein-energy malnutrition

---

## 📚 School-Age Children (6-12 years)

### Characteristics
- Steady growth
- Increased activity
- Cognitive development
- Forming lifelong eating habits

### Nutritional Requirements

| Nutrient | Amount |
|:---------|:-------|
| Energy | 1400-2000 kcal/day |
| Protein | 25-40 g/day |

### Key Considerations
- Regular meals including **breakfast**
- Healthy school lunch/tiffin
- Limit processed foods, soft drinks
- Encourage physical activity
- Monitor growth

:::info
**Mid-Day Meal Scheme:**
- Provides lunch in schools
- Improves attendance and nutrition
- Addresses hidden hunger
:::

---

## 🧑 Adolescent Nutrition (10-19 years)

### Characteristics
- Growth spurt
- Sexual maturation
- Increased nutritional needs
- Body image concerns

### Nutritional Requirements

| Nutrient | Amount |
|:---------|:-------|
| Energy | 2000-3000 kcal/day |
| Protein | 50-70 g/day |
| Calcium | High (peak bone mass) |
| Iron | High (especially girls) |

### Common Problems
- Anemia (especially girls)
- Eating disorders
- Obesity
- Skipping meals
- Junk food consumption

### Key Messages
- Regular balanced meals
- Don't skip breakfast
- Adequate iron and calcium
- Healthy body image
- Avoid crash diets

---

## 🤰 Pregnancy Nutrition

### Increased Requirements

| Nutrient | Extra Amount | Why |
|:---------|:-------------|:----|
| **Energy** | +350 kcal/day | Fetal growth |
| **Protein** | +15 g/day | Tissue building |
| **Iron** | 35 mg/day | Prevent anemia |
| **Folic acid** | 500 mcg/day | Neural tube defects |
| **Calcium** | 1200 mg/day | Fetal skeleton |

### Weight Gain Guidelines

| Pre-pregnancy BMI | Recommended Gain |
|:------------------|:-----------------|
| Normal | 11-16 kg |
| Underweight | 12-18 kg |
| Overweight | 7-11 kg |
| Obese | 5-9 kg |

:::warning
**Avoid:**
- Alcohol completely
- Raw/undercooked foods
- Excess caffeine
- Self-medication
:::

---

## 🤱 Lactation Nutrition

### Increased Requirements

| Nutrient | Extra Amount |
|:---------|:-------------|
| **Energy** | +600 kcal/day |
| **Protein** | +25 g/day |
| **Fluids** | Extra 2-3 liters |

### Key Points
- Continue healthy eating
- Drink plenty of fluids
- Avoid alcohol
- Continue calcium supplementation
- Most foods safe during breastfeeding

---

## 👴 Elderly Nutrition (>60 years)

### Changes with Aging
- Decreased appetite
- Reduced taste and smell
- Dental problems
- Decreased absorption
- Lower energy needs but same micronutrient needs

### Common Problems
- Undernutrition
- Vitamin D and B12 deficiency
- Calcium deficiency
- Dehydration
- Chronic diseases

### Key Recommendations
- Smaller, frequent meals
- Soft, easy-to-chew foods
- Adequate protein (maintain muscle)
- Vitamin D and calcium
- B12 supplementation if needed
- Adequate fluids
- Fiber for constipation

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Early initiation of breastfeeding within 1 hour
2. Exclusive breastfeeding for first 6 months
3. Complementary feeding starts at exactly 6 months
4. Colostrum = First vaccine - never discard!
5. Pregnancy: +350 kcal, Iron 35 mg, Folic acid 500 mcg
6. Lactation: +600 kcal, +25 g protein
7. Adolescents need extra iron (especially girls) and calcium
8. Elderly: Same micronutrients with fewer calories
:::
`,
    contentHi: `
# 🔄 जीवन चक्र में पोषण

---

## 📖 परिचय

> पोषण संबंधी आवश्यकताएं **विकास, वृद्धि और शारीरिक परिवर्तनों** के आधार पर जीवन भर भिन्न होती हैं।

---

## 👶 शिशु पोषण (0-12 महीने)

### स्तनपान - स्वर्ण मानक

| प्रथा | विवरण |
|:------|:------|
| **जल्दी शुरुआत** | जन्म के 1 घंटे के भीतर |
| **विशेष स्तनपान** | 0-6 महीने (केवल स्तन का दूध) |
| **कोलोस्ट्रम** | पहला दूध - जरूर दें! |
| **मांग पर स्तनपान** | जब भी भूख दिखाए |
| **जारी रखें** | 2 वर्ष या उससे आगे तक |

:::success
**कोलोस्ट्रम लाभ:**
- एंटीबॉडी से भरपूर (IgA)
- बच्चे का पहला टीका
- पीला, गाढ़ा - बिल्कुल सामान्य!
- कभी न फेंकें!
:::

### पूरक आहार (6 महीने बाद)

| आयु | आवृत्ति | मात्रा | बनावट |
|:----|:-------|:------|:-------|
| 6-8 महीने | 2-3 बार/दिन | 2-3 चम्मच | मसला |
| 9-11 महीने | 3-4 बार/दिन | 1/2 कप | बारीक कटा |
| 12-24 महीने | 3-4 बार + स्नैक्स | 3/4-1 कप | पारिवारिक भोजन |

---

## 🧒 छोटे बच्चे का पोषण (1-5 वर्ष)

### पोषण आवश्यकताएं

| पोषक | मात्रा |
|:-----|:------|
| ऊर्जा | 1000-1400 kcal/दिन |
| प्रोटीन | 16-20 g/दिन |

---

## 📚 स्कूल जाने वाले बच्चे (6-12 वर्ष)

### पोषण आवश्यकताएं

| पोषक | मात्रा |
|:-----|:------|
| ऊर्जा | 1400-2000 kcal/दिन |
| प्रोटीन | 25-40 g/दिन |

:::info
**मध्याह्न भोजन योजना:**
- स्कूलों में दोपहर का भोजन
- उपस्थिति और पोषण में सुधार
- छिपी भूख को संबोधित करता है
:::

---

## 🧑 किशोर पोषण (10-19 वर्ष)

### पोषण आवश्यकताएं

| पोषक | मात्रा |
|:-----|:------|
| ऊर्जा | 2000-3000 kcal/दिन |
| प्रोटीन | 50-70 g/दिन |
| कैल्शियम | उच्च (चरम हड्डी द्रव्यमान) |
| आयरन | उच्च (विशेष रूप से लड़कियां) |

---

## 🤰 गर्भावस्था पोषण

### बढ़ी हुई आवश्यकताएं

| पोषक | अतिरिक्त | क्यों |
|:-----|:---------|:-----|
| **ऊर्जा** | +350 kcal/दिन | भ्रूण वृद्धि |
| **प्रोटीन** | +15 g/दिन | ऊतक निर्माण |
| **आयरन** | 35 mg/दिन | एनीमिया रोकें |
| **फोलिक एसिड** | 500 mcg/दिन | न्यूरल ट्यूब दोष |
| **कैल्शियम** | 1200 mg/दिन | भ्रूण कंकाल |

### वजन बढ़ने के दिशानिर्देश

| गर्भावस्था पूर्व BMI | अनुशंसित वृद्धि |
|:-------------------|:---------------|
| सामान्य | 11-16 kg |
| कम वजन | 12-18 kg |
| अधिक वजन | 7-11 kg |
| मोटापा | 5-9 kg |

---

## 🤱 स्तनपान पोषण

| पोषक | अतिरिक्त |
|:-----|:---------|
| **ऊर्जा** | +600 kcal/दिन |
| **प्रोटीन** | +25 g/दिन |
| **तरल** | 2-3 लीटर अतिरिक्त |

---

## 👴 बुजुर्ग पोषण (>60 वर्ष)

### उम्र बढ़ने के साथ परिवर्तन
- कम भूख
- कम स्वाद और गंध
- दंत समस्याएं
- कम अवशोषण
- कम ऊर्जा लेकिन समान सूक्ष्म पोषक

### मुख्य सिफारिशें
- छोटे, बार-बार भोजन
- नरम, आसानी से चबाने वाले खाद्य
- पर्याप्त प्रोटीन
- विटामिन D और कैल्शियम
- पर्याप्त तरल पदार्थ

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. स्तनपान की जल्दी शुरुआत 1 घंटे के भीतर
2. पहले 6 महीने विशेष स्तनपान
3. पूरक आहार ठीक 6 महीने पर शुरू
4. कोलोस्ट्रम = पहला टीका - कभी न फेंकें!
5. गर्भावस्था: +350 kcal, आयरन 35 mg, फोलिक एसिड 500 mcg
6. स्तनपान: +600 kcal, +25 g प्रोटीन
7. किशोरों को अतिरिक्त आयरन (विशेष रूप से लड़कियां) और कैल्शियम
8. बुजुर्ग: कम कैलोरी के साथ समान सूक्ष्म पोषक
:::
`
  },
  {
    id: 9,
    titleEn: "Malnutrition & Deficiency Disorders",
    titleHi: "कुपोषण और कमी विकार",
    contentEn: `
# ⚠️ Malnutrition & Deficiency Disorders

---

## 📖 Introduction

> **Malnutrition** refers to deficiencies, excesses, or imbalances in intake of energy and/or nutrients.

### Types

| Type | Description |
|:-----|:------------|
| **Undernutrition** | Deficiency of nutrients |
| **Overnutrition** | Excess of nutrients (obesity) |
| **Double burden** | Both in same population |

---

## 👶 Protein-Energy Malnutrition (PEM)

### IAP Classification

| Grade | Weight-for-Age (% of median) |
|:------|:-----------------------------|
| Normal | >80% |
| Grade I (Mild) | 71-80% |
| Grade II (Moderate) | 61-70% |
| Grade III (Severe) | 51-60% |
| Grade IV (Very Severe) | ≤50% |

### Types of Severe PEM

#### 1. Marasmus (मरास्मस)

**Cause:** Severe calorie deficiency, starvation, early weaning

:::danger
**Features:**
- Severe wasting ("skin and bones")
- Weight <60% of expected
- **No edema**
- "Old man" or "monkey face"
- Alert, hungry look
- Loose skin folds
- Loss of subcutaneous fat
:::

#### 2. Kwashiorkor (क्वाशियोरकोर)

**Cause:** Protein deficiency with adequate calories; common after weaning to starchy diet

:::danger
**Features:**
- **Bilateral pitting edema** (key feature!)
- Moon face
- Weight 60-80% of expected
- Hair changes (sparse, discolored, easily pluckable)
- Flaky paint dermatosis
- Fatty liver (hepatomegaly)
- Apathetic, irritable
:::

#### 3. Marasmic-Kwashiorkor
- Features of both
- Severe wasting WITH edema
- **Worst prognosis**

### Key Differences

| Feature | Marasmus | Kwashiorkor |
|:--------|:---------|:------------|
| **Edema** | ❌ Absent | ✅ Present |
| **Wasting** | Severe | Present (masked) |
| **Hair** | Normal | Sparse, discolored |
| **Appetite** | Good | Poor |
| **Liver** | Normal | Fatty, enlarged |
| **Face** | "Old man" | Moon face |

---

## 📊 Assessment of Acute Malnutrition

### SAM (Severe Acute Malnutrition)

:::danger
**Criteria (any one):**
- Weight-for-Height < -3 SD, OR
- MUAC < 11.5 cm (6m-5y), OR
- Bilateral pitting edema
:::

### MAM (Moderate Acute Malnutrition)

:::warning
**Criteria:**
- Weight-for-Height -2 to -3 SD, OR
- MUAC 11.5-12.4 cm
:::

---

## 🏥 Management of SAM

### SAM with Complications (Facility-based - NRC)

**10 Steps of Management:**

| Step | Action |
|:-----|:-------|
| 1 | Treat/prevent hypoglycemia |
| 2 | Treat/prevent hypothermia |
| 3 | Treat/prevent dehydration |
| 4 | Correct electrolyte imbalance |
| 5 | Treat infection |
| 6 | Correct micronutrient deficiencies |
| 7 | Start cautious feeding |
| 8 | Achieve catch-up growth |
| 9 | Provide sensory stimulation |
| 10 | Prepare for follow-up |

**Phases:**

| Phase | Duration | Diet | Goal |
|:------|:---------|:-----|:-----|
| **Stabilization** | 3-7 days | F-75 | Treat complications |
| **Transition** | Variable | F-75 → F-100 | Gradual increase |
| **Rehabilitation** | Variable | F-100/RUTF | Catch-up growth |

### SAM without Complications (Community-based)
- RUTF (Ready-to-Use Therapeutic Food)
- Home-based treatment
- Weekly follow-up
- Treat associated conditions

### MAM Management
- Supplementary feeding
- Nutrition counseling
- Growth monitoring
- Treat infections

---

## 💊 Micronutrient Deficiencies

| Deficiency | Disease/Condition | Prevention |
|:-----------|:------------------|:-----------|
| **Vitamin A** | Night blindness, xerophthalmia | Vitamin A supplementation |
| **Iron** | Anemia | IFA supplementation, deworming |
| **Iodine** | Goiter, cretinism | Iodized salt |
| **Zinc** | Growth retardation, diarrhea | Zinc with ORS |
| **Vitamin D** | Rickets, osteomalacia | Sunlight, supplementation |

---

## 🍔 Obesity & Overnutrition

### Definition

| Category | BMI |
|:---------|:----|
| Overweight | 25-29.9 |
| Obese | ≥30 |

### Health Consequences
- Type 2 diabetes
- Cardiovascular disease
- Hypertension
- Dyslipidemia
- Certain cancers
- Osteoarthritis

### Prevention
- Healthy eating habits from childhood
- Regular physical activity
- Limit screen time
- Reduce sugar and processed foods
- Portion control

---

## 🔍 Hidden Hunger

> Micronutrient deficiencies without obvious clinical signs

**Common:** Iron, Zinc, Vitamin A, Iodine deficiency

**Solutions:**
- Dietary diversification
- Food fortification
- Supplementation
- Biofortification

---

## ⏰ First 1000 Days

:::success
**Critical Window:** Conception to age 2 years

- Malnutrition in this period has lasting effects
- Focus of nutrition interventions
- Intergenerational impact
- Affects brain development, growth, immunity
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Marasmus = Calorie deficiency (wasting, NO edema)
2. Kwashiorkor = Protein deficiency (EDEMA, moon face)
3. Edema distinguishes Kwashiorkor from Marasmus
4. SAM: W/H < -3 SD or MUAC < 11.5 cm or edema
5. MAM: W/H -2 to -3 SD or MUAC 11.5-12.4 cm
6. NRC uses 10 steps, F-75 then F-100
7. RUTF for community-based SAM management
8. First 1000 days = Critical window for intervention
:::
`,
    contentHi: `
# ⚠️ कुपोषण और कमी विकार

---

## 📖 परिचय

> **कुपोषण** ऊर्जा और/या पोषक तत्वों के सेवन में कमी, अधिकता या असंतुलन को संदर्भित करता है।

### प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **अल्पपोषण** | पोषक तत्वों की कमी |
| **अतिपोषण** | पोषक तत्वों की अधिकता (मोटापा) |
| **दोहरा बोझ** | एक ही जनसंख्या में दोनों |

---

## 👶 प्रोटीन-ऊर्जा कुपोषण (PEM)

### IAP वर्गीकरण

| श्रेणी | वजन-आयु के लिए (मध्यमा का %) |
|:-------|:-----------------------------|
| सामान्य | >80% |
| श्रेणी I (हल्का) | 71-80% |
| श्रेणी II (मध्यम) | 61-70% |
| श्रेणी III (गंभीर) | 51-60% |
| श्रेणी IV (बहुत गंभीर) | ≤50% |

### गंभीर PEM के प्रकार

#### 1. मरास्मस (Marasmus)

**कारण:** गंभीर कैलोरी की कमी, भुखमरी, जल्दी दूध छुड़ाना

:::danger
**विशेषताएं:**
- गंभीर क्षय ("त्वचा और हड्डियां")
- अपेक्षित वजन का <60%
- **कोई सूजन नहीं**
- "बूढ़े आदमी" या "बंदर का चेहरा"
- सतर्क, भूखी नजर
:::

#### 2. क्वाशियोरकोर (Kwashiorkor)

**कारण:** पर्याप्त कैलोरी के साथ प्रोटीन की कमी

:::danger
**विशेषताएं:**
- **द्विपक्षीय गड्ढे वाली सूजन** (मुख्य विशेषता!)
- चंद्र चेहरा (Moon face)
- बाल परिवर्तन (विरल, मलिन)
- फ्लेकी पेंट डर्मेटोसिस
- वसायुक्त यकृत
- उदासीन, चिड़चिड़ा
:::

### मुख्य अंतर

| विशेषता | मरास्मस | क्वाशियोरकोर |
|:--------|:-------|:------------|
| **सूजन** | ❌ अनुपस्थित | ✅ उपस्थित |
| **क्षीणता** | गंभीर | उपस्थित (छिपी) |
| **बाल** | सामान्य | विरल, मलिन |
| **भूख** | अच्छी | कम |
| **चेहरा** | "बूढ़ा आदमी" | चंद्र चेहरा |

---

## 📊 तीव्र कुपोषण का आकलन

### SAM (गंभीर तीव्र कुपोषण)

:::danger
**मानदंड (कोई एक):**
- वजन-ऊंचाई < -3 SD, या
- MUAC < 11.5 सेमी (6म-5व), या
- द्विपक्षीय गड्ढे वाली सूजन
:::

### MAM (मध्यम तीव्र कुपोषण)

:::warning
**मानदंड:**
- वजन-ऊंचाई -2 से -3 SD, या
- MUAC 11.5-12.4 सेमी
:::

---

## 🏥 SAM का प्रबंधन

### NRC में प्रबंधन के 10 चरण

| चरण | क्रिया |
|:----|:------|
| 1 | हाइपोग्लाइसीमिया का इलाज/रोकथाम |
| 2 | हाइपोथर्मिया का इलाज/रोकथाम |
| 3 | निर्जलीकरण का इलाज/रोकथाम |
| 4 | इलेक्ट्रोलाइट असंतुलन ठीक करें |
| 5 | संक्रमण का इलाज |
| 6 | सूक्ष्म पोषक कमी ठीक करें |
| 7 | सावधानी से आहार शुरू करें |
| 8 | कैच-अप विकास प्राप्त करें |
| 9 | संवेदी उत्तेजना प्रदान करें |
| 10 | फॉलो-अप की तैयारी करें |

**चरण:**

| चरण | अवधि | आहार | लक्ष्य |
|:----|:-----|:-----|:------|
| **स्थिरीकरण** | 3-7 दिन | F-75 | जटिलताओं का इलाज |
| **संक्रमण** | परिवर्तनीय | F-75 → F-100 | धीरे-धीरे वृद्धि |
| **पुनर्वास** | परिवर्तनीय | F-100/RUTF | कैच-अप विकास |

---

## ⏰ पहले 1000 दिन

:::success
**महत्वपूर्ण खिड़की:** गर्भधारण से 2 वर्ष की आयु तक

- इस अवधि में कुपोषण के स्थायी प्रभाव
- पोषण हस्तक्षेपों का केंद्र
- अंतर-पीढ़ी प्रभाव
- मस्तिष्क विकास, वृद्धि, प्रतिरक्षा प्रभावित
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मरास्मस = कैलोरी कमी (क्षीणता, सूजन नहीं)
2. क्वाशियोरकोर = प्रोटीन कमी (सूजन, चंद्र चेहरा)
3. सूजन क्वाशियोरकोर को मरास्मस से अलग करती है
4. SAM: W/H < -3 SD या MUAC < 11.5 सेमी या सूजन
5. MAM: W/H -2 से -3 SD या MUAC 11.5-12.4 सेमी
6. NRC 10 चरण, F-75 फिर F-100 उपयोग करता है
7. समुदाय-आधारित SAM के लिए RUTF
8. पहले 1000 दिन = हस्तक्षेप के लिए महत्वपूर्ण खिड़की
:::
`
  },
  {
    id: 10,
    titleEn: "National Nutrition Programs",
    titleHi: "राष्ट्रीय पोषण कार्यक्रम",
    contentEn: `
# 🏛️ National Nutrition Programs

---

## 🎯 POSHAN Abhiyaan (National Nutrition Mission)

### Overview

| Aspect | Details |
|:-------|:--------|
| **Launch** | March 2018 by Prime Minister |
| **Type** | Umbrella program for nutrition |
| **Approach** | Mission mode |

### Targets (by 2022)

| Target | Annual Reduction |
|:-------|:-----------------|
| Stunting | 38.4% to 25% |
| Undernutrition | 2% per year |
| Anemia | 3% per year |
| Low birth weight | 2% per year |

### Key Features

| Feature | Description |
|:--------|:------------|
| **Convergence** | Multiple ministries working together |
| **Technology** | ICT-based monitoring (POSHAN Tracker) |
| **Jan Andolan** | Community participation |
| **POSHAN Maah** | September - Nutrition Month |

---

## 👶 ICDS (Integrated Child Development Services)

### Overview

| Aspect | Details |
|:-------|:--------|
| **Launch** | 1975 |
| **Target** | Children 0-6 years, Pregnant/Lactating women, Adolescent girls |

### 6 Services

| Service | Description |
|:--------|:------------|
| 1️⃣ **Supplementary Nutrition** | Food to beneficiaries |
| 2️⃣ **Pre-school Education** | For 3-6 years |
| 3️⃣ **Nutrition & Health Education** | For women |
| 4️⃣ **Immunization** | In coordination with health |
| 5️⃣ **Health Check-ups** | Growth monitoring |
| 6️⃣ **Referral Services** | To health facilities |

### Service Delivery
- Through **Anganwadi Centers (AWC)**
- **AWW** (Anganwadi Worker) - Main functionary
- **AWH** (Anganwadi Helper)
- Supervisor oversight

### Supplementary Nutrition Program (SNP)

| Category | Calories | Protein |
|:---------|:---------|:--------|
| Children 6m-3y | 500 kcal | 12-15g |
| Children 3-6y | 500 kcal | 12-15g |
| **Severely malnourished** | **800 kcal** | **20-25g** |
| Pregnant/Lactating | 600 kcal | 18-20g |

---

## 🍽️ Mid-Day Meal Scheme (PM POSHAN)

### Coverage
- Primary and upper primary school children
- Government and government-aided schools

### Objectives
- Improve nutritional status
- Increase school attendance
- Improve retention
- Address hidden hunger

### Norms

| Level | Calories | Protein |
|:------|:---------|:--------|
| Primary (I-V) | 450 kcal | 12g |
| Upper Primary (VI-VIII) | 700 kcal | 20g |

---

## 🩸 Anemia Mukt Bharat (AMB)

### 6x6x6 Strategy

**6 Target Groups:**
- Children 6-59 months
- Children 5-9 years
- Adolescents 10-19 years
- Women of reproductive age
- Pregnant women
- Lactating women

**6 Interventions:**
1. Prophylactic IFA supplementation
2. Deworming
3. Intensified BCC (Behavior Change Communication)
4. Testing and treatment of anemia
5. Fortification of foods
6. Addressing non-nutritional causes

### IFA Supplementation Schedule

| Age Group | Iron | Folic Acid | Frequency |
|:----------|:-----|:-----------|:----------|
| 6-59 months | 20 mg | 100 mcg | Biweekly |
| 5-9 years | 45 mg | 400 mcg | Weekly |
| 10-19 years | 60 mg | 500 mcg | Weekly |
| **Pregnant** | 60 mg | 500 mcg | **Daily x 180 days** |
| Lactating | 60 mg | 500 mcg | Daily x 180 days |
| WRA | 60 mg | 500 mcg | Weekly |

---

## 🧂 NIDDCP (National Iodine Deficiency Disorders Control Program)

### Strategy
- **Universal Salt Iodization (USI)**
- Ban on sale of non-iodized salt
- Quality testing

### Iodine Levels in Salt

| Level | Amount |
|:------|:-------|
| At production | 30 ppm |
| At consumer level | ≥15 ppm |

---

## 👁️ Vitamin A Supplementation

### Schedule

| Age | Dose |
|:----|:-----|
| 9 months | 100,000 IU |
| 16 months | 200,000 IU |
| Every 6 months until 5 years | 200,000 IU |

**Post-partum Mothers:** 200,000 IU within 6 weeks of delivery

---

## 🍚 National Food Security Act (NFSA), 2013

### Coverage
- 75% rural, 50% urban population
- Priority households and Antyodaya households

### Entitlements

| Benefit | Amount |
|:--------|:-------|
| Foodgrains | 5 kg/person/month |
| Rice price | Rs. 3/kg |
| Wheat price | Rs. 2/kg |
| Coarse grains | Rs. 1/kg |
| Maternity benefit | Rs. 6000 |

---

## 🏭 Food Fortification Programs

### Definition
Adding micronutrients to commonly consumed foods.

### Fortified Foods

| Food | Added Nutrients |
|:-----|:----------------|
| **Salt** | Iodine (mandatory), Iron (double fortified) |
| **Wheat flour/Rice** | Iron, Folic acid, B12 |
| **Edible oil** | Vitamin A, D |
| **Milk** | Vitamin A, D |

:::success
**+F Logo:** FSSAI logo for fortified foods
:::

---

## 👩‍⚕️ Role of Health Worker in Nutrition

### ASHA/AWW Responsibilities

| Activity | Description |
|:---------|:------------|
| 1 | Identify malnourished children |
| 2 | Growth monitoring (monthly weighing, MUAC) |
| 3 | Nutrition counseling |
| 4 | IFA distribution |
| 5 | Refer severe cases |
| 6 | Support supplementary feeding |
| 7 | Promote breastfeeding |
| 8 | Community mobilization |
| 9 | Record keeping |
| 10 | VHND participation |

---

## 💰 Other Programs

### PMMVY (Pradhan Mantri Matru Vandana Yojana)
- **Rs. 5000** for first live birth
- Three installments linked to ANC, registration, immunization

### SAG (Scheme for Adolescent Girls)
- Formerly SABLA
- Nutrition and life skills for 11-18 year girls
- Out-of-school adolescent girls

### Eat Right India Movement
- Safe and healthy food
- Reduce salt, sugar, fat
- Food safety

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. POSHAN Abhiyaan = National Nutrition Mission (2018)
2. ICDS provides 6 services through Anganwadis
3. ICDS started in 1975
4. Mid-Day Meal: Primary 450 kcal, Upper Primary 700 kcal
5. Anemia Mukt Bharat uses 6x6x6 strategy
6. IFA daily for pregnant women (180 days)
7. Iodized salt: 30 ppm production, ≥15 ppm consumer
8. Vitamin A: 100,000 IU at 9 months, then 200,000 IU
9. NFSA: 5 kg foodgrains per person per month
10. +F logo = FSSAI fortified food mark
:::
`,
    contentHi: `
# 🏛️ राष्ट्रीय पोषण कार्यक्रम

---

## 🎯 पोषण अभियान (POSHAN Abhiyaan)

### अवलोकन

| पहलू | विवरण |
|:-----|:------|
| **शुरुआत** | मार्च 2018, प्रधान मंत्री द्वारा |
| **प्रकार** | पोषण के लिए छत्र कार्यक्रम |
| **दृष्टिकोण** | मिशन मोड |

### लक्ष्य (2022 तक)

| लक्ष्य | वार्षिक कमी |
|:-------|:----------|
| स्टंटिंग | 38.4% से 25% |
| अल्पपोषण | 2% प्रति वर्ष |
| एनीमिया | 3% प्रति वर्ष |
| कम जन्म वजन | 2% प्रति वर्ष |

### मुख्य विशेषताएं

| विशेषता | विवरण |
|:--------|:------|
| **अभिसरण** | कई मंत्रालय एक साथ |
| **प्रौद्योगिकी** | पोषण ट्रैकर (ICT-आधारित) |
| **जन आंदोलन** | सामुदायिक भागीदारी |
| **पोषण माह** | सितंबर - पोषण महीना |

---

## 👶 ICDS (एकीकृत बाल विकास सेवाएं)

### अवलोकन

| पहलू | विवरण |
|:-----|:------|
| **शुरुआत** | 1975 |
| **लक्ष्य** | 0-6 वर्ष के बच्चे, गर्भवती/स्तनपान कराने वाली, किशोर लड़कियां |

### 6 सेवाएं

| सेवा | विवरण |
|:-----|:------|
| 1️⃣ **पूरक पोषण** | लाभार्थियों को भोजन |
| 2️⃣ **प्री-स्कूल शिक्षा** | 3-6 वर्ष के लिए |
| 3️⃣ **पोषण और स्वास्थ्य शिक्षा** | महिलाओं के लिए |
| 4️⃣ **टीकाकरण** | स्वास्थ्य के साथ समन्वय |
| 5️⃣ **स्वास्थ्य जांच** | विकास निगरानी |
| 6️⃣ **रेफरल सेवाएं** | स्वास्थ्य सुविधाओं को |

### सेवा वितरण
- **आंगनवाड़ी केंद्रों (AWC)** के माध्यम से
- **AWW** (आंगनवाड़ी कार्यकर्ता) - मुख्य कार्यकर्ता
- **AWH** (आंगनवाड़ी हेल्पर)

### पूरक पोषण कार्यक्रम (SNP)

| श्रेणी | कैलोरी | प्रोटीन |
|:-------|:-------|:--------|
| बच्चे 6म-3व | 500 kcal | 12-15g |
| बच्चे 3-6व | 500 kcal | 12-15g |
| **गंभीर कुपोषित** | **800 kcal** | **20-25g** |
| गर्भवती/स्तनपान | 600 kcal | 18-20g |

---

## 🍽️ मध्याह्न भोजन योजना (PM POSHAN)

### मानदंड

| स्तर | कैलोरी | प्रोटीन |
|:-----|:-------|:--------|
| प्राथमिक (I-V) | 450 kcal | 12g |
| उच्च प्राथमिक (VI-VIII) | 700 kcal | 20g |

---

## 🩸 एनीमिया मुक्त भारत (AMB)

### 6x6x6 रणनीति

**6 लक्ष्य समूह:**
- 6-59 महीने के बच्चे
- 5-9 वर्ष के बच्चे
- 10-19 वर्ष के किशोर
- प्रजनन आयु की महिलाएं
- गर्भवती महिलाएं
- स्तनपान कराने वाली महिलाएं

**6 हस्तक्षेप:**
1. रोकथाम IFA पूरकता
2. कृमिनाशक
3. तीव्र BCC (व्यवहार परिवर्तन संचार)
4. एनीमिया की जांच और उपचार
5. खाद्य संवर्धन
6. गैर-पोषण संबंधी कारणों को संबोधित करना

### IFA पूरकता अनुसूची

| आयु समूह | आयरन | फोलिक एसिड | आवृत्ति |
|:---------|:-----|:-----------|:--------|
| 6-59 महीने | 20 mg | 100 mcg | द्वि-साप्ताहिक |
| 5-9 वर्ष | 45 mg | 400 mcg | साप्ताहिक |
| 10-19 वर्ष | 60 mg | 500 mcg | साप्ताहिक |
| **गर्भवती** | 60 mg | 500 mcg | **दैनिक x 180 दिन** |
| स्तनपान | 60 mg | 500 mcg | दैनिक x 180 दिन |

---

## 🧂 NIDDCP (राष्ट्रीय आयोडीन की कमी विकार नियंत्रण कार्यक्रम)

### नमक में आयोडीन स्तर

| स्तर | मात्रा |
|:-----|:------|
| उत्पादन पर | 30 ppm |
| उपभोक्ता स्तर | ≥15 ppm |

---

## 👁️ विटामिन A पूरकता

### अनुसूची

| आयु | खुराक |
|:----|:-----|
| 9 महीने | 100,000 IU |
| 16 महीने | 200,000 IU |
| 5 वर्ष तक हर 6 महीने | 200,000 IU |

**प्रसवोत्तर माताएं:** प्रसव के 6 सप्ताह के भीतर 200,000 IU

---

## 🍚 राष्ट्रीय खाद्य सुरक्षा अधिनियम (NFSA), 2013

### हकदारी

| लाभ | मात्रा |
|:----|:------|
| खाद्यान्न | 5 किलो/व्यक्ति/माह |
| चावल मूल्य | रु. 3/किलो |
| गेहूं मूल्य | रु. 2/किलो |
| मोटे अनाज | रु. 1/किलो |
| मातृत्व लाभ | रु. 6000 |

---

## 🏭 खाद्य संवर्धन कार्यक्रम

### संवर्धित खाद्य पदार्थ

| खाद्य | जोड़े गए पोषक |
|:------|:-------------|
| **नमक** | आयोडीन (अनिवार्य), आयरन (डबल फोर्टिफाइड) |
| **गेहूं का आटा/चावल** | आयरन, फोलिक एसिड, B12 |
| **खाद्य तेल** | विटामिन A, D |
| **दूध** | विटामिन A, D |

:::success
**+F लोगो:** संवर्धित खाद्य पदार्थों के लिए FSSAI लोगो
:::

---

## 💰 अन्य कार्यक्रम

### PMMVY (प्रधान मंत्री मातृ वंदना योजना)
- पहले जीवित जन्म के लिए **रु. 5000**
- ANC, पंजीकरण, टीकाकरण से जुड़ी तीन किस्तें

### SAG (किशोरियों के लिए योजना)
- पूर्व में SABLA
- 11-18 वर्ष की लड़कियों के लिए पोषण और जीवन कौशल

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. पोषण अभियान = राष्ट्रीय पोषण मिशन (2018)
2. ICDS आंगनवाड़ियों के माध्यम से 6 सेवाएं प्रदान करता है
3. ICDS 1975 में शुरू हुआ
4. मध्याह्न भोजन: प्राथमिक 450 kcal, उच्च प्राथमिक 700 kcal
5. एनीमिया मुक्त भारत 6x6x6 रणनीति उपयोग करता है
6. गर्भवती महिलाओं के लिए दैनिक IFA (180 दिन)
7. आयोडीन युक्त नमक: उत्पादन 30 ppm, उपभोक्ता ≥15 ppm
8. विटामिन A: 9 महीने पर 100,000 IU, फिर 200,000 IU
9. NFSA: प्रति व्यक्ति प्रति माह 5 किलो खाद्यान्न
10. +F लोगो = FSSAI संवर्धित खाद्य चिह्न
:::
`
  }
];
