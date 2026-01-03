export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const anatomyLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Anatomy & Body Organization",
    titleHi: "शरीर रचना विज्ञान का परिचय",
    contentEn: `
# 🫀 Introduction to Anatomy & Body Organization

---

## 📖 What is Anatomy?

> **Anatomy** is the study of body structures and their relationships. The word comes from Greek meaning "to cut up".

:::info
**Key Difference:**
- **Anatomy** = WHAT structures exist and WHERE they are located
- **Physiology** = HOW these structures work
:::

---

## 🔬 Branches of Anatomy

| Branch | Description | Focus |
|:-------|:------------|:------|
| 🔍 **Gross Anatomy** | Structures visible to naked eye | Large organs, muscles |
| 🔬 **Microscopic Anatomy** | Structures seen with microscope | Cells, tissues |
| 🗺️ **Regional Anatomy** | Study by body region | Head, thorax, abdomen |
| ⚙️ **Systemic Anatomy** | Study by organ system | Skeletal, muscular, etc. |

---

## 🧍 Anatomical Position

> The **standard anatomical position** is the reference point for all body descriptions.

### Standard Position Requirements:
- Standing upright
- Facing forward
- Arms at sides
- **Palms facing forward** (important!)
- Feet slightly apart

:::tip
**Why it matters:** When a doctor says "the wound is on the lateral aspect of the right arm," everyone knows exactly where to look because we all reference the same standard position.
:::

---

## 🧭 Directional Terms

| Term | Meaning | Example |
|:-----|:--------|:--------|
| **Superior** | Above/toward head | Heart is superior to stomach |
| **Inferior** | Below/toward feet | Stomach is inferior to heart |
| **Anterior (Ventral)** | Front of body | Chest is on anterior surface |
| **Posterior (Dorsal)** | Back of body | Spine is posterior |
| **Medial** | Toward midline | Nose is medial to ears |
| **Lateral** | Away from midline | Ears are lateral to nose |
| **Proximal** | Closer to trunk | Elbow is proximal to wrist |
| **Distal** | Farther from trunk | Fingers are distal to wrist |
| **Superficial** | Toward surface | Skin is superficial to muscle |
| **Deep** | Away from surface | Bones are deep to skin |

---

## 📐 Body Planes

Body planes are imaginary flat surfaces that divide the body:

### Types of Planes

| Plane | Divides Into | Used For |
|:------|:-------------|:---------|
| **Sagittal** | Left and Right | MRI scans |
| **Frontal (Coronal)** | Front and Back | Chest X-rays |
| **Transverse (Horizontal)** | Upper and Lower | CT scans |

:::info
**Midsagittal Plane:** Divides body into EQUAL left and right halves
**Parasagittal Plane:** Divides into UNEQUAL left and right portions
:::

---

## 🔢 Levels of Structural Organization

The body is organized from simple to complex:

| Level | Description | Examples |
|:------|:------------|:---------|
| 1️⃣ **Chemical** | Atoms and molecules | Water, proteins, DNA |
| 2️⃣ **Cellular** | Basic units of life | Nerve cells, muscle cells |
| 3️⃣ **Tissue** | Groups of similar cells | Epithelial, connective |
| 4️⃣ **Organ** | Two+ tissues together | Heart, stomach, kidneys |
| 5️⃣ **System** | Organs working together | Digestive, respiratory |
| 6️⃣ **Organism** | Complete living being | Human body |

---

## 🧬 Four Basic Tissue Types

| Tissue | Function | Examples |
|:-------|:---------|:---------|
| **Epithelial** | Covers surfaces, lines cavities | Skin, intestinal lining |
| **Connective** | Supports and connects | Bone, cartilage, blood |
| **Muscle** | Enables movement | Skeletal, cardiac, smooth |
| **Nervous** | Communication and control | Brain, nerves |

---

## 🏠 Body Cavities

### Dorsal Cavity (Back)
| Cavity | Contains |
|:-------|:---------|
| **Cranial** | Brain |
| **Vertebral (Spinal)** | Spinal cord |

### Ventral Cavity (Front)
| Cavity | Contains |
|:-------|:---------|
| **Thoracic** | Heart, lungs, major blood vessels |
| **Abdominal** | Stomach, intestines, liver, kidneys |
| **Pelvic** | Bladder, reproductive organs, rectum |

:::warning
The **diaphragm** separates the thoracic cavity from the abdominal cavity.
:::

---

## 🎯 Abdominal Quadrants

| Quadrant | Abbreviation | Major Organs |
|:---------|:-------------|:-------------|
| Right Upper | **RUQ** | Liver, gallbladder |
| Left Upper | **LUQ** | Stomach, spleen |
| Right Lower | **RLQ** | Appendix, cecum |
| Left Lower | **LLQ** | Sigmoid colon |

:::success
**Clinical Tip:** When documenting abdominal pain, use quadrants: "Patient reports pain in RLQ" immediately suggests possible appendicitis.
:::

---

## 🫀 The 11 Organ Systems

| System | Main Components | Primary Functions |
|:-------|:----------------|:------------------|
| **Integumentary** | Skin, hair, nails | Protection, temperature |
| **Skeletal** | Bones, cartilage, joints | Support, protection |
| **Muscular** | Skeletal muscles | Movement, posture |
| **Nervous** | Brain, spinal cord, nerves | Control, coordination |
| **Endocrine** | Glands (thyroid, pituitary) | Hormone production |
| **Cardiovascular** | Heart, blood vessels | Blood transport |
| **Lymphatic** | Lymph nodes, spleen | Immunity |
| **Respiratory** | Lungs, airways | Gas exchange |
| **Digestive** | Stomach, intestines, liver | Digestion, absorption |
| **Urinary** | Kidneys, bladder | Waste removal |
| **Reproductive** | Ovaries/testes, uterus | Reproduction |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Anatomy = Structure, Physiology = Function
2. Anatomical position: Standing, facing forward, palms forward
3. Superior = Above, Inferior = Below
4. Medial = Toward middle, Lateral = Away from middle
5. 4 tissue types: Epithelial, Connective, Muscle, Nervous
6. 11 organ systems in the human body
7. RUQ pain → think liver/gallbladder
8. RLQ pain → think appendix
:::
`,
    contentHi: `
# 🫀 शरीर रचना विज्ञान का परिचय

---

## 📖 शरीर रचना विज्ञान क्या है?

> **शरीर रचना विज्ञान (Anatomy)** शरीर की संरचनाओं और उनके संबंधों का अध्ययन है। यह शब्द ग्रीक भाषा से आया है जिसका अर्थ है "काटना"।

:::info
**मुख्य अंतर:**
- **शरीर रचना विज्ञान (Anatomy)** = कौन सी संरचनाएं हैं और कहां स्थित हैं
- **क्रिया विज्ञान (Physiology)** = ये संरचनाएं कैसे काम करती हैं
:::

---

## 🔬 शरीर रचना विज्ञान की शाखाएं

| शाखा | विवरण | फोकस |
|:-----|:------|:-----|
| 🔍 **स्थूल शरीर रचना** | नग्न आंखों से दिखने वाली संरचनाएं | बड़े अंग, मांसपेशियां |
| 🔬 **सूक्ष्म शरीर रचना** | सूक्ष्मदर्शी से दिखने वाली | कोशिकाएं, ऊतक |
| 🗺️ **क्षेत्रीय शरीर रचना** | शरीर के क्षेत्र के अनुसार | सिर, वक्ष, उदर |
| ⚙️ **तंत्रीय शरीर रचना** | अंग तंत्र के अनुसार | कंकाल, पेशी आदि |

---

## 🧍 शारीरिक स्थिति (Anatomical Position)

> **मानक शारीरिक स्थिति** सभी शारीरिक विवरणों के लिए संदर्भ बिंदु है।

### मानक स्थिति की आवश्यकताएं:
- सीधा खड़ा
- आगे की ओर मुख
- भुजाएं बगल में
- **हथेलियां आगे की ओर** (महत्वपूर्ण!)
- पैर थोड़े अलग

:::tip
**यह क्यों महत्वपूर्ण है:** जब कोई डॉक्टर कहता है "घाव दाएं हाथ के पार्श्व पक्ष पर है," तो सभी को पता होता है कि कहां देखना है।
:::

---

## 🧭 दिशात्मक शब्द (Directional Terms)

| शब्द | अर्थ | उदाहरण |
|:-----|:-----|:-------|
| **Superior (ऊर्ध्व)** | ऊपर/सिर की ओर | हृदय आमाशय से ऊपर है |
| **Inferior (अधो)** | नीचे/पैरों की ओर | आमाशय हृदय से नीचे है |
| **Anterior (अग्र)** | शरीर का अगला भाग | छाती अग्र सतह पर है |
| **Posterior (पश्च)** | शरीर का पिछला भाग | रीढ़ पश्च है |
| **Medial (मध्य)** | मध्य रेखा की ओर | नाक कानों से मध्य है |
| **Lateral (पार्श्व)** | मध्य रेखा से दूर | कान नाक से पार्श्व हैं |
| **Proximal (समीपस्थ)** | धड़ के निकट | कोहनी कलाई से समीपस्थ है |
| **Distal (दूरस्थ)** | धड़ से दूर | उंगलियां कलाई से दूरस्थ हैं |

---

## 📐 शरीर के तल (Body Planes)

| तल | विभाजन | उपयोग |
|:---|:-------|:------|
| **धनु तल (Sagittal)** | बाएं और दाएं | MRI स्कैन |
| **ललाट तल (Frontal)** | आगे और पीछे | छाती X-ray |
| **अनुप्रस्थ तल (Transverse)** | ऊपर और नीचे | CT स्कैन |

---

## 🔢 संरचनात्मक संगठन के स्तर

| स्तर | विवरण | उदाहरण |
|:-----|:------|:-------|
| 1️⃣ **रासायनिक** | परमाणु और अणु | जल, प्रोटीन, DNA |
| 2️⃣ **कोशिकीय** | जीवन की मूल इकाई | तंत्रिका, पेशी कोशिका |
| 3️⃣ **ऊतक** | समान कोशिकाओं के समूह | उपकला, संयोजी |
| 4️⃣ **अंग** | दो+ ऊतक एक साथ | हृदय, आमाशय |
| 5️⃣ **तंत्र** | अंग एक साथ कार्य | पाचन, श्वसन |
| 6️⃣ **जीव** | संपूर्ण जीवित प्राणी | मानव शरीर |

---

## 🧬 चार मूल ऊतक प्रकार

| ऊतक | कार्य | उदाहरण |
|:-----|:------|:-------|
| **उपकला (Epithelial)** | सतहों को ढकता है | त्वचा, आंत का अस्तर |
| **संयोजी (Connective)** | सहारा और जोड़ता है | हड्डी, उपास्थि, रक्त |
| **पेशी (Muscle)** | गति सक्षम करता है | कंकाल, हृदय, चिकनी |
| **तंत्रिका (Nervous)** | संचार और नियंत्रण | मस्तिष्क, तंत्रिकाएं |

---

## 🏠 शरीर की गुहाएं

### पृष्ठीय गुहा (Dorsal Cavity)
| गुहा | सामग्री |
|:-----|:--------|
| **कपाल गुहा** | मस्तिष्क |
| **कशेरुक गुहा** | मेरुरज्जु |

### उदर गुहा (Ventral Cavity)
| गुहा | सामग्री |
|:-----|:--------|
| **वक्ष गुहा** | हृदय, फेफड़े |
| **उदर गुहा** | आमाशय, आंत, यकृत |
| **श्रोणि गुहा** | मूत्राशय, प्रजनन अंग |

:::warning
**डायाफ्राम** वक्ष गुहा को उदर गुहा से अलग करता है।
:::

---

## 🎯 उदर के चतुर्थांश

| चतुर्थांश | संक्षिप्त | प्रमुख अंग |
|:---------|:---------|:----------|
| दायां ऊपरी | **RUQ** | यकृत, पित्ताशय |
| बायां ऊपरी | **LUQ** | आमाशय, प्लीहा |
| दायां निचला | **RLQ** | अपेंडिक्स |
| बायां निचला | **LLQ** | सिग्मॉइड कोलन |

:::success
**नैदानिक टिप:** RLQ में दर्द = संभावित अपेंडिसाइटिस
:::

---

## 🫀 11 अंग तंत्र

| तंत्र | मुख्य घटक | प्राथमिक कार्य |
|:------|:---------|:-------------|
| **त्वचीय** | त्वचा, बाल, नाखून | सुरक्षा |
| **कंकाल** | हड्डियां, जोड़ | सहारा |
| **पेशी** | मांसपेशियां | गति |
| **तंत्रिका** | मस्तिष्क, मेरुरज्जु | नियंत्रण |
| **अंतःस्रावी** | ग्रंथियां | हार्मोन |
| **हृदय** | हृदय, रक्त वाहिकाएं | रक्त परिवहन |
| **लसीका** | लिम्फ नोड्स | प्रतिरक्षा |
| **श्वसन** | फेफड़े, वायुमार्ग | गैस विनिमय |
| **पाचन** | आमाशय, आंत | पाचन |
| **मूत्र** | गुर्दे, मूत्राशय | अपशिष्ट निष्कासन |
| **प्रजनन** | अंडाशय/वृषण | प्रजनन |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. Anatomy = संरचना, Physiology = कार्य
2. शारीरिक स्थिति: खड़े, आगे मुख, हथेलियां आगे
3. Superior = ऊपर, Inferior = नीचे
4. Medial = मध्य की ओर, Lateral = मध्य से दूर
5. 4 ऊतक प्रकार: उपकला, संयोजी, पेशी, तंत्रिका
6. 11 अंग तंत्र मानव शरीर में
7. RUQ दर्द → यकृत/पित्ताशय
8. RLQ दर्द → अपेंडिक्स
:::
`
  },
  {
    id: 2,
    titleEn: "Skeletal System",
    titleHi: "कंकाल तंत्र",
    contentEn: `
# 🦴 Skeletal System

---

## 📖 Introduction

> The **skeletal system** provides the structural framework for the body, protects vital organs, enables movement, stores minerals, and produces blood cells.

:::info
**Key Facts:**
- Adult human body has **206 bones**
- Newborn has about **270 bones** (some fuse together)
- Largest bone: **Femur** (thigh bone)
- Smallest bone: **Stapes** (in ear)
:::

---

## 🦴 Functions of the Skeletal System

| Function | Description |
|:---------|:------------|
| 🏗️ **Support** | Provides framework for body |
| 🛡️ **Protection** | Protects vital organs (skull→brain, ribs→heart) |
| 🏃 **Movement** | Works with muscles for motion |
| 💎 **Mineral Storage** | Stores calcium and phosphorus |
| 🩸 **Blood Cell Production** | Red marrow produces blood cells |
| ⚡ **Energy Storage** | Yellow marrow stores fat |

---

## 📊 Classification of Bones

| Type | Shape | Examples |
|:-----|:------|:---------|
| **Long Bones** | Longer than wide | Femur, humerus, tibia |
| **Short Bones** | Cube-shaped | Carpals (wrist), tarsals (ankle) |
| **Flat Bones** | Thin and flat | Skull bones, ribs, sternum |
| **Irregular Bones** | Complex shapes | Vertebrae, hip bones |
| **Sesamoid Bones** | Within tendons | Patella (kneecap) |

---

## 🦴 Structure of a Long Bone

| Part | Description | Function |
|:-----|:------------|:---------|
| **Diaphysis** | Shaft (middle) | Support, contains yellow marrow |
| **Epiphysis** | Ends of bone | Joint surfaces, contains red marrow |
| **Metaphysis** | Between diaphysis and epiphysis | Growth plate location |
| **Periosteum** | Outer membrane | Protection, blood supply |
| **Medullary Cavity** | Hollow center | Contains marrow |

:::tip
**Epiphyseal Plate (Growth Plate):** Cartilage area where bone grows in length. When growth stops, it becomes the epiphyseal line.
:::

---

## 💀 Axial Skeleton (80 bones)

### Skull (22 bones)
| Category | Bones | Count |
|:---------|:------|:------|
| **Cranial Bones** | Frontal, Parietal (2), Temporal (2), Occipital, Sphenoid, Ethmoid | 8 |
| **Facial Bones** | Maxilla (2), Mandible, Zygomatic (2), Nasal (2), etc. | 14 |

### Vertebral Column (26 bones)
| Region | Vertebrae | Special Features |
|:-------|:----------|:-----------------|
| **Cervical** | C1-C7 (7) | C1=Atlas, C2=Axis |
| **Thoracic** | T1-T12 (12) | Attach to ribs |
| **Lumbar** | L1-L5 (5) | Largest, weight-bearing |
| **Sacrum** | 5 fused | Part of pelvis |
| **Coccyx** | 4 fused | Tailbone |

### Thoracic Cage
| Structure | Count | Function |
|:----------|:------|:---------|
| **Sternum** | 1 | Breastbone |
| **True Ribs** | 1-7 | Attach directly to sternum |
| **False Ribs** | 8-10 | Attach via cartilage |
| **Floating Ribs** | 11-12 | No anterior attachment |

---

## 💪 Appendicular Skeleton (126 bones)

### Upper Limb (per side)
| Region | Bones |
|:-------|:------|
| **Shoulder** | Clavicle, Scapula |
| **Arm** | Humerus |
| **Forearm** | Radius, Ulna |
| **Hand** | Carpals (8), Metacarpals (5), Phalanges (14) |

### Lower Limb (per side)
| Region | Bones |
|:-------|:------|
| **Hip** | Os Coxae (Ilium, Ischium, Pubis) |
| **Thigh** | Femur |
| **Leg** | Tibia, Fibula, Patella |
| **Foot** | Tarsals (7), Metatarsals (5), Phalanges (14) |

---

## 🔗 Types of Joints

| Type | Movement | Examples |
|:-----|:---------|:---------|
| **Fibrous** | No movement | Skull sutures |
| **Cartilaginous** | Slight movement | Intervertebral discs |
| **Synovial** | Free movement | Knee, elbow, shoulder |

### Synovial Joint Types
| Joint Type | Movement | Example |
|:-----------|:---------|:--------|
| **Hinge** | Flexion/Extension | Elbow, knee |
| **Ball & Socket** | All directions | Shoulder, hip |
| **Pivot** | Rotation | Atlas-Axis (neck) |
| **Saddle** | Multiple planes | Thumb |
| **Gliding** | Sliding | Wrist, ankle |

---

## 💉 Important Landmarks for MPHW

### Injection Sites
| Site | Bone Landmark |
|:-----|:--------------|
| **Deltoid (IM)** | Acromion process of scapula |
| **Vastus lateralis** | Greater trochanter of femur |
| **Dorsogluteal** | Posterior superior iliac spine |

### Pulse Points
| Pulse | Bone/Location |
|:------|:--------------|
| **Radial** | Lateral wrist (radius) |
| **Brachial** | Medial elbow (humerus) |
| **Femoral** | Inguinal area (femur) |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. 206 bones in adult, 270 in newborn
2. Axial = 80 bones (skull, spine, thorax)
3. Appendicular = 126 bones (limbs, girdles)
4. Femur = longest bone
5. Stapes = smallest bone
6. Cervical vertebrae = 7 (C1-C7)
7. True ribs = 1-7, False = 8-10, Floating = 11-12
8. Red marrow = blood cells, Yellow marrow = fat
:::
`,
    contentHi: `
# 🦴 कंकाल तंत्र

---

## 📖 परिचय

> **कंकाल तंत्र** शरीर को संरचनात्मक ढांचा प्रदान करता है, महत्वपूर्ण अंगों की रक्षा करता है, गति सक्षम करता है, खनिज संग्रहीत करता है और रक्त कोशिकाओं का उत्पादन करता है।

:::info
**मुख्य तथ्य:**
- वयस्क मानव शरीर में **206 हड्डियां**
- नवजात में लगभग **270 हड्डियां**
- सबसे बड़ी हड्डी: **फीमर** (जांघ की हड्डी)
- सबसे छोटी हड्डी: **स्टेपीज** (कान में)
:::

---

## 🦴 कंकाल तंत्र के कार्य

| कार्य | विवरण |
|:------|:------|
| 🏗️ **सहारा** | शरीर को ढांचा प्रदान करता है |
| 🛡️ **सुरक्षा** | महत्वपूर्ण अंगों की रक्षा |
| 🏃 **गति** | मांसपेशियों के साथ गति |
| 💎 **खनिज भंडारण** | कैल्शियम और फास्फोरस |
| 🩸 **रक्त कोशिका उत्पादन** | लाल मज्जा में |
| ⚡ **ऊर्जा भंडारण** | पीली मज्जा में वसा |

---

## 📊 हड्डियों का वर्गीकरण

| प्रकार | आकार | उदाहरण |
|:-------|:------|:-------|
| **लंबी हड्डियां** | चौड़ाई से अधिक लंबी | फीमर, ह्यूमरस |
| **छोटी हड्डियां** | घनाकार | कार्पल्स, टार्सल्स |
| **चपटी हड्डियां** | पतली और सपाट | खोपड़ी, पसलियां |
| **अनियमित हड्डियां** | जटिल आकार | कशेरुक |
| **सीसमॉइड हड्डियां** | कण्डराओं में | पटेला |

---

## 🦴 लंबी हड्डी की संरचना

| भाग | विवरण | कार्य |
|:----|:------|:------|
| **डायफिसिस** | मध्य भाग (शाफ्ट) | सहारा, पीली मज्जा |
| **एपिफिसिस** | हड्डी के सिरे | जोड़ सतह, लाल मज्जा |
| **पेरीओस्टियम** | बाहरी झिल्ली | सुरक्षा, रक्त आपूर्ति |
| **मेडुलरी कैविटी** | खोखला केंद्र | मज्जा रखता है |

---

## 💀 अक्षीय कंकाल (80 हड्डियां)

### खोपड़ी (22 हड्डियां)
| श्रेणी | हड्डियां | संख्या |
|:-------|:--------|:------|
| **कपाल हड्डियां** | ललाट, पार्श्विक, टेम्पोरल, आदि | 8 |
| **चेहरे की हड्डियां** | मैक्सिला, मैंडिबल, जाइगोमैटिक | 14 |

### कशेरुक स्तंभ (26 हड्डियां)
| क्षेत्र | कशेरुक | विशेष |
|:-------|:-------|:------|
| **ग्रीवा** | C1-C7 (7) | C1=एटलस, C2=एक्सिस |
| **वक्ष** | T1-T12 (12) | पसलियों से जुड़ी |
| **कटि** | L1-L5 (5) | सबसे बड़ी |
| **त्रिक** | 5 जुड़ी | श्रोणि का भाग |
| **अनुत्रिक** | 4 जुड़ी | पूंछ की हड्डी |

### वक्षीय पिंजरा
| संरचना | संख्या | विवरण |
|:-------|:------|:------|
| **उरोस्थि** | 1 | छाती की हड्डी |
| **सच्ची पसलियां** | 1-7 | सीधे उरोस्थि से जुड़ी |
| **झूठी पसलियां** | 8-10 | उपास्थि से जुड़ी |
| **तैरती पसलियां** | 11-12 | कोई अग्र जुड़ाव नहीं |

---

## 💪 उपांगीय कंकाल (126 हड्डियां)

### ऊपरी अंग (प्रति पक्ष)
| क्षेत्र | हड्डियां |
|:-------|:---------|
| **कंधा** | क्लेविकल, स्कैपुला |
| **बाहु** | ह्यूमरस |
| **अग्रबाहु** | रेडियस, अल्ना |
| **हाथ** | कार्पल्स (8), मेटाकार्पल्स (5), फैलेंजेस (14) |

### निचला अंग (प्रति पक्ष)
| क्षेत्र | हड्डियां |
|:-------|:---------|
| **कूल्हा** | ओस कॉक्सी |
| **जांघ** | फीमर |
| **टांग** | टिबिया, फिबुला, पटेला |
| **पैर** | टार्सल्स (7), मेटाटार्सल्स (5), फैलेंजेस (14) |

---

## 🔗 जोड़ों के प्रकार

| प्रकार | गति | उदाहरण |
|:-------|:----|:-------|
| **रेशेदार** | कोई गति नहीं | खोपड़ी के सीवन |
| **उपास्थि** | थोड़ी गति | अंतर-कशेरुक डिस्क |
| **श्लेष** | मुक्त गति | घुटना, कोहनी |

### श्लेष जोड़ प्रकार
| प्रकार | गति | उदाहरण |
|:-------|:----|:-------|
| **कब्जा** | मोड़ना/फैलाना | कोहनी, घुटना |
| **गेंद और सॉकेट** | सभी दिशाओं में | कंधा, कूल्हा |
| **धुरी** | घूर्णन | गर्दन |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. वयस्क में 206 हड्डियां, नवजात में 270
2. अक्षीय = 80 (खोपड़ी, रीढ़, वक्ष)
3. उपांगीय = 126 (अंग)
4. फीमर = सबसे लंबी हड्डी
5. स्टेपीज = सबसे छोटी हड्डी
6. ग्रीवा कशेरुक = 7 (C1-C7)
7. सच्ची पसलियां = 1-7
8. लाल मज्जा = रक्त कोशिकाएं
:::
`
  },
  {
    id: 3,
    titleEn: "Muscular System",
    titleHi: "पेशी तंत्र",
    contentEn: `
# 💪 Muscular System

---

## 📖 Introduction

> The **muscular system** enables body movement, maintains posture, and generates heat. It consists of over **600 muscles** making up about **40% of body weight**.

:::info
**Key Facts:**
- Over **600 skeletal muscles** in the body
- Muscles make up **40-50%** of body weight
- **Gluteus maximus** = largest muscle
- **Stapedius** = smallest muscle (in ear)
:::

---

## 🔬 Types of Muscle Tissue

| Type | Control | Location | Appearance |
|:-----|:--------|:---------|:-----------|
| **Skeletal** | Voluntary | Attached to bones | Striated (striped) |
| **Cardiac** | Involuntary | Heart only | Striated, branched |
| **Smooth** | Involuntary | Organs, blood vessels | Non-striated |

---

## 🏋️ Functions of Muscular System

| Function | Description |
|:---------|:------------|
| 🏃 **Movement** | Body and limb motion |
| 🧍 **Posture** | Maintains body position |
| 🌡️ **Heat Production** | 85% of body heat from muscles |
| 🛡️ **Protection** | Protects internal organs |
| 💓 **Circulation** | Heart pumps blood |
| 🍽️ **Digestion** | Moves food through GI tract |

---

## 🔬 Structure of Skeletal Muscle

| Level | Description |
|:------|:------------|
| **Muscle** | Whole organ (e.g., biceps) |
| **Fascicle** | Bundle of muscle fibers |
| **Muscle Fiber** | Single muscle cell |
| **Myofibril** | Contractile unit within fiber |
| **Sarcomere** | Functional unit of contraction |

### Connective Tissue Coverings
| Layer | Covers |
|:------|:-------|
| **Epimysium** | Entire muscle |
| **Perimysium** | Each fascicle |
| **Endomysium** | Each muscle fiber |

---

## ⚡ Muscle Contraction

> **Sliding Filament Theory:** Muscle contracts when actin and myosin filaments slide past each other.

### Key Components
| Component | Function |
|:----------|:---------|
| **Actin** | Thin filament |
| **Myosin** | Thick filament with heads |
| **ATP** | Energy source |
| **Calcium** | Triggers contraction |

:::tip
**Remember:** Muscles can only PULL, not push. They work in pairs (agonist-antagonist).
:::

---

## 💉 IM Injection Sites

| Site | Muscle | Maximum Volume |
|:-----|:-------|:---------------|
| **Deltoid** | Deltoid muscle | 1 mL |
| **Vastus Lateralis** | Thigh muscle | 5 mL (adult) |
| **Ventrogluteal** | Gluteus medius | 3 mL |
| **Dorsogluteal** | Gluteus maximus | 3 mL |

:::warning
**Safety:** Vastus lateralis is safest for infants and children due to good muscle mass and no major nerves.
:::

---

## 🏋️ Major Muscle Groups

### Head and Neck
| Muscle | Action |
|:-------|:-------|
| **Frontalis** | Raises eyebrows |
| **Orbicularis oculi** | Closes eyelids |
| **Masseter** | Closes jaw (chewing) |
| **Sternocleidomastoid** | Turns head |

### Upper Limb
| Muscle | Action |
|:-------|:-------|
| **Deltoid** | Abducts arm |
| **Biceps brachii** | Flexes elbow |
| **Triceps brachii** | Extends elbow |
| **Flexors/Extensors** | Move wrist and fingers |

### Trunk
| Muscle | Action |
|:-------|:-------|
| **Pectoralis major** | Flexes arm, adducts |
| **Rectus abdominis** | Flexes trunk (sit-ups) |
| **External oblique** | Rotates trunk |
| **Latissimus dorsi** | Extends, adducts arm |

### Lower Limb
| Muscle | Action |
|:-------|:-------|
| **Gluteus maximus** | Extends hip |
| **Quadriceps** | Extends knee |
| **Hamstrings** | Flexes knee |
| **Gastrocnemius** | Plantarflexes foot |

---

## 🔄 Muscle Actions

| Term | Meaning |
|:-----|:--------|
| **Flexion** | Decrease joint angle |
| **Extension** | Increase joint angle |
| **Abduction** | Move away from midline |
| **Adduction** | Move toward midline |
| **Rotation** | Turn around axis |
| **Pronation** | Palm down |
| **Supination** | Palm up |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. 3 muscle types: Skeletal, Cardiac, Smooth
2. Skeletal = voluntary, striated
3. Cardiac = involuntary, striated
4. Smooth = involuntary, non-striated
5. Gluteus maximus = largest muscle
6. Deltoid injection = max 1 mL
7. Vastus lateralis = safest for infants
8. Muscles can only PULL (work in pairs)
:::
`,
    contentHi: `
# 💪 पेशी तंत्र

---

## 📖 परिचय

> **पेशी तंत्र** शरीर की गति सक्षम करता है, मुद्रा बनाए रखता है और ऊष्मा उत्पन्न करता है। इसमें **600 से अधिक मांसपेशियां** हैं जो शरीर के वजन का लगभग **40%** बनाती हैं।

:::info
**मुख्य तथ्य:**
- शरीर में **600+ कंकाल मांसपेशियां**
- मांसपेशियां शरीर के वजन का **40-50%**
- **ग्लूटस मैक्सिमस** = सबसे बड़ी मांसपेशी
- **स्टेपीडियस** = सबसे छोटी मांसपेशी
:::

---

## 🔬 पेशी ऊतक के प्रकार

| प्रकार | नियंत्रण | स्थान | दिखावट |
|:-------|:--------|:------|:-------|
| **कंकाल** | ऐच्छिक | हड्डियों से जुड़ी | धारीदार |
| **हृदय** | अनैच्छिक | केवल हृदय | धारीदार, शाखित |
| **चिकनी** | अनैच्छिक | अंग, रक्त वाहिकाएं | गैर-धारीदार |

---

## 🏋️ पेशी तंत्र के कार्य

| कार्य | विवरण |
|:------|:------|
| 🏃 **गति** | शरीर और अंगों की गति |
| 🧍 **मुद्रा** | शरीर की स्थिति बनाए रखना |
| 🌡️ **ऊष्मा उत्पादन** | 85% शरीर की गर्मी |
| 🛡️ **सुरक्षा** | आंतरिक अंगों की रक्षा |
| 💓 **परिसंचरण** | हृदय रक्त पंप करता है |
| 🍽️ **पाचन** | भोजन को आगे बढ़ाना |

---

## 🔬 कंकाल पेशी की संरचना

| स्तर | विवरण |
|:-----|:------|
| **पेशी** | पूरा अंग (जैसे बाइसेप्स) |
| **फैसिकल** | पेशी तंतुओं का बंडल |
| **पेशी तंतु** | एकल पेशी कोशिका |
| **माइओफाइब्रिल** | तंतु के भीतर संकुचन इकाई |
| **सार्कोमियर** | संकुचन की कार्यात्मक इकाई |

---

## 💉 IM इंजेक्शन स्थल

| स्थल | मांसपेशी | अधिकतम मात्रा |
|:-----|:---------|:-------------|
| **डेल्टॉइड** | डेल्टॉइड | 1 mL |
| **वास्टस लेटरालिस** | जांघ | 5 mL (वयस्क) |
| **वेंट्रोग्लूटियल** | ग्लूटस मीडियस | 3 mL |
| **डोर्सोग्लूटियल** | ग्लूटस मैक्सिमस | 3 mL |

:::warning
**सुरक्षा:** शिशुओं के लिए वास्टस लेटरालिस सबसे सुरक्षित है।
:::

---

## 🏋️ प्रमुख मांसपेशी समूह

### सिर और गर्दन
| मांसपेशी | क्रिया |
|:---------|:------|
| **फ्रंटालिस** | भौंहें उठाना |
| **मैसेटर** | जबड़ा बंद करना |
| **स्टर्नोक्लाइडोमास्टॉइड** | सिर घुमाना |

### ऊपरी अंग
| मांसपेशी | क्रिया |
|:---------|:------|
| **डेल्टॉइड** | बाहु को अपहरण |
| **बाइसेप्स** | कोहनी मोड़ना |
| **ट्राइसेप्स** | कोहनी फैलाना |

### धड़
| मांसपेशी | क्रिया |
|:---------|:------|
| **पेक्टोरलिस मेजर** | बाहु मोड़ना |
| **रेक्टस एब्डोमिनिस** | धड़ मोड़ना |

### निचला अंग
| मांसपेशी | क्रिया |
|:---------|:------|
| **ग्लूटस मैक्सिमस** | कूल्हा फैलाना |
| **क्वाड्रिसेप्स** | घुटना फैलाना |
| **हैमस्ट्रिंग** | घुटना मोड़ना |

---

## 🔄 पेशी क्रियाएं

| शब्द | अर्थ |
|:-----|:-----|
| **फ्लेक्सन** | जोड़ का कोण कम करना |
| **एक्सटेंशन** | जोड़ का कोण बढ़ाना |
| **अब्डक्शन** | मध्य रेखा से दूर |
| **अडक्शन** | मध्य रेखा की ओर |
| **रोटेशन** | अक्ष के चारों ओर घूमना |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. 3 पेशी प्रकार: कंकाल, हृदय, चिकनी
2. कंकाल = ऐच्छिक, धारीदार
3. हृदय = अनैच्छिक, धारीदार
4. चिकनी = अनैच्छिक, गैर-धारीदार
5. ग्लूटस मैक्सिमस = सबसे बड़ी
6. डेल्टॉइड इंजेक्शन = अधिकतम 1 mL
7. वास्टस लेटरालिस = शिशुओं के लिए सुरक्षित
8. मांसपेशियां केवल खींच सकती हैं
:::
`
  },
  {
    id: 4,
    titleEn: "Cardiovascular System",
    titleHi: "हृदय प्रणाली",
    contentEn: `
# ❤️ Cardiovascular System

---

## 📖 Introduction

> The **cardiovascular system** consists of the heart, blood vessels, and blood. It transports oxygen, nutrients, hormones, and waste products throughout the body.

:::info
**Key Facts:**
- Heart beats about **100,000 times/day**
- Pumps about **5 liters of blood/minute**
- Blood vessels would stretch **100,000 km** if laid end to end
- Adults have about **5 liters** of blood
:::

---

## ❤️ The Heart

### Location and Size
- Located in **mediastinum** (middle of thorax)
- Size of a **closed fist**
- Weighs about **300 grams**
- Tilted with apex pointing **left and down**

### Heart Layers
| Layer | Description |
|:------|:------------|
| **Pericardium** | Outer protective sac |
| **Epicardium** | Outer layer of heart wall |
| **Myocardium** | Middle muscular layer |
| **Endocardium** | Inner lining |

---

## 🚪 Heart Chambers and Valves

### Four Chambers
| Chamber | Function |
|:--------|:---------|
| **Right Atrium** | Receives deoxygenated blood from body |
| **Right Ventricle** | Pumps blood to lungs |
| **Left Atrium** | Receives oxygenated blood from lungs |
| **Left Ventricle** | Pumps blood to body (thickest wall) |

### Four Valves
| Valve | Location | Function |
|:------|:---------|:---------|
| **Tricuspid** | Right AV | Prevents backflow to RA |
| **Mitral (Bicuspid)** | Left AV | Prevents backflow to LA |
| **Pulmonary** | Right ventricle outlet | Prevents backflow from pulmonary artery |
| **Aortic** | Left ventricle outlet | Prevents backflow from aorta |

:::tip
**Remember Valve Order:** "Try Pulling My Aorta"
- **T**ricuspid → **P**ulmonary → **M**itral → **A**ortic
:::

---

## 🔄 Blood Flow Through Heart

> **Path:** Body → RA → RV → Lungs → LA → LV → Body

1. Deoxygenated blood enters **Right Atrium** via vena cava
2. Blood flows to **Right Ventricle**
3. Pumped to **Lungs** via pulmonary artery
4. Oxygenated blood returns to **Left Atrium** via pulmonary veins
5. Blood flows to **Left Ventricle**
6. Pumped to **Body** via aorta

---

## 🩸 Blood Vessels

| Type | Wall | Blood | Direction |
|:-----|:-----|:------|:----------|
| **Arteries** | Thick, elastic | Oxygenated* | Away from heart |
| **Veins** | Thin, with valves | Deoxygenated* | Toward heart |
| **Capillaries** | Single cell layer | Exchange | Between arteries & veins |

*Exception: Pulmonary vessels are opposite

---

## 📍 Major Arteries

| Artery | Supplies |
|:-------|:---------|
| **Aorta** | Main artery from heart |
| **Carotid** | Head and brain |
| **Subclavian** | Arms |
| **Coronary** | Heart muscle |
| **Renal** | Kidneys |
| **Femoral** | Legs |

---

## 📍 Pulse Points

| Pulse | Location | Use |
|:------|:---------|:----|
| **Radial** | Wrist (thumb side) | Most common for pulse |
| **Brachial** | Inner elbow | BP measurement |
| **Carotid** | Neck | Emergency/CPR |
| **Femoral** | Groin | Emergency |
| **Dorsalis Pedis** | Top of foot | Circulation check |
| **Posterior Tibial** | Behind ankle | Circulation check |

---

## 💓 Cardiac Cycle

| Phase | Event |
|:------|:------|
| **Systole** | Ventricles contract, blood ejected |
| **Diastole** | Ventricles relax, fill with blood |

### Heart Sounds
| Sound | Cause |
|:------|:------|
| **S1 (Lub)** | AV valves closing |
| **S2 (Dub)** | Semilunar valves closing |

---

## 📊 Blood Pressure

> **Normal BP:** 120/80 mmHg

| Reading | Meaning |
|:--------|:--------|
| **Systolic (top)** | Pressure during contraction |
| **Diastolic (bottom)** | Pressure during relaxation |

### BP Categories
| Category | Systolic | Diastolic |
|:---------|:---------|:----------|
| **Normal** | <120 | <80 |
| **Elevated** | 120-129 | <80 |
| **Hypertension Stage 1** | 130-139 | 80-89 |
| **Hypertension Stage 2** | ≥140 | ≥90 |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Heart has 4 chambers and 4 valves
2. Left ventricle = thickest (pumps to body)
3. Arteries = away from heart, thick walls
4. Veins = toward heart, have valves
5. Normal BP = 120/80 mmHg
6. S1 = AV valves closing (Lub)
7. S2 = Semilunar valves closing (Dub)
8. Brachial artery used for BP measurement
:::
`,
    contentHi: `
# ❤️ हृदय प्रणाली

---

## 📖 परिचय

> **हृदय प्रणाली** में हृदय, रक्त वाहिकाएं और रक्त शामिल हैं। यह ऑक्सीजन, पोषक तत्व, हार्मोन और अपशिष्ट पदार्थों का परिवहन करती है।

:::info
**मुख्य तथ्य:**
- हृदय प्रतिदिन लगभग **1,00,000 बार** धड़कता है
- प्रति मिनट लगभग **5 लीटर** रक्त पंप करता है
- वयस्कों में लगभग **5 लीटर** रक्त होता है
:::

---

## ❤️ हृदय

### स्थान और आकार
- **मीडियास्टिनम** में स्थित
- एक **बंद मुट्ठी** के आकार का
- लगभग **300 ग्राम** वजन
- शीर्ष **बाएं और नीचे** की ओर

### हृदय की परतें
| परत | विवरण |
|:----|:------|
| **पेरीकार्डियम** | बाहरी सुरक्षात्मक थैली |
| **एपिकार्डियम** | दीवार की बाहरी परत |
| **मायोकार्डियम** | मध्य पेशी परत |
| **एंडोकार्डियम** | आंतरिक अस्तर |

---

## 🚪 हृदय के कक्ष और वाल्व

### चार कक्ष
| कक्ष | कार्य |
|:----|:------|
| **दायां अलिंद** | शरीर से विऑक्सीजनित रक्त प्राप्त |
| **दायां निलय** | फेफड़ों को रक्त पंप |
| **बायां अलिंद** | फेफड़ों से ऑक्सीजनित रक्त प्राप्त |
| **बायां निलय** | शरीर को रक्त पंप (सबसे मोटी दीवार) |

### चार वाल्व
| वाल्व | स्थान |
|:------|:------|
| **ट्राइकस्पिड** | दायां AV |
| **माइट्रल** | बायां AV |
| **पल्मोनरी** | दायां निलय आउटलेट |
| **एओर्टिक** | बायां निलय आउटलेट |

---

## 🔄 हृदय में रक्त प्रवाह

> **मार्ग:** शरीर → RA → RV → फेफड़े → LA → LV → शरीर

1. विऑक्सीजनित रक्त **दाएं अलिंद** में वेना कावा से आता है
2. रक्त **दाएं निलय** में जाता है
3. **फेफड़ों** को पल्मोनरी धमनी से पंप होता है
4. ऑक्सीजनित रक्त **बाएं अलिंद** में लौटता है
5. रक्त **बाएं निलय** में जाता है
6. **शरीर** को महाधमनी से पंप होता है

---

## 🩸 रक्त वाहिकाएं

| प्रकार | दीवार | रक्त | दिशा |
|:-------|:------|:-----|:-----|
| **धमनियां** | मोटी, लचीली | ऑक्सीजनित | हृदय से दूर |
| **शिराएं** | पतली, वाल्व वाली | विऑक्सीजनित | हृदय की ओर |
| **केशिकाएं** | एकल कोशिका | विनिमय | बीच में |

---

## 📍 नाड़ी स्थान

| नाड़ी | स्थान | उपयोग |
|:------|:------|:------|
| **रेडियल** | कलाई | सबसे आम |
| **ब्रेकियल** | कोहनी | BP माप |
| **कैरोटिड** | गर्दन | आपातकाल/CPR |
| **फेमोरल** | जांघ | आपातकाल |

---

## 💓 हृदय चक्र

| चरण | घटना |
|:----|:------|
| **सिस्टोल** | निलय संकुचन |
| **डायस्टोल** | निलय विश्राम |

### हृदय ध्वनियां
| ध्वनि | कारण |
|:------|:------|
| **S1 (लब)** | AV वाल्व बंद |
| **S2 (डब)** | सेमीलूनर वाल्व बंद |

---

## 📊 रक्तचाप

> **सामान्य BP:** 120/80 mmHg

| श्रेणी | सिस्टोलिक | डायस्टोलिक |
|:-------|:---------|:----------|
| **सामान्य** | <120 | <80 |
| **उच्च** | 120-129 | <80 |
| **उच्च रक्तचाप चरण 1** | 130-139 | 80-89 |
| **उच्च रक्तचाप चरण 2** | ≥140 | ≥90 |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. हृदय में 4 कक्ष और 4 वाल्व
2. बायां निलय = सबसे मोटा
3. धमनियां = हृदय से दूर
4. शिराएं = हृदय की ओर
5. सामान्य BP = 120/80 mmHg
6. S1 = AV वाल्व बंद (लब)
7. S2 = सेमीलूनर वाल्व बंद (डब)
8. ब्रेकियल धमनी = BP माप के लिए
:::
`
  },
  {
    id: 5,
    titleEn: "Respiratory System",
    titleHi: "श्वसन तंत्र",
    contentEn: `
# 🫁 Respiratory System

---

## 📖 Introduction

> The **respiratory system** facilitates gas exchange - bringing oxygen into the body and removing carbon dioxide.

:::info
**Key Facts:**
- We breathe about **12-20 times/minute** at rest
- Total lung capacity: **6 liters**
- Surface area of lungs: **70 square meters** (size of tennis court)
- Right lung has **3 lobes**, left has **2 lobes**
:::

---

## 🔼 Upper Respiratory Tract

| Structure | Function |
|:----------|:---------|
| **Nose** | Filters, warms, humidifies air |
| **Nasal Cavity** | Contains mucus and cilia |
| **Pharynx (Throat)** | Passageway for air and food |
| **Larynx (Voice Box)** | Contains vocal cords |

### Pharynx Divisions
| Part | Location |
|:-----|:---------|
| **Nasopharynx** | Behind nose |
| **Oropharynx** | Behind mouth |
| **Laryngopharynx** | Behind larynx |

---

## 🔽 Lower Respiratory Tract

| Structure | Function |
|:----------|:---------|
| **Trachea** | Windpipe, carries air to bronchi |
| **Bronchi** | Main branches to lungs |
| **Bronchioles** | Smaller airways |
| **Alveoli** | Air sacs where gas exchange occurs |

### Trachea Facts
- About **10-12 cm** long
- Contains **16-20 C-shaped cartilage** rings
- Divides at **carina** into right and left bronchi

---

## 🫁 The Lungs

### Structure
| Feature | Right Lung | Left Lung |
|:--------|:-----------|:----------|
| **Lobes** | 3 (upper, middle, lower) | 2 (upper, lower) |
| **Fissures** | 2 (oblique, horizontal) | 1 (oblique) |
| **Size** | Larger, wider | Smaller (cardiac notch) |

### Pleura
| Layer | Location |
|:------|:---------|
| **Visceral Pleura** | Covers lung surface |
| **Parietal Pleura** | Lines chest wall |
| **Pleural Cavity** | Space between (contains fluid) |

---

## 🔄 Gas Exchange

> **Occurs in Alveoli:** O₂ moves into blood, CO₂ moves out

### Process
1. Air enters alveoli
2. O₂ diffuses across alveolar membrane
3. O₂ binds to hemoglobin in RBCs
4. CO₂ diffuses from blood to alveoli
5. CO₂ exhaled

:::tip
**Remember:** Gas moves from HIGH concentration to LOW concentration (diffusion)
:::

---

## 🌬️ Mechanics of Breathing

### Inspiration (Breathing In)
| Action | Result |
|:-------|:-------|
| Diaphragm contracts | Moves down, increases thoracic volume |
| External intercostals contract | Ribs move up and out |
| Lung pressure decreases | Air rushes in |

### Expiration (Breathing Out)
| Action | Result |
|:-------|:-------|
| Diaphragm relaxes | Moves up |
| External intercostals relax | Ribs move down |
| Lung pressure increases | Air pushed out |

---

## 📊 Lung Volumes

| Volume | Definition | Amount |
|:-------|:-----------|:-------|
| **Tidal Volume (TV)** | Normal breath | 500 mL |
| **Inspiratory Reserve (IRV)** | Extra after normal inspiration | 3000 mL |
| **Expiratory Reserve (ERV)** | Extra after normal expiration | 1100 mL |
| **Residual Volume (RV)** | Always remains in lungs | 1200 mL |
| **Vital Capacity (VC)** | TV + IRV + ERV | 4600 mL |
| **Total Lung Capacity** | VC + RV | 5800 mL |

---

## 🩺 Clinical Assessment

### Normal Respiratory Rate
| Age | Rate (breaths/min) |
|:----|:-------------------|
| Newborn | 30-60 |
| Infant | 20-40 |
| Child | 15-30 |
| Adult | 12-20 |

### Abnormal Breathing Patterns
| Pattern | Description |
|:--------|:------------|
| **Tachypnea** | Fast breathing (>20/min) |
| **Bradypnea** | Slow breathing (<12/min) |
| **Dyspnea** | Difficulty breathing |
| **Apnea** | No breathing |

---

## 🎯 Quick Revision Points

:::tip
**Remember These Key Points:**
1. Right lung = 3 lobes, Left lung = 2 lobes
2. Gas exchange occurs in alveoli
3. Trachea has 16-20 C-shaped cartilage rings
4. Normal adult respiratory rate = 12-20/min
5. Tidal volume = 500 mL
6. Diaphragm = main muscle of breathing
7. O₂ binds to hemoglobin
8. Pleural cavity contains lubricating fluid
:::
`,
    contentHi: `
# 🫁 श्वसन तंत्र

---

## 📖 परिचय

> **श्वसन तंत्र** गैस विनिमय की सुविधा प्रदान करता है - शरीर में ऑक्सीजन लाना और कार्बन डाइऑक्साइड निकालना।

:::info
**मुख्य तथ्य:**
- हम आराम से प्रति मिनट **12-20 बार** सांस लेते हैं
- कुल फेफड़े की क्षमता: **6 लीटर**
- दायां फेफड़ा: **3 पालियां**, बायां: **2 पालियां**
:::

---

## 🔼 ऊपरी श्वसन पथ

| संरचना | कार्य |
|:-------|:------|
| **नाक** | हवा को छानता, गर्म करता है |
| **नासिका गुहा** | बलगम और सिलिया |
| **ग्रसनी (गला)** | हवा और भोजन का मार्ग |
| **स्वरयंत्र** | स्वर तंतु रखता है |

---

## 🔽 निचला श्वसन पथ

| संरचना | कार्य |
|:-------|:------|
| **श्वासनली** | फेफड़ों तक हवा ले जाती है |
| **ब्रोंकाई** | फेफड़ों की मुख्य शाखाएं |
| **ब्रोंकिओल्स** | छोटे वायुमार्ग |
| **वायुकोष** | गैस विनिमय स्थल |

### श्वासनली तथ्य
- लगभग **10-12 cm** लंबी
- **16-20 C-आकार** उपास्थि वलय
- **कैरिना** पर विभाजित

---

## 🫁 फेफड़े

### संरचना
| विशेषता | दायां फेफड़ा | बायां फेफड़ा |
|:--------|:-----------|:----------|
| **पालियां** | 3 | 2 |
| **विदर** | 2 | 1 |
| **आकार** | बड़ा | छोटा (हृदय खांचा) |

### फुस्फुस
| परत | स्थान |
|:----|:------|
| **आंत फुस्फुस** | फेफड़े की सतह |
| **पार्श्विका फुस्फुस** | छाती की दीवार |
| **फुफ्फुस गुहा** | बीच का स्थान |

---

## 🔄 गैस विनिमय

> **वायुकोष में होता है:** O₂ रक्त में जाता है, CO₂ बाहर आता है

### प्रक्रिया
1. हवा वायुकोष में प्रवेश
2. O₂ झिल्ली से विसरित
3. O₂ हीमोग्लोबिन से बंधता है
4. CO₂ रक्त से वायुकोष में
5. CO₂ बाहर निकलता है

---

## 🌬️ श्वसन की क्रियाविधि

### श्वास लेना (Inspiration)
| क्रिया | परिणाम |
|:-------|:-------|
| डायाफ्राम संकुचन | नीचे जाता है |
| बाहरी अंतर-पसली संकुचन | पसलियां ऊपर |
| फेफड़े का दबाव कम | हवा अंदर |

### श्वास छोड़ना (Expiration)
| क्रिया | परिणाम |
|:-------|:-------|
| डायाफ्राम शिथिल | ऊपर जाता है |
| बाहरी अंतर-पसली शिथिल | पसलियां नीचे |
| फेफड़े का दबाव बढ़ता | हवा बाहर |

---

## 📊 फेफड़े की मात्राएं

| मात्रा | परिभाषा | मान |
|:-------|:--------|:-----|
| **ज्वारीय आयतन** | सामान्य सांस | 500 mL |
| **प्रश्वसनीय आरक्षित** | अतिरिक्त श्वास | 3000 mL |
| **निःश्वसनीय आरक्षित** | अतिरिक्त छोड़ना | 1100 mL |
| **अवशिष्ट आयतन** | हमेशा फेफड़ों में | 1200 mL |
| **जीवन क्षमता** | TV+IRV+ERV | 4600 mL |

---

## 🩺 नैदानिक आकलन

### सामान्य श्वसन दर
| आयु | दर (प्रति मिनट) |
|:----|:----------------|
| नवजात | 30-60 |
| शिशु | 20-40 |
| बच्चा | 15-30 |
| वयस्क | 12-20 |

### असामान्य श्वसन पैटर्न
| पैटर्न | विवरण |
|:-------|:------|
| **तीव्र श्वसन** | तेज (>20/मिनट) |
| **मंद श्वसन** | धीमा (<12/मिनट) |
| **श्वास कष्ट** | कठिनाई |
| **श्वसन रुकना** | कोई सांस नहीं |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. दायां फेफड़ा = 3 पालियां, बायां = 2
2. गैस विनिमय वायुकोष में
3. श्वासनली में 16-20 उपास्थि वलय
4. वयस्क श्वसन दर = 12-20/मिनट
5. ज्वारीय आयतन = 500 mL
6. डायाफ्राम = मुख्य श्वसन पेशी
7. O₂ हीमोग्लोबिन से बंधता है
8. फुफ्फुस गुहा में स्नेहक द्रव
:::
`
  },
  {
    id: 6,
    titleEn: "Digestive System",
    titleHi: "पाचन तंत्र",
    contentEn: `
# 🍽️ Digestive System

---

## 📖 Overview

> The **digestive system** is your body's food processing factory. Food enters through your mouth, gets broken down, nutrients are absorbed, and waste is eliminated. The journey takes **24-72 hours**!

:::info
**Key Functions:**
1. **Ingestion:** Taking food into the mouth
2. **Mechanical digestion:** Physical breakdown (chewing, churning)
3. **Chemical digestion:** Enzymatic breakdown
4. **Absorption:** Nutrients enter bloodstream
5. **Elimination:** Removal of waste
:::

---

## 🔄 Components of Digestive System

### Alimentary Canal (GI Tract)
| Structure | Function |
|:----------|:---------|
| **Mouth** | Ingestion, chewing, saliva |
| **Pharynx** | Swallowing |
| **Esophagus** | Transport to stomach |
| **Stomach** | Churning, acid digestion |
| **Small Intestine** | Main digestion & absorption |
| **Large Intestine** | Water absorption, waste |

### Accessory Organs
| Organ | Function |
|:------|:---------|
| **Teeth** | Mechanical breakdown |
| **Tongue** | Mixing, tasting |
| **Salivary Glands** | Produce saliva |
| **Liver** | Produces bile |
| **Gallbladder** | Stores bile |
| **Pancreas** | Digestive enzymes |

---

## 👄 Oral Cavity (Mouth)

### Teeth (Adult: 32)
| Type | Number | Function |
|:-----|:-------|:---------|
| **Incisors** | 8 | Cutting |
| **Canines** | 4 | Tearing |
| **Premolars** | 8 | Crushing |
| **Molars** | 12 | Grinding |

### Salivary Glands

| Gland | Location | Secretion |
|:------|:---------|:----------|
| **Parotid** | Near ear | Watery (amylase) |
| **Submandibular** | Below jaw | Mixed |
| **Sublingual** | Under tongue | Mucous |

:::tip
**Saliva contains:**
- Water (99.5%)
- Salivary amylase (digests starch)
- Mucus (lubrication)
- Lysozyme (antibacterial)
:::

---

## 🫃 Stomach

### Parts of the Stomach
| Part | Description |
|:-----|:------------|
| **Cardia** | Entrance from esophagus |
| **Fundus** | Upper dome |
| **Body** | Main portion |
| **Pylorus** | Exit to duodenum |

### Gastric Cells

| Cell Type | Secretion | Function |
|:----------|:----------|:---------|
| **Parietal** | HCl, Intrinsic factor | Kills bacteria, B12 absorption |
| **Chief** | Pepsinogen | Protein digestion |
| **Mucous** | Mucus | Protects stomach lining |
| **G cells** | Gastrin | Stimulates acid |

:::warning
**Stomach capacity:** 1-1.5 Liters when full
:::

---

## 🧬 Small Intestine

> **Primary site of digestion and absorption!** (6 meters long)

### Three Regions

| Region | Length | Function |
|:-------|:-------|:---------|
| **Duodenum** | 25 cm | Receives bile & pancreatic juice |
| **Jejunum** | 2.5 m | Most absorption |
| **Ileum** | 3.5 m | B12, bile salt absorption |

### Surface Area Adaptations
1. **Circular folds** (plicae circulares)
2. **Villi** (finger-like projections)
3. **Microvilli** (brush border)

:::success
**Surface area increased 600x** by these adaptations!
:::

---

## 🔄 Large Intestine

### Parts (in order)
1. **Cecum** (with appendix)
2. **Ascending colon**
3. **Transverse colon**
4. **Descending colon**
5. **Sigmoid colon**
6. **Rectum**
7. **Anal canal**

### Functions
- Water absorption
- Electrolyte absorption
- Feces formation
- Storage until elimination

---

## 🫘 Liver

> **Largest internal organ** (~1.5 kg) with 500+ functions!

### Major Functions
| Category | Functions |
|:---------|:----------|
| **Metabolism** | Carbohydrate, protein, fat |
| **Storage** | Glycogen, vitamins, iron |
| **Synthesis** | Plasma proteins, bile |
| **Detoxification** | Drugs, alcohol, ammonia |

### Bile
- Produced: 500-1000 mL/day
- Contains bile salts
- **Emulsifies fats** (breaks into droplets)

---

## 🫓 Pancreas

### Dual Functions

| Type | Cells | Products |
|:-----|:------|:---------|
| **Exocrine** (99%) | Acinar | Digestive enzymes |
| **Endocrine** (1%) | Islets | Hormones |

### Digestive Enzymes
- **Amylase:** Carbohydrates
- **Lipase:** Fats
- **Proteases:** Proteins

---

## 📍 Abdominal Quadrants

| Quadrant | Major Organs |
|:---------|:-------------|
| **RUQ** | Liver, gallbladder, right kidney |
| **LUQ** | Stomach, spleen, pancreas |
| **RLQ** | Appendix, cecum |
| **LLQ** | Sigmoid colon |

:::danger
**McBurney's Point:** 1/3 from ASIS to umbilicus - tenderness suggests appendicitis!
:::

---

## 🎯 Quick Revision

:::tip
**Remember:**
1. Small intestine = main absorption site
2. Liver produces bile, gallbladder stores it
3. Stomach has 3 muscle layers
4. Pancreas = exocrine + endocrine
5. Large intestine absorbs water
6. Adults have 32 teeth
7. GI tract is ~9 meters long
:::
`,
    contentHi: `
# 🍽️ पाचन तंत्र

---

## 📖 अवलोकन

> **पाचन तंत्र** आपके शरीर की खाद्य प्रसंस्करण फैक्ट्री है। भोजन मुंह से प्रवेश करता है, टूटता है, पोषक तत्व अवशोषित होते हैं, और अपशिष्ट निकलता है। यात्रा **24-72 घंटे** लेती है!

:::info
**मुख्य कार्य:**
1. **अंतर्ग्रहण:** भोजन मुंह में लेना
2. **यांत्रिक पाचन:** भौतिक टूटना (चबाना)
3. **रासायनिक पाचन:** एंजाइमी टूटना
4. **अवशोषण:** पोषक तत्व रक्त में
5. **उत्सर्जन:** अपशिष्ट निकालना
:::

---

## 🔄 पाचन तंत्र के घटक

### आहार नाल
| संरचना | कार्य |
|:-------|:------|
| **मुंह** | खाना, चबाना, लार |
| **ग्रसनी** | निगलना |
| **ग्रासनली** | पेट तक परिवहन |
| **पेट** | मंथन, अम्ल पाचन |
| **छोटी आंत** | मुख्य पाचन और अवशोषण |
| **बड़ी आंत** | जल अवशोषण, मल |

---

## 👄 मौखिक गुहा

### दांत (वयस्क: 32)
| प्रकार | संख्या | कार्य |
|:-------|:-------|:------|
| **कृंतक** | 8 | काटना |
| **भेदक** | 4 | फाड़ना |
| **अग्रचर्वणक** | 8 | कुचलना |
| **चर्वणक** | 12 | पीसना |

### लार ग्रंथियां
| ग्रंथि | स्थान | स्राव |
|:-------|:------|:------|
| **पैरोटिड** | कान के पास | पानी जैसा |
| **अवअधोहनु** | जबड़े के नीचे | मिश्रित |
| **अधोजिह्वा** | जीभ के नीचे | श्लेष्मा |

---

## 🫃 पेट (आमाशय)

### पेट के भाग
| भाग | विवरण |
|:----|:------|
| **कार्डिया** | प्रवेश द्वार |
| **फंडस** | ऊपरी गुंबद |
| **शरीर** | मुख्य भाग |
| **पाइलोरस** | निकास |

### आमाशय कोशिकाएं
| कोशिका | स्राव | कार्य |
|:-------|:------|:------|
| **पार्श्विका** | HCl | जीवाणु नाश |
| **मुख्य** | पेप्सिनोजन | प्रोटीन पाचन |
| **श्लेष्मा** | बलगम | सुरक्षा |

---

## 🧬 छोटी आंत

> **मुख्य पाचन और अवशोषण स्थल!** (6 मीटर लंबी)

### तीन क्षेत्र
| क्षेत्र | लंबाई | कार्य |
|:-------|:------|:------|
| **ग्रहणी** | 25 cm | पित्त और अग्न्याशय रस |
| **मध्यांत्र** | 2.5 m | अधिकांश अवशोषण |
| **शेषांत्र** | 3.5 m | B12 अवशोषण |

---

## 🔄 बड़ी आंत

### भाग (क्रम में)
1. **अंधनाल** (अपेंडिक्स सहित)
2. **आरोही बृहदांत्र**
3. **अनुप्रस्थ बृहदांत्र**
4. **अवरोही बृहदांत्र**
5. **सिग्मॉइड बृहदांत्र**
6. **मलाशय**
7. **गुदा नाल**

---

## 🫘 यकृत (लीवर)

> **सबसे बड़ा आंतरिक अंग** (~1.5 kg)

### मुख्य कार्य
| श्रेणी | कार्य |
|:-------|:------|
| **चयापचय** | कार्बोहाइड्रेट, प्रोटीन, वसा |
| **भंडारण** | ग्लाइकोजन, विटामिन |
| **संश्लेषण** | प्लाज्मा प्रोटीन, पित्त |
| **विषहरण** | दवाएं, शराब |

---

## 🫓 अग्न्याशय

### दोहरे कार्य
| प्रकार | कोशिकाएं | उत्पाद |
|:-------|:---------|:-------|
| **बहिःस्रावी** | एसिनर | पाचक एंजाइम |
| **अंतःस्रावी** | आइलेट्स | हार्मोन |

---

## 📍 उदर चतुर्भाग

| चतुर्भाग | मुख्य अंग |
|:---------|:---------|
| **RUQ** | यकृत, पित्ताशय |
| **LUQ** | पेट, प्लीहा |
| **RLQ** | अपेंडिक्स |
| **LLQ** | सिग्मॉइड |

:::danger
**मैकबर्नी बिंदु:** ASIS से नाभि तक 1/3 - यहां दर्द = अपेंडिसाइटिस!
:::
`
  },
  {
    id: 7,
    titleEn: "Nervous System",
    titleHi: "तंत्रिका तंत्र",
    contentEn: `
# 🧠 Nervous System

---

## 📖 Overview

> The **nervous system** is your body's command center and communication network. The brain is the headquarters, spinal cord is the main highway, and nerves are roads reaching every body part.

:::info
**Key Functions:**
1. **Sensory input:** Detecting stimuli
2. **Integration:** Processing information
3. **Motor output:** Responding to stimuli
:::

---

## 🔀 Divisions of Nervous System

### Central Nervous System (CNS)
| Component | Function |
|:----------|:---------|
| **Brain** | Command center |
| **Spinal Cord** | Main pathway |

### Peripheral Nervous System (PNS)
| Division | Function |
|:---------|:---------|
| **Somatic** | Voluntary muscle control |
| **Autonomic** | Involuntary functions |

### Autonomic Division
| Type | Nickname | Effect |
|:-----|:---------|:-------|
| **Sympathetic** | "Fight or Flight" | ↑ HR, ↑ BP |
| **Parasympathetic** | "Rest & Digest" | ↓ HR, ↑ Digestion |

---

## 🧬 Neurons (Nerve Cells)

### Structure
| Part | Function |
|:-----|:---------|
| **Dendrites** | Receive signals (input) |
| **Cell Body** | Contains nucleus |
| **Axon** | Conducts impulse (output) |
| **Axon Terminals** | Release neurotransmitters |

### Types of Neurons
| Type | Function |
|:-----|:---------|
| **Sensory (Afferent)** | Carry signals TO CNS |
| **Motor (Efferent)** | Carry signals FROM CNS |
| **Interneurons** | Connect neurons in CNS |

---

## 🧠 The Brain

> Weighs ~**1.4 kg** and contains ~**86 billion neurons**!

### Major Regions

| Region | Function |
|:-------|:---------|
| **Cerebrum** | Thinking, memory, movement |
| **Diencephalon** | Relay, homeostasis |
| **Brainstem** | Vital functions |
| **Cerebellum** | Balance, coordination |

### Lobes of Cerebrum

| Lobe | Location | Functions |
|:-----|:---------|:----------|
| **Frontal** | Front | Motor, planning, personality |
| **Parietal** | Top | Sensory processing |
| **Temporal** | Side | Hearing, memory |
| **Occipital** | Back | Vision |

:::tip
**Memory Aid:** "Frontal = Forward thinking, Occipital = Optical (vision)"
:::

---

## 🛡️ Brain Protection

### Three Layers

| Layer | Description |
|:------|:------------|
| **Dura Mater** | Tough outer layer |
| **Arachnoid** | Web-like middle |
| **Pia Mater** | Delicate inner layer |

### Cerebrospinal Fluid (CSF)
- Clear, colorless fluid
- Volume: ~150 mL
- **Cushions** brain and spinal cord
- Provides nutrients, removes waste

---

## 🦴 Spinal Cord

### Structure
- Length: ~45 cm
- Extends from medulla to **L1-L2**
- Protected by vertebral column

### Cross-Section
| Area | Function |
|:-----|:---------|
| **Grey Matter (H-shape)** | Cell bodies |
| **White Matter** | Nerve fibers |
| **Dorsal Horn** | Sensory |
| **Ventral Horn** | Motor |

### Spinal Nerves (31 pairs)
| Region | Number |
|:-------|:-------|
| Cervical | 8 |
| Thoracic | 12 |
| Lumbar | 5 |
| Sacral | 5 |
| Coccygeal | 1 |

---

## 🔢 Cranial Nerves (12 pairs)

| # | Name | Type | Function |
|:--|:-----|:-----|:---------|
| I | Olfactory | S | Smell |
| II | Optic | S | Vision |
| III | Oculomotor | M | Eye movement |
| VII | Facial | B | Facial expression |
| X | Vagus | B | Heart, lungs, digestion |

:::info
**Memory Aid:** "Oh Oh Oh To Touch And Feel Very Good Velvet, AH!"
:::

---

## 🔄 Reflexes

### Reflex Arc Components
1. **Receptor** (sensory)
2. **Sensory Neuron** (afferent)
3. **Integration Center** (CNS)
4. **Motor Neuron** (efferent)
5. **Effector** (muscle/gland)

### Common Reflexes
| Reflex | Level | Response |
|:-------|:------|:---------|
| **Patellar** | L2-L4 | Leg extension |
| **Biceps** | C5-C6 | Forearm flexion |
| **Pupillary** | CN II, III | Pupil constriction |

---

## 📊 Glasgow Coma Scale (GCS)

| Response | Score Range |
|:---------|:------------|
| **Eye Opening** | 1-4 |
| **Verbal** | 1-5 |
| **Motor** | 1-6 |
| **Total** | **3-15** |

:::warning
**Interpretation:**
- 13-15: Mild injury
- 9-12: Moderate injury
- ≤8: Severe (coma)
:::

---

## 🚨 Stroke Assessment (FAST)

| Letter | Meaning |
|:-------|:--------|
| **F** | Face drooping |
| **A** | Arm weakness |
| **S** | Speech difficulty |
| **T** | Time to call emergency |

---

## 🎯 Quick Revision

:::tip
**Remember:**
1. CNS = Brain + Spinal cord
2. 12 cranial nerves, 31 spinal nerves
3. Grey matter = cell bodies
4. White matter = nerve fibers
5. GCS: 3-15 scale
6. FAST for stroke
7. Cerebellum = balance
:::
`,
    contentHi: `
# 🧠 तंत्रिका तंत्र

---

## 📖 अवलोकन

> **तंत्रिका तंत्र** आपके शरीर का कमांड सेंटर है। मस्तिष्क मुख्यालय है, मेरुदंड मुख्य राजमार्ग है।

:::info
**मुख्य कार्य:**
1. **संवेदी इनपुट:** उत्तेजनाओं का पता लगाना
2. **एकीकरण:** जानकारी प्रसंस्करण
3. **मोटर आउटपुट:** प्रतिक्रिया देना
:::

---

## 🔀 तंत्रिका तंत्र के विभाग

### केंद्रीय तंत्रिका तंत्र (CNS)
| घटक | कार्य |
|:----|:------|
| **मस्तिष्क** | कमांड सेंटर |
| **मेरुदंड** | मुख्य मार्ग |

### परिधीय तंत्रिका तंत्र (PNS)
| विभाग | कार्य |
|:------|:------|
| **कायिक** | ऐच्छिक नियंत्रण |
| **स्वायत्त** | अनैच्छिक कार्य |

---

## 🧬 न्यूरॉन (तंत्रिका कोशिकाएं)

### संरचना
| भाग | कार्य |
|:----|:------|
| **डेंड्राइट्स** | संकेत प्राप्त करें |
| **कोशिका काय** | केंद्रक रखता है |
| **एक्सॉन** | आवेग संचालित करे |

### न्यूरॉन के प्रकार
| प्रकार | कार्य |
|:-------|:------|
| **संवेदी** | CNS की ओर संकेत |
| **मोटर** | CNS से संकेत |
| **इंटरन्यूरॉन** | CNS में जोड़ते हैं |

---

## 🧠 मस्तिष्क

> वजन ~**1.4 kg** और ~**86 अरब न्यूरॉन**!

### मुख्य क्षेत्र
| क्षेत्र | कार्य |
|:-------|:------|
| **प्रमस्तिष्क** | सोच, स्मृति |
| **अनुमस्तिष्क** | संतुलन |
| **मस्तिष्क स्तंभ** | महत्वपूर्ण कार्य |

### प्रमस्तिष्क की पालियां
| पाली | कार्य |
|:-----|:------|
| **ललाट** | मोटर, व्यक्तित्व |
| **पार्श्विका** | संवेदी |
| **कनपटी** | श्रवण, स्मृति |
| **पश्चकपाल** | दृष्टि |

---

## 🛡️ मस्तिष्क सुरक्षा

### तीन परतें (मेनिंजेस)
| परत | विवरण |
|:----|:------|
| **ड्यूरा मेटर** | कठोर बाहरी |
| **अरैक्नॉइड** | जाल जैसी मध्य |
| **पिया मेटर** | नाजुक भीतरी |

### मस्तिष्कमेरु द्रव (CSF)
- स्पष्ट, रंगहीन
- मात्रा: ~150 mL
- मस्तिष्क की रक्षा करता है

---

## 🦴 मेरुदंड

### संरचना
- लंबाई: ~45 cm
- मेडुला से **L1-L2** तक

### मेरुदंड तंत्रिकाएं (31 जोड़े)
| क्षेत्र | संख्या |
|:-------|:-------|
| ग्रीवा | 8 |
| वक्ष | 12 |
| कटि | 5 |
| त्रिक | 5 |
| अनुत्रिक | 1 |

---

## 🔢 कपाल तंत्रिकाएं (12 जोड़े)

| # | नाम | कार्य |
|:--|:----|:------|
| I | घ्राण | गंध |
| II | दृक् | दृष्टि |
| VII | मुखीय | चेहरे की अभिव्यक्ति |
| X | वेगस | हृदय, फेफड़े |

---

## 📊 ग्लासगो कोमा स्केल (GCS)

| प्रतिक्रिया | स्कोर |
|:-----------|:------|
| **आंख खोलना** | 1-4 |
| **वाचिक** | 1-5 |
| **मोटर** | 1-6 |
| **कुल** | **3-15** |

:::warning
- 13-15: हल्की चोट
- 9-12: मध्यम चोट
- ≤8: गंभीर (कोमा)
:::

---

## 🚨 स्ट्रोक आकलन (FAST)

| अक्षर | अर्थ |
|:------|:-----|
| **F** | चेहरा लटकना |
| **A** | बांह कमजोरी |
| **S** | बोलने में कठिनाई |
| **T** | आपातकाल कॉल का समय |
`
  },
  {
    id: 8,
    titleEn: "Urinary System",
    titleHi: "मूत्र तंत्र",
    contentEn: `
# 🫘 Urinary System

---

## 📖 Overview

> The **urinary system** is your body's filtration and waste disposal system. Kidneys filter about **180 liters** of blood daily but only produce **1-2 liters** of urine!

:::info
**Key Functions:**
1. **Excretion:** Removes metabolic waste
2. **Fluid balance:** Regulates water & electrolytes
3. **Blood pressure:** Via renin-angiotensin
4. **pH regulation:** Maintains acid-base balance
5. **Hormone production:** Erythropoietin, calcitriol
:::

---

## 🔄 Components

| Component | Function |
|:----------|:---------|
| **Kidneys (2)** | Filter blood, produce urine |
| **Ureters (2)** | Transport urine to bladder |
| **Urinary Bladder** | Stores urine |
| **Urethra** | Excretes urine |

---

## 🫘 The Kidneys

### Location
- **Retroperitoneal** (behind peritoneum)
- Level: **T12 to L3**
- Right kidney slightly **lower** (due to liver)
- Protected by ribs 11-12

### Size
- Bean-shaped
- ~11 cm long, 6 cm wide, 3 cm thick
- Weight: ~150 g each

### External Anatomy
| Structure | Description |
|:----------|:------------|
| **Hilum** | Medial indentation |
| **Renal Artery** | Blood IN |
| **Renal Vein** | Blood OUT |
| **Ureter** | Urine OUT |

---

## 🔬 Internal Anatomy

| Structure | Location | Function |
|:----------|:---------|:---------|
| **Cortex** | Outer | Glomeruli, tubules |
| **Medulla** | Inner | Pyramids |
| **Pyramids** | Medulla | Cone-shaped units |
| **Calyces** | Collect | Minor → Major |
| **Renal Pelvis** | Center | Collects all urine |

:::tip
**Flow of Urine:**
Nephron → Minor calyx → Major calyx → Renal pelvis → Ureter → Bladder
:::

---

## 🔬 The Nephron

> **Functional unit** of the kidney. Each kidney has ~**1 million nephrons**!

### Parts of Nephron

| Part | Location | Function |
|:-----|:---------|:---------|
| **Glomerulus** | Cortex | Filtration |
| **Bowman's Capsule** | Cortex | Collects filtrate |
| **PCT** | Cortex | 65% reabsorption |
| **Loop of Henle** | Medulla | Concentration |
| **DCT** | Cortex | Fine-tuning |
| **Collecting Duct** | Medulla | Final concentration |

### Urine Formation (3 Processes)

| Process | Location | What Happens |
|:--------|:---------|:-------------|
| **Filtration** | Glomerulus | Blood → Filtrate |
| **Reabsorption** | Tubules | Nutrients → Blood |
| **Secretion** | Tubules | Waste → Urine |

:::info
**GFR (Glomerular Filtration Rate):** ~125 mL/min = ~180 L/day!
:::

---

## 💧 Urine Characteristics

| Parameter | Normal Value |
|:----------|:-------------|
| **Volume** | 1-2 L/day |
| **Color** | Pale yellow |
| **pH** | 4.5-8.0 (avg 6) |
| **Specific Gravity** | 1.001-1.035 |

### Abnormal Findings
| Term | Meaning |
|:-----|:--------|
| **Polyuria** | Excessive urine |
| **Oliguria** | Decreased urine |
| **Anuria** | No urine |
| **Hematuria** | Blood in urine |
| **Glycosuria** | Glucose in urine |

---

## 🚽 Urinary Bladder

### Anatomy
- Muscular sac in pelvis
- Capacity: **300-500 mL** (max ~800 mL)
- Lined by **transitional epithelium**

### Trigone
- Triangular area
- 3 openings: 2 ureters + 1 urethra
- Most common site of infections

---

## 🔄 Urethra

| Gender | Length | Features |
|:-------|:-------|:---------|
| **Male** | ~20 cm | Prostatic, membranous, spongy |
| **Female** | ~4 cm | Shorter, more UTI prone |

---

## 🚨 Clinical Applications

### UTI (Urinary Tract Infection)
:::warning
**More common in females** due to shorter urethra
**Symptoms:** Burning urination, frequency, urgency
:::

### Kidney Stones
- Form in renal pelvis
- Cause severe pain (renal colic)
- May obstruct urine flow

---

## 🎯 Quick Revision

:::tip
**Remember:**
1. Kidneys at T12-L3 level
2. Right kidney lower than left
3. ~1 million nephrons per kidney
4. GFR = 125 mL/min
5. Normal urine: 1-2 L/day
6. Bladder capacity: 300-500 mL
7. Female urethra shorter = more UTIs
:::
`,
    contentHi: `
# 🫘 मूत्र तंत्र

---

## 📖 अवलोकन

> **मूत्र तंत्र** आपके शरीर की छानने और अपशिष्ट निपटान प्रणाली है। गुर्दे रोजाना ~**180 लीटर** रक्त छानते हैं लेकिन केवल **1-2 लीटर** मूत्र बनाते हैं!

:::info
**मुख्य कार्य:**
1. **उत्सर्जन:** अपशिष्ट हटाना
2. **द्रव संतुलन:** जल और इलेक्ट्रोलाइट
3. **रक्तचाप:** रेनिन-एंजियोटेंसिन द्वारा
4. **pH नियमन:** अम्ल-क्षार संतुलन
:::

---

## 🔄 घटक

| घटक | कार्य |
|:----|:------|
| **गुर्दे (2)** | रक्त छानना, मूत्र बनाना |
| **मूत्रवाहिनी (2)** | मूत्राशय तक परिवहन |
| **मूत्राशय** | मूत्र भंडारण |
| **मूत्रमार्ग** | मूत्र उत्सर्जन |

---

## 🫘 गुर्दे

### स्थान
- **रेट्रोपेरिटोनियल**
- स्तर: **T12 से L3**
- दायां गुर्दा थोड़ा **नीचे**
- पसलियों 11-12 द्वारा सुरक्षित

### आकार
- सेम के आकार का
- ~11 cm लंबा, 6 cm चौड़ा
- वजन: ~150 g प्रत्येक

---

## 🔬 आंतरिक शारीरिकी

| संरचना | कार्य |
|:-------|:------|
| **वल्कुट** | ग्लोमेरुली |
| **मज्जा** | पिरामिड |
| **वृक्क श्रोणि** | मूत्र एकत्र |

---

## 🔬 नेफ्रॉन

> गुर्दे की **कार्यात्मक इकाई**। प्रत्येक गुर्दे में ~**10 लाख नेफ्रॉन**!

### नेफ्रॉन के भाग

| भाग | कार्य |
|:----|:------|
| **ग्लोमेरुलस** | निस्यंदन |
| **बोमन कैप्सूल** | निस्यंद एकत्र |
| **PCT** | 65% पुनर्अवशोषण |
| **हेनले लूप** | सांद्रण |
| **DCT** | समायोजन |
| **संग्राहक वाहिनी** | अंतिम सांद्रण |

### मूत्र निर्माण (3 प्रक्रियाएं)

| प्रक्रिया | स्थान | क्या होता है |
|:---------|:------|:------------|
| **निस्यंदन** | ग्लोमेरुलस | रक्त → निस्यंद |
| **पुनर्अवशोषण** | नलिकाएं | पोषक → रक्त |
| **स्राव** | नलिकाएं | अपशिष्ट → मूत्र |

:::info
**GFR:** ~125 mL/मिनट = ~180 L/दिन!
:::

---

## 💧 मूत्र विशेषताएं

| पैरामीटर | सामान्य मान |
|:---------|:-----------|
| **मात्रा** | 1-2 L/दिन |
| **रंग** | हल्का पीला |
| **pH** | 4.5-8.0 |

### असामान्य निष्कर्ष
| शब्द | अर्थ |
|:----|:-----|
| **बहुमूत्रता** | अधिक मूत्र |
| **अल्पमूत्रता** | कम मूत्र |
| **मूत्राभाव** | कोई मूत्र नहीं |
| **रक्तमूत्रता** | मूत्र में रक्त |

---

## 🚽 मूत्राशय

- मांसपेशीय थैली
- क्षमता: **300-500 mL**
- **संक्रमणकालीन उपकला** से ढका

---

## 🎯 त्वरित संशोधन

:::tip
**याद रखें:**
1. गुर्दे T12-L3 स्तर पर
2. दायां गुर्दा नीचे
3. ~10 लाख नेफ्रॉन/गुर्दा
4. GFR = 125 mL/मिनट
5. सामान्य मूत्र: 1-2 L/दिन
6. मूत्राशय क्षमता: 300-500 mL
:::
`
  },
  {
    id: 9,
    titleEn: "Reproductive System",
    titleHi: "प्रजनन तंत्र",
    contentEn: `
# 👶 Reproductive System

---

## 📖 Overview

> The **reproductive system** enables humans to produce offspring. It produces sex cells (gametes), facilitates their union, and supports the developing baby.

:::info
**Key Functions:**
1. **Gamete production:** Sperm & eggs
2. **Hormone production:** Testosterone, estrogen
3. **Fertilization:** Union of gametes
4. **Pregnancy support:** Nurturing fetus
:::

---

## 👨 Male Reproductive System

### Components

| Category | Organs |
|:---------|:-------|
| **Gonads** | Testes |
| **Duct System** | Epididymis, Vas deferens, Urethra |
| **Accessory Glands** | Seminal vesicles, Prostate, Bulbourethral |
| **External** | Penis, Scrotum |

---

### 🔵 Testes

- Location: Within **scrotum** (outside body)
- Why external? Sperm need **2-3°C below** body temperature
- Size: ~4-5 cm long

### Cell Types
| Cell | Function |
|:-----|:---------|
| **Sertoli cells** | Support sperm development |
| **Leydig cells** | Produce testosterone |
| **Spermatogenic** | Develop into sperm |

---

### 🔄 Spermatogenesis

> Process of sperm production (~64-72 days)

**Stages:**
1. Spermatogonia (46 chromosomes)
2. Primary spermatocyte
3. Secondary spermatocytes (23)
4. Spermatids
5. Spermatozoa (mature sperm)

### Sperm Structure
| Part | Function |
|:-----|:---------|
| **Head** | Contains DNA + acrosome |
| **Midpiece** | Mitochondria (energy) |
| **Tail** | Flagellum (movement) |

---

### 🔵 Accessory Glands

| Gland | Secretion | % of Semen |
|:------|:----------|:-----------|
| **Seminal vesicles** | Fructose | ~60% |
| **Prostate** | Alkaline fluid | ~30% |
| **Bulbourethral** | Pre-ejaculate | ~5% |

:::warning
**Prostate enlargement (BPH)** is common in older men - obstructs urine flow
:::

---

## 👩 Female Reproductive System

### Components

| Category | Organs |
|:---------|:-------|
| **Gonads** | Ovaries |
| **Tubes** | Fallopian tubes |
| **Uterus** | Site of pregnancy |
| **Vagina** | Birth canal |
| **External** | Vulva |

---

### 🔴 Ovaries

- Location: Pelvic cavity
- Size: ~3 cm (almond-shaped)

### Functions
1. **Oogenesis:** Egg production
2. **Hormone production:** Estrogen, progesterone

### Ovarian Follicles
| Stage | Description |
|:------|:------------|
| Primordial | Dormant from birth |
| Primary | Beginning development |
| Secondary | Multiple cell layers |
| Graafian | Mature, ready for ovulation |
| Corpus luteum | After ovulation |

---

### 🔴 Fallopian Tubes

- Length: ~10 cm
- **Site of fertilization!**

| Part | Function |
|:-----|:---------|
| **Fimbriae** | Catch released egg |
| **Ampulla** | Fertilization site |
| **Isthmus** | Narrow portion |

---

### 🔴 Uterus

> Site of implantation and fetal development

### Layers
| Layer | Description |
|:------|:------------|
| **Perimetrium** | Outer serosa |
| **Myometrium** | Thick muscle layer |
| **Endometrium** | Inner lining (sheds monthly) |

### Parts
- **Fundus:** Top dome
- **Body:** Main portion
- **Cervix:** Lower opening

---

## 🔄 Menstrual Cycle

> Average **28 days** (21-35 normal)

### Phases

| Phase | Days | Events |
|:------|:-----|:-------|
| **Menstrual** | 1-5 | Bleeding |
| **Proliferative** | 6-14 | Endometrium rebuilds |
| **Ovulation** | ~Day 14 | Egg released |
| **Secretory** | 15-28 | Prepares for implantation |

### Hormones
| Hormone | Source | Function |
|:--------|:-------|:---------|
| **FSH** | Pituitary | Follicle growth |
| **LH** | Pituitary | Triggers ovulation |
| **Estrogen** | Ovary | Endometrium growth |
| **Progesterone** | Corpus luteum | Maintains pregnancy |

---

## 🤰 Pregnancy Basics

### Key Terms
| Term | Definition |
|:-----|:-----------|
| **Fertilization** | Sperm meets egg (ampulla) |
| **Implantation** | Embryo attaches to uterus |
| **Gestation** | ~40 weeks (280 days) |

### Trimesters
| Trimester | Weeks | Development |
|:----------|:------|:------------|
| **First** | 1-12 | Organ formation |
| **Second** | 13-27 | Growth, movement felt |
| **Third** | 28-40 | Maturation |

---

## 🎯 Quick Revision

:::tip
**Remember:**
1. Testes outside body (cooler)
2. Sperm production: 64-72 days
3. Ovulation: ~Day 14
4. Fertilization in ampulla
5. Cycle: 28 days average
6. Pregnancy: 40 weeks
7. Prostate = walnut-sized
:::
`,
    contentHi: `
# 👶 प्रजनन तंत्र

---

## 📖 अवलोकन

> **प्रजनन तंत्र** संतान उत्पन्न करने में सक्षम बनाता है। यह युग्मक बनाता है और विकसित शिशु का पोषण करता है।

:::info
**मुख्य कार्य:**
1. **युग्मक उत्पादन:** शुक्राणु और अंडे
2. **हार्मोन उत्पादन:** टेस्टोस्टेरोन, एस्ट्रोजन
3. **निषेचन:** युग्मकों का मिलन
4. **गर्भावस्था समर्थन:** भ्रूण पोषण
:::

---

## 👨 पुरुष प्रजनन तंत्र

### घटक
| श्रेणी | अंग |
|:-------|:----|
| **जनन ग्रंथि** | वृषण |
| **वाहिनी तंत्र** | एपिडिडाइमिस, शुक्रवाहिका |
| **सहायक ग्रंथियां** | सेमिनल वेसिकल्स, प्रोस्टेट |
| **बाहरी** | लिंग, अंडकोष |

---

### 🔵 वृषण

- स्थान: **अंडकोष थैली** में (शरीर के बाहर)
- क्यों बाहर? शुक्राणुओं को **2-3°C कम** तापमान चाहिए

### कोशिका प्रकार
| कोशिका | कार्य |
|:-------|:------|
| **सर्टोली** | शुक्राणु विकास में सहायता |
| **लेडिग** | टेस्टोस्टेरोन उत्पादन |

---

### 🔄 शुक्राणुजनन

> शुक्राणु उत्पादन (~64-72 दिन)

### शुक्राणु संरचना
| भाग | कार्य |
|:----|:------|
| **सिर** | DNA + एक्रोसोम |
| **मध्य भाग** | माइटोकॉन्ड्रिया |
| **पूंछ** | फ्लैजेलम (गति) |

---

## 👩 महिला प्रजनन तंत्र

### घटक
| श्रेणी | अंग |
|:-------|:----|
| **जनन ग्रंथि** | अंडाशय |
| **नलिकाएं** | फैलोपियन ट्यूब |
| **गर्भाशय** | गर्भावस्था स्थल |
| **योनि** | जन्म नाल |

---

### 🔴 अंडाशय

- स्थान: श्रोणि गुहा
- आकार: ~3 cm (बादाम जैसा)

### कार्य
1. **अंडजनन:** अंडा उत्पादन
2. **हार्मोन:** एस्ट्रोजन, प्रोजेस्टेरोन

---

### 🔴 फैलोपियन ट्यूब

- लंबाई: ~10 cm
- **निषेचन यहीं होता है!**

| भाग | कार्य |
|:----|:------|
| **फिम्ब्रिए** | अंडा पकड़ना |
| **एम्पुला** | निषेचन स्थल |

---

### 🔴 गर्भाशय

> प्रत्यारोपण और भ्रूण विकास का स्थल

### परतें
| परत | विवरण |
|:----|:------|
| **पेरीमेट्रियम** | बाहरी |
| **मायोमेट्रियम** | मांसपेशी परत |
| **एंडोमेट्रियम** | भीतरी (मासिक झड़ती है) |

---

## 🔄 मासिक धर्म चक्र

> औसत **28 दिन**

### चरण
| चरण | दिन | घटनाएं |
|:----|:----|:-------|
| **मासिक** | 1-5 | रक्तस्राव |
| **प्रोलिफेरेटिव** | 6-14 | एंडोमेट्रियम निर्माण |
| **ओव्यूलेशन** | ~दिन 14 | अंडा निकलता है |
| **सीक्रेटरी** | 15-28 | प्रत्यारोपण की तैयारी |

---

## 🤰 गर्भावस्था मूल बातें

### प्रमुख शब्द
| शब्द | परिभाषा |
|:----|:-------|
| **निषेचन** | शुक्राणु-अंडा मिलन |
| **प्रत्यारोपण** | भ्रूण गर्भाशय से जुड़ना |
| **गर्भकाल** | ~40 सप्ताह |

### तिमाहियां
| तिमाही | सप्ताह | विकास |
|:-------|:-------|:------|
| **पहली** | 1-12 | अंग निर्माण |
| **दूसरी** | 13-27 | वृद्धि, हलचल |
| **तीसरी** | 28-40 | परिपक्वता |

---

## 🎯 त्वरित संशोधन

:::tip
**याद रखें:**
1. वृषण शरीर के बाहर (ठंडा)
2. शुक्राणु उत्पादन: 64-72 दिन
3. ओव्यूलेशन: ~दिन 14
4. निषेचन एम्पुला में
5. चक्र: 28 दिन औसत
6. गर्भावस्था: 40 सप्ताह
:::
`
  },
  {
    id: 10,
    titleEn: "Integumentary System & Sensory Organs",
    titleHi: "त्वचा तंत्र और संवेदी अंग",
    contentEn: `
# 🧴 Integumentary System & Sensory Organs

---

## 📖 Overview

> The **integumentary system** is your body's protective outer covering - the **largest organ**! If spread flat, adult skin would cover about **2 square meters**!

:::info
**Skin Functions:**
1. **Protection:** Barrier against pathogens, UV, trauma
2. **Temperature regulation:** Sweating, blood vessels
3. **Sensation:** Touch, pain, temperature
4. **Vitamin D synthesis:** UV converts precursor
5. **Excretion:** Small amounts via sweat
:::

---

## 📊 Skin Facts

| Fact | Value |
|:-----|:------|
| **Area** | 1.5-2.0 m² |
| **Weight** | 4-5 kg (7% body weight) |
| **Thickness** | 0.5 mm (eyelids) - 4 mm (palms) |

---

## 🧬 Structure of Skin

### Three Main Layers

| Layer | Type | Location |
|:------|:-----|:---------|
| **Epidermis** | Epithelial | Outermost |
| **Dermis** | Connective | Middle |
| **Hypodermis** | Subcutaneous | Deepest |

---

## 🔬 Epidermis

> Made of **stratified squamous epithelium**

### Layers (Deep to Superficial)

| Layer | Description |
|:------|:------------|
| **Stratum Basale** | Stem cells, melanocytes |
| **Stratum Spinosum** | "Spiny" appearance |
| **Stratum Granulosum** | Keratohyalin granules |
| **Stratum Lucidum** | Only in thick skin |
| **Stratum Corneum** | Dead, keratinized cells |

:::tip
**Memory Aid:** "Brits Sell Grapes, Lucy's Coming"
(Basale, Spinosum, Granulosum, Lucidum, Corneum)
:::

### Cell Types in Epidermis

| Cell | Function |
|:-----|:---------|
| **Keratinocytes** | Produce keratin (90%) |
| **Melanocytes** | Produce melanin |
| **Langerhans cells** | Immune function |
| **Merkel cells** | Touch sensation |

---

## 🔬 Dermis

### Two Layers

| Layer | % | Contents |
|:------|:--|:---------|
| **Papillary** | 20% | Loose CT, capillaries |
| **Reticular** | 80% | Dense CT, hair follicles |

### Contents of Dermis
- Blood vessels
- Nerve fibers
- Hair follicles
- Sebaceous glands
- Sweat glands
- Sensory receptors

---

## 🔬 Hypodermis

> Not technically part of skin, but closely associated

### Functions
- **Insulation** (heat retention)
- **Cushioning** (shock absorption)
- **Energy storage** (fat)
- Anchors skin to body

:::info
**Subcutaneous injections** are given in this layer
:::

---

## 💇 Hair

### Structure
| Part | Description |
|:-----|:------------|
| **Shaft** | Visible above skin |
| **Root** | Within follicle |
| **Bulb** | Growth zone |
| **Follicle** | Tube surrounding root |

### Hair Layers
1. **Medulla** (inner core)
2. **Cortex** (main bulk, pigment)
3. **Cuticle** (outer protective)

:::tip
**Arrector pili muscle** → contracts → "goosebumps"
:::

---

## 💅 Nails

### Structure
| Part | Description |
|:-----|:------------|
| **Nail plate** | Visible part |
| **Nail bed** | Underneath plate |
| **Lunula** | White crescent |
| **Matrix** | Growth zone |
| **Cuticle** | Skin fold at base |

### Growth Rate
- **Fingernails:** ~3 mm/month
- **Toenails:** ~1 mm/month

---

## 💦 Skin Glands

### Sweat Glands

| Type | Location | Function |
|:-----|:---------|:---------|
| **Eccrine** | All over body | Temperature regulation |
| **Apocrine** | Axilla, groin | Scent, activated at puberty |

### Sebaceous Glands
- Produce **sebum** (oily substance)
- Keep skin and hair moisturized
- Everywhere except palms and soles

---

## 👁️ Eye (Visual Sense)

### Layers of Eyeball

| Layer | Components |
|:------|:-----------|
| **Fibrous** | Sclera, Cornea |
| **Vascular** | Choroid, Ciliary body, Iris |
| **Neural** | Retina |

### Key Structures
| Structure | Function |
|:----------|:---------|
| **Cornea** | Light refraction |
| **Iris** | Controls pupil size |
| **Lens** | Focuses light |
| **Retina** | Contains rods and cones |
| **Optic nerve** | Transmits to brain |

---

## 👂 Ear (Hearing & Balance)

### Three Parts

| Part | Function |
|:-----|:---------|
| **Outer ear** | Collects sound |
| **Middle ear** | Amplifies (ossicles) |
| **Inner ear** | Hearing + balance |

### Ossicles (Smallest Bones)
1. **Malleus** (hammer)
2. **Incus** (anvil)
3. **Stapes** (stirrup)

### Inner Ear
| Structure | Function |
|:----------|:---------|
| **Cochlea** | Hearing |
| **Vestibule** | Static balance |
| **Semicircular canals** | Dynamic balance |

---

## 🎯 Quick Revision

:::tip
**Remember:**
1. Skin = largest organ
2. 3 layers: Epidermis, Dermis, Hypodermis
3. 5 epidermal layers (thick skin)
4. Melanocytes produce melanin
5. Fingernails grow faster than toenails
6. 3 ossicles in middle ear
7. Cochlea for hearing
:::
`,
    contentHi: `
# 🧴 त्वचा तंत्र और संवेदी अंग

---

## 📖 अवलोकन

> **त्वचा तंत्र** आपके शरीर का सुरक्षात्मक बाहरी आवरण है - **सबसे बड़ा अंग**! वयस्क त्वचा ~**2 वर्ग मीटर** क्षेत्र को कवर करती है!

:::info
**त्वचा के कार्य:**
1. **सुरक्षा:** रोगजनकों, UV से बचाव
2. **तापमान नियमन:** पसीना, रक्त वाहिकाएं
3. **संवेदना:** स्पर्श, दर्द, तापमान
4. **विटामिन D संश्लेषण:** UV द्वारा
5. **उत्सर्जन:** पसीने द्वारा थोड़ी मात्रा
:::

---

## 📊 त्वचा तथ्य

| तथ्य | मान |
|:----|:-----|
| **क्षेत्रफल** | 1.5-2.0 m² |
| **वजन** | 4-5 kg |
| **मोटाई** | 0.5-4 mm |

---

## 🧬 त्वचा की संरचना

### तीन मुख्य परतें

| परत | प्रकार | स्थान |
|:----|:------|:------|
| **एपिडर्मिस** | उपकला | सबसे बाहर |
| **डर्मिस** | संयोजी | मध्य |
| **हाइपोडर्मिस** | चर्मादि | सबसे गहरा |

---

## 🔬 एपिडर्मिस

### परतें (गहरे से सतही)

| परत | विवरण |
|:----|:------|
| **स्ट्रेटम बेसेल** | स्टेम कोशिकाएं, मेलानोसाइट्स |
| **स्ट्रेटम स्पाइनोसम** | "कांटेदार" दिखावट |
| **स्ट्रेटम ग्रैनुलोसम** | केराटोहाइलिन कण |
| **स्ट्रेटम ल्यूसिडम** | केवल मोटी त्वचा में |
| **स्ट्रेटम कॉर्नियम** | मृत, केराटिनीकृत |

### एपिडर्मिस में कोशिका प्रकार

| कोशिका | कार्य |
|:-------|:------|
| **केराटिनोसाइट्स** | केराटिन बनाती हैं |
| **मेलानोसाइट्स** | मेलानिन बनाती हैं |
| **लैंगरहैंस** | प्रतिरक्षा |
| **मर्केल** | स्पर्श संवेदना |

---

## 🔬 डर्मिस

### दो परतें
| परत | सामग्री |
|:----|:--------|
| **पैपिलरी** | केशिकाएं, संवेदक |
| **रेटिकुलर** | बाल रोम, ग्रंथियां |

---

## 🔬 हाइपोडर्मिस

### कार्य
- **इन्सुलेशन** (गर्मी रोकना)
- **कुशनिंग** (सदमा अवशोषण)
- **ऊर्जा भंडारण** (वसा)

:::info
**चर्मादि इंजेक्शन** इसी परत में दिए जाते हैं
:::

---

## 💇 बाल

### संरचना
| भाग | विवरण |
|:----|:------|
| **शाफ्ट** | दिखाई देने वाला |
| **जड़** | रोम में |
| **बल्ब** | वृद्धि क्षेत्र |
| **रोम** | जड़ के चारों ओर नली |

---

## 💅 नाखून

### संरचना
| भाग | विवरण |
|:----|:------|
| **नाखून प्लेट** | दिखाई देने वाला |
| **नाखून बिस्तर** | नीचे |
| **लुनुला** | सफेद अर्धचंद्र |
| **मैट्रिक्स** | वृद्धि क्षेत्र |

### वृद्धि दर
- **हाथ के नाखून:** ~3 mm/माह
- **पैर के नाखून:** ~1 mm/माह

---

## 👁️ आंख (दृष्टि)

### नेत्रगोलक की परतें

| परत | घटक |
|:----|:-----|
| **तंतुमय** | श्वेतपटल, कॉर्निया |
| **वाहिकी** | रंजितपटल, सिलिअरी, परितारिका |
| **तंत्रिकीय** | रेटिना |

### प्रमुख संरचनाएं
| संरचना | कार्य |
|:-------|:------|
| **कॉर्निया** | प्रकाश अपवर्तन |
| **परितारिका** | पुतली आकार नियंत्रण |
| **लेंस** | प्रकाश फोकस |
| **रेटिना** | छड़ और शंकु |
| **दृक् तंत्रिका** | मस्तिष्क को संचरण |

---

## 👂 कान (श्रवण और संतुलन)

### तीन भाग

| भाग | कार्य |
|:----|:------|
| **बाह्य कान** | ध्वनि एकत्र |
| **मध्य कान** | प्रवर्धन (अस्थिकाएं) |
| **आंतरिक कान** | श्रवण + संतुलन |

### अस्थिकाएं (सबसे छोटी हड्डियां)
1. **मैलियस** (हथौड़ा)
2. **इंकस** (निहाई)
3. **स्टेपीज** (रकाब)

### आंतरिक कान
| संरचना | कार्य |
|:-------|:------|
| **कोक्लिया** | श्रवण |
| **वेस्टिब्यूल** | स्थिर संतुलन |
| **अर्धवृत्ताकार नलिकाएं** | गतिशील संतुलन |

---

## 🎯 त्वरित संशोधन

:::tip
**याद रखें:**
1. त्वचा = सबसे बड़ा अंग
2. 3 परतें: एपिडर्मिस, डर्मिस, हाइपोडर्मिस
3. 5 एपिडर्मल परतें (मोटी त्वचा)
4. मेलानोसाइट्स मेलानिन बनाती हैं
5. हाथ के नाखून तेज बढ़ते हैं
6. मध्य कान में 3 अस्थिकाएं
7. कोक्लिया श्रवण के लिए
:::
`
  }
];
