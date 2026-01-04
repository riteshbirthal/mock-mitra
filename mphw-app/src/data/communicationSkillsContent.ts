export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const communicationSkillsLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Communication",
    titleHi: "संचार का परिचय",
    contentEn: `
# 💬 Introduction to Communication

---

## 📖 What is Communication?

> **Communication** is the process of exchanging information, ideas, and feelings between people.

---

## 🔄 Communication Process

| Element | Description |
|:--------|:------------|
| **Sender** | Person sending message |
| **Message** | Information being sent |
| **Channel** | Medium (verbal, written) |
| **Receiver** | Person receiving message |
| **Feedback** | Response from receiver |

---

## 📊 Types of Communication

### By Method

| Type | Examples |
|:-----|:---------|
| **Verbal** | Speaking, discussions |
| **Non-verbal** | Body language, gestures |
| **Written** | Reports, letters |
| **Visual** | Charts, posters |

### By Direction

| Type | Flow |
|:-----|:-----|
| **One-way** | Speaker → Listener (no feedback) |
| **Two-way** | Interactive exchange |
| **Interpersonal** | One-to-one |
| **Group** | One-to-many |

---

## 🎯 7 C's of Communication

:::success
**Effective Communication Is:**
1. **Clear** - Easy to understand
2. **Concise** - Brief, to the point
3. **Concrete** - Specific, not vague
4. **Correct** - Accurate information
5. **Coherent** - Logical flow
6. **Complete** - All information included
7. **Courteous** - Respectful, polite
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Communication = Exchange of information
2. 5 elements: Sender, Message, Channel, Receiver, Feedback
3. Verbal + Non-verbal communication
4. 7 C's for effective communication
5. Two-way communication is more effective
:::
`,
    contentHi: `
# 💬 संचार का परिचय

---

## 📖 संचार क्या है?

> **संचार** लोगों के बीच जानकारी, विचारों और भावनाओं का आदान-प्रदान करने की प्रक्रिया है।

---

## 🔄 संचार प्रक्रिया

| तत्व | विवरण |
|:-----|:------|
| **प्रेषक** | संदेश भेजने वाला |
| **संदेश** | भेजी जा रही जानकारी |
| **माध्यम** | चैनल (मौखिक, लिखित) |
| **प्राप्तकर्ता** | संदेश प्राप्त करने वाला |
| **प्रतिक्रिया** | प्राप्तकर्ता से प्रतिक्रिया |

---

## 📊 संचार के प्रकार

### विधि द्वारा

| प्रकार | उदाहरण |
|:-------|:-------|
| **मौखिक** | बोलना, चर्चा |
| **गैर-मौखिक** | शारीरिक भाषा |
| **लिखित** | रिपोर्ट, पत्र |
| **दृश्य** | चार्ट, पोस्टर |

---

## 🎯 संचार के 7 C

:::success
**प्रभावी संचार है:**
1. **स्पष्ट** - समझने में आसान
2. **संक्षिप्त** - संक्षेप में
3. **ठोस** - विशिष्ट
4. **सही** - सटीक जानकारी
5. **सुसंगत** - तार्किक प्रवाह
6. **पूर्ण** - सभी जानकारी शामिल
7. **विनम्र** - सम्मानजनक
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. संचार = जानकारी का आदान-प्रदान
2. 5 तत्व: प्रेषक, संदेश, माध्यम, प्राप्तकर्ता, प्रतिक्रिया
3. मौखिक + गैर-मौखिक संचार
4. प्रभावी संचार के लिए 7 C
5. दो-तरफा संचार अधिक प्रभावी
:::
`
  },
  {
    id: 2,
    titleEn: "Interpersonal Communication",
    titleHi: "पारस्परिक संचार",
    contentEn: `
# 🤝 Interpersonal Communication (IPC)

---

## 📖 What is IPC?

> **IPC** is direct, face-to-face communication between two or more people.

---

## 🎯 Key Skills for IPC

### Active Listening

:::info
**SOLER Technique:**
- **S**it facing the person
- **O**pen posture
- **L**ean slightly forward
- **E**ye contact (appropriate)
- **R**elaxed manner
:::

### Effective Speaking
- Use simple language
- Speak clearly
- Check understanding
- Use appropriate tone

---

## ❓ Questioning Techniques

| Type | Purpose | Example |
|:-----|:--------|:--------|
| **Open-ended** | Get detailed info | "How do you feel?" |
| **Closed** | Get specific answer | "Did you take medicine?" |
| **Probing** | Get more details | "Tell me more about..." |
| **Leading** | Suggest answer (avoid) | "You don't smoke, do you?" |

---

## 👀 Non-verbal Communication

| Element | Impact |
|:--------|:-------|
| **Eye contact** | Shows attention |
| **Facial expression** | Shows emotion |
| **Body posture** | Shows interest |
| **Gestures** | Emphasize points |
| **Touch** | Shows care (appropriate) |
| **Silence** | Allows thinking |

---

## 🚫 Barriers to Communication

| Barrier | Example |
|:--------|:--------|
| **Language** | Different languages |
| **Cultural** | Different beliefs |
| **Physical** | Noise, distance |
| **Emotional** | Fear, anxiety |
| **Prejudice** | Judgment |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. IPC = Face-to-face communication
2. SOLER for active listening
3. Open questions for details
4. Closed questions for yes/no
5. 55% communication is non-verbal
6. Avoid leading questions
:::
`,
    contentHi: `
# 🤝 पारस्परिक संचार (IPC)

---

## 📖 IPC क्या है?

> **IPC** दो या अधिक लोगों के बीच प्रत्यक्ष, आमने-सामने संचार है।

---

## 🎯 IPC के लिए मुख्य कौशल

### सक्रिय सुनना

:::info
**SOLER तकनीक:**
- **S**it - व्यक्ति के सामने बैठें
- **O**pen - खुली मुद्रा
- **L**ean - थोड़ा आगे झुकें
- **E**ye contact - आंखों का संपर्क
- **R**elaxed - आराम से
:::

### प्रभावी बोलना
- सरल भाषा का उपयोग
- स्पष्ट रूप से बोलें
- समझ की जांच करें
- उचित स्वर का उपयोग

---

## ❓ प्रश्न तकनीकें

| प्रकार | उद्देश्य | उदाहरण |
|:-------|:--------|:-------|
| **खुला** | विस्तृत जानकारी | "आप कैसा महसूस करते हैं?" |
| **बंद** | विशिष्ट उत्तर | "क्या आपने दवा ली?" |
| **जांच** | अधिक विवरण | "इसके बारे में और बताएं..." |

---

## 👀 गैर-मौखिक संचार

| तत्व | प्रभाव |
|:-----|:------|
| **आंखों का संपर्क** | ध्यान दिखाता है |
| **चेहरे की अभिव्यक्ति** | भावना दिखाती है |
| **शरीर की मुद्रा** | रुचि दिखाती है |
| **इशारे** | बिंदुओं पर जोर |
| **स्पर्श** | देखभाल दिखाता है |
| **मौन** | सोचने की अनुमति |

---

## 🚫 संचार में बाधाएं

| बाधा | उदाहरण |
|:-----|:-------|
| **भाषा** | अलग-अलग भाषाएं |
| **सांस्कृतिक** | अलग-अलग विश्वास |
| **भौतिक** | शोर, दूरी |
| **भावनात्मक** | डर, चिंता |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. IPC = आमने-सामने संचार
2. सक्रिय सुनने के लिए SOLER
3. विवरण के लिए खुले प्रश्न
4. हां/नहीं के लिए बंद प्रश्न
5. 55% संचार गैर-मौखिक है
:::
`
  },
  {
    id: 3,
    titleEn: "Counseling Skills",
    titleHi: "परामर्श कौशल",
    contentEn: `
# 🗣️ Counseling Skills

---

## 📖 What is Counseling?

> **Counseling** is a process of helping people understand their situation and make informed decisions.

---

## 🎯 GATHER Approach

:::success
**Counseling Steps:**
- **G**reet the client warmly
- **A**sk about their concerns
- **T**ell relevant information
- **H**elp them decide
- **E**xplain what to do
- **R**eturn for follow-up
:::

---

## 💊 Areas for Counseling

| Topic | Focus |
|:------|:------|
| **Family Planning** | Method selection, use |
| **ANC** | Danger signs, birth plan |
| **Nutrition** | Feeding practices |
| **Immunization** | Importance, schedule |
| **TB/HIV** | Treatment adherence |
| **Mental Health** | Coping, support |

---

## ✅ Counseling Do's

| Do |
|:---|
| Create private environment |
| Show respect and empathy |
| Listen actively |
| Use simple language |
| Check understanding |
| Give accurate information |
| Support their decision |

## ❌ Counseling Don'ts

| Don't |
|:------|
| Judge or criticize |
| Interrupt |
| Give false hope |
| Impose your views |
| Share their information |
| Rush the session |

---

## 📋 Example: FP Counseling

### Steps
1. Welcome and build rapport
2. Assess needs and preferences
3. Present method options
4. Explain chosen method
5. Demonstrate if needed
6. Schedule follow-up
7. Provide contact information

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Counseling = Helping people decide
2. GATHER approach for counseling
3. Maintain privacy always
4. Don't judge or impose views
5. Check understanding
6. Schedule follow-up
:::
`,
    contentHi: `
# 🗣️ परामर्श कौशल

---

## 📖 परामर्श क्या है?

> **परामर्श** लोगों को उनकी स्थिति समझने और सूचित निर्णय लेने में मदद करने की प्रक्रिया है।

---

## 🎯 GATHER दृष्टिकोण

:::success
**परामर्श चरण:**
- **G**reet - क्लाइंट का गर्मजोशी से स्वागत
- **A**sk - उनकी चिंताओं के बारे में पूछें
- **T**ell - प्रासंगिक जानकारी बताएं
- **H**elp - निर्णय में मदद करें
- **E**xplain - क्या करना है समझाएं
- **R**eturn - फॉलो-अप के लिए वापसी
:::

---

## 💊 परामर्श के क्षेत्र

| विषय | फोकस |
|:-----|:-----|
| **परिवार नियोजन** | विधि चयन, उपयोग |
| **ANC** | खतरे के संकेत, जन्म योजना |
| **पोषण** | आहार प्रथाएं |
| **टीकाकरण** | महत्व, अनुसूची |
| **TB/HIV** | उपचार पालन |
| **मानसिक स्वास्थ्य** | मुकाबला, समर्थन |

---

## ✅ परामर्श करें

| करें |
|:----|
| निजी वातावरण बनाएं |
| सम्मान और सहानुभूति दिखाएं |
| सक्रिय रूप से सुनें |
| सरल भाषा का उपयोग करें |
| समझ की जांच करें |
| सटीक जानकारी दें |
| उनके निर्णय का समर्थन करें |

## ❌ परामर्श न करें

| न करें |
|:------|
| न्याय या आलोचना |
| बाधित करें |
| झूठी आशा दें |
| अपने विचार थोपें |
| उनकी जानकारी साझा करें |
| सत्र में जल्दबाजी |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. परामर्श = निर्णय में मदद
2. परामर्श के लिए GATHER दृष्टिकोण
3. हमेशा गोपनीयता बनाए रखें
4. न्याय न करें या विचार न थोपें
5. समझ की जांच करें
6. फॉलो-अप शेड्यूल करें
:::
`
  },
  {
    id: 4,
    titleEn: "Health Education",
    titleHi: "स्वास्थ्य शिक्षा",
    contentEn: `
# 📢 Health Education

---

## 📖 What is Health Education?

> **Health Education** is the process of enabling people to increase control over and improve their health.

---

## 🎯 Objectives of Health Education

| Level | Goal |
|:------|:-----|
| **Knowledge** | Inform about health issues |
| **Attitude** | Create positive beliefs |
| **Behavior** | Encourage healthy practices |

---

## 📊 Methods of Health Education

### Individual Methods
- One-to-one counseling
- Home visits
- OPD education

### Group Methods
- Group discussions
- Demonstrations
- Health talks
- Role plays

### Mass Methods
- Posters, pamphlets
- Radio, TV
- Social media
- Exhibitions

---

## 🖼️ Audio-Visual Aids

| Aid | Use |
|:----|:----|
| **Flipcharts** | Sequential teaching |
| **Posters** | Key messages |
| **Models** | Demonstrate anatomy |
| **Videos** | Show procedures |
| **Real objects** | Hands-on learning |

---

## 📋 Planning Health Education Session

### Steps
1. **Assess** audience needs
2. **Set** objectives
3. **Select** methods and materials
4. **Prepare** content
5. **Deliver** the session
6. **Evaluate** effectiveness

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Health education aims to change behavior
2. KAP = Knowledge, Attitude, Practice
3. Individual, Group, Mass methods
4. Use appropriate audio-visual aids
5. Plan before conducting sessions
6. Evaluate effectiveness
:::
`,
    contentHi: `
# 📢 स्वास्थ्य शिक्षा

---

## 📖 स्वास्थ्य शिक्षा क्या है?

> **स्वास्थ्य शिक्षा** लोगों को अपने स्वास्थ्य पर नियंत्रण बढ़ाने और सुधारने में सक्षम बनाने की प्रक्रिया है।

---

## 🎯 स्वास्थ्य शिक्षा के उद्देश्य

| स्तर | लक्ष्य |
|:-----|:------|
| **ज्ञान** | स्वास्थ्य मुद्दों की जानकारी |
| **दृष्टिकोण** | सकारात्मक विश्वास बनाएं |
| **व्यवहार** | स्वस्थ प्रथाओं को प्रोत्साहित |

---

## 📊 स्वास्थ्य शिक्षा की विधियां

### व्यक्तिगत विधियां
- एक-से-एक परामर्श
- घर का दौरा
- OPD शिक्षा

### समूह विधियां
- समूह चर्चा
- प्रदर्शन
- स्वास्थ्य वार्ता
- रोल प्ले

### जन विधियां
- पोस्टर, पैम्फलेट
- रेडियो, TV
- सोशल मीडिया
- प्रदर्शनियां

---

## 🖼️ दृश्य-श्रव्य सहायक

| सहायक | उपयोग |
|:-------|:-----|
| **फ्लिपचार्ट** | क्रमिक शिक्षण |
| **पोस्टर** | मुख्य संदेश |
| **मॉडल** | शरीर रचना प्रदर्शन |
| **वीडियो** | प्रक्रियाएं दिखाएं |
| **वास्तविक वस्तुएं** | व्यावहारिक सीखना |

---

## 📋 स्वास्थ्य शिक्षा सत्र की योजना

### चरण
1. दर्शकों की जरूरतों का **आकलन**
2. उद्देश्य **निर्धारित** करें
3. विधियां और सामग्री **चुनें**
4. सामग्री **तैयार** करें
5. सत्र **प्रदान** करें
6. प्रभावशीलता का **मूल्यांकन**

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. स्वास्थ्य शिक्षा का उद्देश्य व्यवहार बदलना
2. KAP = ज्ञान, दृष्टिकोण, अभ्यास
3. व्यक्तिगत, समूह, जन विधियां
4. उचित दृश्य-श्रव्य सहायक का उपयोग
5. सत्र से पहले योजना बनाएं
6. प्रभावशीलता का मूल्यांकन करें
:::
`
  },
  {
    id: 5,
    titleEn: "Community Mobilization",
    titleHi: "सामुदायिक गतिशीलता",
    contentEn: `
# 🏘️ Community Mobilization

---

## 📖 What is Community Mobilization?

> **Community Mobilization** is the process of engaging community members to participate in health activities.

---

## 🎯 Key Stakeholders

| Stakeholder | Role |
|:------------|:-----|
| **ASHA** | Community link, mobilization |
| **AWW** | ICDS services, nutrition |
| **PRI members** | Local governance, support |
| **SHG members** | Women's groups |
| **Teachers** | School health |
| **Religious leaders** | Influence community |

---

## 🏥 Community Platforms

| Platform | Purpose |
|:---------|:--------|
| **VHSNC** | Village health planning |
| **VHND** | Monthly health services |
| **Health mela** | Awareness campaigns |
| **School health** | Student health |
| **Gram Sabha** | Community decisions |

---

## 📅 VHND (Village Health and Nutrition Day)

### Activities
- Immunization
- ANC checkups
- Growth monitoring
- Nutrition counseling
- Health education
- Referrals

### Frequency
- Once a month at AWC
- Fixed day
- All beneficiaries invited

---

## 👥 Forming Community Groups

### Steps
1. Identify stakeholders
2. Explain purpose and benefits
3. Conduct initial meeting
4. Elect leaders
5. Develop action plan
6. Regular meetings
7. Monitor progress

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Community mobilization = Engaging community
2. Key workers: ASHA, AWW, ANM
3. VHSNC = Village health committee
4. VHND = Monthly health day at AWC
5. Use local leaders for support
6. Regular follow-up important
:::
`,
    contentHi: `
# 🏘️ सामुदायिक गतिशीलता

---

## 📖 सामुदायिक गतिशीलता क्या है?

> **सामुदायिक गतिशीलता** स्वास्थ्य गतिविधियों में भाग लेने के लिए समुदाय के सदस्यों को शामिल करने की प्रक्रिया है।

---

## 🎯 मुख्य हितधारक

| हितधारक | भूमिका |
|:---------|:------|
| **ASHA** | सामुदायिक लिंक, गतिशीलता |
| **AWW** | ICDS सेवाएं, पोषण |
| **PRI सदस्य** | स्थानीय शासन, समर्थन |
| **SHG सदस्य** | महिला समूह |
| **शिक्षक** | स्कूल स्वास्थ्य |
| **धार्मिक नेता** | समुदाय को प्रभावित |

---

## 🏥 सामुदायिक मंच

| मंच | उद्देश्य |
|:----|:--------|
| **VHSNC** | ग्राम स्वास्थ्य योजना |
| **VHND** | मासिक स्वास्थ्य सेवाएं |
| **स्वास्थ्य मेला** | जागरूकता अभियान |
| **स्कूल स्वास्थ्य** | छात्र स्वास्थ्य |
| **ग्राम सभा** | सामुदायिक निर्णय |

---

## 📅 VHND (ग्राम स्वास्थ्य एवं पोषण दिवस)

### गतिविधियां
- टीकाकरण
- ANC जांच
- वृद्धि निगरानी
- पोषण परामर्श
- स्वास्थ्य शिक्षा
- रेफरल

### आवृत्ति
- महीने में एक बार AWC पर
- निश्चित दिन
- सभी लाभार्थियों को आमंत्रित

---

## 👥 सामुदायिक समूह बनाना

### चरण
1. हितधारकों की पहचान
2. उद्देश्य और लाभ समझाएं
3. प्रारंभिक बैठक
4. नेताओं का चुनाव
5. कार्य योजना विकसित
6. नियमित बैठकें
7. प्रगति निगरानी

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सामुदायिक गतिशीलता = समुदाय को शामिल करना
2. मुख्य कार्यकर्ता: ASHA, AWW, ANM
3. VHSNC = ग्राम स्वास्थ्य समिति
4. VHND = AWC पर मासिक स्वास्थ्य दिवस
5. समर्थन के लिए स्थानीय नेताओं का उपयोग
6. नियमित फॉलो-अप महत्वपूर्ण
:::
`
  },
  {
    id: 6,
    titleEn: "Therapeutic Communication",
    titleHi: "चिकित्सीय संचार",
    contentEn: `
# 💝 Therapeutic Communication

---

## 📖 What is Therapeutic Communication?

> **Therapeutic Communication** is purposeful communication used by healthcare workers to build trust, provide emotional support, and facilitate healing.

---

## 🎯 Goals of Therapeutic Communication

| Goal | Description |
|:-----|:------------|
| **Build Trust** | Establish rapport and confidence |
| **Reduce Anxiety** | Calm fears and worries |
| **Provide Support** | Emotional comfort during illness |
| **Gather Information** | Accurate health history |
| **Educate** | Help understand condition |
| **Promote Compliance** | Encourage treatment adherence |

---

## ✅ Therapeutic Techniques

### Facilitative Techniques

| Technique | Example | Purpose |
|:----------|:--------|:--------|
| **Active Listening** | Nodding, "I see..." | Shows attention |
| **Silence** | Quiet pause | Allows reflection |
| **Reflecting** | "You feel sad..." | Validates feelings |
| **Clarifying** | "Do you mean...?" | Ensures understanding |
| **Summarizing** | "So, you said..." | Confirms information |
| **Open-ended Questions** | "How do you feel?" | Encourages expression |
| **Encouraging** | "Go on, tell me more" | Promotes sharing |

### Empathy Statements

:::success
**Showing Empathy:**
- "I understand this is difficult for you"
- "It's natural to feel worried"
- "I can see you're concerned"
- "Many people feel this way"
- "Your feelings are valid"
:::

---

## ❌ Non-Therapeutic Responses (AVOID)

| Response | Example | Why Avoid |
|:---------|:--------|:----------|
| **False Reassurance** | "Everything will be fine" | May not be true |
| **Giving Advice** | "You should do this..." | Imposes opinion |
| **Changing Subject** | "Let's talk about..." | Ignores concern |
| **Minimizing** | "It's not that bad" | Dismisses feelings |
| **Judgmental** | "Why did you do that?" | Creates guilt |
| **Defending** | "The doctor knows best" | Invalidates concern |
| **Probing** | "Why? Why? Why?" | Feels intrusive |

---

## 🏥 Therapeutic Communication in Different Situations

### With Anxious Patients

| Do | Don't |
|:---|:------|
| Speak calmly and slowly | Rush or show impatience |
| Allow extra time | Dismiss concerns |
| Explain procedures clearly | Use technical jargon |
| Encourage questions | Ignore body language |

### With Elderly Patients

| Do | Don't |
|:---|:------|
| Speak clearly, not loudly | Shout or speak too fast |
| Face them while talking | Assume they can't understand |
| Use simple language | Talk to family only |
| Be patient, allow time | Interrupt or finish sentences |

### With Children

| Do | Don't |
|:---|:------|
| Get to their level | Stand over them |
| Use simple words | Use scary terms |
| Include play/toys | Ignore their fears |
| Explain simply | Lie about pain |

---

## 💊 Phases of Therapeutic Relationship

| Phase | Activities |
|:------|:-----------|
| **Pre-interaction** | Review records, prepare environment |
| **Orientation** | Introduce self, establish trust, set goals |
| **Working** | Implement care, provide education, problem-solve |
| **Termination** | Summarize progress, plan follow-up, say goodbye |

---

## 📏 Professional Boundaries

:::warning
**Maintaining Boundaries:**
- Keep relationship professional
- Don't share personal problems
- Avoid accepting gifts
- Don't give personal phone number
- Refer if too emotionally involved
- Document interactions
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Therapeutic communication = Healing communication
2. Active listening is most important technique
3. Use empathy statements to validate feelings
4. Avoid false reassurance and minimizing
5. Different approaches for different patients
6. 4 phases: Pre-interaction, Orientation, Working, Termination
7. Always maintain professional boundaries
:::
`,
    contentHi: `
# 💝 चिकित्सीय संचार

---

## 📖 चिकित्सीय संचार क्या है?

> **चिकित्सीय संचार** स्वास्थ्य कार्यकर्ताओं द्वारा विश्वास बनाने, भावनात्मक सहायता प्रदान करने और उपचार को सुविधाजनक बनाने के लिए उपयोग किया जाने वाला उद्देश्यपूर्ण संचार है।

---

## 🎯 चिकित्सीय संचार के लक्ष्य

| लक्ष्य | विवरण |
|:------|:------|
| **विश्वास बनाना** | तालमेल और आत्मविश्वास स्थापित |
| **चिंता कम करना** | डर और चिंताओं को शांत करना |
| **सहायता प्रदान** | बीमारी के दौरान भावनात्मक आराम |
| **जानकारी इकट्ठा** | सटीक स्वास्थ्य इतिहास |
| **शिक्षित करना** | स्थिति समझने में मदद |
| **अनुपालन बढ़ाना** | उपचार पालन को प्रोत्साहित |

---

## ✅ चिकित्सीय तकनीकें

### सुविधाजनक तकनीकें

| तकनीक | उदाहरण | उद्देश्य |
|:-------|:-------|:--------|
| **सक्रिय सुनना** | सिर हिलाना, "मैं समझता हूं..." | ध्यान दिखाता है |
| **मौन** | शांत विराम | चिंतन की अनुमति |
| **प्रतिबिंबित करना** | "आप दुखी महसूस करते हैं..." | भावनाओं को मान्य करता है |
| **स्पष्ट करना** | "क्या आपका मतलब है...?" | समझ सुनिश्चित करता है |
| **सारांश** | "तो, आपने कहा..." | जानकारी की पुष्टि |
| **खुले प्रश्न** | "आप कैसा महसूस करते हैं?" | अभिव्यक्ति को प्रोत्साहित |
| **प्रोत्साहित करना** | "आगे बताएं, और बताएं" | साझा करने को बढ़ावा |

### सहानुभूति कथन

:::success
**सहानुभूति दिखाना:**
- "मैं समझता हूं यह आपके लिए कठिन है"
- "चिंतित होना स्वाभाविक है"
- "मैं देख सकता हूं आप चिंतित हैं"
- "बहुत से लोग ऐसा महसूस करते हैं"
- "आपकी भावनाएं वैध हैं"
:::

---

## ❌ गैर-चिकित्सीय प्रतिक्रियाएं (बचें)

| प्रतिक्रिया | उदाहरण | क्यों बचें |
|:-----------|:-------|:----------|
| **झूठी आश्वासन** | "सब ठीक हो जाएगा" | सच नहीं हो सकता |
| **सलाह देना** | "आपको ऐसा करना चाहिए..." | राय थोपता है |
| **विषय बदलना** | "चलिए बात करते हैं..." | चिंता को अनदेखा |
| **कम करना** | "इतना बुरा नहीं है" | भावनाओं को खारिज |
| **निर्णयात्मक** | "आपने ऐसा क्यों किया?" | अपराधबोध पैदा |

---

## 🏥 विभिन्न स्थितियों में चिकित्सीय संचार

### चिंतित मरीजों के साथ

| करें | न करें |
|:----|:------|
| शांति से धीरे बोलें | जल्दबाजी या अधीरता |
| अतिरिक्त समय दें | चिंताओं को खारिज |
| प्रक्रियाओं को स्पष्ट समझाएं | तकनीकी शब्दावली |

### बुजुर्ग मरीजों के साथ

| करें | न करें |
|:----|:------|
| स्पष्ट बोलें, जोर से नहीं | चिल्लाएं या बहुत तेज बोलें |
| बात करते समय उनकी ओर देखें | मान लें वे समझ नहीं सकते |
| सरल भाषा का उपयोग | केवल परिवार से बात |

### बच्चों के साथ

| करें | न करें |
|:----|:------|
| उनके स्तर पर आएं | उन पर खड़े रहें |
| सरल शब्दों का उपयोग | डरावने शब्द |
| खेल/खिलौने शामिल करें | उनके डर को अनदेखा |

---

## 💊 चिकित्सीय संबंध के चरण

| चरण | गतिविधियां |
|:----|:-----------|
| **पूर्व-संवाद** | रिकॉर्ड समीक्षा, वातावरण तैयार |
| **परिचय** | परिचय, विश्वास स्थापित, लक्ष्य निर्धारित |
| **कार्य** | देखभाल लागू, शिक्षा प्रदान, समस्या-समाधान |
| **समाप्ति** | प्रगति सारांश, फॉलो-अप योजना, विदाई |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. चिकित्सीय संचार = उपचार संचार
2. सक्रिय सुनना सबसे महत्वपूर्ण तकनीक
3. भावनाओं को मान्य करने के लिए सहानुभूति कथन
4. झूठी आश्वासन और कम करने से बचें
5. विभिन्न मरीजों के लिए विभिन्न दृष्टिकोण
6. 4 चरण: पूर्व-संवाद, परिचय, कार्य, समाप्ति
7. हमेशा पेशेवर सीमाएं बनाए रखें
:::
`
  },
  {
    id: 7,
    titleEn: "Breaking Bad News",
    titleHi: "बुरी खबर देना",
    contentEn: `
# 📰 Breaking Bad News

---

## 📖 What is Breaking Bad News?

> **Breaking Bad News** refers to communicating information that negatively affects a patient's or family's view of their health or future.

---

## 🔄 SPIKES Protocol

:::success
**6-Step Framework for Breaking Bad News:**

| Step | Action | Description |
|:-----|:-------|:------------|
| **S** | Setting | Private place, sit down, no interruptions |
| **P** | Perception | Ask what they already know |
| **I** | Invitation | Ask how much they want to know |
| **K** | Knowledge | Give information in simple terms |
| **E** | Empathy | Respond to emotions |
| **S** | Summary | Summarize, plan next steps |
:::

---

## 🏥 Preparing the Setting

### Environment Checklist

| Item | Requirement |
|:-----|:------------|
| **Privacy** | Closed door, no interruptions |
| **Seating** | Sit at same level, not behind desk |
| **Time** | Adequate time, no rushing |
| **Tissues** | Available for emotional response |
| **Support** | Family member present if patient wishes |
| **Phone** | Silenced or off |

---

## ❓ Assessing Perception

### What to Ask

| Question Type | Example |
|:--------------|:--------|
| **Understanding** | "What have the doctors told you so far?" |
| **Expectations** | "What do you think is happening?" |
| **Preparation** | "Are you worried about anything?" |

:::info
**Why Important:**
- Corrects misinformation
- Identifies denial
- Allows gradual disclosure
- Respects patient's knowledge level
:::

---

## 📋 Giving Information

### Guidelines

| Do | Don't |
|:---|:------|
| Use simple language | Use medical jargon |
| Give information in small pieces | Overload with information |
| Pause after each piece | Rush through |
| Check understanding | Assume they understood |
| Use "warning shot" | Blurt out news |

### Warning Shot Examples

| Situation | Warning Shot |
|:----------|:-------------|
| **Serious diagnosis** | "I'm afraid I have some difficult news..." |
| **Lab results** | "The test results show something we need to discuss..." |
| **Prognosis** | "I need to talk to you about what this means..." |

---

## 💔 Responding to Emotions

### NURSE Framework

| Letter | Response | Example |
|:-------|:---------|:--------|
| **N** | Naming | "I can see you're upset" |
| **U** | Understanding | "This must be very hard for you" |
| **R** | Respecting | "You've been so strong through this" |
| **S** | Supporting | "I'm here to help you through this" |
| **E** | Exploring | "Tell me what you're thinking" |

### Common Emotional Reactions

| Reaction | Response |
|:---------|:---------|
| **Crying** | Allow time, offer tissues, stay present |
| **Anger** | Don't take personally, acknowledge feelings |
| **Denial** | Give time, don't force acceptance |
| **Silence** | Wait patiently, offer support |
| **Questions** | Answer honestly, simply |

---

## 📊 Types of Bad News in Community Health

| Situation | Approach |
|:----------|:---------|
| **HIV+ result** | Private counseling, support, treatment options |
| **Cancer diagnosis** | Referral information, treatment plan |
| **Child disability** | Support services, early intervention |
| **TB diagnosis** | Treatment available, family screening |
| **Adverse event** | Honest disclosure, next steps |
| **Maternal/child death** | Grief support, bereavement care |

---

## 📝 Documentation After Breaking Bad News

:::warning
**Document:**
- Date, time, place
- Who was present
- What information was given
- Patient/family reaction
- Questions asked and answers given
- Follow-up plan
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. SPIKES = Setting, Perception, Invitation, Knowledge, Empathy, Summary
2. Always ensure privacy
3. Find out what patient already knows
4. Use "warning shot" before bad news
5. NURSE for responding to emotions
6. Allow time for questions and emotions
7. Plan follow-up and support
8. Document the conversation
:::
`,
    contentHi: `
# 📰 बुरी खबर देना

---

## 📖 बुरी खबर देना क्या है?

> **बुरी खबर देना** मरीज या परिवार के स्वास्थ्य या भविष्य के दृष्टिकोण को नकारात्मक रूप से प्रभावित करने वाली जानकारी संप्रेषित करना है।

---

## 🔄 SPIKES प्रोटोकॉल

:::success
**बुरी खबर देने के लिए 6-चरण ढांचा:**

| चरण | कार्य | विवरण |
|:----|:-----|:------|
| **S** | सेटिंग | निजी स्थान, बैठें, कोई बाधा नहीं |
| **P** | धारणा | पूछें वे पहले से क्या जानते हैं |
| **I** | निमंत्रण | पूछें वे कितना जानना चाहते हैं |
| **K** | ज्ञान | सरल शब्दों में जानकारी दें |
| **E** | सहानुभूति | भावनाओं पर प्रतिक्रिया दें |
| **S** | सारांश | सारांश, अगले कदम की योजना |
:::

---

## 🏥 सेटिंग तैयार करना

### वातावरण चेकलिस्ट

| आइटम | आवश्यकता |
|:-----|:---------|
| **गोपनीयता** | बंद दरवाजा, कोई बाधा नहीं |
| **बैठना** | समान स्तर पर बैठें |
| **समय** | पर्याप्त समय, जल्दबाजी नहीं |
| **टिश्यू** | भावनात्मक प्रतिक्रिया के लिए उपलब्ध |
| **समर्थन** | परिवार का सदस्य यदि मरीज चाहे |
| **फोन** | साइलेंट या बंद |

---

## ❓ धारणा का आकलन

### क्या पूछें

| प्रश्न प्रकार | उदाहरण |
|:-------------|:-------|
| **समझ** | "डॉक्टरों ने अब तक आपको क्या बताया?" |
| **अपेक्षाएं** | "आपको लगता है क्या हो रहा है?" |
| **तैयारी** | "क्या आप किसी बात से चिंतित हैं?" |

:::info
**क्यों महत्वपूर्ण:**
- गलत जानकारी को सही करता है
- इनकार की पहचान
- धीरे-धीरे प्रकटीकरण की अनुमति
- मरीज के ज्ञान स्तर का सम्मान
:::

---

## 📋 जानकारी देना

### दिशानिर्देश

| करें | न करें |
|:----|:------|
| सरल भाषा का उपयोग | चिकित्सा शब्दावली |
| छोटे टुकड़ों में जानकारी | जानकारी से अधिभार |
| प्रत्येक टुकड़े के बाद रुकें | जल्दबाजी |
| समझ की जांच करें | मान लें कि समझ गए |
| "चेतावनी संकेत" का उपयोग | सीधे खबर दें |

### चेतावनी संकेत उदाहरण

| स्थिति | चेतावनी संकेत |
|:-------|:-------------|
| **गंभीर निदान** | "मुझे डर है कि मेरे पास कुछ कठिन खबर है..." |
| **लैब परिणाम** | "परीक्षण परिणाम कुछ दिखाते हैं जिस पर चर्चा करनी है..." |

---

## 💔 भावनाओं पर प्रतिक्रिया

### NURSE ढांचा

| अक्षर | प्रतिक्रिया | उदाहरण |
|:------|:----------|:-------|
| **N** | नाम देना | "मैं देख सकता हूं आप परेशान हैं" |
| **U** | समझना | "यह आपके लिए बहुत कठिन होगा" |
| **R** | सम्मान करना | "आप इसमें बहुत मजबूत रहे हैं" |
| **S** | समर्थन करना | "मैं इसमें आपकी मदद के लिए हूं" |
| **E** | अन्वेषण | "मुझे बताएं आप क्या सोच रहे हैं" |

### आम भावनात्मक प्रतिक्रियाएं

| प्रतिक्रिया | प्रतिक्रिया |
|:-----------|:----------|
| **रोना** | समय दें, टिश्यू दें, मौजूद रहें |
| **गुस्सा** | व्यक्तिगत रूप से न लें, भावनाओं को स्वीकार करें |
| **इनकार** | समय दें, स्वीकृति के लिए मजबूर न करें |
| **मौन** | धैर्यपूर्वक प्रतीक्षा करें, समर्थन प्रदान करें |
| **प्रश्न** | ईमानदारी से, सरलता से उत्तर दें |

---

## 📊 सामुदायिक स्वास्थ्य में बुरी खबर के प्रकार

| स्थिति | दृष्टिकोण |
|:-------|:---------|
| **HIV+ परिणाम** | निजी परामर्श, समर्थन, उपचार विकल्प |
| **कैंसर निदान** | रेफरल जानकारी, उपचार योजना |
| **बच्चे की विकलांगता** | सहायता सेवाएं, प्रारंभिक हस्तक्षेप |
| **TB निदान** | उपचार उपलब्ध, परिवार जांच |
| **मातृ/शिशु मृत्यु** | शोक समर्थन, शोक देखभाल |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. SPIKES = सेटिंग, धारणा, निमंत्रण, ज्ञान, सहानुभूति, सारांश
2. हमेशा गोपनीयता सुनिश्चित करें
3. पता करें मरीज पहले से क्या जानता है
4. बुरी खबर से पहले "चेतावनी संकेत"
5. भावनाओं पर प्रतिक्रिया के लिए NURSE
6. प्रश्नों और भावनाओं के लिए समय दें
7. फॉलो-अप और समर्थन की योजना बनाएं
8. बातचीत का दस्तावेज़ बनाएं
:::
`
  },
  {
    id: 8,
    titleEn: "Documentation & Reporting Communication",
    titleHi: "दस्तावेज़ीकरण और रिपोर्टिंग संचार",
    contentEn: `
# 📝 Documentation & Reporting Communication

---

## 📖 What is Documentation Communication?

> **Documentation Communication** refers to written and electronic forms of communication used to record and share patient information among healthcare team members.

---

## 🎯 Purposes of Documentation

| Purpose | Description |
|:--------|:------------|
| **Continuity of Care** | Information available for all providers |
| **Legal Protection** | Evidence of care provided |
| **Communication** | Share info with team members |
| **Research** | Data for studies and audits |
| **Quality Improvement** | Identify areas for improvement |
| **Reimbursement** | Proof for insurance claims |

---

## 📊 Types of Documentation

### Patient Records

| Type | Contents |
|:-----|:---------|
| **MCH Card** | ANC visits, immunizations, growth monitoring |
| **OPD Register** | Daily patient visits, diagnoses |
| **IPD Records** | Admission, treatment, discharge |
| **Referral Slips** | Referral information |
| **Consent Forms** | Patient permissions |

### Reports

| Type | Frequency |
|:-----|:----------|
| **Daily Reports** | Census, admissions |
| **Weekly Reports** | Disease surveillance |
| **Monthly Reports** | HMIS, program data |
| **Annual Reports** | Year summary |

---

## ✅ Principles of Good Documentation

### FACT Principle

:::success
**Documentation Should Be:**
- **F**actual - Based on observations, not opinions
- **A**ccurate - Correct information, precise times
- **C**omplete - All relevant information included
- **T**imely - Recorded promptly, not delayed
:::

### Additional Principles

| Principle | Description |
|:----------|:------------|
| **Legible** | Clear handwriting or typed |
| **Concise** | Brief but comprehensive |
| **Objective** | Facts, not judgments |
| **Dated/Signed** | Always include date, time, signature |
| **Standardized** | Use approved abbreviations only |

---

## 📋 SBAR Communication Tool

:::info
**For Verbal Handoff and Reports:**

| Element | Content |
|:--------|:--------|
| **S - Situation** | What is happening now? Patient name, current problem |
| **B - Background** | History, relevant context |
| **A - Assessment** | Your analysis of the situation |
| **R - Recommendation** | What you suggest or need |
:::

### SBAR Example

| Element | Example |
|:--------|:--------|
| **Situation** | "Mrs. Sharma, 32, admitted for postpartum hemorrhage" |
| **Background** | "Delivered 2 hours ago, normal delivery, 2nd pregnancy" |
| **Assessment** | "Heavy bleeding continuing, BP dropping to 90/60" |
| **Recommendation** | "Needs urgent review, possible blood transfusion" |

---

## 🔄 Shift Handover Communication

### Essential Information

| Category | Details |
|:---------|:--------|
| **Patient Status** | Name, diagnosis, current condition |
| **Treatments** | Ongoing medications, IV fluids |
| **Pending** | Tests, procedures, consultations |
| **Special Needs** | Diet restrictions, mobility |
| **Concerns** | Potential complications, watch points |
| **Family** | Family situation, discharge planning |

### Handover Checklist

| Item | Check |
|:-----|:------|
| Face-to-face handover | ☐ |
| All patients discussed | ☐ |
| Critical patients first | ☐ |
| Questions answered | ☐ |
| Documentation complete | ☐ |

---

## ❌ Documentation Errors to Avoid

| Error | Problem | Correct Practice |
|:------|:--------|:-----------------|
| **Blank spaces** | Can be filled later | Draw line through |
| **White-out** | Illegal alteration | Single line, initial |
| **Pre-charting** | Record before event | Document after |
| **Vague entries** | Unclear meaning | Be specific |
| **Opinions** | Subjective bias | Record facts only |
| **Abbreviations** | Misunderstanding | Use standard only |

---

## 📱 Electronic Documentation

### Digital Records Benefits

| Benefit | Description |
|:--------|:------------|
| **Accessibility** | Access from multiple locations |
| **Legibility** | No handwriting issues |
| **Searchability** | Find information quickly |
| **Backup** | Data recovery possible |
| **Reports** | Auto-generate reports |

### Data Entry Best Practices

| Practice | Reason |
|:---------|:-------|
| Verify patient identity | Avoid wrong patient entry |
| Complete all fields | Comprehensive record |
| Double-check before saving | Prevent errors |
| Log out after use | Maintain security |
| Report system issues | Ensure data integrity |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Documentation = Legal record of care
2. FACT = Factual, Accurate, Complete, Timely
3. SBAR for verbal communication
4. Never leave blank spaces
5. Use only standard abbreviations
6. Always date, time, and sign entries
7. Errors: single line, initial, date
8. Electronic records need security measures
:::
`,
    contentHi: `
# 📝 दस्तावेज़ीकरण और रिपोर्टिंग संचार

---

## 📖 दस्तावेज़ीकरण संचार क्या है?

> **दस्तावेज़ीकरण संचार** लिखित और इलेक्ट्रॉनिक संचार के रूपों को संदर्भित करता है जो स्वास्थ्य टीम के सदस्यों के बीच रोगी की जानकारी रिकॉर्ड और साझा करने के लिए उपयोग किया जाता है।

---

## 🎯 दस्तावेज़ीकरण के उद्देश्य

| उद्देश्य | विवरण |
|:--------|:------|
| **देखभाल की निरंतरता** | सभी प्रदाताओं के लिए जानकारी उपलब्ध |
| **कानूनी सुरक्षा** | प्रदान की गई देखभाल का प्रमाण |
| **संचार** | टीम के सदस्यों के साथ जानकारी साझा |
| **अनुसंधान** | अध्ययन और ऑडिट के लिए डेटा |
| **गुणवत्ता सुधार** | सुधार के क्षेत्रों की पहचान |

---

## 📊 दस्तावेज़ीकरण के प्रकार

### रोगी रिकॉर्ड

| प्रकार | सामग्री |
|:------|:-------|
| **MCH कार्ड** | ANC विजिट, टीकाकरण, वृद्धि निगरानी |
| **OPD रजिस्टर** | दैनिक रोगी विजिट, निदान |
| **IPD रिकॉर्ड** | प्रवेश, उपचार, छुट्टी |
| **रेफरल स्लिप** | रेफरल जानकारी |
| **सहमति फॉर्म** | रोगी अनुमतियां |

### रिपोर्ट

| प्रकार | आवृत्ति |
|:------|:-------|
| **दैनिक रिपोर्ट** | जनगणना, प्रवेश |
| **साप्ताहिक रिपोर्ट** | रोग निगरानी |
| **मासिक रिपोर्ट** | HMIS, कार्यक्रम डेटा |
| **वार्षिक रिपोर्ट** | वर्ष सारांश |

---

## ✅ अच्छे दस्तावेज़ीकरण के सिद्धांत

### FACT सिद्धांत

:::success
**दस्तावेज़ीकरण होना चाहिए:**
- **F**actual - टिप्पणियों पर आधारित, राय नहीं
- **A**ccurate - सही जानकारी, सटीक समय
- **C**omplete - सभी प्रासंगिक जानकारी शामिल
- **T**imely - तुरंत रिकॉर्ड, देरी नहीं
:::

### अतिरिक्त सिद्धांत

| सिद्धांत | विवरण |
|:---------|:------|
| **सुपाठ्य** | स्पष्ट लिखावट या टाइप |
| **संक्षिप्त** | संक्षिप्त लेकिन व्यापक |
| **वस्तुनिष्ठ** | तथ्य, निर्णय नहीं |
| **दिनांकित/हस्ताक्षरित** | हमेशा तारीख, समय, हस्ताक्षर |

---

## 📋 SBAR संचार उपकरण

:::info
**मौखिक हैंडऑफ और रिपोर्ट के लिए:**

| तत्व | सामग्री |
|:----|:-------|
| **S - स्थिति** | अभी क्या हो रहा है? रोगी नाम, वर्तमान समस्या |
| **B - पृष्ठभूमि** | इतिहास, प्रासंगिक संदर्भ |
| **A - आकलन** | स्थिति का आपका विश्लेषण |
| **R - सिफारिश** | आप क्या सुझाव देते हैं या चाहिए |
:::

### SBAR उदाहरण

| तत्व | उदाहरण |
|:----|:-------|
| **स्थिति** | "श्रीमती शर्मा, 32, प्रसवोत्तर रक्तस्राव के लिए भर्ती" |
| **पृष्ठभूमि** | "2 घंटे पहले प्रसव, सामान्य प्रसव, दूसरी गर्भावस्था" |
| **आकलन** | "भारी रक्तस्राव जारी, BP गिरकर 90/60" |
| **सिफारिश** | "तत्काल समीक्षा चाहिए, संभावित रक्त चढ़ाना" |

---

## 🔄 शिफ्ट हैंडओवर संचार

### आवश्यक जानकारी

| श्रेणी | विवरण |
|:------|:------|
| **रोगी स्थिति** | नाम, निदान, वर्तमान स्थिति |
| **उपचार** | चल रही दवाएं, IV तरल पदार्थ |
| **लंबित** | परीक्षण, प्रक्रियाएं, परामर्श |
| **विशेष जरूरतें** | आहार प्रतिबंध, गतिशीलता |
| **चिंताएं** | संभावित जटिलताएं, निगरानी बिंदु |

---

## ❌ बचने के लिए दस्तावेज़ीकरण त्रुटियां

| त्रुटि | समस्या | सही अभ्यास |
|:------|:------|:----------|
| **खाली स्थान** | बाद में भरा जा सकता है | रेखा खींचें |
| **व्हाइट-आउट** | अवैध परिवर्तन | एकल रेखा, प्रारंभिक |
| **पूर्व-चार्टिंग** | घटना से पहले रिकॉर्ड | बाद में दस्तावेज़ |
| **अस्पष्ट प्रविष्टियां** | अस्पष्ट अर्थ | विशिष्ट रहें |
| **राय** | व्यक्तिपरक पूर्वाग्रह | केवल तथ्य रिकॉर्ड |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. दस्तावेज़ीकरण = देखभाल का कानूनी रिकॉर्ड
2. FACT = तथ्यात्मक, सटीक, पूर्ण, समय पर
3. मौखिक संचार के लिए SBAR
4. कभी खाली स्थान न छोड़ें
5. केवल मानक संक्षिप्ताक्षरों का उपयोग
6. हमेशा प्रविष्टियों पर तारीख, समय और हस्ताक्षर
7. त्रुटियां: एकल रेखा, प्रारंभिक, तारीख
8. इलेक्ट्रॉनिक रिकॉर्ड को सुरक्षा उपायों की आवश्यकता
:::
`
  },
  {
    id: 9,
    titleEn: "Conflict Resolution",
    titleHi: "संघर्ष समाधान",
    contentEn: `
# ⚖️ Conflict Resolution

---

## 📖 What is Conflict?

> **Conflict** is a disagreement or clash between individuals or groups due to differences in opinions, values, or interests.

---

## 🔄 Types of Conflict in Healthcare

| Type | Example |
|:-----|:--------|
| **Patient-Provider** | Disagreement over treatment |
| **Family-Provider** | Family wants different care |
| **Patient-Family** | Patient and family disagree |
| **Provider-Provider** | Disagreement between staff |
| **Provider-Administration** | Policy conflicts |

---

## 📊 Conflict Resolution Styles

| Style | When to Use | Description |
|:------|:------------|:------------|
| **Collaborating** | Important issues, time available | Win-win, work together |
| **Compromising** | Equal power, quick solution needed | Each gives something |
| **Accommodating** | Issue more important to other person | Give in, preserve relationship |
| **Competing** | Emergency, quick decision needed | Assert your position |
| **Avoiding** | Trivial issue, cooling off needed | Withdraw, delay |

---

## 🎯 Steps for Conflict Resolution

### DESC Method

:::success
**4-Step Approach:**
- **D**escribe the situation factually
- **E**xpress your feelings/concerns
- **S**pecify what you want
- **C**onsequences - explain outcomes
:::

### Example Using DESC

| Step | Example |
|:-----|:--------|
| **Describe** | "When the medicine wasn't given on time..." |
| **Express** | "I'm concerned because the patient may worsen..." |
| **Specify** | "I'd like us to follow the medication schedule..." |
| **Consequences** | "This will ensure patient safety and good outcomes" |

---

## 🗣️ Communication Techniques for Conflict

### De-escalation Strategies

| Technique | How to Apply |
|:----------|:-------------|
| **Stay Calm** | Control your voice and body language |
| **Active Listening** | Let them speak fully first |
| **Empathize** | Acknowledge their feelings |
| **Ask Questions** | Understand their perspective |
| **Find Common Ground** | Areas of agreement |
| **Focus on Issue** | Not on personal attack |
| **Offer Options** | Give choices, not ultimatums |

### Phrases to Use

| Instead of | Say |
|:-----------|:----|
| "You're wrong" | "I see it differently" |
| "You always..." | "I've noticed that sometimes..." |
| "Calm down" | "I can see you're upset. Let's work through this" |
| "That's not my job" | "Let me find someone who can help" |
| "But..." | "And..." or "Yes, and..." |

---

## 👨‍👩‍👧 Patient/Family Conflicts

### Common Causes

| Cause | Example |
|:------|:--------|
| **Miscommunication** | Unclear instructions |
| **Unmet Expectations** | Long wait times |
| **Fear/Anxiety** | Worried about diagnosis |
| **Lack of Information** | Not understanding treatment |
| **Cultural Differences** | Different beliefs |
| **Previous Bad Experience** | Trust issues |

### Resolution Steps

| Step | Action |
|:-----|:-------|
| 1 | Listen without interrupting |
| 2 | Acknowledge their feelings |
| 3 | Apologize if appropriate |
| 4 | Explain clearly |
| 5 | Offer solutions |
| 6 | Follow up |

---

## 👥 Staff Conflicts

### Prevention Strategies

| Strategy | Implementation |
|:---------|:---------------|
| **Clear Communication** | Regular team meetings |
| **Role Clarity** | Define responsibilities |
| **Fair Workload** | Equitable distribution |
| **Respect** | Value all team members |
| **Team Building** | Group activities |

### When to Escalate

:::warning
**Involve Supervisor When:**
- Direct discussion fails
- Issue affects patient safety
- Involves harassment
- Repeated conflict
- Legal/ethical issues
- Need for formal mediation
:::

---

## 📋 Dealing with Angry Patients

### HEAT Technique

| Letter | Action | Example |
|:-------|:-------|:--------|
| **H** | Hear them out | Let them express fully |
| **E** | Empathize | "I understand your frustration" |
| **A** | Apologize | "I'm sorry for the inconvenience" |
| **T** | Take action | "Here's what I'll do to help" |

### Safety Considerations

| If | Then |
|:---|:-----|
| Verbal abuse continues | Firmly state unacceptable |
| Physical threat | Maintain distance, call security |
| Weapons involved | Leave area, call help |
| Cannot de-escalate | Involve supervisor |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Conflict is natural - resolution is key
2. 5 styles: Collaborate, Compromise, Accommodate, Compete, Avoid
3. DESC = Describe, Express, Specify, Consequences
4. Stay calm and listen first
5. Focus on issue, not person
6. HEAT for angry patients
7. Know when to escalate
8. Safety is priority
:::
`,
    contentHi: `
# ⚖️ संघर्ष समाधान

---

## 📖 संघर्ष क्या है?

> **संघर्ष** राय, मूल्यों या हितों में अंतर के कारण व्यक्तियों या समूहों के बीच असहमति या टकराव है।

---

## 🔄 स्वास्थ्य देखभाल में संघर्ष के प्रकार

| प्रकार | उदाहरण |
|:------|:-------|
| **रोगी-प्रदाता** | उपचार पर असहमति |
| **परिवार-प्रदाता** | परिवार अलग देखभाल चाहता है |
| **रोगी-परिवार** | रोगी और परिवार असहमत |
| **प्रदाता-प्रदाता** | कर्मचारियों के बीच असहमति |
| **प्रदाता-प्रशासन** | नीति संघर्ष |

---

## 📊 संघर्ष समाधान शैलियां

| शैली | कब उपयोग करें | विवरण |
|:-----|:-------------|:------|
| **सहयोग** | महत्वपूर्ण मुद्दे, समय उपलब्ध | विन-विन, साथ काम |
| **समझौता** | समान शक्ति, त्वरित समाधान | प्रत्येक कुछ देता है |
| **समायोजन** | मुद्दा दूसरे के लिए अधिक महत्वपूर्ण | हार मान लें, संबंध बचाएं |
| **प्रतिस्पर्धा** | आपातकाल, त्वरित निर्णय | अपनी स्थिति पर जोर |
| **टालना** | तुच्छ मुद्दा, ठंडा होना जरूरी | पीछे हटें, देरी |

---

## 🎯 संघर्ष समाधान के चरण

### DESC विधि

:::success
**4-चरण दृष्टिकोण:**
- **D**escribe - स्थिति का तथ्यात्मक वर्णन
- **E**xpress - अपनी भावनाओं/चिंताओं को व्यक्त करें
- **S**pecify - आप क्या चाहते हैं निर्दिष्ट करें
- **C**onsequences - परिणाम समझाएं
:::

### DESC का उपयोग करते हुए उदाहरण

| चरण | उदाहरण |
|:----|:-------|
| **वर्णन** | "जब समय पर दवा नहीं दी गई..." |
| **व्यक्त** | "मुझे चिंता है क्योंकि रोगी बिगड़ सकता है..." |
| **निर्दिष्ट** | "मैं चाहूंगा कि हम दवा अनुसूची का पालन करें..." |
| **परिणाम** | "यह रोगी सुरक्षा और अच्छे परिणाम सुनिश्चित करेगा" |

---

## 🗣️ संघर्ष के लिए संचार तकनीकें

### डी-एस्केलेशन रणनीतियां

| तकनीक | कैसे लागू करें |
|:-------|:-------------|
| **शांत रहें** | अपनी आवाज और शारीरिक भाषा नियंत्रित करें |
| **सक्रिय सुनना** | पहले उन्हें पूरी तरह बोलने दें |
| **सहानुभूति** | उनकी भावनाओं को स्वीकार करें |
| **प्रश्न पूछें** | उनके दृष्टिकोण को समझें |
| **समान आधार खोजें** | सहमति के क्षेत्र |
| **मुद्दे पर ध्यान** | व्यक्तिगत हमले पर नहीं |
| **विकल्प प्रदान करें** | चुनाव दें, अल्टीमेटम नहीं |

### उपयोग करने के लिए वाक्यांश

| इसके बजाय | कहें |
|:---------|:-----|
| "आप गलत हैं" | "मैं इसे अलग तरह से देखता हूं" |
| "आप हमेशा..." | "मैंने देखा है कि कभी-कभी..." |
| "शांत हो जाओ" | "मैं देख सकता हूं आप परेशान हैं। चलिए इस पर काम करते हैं" |

---

## 👨‍👩‍👧 रोगी/परिवार संघर्ष

### सामान्य कारण

| कारण | उदाहरण |
|:-----|:-------|
| **गलत संचार** | अस्पष्ट निर्देश |
| **अपेक्षाएं पूरी न होना** | लंबा प्रतीक्षा समय |
| **डर/चिंता** | निदान के बारे में चिंतित |
| **जानकारी की कमी** | उपचार समझ में न आना |
| **सांस्कृतिक अंतर** | अलग विश्वास |

### समाधान चरण

| चरण | कार्य |
|:----|:-----|
| 1 | बिना बाधा के सुनें |
| 2 | उनकी भावनाओं को स्वीकार करें |
| 3 | यदि उचित हो तो माफी मांगें |
| 4 | स्पष्ट रूप से समझाएं |
| 5 | समाधान प्रस्तुत करें |
| 6 | फॉलो अप करें |

---

## 📋 गुस्से वाले रोगियों से निपटना

### HEAT तकनीक

| अक्षर | कार्य | उदाहरण |
|:------|:-----|:-------|
| **H** | सुनें | उन्हें पूरी तरह व्यक्त करने दें |
| **E** | सहानुभूति | "मैं आपकी निराशा समझता हूं" |
| **A** | माफी | "असुविधा के लिए खेद है" |
| **T** | कार्रवाई करें | "यह रहा मैं मदद के लिए क्या करूंगा" |

### सुरक्षा विचार

| यदि | तब |
|:----|:----|
| मौखिक दुर्व्यवहार जारी | दृढ़ता से अस्वीकार्य बताएं |
| शारीरिक खतरा | दूरी बनाए रखें, सुरक्षा बुलाएं |
| हथियार शामिल | क्षेत्र छोड़ें, मदद बुलाएं |
| डी-एस्केलेट नहीं कर सकते | पर्यवेक्षक को शामिल करें |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. संघर्ष स्वाभाविक है - समाधान महत्वपूर्ण
2. 5 शैलियां: सहयोग, समझौता, समायोजन, प्रतिस्पर्धा, टालना
3. DESC = वर्णन, व्यक्त, निर्दिष्ट, परिणाम
4. शांत रहें और पहले सुनें
5. मुद्दे पर ध्यान दें, व्यक्ति पर नहीं
6. गुस्से वाले रोगियों के लिए HEAT
7. कब एस्केलेट करना है जानें
8. सुरक्षा प्राथमिकता है
:::
`
  },
  {
    id: 10,
    titleEn: "Cross-Cultural Communication",
    titleHi: "अंतर-सांस्कृतिक संचार",
    contentEn: `
# 🌍 Cross-Cultural Communication

---

## 📖 What is Cross-Cultural Communication?

> **Cross-Cultural Communication** is the exchange of information between people from different cultural backgrounds, considering their unique beliefs, values, and practices.

---

## 🎯 Why Important in Healthcare?

| Reason | Impact |
|:-------|:-------|
| **Trust Building** | Patients trust culturally sensitive providers |
| **Better Compliance** | Respecting beliefs improves adherence |
| **Accurate History** | Cultural context helps understanding |
| **Avoid Offense** | Prevents unintentional disrespect |
| **Health Outcomes** | Culturally appropriate care is more effective |
| **Access to Care** | Reduces barriers to seeking help |

---

## 📊 Cultural Factors Affecting Health

### Health Beliefs

| Factor | Example |
|:-------|:--------|
| **Disease Causation** | Evil eye, hot-cold imbalance, karma |
| **Treatment Preference** | Traditional healers, home remedies first |
| **Pain Expression** | Stoic vs. expressive |
| **Decision Making** | Individual vs. family |
| **Privacy Concepts** | Who can examine, gender preferences |

### Common Practices

| Practice | Cultural Context |
|:---------|:----------------|
| **Diet Restrictions** | Vegetarian, halal, no beef |
| **Fasting** | Religious fasts affecting medication |
| **Modesty** | Covering body, same-gender provider |
| **Touch** | Male-female contact restrictions |
| **Eye Contact** | Avoiding as sign of respect |
| **Birth Practices** | Traditional rituals, postpartum customs |

---

## 🗣️ Communication Strategies

### LEARN Model

:::success
**Cultural Assessment Framework:**
- **L**isten with empathy
- **E**xplain your perspective
- **A**cknowledge differences
- **R**ecommend treatment
- **N**egotiate agreement
:::

### Practical Tips

| Do | Don't |
|:---|:------|
| Ask about preferences | Assume based on appearance |
| Use interpreter if needed | Use family for medical interpretation |
| Respect religious practices | Dismiss as superstition |
| Learn basic greetings | Use stereotypes |
| Be patient with language | Show impatience |
| Ask about diet restrictions | Force standard diet |

---

## 👥 Working with Interpreters

### When to Use

| Situation | Action |
|:----------|:-------|
| Limited English/Hindi | Use trained interpreter |
| Complex medical information | Professional interpreter |
| Consent discussions | Qualified interpreter |
| Emergency | Any available bilingual person |

### Guidelines

| Do | Don't |
|:---|:------|
| Brief interpreter beforehand | Use children as interpreters |
| Speak to patient, not interpreter | Speak too fast |
| Use short sentences | Use medical jargon |
| Allow time for interpretation | Interrupt |
| Check understanding | Assume message conveyed |

---

## 🏥 Cultural Considerations by Topic

### Maternal Health

| Aspect | Cultural Variation |
|:-------|:-------------------|
| **ANC** | Male presence during exam |
| **Delivery** | Position, attendants, rituals |
| **Postpartum** | Confinement period (40 days) |
| **Breastfeeding** | Colostrum practices |
| **Naming Ceremony** | Timing, rituals |

### Family Planning

| Aspect | Consideration |
|:-------|:--------------|
| **Decision Maker** | Husband, mother-in-law influence |
| **Fertility Value** | High value on children, male preference |
| **Method Acceptance** | Religious restrictions |
| **Discussion Setting** | Privacy needs |

### Death and Dying

| Aspect | Variation |
|:-------|:----------|
| **Disclosure** | Tell patient or family first |
| **Decision Making** | Family vs. individual |
| **Body Care** | Specific washing rituals |
| **Cremation/Burial** | Time requirements |
| **Grief Expression** | Acceptable behaviors |

---

## ⚠️ Avoiding Stereotypes

:::warning
**Remember:**
- Culture is individual - not everyone follows all practices
- Generations differ in adherence
- Urban vs. rural variations
- Education influences beliefs
- Ask, don't assume
- Person first, culture second
:::

---

## 📋 ETHNIC Model for Assessment

| Letter | Question |
|:-------|:---------|
| **E** | Explanation - What do you think caused your problem? |
| **T** | Treatment - What treatment have you tried? |
| **H** | Healers - Have you sought help from traditional healers? |
| **N** | Negotiate - What can we agree on for treatment? |
| **I** | Intervention - What can we do that respects your beliefs? |
| **C** | Collaboration - How can family/community help? |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Culture affects health beliefs and practices
2. LEARN = Listen, Explain, Acknowledge, Recommend, Negotiate
3. Use professional interpreters for medical discussions
4. Ask about preferences - don't assume
5. Respect but don't stereotype
6. Consider cultural factors in MCH, FP, death
7. ETHNIC model for cultural assessment
8. Person-centered care over cultural generalizations
:::
`,
    contentHi: `
# 🌍 अंतर-सांस्कृतिक संचार

---

## 📖 अंतर-सांस्कृतिक संचार क्या है?

> **अंतर-सांस्कृतिक संचार** विभिन्न सांस्कृतिक पृष्ठभूमि के लोगों के बीच जानकारी का आदान-प्रदान है, उनके अनूठे विश्वासों, मूल्यों और प्रथाओं को ध्यान में रखते हुए।

---

## 🎯 स्वास्थ्य देखभाल में क्यों महत्वपूर्ण?

| कारण | प्रभाव |
|:-----|:------|
| **विश्वास निर्माण** | मरीज सांस्कृतिक रूप से संवेदनशील प्रदाताओं पर भरोसा करते हैं |
| **बेहतर अनुपालन** | विश्वासों का सम्मान पालन में सुधार करता है |
| **सटीक इतिहास** | सांस्कृतिक संदर्भ समझने में मदद करता है |
| **अपमान से बचें** | अनजाने अपमान को रोकता है |
| **स्वास्थ्य परिणाम** | सांस्कृतिक रूप से उचित देखभाल अधिक प्रभावी |

---

## 📊 स्वास्थ्य को प्रभावित करने वाले सांस्कृतिक कारक

### स्वास्थ्य विश्वास

| कारक | उदाहरण |
|:-----|:-------|
| **रोग कारण** | नजर, गर्म-ठंडा असंतुलन, कर्म |
| **उपचार वरीयता** | पारंपरिक चिकित्सक, पहले घरेलू उपचार |
| **दर्द अभिव्यक्ति** | संयमित बनाम अभिव्यक्त |
| **निर्णय लेना** | व्यक्तिगत बनाम परिवार |
| **गोपनीयता अवधारणाएं** | कौन जांच कर सकता है, लिंग वरीयताएं |

### आम प्रथाएं

| प्रथा | सांस्कृतिक संदर्भ |
|:-----|:----------------|
| **आहार प्रतिबंध** | शाकाहारी, हलाल, बीफ नहीं |
| **उपवास** | दवा को प्रभावित करने वाले धार्मिक उपवास |
| **शालीनता** | शरीर ढकना, समान-लिंग प्रदाता |
| **स्पर्श** | पुरुष-महिला संपर्क प्रतिबंध |
| **आंखों का संपर्क** | सम्मान के संकेत के रूप में बचना |
| **जन्म प्रथाएं** | पारंपरिक अनुष्ठान, प्रसवोत्तर रीतियां |

---

## 🗣️ संचार रणनीतियां

### LEARN मॉडल

:::success
**सांस्कृतिक आकलन ढांचा:**
- **L**isten - सहानुभूति के साथ सुनें
- **E**xplain - अपना दृष्टिकोण समझाएं
- **A**cknowledge - अंतरों को स्वीकार करें
- **R**ecommend - उपचार की सिफारिश करें
- **N**egotiate - समझौता वार्ता करें
:::

### व्यावहारिक सुझाव

| करें | न करें |
|:----|:------|
| वरीयताओं के बारे में पूछें | दिखावट के आधार पर मान लें |
| जरूरत पड़ने पर दुभाषिया उपयोग करें | चिकित्सा व्याख्या के लिए परिवार का उपयोग |
| धार्मिक प्रथाओं का सम्मान | अंधविश्वास के रूप में खारिज |
| बुनियादी अभिवादन सीखें | रूढ़िवादिता का उपयोग |
| भाषा के साथ धैर्य रखें | अधीरता दिखाएं |
| आहार प्रतिबंधों के बारे में पूछें | मानक आहार मजबूर करें |

---

## 👥 दुभाषियों के साथ काम करना

### कब उपयोग करें

| स्थिति | कार्य |
|:-------|:-----|
| सीमित अंग्रेजी/हिंदी | प्रशिक्षित दुभाषिया उपयोग करें |
| जटिल चिकित्सा जानकारी | पेशेवर दुभाषिया |
| सहमति चर्चा | योग्य दुभाषिया |
| आपातकाल | कोई भी उपलब्ध द्विभाषी व्यक्ति |

### दिशानिर्देश

| करें | न करें |
|:----|:------|
| दुभाषिया को पहले से जानकारी दें | बच्चों को दुभाषिया के रूप में उपयोग |
| मरीज से बात करें, दुभाषिया से नहीं | बहुत तेज बोलें |
| छोटे वाक्यों का उपयोग करें | चिकित्सा शब्दावली उपयोग |
| व्याख्या के लिए समय दें | बाधित करें |
| समझ की जांच करें | मान लें संदेश पहुंचा |

---

## 🏥 विषय द्वारा सांस्कृतिक विचार

### मातृ स्वास्थ्य

| पहलू | सांस्कृतिक भिन्नता |
|:-----|:------------------|
| **ANC** | जांच के दौरान पुरुष उपस्थिति |
| **प्रसव** | स्थिति, उपस्थित, अनुष्ठान |
| **प्रसवोत्तर** | प्रसूति अवधि (40 दिन) |
| **स्तनपान** | कोलोस्ट्रम प्रथाएं |
| **नामकरण समारोह** | समय, अनुष्ठान |

### परिवार नियोजन

| पहलू | विचार |
|:-----|:------|
| **निर्णयकर्ता** | पति, सास का प्रभाव |
| **प्रजनन मूल्य** | बच्चों पर उच्च मूल्य, पुत्र वरीयता |
| **विधि स्वीकृति** | धार्मिक प्रतिबंध |
| **चर्चा सेटिंग** | गोपनीयता की जरूरत |

### मृत्यु और मरना

| पहलू | भिन्नता |
|:-----|:-------|
| **प्रकटीकरण** | पहले मरीज या परिवार को बताएं |
| **निर्णय लेना** | परिवार बनाम व्यक्तिगत |
| **शरीर की देखभाल** | विशिष्ट धुलाई अनुष्ठान |
| **दाह संस्कार/दफन** | समय आवश्यकताएं |
| **शोक अभिव्यक्ति** | स्वीकार्य व्यवहार |

---

## ⚠️ रूढ़िवादिता से बचना

:::warning
**याद रखें:**
- संस्कृति व्यक्तिगत है - सभी सभी प्रथाओं का पालन नहीं करते
- पीढ़ियां पालन में भिन्न होती हैं
- शहरी बनाम ग्रामीण भिन्नताएं
- शिक्षा विश्वासों को प्रभावित करती है
- पूछें, मान न लें
- पहले व्यक्ति, फिर संस्कृति
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. संस्कृति स्वास्थ्य विश्वासों और प्रथाओं को प्रभावित करती है
2. LEARN = सुनें, समझाएं, स्वीकार करें, सिफारिश करें, वार्ता करें
3. चिकित्सा चर्चाओं के लिए पेशेवर दुभाषियों का उपयोग
4. वरीयताओं के बारे में पूछें - मान न लें
5. सम्मान करें लेकिन रूढ़िवादी न बनें
6. MCH, FP, मृत्यु में सांस्कृतिक कारकों पर विचार करें
7. सांस्कृतिक आकलन के लिए ETHNIC मॉडल
8. सांस्कृतिक सामान्यीकरण पर व्यक्ति-केंद्रित देखभाल
:::
`
  },
  {
    id: 11,
    titleEn: "Digital Communication in Healthcare",
    titleHi: "स्वास्थ्य देखभाल में डिजिटल संचार",
    contentEn: `
# 📱 Digital Communication in Healthcare

---

## 📖 What is Digital Health Communication?

> **Digital Health Communication** refers to the use of electronic and digital technologies to communicate health information, deliver services, and interact with patients and communities.

---

## 🎯 Types of Digital Communication

| Type | Examples |
|:-----|:---------|
| **Mobile Health (mHealth)** | SMS reminders, health apps, WhatsApp |
| **Telemedicine** | Video consultations, remote diagnosis |
| **Social Media** | Facebook, WhatsApp health campaigns |
| **Web-Based** | Health portals, websites |
| **Digital Records** | EHR, RCH portal |
| **Wearables** | Health monitoring devices |

---

## 📲 Mobile Health (mHealth) Applications

### Government Health Apps

| App | Purpose |
|:----|:--------|
| **ASHA Soft** | Work tracking for ASHAs |
| **ANM Online** | Service delivery tracking |
| **RCH Portal** | MCH registration and tracking |
| **eVIN** | Vaccine stock management |
| **Nikshay** | TB notification and tracking |
| **CoWIN** | COVID vaccination |
| **Arogya Setu** | COVID tracking |

### SMS-Based Services

| Service | Use |
|:--------|:----|
| **Kilkari** | Weekly pregnancy/childcare messages |
| **Mobile Academy** | ASHA training |
| **mKisan** | Agricultural health messages |
| **Immunization Reminders** | Due date alerts |

---

## 📞 Telemedicine Communication

### When to Use

| Appropriate | Not Appropriate |
|:------------|:----------------|
| Follow-up consultations | Emergencies |
| Prescription refills | Physical examination needed |
| Counseling | Procedures required |
| Health education | Diagnostic uncertainty |
| Chronic disease monitoring | First visit (preferably) |

### Best Practices

| Practice | Reason |
|:---------|:-------|
| Test technology beforehand | Avoid interruptions |
| Ensure privacy | Confidentiality |
| Good lighting | Patient can see you |
| Speak clearly | Audio quality varies |
| Confirm understanding | Cannot see body language fully |
| Document encounter | Legal record |

---

## 💬 WhatsApp for Health Communication

### Appropriate Uses

| Use | Example |
|:----|:--------|
| **Reminders** | "Your immunization is due tomorrow" |
| **General Information** | Sharing health tips |
| **Follow-up** | Checking on patient after visit |
| **Coordination** | Team communication |
| **Appointment Scheduling** | Confirming visits |

### Guidelines

:::warning
**WhatsApp Do's and Don'ts:**

**Do:**
- Use for general information
- Get consent before adding to groups
- Keep messages professional
- Respond in timely manner
- Use for reminders and coordination

**Don't:**
- Share confidential patient information
- Diagnose via WhatsApp
- Share unverified health information
- Use personal number for official work
- Send messages at odd hours
:::

---

## 📊 Social Media for Health Campaigns

### Platforms for Health Communication

| Platform | Best For |
|:---------|:---------|
| **Facebook** | Community engagement, events |
| **WhatsApp Groups** | Targeted group messaging |
| **YouTube** | Health education videos |
| **Twitter/X** | Quick updates, campaigns |
| **Instagram** | Visual health messages, youth |

### Content Guidelines

| Principle | Application |
|:----------|:------------|
| **Accurate** | Verify information before sharing |
| **Simple** | Easy to understand language |
| **Engaging** | Use images, videos |
| **Actionable** | Clear call to action |
| **Culturally Appropriate** | Sensitive to local context |
| **Timely** | Relevant to current issues |

---

## 🔒 Digital Communication Security

### Patient Privacy

| Measure | Implementation |
|:--------|:---------------|
| **Consent** | Get permission before digital contact |
| **Encryption** | Use secure platforms |
| **Password Protection** | Strong passwords, 2FA |
| **Limited Sharing** | Need-to-know basis |
| **Secure Devices** | Lock phones, computers |
| **Data Backup** | Regular, secure backups |

### Common Risks

| Risk | Prevention |
|:-----|:-----------|
| **Unauthorized Access** | Strong passwords, logout |
| **Data Breach** | Encryption, secure storage |
| **Phishing** | Verify sender before clicking |
| **Misinformation** | Verify sources |
| **Privacy Violation** | Don't share patient details |

---

## 📱 Communicating with Low-Literacy Populations

### Strategies

| Strategy | Example |
|:---------|:--------|
| **Voice Messages** | Audio instead of text |
| **Pictures** | Illustrate messages |
| **Videos** | Demonstrate procedures |
| **Local Language** | Messages in mother tongue |
| **Symbols** | Universal health symbols |
| **Interactive Voice Response** | Phone menu options |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. mHealth includes apps, SMS, telemedicine
2. Government apps: ASHA Soft, ANM Online, eVIN, Nikshay
3. Telemedicine for follow-ups, not emergencies
4. WhatsApp - general info only, not confidential data
5. Social media for health campaigns and education
6. Always maintain patient privacy and security
7. Use voice/visual for low-literacy populations
8. Get consent before digital communication
:::
`,
    contentHi: `
# 📱 स्वास्थ्य देखभाल में डिजिटल संचार

---

## 📖 डिजिटल स्वास्थ्य संचार क्या है?

> **डिजिटल स्वास्थ्य संचार** स्वास्थ्य जानकारी संप्रेषित करने, सेवाएं प्रदान करने और रोगियों और समुदायों के साथ बातचीत करने के लिए इलेक्ट्रॉनिक और डिजिटल प्रौद्योगिकियों के उपयोग को संदर्भित करता है।

---

## 🎯 डिजिटल संचार के प्रकार

| प्रकार | उदाहरण |
|:------|:-------|
| **मोबाइल स्वास्थ्य (mHealth)** | SMS रिमाइंडर, स्वास्थ्य ऐप्स, WhatsApp |
| **टेलीमेडिसिन** | वीडियो परामर्श, दूरस्थ निदान |
| **सोशल मीडिया** | Facebook, WhatsApp स्वास्थ्य अभियान |
| **वेब-आधारित** | स्वास्थ्य पोर्टल, वेबसाइट |
| **डिजिटल रिकॉर्ड** | EHR, RCH पोर्टल |
| **वेयरेबल्स** | स्वास्थ्य निगरानी उपकरण |

---

## 📲 मोबाइल स्वास्थ्य (mHealth) एप्लिकेशन

### सरकारी स्वास्थ्य ऐप्स

| ऐप | उद्देश्य |
|:---|:--------|
| **ASHA Soft** | ASHAs के लिए कार्य ट्रैकिंग |
| **ANM Online** | सेवा वितरण ट्रैकिंग |
| **RCH पोर्टल** | MCH पंजीकरण और ट्रैकिंग |
| **eVIN** | वैक्सीन स्टॉक प्रबंधन |
| **Nikshay** | TB अधिसूचना और ट्रैकिंग |
| **CoWIN** | COVID टीकाकरण |
| **आरोग्य सेतु** | COVID ट्रैकिंग |

### SMS-आधारित सेवाएं

| सेवा | उपयोग |
|:-----|:-----|
| **किलकारी** | साप्ताहिक गर्भावस्था/शिशु देखभाल संदेश |
| **मोबाइल अकादमी** | ASHA प्रशिक्षण |
| **टीकाकरण रिमाइंडर** | नियत तारीख अलर्ट |

---

## 📞 टेलीमेडिसिन संचार

### कब उपयोग करें

| उपयुक्त | उपयुक्त नहीं |
|:-------|:-----------|
| फॉलो-अप परामर्श | आपातकाल |
| प्रिस्क्रिप्शन रिफिल | शारीरिक जांच जरूरी |
| परामर्श | प्रक्रियाएं आवश्यक |
| स्वास्थ्य शिक्षा | नैदानिक अनिश्चितता |
| पुरानी बीमारी निगरानी | पहली विजिट (अधिमानतः) |

### सर्वोत्तम अभ्यास

| अभ्यास | कारण |
|:-------|:-----|
| पहले से तकनीक का परीक्षण | बाधाओं से बचें |
| गोपनीयता सुनिश्चित करें | गोपनीयता |
| अच्छी रोशनी | मरीज आपको देख सके |
| स्पष्ट बोलें | ऑडियो गुणवत्ता भिन्न होती है |
| समझ की पुष्टि करें | शारीरिक भाषा पूरी तरह नहीं देख सकते |
| मुलाकात का दस्तावेज़ | कानूनी रिकॉर्ड |

---

## 💬 स्वास्थ्य संचार के लिए WhatsApp

### उचित उपयोग

| उपयोग | उदाहरण |
|:------|:-------|
| **रिमाइंडर** | "आपका टीकाकरण कल है" |
| **सामान्य जानकारी** | स्वास्थ्य टिप्स साझा करना |
| **फॉलो-अप** | विजिट के बाद मरीज की जांच |
| **समन्वय** | टीम संचार |
| **अपॉइंटमेंट शेड्यूलिंग** | विजिट की पुष्टि |

### दिशानिर्देश

:::warning
**WhatsApp क्या करें और क्या न करें:**

**करें:**
- सामान्य जानकारी के लिए उपयोग
- ग्रुप में जोड़ने से पहले सहमति लें
- संदेश पेशेवर रखें
- समय पर जवाब दें
- रिमाइंडर और समन्वय के लिए उपयोग

**न करें:**
- गोपनीय रोगी जानकारी साझा करें
- WhatsApp के माध्यम से निदान करें
- असत्यापित स्वास्थ्य जानकारी साझा करें
- आधिकारिक काम के लिए व्यक्तिगत नंबर उपयोग
- अजीब समय पर संदेश भेजें
:::

---

## 📊 स्वास्थ्य अभियानों के लिए सोशल मीडिया

### स्वास्थ्य संचार के लिए प्लेटफॉर्म

| प्लेटफॉर्म | के लिए सर्वश्रेष्ठ |
|:---------|:--------------|
| **Facebook** | सामुदायिक जुड़ाव, इवेंट |
| **WhatsApp ग्रुप** | लक्षित समूह संदेश |
| **YouTube** | स्वास्थ्य शिक्षा वीडियो |
| **Twitter/X** | त्वरित अपडेट, अभियान |
| **Instagram** | दृश्य स्वास्थ्य संदेश, युवा |

---

## 🔒 डिजिटल संचार सुरक्षा

### रोगी गोपनीयता

| उपाय | कार्यान्वयन |
|:-----|:----------|
| **सहमति** | डिजिटल संपर्क से पहले अनुमति लें |
| **एन्क्रिप्शन** | सुरक्षित प्लेटफॉर्म उपयोग करें |
| **पासवर्ड सुरक्षा** | मजबूत पासवर्ड, 2FA |
| **सीमित साझाकरण** | जानने की जरूरत के आधार पर |
| **सुरक्षित उपकरण** | फोन, कंप्यूटर लॉक करें |
| **डेटा बैकअप** | नियमित, सुरक्षित बैकअप |

---

## 📱 कम-साक्षरता आबादी के साथ संवाद

### रणनीतियां

| रणनीति | उदाहरण |
|:-------|:-------|
| **वॉइस मैसेज** | टेक्स्ट के बजाय ऑडियो |
| **चित्र** | संदेशों को चित्रित करें |
| **वीडियो** | प्रक्रियाएं प्रदर्शित करें |
| **स्थानीय भाषा** | मातृभाषा में संदेश |
| **प्रतीक** | सार्वभौमिक स्वास्थ्य प्रतीक |
| **IVR** | फोन मेनू विकल्प |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. mHealth में ऐप्स, SMS, टेलीमेडिसिन शामिल
2. सरकारी ऐप्स: ASHA Soft, ANM Online, eVIN, Nikshay
3. टेलीमेडिसिन फॉलो-अप के लिए, आपातकाल के लिए नहीं
4. WhatsApp - केवल सामान्य जानकारी, गोपनीय डेटा नहीं
5. स्वास्थ्य अभियानों और शिक्षा के लिए सोशल मीडिया
6. हमेशा रोगी गोपनीयता और सुरक्षा बनाए रखें
7. कम-साक्षरता आबादी के लिए वॉइस/विजुअल उपयोग करें
8. डिजिटल संचार से पहले सहमति लें
:::
`
  },
  {
    id: 12,
    titleEn: "Communication in Emergencies",
    titleHi: "आपातकाल में संचार",
    contentEn: `
# 🚨 Communication in Emergencies

---

## 📖 What is Emergency Communication?

> **Emergency Communication** refers to rapid, clear, and effective exchange of critical information during medical emergencies, disasters, or outbreaks.

---

## 🎯 Characteristics of Effective Emergency Communication

| Characteristic | Description |
|:---------------|:------------|
| **Rapid** | Immediate, no delays |
| **Clear** | Simple, unambiguous |
| **Accurate** | Correct information |
| **Consistent** | Same message from all sources |
| **Authoritative** | From trusted sources |
| **Actionable** | Clear instructions |
| **Repeated** | Multiple times, multiple channels |

---

## 📞 Communication Chain in Emergencies

### Upward Communication (Reporting)

| Level | Report To |
|:------|:----------|
| **ASHA/AWW** | ANM, ASHA Facilitator |
| **ANM** | MO PHC, Block PHC |
| **MO PHC** | CMO, DMO |
| **District** | State Surveillance Unit |
| **State** | National CDC/NCDC |

### Downward Communication (Instructions)

| Level | Communicate To |
|:------|:---------------|
| **National** | States, Districts |
| **District** | PHCs, CHCs |
| **PHC** | Sub-centers, ASHAs |
| **ANM** | Community, ASHAs |

---

## 🔔 Outbreak Communication

### CERC (Crisis and Emergency Risk Communication)

:::success
**Key Principles:**
1. **Be First** - Communicate quickly
2. **Be Right** - Give accurate information
3. **Be Credible** - Be honest, admit unknowns
4. **Show Empathy** - Acknowledge fears
5. **Promote Action** - Give clear guidance
6. **Show Respect** - Acknowledge concerns
:::

### Outbreak Notification

| Information | Details |
|:------------|:--------|
| **What** | Disease/condition name |
| **When** | Date of onset, reporting date |
| **Where** | Location (village, block, district) |
| **Who** | Number affected, age groups |
| **Severity** | Deaths, hospitalizations |
| **Action Taken** | Initial response measures |
| **Help Needed** | Resources required |

---

## 🏥 Medical Emergency Communication

### ISBAR for Emergency Handoff

| Element | Content |
|:--------|:--------|
| **I - Identify** | "I am ANM from SC, calling about..." |
| **S - Situation** | "Patient X is having severe bleeding..." |
| **B - Background** | "She is 8 months pregnant, first pregnancy..." |
| **A - Assessment** | "I think this is antepartum hemorrhage..." |
| **R - Recommendation** | "We need ambulance immediately for referral" |

### Key Information to Communicate

| Category | Details |
|:---------|:--------|
| **Patient** | Name, age, sex, address |
| **Condition** | Current status, vital signs |
| **History** | Relevant medical history |
| **Treatment** | What has been given |
| **Needs** | What is required |
| **ETA** | Expected time of arrival |

---

## 🚑 Referral Communication

### Before Referral

| Action | Purpose |
|:-------|:--------|
| **Call ahead** | Prepare receiving facility |
| **Send records** | MCH card, referral slip |
| **Stabilize patient** | Initial treatment |
| **Inform family** | Explain situation |
| **Arrange transport** | Ambulance, escort |

### Referral Slip Content

| Information | Example |
|:------------|:--------|
| **Patient details** | Name, age, RCH ID |
| **Referring facility** | SC/PHC name |
| **Receiving facility** | CHC/DH name |
| **Reason** | Complication description |
| **Treatment given** | Medications, IV, etc. |
| **Vitals** | BP, pulse, temp |
| **Contact** | Referring person's number |

---

## 📢 Community Communication in Emergencies

### Disaster Communication

| Phase | Communication Focus |
|:------|:-------------------|
| **Pre-disaster** | Preparedness, warning signs, evacuation |
| **During** | Safety instructions, shelter locations |
| **Post-disaster** | Health services, water safety, disease prevention |

### Methods for Community Alerts

| Method | Use |
|:-------|:----|
| **Loudspeakers** | Immediate alerts |
| **House-to-house** | Personalized information |
| **Community meetings** | Detailed instructions |
| **WhatsApp groups** | Rapid messaging |
| **Phone tree** | Chain communication |
| **Local leaders** | Credible messengers |

---

## 📋 Documentation During Emergencies

### Line List for Outbreaks

| Field | Data |
|:------|:-----|
| Serial number | 1, 2, 3... |
| Name | Patient name |
| Age/Sex | 5/M, 25/F |
| Address | Village, ward |
| Date of onset | When symptoms started |
| Symptoms | Signs and symptoms |
| Lab result | If available |
| Outcome | Alive, dead, referred |

### Situation Report (SITREP)

| Section | Content |
|:--------|:--------|
| **Summary** | Brief overview |
| **Cases** | Total, new, deaths |
| **Actions** | Response activities |
| **Resources** | Available, needed |
| **Challenges** | Problems faced |
| **Plan** | Next steps |

---

## ⚠️ Avoiding Panic and Misinformation

### Strategies

| Strategy | Implementation |
|:---------|:---------------|
| **Proactive Communication** | Give information before rumors |
| **Regular Updates** | Even if no new information |
| **Acknowledge Uncertainty** | "We don't know yet, but..." |
| **Correct Misinformation** | Address rumors directly |
| **Use Trusted Voices** | Local leaders, health workers |
| **Multiple Channels** | Same message everywhere |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Emergency communication must be rapid, clear, accurate
2. Report upward: ASHA → ANM → MO → CMO → State
3. CERC: Be First, Be Right, Be Credible, Show Empathy
4. ISBAR for emergency handoff: Identify, Situation, Background, Assessment, Recommendation
5. Always call ahead before referral
6. Document with line lists and SITREPs
7. Combat misinformation with proactive communication
8. Use multiple channels for community alerts
:::
`,
    contentHi: `
# 🚨 आपातकाल में संचार

---

## 📖 आपातकालीन संचार क्या है?

> **आपातकालीन संचार** चिकित्सा आपात स्थितियों, आपदाओं या प्रकोपों के दौरान महत्वपूर्ण जानकारी के तीव्र, स्पष्ट और प्रभावी आदान-प्रदान को संदर्भित करता है।

---

## 🎯 प्रभावी आपातकालीन संचार की विशेषताएं

| विशेषता | विवरण |
|:--------|:------|
| **तीव्र** | तत्काल, कोई देरी नहीं |
| **स्पष्ट** | सरल, अस्पष्ट नहीं |
| **सटीक** | सही जानकारी |
| **सुसंगत** | सभी स्रोतों से समान संदेश |
| **आधिकारिक** | विश्वसनीय स्रोतों से |
| **कार्रवाई योग्य** | स्पष्ट निर्देश |
| **दोहराया** | कई बार, कई चैनल |

---

## 📞 आपात स्थितियों में संचार श्रृंखला

### ऊपर की ओर संचार (रिपोर्टिंग)

| स्तर | को रिपोर्ट करें |
|:-----|:-------------|
| **ASHA/AWW** | ANM, ASHA फैसिलिटेटर |
| **ANM** | MO PHC, ब्लॉक PHC |
| **MO PHC** | CMO, DMO |
| **जिला** | राज्य निगरानी इकाई |
| **राज्य** | राष्ट्रीय CDC/NCDC |

### नीचे की ओर संचार (निर्देश)

| स्तर | को संप्रेषित करें |
|:-----|:--------------|
| **राष्ट्रीय** | राज्य, जिले |
| **जिला** | PHCs, CHCs |
| **PHC** | उप-केंद्र, ASHAs |
| **ANM** | समुदाय, ASHAs |

---

## 🔔 प्रकोप संचार

### CERC (संकट और आपातकालीन जोखिम संचार)

:::success
**मुख्य सिद्धांत:**
1. **पहले बनें** - जल्दी संवाद करें
2. **सही बनें** - सटीक जानकारी दें
3. **विश्वसनीय बनें** - ईमानदार रहें, अज्ञात स्वीकार करें
4. **सहानुभूति दिखाएं** - डर को स्वीकार करें
5. **कार्रवाई को बढ़ावा दें** - स्पष्ट मार्गदर्शन दें
6. **सम्मान दिखाएं** - चिंताओं को स्वीकार करें
:::

### प्रकोप अधिसूचना

| जानकारी | विवरण |
|:--------|:------|
| **क्या** | रोग/स्थिति का नाम |
| **कब** | शुरुआत की तारीख, रिपोर्टिंग तारीख |
| **कहां** | स्थान (गांव, ब्लॉक, जिला) |
| **कौन** | प्रभावित संख्या, आयु समूह |
| **गंभीरता** | मौतें, अस्पताल में भर्ती |
| **कार्रवाई** | प्रारंभिक प्रतिक्रिया उपाय |
| **मदद चाहिए** | आवश्यक संसाधन |

---

## 🏥 चिकित्सा आपातकालीन संचार

### आपातकालीन हैंडऑफ के लिए ISBAR

| तत्व | सामग्री |
|:----|:-------|
| **I - पहचान** | "मैं SC से ANM हूं, कॉल कर रही हूं..." |
| **S - स्थिति** | "मरीज X को गंभीर रक्तस्राव हो रहा है..." |
| **B - पृष्ठभूमि** | "वह 8 महीने की गर्भवती है, पहली गर्भावस्था..." |
| **A - आकलन** | "मुझे लगता है यह एंटीपार्टम हेमरेज है..." |
| **R - सिफारिश** | "हमें रेफरल के लिए तुरंत एम्बुलेंस चाहिए" |

### संप्रेषित करने के लिए मुख्य जानकारी

| श्रेणी | विवरण |
|:------|:------|
| **मरीज** | नाम, आयु, लिंग, पता |
| **स्थिति** | वर्तमान स्थिति, जीवन संकेत |
| **इतिहास** | प्रासंगिक चिकित्सा इतिहास |
| **उपचार** | क्या दिया गया है |
| **जरूरतें** | क्या आवश्यक है |
| **ETA** | पहुंचने का अपेक्षित समय |

---

## 🚑 रेफरल संचार

### रेफरल से पहले

| कार्य | उद्देश्य |
|:-----|:--------|
| **पहले कॉल करें** | प्राप्त करने वाली सुविधा तैयार करें |
| **रिकॉर्ड भेजें** | MCH कार्ड, रेफरल स्लिप |
| **मरीज को स्थिर करें** | प्रारंभिक उपचार |
| **परिवार को सूचित करें** | स्थिति समझाएं |
| **परिवहन व्यवस्थित करें** | एम्बुलेंस, एस्कॉर्ट |

### रेफरल स्लिप सामग्री

| जानकारी | उदाहरण |
|:--------|:-------|
| **मरीज विवरण** | नाम, आयु, RCH ID |
| **रेफर करने वाली सुविधा** | SC/PHC नाम |
| **प्राप्त करने वाली सुविधा** | CHC/DH नाम |
| **कारण** | जटिलता विवरण |
| **दिया गया उपचार** | दवाएं, IV, आदि |
| **जीवन संकेत** | BP, नाड़ी, तापमान |
| **संपर्क** | रेफर करने वाले का नंबर |

---

## 📢 आपात स्थितियों में सामुदायिक संचार

### आपदा संचार

| चरण | संचार फोकस |
|:----|:----------|
| **आपदा-पूर्व** | तैयारी, चेतावनी संकेत, निकासी |
| **दौरान** | सुरक्षा निर्देश, आश्रय स्थान |
| **आपदा-पश्चात** | स्वास्थ्य सेवाएं, पानी सुरक्षा, रोग रोकथाम |

### सामुदायिक अलर्ट के तरीके

| तरीका | उपयोग |
|:------|:-----|
| **लाउडस्पीकर** | तत्काल अलर्ट |
| **घर-घर** | व्यक्तिगत जानकारी |
| **सामुदायिक बैठकें** | विस्तृत निर्देश |
| **WhatsApp ग्रुप** | तीव्र संदेश |
| **फोन ट्री** | श्रृंखला संचार |
| **स्थानीय नेता** | विश्वसनीय संदेशवाहक |

---

## 📋 आपात स्थितियों के दौरान दस्तावेज़ीकरण

### प्रकोपों के लिए लाइन लिस्ट

| फील्ड | डेटा |
|:------|:-----|
| क्रम संख्या | 1, 2, 3... |
| नाम | मरीज का नाम |
| आयु/लिंग | 5/पु, 25/म |
| पता | गांव, वार्ड |
| शुरुआत की तारीख | लक्षण कब शुरू |
| लक्षण | संकेत और लक्षण |
| लैब परिणाम | यदि उपलब्ध |
| परिणाम | जीवित, मृत, रेफर |

### स्थिति रिपोर्ट (SITREP)

| अनुभाग | सामग्री |
|:-------|:-------|
| **सारांश** | संक्षिप्त अवलोकन |
| **मामले** | कुल, नए, मौतें |
| **कार्रवाई** | प्रतिक्रिया गतिविधियां |
| **संसाधन** | उपलब्ध, जरूरी |
| **चुनौतियां** | आई समस्याएं |
| **योजना** | अगले कदम |

---

## ⚠️ घबराहट और गलत सूचना से बचना

### रणनीतियां

| रणनीति | कार्यान्वयन |
|:-------|:----------|
| **सक्रिय संचार** | अफवाहों से पहले जानकारी दें |
| **नियमित अपडेट** | भले ही कोई नई जानकारी न हो |
| **अनिश्चितता स्वीकार करें** | "हम अभी तक नहीं जानते, लेकिन..." |
| **गलत सूचना सुधारें** | अफवाहों को सीधे संबोधित करें |
| **विश्वसनीय आवाजें उपयोग करें** | स्थानीय नेता, स्वास्थ्य कार्यकर्ता |
| **कई चैनल** | हर जगह समान संदेश |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. आपातकालीन संचार तीव्र, स्पष्ट, सटीक होना चाहिए
2. ऊपर रिपोर्ट करें: ASHA → ANM → MO → CMO → राज्य
3. CERC: पहले बनें, सही बनें, विश्वसनीय बनें, सहानुभूति दिखाएं
4. आपातकालीन हैंडऑफ के लिए ISBAR: पहचान, स्थिति, पृष्ठभूमि, आकलन, सिफारिश
5. रेफरल से पहले हमेशा पहले कॉल करें
6. लाइन लिस्ट और SITREP के साथ दस्तावेज़ बनाएं
7. सक्रिय संचार से गलत सूचना का मुकाबला करें
8. सामुदायिक अलर्ट के लिए कई चैनल उपयोग करें
:::
`
  }
];
