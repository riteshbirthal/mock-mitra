export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const firstAidLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Principles of First Aid",
    titleHi: "प्राथमिक चिकित्सा के सिद्धांत",
    contentEn: `
# 🚑 Principles of First Aid

---

## 📖 What is First Aid?

> **First Aid** is the immediate care given to an injured or suddenly ill person before professional medical help arrives.

---

## 🎯 Three Aims of First Aid (PPP)

| Aim | Description |
|:----|:------------|
| **P**reserve Life | Keep the person alive |
| **P**revent Deterioration | Stop condition from worsening |
| **P**romote Recovery | Help healing begin |

---

## ⚠️ Universal Principles

### 1. Safety First
:::warning
**Your safety comes first!** A dead rescuer cannot help anyone.
:::

Check for dangers:
- Traffic
- Fire
- Electricity
- Gas leaks
- Unstable structures

### 2. Do No Further Harm
- Don't move unnecessarily (spinal injury risk)
- Don't remove embedded objects
- Don't give food/water to unconscious
- Don't attempt procedures beyond training

### 3. Get Help
- Call **108** (Emergency)
- Call **102** (Ambulance)
- Send someone to get help

### 4. Reassure the Victim
- Stay calm yourself
- Speak gently and confidently
- Explain what you're doing

---

## 🔍 Scene Assessment (SAFE)

| Letter | Meaning | Action |
|:-------|:--------|:-------|
| **S** | Safety | Is scene safe? |
| **A** | Assess | How many victims? |
| **F** | Find help | Call ambulance |
| **E** | Evaluate | What injuries? |

---

## 📋 Primary Survey (DRABC)

### D - Danger
Check environment for hazards

### R - Response
- Tap shoulders, shout "Hello! Can you hear me?"
- **AVPU Scale:**
  - **A**lert
  - **V**oice responsive
  - **P**ain responsive
  - **U**nresponsive

### A - Airway
- **Head tilt-chin lift** to open airway
- Look for obstructions in mouth
- If spinal injury suspected: **Jaw thrust**

### B - Breathing
**Look, Listen, Feel** for 10 seconds:
- LOOK at chest rise
- LISTEN for breath sounds
- FEEL breath on cheek

### C - Circulation
- Check pulse (carotid for adults)
- Look for severe bleeding
- Check skin color and temperature

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. PPP = Preserve life, Prevent deterioration, Promote recovery
2. Safety FIRST - check for dangers
3. DRABC = Danger, Response, Airway, Breathing, Circulation
4. Emergency: 108, Ambulance: 102
5. Head tilt-chin lift opens airway
6. Jaw thrust for suspected spinal injury
:::
`,
    contentHi: `
# 🚑 प्राथमिक चिकित्सा के सिद्धांत

---

## 📖 प्राथमिक चिकित्सा क्या है?

> **प्राथमिक चिकित्सा** पेशेवर चिकित्सा सहायता आने से पहले घायल या अचानक बीमार व्यक्ति को दी जाने वाली तत्काल देखभाल है।

---

## 🎯 प्राथमिक चिकित्सा के तीन उद्देश्य (PPP)

| उद्देश्य | विवरण |
|:--------|:------|
| **जीवन बचाना** | व्यक्ति को जीवित रखना |
| **बिगड़ने से रोकना** | स्थिति खराब न होने देना |
| **स्वास्थ्य लाभ** | उपचार शुरू करना |

---

## ⚠️ सार्वभौमिक सिद्धांत

### 1. सुरक्षा पहले
:::warning
**आपकी सुरक्षा पहले!** मृत बचावकर्ता किसी की मदद नहीं कर सकता।
:::

खतरों की जांच करें:
- यातायात
- आग
- बिजली
- गैस रिसाव

### 2. और नुकसान न करें
- अनावश्यक रूप से न हिलाएं
- घुसी हुई वस्तुएं न निकालें
- बेहोश को खाना/पानी न दें

### 3. मदद लें
- **108** (आपातकालीन)
- **102** (एम्बुलेंस)

### 4. पीड़ित को आश्वस्त करें
- खुद शांत रहें
- धीरे और आत्मविश्वास से बोलें

---

## 🔍 दृश्य मूल्यांकन (SAFE)

| अक्षर | अर्थ | क्रिया |
|:------|:-----|:------|
| **S** | सुरक्षा | क्या दृश्य सुरक्षित है? |
| **A** | आकलन | कितने पीड़ित? |
| **F** | मदद खोजें | एम्बुलेंस बुलाएं |
| **E** | मूल्यांकन | क्या चोटें हैं? |

---

## 📋 प्राथमिक सर्वेक्षण (DRABC)

### D - खतरा
वातावरण की जांच

### R - प्रतिक्रिया
- कंधे थपथपाएं, पुकारें
- **AVPU स्केल:**
  - **A**lert (सतर्क)
  - **V**oice (आवाज पर)
  - **P**ain (दर्द पर)
  - **U**nresponsive (कोई प्रतिक्रिया नहीं)

### A - वायुमार्ग
- **हेड टिल्ट-चिन लिफ्ट**
- मुंह में रुकावट देखें

### B - श्वसन
**देखें, सुनें, महसूस करें** 10 सेकंड:
- छाती का उठना देखें
- सांस की आवाज सुनें
- गाल पर सांस महसूस करें

### C - परिसंचरण
- नाड़ी जांचें
- गंभीर रक्तस्राव देखें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. PPP = जीवन बचाओ, बिगड़ने से रोको, स्वास्थ्य लाभ
2. सुरक्षा पहले - खतरों की जांच
3. DRABC = खतरा, प्रतिक्रिया, वायुमार्ग, श्वसन, परिसंचरण
4. आपातकालीन: 108, एम्बुलेंस: 102
5. हेड टिल्ट-चिन लिफ्ट वायुमार्ग खोलता है
:::
`
  },
  {
    id: 2,
    titleEn: "CPR & Basic Life Support",
    titleHi: "CPR और बुनियादी जीवन रक्षा",
    contentEn: `
# ❤️ CPR & Basic Life Support

---

## 📖 What is CPR?

> **CPR (Cardiopulmonary Resuscitation)** is an emergency procedure combining chest compressions and rescue breaths to maintain blood flow when the heart stops.

---

## ⚡ Chain of Survival

1. **Early Recognition** - Identify cardiac arrest
2. **Early CPR** - Start compressions immediately
3. **Early Defibrillation** - AED if available
4. **Early Advanced Care** - Hospital treatment

---

## 📋 CPR Steps (CAB)

### C - Compressions

:::success
**High-Quality Compressions:**
- **Rate:** 100-120 per minute
- **Depth:** At least 5 cm (2 inches)
- **Location:** Center of chest, lower half of sternum
- **Allow full recoil** between compressions
- **Minimize interruptions**
:::

### A - Airway
- Head tilt-chin lift
- Remove visible obstructions

### B - Breathing
- Give 2 rescue breaths
- Each breath over 1 second
- Watch for chest rise

---

## 🔢 CPR Ratios

| Age Group | Compression:Breath | Hands |
|:----------|:-------------------|:------|
| **Adult** | 30:2 | Two hands |
| **Child (1-8 yrs)** | 30:2 | One or two hands |
| **Infant (<1 yr)** | 30:2 | Two fingers |

---

## 👶 Infant CPR Differences

| Feature | Adult/Child | Infant |
|:--------|:------------|:-------|
| **Check pulse** | Carotid | Brachial |
| **Compression depth** | 5 cm | 4 cm (1.5 inches) |
| **Hand position** | Heel of hands | Two fingers |
| **Compression location** | Center of chest | Just below nipple line |

---

## 🚫 When to Stop CPR

- Patient recovers (breathing, movement)
- Professional help arrives and takes over
- You are too exhausted to continue
- Scene becomes unsafe
- AED advises shock delivery

---

## 🔌 AED (Automated External Defibrillator)

### Steps to Use AED

1. **Turn ON** the AED
2. **Attach pads** (as shown in pictures)
3. **Don't touch** patient during analysis
4. **Press shock** button if advised
5. **Resume CPR** immediately after shock

:::warning
**Safety:** Make sure no one is touching the patient when delivering shock!
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. CPR = Compressions + Airway + Breathing
2. Rate: 100-120/min
3. Depth: At least 5 cm
4. Ratio: 30:2 (compressions:breaths)
5. Push hard, push fast, full recoil
6. Minimize interruptions
7. Infant: Check brachial pulse, 2 fingers
8. AED: Turn on, attach, analyze, shock, CPR
:::
`,
    contentHi: `
# ❤️ CPR और बुनियादी जीवन रक्षा

---

## 📖 CPR क्या है?

> **CPR** एक आपातकालीन प्रक्रिया है जिसमें छाती के संपीड़न और बचाव श्वास शामिल हैं।

---

## ⚡ उत्तरजीविता की श्रृंखला

1. **प्रारंभिक पहचान** - कार्डियक अरेस्ट पहचानें
2. **प्रारंभिक CPR** - तुरंत संपीड़न शुरू
3. **प्रारंभिक डिफिब्रिलेशन** - AED
4. **प्रारंभिक उन्नत देखभाल** - अस्पताल

---

## 📋 CPR चरण (CAB)

### C - संपीड़न

:::success
**उच्च-गुणवत्ता संपीड़न:**
- **दर:** 100-120 प्रति मिनट
- **गहराई:** कम से कम 5 सेमी
- **स्थान:** छाती का केंद्र
- **पूर्ण वापसी** की अनुमति दें
- **रुकावट कम** करें
:::

### A - वायुमार्ग
- हेड टिल्ट-चिन लिफ्ट
- दृश्य रुकावटें हटाएं

### B - श्वसन
- 2 बचाव श्वास दें
- प्रत्येक 1 सेकंड में
- छाती का उठना देखें

---

## 🔢 CPR अनुपात

| आयु समूह | संपीड़न:श्वास | हाथ |
|:---------|:-------------|:----|
| **वयस्क** | 30:2 | दो हाथ |
| **बच्चा (1-8 वर्ष)** | 30:2 | एक या दो हाथ |
| **शिशु (<1 वर्ष)** | 30:2 | दो उंगलियां |

---

## 👶 शिशु CPR अंतर

| विशेषता | वयस्क/बच्चा | शिशु |
|:--------|:----------|:------|
| **नाड़ी जांच** | कैरोटिड | ब्रेकियल |
| **संपीड़न गहराई** | 5 सेमी | 4 सेमी |
| **हाथ की स्थिति** | हथेली | दो उंगलियां |

---

## 🚫 CPR कब रोकें

- रोगी ठीक हो जाए (श्वास, गति)
- पेशेवर मदद आ जाए
- आप थक जाएं
- दृश्य असुरक्षित हो जाए
- AED शॉक की सलाह दे

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. CPR = संपीड़न + वायुमार्ग + श्वसन
2. दर: 100-120/मिनट
3. गहराई: कम से कम 5 सेमी
4. अनुपात: 30:2
5. जोर से दबाएं, तेज दबाएं
6. रुकावट कम करें
7. शिशु: ब्रेकियल नाड़ी, 2 उंगलियां
:::
`
  },
  {
    id: 3,
    titleEn: "Bleeding & Wound Care",
    titleHi: "रक्तस्राव और घाव देखभाल",
    contentEn: `
# 🩸 Bleeding & Wound Care

---

## 📖 Types of Bleeding

| Type | Source | Color | Flow |
|:-----|:-------|:------|:-----|
| **Arterial** | Arteries | Bright red | Spurting |
| **Venous** | Veins | Dark red | Steady flow |
| **Capillary** | Capillaries | Red | Oozing |

:::danger
**Arterial bleeding is most dangerous!** Requires immediate action.
:::

---

## 🛑 Controlling External Bleeding

### Step-by-Step

1. **Apply Direct Pressure**
   - Use clean cloth/gauze
   - Press firmly for 10-15 minutes
   - Don't remove to check

2. **Elevate the Limb**
   - Raise above heart level
   - Reduces blood flow to area

3. **Apply Pressure Bandage**
   - Wrap firmly (not too tight)
   - Check for pulse below bandage

4. **Pressure Points (if needed)**
   - Brachial artery (arm bleeding)
   - Femoral artery (leg bleeding)

---

## 🔴 Pressure Points

| Location | Controls Bleeding In |
|:---------|:--------------------|
| **Brachial** (inner arm) | Arm, forearm, hand |
| **Femoral** (groin) | Thigh, leg, foot |
| **Temporal** (temple) | Scalp |
| **Carotid** (neck) | Head (use carefully!) |

---

## 🩹 Wound Types

| Type | Cause | Characteristics |
|:-----|:------|:----------------|
| **Incision** | Sharp object | Clean, straight edges |
| **Laceration** | Tearing | Jagged edges |
| **Abrasion** | Scraping | Surface damage |
| **Puncture** | Pointed object | Small opening, deep |
| **Avulsion** | Tearing away | Skin torn off |
| **Amputation** | Cutting off | Body part severed |

---

## 🧴 Wound Cleaning Steps

1. **Wash hands** (or wear gloves)
2. **Clean wound** with clean water
3. **Remove debris** gently
4. **Apply antiseptic** (povidone-iodine)
5. **Cover** with sterile dressing
6. **Watch for infection** signs

---

## ⚠️ Signs of Wound Infection

:::warning
**SHARP Signs:**
- **S**welling
- **H**eat
- **A**rea is red
- **R**ed streaks spreading
- **P**us/discharge
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Arterial = bright red, spurting (most dangerous)
2. Direct pressure FIRST for 10-15 min
3. Elevate injured limb
4. Brachial pressure point for arm
5. Femoral pressure point for leg
6. Don't remove embedded objects
7. Signs of infection: Swelling, Heat, Redness, Pus
:::
`,
    contentHi: `
# 🩸 रक्तस्राव और घाव देखभाल

---

## 📖 रक्तस्राव के प्रकार

| प्रकार | स्रोत | रंग | प्रवाह |
|:-------|:-----|:----|:------|
| **धमनी** | धमनियां | चमकीला लाल | फुहारा |
| **शिरा** | शिराएं | गहरा लाल | स्थिर प्रवाह |
| **केशिका** | केशिकाएं | लाल | रिसाव |

:::danger
**धमनी रक्तस्राव सबसे खतरनाक!** तत्काल कार्रवाई आवश्यक।
:::

---

## 🛑 बाहरी रक्तस्राव नियंत्रण

### चरण-दर-चरण

1. **सीधा दबाव लगाएं**
   - साफ कपड़े का उपयोग करें
   - 10-15 मिनट तक दबाएं
   - जांचने के लिए न हटाएं

2. **अंग को ऊपर उठाएं**
   - हृदय स्तर से ऊपर
   - रक्त प्रवाह कम करता है

3. **दबाव पट्टी लगाएं**
   - मजबूती से लपेटें
   - नीचे नाड़ी जांचें

4. **दबाव बिंदु (यदि आवश्यक)**
   - ब्रेकियल (बांह)
   - फेमोरल (पैर)

---

## 🔴 दबाव बिंदु

| स्थान | रक्तस्राव नियंत्रण |
|:------|:-----------------|
| **ब्रेकियल** | बांह, हाथ |
| **फेमोरल** | जांघ, पैर |
| **टेम्पोरल** | खोपड़ी |

---

## 🩹 घाव के प्रकार

| प्रकार | कारण | विशेषताएं |
|:-------|:-----|:---------|
| **छेदन** | तेज वस्तु | साफ किनारे |
| **फटा घाव** | फटना | असमान किनारे |
| **खरोंच** | रगड़ | सतही क्षति |
| **पंचर** | नुकीली वस्तु | छोटा छेद, गहरा |

---

## 🧴 घाव सफाई चरण

1. **हाथ धोएं** (या दस्ताने पहनें)
2. **घाव साफ करें** साफ पानी से
3. **मलबा हटाएं** धीरे से
4. **एंटीसेप्टिक** लगाएं
5. **ड्रेसिंग** से ढकें
6. **संक्रमण के लक्षण** देखें

---

## ⚠️ घाव संक्रमण के लक्षण

:::warning
**लक्षण:**
- सूजन
- गर्मी
- लालिमा
- लाल धारियां फैलना
- मवाद/स्राव
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. धमनी = चमकीला लाल, फुहारा (सबसे खतरनाक)
2. पहले सीधा दबाव 10-15 मिनट
3. घायल अंग ऊपर उठाएं
4. ब्रेकियल = बांह के लिए
5. फेमोरल = पैर के लिए
6. घुसी वस्तुएं न निकालें
7. संक्रमण: सूजन, गर्मी, लालिमा, मवाद
:::
`
  },
  {
    id: 4,
    titleEn: "Fractures & Splinting",
    titleHi: "अस्थि भंग और स्प्लिंटिंग",
    contentEn: `
# 🦴 Fractures & Splinting

---

## 📖 What is a Fracture?

> A **fracture** is a break or crack in a bone.

---

## 🔍 Types of Fractures

| Type | Description |
|:-----|:------------|
| **Closed (Simple)** | Bone broken, skin intact |
| **Open (Compound)** | Bone pierces skin |
| **Greenstick** | Incomplete break (children) |
| **Comminuted** | Bone shattered into pieces |
| **Hairline** | Small crack |

:::danger
**Open fractures are emergencies!** High risk of infection.
:::

---

## 🔎 Signs & Symptoms

| Sign | Description |
|:-----|:------------|
| **Pain** | At fracture site |
| **Swelling** | Around injured area |
| **Deformity** | Unnatural shape/angle |
| **Loss of function** | Cannot move |
| **Crepitus** | Grating sound |
| **Bruising** | Discoloration |

:::tip
**Remember: DOTS**
- **D**eformity
- **O**pen wound
- **T**enderness
- **S**welling
:::

---

## 🩹 First Aid for Fractures

### General Principles

1. **Immobilize** - Don't move the fracture
2. **Support** - Above and below fracture site
3. **Ice** - Reduce swelling (wrapped, not direct)
4. **Elevate** - If possible
5. **Treat for shock** - Keep warm, calm

### What NOT to Do

- Don't try to straighten the bone
- Don't move unnecessarily
- Don't test range of motion
- Don't apply heat

---

## 🪵 Splinting Techniques

### Purpose of Splint
- Immobilize the injury
- Prevent further damage
- Reduce pain
- Allow safe transport

### Splinting Rules

:::success
**Key Principles:**
1. Splint in position found
2. Immobilize joint above AND below fracture
3. Check circulation before and after
4. Pad bony areas
5. Tie firmly but not too tight
:::

### Improvised Splints

| Material | Use For |
|:---------|:--------|
| **Cardboard** | Arm, wrist |
| **Newspapers/Magazines** | Arm, leg |
| **Pillow** | Ankle, foot |
| **Wooden boards** | Long bones |
| **Body splinting** | Arm to chest, leg to leg |

---

## 🦶 Specific Fractures

| Location | Splinting Method |
|:---------|:-----------------|
| **Arm** | Sling + swathe |
| **Forearm** | Splint both sides + sling |
| **Finger** | Tape to adjacent finger |
| **Leg** | Long splint, both sides |
| **Ankle** | Pillow splint |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Closed = skin intact, Open = bone through skin
2. DOTS = Deformity, Open wound, Tenderness, Swelling
3. Immobilize above AND below fracture
4. Splint in position found
5. Check circulation before and after splinting
6. Open fractures = emergency (infection risk)
7. Don't straighten or move unnecessarily
:::
`,
    contentHi: `
# 🦴 अस्थि भंग और स्प्लिंटिंग

---

## 📖 अस्थि भंग क्या है?

> **अस्थि भंग** हड्डी में टूटना या दरार है।

---

## 🔍 अस्थि भंग के प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **बंद (साधारण)** | हड्डी टूटी, त्वचा बरकरार |
| **खुला (यौगिक)** | हड्डी त्वचा से बाहर |
| **ग्रीनस्टिक** | अधूरा टूटना (बच्चों में) |
| **कम्युनिटेड** | टुकड़ों में बिखरी |
| **हेयरलाइन** | छोटी दरार |

:::danger
**खुले अस्थि भंग आपातकालीन हैं!** संक्रमण का उच्च जोखिम।
:::

---

## 🔎 लक्षण और संकेत

| संकेत | विवरण |
|:------|:------|
| **दर्द** | भंग स्थल पर |
| **सूजन** | घायल क्षेत्र के आसपास |
| **विकृति** | अप्राकृतिक आकार |
| **कार्य हानि** | हिलाने में असमर्थ |
| **क्रेपिटस** | घर्षण की आवाज |
| **चोट के निशान** | रंग परिवर्तन |

:::tip
**याद रखें: DOTS**
- **D**eformity (विकृति)
- **O**pen wound (खुला घाव)
- **T**enderness (कोमलता)
- **S**welling (सूजन)
:::

---

## 🩹 अस्थि भंग के लिए प्राथमिक चिकित्सा

### सामान्य सिद्धांत

1. **स्थिर करें** - भंग को न हिलाएं
2. **सहारा** - भंग के ऊपर और नीचे
3. **बर्फ** - सूजन कम करें
4. **ऊंचा** - यदि संभव हो
5. **शॉक का इलाज** - गर्म, शांत रखें

### क्या न करें

- हड्डी सीधी करने की कोशिश न करें
- अनावश्यक रूप से न हिलाएं
- गति की सीमा न जांचें
- गर्मी न लगाएं

---

## 🪵 स्प्लिंटिंग तकनीक

### स्प्लिंट के नियम

:::success
**मुख्य सिद्धांत:**
1. जैसा मिले वैसे स्प्लिंट करें
2. भंग के ऊपर और नीचे जोड़ स्थिर करें
3. पहले और बाद में परिसंचरण जांचें
4. हड्डी वाले क्षेत्रों में पैडिंग
5. मजबूती से बांधें, बहुत कसकर नहीं
:::

### सुधारित स्प्लिंट

| सामग्री | उपयोग |
|:--------|:------|
| **कार्डबोर्ड** | बांह, कलाई |
| **अखबार/पत्रिकाएं** | बांह, पैर |
| **तकिया** | टखना, पैर |
| **लकड़ी के तख्ते** | लंबी हड्डियां |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. बंद = त्वचा बरकरार, खुला = हड्डी बाहर
2. DOTS = विकृति, खुला घाव, कोमलता, सूजन
3. भंग के ऊपर और नीचे स्थिर करें
4. जैसा मिले वैसे स्प्लिंट करें
5. स्प्लिंटिंग से पहले/बाद परिसंचरण जांचें
6. खुला भंग = आपातकालीन
:::
`
  },
  {
    id: 5,
    titleEn: "Burns, Bites & Poisoning",
    titleHi: "जलना, काटना और विषाक्तता",
    contentEn: `
# 🔥 Burns, Bites & Poisoning

---

## 🔥 Burns

### Classification by Depth

| Degree | Depth | Appearance | Pain |
|:-------|:------|:-----------|:-----|
| **1st (Superficial)** | Epidermis | Red, dry | Painful |
| **2nd (Partial)** | Dermis | Blisters, wet | Very painful |
| **3rd (Full)** | All layers | White/charred | Painless |

### Rule of Nines (Adult)

| Body Part | Percentage |
|:----------|:-----------|
| Head & Neck | 9% |
| Each Arm | 9% |
| Front Torso | 18% |
| Back Torso | 18% |
| Each Leg | 18% |
| Perineum | 1% |

### First Aid for Burns

:::success
**COOL, COVER, CALL**
1. **Cool** - Running water 10-20 minutes
2. **Cover** - Clean, non-stick dressing
3. **Call** - Get medical help
:::

### Do NOT:
- Don't apply ice directly
- Don't break blisters
- Don't apply butter/toothpaste
- Don't remove stuck clothing

---

## 🐍 Snake Bite

### First Aid

1. **Keep calm** - Reduces venom spread
2. **Immobilize** - Keep bitten limb still
3. **Remove jewelry** - Before swelling
4. **Position** - Keep limb below heart level
5. **Transport** - To hospital immediately

### Do NOT:
- Don't cut the wound
- Don't suck venom
- Don't apply tourniquet
- Don't apply ice
- Don't give alcohol

:::warning
**Remember the snake appearance** - Helps identify antivenom needed!
:::

---

## 🐕 Dog Bite

### First Aid

1. **Clean wound** - Soap and running water 10-15 min
2. **Apply antiseptic** - Povidone-iodine
3. **Cover** - Sterile dressing
4. **Seek medical care** - For ARV (Anti-Rabies Vaccine)

### Rabies Prevention

| Category | Wound Type | Treatment |
|:---------|:-----------|:----------|
| **I** | Touch, lick on intact skin | No treatment |
| **II** | Scratch, minor bite | ARV |
| **III** | Deep bite, lick on broken skin | ARV + RIG |

---

## ☠️ Poisoning

### Types

| Route | Examples |
|:------|:---------|
| **Ingested** | Pesticides, medicines, chemicals |
| **Inhaled** | Carbon monoxide, fumes |
| **Absorbed** | Through skin (pesticides) |
| **Injected** | Snake bite, drugs |

### First Aid for Ingested Poison

1. **Don't induce vomiting** (unless advised)
2. **Identify the poison** if possible
3. **Call Poison Control** or hospital
4. **Save the container/sample**
5. **Monitor vital signs**

:::danger
**Never induce vomiting for:**
- Corrosives (acid, alkali)
- Petroleum products
- Unconscious patient
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Burns: Cool 10-20 min, Cover, Call
2. Rule of Nines: Head 9%, Arm 9%, Leg 18%
3. Snake bite: Immobilize, don't cut/suck
4. Dog bite: Wash 10-15 min, ARV needed
5. Category III = ARV + RIG
6. Don't induce vomiting for corrosives
7. Keep calm, transport quickly
:::
`,
    contentHi: `
# 🔥 जलना, काटना और विषाक्तता

---

## 🔥 जलना

### गहराई द्वारा वर्गीकरण

| डिग्री | गहराई | दिखावट | दर्द |
|:-------|:------|:-------|:-----|
| **1st (सतही)** | एपिडर्मिस | लाल, सूखा | दर्दनाक |
| **2nd (आंशिक)** | डर्मिस | छाले, गीला | बहुत दर्दनाक |
| **3rd (पूर्ण)** | सभी परतें | सफेद/जला | दर्दरहित |

### नाइन का नियम (वयस्क)

| शरीर का भाग | प्रतिशत |
|:-----------|:-------|
| सिर और गर्दन | 9% |
| प्रत्येक बांह | 9% |
| सामने धड़ | 18% |
| पीछे धड़ | 18% |
| प्रत्येक पैर | 18% |

### जलने के लिए प्राथमिक चिकित्सा

:::success
**ठंडा, ढकें, बुलाएं**
1. **ठंडा** - बहता पानी 10-20 मिनट
2. **ढकें** - साफ, नॉन-स्टिक ड्रेसिंग
3. **बुलाएं** - चिकित्सा सहायता
:::

### क्या न करें:
- सीधे बर्फ न लगाएं
- छाले न फोड़ें
- मक्खन/टूथपेस्ट न लगाएं

---

## 🐍 सांप का काटना

### प्राथमिक चिकित्सा

1. **शांत रहें** - जहर फैलाव कम
2. **स्थिर करें** - काटे अंग को न हिलाएं
3. **गहने हटाएं** - सूजन से पहले
4. **स्थिति** - अंग हृदय स्तर से नीचे
5. **परिवहन** - तुरंत अस्पताल

### क्या न करें:
- घाव न काटें
- जहर न चूसें
- टूर्निकेट न लगाएं
- बर्फ न लगाएं

:::warning
**सांप की पहचान याद रखें** - एंटीवेनम के लिए!
:::

---

## 🐕 कुत्ते का काटना

### प्राथमिक चिकित्सा

1. **घाव साफ करें** - साबुन और पानी 10-15 मिनट
2. **एंटीसेप्टिक** लगाएं
3. **ढकें** - बाँझ ड्रेसिंग
4. **चिकित्सा** - ARV के लिए

### रेबीज रोकथाम

| श्रेणी | घाव प्रकार | उपचार |
|:-------|:----------|:------|
| **I** | छूना, अखंड त्वचा पर चाटना | उपचार नहीं |
| **II** | खरोंच, मामूली काटना | ARV |
| **III** | गहरा काटना | ARV + RIG |

---

## ☠️ विषाक्तता

### प्राथमिक चिकित्सा

1. **उल्टी न कराएं** (जब तक सलाह न हो)
2. **जहर पहचानें** यदि संभव हो
3. **अस्पताल बुलाएं**
4. **कंटेनर/नमूना** बचाएं
5. **महत्वपूर्ण संकेत** देखें

:::danger
**इनके लिए उल्टी न कराएं:**
- संक्षारक (अम्ल, क्षार)
- पेट्रोलियम उत्पाद
- बेहोश रोगी
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. जलना: 10-20 मिनट ठंडा, ढकें, बुलाएं
2. नाइन का नियम: सिर 9%, बांह 9%, पैर 18%
3. सांप: स्थिर करें, न काटें/चूसें
4. कुत्ता: 10-15 मिनट धोएं, ARV
5. श्रेणी III = ARV + RIG
6. संक्षारक के लिए उल्टी न कराएं
:::
`
  },
  {
    id: 6,
    titleEn: "Fractures, Dislocations & Sprains",
    titleHi: "अस्थि भंग, विस्थापन और मोच",
    contentEn: `
# 🦴 Fractures, Dislocations & Sprains

---

## 📖 Types of Musculoskeletal Injuries

| Injury | Definition | Structures Involved |
|:-------|:-----------|:--------------------|
| **Fracture** | Break in bone | Bone |
| **Dislocation** | Bone displaced from joint | Joint, ligaments |
| **Sprain** | Ligament stretched/torn | Ligaments |
| **Strain** | Muscle/tendon stretched/torn | Muscles, tendons |

---

## 🔍 Types of Fractures

### By Skin Integrity

| Type | Description | Risk |
|:-----|:------------|:-----|
| **Closed (Simple)** | Skin intact | Lower infection risk |
| **Open (Compound)** | Bone pierces skin | HIGH infection risk |

:::danger
**Open fractures are surgical emergencies** - High risk of infection!
:::

### By Break Pattern

| Type | Description |
|:-----|:------------|
| **Complete** | Bone broken all the way through |
| **Greenstick** | Partial break (common in children) |
| **Comminuted** | Multiple fragments |
| **Spiral** | Twisting break pattern |

---

## 🔎 Signs & Symptoms - The 6 P's

| Sign | Description |
|:-----|:------------|
| **P**ain | At fracture site, worse with movement |
| **P**allor | Pale skin (shock or poor circulation) |
| **P**aralysis | Inability to move |
| **P**aresthesia | Numbness/tingling (nerve involvement) |
| **P**ulselessness | No pulse below injury |
| **P**ressure | Swelling |

:::tip
**DOTS Assessment:**
- **D**eformity
- **O**pen wound
- **T**enderness
- **S**welling
:::

---

## 🩹 First Aid for Fractures

### General Principles

1. **Immobilize** - Don't move the fracture
2. **Support** - Above and below fracture site
3. **Ice** - Reduce swelling (wrapped, not direct)
4. **Elevate** - If possible
5. **Treat for shock** - Keep warm, calm

### Splinting Rules

:::success
**Key Principles:**
1. Splint in position found
2. Immobilize joint above AND below fracture
3. Check circulation before and after
4. Pad bony areas
5. Tie firmly but not too tight
:::

---

## 🪵 Improvised Splints

| Material | Use For |
|:---------|:--------|
| **Cardboard** | Arm, wrist |
| **Newspapers/Magazines** | Arm, leg |
| **Pillow** | Ankle, foot |
| **Wooden boards** | Long bones |
| **Body splinting** | Arm to chest, leg to leg |

---

## 🚨 Managing Open Fractures

1. **Control bleeding** - Direct pressure around (not on) wound
2. **Do NOT push bone back in**
3. **Cover wound** - Sterile or clean dressing, moistened if possible
4. **Immobilize** - Splint as for closed fracture
5. **Treat for shock**
6. **Rapid transport** - This is an EMERGENCY

---

## 🔄 Dislocations

### Common Sites
- Shoulder (most common)
- Fingers
- Elbow
- Knee

### First Aid

:::warning
**DO NOT attempt to relocate the joint!**
:::

1. Immobilize in position found
2. Apply ice (wrapped)
3. Check circulation below injury
4. Support and transport to hospital

---

## 💪 Sprains & Strains - RICE Treatment

| Letter | Action |
|:-------|:-------|
| **R** | Rest - Stop using injured part |
| **I** | Ice - 20 min on, 20 min off |
| **C** | Compression - Elastic bandage |
| **E** | Elevation - Raise above heart level |

### Grading

| Grade | Severity | Signs |
|:------|:---------|:------|
| **I** (Mild) | Stretched | Mild pain, can bear weight |
| **II** (Moderate) | Partial tear | Moderate pain, difficulty weight bearing |
| **III** (Severe) | Complete tear | Severe pain, cannot bear weight |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 6 P's: Pain, Pallor, Paralysis, Paresthesia, Pulselessness, Pressure
2. Closed = skin intact, Open = bone through skin
3. DOTS = Deformity, Open wound, Tenderness, Swelling
4. Immobilize joint above AND below fracture
5. Splint in position found
6. Check circulation before and after splinting
7. RICE = Rest, Ice, Compression, Elevation
8. Open fractures = emergency, high infection risk
:::
`,
    contentHi: `
# 🦴 अस्थि भंग, विस्थापन और मोच

---

## 📖 मस्कुलोस्केलेटल चोटों के प्रकार

| चोट | परिभाषा | प्रभावित संरचनाएं |
|:----|:--------|:-----------------|
| **अस्थि भंग** | हड्डी में टूट | हड्डी |
| **विस्थापन** | जोड़ से हड्डी हटना | जोड़, स्नायुबंधन |
| **मोच** | स्नायुबंधन खिंचना/फटना | स्नायुबंधन |
| **खिंचाव** | मांसपेशी/कण्डरा खिंचना | मांसपेशियां |

---

## 🔍 अस्थि भंग के प्रकार

### त्वचा अखंडता द्वारा

| प्रकार | विवरण | जोखिम |
|:-------|:------|:------|
| **बंद (साधारण)** | त्वचा बरकरार | कम संक्रमण जोखिम |
| **खुला (यौगिक)** | हड्डी त्वचा से बाहर | उच्च संक्रमण जोखिम |

:::danger
**खुले अस्थि भंग सर्जिकल आपात हैं** - संक्रमण का उच्च जोखिम!
:::

---

## 🔎 लक्षण और संकेत - 6 P's

| संकेत | विवरण |
|:------|:------|
| **P**ain (दर्द) | भंग स्थल पर |
| **P**allor (पीलापन) | पीली त्वचा |
| **P**aralysis (पक्षाघात) | हिलाने में असमर्थ |
| **P**aresthesia (संवेदनहीनता) | सुन्नपन |
| **P**ulselessness (नाड़ीहीनता) | चोट के नीचे नाड़ी नहीं |
| **P**ressure (दबाव) | सूजन |

:::tip
**DOTS मूल्यांकन:**
- **D**eformity (विकृति)
- **O**pen wound (खुला घाव)
- **T**enderness (कोमलता)
- **S**welling (सूजन)
:::

---

## 🩹 अस्थि भंग के लिए प्राथमिक चिकित्सा

### सामान्य सिद्धांत

1. **स्थिर करें** - भंग को न हिलाएं
2. **सहारा** - भंग के ऊपर और नीचे
3. **बर्फ** - सूजन कम करें
4. **ऊंचा** - यदि संभव हो
5. **शॉक का इलाज** - गर्म, शांत रखें

### स्प्लिंटिंग नियम

:::success
**मुख्य सिद्धांत:**
1. जैसा मिले वैसे स्प्लिंट करें
2. भंग के ऊपर और नीचे जोड़ स्थिर करें
3. पहले और बाद में परिसंचरण जांचें
4. हड्डी वाले क्षेत्रों में पैडिंग
5. मजबूती से बांधें, बहुत कसकर नहीं
:::

---

## 🪵 सुधारित स्प्लिंट

| सामग्री | उपयोग |
|:--------|:------|
| **कार्डबोर्ड** | बांह, कलाई |
| **अखबार/पत्रिकाएं** | बांह, पैर |
| **तकिया** | टखना, पैर |
| **लकड़ी के तख्ते** | लंबी हड्डियां |
| **शरीर स्प्लिंटिंग** | बांह से छाती, पैर से पैर |

---

## 🔄 विस्थापन (Dislocation)

### प्राथमिक चिकित्सा

:::warning
**जोड़ को वापस लगाने की कोशिश न करें!**
:::

1. जैसा मिले वैसे स्थिर करें
2. बर्फ लगाएं (लपेटकर)
3. चोट के नीचे परिसंचरण जांचें
4. अस्पताल ले जाएं

---

## 💪 मोच और खिंचाव - RICE उपचार

| अक्षर | क्रिया |
|:------|:------|
| **R** | आराम - घायल भाग का उपयोग बंद |
| **I** | बर्फ - 20 मिनट लगाएं, 20 मिनट हटाएं |
| **C** | संपीड़न - लचीली पट्टी |
| **E** | ऊंचाई - हृदय स्तर से ऊपर उठाएं |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. 6 P's: दर्द, पीलापन, पक्षाघात, संवेदनहीनता, नाड़ीहीनता, दबाव
2. बंद = त्वचा बरकरार, खुला = हड्डी बाहर
3. DOTS = विकृति, खुला घाव, कोमलता, सूजन
4. भंग के ऊपर और नीचे स्थिर करें
5. जैसा मिले वैसे स्प्लिंट करें
6. RICE = आराम, बर्फ, संपीड़न, ऊंचाई
:::
`
  },
  {
    id: 7,
    titleEn: "Burns & Scalds (Advanced)",
    titleHi: "जलना और झुलसना (उन्नत)",
    contentEn: `
# 🔥 Burns & Scalds - Advanced Management

---

## 📖 Understanding Burns

> **Burns** are tissue damage caused by heat, chemicals, electricity, or radiation.

| Type | Cause | Common Scenarios |
|:-----|:------|:-----------------|
| **Burn** | Dry heat | Fire, hot metal, flames |
| **Scald** | Wet heat | Hot water, steam, hot oil |

:::info
**India has one of the highest burn incidence rates globally.** Women and children are at greatest risk due to cooking-related accidents.
:::

---

## 🔬 Classification by Depth

| Feature | Superficial (1st) | Partial Thickness (2nd) | Full Thickness (3rd) |
|:--------|:------------------|:------------------------|:---------------------|
| **Layers** | Epidermis only | Epidermis + dermis | All layers + deeper |
| **Color** | Red | Pink/red, mottled | White, brown, black |
| **Blisters** | None | Present | None (skin destroyed) |
| **Pain** | Painful | Very painful | Painless (nerves destroyed) |
| **Texture** | Dry | Moist, weeping | Dry, leathery |
| **Healing** | 3-7 days | 2-4 weeks | Requires skin grafting |

---

## 📏 Rule of Nines (Wallace's Rule)

| Body Part | Adult % | Child % | Infant % |
|:----------|:--------|:--------|:---------|
| Head & neck | 9% | 18% | 18% |
| Each arm | 9% | 9% | 9% |
| Front torso | 18% | 18% | 18% |
| Back torso | 18% | 18% | 18% |
| Each leg | 18% | 14% | 14% |
| Perineum | 1% | 1% | 1% |

### Palmar Method
> Patient's palm (including fingers) = approximately **1% TBSA**

---

## ⚡ Immediate First Aid Protocol

:::success
**STOP, COOL, COVER, CALL**

1. **STOP** the burning process
   - Remove from heat source
   - Extinguish flames (stop, drop, roll)
   - Remove hot clothing (if not stuck)
   - Remove jewelry before swelling

2. **COOL** the burn
   - Running water for **20 minutes**
   - Cool water (NOT ice cold)
   - Can start up to 3 hours after burn

3. **COVER** the burn
   - Clean/sterile dressing
   - Cling wrap (plastic film) is ideal
   - NO cotton wool (sticks to wound)

4. **CALL** for help if criteria met
:::

---

## 🚫 What NOT to Do

| ❌ Don't | Why |
|:---------|:----|
| Apply ice or ice water | Causes frostbite |
| Apply butter, ghee, oil, toothpaste | Traps heat, increases infection |
| Break blisters | Protective barrier |
| Remove stuck clothing | Causes more damage |
| Use cotton wool | Fibers stick to wound |
| Over-cool the patient | Risk of hypothermia |

---

## ⚗️ Chemical Burns

### First Aid

1. **Safety first** - Wear gloves if available
2. **Remove contaminated clothing**
3. **Brush off dry chemicals BEFORE water**
4. **Irrigate extensively** - 20-60 minutes
5. **Eye exposure** - Irrigate continuously, urgent referral

:::warning
**Keep container/label for hospital identification!**
:::

---

## ⚡ Electrical Burns

:::danger
**Electrical burns are often more serious than they appear externally!**
:::

### First Aid

1. **Ensure scene safety** - Turn off power FIRST
2. **Check for cardiac arrest** - Electricity causes arrhythmias
3. **Treat visible burns** - Cool and cover
4. **Monitor for delayed complications**
5. **ALL electrical burns need hospital evaluation**

---

## 🚨 Hospital Referral Criteria

### Refer Immediately If:

**Size Criteria:**
- Adults: >10% TBSA partial thickness
- Children/elderly: >5% TBSA partial thickness
- Any full thickness burn

**Location Criteria:**
- Face, neck, airway
- Hands, feet
- Genitals, perineum
- Major joints
- Circumferential burns

**Type Criteria:**
- All electrical burns
- All chemical burns
- Inhalation injury suspected

**Patient Criteria:**
- Children under 5 years
- Elderly over 60 years
- Pregnant women
- Pre-existing illness

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Cool running water for 20 minutes
2. Rule of Nines: Head 9%, Arm 9%, Leg 18%
3. Palm = 1% TBSA
4. NO ice, butter, toothpaste
5. Don't break blisters
6. Chemical burns: Brush dry chemicals first
7. ALL electrical burns need hospital evaluation
8. Refer if >10% TBSA (adult) or >5% (child/elderly)
:::
`,
    contentHi: `
# 🔥 जलना और झुलसना - उन्नत प्रबंधन

---

## 📖 जलने को समझना

> **जलना** गर्मी, रसायन, बिजली, या विकिरण के कारण ऊतक क्षति है।

| प्रकार | कारण | सामान्य परिदृश्य |
|:-------|:-----|:----------------|
| **जलना** | सूखी गर्मी | आग, गर्म धातु |
| **झुलसना** | गीली गर्मी | गर्म पानी, भाप, गर्म तेल |

:::info
**भारत में जलने की उच्चतम दर है।** खाना पकाने की दुर्घटनाओं के कारण महिलाएं और बच्चे सबसे अधिक जोखिम में हैं।
:::

---

## 🔬 गहराई द्वारा वर्गीकरण

| विशेषता | सतही (1st) | आंशिक (2nd) | पूर्ण (3rd) |
|:--------|:-----------|:------------|:-----------|
| **परतें** | केवल एपिडर्मिस | एपिडर्मिस + डर्मिस | सभी परतें |
| **रंग** | लाल | गुलाबी/लाल | सफेद, भूरा, काला |
| **छाले** | नहीं | मौजूद | नहीं |
| **दर्द** | दर्दनाक | बहुत दर्दनाक | दर्दरहित |
| **उपचार** | 3-7 दिन | 2-4 सप्ताह | स्किन ग्राफ्टिंग |

---

## 📏 नाइन का नियम

| शरीर का भाग | वयस्क % | बच्चा % | शिशु % |
|:-----------|:--------|:-------|:-------|
| सिर और गर्दन | 9% | 18% | 18% |
| प्रत्येक बांह | 9% | 9% | 9% |
| सामने धड़ | 18% | 18% | 18% |
| पीछे धड़ | 18% | 18% | 18% |
| प्रत्येक पैर | 18% | 14% | 14% |

### पामर विधि
> रोगी की हथेली = लगभग **1% TBSA**

---

## ⚡ तत्काल प्राथमिक चिकित्सा

:::success
**रोकें, ठंडा करें, ढकें, बुलाएं**

1. **रोकें** जलने की प्रक्रिया
   - गर्मी स्रोत से हटाएं
   - लपटें बुझाएं
   - गर्म कपड़े हटाएं
   - गहने हटाएं

2. **ठंडा करें**
   - बहता पानी **20 मिनट**
   - ठंडा पानी (बर्फ का नहीं)

3. **ढकें**
   - साफ/बाँझ ड्रेसिंग
   - क्लिंग रैप आदर्श है

4. **बुलाएं** मदद के लिए
:::

---

## 🚫 क्या न करें

| ❌ न करें | क्यों |
|:---------|:------|
| बर्फ लगाना | शीतदंश |
| मक्खन, घी, तेल, टूथपेस्ट | गर्मी फंसाता है |
| छाले फोड़ना | सुरक्षात्मक बाधा |
| चिपके कपड़े हटाना | अधिक क्षति |

---

## ⚗️ रासायनिक जलना

### प्राथमिक चिकित्सा

1. **सुरक्षा पहले** - दस्ताने पहनें
2. **दूषित कपड़े हटाएं**
3. **सूखे रसायन पहले ब्रश करें**
4. **व्यापक सिंचाई** - 20-60 मिनट

---

## ⚡ विद्युत जलना

:::danger
**विद्युत जलना बाहरी रूप से दिखने से अधिक गंभीर होता है!**
:::

1. **दृश्य सुरक्षा** - पहले बिजली बंद करें
2. **कार्डियक अरेस्ट जांचें**
3. **दृश्य जलन का इलाज करें**
4. **सभी विद्युत जलन को अस्पताल मूल्यांकन चाहिए**

---

## 🚨 अस्पताल रेफरल मानदंड

**तुरंत रेफर करें:**
- वयस्क: >10% TBSA
- बच्चे/बुजुर्ग: >5% TBSA
- कोई भी पूर्ण मोटाई जलना
- चेहरा, हाथ, पैर, जननांग
- सभी विद्युत/रासायनिक जलन

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. 20 मिनट ठंडा बहता पानी
2. नाइन का नियम: सिर 9%, बांह 9%, पैर 18%
3. हथेली = 1% TBSA
4. बर्फ, मक्खन, टूथपेस्ट नहीं
5. छाले न फोड़ें
6. सभी विद्युत जलन को अस्पताल जाना चाहिए
:::
`
  },
  {
    id: 8,
    titleEn: "Bites & Stings (Snake, Dog, Insect)",
    titleHi: "काटना और डंक (सांप, कुत्ता, कीड़े)",
    contentEn: `
# 🐍 Bites & Stings - Complete Guide

---

## 🐍 Snake Bites

### The "Big Four" Venomous Snakes in India

| Snake | Hindi Name | Venom Type | Key Features |
|:------|:-----------|:-----------|:-------------|
| **Indian Cobra** | नाग | Neurotoxic | Hood, spectacle marking |
| **Common Krait** | बंगारस | Neurotoxic | Blue-black with white bands |
| **Russell's Viper** | कोरीवाला | Hemotoxic | Chain pattern, triangular head |
| **Saw-scaled Viper** | फुर्सा | Hemotoxic | Small, saw-like scales |

:::danger
**India accounts for nearly half of the world's snakebite deaths** (~58,000 annually). Most deaths occur due to delayed treatment.
:::

---

## 🔍 Signs by Venom Type

### Neurotoxic (Cobra, Krait)

| Timeline | Signs |
|:---------|:------|
| **0-2 hours** | Drooping eyelids (ptosis) ← EARLIEST SIGN, double vision |
| **2-6 hours** | Progressive muscle weakness, difficulty breathing |
| **Without treatment** | Respiratory paralysis, death |

### Hemotoxic (Vipers)

| Timeline | Signs |
|:---------|:------|
| **0-2 hours** | Severe local pain, rapid swelling |
| **2-12 hours** | Blistering, bleeding from gums, blood in urine |
| **Without treatment** | Shock, kidney failure, death |

---

## ✅ Snake Bite First Aid - DO THIS

:::success
**Correct First Aid:**

1. **Ensure safety** - Move away from snake
2. **Keep victim calm and still** - Reassure them
3. **Immobilize bitten limb** - Keep below heart level
4. **Apply pressure bandage** - Firm (like sprain), NOT tourniquet
5. **Remove jewelry** - Before swelling starts
6. **Rapid transport** - Hospital with antivenom
7. **Note time** of bite
:::

---

## ❌ What NOT to Do

| ❌ Harmful Practice | Why It's Wrong |
|:-------------------|:---------------|
| Cut the wound | Spreads venom, causes infection |
| Suck out venom | Doesn't work, delays treatment |
| Apply tourniquet | Causes tissue death |
| Apply ice | Damages tissues |
| Apply herbs/snake stones | No scientific basis |
| Give alcohol | Increases bleeding |
| Kill the snake | Wastes time, risks another bite |

---

## 🐕 Dog Bites & Rabies

### Critical Facts

:::warning
**Rabies is nearly 100% fatal once symptoms appear.** India has highest rabies deaths globally (~20,000/year).
:::

### WHO Wound Categories

| Category | Exposure Type | Treatment |
|:---------|:--------------|:----------|
| **I** | Touch, lick on intact skin | No treatment |
| **II** | Minor scratches, abrasions without bleeding | ARV only |
| **III** | Deep bites, licks on broken skin, bat exposure | ARV + RIG |

### First Aid

:::success
**Critical: Wash wound with soap and water for 15 MINUTES**

This alone can reduce rabies risk by up to 90%!
:::

1. **Wash wound** - Soap and running water × 15 minutes
2. **Apply antiseptic** - Povidone-iodine
3. **Cover loosely**
4. **Refer SAME DAY** for ARV

### 10-Day Dog Observation
- If dog healthy at Day 10 → low rabies risk
- If dog dies, sick, or disappears → high risk

---

## 🐝 Bee & Wasp Stings

### Normal vs Allergic Reaction

| Normal Reaction | Allergic (Anaphylaxis) |
|:----------------|:----------------------|
| Pain at sting site | Generalized hives/itching |
| Localized swelling | Swelling of face/throat |
| Redness | Difficulty breathing |
| Resolves in hours | Rapid onset, life-threatening |

### First Aid

**For Normal Reaction:**
1. Remove stinger (bee) - **Scrape** sideways, don't squeeze
2. Clean the area
3. Apply cold pack (wrapped)
4. Monitor for 30 minutes

**For Anaphylaxis (EMERGENCY):**
1. Call 108 immediately
2. Help use adrenaline auto-injector if available
3. Position: lying down (or sitting if breathing difficulty)
4. Be prepared for CPR

---

## 🦂 Scorpion Stings

### Warning Signs - Refer Immediately

- Profuse sweating
- Excessive salivation
- Muscle twitching
- Fast heart rate
- Difficulty breathing
- Altered consciousness

:::warning
**Children are at higher risk for severe effects!**
:::

### First Aid

1. Reassure patient
2. Clean the sting site
3. Apply cold pack for 10-15 min
4. Give paracetamol for pain
5. Monitor for systemic signs
6. Refer children and severe cases

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Snake bite: Immobilize, pressure bandage, DON'T cut/suck
2. Big Four: Cobra, Krait (neurotoxic), Russell's/Saw-scaled Viper (hemotoxic)
3. Dog bite: WASH 15 minutes with soap/water
4. Category III = ARV + RIG
5. Bee sting: Scrape out stinger, don't squeeze
6. Anaphylaxis = EMERGENCY → Call 108
7. Scorpion: Monitor children closely
8. Rabies is 100% fatal once symptoms appear
:::
`,
    contentHi: `
# 🐍 काटना और डंक - संपूर्ण मार्गदर्शिका

---

## 🐍 सांप का काटना

### भारत के "बड़े चार" जहरीले सांप

| सांप | हिंदी नाम | जहर प्रकार | मुख्य विशेषताएं |
|:-----|:---------|:----------|:--------------|
| **इंडियन कोबरा** | नाग | न्यूरोटॉक्सिक | फन, चश्मा निशान |
| **कॉमन क्रेत** | बंगारस | न्यूरोटॉक्सिक | नीला-काला सफेद धारियों के साथ |
| **रसेल वाइपर** | कोरीवाला | हीमोटॉक्सिक | चेन पैटर्न |
| **सॉ-स्केल्ड वाइपर** | फुर्सा | हीमोटॉक्सिक | छोटा, आरी जैसी शल्क |

:::danger
**भारत में विश्व की लगभग आधी सांप के काटने से मौतें होती हैं** (~58,000 सालाना)।
:::

---

## 🔍 जहर प्रकार के अनुसार लक्षण

### न्यूरोटॉक्सिक (कोबरा, क्रेत)
- पलकों का गिरना ← **सबसे पहला संकेत**
- दोहरी दृष्टि
- मांसपेशी कमजोरी
- सांस लेने में कठिनाई

### हीमोटॉक्सिक (वाइपर)
- गंभीर स्थानीय दर्द
- तेजी से सूजन
- छाले, मसूड़ों से खून
- पेशाब में खून

---

## ✅ सांप काटने पर - यह करें

:::success
**सही प्राथमिक चिकित्सा:**

1. **सुरक्षा सुनिश्चित करें** - सांप से दूर जाएं
2. **पीड़ित को शांत रखें**
3. **काटे हुए अंग को स्थिर करें**
4. **प्रेशर बैंडेज लगाएं** - मजबूत, टूर्निकेट नहीं
5. **गहने हटाएं** - सूजन से पहले
6. **तुरंत अस्पताल ले जाएं**
7. **काटने का समय** नोट करें
:::

---

## ❌ क्या न करें

| ❌ हानिकारक अभ्यास | क्यों गलत है |
|:-----------------|:------------|
| घाव काटना | जहर फैलाता है, संक्रमण |
| जहर चूसना | काम नहीं करता |
| टूर्निकेट लगाना | ऊतक मृत्यु |
| बर्फ लगाना | ऊतकों को नुकसान |
| जड़ी-बूटी/सांप पत्थर | कोई वैज्ञानिक आधार नहीं |
| शराब देना | रक्तस्राव बढ़ाता है |

---

## 🐕 कुत्ते का काटना और रेबीज

### महत्वपूर्ण तथ्य

:::warning
**रेबीज लक्षण प्रकट होने के बाद लगभग 100% घातक है।** भारत में सबसे अधिक रेबीज मौतें (~20,000/वर्ष)।
:::

### WHO घाव श्रेणियां

| श्रेणी | एक्सपोजर प्रकार | उपचार |
|:-------|:---------------|:------|
| **I** | छूना, अखंड त्वचा पर चाटना | उपचार नहीं |
| **II** | मामूली खरोंच, बिना खून | केवल ARV |
| **III** | गहरा काटना, टूटी त्वचा पर चाटना | ARV + RIG |

### प्राथमिक चिकित्सा

:::success
**महत्वपूर्ण: साबुन और पानी से 15 मिनट धोएं**

यह अकेले रेबीज जोखिम को 90% तक कम कर सकता है!
:::

---

## 🐝 मधुमक्खी और ततैया का डंक

### सामान्य vs एलर्जी प्रतिक्रिया

| सामान्य | एलर्जी (एनाफिलेक्सिस) |
|:--------|:--------------------|
| डंक स्थल पर दर्द | व्यापक पित्ती |
| स्थानीय सूजन | चेहरा/गला सूजना |
| लालिमा | सांस लेने में कठिनाई |

### प्राथमिक चिकित्सा

**सामान्य प्रतिक्रिया:**
1. डंक निकालें - **खुरचें**, निचोड़ें नहीं
2. क्षेत्र साफ करें
3. ठंडी पट्टी लगाएं
4. 30 मिनट निगरानी

**एनाफिलेक्सिस (आपातकालीन):**
1. तुरंत 108 बुलाएं
2. CPR के लिए तैयार रहें

---

## 🦂 बिच्छू का डंक

### चेतावनी संकेत - तुरंत रेफर करें

- अत्यधिक पसीना
- अत्यधिक लार
- मांसपेशी फड़कना
- तेज दिल की धड़कन
- सांस लेने में कठिनाई

:::warning
**बच्चों को गंभीर प्रभावों का अधिक जोखिम!**
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सांप: स्थिर करें, प्रेशर बैंडेज, न काटें/चूसें
2. कुत्ता: 15 मिनट साबुन/पानी से धोएं
3. श्रेणी III = ARV + RIG
4. मधुमक्खी: डंक खुरचें, निचोड़ें नहीं
5. एनाफिलेक्सिस = आपातकालीन → 108 बुलाएं
6. रेबीज लक्षण के बाद 100% घातक
:::
`
  },
  {
    id: 9,
    titleEn: "Poisoning Management",
    titleHi: "विषाक्तता प्रबंधन",
    contentEn: `
# ☠️ Poisoning Management

---

## 📖 Understanding Poisoning

> **Poisoning** occurs when a harmful substance enters the body in sufficient quantity to cause damage.

:::info
**Pesticide poisoning is the most common method of self-harm in rural India.** Organophosphate poisoning alone accounts for thousands of deaths annually.
:::

---

## 🛤️ Routes of Poisoning

| Route | Examples |
|:------|:---------|
| **Ingestion** (Swallowing) | Pesticides, medicines, household chemicals |
| **Inhalation** (Breathing) | CO, LPG, fumes, sprays |
| **Absorption** (Through skin) | Pesticide contact |
| **Injection** (Into body) | Drug overdose, venomous bites |

---

## ⚠️ Common Poisons in India

| Category | Examples |
|:---------|:---------|
| **Pesticides** | Organophosphates, carbamates, aluminum phosphide (Celphos) |
| **Household** | Phenol, kerosene, acids, alkalis, bleach |
| **Medications** | Paracetamol overdose, sleeping pills |
| **Plants/Food** | Oleander, datura, mushrooms |
| **Gases** | Carbon monoxide, LPG |
| **Corrosives** | Acids, caustic soda |

---

## 🔍 Recognizing Poisoning

### General Signs

**Neurological:**
- Altered consciousness
- Seizures
- Dilated or constricted pupils

**Gastrointestinal:**
- Nausea, vomiting
- Abdominal pain
- Burns around mouth (corrosives)

**Respiratory:**
- Difficulty breathing
- Unusual breath odor

---

## 🧪 Organophosphate Poisoning - SLUDGE

:::warning
**SLUDGE + Killer B's**

- **S**alivation (drooling)
- **L**acrimation (tearing)
- **U**rination
- **D**efecation/Diarrhea
- **G**I distress
- **E**mesis (vomiting)

**Killer B's:**
- **B**radycardia (slow heart)
- **B**ronchospasm (wheezing)
- **B**ronchorrhea (secretions)

Also: Pinpoint pupils (miosis), muscle weakness
:::

---

## 🔥 Carbon Monoxide Poisoning

### Signs

| Early | Late |
|:------|:-----|
| Headache | Cherry-red skin |
| Dizziness | Unconsciousness |
| Nausea | Seizures |
| Confusion | Cardiac arrest |

:::tip
**Clue:** Multiple people in same room affected
:::

---

## 📋 Information to Collect

| Question | Why Important |
|:---------|:--------------|
| **WHAT** substance? | Treatment varies by poison |
| **HOW MUCH** taken? | Determines severity |
| **WHEN** did it happen? | Time-critical treatment |
| **HOW** (route)? | Affects first aid approach |
| **WHO** (age, weight, history)? | Affects treatment |

:::success
**KEEP: Container, label, any vomited material**
:::

---

## 🚫 When NOT to Induce Vomiting

:::danger
**NEVER induce vomiting for:**
- **Corrosives** (acid/alkali) - Burns twice
- **Petroleum products** (kerosene) - Aspiration risk
- **Unconscious** patient - Aspiration risk
- **Seizing** patient - Aspiration risk
- **Sharp objects** - Perforation risk
- **>1 hour** since ingestion - Already past stomach
:::

---

## 🩹 First Aid by Route

### Ingestion
1. Assess ABC
2. **Do NOT induce vomiting** routinely
3. If corrosive: Do NOT give anything by mouth
4. Collect information and container
5. Transport immediately

### Inhalation
1. **Protect yourself** - Don't enter toxic area
2. Remove to fresh air
3. Check ABC, be ready for CPR
4. Loosen clothing
5. Transport

### Skin Contact
1. Wear gloves
2. Remove contaminated clothing
3. Flush with water for 15-20 minutes
4. Brush off dry chemicals BEFORE washing

### Eye Contact
1. Irrigate immediately for 15-20 minutes
2. Tilt head so water drains away from unaffected eye
3. Urgent referral

---

## 🆘 Specific Emergencies

### Aluminum Phosphide (Celphos) - EXTREMELY DANGEROUS

:::danger
- Releases phosphine gas when wet
- **No specific antidote**
- Very high mortality rate
- IMMEDIATE hospital transport
- Do NOT induce vomiting
- Do NOT give anything by mouth
:::

### Paracetamol Overdose

- May seem well initially
- Liver damage occurs later (24-72 hours)
- **Early treatment saves lives** (N-acetylcysteine)
- ALL overdoses need hospital assessment

---

## 📞 Poison Information Centre

:::info
**National Poison Information Centre (NPIC)**
- Location: AIIMS, New Delhi
- Phone: **1800-116-117** (Toll-free, 24×7)
- Also: 011-26593677
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Routes: Ingestion, Inhalation, Absorption, Injection
2. SLUDGE = Organophosphate poisoning
3. NEVER induce vomiting for corrosives, petroleum, unconscious
4. CO poisoning: Multiple people affected, move to fresh air
5. Aluminum phosphide = CRITICAL EMERGENCY
6. Skin contact: Flush 15-20 min
7. Paracetamol: Seems fine initially, liver damage later
8. Poison Control: 1800-116-117
:::
`,
    contentHi: `
# ☠️ विषाक्तता प्रबंधन

---

## 📖 विषाक्तता को समझना

> **विषाक्तता** तब होती है जब कोई हानिकारक पदार्थ शरीर में पर्याप्त मात्रा में प्रवेश करता है।

:::info
**कीटनाशक विषाक्तता ग्रामीण भारत में आत्म-हानि का सबसे आम तरीका है।**
:::

---

## 🛤️ विषाक्तता के मार्ग

| मार्ग | उदाहरण |
|:------|:-------|
| **निगलना** | कीटनाशक, दवाइयां, घरेलू रसायन |
| **साँस लेना** | CO, LPG, धुआं |
| **अवशोषण** | त्वचा से कीटनाशक |
| **इंजेक्शन** | ड्रग ओवरडोज, जहरीले काटने |

---

## ⚠️ भारत में आम जहर

| श्रेणी | उदाहरण |
|:-------|:-------|
| **कीटनाशक** | ऑर्गनोफॉस्फेट, एल्युमिनियम फॉस्फाइड |
| **घरेलू** | फिनोल, मिट्टी का तेल, अम्ल, क्षार |
| **दवाइयां** | पैरासिटामोल ओवरडोज |
| **गैसें** | कार्बन मोनोऑक्साइड, LPG |

---

## 🧪 ऑर्गनोफॉस्फेट विषाक्तता - SLUDGE

:::warning
**SLUDGE + Killer B's**

- **S**alivation (लार बहना)
- **L**acrimation (आंसू)
- **U**rination (पेशाब)
- **D**efecation (शौच)
- **G**I distress (पेट की तकलीफ)
- **E**mesis (उल्टी)

**Killer B's:**
- **B**radycardia (धीमी धड़कन)
- **B**ronchospasm (घरघराहट)
- **B**ronchorrhea (स्राव)

साथ ही: बिंदु जैसी पुतलियां, मांसपेशी कमजोरी
:::

---

## 🔥 कार्बन मोनोऑक्साइड विषाक्तता

### संकेत

| प्रारंभिक | देर से |
|:---------|:------|
| सिरदर्द | चेरी-लाल त्वचा |
| चक्कर | बेहोशी |
| मतली | दौरे |

:::tip
**संकेत:** एक ही कमरे में कई लोग प्रभावित
:::

---

## 📋 एकत्र करने की जानकारी

| प्रश्न | क्यों महत्वपूर्ण |
|:------|:--------------|
| **क्या** पदार्थ? | उपचार भिन्न होता है |
| **कितना** लिया? | गंभीरता निर्धारित |
| **कब** हुआ? | समय-महत्वपूर्ण |
| **कैसे** (मार्ग)? | प्राथमिक चिकित्सा प्रभावित |

:::success
**रखें: कंटेनर, लेबल, उल्टी का नमूना**
:::

---

## 🚫 उल्टी कब न कराएं

:::danger
**कभी उल्टी न कराएं:**
- **संक्षारक** (अम्ल/क्षार) - दो बार जलता है
- **पेट्रोलियम उत्पाद** - आकांक्षा जोखिम
- **बेहोश** रोगी
- **दौरे** वाला रोगी
- **तेज वस्तुएं** - छेदन जोखिम
- **>1 घंटा** निगलने के बाद
:::

---

## 🩹 मार्ग द्वारा प्राथमिक चिकित्सा

### निगलना
1. ABC मूल्यांकन
2. **उल्टी न कराएं** नियमित रूप से
3. संक्षारक: मुंह से कुछ न दें
4. जानकारी और कंटेनर एकत्र करें
5. तुरंत परिवहन

### साँस लेना
1. **अपनी रक्षा करें**
2. ताजी हवा में ले जाएं
3. ABC जांचें, CPR के लिए तैयार
4. ढीले कपड़े करें
5. परिवहन

### त्वचा संपर्क
1. दस्ताने पहनें
2. दूषित कपड़े हटाएं
3. पानी से 15-20 मिनट धोएं
4. सूखे रसायन पहले ब्रश करें

---

## 🆘 विशेष आपात स्थितियां

### एल्युमिनियम फॉस्फाइड (सेल्फोस)

:::danger
- गीला होने पर फॉस्फीन गैस छोड़ता है
- **कोई विशेष एंटीडोट नहीं**
- बहुत उच्च मृत्यु दर
- तत्काल अस्पताल परिवहन
- उल्टी न कराएं
:::

### पैरासिटामोल ओवरडोज

- शुरू में ठीक लग सकता है
- जिगर की क्षति बाद में (24-72 घंटे)
- **जल्दी उपचार जान बचाता है**

---

## 📞 विष सूचना केंद्र

:::info
**राष्ट्रीय विष सूचना केंद्र (NPIC)**
- स्थान: AIIMS, नई दिल्ली
- फोन: **1800-116-117** (टोल-फ्री, 24×7)
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मार्ग: निगलना, साँस, अवशोषण, इंजेक्शन
2. SLUDGE = ऑर्गनोफॉस्फेट विषाक्तता
3. संक्षारक, पेट्रोलियम, बेहोश के लिए उल्टी नहीं
4. CO विषाक्तता: कई लोग प्रभावित, ताजी हवा
5. एल्युमिनियम फॉस्फाइड = गंभीर आपात
6. त्वचा: 15-20 मिनट धोएं
7. विष नियंत्रण: 1800-116-117
:::
`
  },
  {
    id: 10,
    titleEn: "Drowning & Near-Drowning",
    titleHi: "डूबना और निकट-डूबना",
    contentEn: `
# 🌊 Drowning & Near-Drowning

---

## 📖 Understanding Drowning

> **Drowning** is the process of respiratory impairment from submersion/immersion in liquid.

:::danger
**Brain damage begins within 4-6 minutes of submersion.** Every second counts!
:::

### Key Statistics
- ~40,000-50,000 drowning deaths annually in India
- Children under 14 years at highest risk
- Common in rural areas with open wells, ponds, irrigation channels

---

## 🆘 Safe Water Rescue - TALK, REACH, THROW, ROW, GO

:::warning
**A drowning person can panic and drown the rescuer!**
:::

| Priority | Method | Action |
|:---------|:-------|:-------|
| 1st | **TALK** | Shout instructions if victim conscious |
| 2nd | **REACH** | Extend branch, pole, towel from shore |
| 3rd | **THROW** | Throw flotation device with rope |
| 4th | **ROW** | Use boat if available |
| 5th | **GO** | Enter water ONLY as last resort |

---

## 🏊 If You Must Enter Water

:::success
**Water Entry Safety:**
1. Take flotation device with you
2. Approach victim from **BEHIND**
3. Talk to victim, keep them calm
4. Pass flotation device to victim
5. Tow victim keeping distance

**If victim grabs you:**
- Take a breath and go under water
- Victim will usually release
- Surface behind victim
:::

---

## 🩺 Drowning Resuscitation - Key Differences

:::info
**Drowning causes cardiac arrest due to LACK OF OXYGEN.**

Therefore: **RESCUE BREATHS ARE ESSENTIAL**

Give **5 INITIAL RESCUE BREATHS** before checking for signs of life!
:::

### Step-by-Step Protocol

1. **Safety & Call for Help** - Call 108
2. **Assess Responsiveness** - Tap and shout
3. **Open Airway** - Head tilt-chin lift
4. **Check Breathing** (10 seconds max)
5. **Give 5 INITIAL RESCUE BREATHS**
6. **Check for Signs of Life** (10 seconds)
7. **If no signs → Start CPR** (30:2)
8. **If vomiting** - Turn to side, clear, continue

---

## 🤮 Managing Vomiting

Drowning victims commonly vomit due to:
- Water in stomach
- Air forced into stomach during rescue breaths
- Compressions pushing on stomach

### Action:
1. Turn victim on side
2. Allow vomit to drain
3. Clear mouth with finger sweep
4. Return to back
5. **Continue CPR immediately**

---

## 🧊 Hypothermia Management

### Signs by Severity

| Stage | Temperature | Signs |
|:------|:------------|:------|
| **Mild** | 32-35°C | Shivering, confusion, slurred speech |
| **Moderate** | 28-32°C | Shivering stops, severe confusion |
| **Severe** | <28°C | Unconscious, may appear dead |

:::warning
**Water conducts heat 25× faster than air!**
:::

### First Aid

1. **Prevent further heat loss**
   - Remove from cold
   - Remove wet clothing
   - Dry the victim

2. **Insulate**
   - Wrap in dry blankets
   - Cover head
   - Place on insulated surface

3. **Warm gradually**
   - Warm core (armpits, groin, neck)
   - Warm packs wrapped in cloth
   - Do NOT rub limbs
   - Do NOT use direct heat

4. **Handle gently** - Rough handling can trigger cardiac arrest

5. **CPR if needed**
   - Check pulse for 60 seconds
   - "No one is dead until warm and dead"

---

## ⚠️ Secondary Drowning Warning

:::danger
**A person who seems fine can deteriorate hours later!**

Warning signs (1-24 hours after):
- Coughing
- Difficulty breathing
- Extreme fatigue
- Behavior changes
- Chest pain

**ALL drowning victims MUST go to hospital!**
:::

---

## 🏥 Post-Rescue Care

### If Victim Recovers:

1. **Recovery position** - On side, airway open
2. **Keep warm** - Remove wet clothes, cover with blankets
3. **Monitor continuously** - Watch for deterioration
4. **Transport to hospital** - ALL cases need evaluation
5. **Reassure** - Stay with victim

---

## 🛡️ Prevention Messages

### For Parents:
- Never leave children alone near water
- Empty water containers after use
- Cover wells and water tanks securely
- Teach children to swim
- Fence ponds/pools

### General Safety:
- Don't swim alone
- Don't swim after alcohol
- Don't overestimate swimming ability
- Wear life jackets in boats

### During Floods:
- "Turn around, don't drown"
- Don't walk/drive through flood water
- Even shallow moving water can knock you down

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Rescue priority: TALK → REACH → THROW → ROW → GO
2. Give **5 INITIAL RESCUE BREATHS** first (oxygen priority)
3. Rescue breaths ARE essential (not compression-only)
4. Expect vomiting - turn, clear, continue
5. Brain damage in 4-6 minutes
6. Hypothermia: Handle gently, warm slowly
7. Check pulse 60 seconds in hypothermia
8. "No one is dead until warm and dead"
9. ALL drowning victims need hospital - risk of secondary drowning
:::
`,
    contentHi: `
# 🌊 डूबना और निकट-डूबना

---

## 📖 डूबने को समझना

> **डूबना** तरल में डूबने से श्वसन हानि की प्रक्रिया है।

:::danger
**डूबने के 4-6 मिनट के भीतर मस्तिष्क क्षति शुरू होती है।** हर सेकंड मायने रखता है!
:::

### प्रमुख आंकड़े
- भारत में सालाना ~40,000-50,000 डूबने से मौतें
- 14 वर्ष से कम उम्र के बच्चे सबसे अधिक जोखिम में
- खुले कुएं, तालाब, सिंचाई नहरों वाले ग्रामीण क्षेत्रों में आम

---

## 🆘 सुरक्षित जल बचाव - बात करो, पहुंचो, फेंको, नाव, जाओ

:::warning
**डूबता व्यक्ति घबरा सकता है और बचावकर्ता को डुबा सकता है!**
:::

| प्राथमिकता | विधि | क्रिया |
|:----------|:-----|:------|
| 1st | **बात करो** | होश में हो तो निर्देश चिल्लाएं |
| 2nd | **पहुंचो** | किनारे से डंडा, शाखा बढ़ाएं |
| 3rd | **फेंको** | रस्सी के साथ तैरने वाली चीज फेंकें |
| 4th | **नाव** | उपलब्ध हो तो नाव |
| 5th | **जाओ** | पानी में केवल अंतिम उपाय के रूप में |

---

## 🩺 डूबने का पुनर्जीवन - मुख्य अंतर

:::info
**डूबना ऑक्सीजन की कमी के कारण कार्डियक अरेस्ट कराता है।**

इसलिए: **बचाव सांसें आवश्यक हैं**

जीवन के संकेतों की जांच से पहले **5 प्रारंभिक बचाव सांसें** दें!
:::

### चरण-दर-चरण प्रोटोकॉल

1. **सुरक्षा और मदद बुलाएं** - 108 कॉल करें
2. **प्रतिक्रिया मूल्यांकन** - थपथपाएं और चिल्लाएं
3. **वायुमार्ग खोलें** - हेड टिल्ट-चिन लिफ्ट
4. **श्वास जांचें** (अधिकतम 10 सेकंड)
5. **5 प्रारंभिक बचाव सांसें दें**
6. **जीवन के संकेत जांचें**
7. **यदि कोई संकेत नहीं → CPR शुरू करें** (30:2)
8. **उल्टी होने पर** - पलटें, साफ करें, जारी रखें

---

## 🤮 उल्टी का प्रबंधन

### क्रिया:
1. पीड़ित को एक तरफ पलटें
2. उल्टी निकलने दें
3. उंगली से मुंह साफ करें
4. पीठ पर वापस करें
5. **तुरंत CPR जारी रखें**

---

## 🧊 हाइपोथर्मिया प्रबंधन

### गंभीरता के अनुसार संकेत

| चरण | तापमान | संकेत |
|:----|:-------|:------|
| **हल्का** | 32-35°C | कंपकंपी, भ्रम |
| **मध्यम** | 28-32°C | कंपकंपी बंद, गंभीर भ्रम |
| **गंभीर** | <28°C | बेहोश |

:::warning
**पानी हवा से 25 गुना तेजी से गर्मी ले जाता है!**
:::

### प्राथमिक चिकित्सा

1. **और गर्मी की हानि रोकें**
2. **इंसुलेट करें** - सूखे कंबल में लपेटें
3. **धीरे-धीरे गर्म करें** - कोर क्षेत्र (बगल, कमर)
4. **धीरे से संभालें**
5. **CPR यदि जरूरी** - 60 सेकंड नाड़ी जांचें

---

## ⚠️ द्वितीयक डूबने की चेतावनी

:::danger
**ठीक दिखने वाला व्यक्ति घंटों बाद बिगड़ सकता है!**

चेतावनी संकेत (1-24 घंटे बाद):
- खांसी
- सांस लेने में कठिनाई
- अत्यधिक थकान
- व्यवहार परिवर्तन

**सभी डूबने वाले पीड़ितों को अस्पताल जाना चाहिए!**
:::

---

## 🛡️ रोकथाम संदेश

### माता-पिता के लिए:
- बच्चों को पानी के पास अकेला न छोड़ें
- उपयोग के बाद पानी के कंटेनर खाली करें
- कुएं और टैंक सुरक्षित रूप से ढकें
- बच्चों को तैरना सिखाएं

### सामान्य सुरक्षा:
- अकेले न तैरें
- शराब के बाद न तैरें
- तैराकी क्षमता का अधिक आकलन न करें

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. बचाव प्राथमिकता: बात → पहुंचो → फेंको → नाव → जाओ
2. पहले **5 प्रारंभिक बचाव सांसें** दें
3. बचाव सांसें आवश्यक हैं
4. उल्टी की उम्मीद - पलटें, साफ करें, जारी रखें
5. 4-6 मिनट में मस्तिष्क क्षति
6. हाइपोथर्मिया: धीरे संभालें, धीरे गर्म करें
7. हाइपोथर्मिया में 60 सेकंड नाड़ी जांचें
8. सभी डूबने वालों को अस्पताल जाना चाहिए
:::
`
  },
  {
    id: 11,
    titleEn: "Medical Emergencies (Seizures, Stroke, Heart Attack)",
    titleHi: "चिकित्सा आपात स्थितियां (दौरे, स्ट्रोक, दिल का दौरा)",
    contentEn: `
# 🏥 Medical Emergencies

---

## 🧠 Seizures (Fits/Convulsions)

### Types of Seizures

| Type | Description |
|:-----|:------------|
| **Generalized Tonic-Clonic** | Body stiffens, then rhythmic jerking |
| **Absence (Petit Mal)** | Brief staring spells (common in children) |
| **Focal/Partial** | Affects one part of body |

---

### 🩹 Seizure First Aid - DURING

:::success
**PROTECT - Do NOT restrain:**
- Clear area of dangerous objects
- Cushion head with something soft
- Loosen tight clothing around neck
- Note time seizure started
:::

:::danger
**DO NOT:**
- Put anything in mouth (no spoons, fingers)
- Try to hold person down
- Give anything to eat or drink
:::

---

### 🩹 After Seizure Stops

1. **Turn on side** (recovery position)
2. **Check breathing** - CPR if not breathing
3. **Stay with person** - Confusion is normal
4. **Reassure** - "You had a seizure, you're safe"

---

### 🚨 Call 108 If:

- First seizure ever
- Seizure lasts >5 minutes
- Seizures repeat without recovery between
- Person doesn't regain consciousness within 10 min
- Person is injured, pregnant, or diabetic

:::warning
**Status Epilepticus:** Seizure lasting >5 min = LIFE-THREATENING EMERGENCY
:::

---

## 🧠 Stroke - F.A.S.T.

:::info
**"Time is Brain"** - 1.9 million neurons die every minute without treatment!
:::

### F.A.S.T. Assessment

| Letter | Check | Sign |
|:-------|:------|:-----|
| **F** | **Face** | Ask to smile - Does one side droop? |
| **A** | **Arms** | Raise both arms - Does one drift down? |
| **S** | **Speech** | Repeat a phrase - Is it slurred/strange? |
| **T** | **Time** | If ANY abnormal → **Call 108 IMMEDIATELY** |

### Other Stroke Symptoms
- Sudden severe headache ("worst headache of life")
- Sudden confusion
- Sudden vision problems
- Sudden dizziness, loss of balance

---

### 🩹 Stroke First Aid

:::success
1. **Call 108 IMMEDIATELY**
2. **Note time** of symptom onset
3. **Position:** Sitting if conscious, recovery if unconscious
4. **DO NOT** give food, water, or aspirin
5. **Reassure and monitor**
6. **Be prepared for CPR**
:::

---

## ❤️ Heart Attack

### Symptoms

| Classic | Atypical (women, elderly, diabetics) |
|:--------|:-------------------------------------|
| Central chest pressure/squeezing | May have NO chest pain |
| "Elephant sitting on chest" | Unusual fatigue |
| Radiates to jaw, arms, back | Upper abdominal discomfort |
| Shortness of breath | Shortness of breath only |
| Cold sweat | Back/jaw pain only |
| Nausea, lightheadedness | |

:::warning
**Heart Attack vs Cardiac Arrest:**
- Heart Attack = Heart still beating (plumbing problem)
- Cardiac Arrest = Heart stops (electrical problem)
:::

---

### 🩹 Heart Attack First Aid

:::success
1. **Call 108 IMMEDIATELY**
2. **Help person rest** - "W position" (sitting, knees bent)
3. **Give aspirin** - 300mg, chewed (if not allergic)
4. **Help with GTN** if prescribed
5. **Reassure** - Stay calm, stay with person
6. **Be ready for CPR** - Heart attacks can lead to cardiac arrest
:::

---

## 💉 Diabetic Emergencies

### Hypoglycemia (Low Blood Sugar) - FAST onset

**Signs:** Shaky, sweaty, confused, pale, rapid heartbeat

:::success
**If CONSCIOUS:** Give fast-acting sugar immediately
- 3-4 glucose tablets
- 1/2 cup fruit juice
- 1 tablespoon sugar/honey

**If UNCONSCIOUS:** Recovery position, Call 108
:::

### Hyperglycemia (High Blood Sugar) - SLOW onset

**Signs:** Excessive thirst, fruity breath, deep breathing, drowsy

:::tip
**If uncertain which condition:** Give sugar - won't significantly harm hyperglycemic patient but can save hypoglycemic patient!
:::

---

## 🫁 Severe Asthma Attack

### Signs of Severe Attack
- Cannot speak full sentences
- Severe wheezing (or silent chest)
- Using accessory muscles
- Lips/fingernails turning blue

### First Aid

:::success
1. **Sit upright** - Slightly forward, arms on table/knees
2. **Help with inhaler** - 4-10 puffs through spacer
3. **Stay calm** - Panic worsens breathing
4. **Call 108** if no improvement or getting worse
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**

**SEIZURE:**
- Protect, don't restrain
- Nothing in mouth
- Recovery position after
- Call 108 if >5 min

**STROKE - FAST:**
- Face droop, Arm drift, Speech slurred = Time to call 108
- Note time symptoms started
- NO food, water, or aspirin

**HEART ATTACK:**
- Call 108, Rest in W position
- Aspirin 300mg chewed
- Be ready for CPR

**DIABETIC:**
- If in doubt, give sugar
- Hypoglycemia = fast onset, give sugar
- Hyperglycemia = slow onset, give water

**ASTHMA:**
- Sit upright
- Inhaler (4-10 puffs)
- Call 108 if no improvement
:::
`,
    contentHi: `
# 🏥 चिकित्सा आपात स्थितियां

---

## 🧠 दौरे (फिट्स/ऐंठन)

### दौरे के प्रकार

| प्रकार | विवरण |
|:-------|:------|
| **जनरलाइज्ड टॉनिक-क्लोनिक** | शरीर अकड़ता है, फिर लयबद्ध झटके |
| **एब्सेंस (पेटिट मल)** | संक्षिप्त घूरना (बच्चों में आम) |
| **फोकल/आंशिक** | शरीर के एक हिस्से को प्रभावित |

---

### 🩹 दौरे की प्राथमिक चिकित्सा - दौरान

:::success
**सुरक्षित करें - रोकें नहीं:**
- खतरनाक वस्तुएं हटाएं
- सिर के नीचे कुछ नरम रखें
- गर्दन के आसपास कपड़े ढीले करें
- दौरे का समय नोट करें
:::

:::danger
**न करें:**
- मुंह में कुछ न डालें
- व्यक्ति को दबाने की कोशिश न करें
- खाने-पीने को कुछ न दें
:::

---

### 🩹 दौरे के बाद

1. **एक तरफ पलटें** (रिकवरी पोजीशन)
2. **श्वास जांचें** - न सांस ले तो CPR
3. **व्यक्ति के साथ रहें**
4. **आश्वस्त करें** - "आपको दौरा पड़ा, आप सुरक्षित हैं"

---

### 🚨 108 कॉल करें अगर:

- पहला दौरा
- दौरा >5 मिनट
- बार-बार दौरे
- 10 मिनट में होश न आए
- घायल, गर्भवती, या मधुमेह

:::warning
**स्टेटस एपिलेप्टिकस:** >5 मिनट का दौरा = जानलेवा आपात
:::

---

## 🧠 स्ट्रोक - F.A.S.T.

:::info
**"समय मस्तिष्क है"** - इलाज के बिना हर मिनट 19 लाख न्यूरॉन्स मरते हैं!
:::

### F.A.S.T. मूल्यांकन

| अक्षर | जांच | संकेत |
|:------|:-----|:------|
| **F** | **चेहरा** | मुस्कुराने को कहें - क्या एक तरफ झुकता है? |
| **A** | **बांह** | दोनों बांह उठाएं - क्या एक गिरती है? |
| **S** | **भाषण** | वाक्य दोहराएं - क्या अस्पष्ट है? |
| **T** | **समय** | कोई भी असामान्य हो → **तुरंत 108 कॉल करें** |

---

### 🩹 स्ट्रोक प्राथमिक चिकित्सा

:::success
1. **तुरंत 108 कॉल करें**
2. **लक्षण शुरू होने का समय** नोट करें
3. **स्थिति:** होश में हो तो बैठाएं, बेहोश हो तो रिकवरी
4. **न दें** खाना, पानी, या एस्पिरिन
5. **निगरानी** करें
:::

---

## ❤️ दिल का दौरा

### लक्षण

| क्लासिक | एटिपिकल (महिलाएं, बुजुर्ग, मधुमेह) |
|:--------|:--------------------------------|
| छाती के केंद्र में दबाव | छाती में दर्द नहीं हो सकता |
| "हाथी बैठा है" जैसा | असामान्य थकान |
| जबड़े, बांहों, पीठ में फैलता है | पेट में तकलीफ |
| सांस फूलना | केवल सांस फूलना |
| ठंडा पसीना | केवल पीठ/जबड़े में दर्द |

---

### 🩹 दिल का दौरा प्राथमिक चिकित्सा

:::success
1. **तुरंत 108 कॉल करें**
2. **आराम करने में मदद** - W पोजीशन (बैठे, घुटने मुड़े)
3. **एस्पिरिन दें** - 300mg, चबाकर (एलर्जी न हो तो)
4. **GTN में मदद** अगर निर्धारित हो
5. **शांत रहें, साथ रहें**
6. **CPR के लिए तैयार रहें**
:::

---

## 💉 मधुमेह आपात स्थितियां

### हाइपोग्लाइसीमिया (कम शुगर) - तेज शुरुआत

**संकेत:** कंपकंपी, पसीना, भ्रम, पीला, तेज धड़कन

:::success
**होश में हो:** तुरंत तेज-असर वाली चीनी दें
- 3-4 ग्लूकोज टैबलेट
- 1/2 कप फलों का रस
- 1 चम्मच चीनी/शहद

**बेहोश हो:** रिकवरी पोजीशन, 108 कॉल करें
:::

### हाइपरग्लाइसीमिया (उच्च शुगर) - धीमी शुरुआत

**संकेत:** अत्यधिक प्यास, फलों जैसी सांस, गहरी सांस

:::tip
**अनिश्चित हो तो:** चीनी दें - हाइपोग्लाइसेमिक को बचा सकती है!
:::

---

## 🫁 गंभीर अस्थमा अटैक

### गंभीर संकेत
- पूरे वाक्य नहीं बोल पाना
- गंभीर घरघराहट
- होंठ/नाखून नीले

### प्राथमिक चिकित्सा

:::success
1. **सीधे बैठाएं** - थोड़ा आगे झुकें
2. **इनहेलर में मदद** - 4-10 पफ
3. **शांत रहें**
4. **108 कॉल करें** अगर सुधार नहीं
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**

**दौरा:**
- सुरक्षित करें, रोकें नहीं
- मुंह में कुछ नहीं
- बाद में रिकवरी पोजीशन
- >5 मिनट हो तो 108

**स्ट्रोक - FAST:**
- चेहरा, बांह, भाषण जांचें
- लक्षण का समय नोट करें
- खाना, पानी, एस्पिरिन नहीं

**दिल का दौरा:**
- 108 कॉल, W पोजीशन में आराम
- एस्पिरिन 300mg चबाकर
- CPR के लिए तैयार

**मधुमेह:**
- संदेह हो तो चीनी दें
:::
`
  },
  {
    id: 12,
    titleEn: "Emergency Transport & Referral",
    titleHi: "आपातकालीन परिवहन और रेफरल",
    contentEn: `
# 🚑 Emergency Transport & Referral

---

## 🤔 When to Move a Casualty

### MOVE Immediately If:
- Fire or risk of explosion
- Building collapse risk
- Toxic fumes/gases
- Drowning (must remove from water)
- Electrical hazard (after power off)
- Vehicle in traffic

### DON'T Move If:
- Suspected spinal injury AND scene is safe
- Professional help arriving soon
- Moving would cause more harm

:::warning
**If unsure and no immediate danger → DON'T MOVE**
Wait for professional help with proper equipment.
:::

---

## 🦴 Spinal Injury Precautions

### Suspect Spinal Injury If:
- Fall from height (>3 meters)
- Motor vehicle accident
- Diving accident
- Direct blow to head/neck/back
- Found unconscious after trauma

:::danger
**If spinal injury suspected:**
- DO NOT move unless absolutely necessary
- Keep head, neck, spine in straight line
- Log roll requires 4+ people
- Immobilize head manually
- Wait for ambulance with spinal board
:::

---

## 🚶 Emergency Moves (Immediate Danger)

### Clothes Drag
- Grasp collar/shoulders
- Drag backward in line with spine
- Keep head/neck supported

### Blanket Drag (Gentler)
1. Place blanket next to victim
2. Roll victim onto blanket
3. Drag blanket from head end

:::tip
Better than direct drag - protects skin
:::

---

## 💪 One-Person Carries

### Cradle Carry (Human Crutch)
- For conscious patient who can walk with help
- Patient's arm over rescuer's shoulder
- Rescuer supports patient's waist

### Firefighter's Carry
- For unconscious patient
- Victim draped across rescuer's shoulders
- ⚠️ NOT for suspected spinal injuries

---

## 👥 Two-Person Carries

### Chair Carry
- Best for: Conscious patients, narrow spaces (stairs)
- Rescuers' arms form "chair seat"
- Patient's arms around shoulders

### Fore-and-Aft Carry
- Front rescuer: Under victim's arms
- Back rescuer: Under victim's knees
- Good for longer distances on flat ground

---

## 🛏️ Improvised Stretchers

### Blanket Stretcher
**Materials:** Strong blanket + 2 poles

1. Lay blanket flat
2. Place pole 1/3 from one edge
3. Fold blanket over pole
4. Place second pole on doubled blanket
5. Fold remaining blanket over
6. Weight of patient locks blanket

### Jacket Stretcher
**Materials:** 2-3 strong jackets + 2 poles

1. Zip/button jackets closed
2. Turn inside out (sleeves inside)
3. Thread poles through sleeves

---

## 🚗 Loading into Vehicles

:::success
**Patient goes in HEAD FIRST**

So attendant can monitor face and airway during transport.
:::

### Loading Steps:
1. Position stretcher at vehicle
2. "Lift on three" - raise to vehicle height
3. Slide in smoothly
4. Secure stretcher to prevent sliding
5. Attendant stays with patient

### Stairs Carry Rule:
> **Head always higher than feet**
- Going UP: Head goes up first
- Going DOWN: Feet first (head stays higher)

---

## 📋 SBAR Handover Format

| Letter | Element | Example |
|:-------|:--------|:--------|
| **S** | Situation | "MPHW from [village], calling about [age/gender] patient with [problem]" |
| **B** | Background | What happened? When? Medical history? |
| **A** | Assessment | Vital signs, consciousness, main findings |
| **R** | Recommendation | "Patient needs emergency transport" |

---

## 📝 Documentation During Transport

### Patient Details
- Name, age, gender
- Address
- Contact number (family)

### Incident Details
- What happened
- Time of incident
- Location

### Clinical Status
- Level of consciousness
- Injuries identified
- Vital signs
- Interventions done

### Time Log
- Time first aid given
- Time transport started
- Estimated arrival time

---

## 🏥 Hospital Handover Checklist

1. **Introduce** - Your name and role
2. **Report** (SBAR) - Situation, Background, Assessment, Recommendation
3. **Hand over** - Written documentation, belongings, container (if poisoning)
4. **Clarify** - Answer questions
5. **Follow up** - Leave contact details

---

## 🎯 Quick Revision Points

:::tip
**Remember:**

**When to Move:**
- Immediate danger → Move
- No danger + help coming → Wait
- Spinal injury suspected → Minimize movement

**Carry Methods:**
- Conscious + can walk → Human crutch
- Unconscious → Fore-and-aft or stretcher
- Spinal injury → 4-person lift, rigid stretcher

**Transport Rules:**
- Head higher than feet (usually)
- Patient HEAD FIRST into vehicle
- Monitor continuously
- Document everything

**Handover - SBAR:**
- Situation
- Background
- Assessment
- Recommendation
:::

---

## 🎓 First Aid Course Summary

Congratulations on completing all 12 lessons! You have learned:

1. ✅ Principles of First Aid
2. ✅ CPR & Basic Life Support
3. ✅ Bleeding & Wound Care
4. ✅ Fractures & Splinting
5. ✅ Burns, Bites & Poisoning
6. ✅ Fractures, Dislocations & Sprains
7. ✅ Burns & Scalds (Advanced)
8. ✅ Bites & Stings
9. ✅ Poisoning Management
10. ✅ Drowning & Near-Drowning
11. ✅ Medical Emergencies
12. ✅ Emergency Transport & Referral

:::success
**As an MPHW, you are now equipped with essential first aid knowledge. Remember:**
- Stay calm
- Ensure safety first
- Call for help early
- Use your skills confidently
- Practice regularly to maintain competency
:::
`,
    contentHi: `
# 🚑 आपातकालीन परिवहन और रेफरल

---

## 🤔 पीड़ित को कब हिलाएं

### तुरंत हिलाएं अगर:
- आग या विस्फोट का जोखिम
- इमारत गिरने का जोखिम
- जहरीली गैसें/धुआं
- डूबना (पानी से निकालना जरूरी)
- बिजली का खतरा (बिजली बंद के बाद)
- यातायात में वाहन

### न हिलाएं अगर:
- रीढ़ की चोट का संदेह और दृश्य सुरक्षित
- पेशेवर मदद जल्द आ रही है
- हिलाने से अधिक नुकसान होगा

:::warning
**अनिश्चित हों और कोई तत्काल खतरा नहीं → न हिलाएं**
उचित उपकरण के साथ पेशेवर मदद की प्रतीक्षा करें।
:::

---

## 🦴 रीढ़ की चोट सावधानियां

### रीढ़ की चोट का संदेह अगर:
- ऊंचाई से गिरना (>3 मीटर)
- मोटर वाहन दुर्घटना
- डाइविंग दुर्घटना
- सिर/गर्दन/पीठ पर सीधा प्रहार
- आघात के बाद बेहोश मिलना

:::danger
**रीढ़ की चोट संदेह हो तो:**
- जब तक बिल्कुल जरूरी न हो, न हिलाएं
- सिर, गर्दन, रीढ़ सीधी रेखा में रखें
- लॉग रोल के लिए 4+ लोग चाहिए
- सिर को मैन्युअली स्थिर करें
:::

---

## 🚶 आपातकालीन स्थानांतरण

### कपड़े खींचना
- कॉलर/कंधे पकड़ें
- रीढ़ की रेखा में पीछे खींचें
- सिर/गर्दन को सहारा दें

### कंबल खींचना (सौम्य)
1. पीड़ित के बगल में कंबल रखें
2. पीड़ित को कंबल पर पलटें
3. सिर के छोर से कंबल खींचें

---

## 💪 एक-व्यक्ति कैरी

### क्रैडल कैरी (मानव बैसाखी)
- होश में हो और चल सकता हो
- रोगी की बांह बचावकर्ता के कंधे पर
- बचावकर्ता कमर को सहारा दे

### फायरफाइटर कैरी
- बेहोश रोगी के लिए
- पीड़ित कंधों पर लेटा
- ⚠️ रीढ़ की चोट के लिए नहीं

---

## 👥 दो-व्यक्ति कैरी

### चेयर कैरी
- होश में रोगी, संकीर्ण जगह (सीढ़ियां)
- बचावकर्ताओं की बांहें "कुर्सी सीट" बनाती हैं

### फोर-एंड-आफ्ट कैरी
- आगे वाला: बांहों के नीचे
- पीछे वाला: घुटनों के नीचे

---

## 🛏️ सुधारित स्ट्रेचर

### कंबल स्ट्रेचर
**सामग्री:** मजबूत कंबल + 2 डंडे

1. कंबल बिछाएं
2. एक किनारे से 1/3 पर पहला डंडा रखें
3. कंबल को डंडे पर मोड़ें
4. दूसरा डंडा दोहरे कंबल पर रखें
5. बाकी कंबल मोड़ें

### जैकेट स्ट्रेचर
**सामग्री:** 2-3 मजबूत जैकेट + 2 डंडे

1. जैकेट बंद करें
2. उल्टा करें (आस्तीन अंदर)
3. डंडे आस्तीन से गुजारें

---

## 🚗 वाहन में लोड करना

:::success
**रोगी सिर पहले जाता है**

ताकि परिचारक परिवहन के दौरान चेहरे और वायुमार्ग की निगरानी कर सके।
:::

### सीढ़ियों पर कैरी का नियम:
> **सिर हमेशा पैरों से ऊंचा**
- ऊपर जाना: सिर पहले
- नीचे जाना: पैर पहले (सिर ऊंचा रहे)

---

## 📋 SBAR हैंडओवर

| अक्षर | तत्व | उदाहरण |
|:------|:-----|:-------|
| **S** | स्थिति | "[गांव] से MPHW, [उम्र/लिंग] रोगी [समस्या] के साथ" |
| **B** | पृष्ठभूमि | क्या हुआ? कब? चिकित्सा इतिहास? |
| **A** | मूल्यांकन | महत्वपूर्ण संकेत, चेतना, मुख्य निष्कर्ष |
| **R** | सिफारिश | "रोगी को आपातकालीन परिवहन चाहिए" |

---

## 📝 परिवहन के दौरान दस्तावेज

### रोगी विवरण
- नाम, उम्र, लिंग
- पता, संपर्क नंबर

### घटना विवरण
- क्या हुआ, कब, कहां

### नैदानिक स्थिति
- चेतना स्तर
- पहचानी गई चोटें
- महत्वपूर्ण संकेत
- दिए गए हस्तक्षेप

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**

**कब हिलाएं:**
- तत्काल खतरा → हिलाएं
- खतरा नहीं + मदद आ रही → प्रतीक्षा
- रीढ़ की चोट → न्यूनतम हिलाएं

**कैरी विधियां:**
- होश में + चल सकता → मानव बैसाखी
- बेहोश → फोर-एंड-आफ्ट या स्ट्रेचर
- रीढ़ की चोट → 4-व्यक्ति, कठोर स्ट्रेचर

**परिवहन नियम:**
- सिर पैरों से ऊंचा
- वाहन में सिर पहले
- लगातार निगरानी
- सब कुछ दस्तावेज करें

**हैंडओवर - SBAR:**
- स्थिति
- पृष्ठभूमि
- मूल्यांकन
- सिफारिश
:::

---

## 🎓 प्राथमिक चिकित्सा पाठ्यक्रम सारांश

सभी 12 पाठ पूरे करने पर बधाई! आपने सीखा:

1. ✅ प्राथमिक चिकित्सा के सिद्धांत
2. ✅ CPR और बुनियादी जीवन रक्षा
3. ✅ रक्तस्राव और घाव देखभाल
4. ✅ अस्थि भंग और स्प्लिंटिंग
5. ✅ जलना, काटना और विषाक्तता
6. ✅ अस्थि भंग, विस्थापन और मोच
7. ✅ जलना (उन्नत)
8. ✅ काटना और डंक
9. ✅ विषाक्तता प्रबंधन
10. ✅ डूबना
11. ✅ चिकित्सा आपात स्थितियां
12. ✅ आपातकालीन परिवहन

:::success
**MPHW के रूप में आप आवश्यक प्राथमिक चिकित्सा ज्ञान से लैस हैं। याद रखें:**
- शांत रहें
- सुरक्षा पहले सुनिश्चित करें
- जल्दी मदद बुलाएं
- आत्मविश्वास से कौशल का उपयोग करें
- नियमित अभ्यास करें
:::
`
  }
];
