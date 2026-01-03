export interface Lesson {
  id: number;
  titleEn: string;
  titleHi: string;
  contentEn: string;
  contentHi: string;
}

export const mentalHealthLessons: Lesson[] = [
  {
    id: 1,
    titleEn: "Introduction to Mental Health",
    titleHi: "मानसिक स्वास्थ्य का परिचय",
    contentEn: `
# 🧠 Introduction to Mental Health

---

## 📖 What is Mental Health?

> **Mental Health** is a state of well-being in which an individual realizes their abilities, can cope with normal stresses, work productively, and contribute to community.

---

## 🎯 Components of Mental Health

| Component | Description |
|:----------|:------------|
| **Emotional** | Managing feelings |
| **Psychological** | Thoughts, coping |
| **Social** | Relationships |

---

## ⚠️ Warning Signs

:::warning
**Early Signs of Mental Illness:**
- Prolonged sadness
- Excessive worry/fear
- Social withdrawal
- Sleep disturbances
- Mood swings
- Confused thinking
- Substance abuse
- Suicidal thoughts
:::

---

## 📊 Common Mental Disorders

| Disorder | Key Features |
|:---------|:-------------|
| **Depression** | Persistent sadness, loss of interest |
| **Anxiety** | Excessive worry, fear |
| **Schizophrenia** | Delusions, hallucinations |
| **Bipolar** | Mood swings (mania/depression) |
| **Substance use** | Addiction to alcohol/drugs |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Mental health = Emotional + Psychological + Social well-being
2. Warning signs: sadness, withdrawal, sleep issues
3. Common disorders: Depression, Anxiety, Schizophrenia
4. Mental illness is treatable
5. Early intervention improves outcomes
:::
`,
    contentHi: `
# 🧠 मानसिक स्वास्थ्य का परिचय

---

## 📖 मानसिक स्वास्थ्य क्या है?

> **मानसिक स्वास्थ्य** कल्याण की एक स्थिति है जिसमें व्यक्ति अपनी क्षमताओं को पहचानता है, सामान्य तनावों से निपट सकता है, उत्पादक रूप से काम कर सकता है।

---

## 🎯 मानसिक स्वास्थ्य के घटक

| घटक | विवरण |
|:----|:------|
| **भावनात्मक** | भावनाओं का प्रबंधन |
| **मनोवैज्ञानिक** | विचार, मुकाबला |
| **सामाजिक** | रिश्ते |

---

## ⚠️ चेतावनी संकेत

:::warning
**मानसिक बीमारी के प्रारंभिक संकेत:**
- लंबे समय तक उदासी
- अत्यधिक चिंता/डर
- सामाजिक अलगाव
- नींद में गड़बड़ी
- मूड स्विंग
- भ्रमित सोच
- मादक द्रव्य सेवन
- आत्मघाती विचार
:::

---

## 📊 सामान्य मानसिक विकार

| विकार | मुख्य विशेषताएं |
|:------|:--------------|
| **अवसाद** | लगातार उदासी, रुचि की हानि |
| **चिंता** | अत्यधिक चिंता, डर |
| **सिज़ोफ्रेनिया** | भ्रम, मतिभ्रम |
| **द्विध्रुवी** | मूड स्विंग |
| **मादक द्रव्य** | शराब/नशे की लत |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मानसिक स्वास्थ्य = भावनात्मक + मनोवैज्ञानिक + सामाजिक
2. चेतावनी संकेत: उदासी, अलगाव, नींद की समस्या
3. मानसिक बीमारी उपचार योग्य है
4. प्रारंभिक हस्तक्षेप परिणाम सुधारता है
:::
`
  },
  {
    id: 2,
    titleEn: "Depression & Anxiety",
    titleHi: "अवसाद और चिंता",
    contentEn: `
# 😔 Depression & Anxiety

---

## 📖 Depression

> **Depression** is a mood disorder causing persistent feelings of sadness and loss of interest.

### Symptoms

:::danger
**Symptoms of Depression:**
- Persistent sad mood
- Loss of interest in activities
- Changes in appetite/weight
- Sleep disturbances
- Fatigue
- Feelings of worthlessness
- Difficulty concentrating
- Thoughts of death/suicide
:::

### Duration
- Symptoms present most of the day, nearly every day
- For at least **2 weeks**

---

## 😰 Anxiety Disorders

> **Anxiety** is excessive, persistent worry that interferes with daily activities.

### Types

| Type | Features |
|:-----|:---------|
| **Generalized Anxiety** | Chronic worry about many things |
| **Panic Disorder** | Sudden panic attacks |
| **Phobias** | Fear of specific objects/situations |
| **Social Anxiety** | Fear of social situations |

### Symptoms
- Restlessness
- Rapid heartbeat
- Sweating
- Trembling
- Difficulty sleeping

---

## 💊 Treatment

| Approach | Methods |
|:---------|:--------|
| **Counseling** | Talk therapy, CBT |
| **Medication** | Antidepressants, anxiolytics |
| **Lifestyle** | Exercise, sleep, social support |
| **Crisis** | Suicide prevention, hospitalization |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Depression = Persistent sadness >2 weeks
2. Anxiety = Excessive worry
3. Both are treatable conditions
4. Counseling + medication are effective
5. Always assess for suicide risk
6. Refer to specialist if severe
:::
`,
    contentHi: `
# 😔 अवसाद और चिंता

---

## 📖 अवसाद

> **अवसाद** एक मूड विकार है जो लगातार उदासी और रुचि की हानि का कारण बनता है।

### लक्षण

:::danger
**अवसाद के लक्षण:**
- लगातार उदास मूड
- गतिविधियों में रुचि की हानि
- भूख/वजन में बदलाव
- नींद में गड़बड़ी
- थकान
- बेकार की भावना
- ध्यान केंद्रित करने में कठिनाई
- मृत्यु/आत्महत्या के विचार
:::

### अवधि
- कम से कम **2 सप्ताह** के लिए लक्षण

---

## 😰 चिंता विकार

> **चिंता** अत्यधिक, लगातार चिंता है जो दैनिक गतिविधियों में हस्तक्षेप करती है।

### प्रकार

| प्रकार | विशेषताएं |
|:------|:---------|
| **सामान्यीकृत चिंता** | कई चीजों के बारे में पुरानी चिंता |
| **पैनिक विकार** | अचानक पैनिक अटैक |
| **फोबिया** | विशिष्ट वस्तुओं/स्थितियों का डर |
| **सामाजिक चिंता** | सामाजिक स्थितियों का डर |

---

## 💊 उपचार

| दृष्टिकोण | विधियां |
|:---------|:-------|
| **परामर्श** | टॉक थेरेपी, CBT |
| **दवा** | एंटीडिप्रेसेंट |
| **जीवनशैली** | व्यायाम, नींद, सामाजिक समर्थन |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. अवसाद = लगातार उदासी >2 सप्ताह
2. चिंता = अत्यधिक चिंता
3. दोनों उपचार योग्य स्थितियां हैं
4. परामर्श + दवा प्रभावी हैं
5. हमेशा आत्महत्या जोखिम का आकलन करें
:::
`
  },
  {
    id: 3,
    titleEn: "Substance Abuse",
    titleHi: "मादक द्रव्य सेवन",
    contentEn: `
# 🚬 Substance Abuse

---

## 📖 What is Substance Abuse?

> **Substance Abuse** is the harmful use of alcohol, tobacco, or drugs that leads to physical, psychological, or social problems.

---

## 🍺 Common Substances

| Substance | Effects |
|:----------|:--------|
| **Alcohol** | Liver damage, dependence |
| **Tobacco** | Lung cancer, heart disease |
| **Cannabis** | Memory issues, dependence |
| **Opioids** | Addiction, overdose |
| **Sedatives** | Dependence, overdose |

---

## ⚠️ Signs of Addiction

:::warning
**Warning Signs:**
- Craving for the substance
- Unable to stop despite harm
- Tolerance (need more for same effect)
- Withdrawal symptoms
- Neglecting responsibilities
- Continued use despite problems
:::

---

## 📊 Effects of Alcohol

### Health Effects

| System | Effects |
|:-------|:--------|
| **Liver** | Fatty liver, cirrhosis |
| **Brain** | Memory loss, neuropathy |
| **Heart** | Cardiomyopathy |
| **Social** | Family problems, violence |

### Safe Limits
- Men: ≤2 drinks/day
- Women: ≤1 drink/day
- **Best:** No alcohol

---

## 🚭 Tobacco Effects

### Health Consequences
- Lung cancer
- COPD
- Heart disease
- Stroke
- Oral cancer

### Secondhand Smoke
- Harmful to non-smokers
- Especially children and pregnant women

---

## 💊 Treatment

| Approach | Methods |
|:---------|:--------|
| **Counseling** | Motivation, behavioral therapy |
| **Medication** | Nicotine replacement, naltrexone |
| **Support groups** | AA, NA |
| **De-addiction centers** | Residential treatment |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Substance abuse = harmful use of alcohol/drugs
2. Signs: craving, tolerance, withdrawal
3. Alcohol affects liver, brain, heart
4. Tobacco causes lung cancer, COPD
5. Treatment: counseling + medication
6. Support groups help recovery
:::
`,
    contentHi: `
# 🚬 मादक द्रव्य सेवन

---

## 📖 मादक द्रव्य सेवन क्या है?

> **मादक द्रव्य सेवन** शराब, तंबाकू या नशीली दवाओं का हानिकारक उपयोग है जो शारीरिक, मनोवैज्ञानिक या सामाजिक समस्याओं का कारण बनता है।

---

## 🍺 सामान्य पदार्थ

| पदार्थ | प्रभाव |
|:-------|:------|
| **शराब** | लिवर क्षति, निर्भरता |
| **तंबाकू** | फेफड़ों का कैंसर, हृदय रोग |
| **भांग** | स्मृति समस्याएं |
| **ओपिओइड** | लत, ओवरडोज |

---

## ⚠️ लत के संकेत

:::warning
**चेतावनी संकेत:**
- पदार्थ की लालसा
- नुकसान के बावजूद रोकने में असमर्थ
- सहनशीलता (समान प्रभाव के लिए अधिक)
- वापसी के लक्षण
- जिम्मेदारियों की उपेक्षा
:::

---

## 📊 शराब के प्रभाव

### स्वास्थ्य प्रभाव

| प्रणाली | प्रभाव |
|:--------|:------|
| **लिवर** | फैटी लिवर, सिरोसिस |
| **मस्तिष्क** | स्मृति हानि |
| **हृदय** | कार्डियोमायोपैथी |

---

## 🚭 तंबाकू के प्रभाव

### स्वास्थ्य परिणाम
- फेफड़ों का कैंसर
- COPD
- हृदय रोग
- स्ट्रोक
- मुंह का कैंसर

---

## 💊 उपचार

| दृष्टिकोण | विधियां |
|:---------|:-------|
| **परामर्श** | प्रेरणा, व्यवहार थेरेपी |
| **दवा** | निकोटीन रिप्लेसमेंट |
| **सहायता समूह** | AA, NA |
| **डी-एडिक्शन** | आवासीय उपचार |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मादक द्रव्य सेवन = शराब/नशे का हानिकारक उपयोग
2. संकेत: लालसा, सहनशीलता, वापसी
3. शराब लिवर, मस्तिष्क, हृदय को प्रभावित
4. तंबाकू फेफड़ों का कैंसर करता है
5. उपचार: परामर्श + दवा
:::
`
  },
  {
    id: 4,
    titleEn: "Mental Health First Aid",
    titleHi: "मानसिक स्वास्थ्य प्राथमिक चिकित्सा",
    contentEn: `
# 🆘 Mental Health First Aid

---

## 📖 What is MHFA?

> **Mental Health First Aid** is the help provided to a person developing a mental health problem or in a mental health crisis.

---

## 🎯 Goals of MHFA

1. Preserve life
2. Provide help to prevent condition from worsening
3. Promote recovery
4. Provide comfort

---

## 📋 ALGEE Action Plan

| Letter | Action |
|:-------|:-------|
| **A** | Approach, assess, assist |
| **L** | Listen non-judgmentally |
| **G** | Give support and information |
| **E** | Encourage professional help |
| **E** | Encourage self-help strategies |

---

## 🚨 Crisis Situations

### Suicide Risk

:::danger
**Warning Signs:**
- Talking about wanting to die
- Feeling hopeless
- Giving away possessions
- Saying goodbye
- Previous attempts
:::

### What to Do
1. Ask directly about suicide
2. Stay with the person
3. Remove means of self-harm
4. Get professional help immediately
5. Call crisis helpline

### Helplines (India)
- iCall: 9152987821
- Vandrevala Foundation: 1860-2662-345
- NIMHANS: 080-46110007

---

## 💬 Communication Tips

| Do | Don't |
|:---|:------|
| Listen actively | Judge or criticize |
| Show empathy | Give false reassurance |
| Be patient | Interrupt |
| Maintain confidentiality | Share without consent |
| Encourage professional help | Try to solve problems alone |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. MHFA = First aid for mental health
2. ALGEE: Approach, Listen, Give, Encourage, Encourage
3. Ask directly about suicide
4. Stay with person in crisis
5. Remove means of self-harm
6. Know helpline numbers
:::
`,
    contentHi: `
# 🆘 मानसिक स्वास्थ्य प्राथमिक चिकित्सा

---

## 📖 MHFA क्या है?

> **मानसिक स्वास्थ्य प्राथमिक चिकित्सा** मानसिक स्वास्थ्य समस्या विकसित करने वाले या संकट में व्यक्ति को दी जाने वाली सहायता है।

---

## 🎯 MHFA के लक्ष्य

1. जीवन बचाएं
2. स्थिति बिगड़ने से रोकें
3. रिकवरी को बढ़ावा दें
4. आराम प्रदान करें

---

## 📋 ALGEE एक्शन प्लान

| अक्षर | क्रिया |
|:------|:------|
| **A** | पहुंचें, आकलन करें, सहायता करें |
| **L** | बिना निर्णय के सुनें |
| **G** | समर्थन और जानकारी दें |
| **E** | पेशेवर मदद को प्रोत्साहित करें |
| **E** | स्व-सहायता को प्रोत्साहित करें |

---

## 🚨 संकट की स्थितियां

### आत्महत्या जोखिम

:::danger
**चेतावनी संकेत:**
- मरने की बात करना
- निराश महसूस करना
- संपत्ति दे देना
- अलविदा कहना
- पिछले प्रयास
:::

### क्या करें
1. सीधे आत्महत्या के बारे में पूछें
2. व्यक्ति के साथ रहें
3. आत्म-हानि के साधन हटाएं
4. तुरंत पेशेवर मदद लें
5. हेल्पलाइन पर कॉल करें

### हेल्पलाइन (भारत)
- iCall: 9152987821
- वंद्रेवाला फाउंडेशन: 1860-2662-345
- NIMHANS: 080-46110007

---

## 💬 संचार टिप्स

| करें | न करें |
|:----|:-------|
| सक्रिय रूप से सुनें | न्याय या आलोचना |
| सहानुभूति दिखाएं | झूठा आश्वासन |
| धैर्य रखें | बाधित करें |
| गोपनीयता बनाए रखें | बिना सहमति साझा करें |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. MHFA = मानसिक स्वास्थ्य प्राथमिक चिकित्सा
2. ALGEE: पहुंचें, सुनें, दें, प्रोत्साहित, प्रोत्साहित
3. सीधे आत्महत्या के बारे में पूछें
4. संकट में व्यक्ति के साथ रहें
5. हेल्पलाइन नंबर जानें
:::
`
  },
  {
    id: 5,
    titleEn: "Community Mental Health",
    titleHi: "सामुदायिक मानसिक स्वास्थ्य",
    contentEn: `
# 🏘️ Community Mental Health

---

## 📖 Role of MPHW in Mental Health

> MPHWs are often the first point of contact for people with mental health issues in the community.

---

## 👁️ Key Responsibilities

| Task | Description |
|:-----|:------------|
| **Identification** | Recognize signs of mental illness |
| **Referral** | Connect to mental health services |
| **Follow-up** | Ensure treatment compliance |
| **Awareness** | Reduce stigma in community |
| **Support** | Help families cope |

---

## 🏥 DMHP (District Mental Health Programme)

### Components
- OPD services at district level
- Training of medical officers
- IEC activities
- Community outreach

### Services Available
- Diagnosis and treatment
- Counseling
- Rehabilitation
- Medication

---

## 🚫 Stigma Reduction

### Common Myths

| Myth | Fact |
|:-----|:-----|
| Mental illness is weakness | It's a medical condition |
| Cannot be treated | Most disorders are treatable |
| Only affects certain people | Can affect anyone |
| People are dangerous | Most are not violent |

### How to Reduce Stigma
- Education and awareness
- Share recovery stories
- Use respectful language
- Include in community activities

---

## 📋 Screening Questions

### Simple Questions to Ask

:::info
**Ask about:**
1. How is your sleep?
2. How is your appetite?
3. Do you feel sad or worried?
4. Do you enjoy things you used to?
5. Any thoughts of harming yourself?
:::

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. MPHW = First contact in community
2. DMHP = District Mental Health Programme
3. Key tasks: Identify, Refer, Follow-up
4. Reduce stigma through education
5. Ask simple screening questions
6. Mental illness is treatable
:::
`,
    contentHi: `
# 🏘️ सामुदायिक मानसिक स्वास्थ्य

---

## 📖 मानसिक स्वास्थ्य में MPHW की भूमिका

> MPHW अक्सर समुदाय में मानसिक स्वास्थ्य समस्याओं वाले लोगों के लिए पहला संपर्क बिंदु होते हैं।

---

## 👁️ मुख्य जिम्मेदारियां

| कार्य | विवरण |
|:-----|:------|
| **पहचान** | मानसिक बीमारी के संकेत पहचानें |
| **रेफरल** | मानसिक स्वास्थ्य सेवाओं से जोड़ें |
| **फॉलो-अप** | उपचार अनुपालन सुनिश्चित करें |
| **जागरूकता** | समुदाय में कलंक कम करें |
| **सहायता** | परिवारों की मदद करें |

---

## 🏥 DMHP (जिला मानसिक स्वास्थ्य कार्यक्रम)

### घटक
- जिला स्तर पर OPD सेवाएं
- चिकित्सा अधिकारियों का प्रशिक्षण
- IEC गतिविधियां
- सामुदायिक आउटरीच

### उपलब्ध सेवाएं
- निदान और उपचार
- परामर्श
- पुनर्वास
- दवा

---

## 🚫 कलंक में कमी

### सामान्य मिथक

| मिथक | तथ्य |
|:-----|:-----|
| मानसिक बीमारी कमजोरी है | यह एक चिकित्सा स्थिति है |
| इलाज नहीं हो सकता | अधिकांश उपचार योग्य हैं |
| कुछ लोगों को ही होती है | किसी को भी हो सकती है |
| लोग खतरनाक हैं | अधिकांश हिंसक नहीं हैं |

---

## 📋 स्क्रीनिंग प्रश्न

:::info
**पूछें:**
1. आपकी नींद कैसी है?
2. आपकी भूख कैसी है?
3. क्या आप उदास या चिंतित हैं?
4. क्या आप चीजों का आनंद लेते हैं?
5. खुद को नुकसान पहुंचाने के विचार?
:::

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. MPHW = समुदाय में पहला संपर्क
2. DMHP = जिला मानसिक स्वास्थ्य कार्यक्रम
3. मुख्य कार्य: पहचानें, रेफर करें, फॉलो-अप
4. शिक्षा से कलंक कम करें
5. सरल स्क्रीनिंग प्रश्न पूछें
:::
`
  },
  {
    id: 6,
    titleEn: "Severe Mental Disorders",
    titleHi: "गंभीर मानसिक विकार",
    contentEn: `
# 🔴 Severe Mental Disorders

---

## 📖 What are Severe Mental Disorders?

:::info
**Definition:** Chronic conditions causing significant impairment in thinking, perception, behavior, and functioning. Require long-term treatment and support.
:::

### Types of Severe Mental Disorders

| Disorder | Characteristics |
|:---------|:----------------|
| **Schizophrenia** | Delusions, hallucinations, disorganized thinking |
| **Bipolar Disorder** | Alternating mania and depression |
| **Severe Depression** | Profound sadness, inability to function |
| **Psychosis** | Loss of contact with reality |

---

## 🧠 Schizophrenia

### Positive Symptoms (Excess)

:::danger
**Positive Symptoms:**
- <mark>Delusions</mark> - False beliefs (persecution, grandeur)
- <mark>Hallucinations</mark> - Usually auditory (hearing voices)
- Disorganized speech
- Bizarre behavior
:::

### Negative Symptoms (Deficit)

| Symptom | Description |
|:--------|:------------|
| **Flat affect** | Reduced emotional expression |
| **Alogia** | Poverty of speech |
| **Avolition** | Lack of motivation |
| **Anhedonia** | Unable to feel pleasure |
| **Social withdrawal** | Avoids people |

### Course
- Onset typically <mark>15-35 years</mark>
- Chronic with relapses
- Better prognosis with early treatment
- Requires lifelong medication

---

## 🎭 Bipolar Disorder

### Phases

| Phase | Characteristics |
|:------|:----------------|
| **Manic** | Elevated mood, decreased sleep, increased activity, grandiosity, reckless behavior |
| **Depressive** | Sadness, hopelessness, sleep changes, suicidal thoughts |
| **Mixed** | Features of both |
| **Euthymic** | Normal mood (between episodes) |

### Mania Warning Signs

:::warning
**Signs of Mania:**
- <mark>Decreased need for sleep</mark> (feels rested after 3 hours)
- Talking excessively, racing thoughts
- Grandiose ideas
- Impulsive spending, risky behavior
- Irritability or euphoria
:::

### Duration
- Manic episode: ≥7 days (or any duration if hospitalized)
- Depressive episode: ≥2 weeks

---

## 💊 Treatment of Severe Mental Disorders

### Medications

| Disorder | Medications |
|:---------|:------------|
| **Schizophrenia** | Antipsychotics (Haloperidol, Risperidone, Olanzapine) |
| **Bipolar** | Mood stabilizers (Lithium, Valproate), Antipsychotics |
| **Severe Depression** | Antidepressants + Antipsychotics, ECT |

### Key Points
- <mark>Never stop medication abruptly</mark>
- Side effects manageable with dose adjustment
- Regular follow-up essential
- Family education crucial

---

## 👨‍👩‍👧 Family Support

### Caregiving Tips

| Do | Don't |
|:---|:------|
| Be patient and calm | Argue about delusions |
| Encourage medication | Force if refusing |
| Maintain routine | Isolate the person |
| Reduce stress | Criticize or blame |
| Watch for warning signs | Ignore changes |

### Relapse Prevention
1. Ensure medication compliance
2. Recognize early warning signs
3. Maintain sleep routine
4. Avoid substance use
5. Regular follow-up visits

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Schizophrenia = Delusions + Hallucinations + Negative symptoms
2. Bipolar = Mania + Depression alternating
3. Positive symptoms = Added (delusions, hallucinations)
4. Negative symptoms = Deficit (flat affect, avolition)
5. Treatment = Lifelong medication
6. Never stop medicines abruptly
7. Family education essential
8. Early treatment = Better prognosis
:::
`,
    contentHi: `
# 🔴 गंभीर मानसिक विकार

---

## 📖 गंभीर मानसिक विकार क्या हैं?

:::info
**परिभाषा:** दीर्घकालिक स्थितियां जो सोच, धारणा, व्यवहार और कार्यप्रणाली में महत्वपूर्ण हानि करती हैं। दीर्घकालिक उपचार और सहायता की आवश्यकता।
:::

### गंभीर मानसिक विकारों के प्रकार

| विकार | विशेषताएं |
|:------|:---------|
| **सिज़ोफ्रेनिया** | भ्रम, मतिभ्रम, अव्यवस्थित सोच |
| **द्विध्रुवी विकार** | उन्माद और अवसाद बारी-बारी |
| **गंभीर अवसाद** | गहरी उदासी, कार्य करने में असमर्थता |
| **मनोविकृति** | वास्तविकता से संपर्क टूटना |

---

## 🧠 सिज़ोफ्रेनिया

### पॉजिटिव लक्षण (अतिरिक्त)

:::danger
**पॉजिटिव लक्षण:**
- <mark>भ्रम</mark> - झूठे विश्वास (उत्पीड़न, भव्यता)
- <mark>मतिभ्रम</mark> - आमतौर पर श्रवण (आवाजें सुनना)
- अव्यवस्थित भाषण
- विचित्र व्यवहार
:::

### नेगेटिव लक्षण (कमी)

| लक्षण | विवरण |
|:------|:------|
| **सपाट भाव** | कम भावनात्मक अभिव्यक्ति |
| **एलोगिया** | भाषण की गरीबी |
| **एवोलिशन** | प्रेरणा की कमी |
| **एनहेडोनिया** | खुशी महसूस करने में असमर्थ |
| **सामाजिक अलगाव** | लोगों से बचना |

### कोर्स
- शुरुआत आमतौर पर <mark>15-35 वर्ष</mark>
- पुनरावृत्ति के साथ दीर्घकालिक
- जल्दी उपचार से बेहतर परिणाम
- जीवनभर दवा की आवश्यकता

---

## 🎭 द्विध्रुवी विकार

### चरण

| चरण | विशेषताएं |
|:----|:---------|
| **उन्मत्त** | ऊंचा मूड, कम नींद, बढ़ी गतिविधि, भव्यता, जोखिम भरा व्यवहार |
| **अवसादग्रस्त** | उदासी, निराशा, नींद में बदलाव, आत्मघाती विचार |
| **मिश्रित** | दोनों की विशेषताएं |
| **यूथाइमिक** | सामान्य मूड (एपिसोड के बीच) |

### उन्माद के चेतावनी संकेत

:::warning
**उन्माद के संकेत:**
- <mark>नींद की आवश्यकता में कमी</mark> (3 घंटे के बाद आराम)
- अत्यधिक बात करना, तेज विचार
- भव्य विचार
- आवेगपूर्ण खर्च, जोखिम भरा व्यवहार
- चिड़चिड़ापन या उत्साह
:::

### अवधि
- उन्मत्त एपिसोड: ≥7 दिन
- अवसादग्रस्त एपिसोड: ≥2 सप्ताह

---

## 💊 गंभीर मानसिक विकारों का उपचार

### दवाएं

| विकार | दवाएं |
|:------|:------|
| **सिज़ोफ्रेनिया** | एंटीसाइकोटिक्स (हैलोपेरिडोल, रिस्पेरिडोन, ओलैंज़ापाइन) |
| **द्विध्रुवी** | मूड स्टेबलाइज़र (लिथियम, वैल्प्रोएट) |
| **गंभीर अवसाद** | एंटीडिप्रेसेंट + एंटीसाइकोटिक्स, ECT |

### मुख्य बिंदु
- <mark>दवा अचानक बंद न करें</mark>
- साइड इफेक्ट डोज़ एडजस्टमेंट से प्रबंधनीय
- नियमित फॉलो-अप आवश्यक
- परिवार शिक्षा महत्वपूर्ण

---

## 👨‍👩‍👧 परिवार सहायता

### देखभाल टिप्स

| करें | न करें |
|:----|:-------|
| धैर्य रखें, शांत रहें | भ्रम के बारे में बहस |
| दवा को प्रोत्साहित करें | मना करने पर जबरदस्ती |
| दिनचर्या बनाए रखें | व्यक्ति को अलग करें |
| तनाव कम करें | आलोचना या दोष दें |
| चेतावनी संकेत देखें | बदलावों को अनदेखा करें |

### पुनरावृत्ति रोकथाम
1. दवा अनुपालन सुनिश्चित करें
2. प्रारंभिक चेतावनी संकेत पहचानें
3. नींद दिनचर्या बनाए रखें
4. मादक द्रव्य से बचें
5. नियमित फॉलो-अप विज़िट

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. सिज़ोफ्रेनिया = भ्रम + मतिभ्रम + नेगेटिव लक्षण
2. द्विध्रुवी = उन्माद + अवसाद बारी-बारी
3. पॉजिटिव = जोड़े गए (भ्रम, मतिभ्रम)
4. नेगेटिव = कमी (सपाट भाव, एवोलिशन)
5. उपचार = जीवनभर दवा
6. दवा अचानक न बंद करें
7. परिवार शिक्षा आवश्यक
:::
`
  },
  {
    id: 7,
    titleEn: "Child & Adolescent Mental Health",
    titleHi: "बाल एवं किशोर मानसिक स्वास्थ्य",
    contentEn: `
# 👶 Child & Adolescent Mental Health

---

## 📖 Introduction

:::info
**Important:** Mental health problems can begin in childhood. Early identification and intervention leads to better outcomes.
:::

### Key Statistics
- <mark>10-20%</mark> of children and adolescents have mental health problems
- 50% of mental disorders start before age 14
- 75% start before age 24
- Most go untreated

---

## 🧒 Common Childhood Disorders

### Behavioral Disorders

| Disorder | Features |
|:---------|:---------|
| **ADHD** | Inattention, hyperactivity, impulsivity |
| **Conduct Disorder** | Aggression, rule-breaking, defiance |
| **Oppositional Defiant** | Angry mood, argumentative, vindictive |

### ADHD (Attention Deficit Hyperactivity Disorder)

:::warning
**ADHD Symptoms:**
**Inattention:**
- Difficulty sustaining attention
- Doesn't listen, easily distracted
- Forgetful, loses things

**Hyperactivity:**
- Fidgets, squirms
- Runs/climbs excessively
- Talks excessively

**Impulsivity:**
- Blurts out answers
- Difficulty waiting turn
- Interrupts others
:::

### Duration & Onset
- Symptoms before age <mark>12 years</mark>
- Present in 2+ settings (home, school)
- Duration ≥6 months

---

## 🎭 Emotional Disorders

### Childhood Anxiety

| Type | Features |
|:-----|:---------|
| **Separation Anxiety** | Fear of separation from parents |
| **School Phobia** | Refuses to attend school |
| **Social Anxiety** | Fear of social situations |
| **Specific Phobias** | Fear of specific objects |

### Childhood Depression

:::danger
**Signs of Depression in Children:**
- Persistent sadness or irritability
- Withdrawal from friends/activities
- Changes in appetite/sleep
- Poor school performance
- Frequent physical complaints
- Talk of death/suicide
:::

---

## 📚 Learning Disabilities

| Disability | Affects |
|:-----------|:--------|
| **Dyslexia** | Reading |
| **Dyscalculia** | Math |
| **Dysgraphia** | Writing |

### Signs
- Difficulty learning despite normal intelligence
- Poor academic performance
- Low self-esteem
- May have ADHD as well

---

## 🧩 Autism Spectrum Disorder (ASD)

### Core Features

| Domain | Features |
|:-------|:---------|
| **Social Communication** | Poor eye contact, difficulty with conversations, trouble understanding emotions |
| **Restricted/Repetitive** | Repetitive movements, rigid routines, intense interests |

### Early Warning Signs

:::info
**Red Flags (by 18 months):**
- No babbling, pointing, or waving
- No single words by 16 months
- No 2-word phrases by 24 months
- Loss of previously acquired skills
- Doesn't respond to name
- Poor eye contact
:::

---

## 👨‍👩‍👧 Adolescent Mental Health

### Common Issues

| Issue | Description |
|:------|:------------|
| **Anxiety/Depression** | Increases in adolescence |
| **Self-harm** | Cutting, burning - cry for help |
| **Eating Disorders** | Anorexia, bulimia |
| **Substance Use** | Experimentation, addiction |
| **Suicide** | Leading cause of death in adolescents |

### Risk Factors
- Academic pressure
- Peer pressure
- Family conflict
- Bullying/cyberbullying
- Social media stress
- Identity issues

---

## 🆘 Suicide Prevention in Youth

### Warning Signs

:::danger
**Take Seriously:**
- Talking about wanting to die
- Feeling hopeless
- Giving away possessions
- Social withdrawal
- Recent loss/crisis
- Previous attempts
- Access to means
:::

### Protective Factors
- Strong family connections
- School engagement
- Mental health treatment
- Restricted access to means
- Cultural/religious beliefs

---

## 💊 Treatment Approaches

| Approach | Methods |
|:---------|:--------|
| **Parent Training** | Managing behavior at home |
| **School Support** | IEP, classroom accommodations |
| **Psychotherapy** | CBT, play therapy, family therapy |
| **Medication** | For ADHD, severe cases |

### MPHW Role
1. Screen for developmental delays
2. Identify children with problems
3. Counsel parents
4. Refer to specialist
5. Follow-up compliance

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. 10-20% children have mental health problems
2. ADHD = Inattention + Hyperactivity + Impulsivity
3. ADHD symptoms before age 12, in 2+ settings
4. ASD = Social communication + Restricted behaviors
5. ASD red flags: no words by 16 mo, no phrases by 24 mo
6. Adolescent issues: anxiety, self-harm, suicide
7. Always take suicide talk seriously
8. Early intervention = Better outcomes
:::
`,
    contentHi: `
# 👶 बाल एवं किशोर मानसिक स्वास्थ्य

---

## 📖 परिचय

:::info
**महत्वपूर्ण:** मानसिक स्वास्थ्य समस्याएं बचपन में शुरू हो सकती हैं। जल्दी पहचान और हस्तक्षेप से बेहतर परिणाम।
:::

### मुख्य आंकड़े
- <mark>10-20%</mark> बच्चों और किशोरों को मानसिक स्वास्थ्य समस्याएं
- 50% मानसिक विकार 14 वर्ष से पहले शुरू
- 75% 24 वर्ष से पहले शुरू
- अधिकांश अनुपचारित रहते हैं

---

## 🧒 सामान्य बचपन के विकार

### व्यवहार संबंधी विकार

| विकार | विशेषताएं |
|:------|:---------|
| **ADHD** | असावधानी, अति सक्रियता, आवेगशीलता |
| **आचरण विकार** | आक्रामकता, नियम तोड़ना, अवज्ञा |
| **विरोधी अवज्ञा** | गुस्सा मूड, तर्कशील |

### ADHD (ध्यान घाटे अति सक्रियता विकार)

:::warning
**ADHD लक्षण:**
**असावधानी:**
- ध्यान बनाए रखने में कठिनाई
- नहीं सुनता, आसानी से विचलित
- भुलक्कड़, चीजें खो देता है

**अति सक्रियता:**
- बैचेनी, हिलना-डुलना
- अत्यधिक दौड़ना/चढ़ना
- अत्यधिक बात करना

**आवेगशीलता:**
- जवाब बोल देता है
- बारी का इंतजार नहीं
- दूसरों को बाधित करता है
:::

### अवधि और शुरुआत
- लक्षण <mark>12 वर्ष</mark> की उम्र से पहले
- 2+ सेटिंग्स में मौजूद (घर, स्कूल)
- अवधि ≥6 महीने

---

## 🎭 भावनात्मक विकार

### बचपन की चिंता

| प्रकार | विशेषताएं |
|:------|:---------|
| **अलगाव चिंता** | माता-पिता से अलग होने का डर |
| **स्कूल फोबिया** | स्कूल जाने से मना |
| **सामाजिक चिंता** | सामाजिक स्थितियों का डर |
| **विशिष्ट फोबिया** | विशिष्ट वस्तुओं का डर |

### बचपन का अवसाद

:::danger
**बच्चों में अवसाद के संकेत:**
- लगातार उदासी या चिड़चिड़ापन
- दोस्तों/गतिविधियों से अलगाव
- भूख/नींद में बदलाव
- खराब स्कूल प्रदर्शन
- बार-बार शारीरिक शिकायत
- मृत्यु/आत्महत्या की बात
:::

---

## 📚 सीखने की अक्षमताएं

| अक्षमता | प्रभावित |
|:--------|:---------|
| **डिस्लेक्सिया** | पढ़ना |
| **डिस्कैलकुलिया** | गणित |
| **डिस्ग्राफिया** | लिखना |

### संकेत
- सामान्य बुद्धि के बावजूद सीखने में कठिनाई
- खराब शैक्षणिक प्रदर्शन
- कम आत्मसम्मान
- ADHD भी हो सकता है

---

## 🧩 ऑटिज़्म स्पेक्ट्रम विकार (ASD)

### मुख्य विशेषताएं

| क्षेत्र | विशेषताएं |
|:-------|:---------|
| **सामाजिक संचार** | खराब आंख संपर्क, बातचीत में कठिनाई, भावनाएं समझने में परेशानी |
| **प्रतिबंधित/दोहराव** | दोहराव वाली हरकतें, कठोर दिनचर्या, तीव्र रुचियां |

### प्रारंभिक चेतावनी संकेत

:::info
**लाल झंडे (18 महीने तक):**
- कोई बड़बड़ाना, इशारा या हाथ हिलाना नहीं
- 16 महीने तक कोई एक शब्द नहीं
- 24 महीने तक कोई 2-शब्द वाक्यांश नहीं
- पहले अर्जित कौशल का नुकसान
- नाम पर प्रतिक्रिया नहीं
- खराब आंख संपर्क
:::

---

## 👨‍👩‍👧 किशोर मानसिक स्वास्थ्य

### सामान्य मुद्दे

| मुद्दा | विवरण |
|:------|:------|
| **चिंता/अवसाद** | किशोरावस्था में बढ़ता है |
| **स्व-नुकसान** | काटना, जलाना - मदद की पुकार |
| **खाने के विकार** | एनोरेक्सिया, बुलिमिया |
| **मादक द्रव्य** | प्रयोग, लत |
| **आत्महत्या** | किशोरों में मृत्यु का प्रमुख कारण |

### जोखिम कारक
- शैक्षणिक दबाव
- साथियों का दबाव
- पारिवारिक संघर्ष
- बुलीइंग/साइबरबुलीइंग
- सोशल मीडिया तनाव

---

## 🆘 युवाओं में आत्महत्या रोकथाम

### चेतावनी संकेत

:::danger
**गंभीरता से लें:**
- मरने की बात करना
- निराश महसूस करना
- संपत्ति दे देना
- सामाजिक अलगाव
- हालिया हानि/संकट
- पिछले प्रयास
- साधनों तक पहुंच
:::

### सुरक्षात्मक कारक
- मजबूत पारिवारिक संबंध
- स्कूल जुड़ाव
- मानसिक स्वास्थ्य उपचार
- साधनों तक प्रतिबंधित पहुंच
- सांस्कृतिक/धार्मिक विश्वास

---

## 💊 उपचार दृष्टिकोण

| दृष्टिकोण | विधियां |
|:---------|:-------|
| **माता-पिता प्रशिक्षण** | घर पर व्यवहार प्रबंधन |
| **स्कूल सहायता** | IEP, कक्षा समायोजन |
| **मनोचिकित्सा** | CBT, प्ले थेरेपी, पारिवारिक थेरेपी |
| **दवा** | ADHD, गंभीर मामलों के लिए |

### MPHW भूमिका
1. विकासात्मक विलंब की जांच
2. समस्या वाले बच्चों की पहचान
3. माता-पिता को परामर्श
4. विशेषज्ञ को रेफर
5. अनुपालन का फॉलो-अप

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. 10-20% बच्चों को मानसिक स्वास्थ्य समस्याएं
2. ADHD = असावधानी + अति सक्रियता + आवेगशीलता
3. ADHD लक्षण 12 वर्ष से पहले, 2+ सेटिंग्स में
4. ASD = सामाजिक संचार + प्रतिबंधित व्यवहार
5. ASD रेड फ्लैग: 16 मो तक कोई शब्द नहीं
6. किशोर मुद्दे: चिंता, स्व-नुकसान, आत्महत्या
7. आत्महत्या की बात को हमेशा गंभीरता से लें
8. जल्दी हस्तक्षेप = बेहतर परिणाम
:::
`
  },
  {
    id: 8,
    titleEn: "Elderly Mental Health",
    titleHi: "वृद्ध मानसिक स्वास्थ्य",
    contentEn: `
# 👴 Elderly Mental Health

---

## 📖 Introduction

:::info
**Key Facts:**
- India has <mark>104 million</mark> elderly (≥60 years)
- Expected to reach 319 million by 2050
- Mental health problems common but often missed
- Different presentation than younger adults
:::

### Common Issues

| Issue | Prevalence |
|:------|:-----------|
| Depression | 10-15% |
| Dementia | 5-8% after 60 years |
| Anxiety | 5-10% |
| Sleep disorders | Very common |
| Substance use | Often alcohol |

---

## 😔 Depression in Elderly

### Differences from Younger Adults

| Young Adults | Elderly |
|:-------------|:--------|
| Sadness prominent | May deny sadness |
| Guilt, worthlessness | More physical complaints |
| Crying spells | Apathy, withdrawal |
| Psychomotor changes | Memory complaints |
| | Often missed as "normal aging" |

### Risk Factors

:::warning
**Risk Factors for Elderly Depression:**
- Chronic medical illness
- Disability, functional decline
- Bereavement (spouse, friends)
- Social isolation
- Financial stress
- Previous depression
- Family history
:::

### Warning Signs
- Loss of interest in activities
- Sleep disturbance
- Weight loss, poor appetite
- Fatigue
- Memory problems (may mimic dementia)
- Physical complaints
- Thoughts of death

---

## 🧠 Dementia

### Definition

:::info
**Dementia:** A syndrome characterized by progressive decline in memory, thinking, behavior, and ability to perform everyday activities. It is NOT normal aging.
:::

### Types

| Type | Features |
|:-----|:---------|
| **Alzheimer's** | Most common (60-70%), gradual memory loss |
| **Vascular** | Stepwise decline, stroke history |
| **Lewy Body** | Visual hallucinations, parkinsonism |
| **Frontotemporal** | Personality/behavior changes |

### Stages of Alzheimer's

| Stage | Features |
|:------|:---------|
| **Early** | Forgetfulness, word-finding difficulty, misplacing things |
| **Middle** | Can't recall recent events, needs help with ADL, confusion |
| **Late** | Can't recognize family, bedridden, total dependence |

### Warning Signs (10 Signs)

:::danger
**10 Warning Signs of Dementia:**
1. Memory loss affecting daily life
2. Difficulty planning/problem-solving
3. Difficulty completing familiar tasks
4. Confusion with time/place
5. Trouble understanding visual images
6. New problems with words
7. Misplacing things
8. Decreased judgment
9. Withdrawal from activities
10. Changes in mood/personality
:::

---

## 🔍 Delirium vs Dementia

| Feature | Delirium | Dementia |
|:--------|:---------|:---------|
| **Onset** | <mark>Sudden</mark> (hours-days) | <mark>Gradual</mark> (months-years) |
| **Attention** | Fluctuating, impaired | Usually intact initially |
| **Consciousness** | Altered | Clear |
| **Reversibility** | Often reversible | Usually progressive |
| **Cause** | Infection, medication, dehydration | Neurodegenerative |

### Delirium Triggers
- Infection (UTI, pneumonia)
- Medication changes
- Dehydration
- Constipation
- Pain
- Hospitalization

---

## 😰 Anxiety in Elderly

### Common Types
- Generalized anxiety
- Health anxiety (fear of illness)
- Phobias
- PTSD
- Anxiety with depression

### Features
- Excessive worry about health, finances, family
- Sleep problems
- Physical symptoms (palpitations, sweating)
- Avoidance behavior
- Often coexists with depression

---

## 💊 Treatment Considerations

### General Principles

| Principle | Rationale |
|:----------|:----------|
| **Start low, go slow** | Elderly metabolize drugs slowly |
| **Review all medications** | Drug interactions common |
| **Address physical health** | Pain, constipation, sensory loss |
| **Social support** | Combat isolation |
| **Caregiver support** | Reduce burnout |

### Non-Pharmacological

:::success
**Important Interventions:**
- Regular physical activity
- Social engagement
- Cognitive stimulation
- Sleep hygiene
- Structured routine
- Sensory aids (glasses, hearing aids)
:::

---

## 👨‍👩‍👧 Caregiver Support

### Caregiver Burden Signs
- Physical exhaustion
- Emotional stress
- Social isolation
- Financial strain
- Guilt, frustration

### Support Strategies
1. Share caregiving duties
2. Respite care
3. Support groups
4. Self-care for caregiver
5. Seek professional help when needed

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. India: 104 million elderly (≥60 years)
2. Elderly depression = More physical complaints, often missed
3. Dementia is NOT normal aging
4. Alzheimer's = Most common dementia (60-70%)
5. Delirium = Sudden onset, often reversible
6. Dementia = Gradual onset, progressive
7. Treatment: Start low, go slow
8. Caregiver support essential
9. Social engagement protects mental health
10. Screen all elderly for depression
:::
`,
    contentHi: `
# 👴 वृद्ध मानसिक स्वास्थ्य

---

## 📖 परिचय

:::info
**मुख्य तथ्य:**
- भारत में <mark>104 मिलियन</mark> वृद्ध (≥60 वर्ष)
- 2050 तक 319 मिलियन होने की उम्मीद
- मानसिक स्वास्थ्य समस्याएं आम लेकिन अक्सर छूट जाती हैं
- युवाओं से अलग प्रस्तुति
:::

### सामान्य मुद्दे

| मुद्दा | व्यापकता |
|:------|:---------|
| अवसाद | 10-15% |
| डिमेंशिया | 60 वर्ष के बाद 5-8% |
| चिंता | 5-10% |
| नींद विकार | बहुत आम |
| मादक द्रव्य | अक्सर शराब |

---

## 😔 वृद्धों में अवसाद

### युवाओं से अंतर

| युवा | वृद्ध |
|:----|:-----|
| उदासी प्रमुख | उदासी से इनकार |
| अपराधबोध | शारीरिक शिकायतें ज्यादा |
| रोना | उदासीनता, अलगाव |
| मनोगति परिवर्तन | स्मृति शिकायतें |
| | "सामान्य बुढ़ापा" के रूप में छूट जाता |

### जोखिम कारक

:::warning
**वृद्ध अवसाद के जोखिम कारक:**
- दीर्घकालिक चिकित्सा बीमारी
- विकलांगता, कार्यात्मक गिरावट
- शोक (जीवनसाथी, मित्र)
- सामाजिक अलगाव
- वित्तीय तनाव
- पिछला अवसाद
- पारिवारिक इतिहास
:::

### चेतावनी संकेत
- गतिविधियों में रुचि की हानि
- नींद में गड़बड़ी
- वजन घटना, खराब भूख
- थकान
- स्मृति समस्याएं (डिमेंशिया जैसी)
- शारीरिक शिकायतें
- मृत्यु के विचार

---

## 🧠 डिमेंशिया

### परिभाषा

:::info
**डिमेंशिया:** एक सिंड्रोम जो स्मृति, सोच, व्यवहार और दैनिक गतिविधियों में प्रगतिशील गिरावट द्वारा चिह्नित है। यह सामान्य बुढ़ापा नहीं है।
:::

### प्रकार

| प्रकार | विशेषताएं |
|:------|:---------|
| **अल्ज़ाइमर** | सबसे आम (60-70%), धीरे-धीरे स्मृति हानि |
| **वैस्कुलर** | चरणबद्ध गिरावट, स्ट्रोक इतिहास |
| **लेवी बॉडी** | दृश्य मतिभ्रम, पार्किंसनिज़्म |
| **फ्रंटोटेम्पोरल** | व्यक्तित्व/व्यवहार परिवर्तन |

### अल्ज़ाइमर के चरण

| चरण | विशेषताएं |
|:----|:---------|
| **प्रारंभिक** | भुलक्कड़पन, शब्द खोजने में कठिनाई, चीजें गुम करना |
| **मध्य** | हालिया घटनाएं याद नहीं, ADL में मदद चाहिए, भ्रम |
| **अंतिम** | परिवार को नहीं पहचानता, बिस्तर पर, पूर्ण निर्भरता |

### चेतावनी संकेत (10 संकेत)

:::danger
**डिमेंशिया के 10 चेतावनी संकेत:**
1. दैनिक जीवन प्रभावित करने वाली स्मृति हानि
2. योजना/समस्या-समाधान में कठिनाई
3. परिचित कार्यों को पूरा करने में कठिनाई
4. समय/स्थान के साथ भ्रम
5. दृश्य छवियों को समझने में परेशानी
6. शब्दों के साथ नई समस्याएं
7. चीजें गुम करना
8. निर्णय में कमी
9. गतिविधियों से अलगाव
10. मूड/व्यक्तित्व में बदलाव
:::

---

## 🔍 डेलिरियम बनाम डिमेंशिया

| विशेषता | डेलिरियम | डिमेंशिया |
|:--------|:---------|:---------|
| **शुरुआत** | <mark>अचानक</mark> (घंटे-दिन) | <mark>धीरे-धीरे</mark> (महीने-वर्ष) |
| **ध्यान** | उतार-चढ़ाव, बिगड़ा | शुरू में आमतौर पर ठीक |
| **चेतना** | बदली हुई | स्पष्ट |
| **उलटने योग्य** | अक्सर उलटने योग्य | आमतौर पर प्रगतिशील |
| **कारण** | संक्रमण, दवा, निर्जलीकरण | न्यूरोडीजेनेरेटिव |

### डेलिरियम ट्रिगर
- संक्रमण (UTI, निमोनिया)
- दवा परिवर्तन
- निर्जलीकरण
- कब्ज
- दर्द
- अस्पताल में भर्ती

---

## 😰 वृद्धों में चिंता

### सामान्य प्रकार
- सामान्यीकृत चिंता
- स्वास्थ्य चिंता (बीमारी का डर)
- फोबिया
- PTSD
- अवसाद के साथ चिंता

### विशेषताएं
- स्वास्थ्य, वित्त, परिवार के बारे में अत्यधिक चिंता
- नींद की समस्या
- शारीरिक लक्षण (धड़कन, पसीना)
- टालने का व्यवहार
- अक्सर अवसाद के साथ मौजूद

---

## 💊 उपचार विचार

### सामान्य सिद्धांत

| सिद्धांत | तर्क |
|:---------|:-----|
| **कम से शुरू, धीरे जाएं** | वृद्ध दवाएं धीरे मेटाबोलाइज़ करते हैं |
| **सभी दवाओं की समीक्षा** | ड्रग इंटरैक्शन आम |
| **शारीरिक स्वास्थ्य** | दर्द, कब्ज, संवेदी हानि |
| **सामाजिक समर्थन** | अलगाव से लड़ें |
| **देखभालकर्ता समर्थन** | बर्नआउट कम करें |

### गैर-दवा

:::success
**महत्वपूर्ण हस्तक्षेप:**
- नियमित शारीरिक गतिविधि
- सामाजिक जुड़ाव
- संज्ञानात्मक उत्तेजना
- नींद स्वच्छता
- संरचित दिनचर्या
- संवेदी सहायक (चश्मा, सुनने की मशीन)
:::

---

## 👨‍👩‍👧 देखभालकर्ता समर्थन

### देखभालकर्ता बोझ संकेत
- शारीरिक थकावट
- भावनात्मक तनाव
- सामाजिक अलगाव
- वित्तीय तनाव
- अपराधबोध, निराशा

### समर्थन रणनीतियां
1. देखभाल कर्तव्यों को साझा करें
2. राहत देखभाल
3. सहायता समूह
4. देखभालकर्ता के लिए स्व-देखभाल
5. जरूरत पड़ने पर पेशेवर मदद

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. भारत: 104 मिलियन वृद्ध (≥60 वर्ष)
2. वृद्ध अवसाद = शारीरिक शिकायतें ज्यादा, अक्सर छूटता है
3. डिमेंशिया सामान्य बुढ़ापा नहीं है
4. अल्ज़ाइमर = सबसे आम डिमेंशिया (60-70%)
5. डेलिरियम = अचानक शुरुआत, अक्सर उलटने योग्य
6. डिमेंशिया = धीरे-धीरे शुरुआत, प्रगतिशील
7. उपचार: कम से शुरू, धीरे जाएं
8. देखभालकर्ता समर्थन आवश्यक
9. सामाजिक जुड़ाव मानसिक स्वास्थ्य की रक्षा करता है
10. सभी वृद्धों में अवसाद की जांच करें
:::
`
  },
  {
    id: 9,
    titleEn: "National Mental Health Programme",
    titleHi: "राष्ट्रीय मानसिक स्वास्थ्य कार्यक्रम",
    contentEn: `
# 🏥 National Mental Health Programme (NMHP)

---

## 📖 Background

:::info
**Key Facts:**
- Launched in <mark>1982</mark>
- India was the first developing country to have a national mental health program
- Revised strategies over the years
- Currently integrated with NHM
:::

### Mental Health Burden in India

| Statistic | Value |
|:----------|:------|
| People affected | <mark>~150 million</mark> |
| Treatment gap | <mark>80-90%</mark> |
| Psychiatrists | ~0.3 per 100,000 |
| Mental health budget | <1% of health budget |

---

## 🎯 NMHP Objectives

### Original Objectives (1982)

1. Ensure availability and accessibility of mental healthcare
2. Encourage community participation
3. Stimulate self-help in the community

### Current Objectives

:::success
**Goals:**
- Universal access to mental healthcare
- Reduce treatment gap
- Promote mental health awareness
- Reduce stigma
- Strengthen mental health services
- Protect rights of mentally ill
:::

---

## 📋 District Mental Health Programme (DMHP)

### Introduction
- Launched in <mark>1996</mark>
- District-based mental health services
- Currently covers <mark>704 districts</mark>

### Components

| Component | Details |
|:----------|:--------|
| **Service Delivery** | OPD, camps, emergencies |
| **Training** | Medical officers, PHC staff |
| **IEC** | Awareness activities |
| **Outreach** | Community visits, school programs |
| **Rehabilitation** | Day care, supported employment |

### Team Composition

| Staff | Number |
|:------|:-------|
| Psychiatrist | 1 |
| Clinical Psychologist | 1 |
| Psychiatric Social Worker | 1 |
| Psychiatric Nurse | 1 |
| Program Manager | 1 |

---

## ⚖️ Mental Healthcare Act, 2017

### Key Provisions

:::success
**Patient Rights:**
- <mark>Right to mental healthcare</mark> and treatment
- Right to live with dignity
- Right to confidentiality
- Right to information about treatment
- Right to personal contacts and communication
- Right to legal aid
- <mark>Advance directive</mark> - choose treatment preferences
:::

### Important Provisions

| Provision | Details |
|:----------|:--------|
| **Decriminalization** | Suicide attempt no longer criminal |
| **Advance Directive** | Person can specify treatment wishes |
| **Nominated Rep** | Can appoint someone for decisions |
| **Special Population** | Women, children, elderly get special provisions |
| **Insurance** | Mental illness covered like physical illness |

### Central/State Mental Health Authority
- Oversee implementation
- Register mental health establishments
- Handle complaints
- Maintain records

---

## 🏠 Community-Based Mental Health

### Integration with Primary Healthcare

| Level | Services |
|:------|:---------|
| **Sub-Centre** | Identification, referral, follow-up |
| **PHC** | Basic treatment, counseling |
| **CHC** | Regular psychiatric OPD |
| **District Hospital** | DMHP services, inpatient |
| **Tertiary** | Specialized treatment |

### mhGAP (Mental Health Gap Action Programme)

:::info
**WHO mhGAP:**
- Evidence-based guidelines
- For non-specialists
- Priority conditions covered:
  - Depression
  - Psychosis
  - Epilepsy
  - Child mental disorders
  - Dementia
  - Alcohol/drug use disorders
  - Self-harm/suicide
:::

---

## 👨‍⚕️ MPHW Role in NMHP

### Key Tasks

| Task | Activity |
|:-----|:---------|
| **Identification** | Use screening tools, observe behavior |
| **Referral** | Connect to DMHP services |
| **Follow-up** | Ensure medication compliance |
| **Awareness** | Reduce stigma in community |
| **Data** | Report mental health cases |

### Screening Tools
- WHO-5 Wellbeing Index
- PHQ-9 (Depression)
- GAD-7 (Anxiety)
- Simple screening questions

### Documentation
- Maintain record of mentally ill
- Track treatment status
- Report new cases
- Monthly reporting to PHC

---

## 📊 Mental Health Statistics

### Global Burden

| Condition | DALYs |
|:----------|:------|
| Depression | 2nd leading cause |
| Alcohol use | Major contributor |
| Self-harm | Significant burden |

### India Statistics

| Indicator | Value |
|:----------|:------|
| Suicide rate | ~12 per 100,000 |
| Most common | Anxiety, Depression |
| Farmer suicides | Major concern |
| Student suicides | Rising |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. NMHP launched <mark>1982</mark>
2. DMHP launched <mark>1996</mark>, covers 704 districts
3. Treatment gap = 80-90%
4. Mental Healthcare Act 2017 - decriminalized suicide
5. Advance directive = patient can choose treatment
6. DMHP team: Psychiatrist + Psychologist + PSW + Nurse
7. mhGAP = WHO guidelines for non-specialists
8. MPHW: Identify, Refer, Follow-up, Educate
9. Insurance must cover mental illness
10. Right to mental healthcare is legal right
:::
`,
    contentHi: `
# 🏥 राष्ट्रीय मानसिक स्वास्थ्य कार्यक्रम (NMHP)

---

## 📖 पृष्ठभूमि

:::info
**मुख्य तथ्य:**
- <mark>1982</mark> में शुरू
- भारत राष्ट्रीय मानसिक स्वास्थ्य कार्यक्रम वाला पहला विकासशील देश था
- वर्षों में संशोधित रणनीतियां
- वर्तमान में NHM के साथ एकीकृत
:::

### भारत में मानसिक स्वास्थ्य बोझ

| आंकड़ा | मूल्य |
|:-------|:------|
| प्रभावित लोग | <mark>~150 मिलियन</mark> |
| उपचार अंतर | <mark>80-90%</mark> |
| मनोचिकित्सक | ~0.3 प्रति 100,000 |
| मानसिक स्वास्थ्य बजट | स्वास्थ्य बजट का <1% |

---

## 🎯 NMHP उद्देश्य

### मूल उद्देश्य (1982)

1. मानसिक स्वास्थ्य देखभाल की उपलब्धता और पहुंच सुनिश्चित करना
2. सामुदायिक भागीदारी को प्रोत्साहित करना
3. समुदाय में स्व-सहायता को प्रोत्साहित करना

### वर्तमान उद्देश्य

:::success
**लक्ष्य:**
- मानसिक स्वास्थ्य देखभाल तक सार्वभौमिक पहुंच
- उपचार अंतर कम करना
- मानसिक स्वास्थ्य जागरूकता बढ़ाना
- कलंक कम करना
- मानसिक स्वास्थ्य सेवाओं को मजबूत करना
- मानसिक रूप से बीमार के अधिकारों की रक्षा
:::

---

## 📋 जिला मानसिक स्वास्थ्य कार्यक्रम (DMHP)

### परिचय
- <mark>1996</mark> में शुरू
- जिला-आधारित मानसिक स्वास्थ्य सेवाएं
- वर्तमान में <mark>704 जिलों</mark> में

### घटक

| घटक | विवरण |
|:----|:------|
| **सेवा वितरण** | OPD, कैंप, आपातकालीन |
| **प्रशिक्षण** | चिकित्सा अधिकारी, PHC स्टाफ |
| **IEC** | जागरूकता गतिविधियां |
| **आउटरीच** | सामुदायिक विज़िट, स्कूल कार्यक्रम |
| **पुनर्वास** | डे केयर, समर्थित रोजगार |

### टीम संरचना

| स्टाफ | संख्या |
|:------|:-------|
| मनोचिकित्सक | 1 |
| क्लिनिकल मनोवैज्ञानिक | 1 |
| मनोचिकित्सा सामाजिक कार्यकर्ता | 1 |
| मनोचिकित्सा नर्स | 1 |
| कार्यक्रम प्रबंधक | 1 |

---

## ⚖️ मानसिक स्वास्थ्य देखभाल अधिनियम, 2017

### मुख्य प्रावधान

:::success
**रोगी अधिकार:**
- <mark>मानसिक स्वास्थ्य देखभाल का अधिकार</mark> और उपचार
- गरिमा के साथ रहने का अधिकार
- गोपनीयता का अधिकार
- उपचार के बारे में जानकारी का अधिकार
- व्यक्तिगत संपर्क और संचार का अधिकार
- कानूनी सहायता का अधिकार
- <mark>अग्रिम निर्देश</mark> - उपचार वरीयताएं चुनें
:::

### महत्वपूर्ण प्रावधान

| प्रावधान | विवरण |
|:---------|:------|
| **गैर-आपराधिक** | आत्महत्या का प्रयास अब आपराधिक नहीं |
| **अग्रिम निर्देश** | व्यक्ति उपचार इच्छाएं निर्दिष्ट कर सकता है |
| **नामित प्रतिनिधि** | निर्णयों के लिए किसी को नियुक्त कर सकते हैं |
| **विशेष जनसंख्या** | महिलाओं, बच्चों, वृद्धों को विशेष प्रावधान |
| **बीमा** | मानसिक बीमारी शारीरिक बीमारी की तरह कवर |

### केंद्रीय/राज्य मानसिक स्वास्थ्य प्राधिकरण
- कार्यान्वयन की निगरानी
- मानसिक स्वास्थ्य प्रतिष्ठानों का पंजीकरण
- शिकायतें संभालना
- रिकॉर्ड बनाए रखना

---

## 🏠 सामुदायिक-आधारित मानसिक स्वास्थ्य

### प्राथमिक स्वास्थ्य देखभाल के साथ एकीकरण

| स्तर | सेवाएं |
|:----|:------|
| **उप-केंद्र** | पहचान, रेफरल, फॉलो-अप |
| **PHC** | बुनियादी उपचार, परामर्श |
| **CHC** | नियमित मनोचिकित्सा OPD |
| **जिला अस्पताल** | DMHP सेवाएं, इनपेशेंट |
| **तृतीयक** | विशेष उपचार |

### mhGAP (मानसिक स्वास्थ्य गैप एक्शन प्रोग्राम)

:::info
**WHO mhGAP:**
- साक्ष्य-आधारित दिशानिर्देश
- गैर-विशेषज्ञों के लिए
- प्राथमिकता स्थितियां:
  - अवसाद
  - मनोविकृति
  - मिर्गी
  - बाल मानसिक विकार
  - डिमेंशिया
  - शराब/नशीली दवाओं के विकार
  - स्व-नुकसान/आत्महत्या
:::

---

## 👨‍⚕️ NMHP में MPHW भूमिका

### मुख्य कार्य

| कार्य | गतिविधि |
|:-----|:-------|
| **पहचान** | स्क्रीनिंग उपकरण, व्यवहार अवलोकन |
| **रेफरल** | DMHP सेवाओं से जोड़ें |
| **फॉलो-अप** | दवा अनुपालन सुनिश्चित करें |
| **जागरूकता** | समुदाय में कलंक कम करें |
| **डेटा** | मानसिक स्वास्थ्य केस रिपोर्ट |

### स्क्रीनिंग उपकरण
- WHO-5 वेलबीइंग इंडेक्स
- PHQ-9 (अवसाद)
- GAD-7 (चिंता)
- सरल स्क्रीनिंग प्रश्न

### प्रलेखन
- मानसिक रूप से बीमार का रिकॉर्ड रखें
- उपचार स्थिति ट्रैक करें
- नए केस रिपोर्ट करें
- PHC को मासिक रिपोर्टिंग

---

## 📊 मानसिक स्वास्थ्य आंकड़े

### वैश्विक बोझ

| स्थिति | DALYs |
|:-------|:------|
| अवसाद | दूसरा प्रमुख कारण |
| शराब उपयोग | प्रमुख योगदानकर्ता |
| स्व-नुकसान | महत्वपूर्ण बोझ |

### भारत आंकड़े

| संकेतक | मूल्य |
|:-------|:------|
| आत्महत्या दर | ~12 प्रति 100,000 |
| सबसे आम | चिंता, अवसाद |
| किसान आत्महत्या | प्रमुख चिंता |
| छात्र आत्महत्या | बढ़ती हुई |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. NMHP शुरू <mark>1982</mark>
2. DMHP शुरू <mark>1996</mark>, 704 जिलों में
3. उपचार अंतर = 80-90%
4. मानसिक स्वास्थ्य देखभाल अधिनियम 2017 - आत्महत्या गैर-आपराधिक
5. अग्रिम निर्देश = रोगी उपचार चुन सकता है
6. DMHP टीम: मनोचिकित्सक + मनोवैज्ञानिक + PSW + नर्स
7. mhGAP = गैर-विशेषज्ञों के लिए WHO दिशानिर्देश
8. MPHW: पहचानें, रेफर करें, फॉलो-अप, शिक्षित करें
9. बीमा में मानसिक बीमारी कवर होनी चाहिए
10. मानसिक स्वास्थ्य देखभाल का अधिकार कानूनी अधिकार है
:::
`
  },
  {
    id: 10,
    titleEn: "Epilepsy & Neurological Disorders",
    titleHi: "मिर्गी और न्यूरोलॉजिकल विकार",
    contentEn: `
# ⚡ Epilepsy & Neurological Disorders

---

## 📖 What is Epilepsy?

:::info
**Definition:** A chronic brain disorder characterized by recurrent, unprovoked seizures due to excessive electrical activity in the brain.
:::

### Key Facts

| Fact | Value |
|:-----|:------|
| Prevalence in India | <mark>~12 million</mark> |
| Treatment gap | <mark>~75%</mark> |
| Controllable with medication | 70-80% |
| Causes | Various |

---

## ⚡ Types of Seizures

### Classification

| Type | Features |
|:-----|:---------|
| **Generalized** | Both brain hemispheres |
| **Focal/Partial** | Starts in one area |
| **Unknown Onset** | Origin unclear |

### Generalized Seizures

| Subtype | Features |
|:--------|:---------|
| **Tonic-Clonic** | <mark>Stiffening (tonic) + Jerking (clonic)</mark>, LOC, tongue bite, incontinence |
| **Absence** | Brief staring spells, common in children |
| **Myoclonic** | Brief muscle jerks |
| **Atonic** | Sudden loss of muscle tone (drop attacks) |

### Focal Seizures

| Type | Features |
|:-----|:---------|
| **Aware** | Consciousness preserved, unusual sensations |
| **Impaired Awareness** | Altered consciousness, automatisms |
| **To Bilateral Tonic-Clonic** | Starts focal, spreads to generalized |

---

## 🚨 First Aid for Seizures

### During a Seizure

:::success
**DO:**
1. Stay calm
2. Clear area of hard/sharp objects
3. Cushion head
4. Place on side (recovery position)
5. Time the seizure
6. Stay with person until conscious
7. Reassure after seizure
:::

:::danger
**DON'T:**
1. Put anything in mouth
2. Restrain the person
3. Give water/food during seizure
4. Leave person alone
5. Try to stop movements
:::

### When to Call Emergency

- First seizure
- Seizure >5 minutes
- Repeated seizures without recovery
- Difficulty breathing
- Injury during seizure
- Seizure in water
- Pregnant woman

---

## 💊 Treatment

### Medications (Anti-Epileptic Drugs - AEDs)

| Drug | Used For |
|:-----|:---------|
| **Phenytoin** | Tonic-clonic, focal |
| **Carbamazepine** | Focal, tonic-clonic |
| **Sodium Valproate** | Multiple types |
| **Phenobarbital** | Affordable, available |
| **Levetiracetam** | Newer, fewer interactions |

### Key Principles

:::warning
**Treatment Principles:**
- <mark>Never stop medication suddenly</mark>
- Single drug (monotherapy) preferred initially
- Regular timing
- Avoid triggers (alcohol, sleep deprivation)
- Regular follow-up
- Medication may be lifelong or may stop after 2-3 years seizure-free
:::

---

## 👶 Special Populations

### Children
- Febrile seizures (with fever) common
- Absence epilepsy - brief staring
- May outgrow certain types

### Pregnancy
- Pre-pregnancy planning essential
- Some AEDs cause birth defects
- Folic acid supplementation important
- Continue medication under supervision

### Elderly
- Consider drug interactions
- Start with lower doses
- Common after stroke

---

## 🚫 Stigma & Misconceptions

### Common Myths

| Myth | Fact |
|:-----|:-----|
| Caused by evil spirits | Brain disorder |
| Contagious | Not contagious |
| Intellectually impaired | Most have normal intelligence |
| Cannot work/study | Can lead normal lives |
| Must avoid marriage | Can marry and have children |

### Impact of Stigma
- Hidden illness
- No treatment sought
- Social isolation
- Employment problems
- Marriage difficulties

---

## 👨‍⚕️ MPHW Role

### Tasks

| Task | Activity |
|:-----|:---------|
| **Identification** | Recognize seizure types |
| **First Aid** | Manage seizures safely |
| **Referral** | Connect to services |
| **Follow-up** | Medication compliance |
| **Education** | Reduce stigma, teach first aid |
| **Documentation** | Report cases |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Epilepsy = Recurrent unprovoked seizures
2. India: ~12 million affected, 75% treatment gap
3. Tonic-clonic = Stiffening + Jerking + LOC
4. Absence = Brief staring (children)
5. First aid: Clear area, cushion head, side position
6. DON'T put anything in mouth
7. Call emergency if >5 minutes
8. Never stop AEDs suddenly
9. 70-80% controllable with medication
10. Not contagious, not caused by spirits
:::
`,
    contentHi: `
# ⚡ मिर्गी और न्यूरोलॉजिकल विकार

---

## 📖 मिर्गी क्या है?

:::info
**परिभाषा:** एक दीर्घकालिक मस्तिष्क विकार जो मस्तिष्क में अत्यधिक विद्युत गतिविधि के कारण बार-बार, बिना उकसावे दौरों से चिह्नित होता है।
:::

### मुख्य तथ्य

| तथ्य | मूल्य |
|:----|:------|
| भारत में व्यापकता | <mark>~12 मिलियन</mark> |
| उपचार अंतर | <mark>~75%</mark> |
| दवा से नियंत्रणीय | 70-80% |
| कारण | विभिन्न |

---

## ⚡ दौरों के प्रकार

### वर्गीकरण

| प्रकार | विशेषताएं |
|:------|:---------|
| **सामान्यीकृत** | दोनों मस्तिष्क गोलार्ध |
| **फोकल/आंशिक** | एक क्षेत्र में शुरू |
| **अज्ञात शुरुआत** | मूल अस्पष्ट |

### सामान्यीकृत दौरे

| उप-प्रकार | विशेषताएं |
|:---------|:---------|
| **टॉनिक-क्लोनिक** | <mark>अकड़ना (टॉनिक) + झटके (क्लोनिक)</mark>, बेहोशी, जीभ काटना |
| **एब्सेंस** | संक्षिप्त घूरना, बच्चों में आम |
| **मायोक्लोनिक** | संक्षिप्त मांसपेशी झटके |
| **एटोनिक** | अचानक मांसपेशी टोन का नुकसान |

### फोकल दौरे

| प्रकार | विशेषताएं |
|:------|:---------|
| **जागरूक** | चेतना संरक्षित, असामान्य संवेदनाएं |
| **बिगड़ी जागरूकता** | परिवर्तित चेतना, ऑटोमेटिज़्म |
| **द्विपक्षीय टॉनिक-क्लोनिक** | फोकल से शुरू, सामान्यीकृत में फैलता है |

---

## 🚨 दौरों के लिए प्राथमिक चिकित्सा

### दौरे के दौरान

:::success
**करें:**
1. शांत रहें
2. कठोर/तेज वस्तुओं को हटाएं
3. सिर के नीचे तकिया
4. करवट पर लिटाएं (रिकवरी पोजीशन)
5. दौरे का समय नोट करें
6. होश आने तक साथ रहें
7. बाद में आश्वस्त करें
:::

:::danger
**न करें:**
1. मुंह में कुछ न डालें
2. व्यक्ति को न पकड़ें
3. दौरे के दौरान पानी/भोजन न दें
4. व्यक्ति को अकेला न छोड़ें
5. हरकतों को रोकने की कोशिश न करें
:::

### इमरजेंसी कब बुलाएं

- पहला दौरा
- दौरा >5 मिनट
- बिना रिकवरी बार-बार दौरे
- सांस लेने में कठिनाई
- दौरे के दौरान चोट
- पानी में दौरा
- गर्भवती महिला

---

## 💊 उपचार

### दवाएं (एंटी-एपिलेप्टिक ड्रग्स - AEDs)

| दवा | उपयोग |
|:----|:------|
| **फेनीटोइन** | टॉनिक-क्लोनिक, फोकल |
| **कार्बामाज़ेपाइन** | फोकल, टॉनिक-क्लोनिक |
| **सोडियम वैल्प्रोएट** | कई प्रकार |
| **फेनोबार्बिटल** | सस्ती, उपलब्ध |
| **लेवेटिरासेटम** | नई, कम इंटरैक्शन |

### मुख्य सिद्धांत

:::warning
**उपचार सिद्धांत:**
- <mark>दवा अचानक न बंद करें</mark>
- शुरू में एक दवा (मोनोथेरेपी) पसंद
- नियमित समय
- ट्रिगर से बचें (शराब, नींद की कमी)
- नियमित फॉलो-अप
- दवा जीवनभर या 2-3 साल बिना दौरे के बाद बंद हो सकती है
:::

---

## 👶 विशेष जनसंख्या

### बच्चे
- ज्वर दौरे (बुखार के साथ) आम
- एब्सेंस मिर्गी - संक्षिप्त घूरना
- कुछ प्रकार बड़े होने पर ठीक हो सकते हैं

### गर्भावस्था
- गर्भावस्था पूर्व योजना आवश्यक
- कुछ AEDs जन्म दोष करती हैं
- फोलिक एसिड सप्लीमेंट महत्वपूर्ण
- निगरानी में दवा जारी रखें

### वृद्ध
- दवा इंटरैक्शन पर विचार करें
- कम खुराक से शुरू करें
- स्ट्रोक के बाद आम

---

## 🚫 कलंक और भ्रांतियां

### सामान्य मिथक

| मिथक | तथ्य |
|:-----|:-----|
| बुरी आत्माओं से होती है | मस्तिष्क विकार |
| संक्रामक है | संक्रामक नहीं |
| बौद्धिक रूप से कमजोर | अधिकांश सामान्य बुद्धि |
| काम/पढ़ाई नहीं कर सकते | सामान्य जीवन जी सकते हैं |
| शादी से बचना चाहिए | शादी कर सकते हैं, बच्चे हो सकते हैं |

### कलंक का प्रभाव
- छिपी बीमारी
- इलाज नहीं लिया
- सामाजिक अलगाव
- रोजगार समस्याएं
- विवाह कठिनाइयां

---

## 👨‍⚕️ MPHW भूमिका

### कार्य

| कार्य | गतिविधि |
|:-----|:-------|
| **पहचान** | दौरे के प्रकार पहचानें |
| **प्राथमिक चिकित्सा** | सुरक्षित रूप से दौरे प्रबंधित करें |
| **रेफरल** | सेवाओं से जोड़ें |
| **फॉलो-अप** | दवा अनुपालन |
| **शिक्षा** | कलंक कम करें, प्राथमिक चिकित्सा सिखाएं |
| **प्रलेखन** | केस रिपोर्ट करें |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. मिर्गी = बार-बार बिना उकसावे दौरे
2. भारत: ~12 मिलियन प्रभावित, 75% उपचार अंतर
3. टॉनिक-क्लोनिक = अकड़ना + झटके + बेहोशी
4. एब्सेंस = संक्षिप्त घूरना (बच्चे)
5. प्राथमिक चिकित्सा: क्षेत्र साफ, सिर तकिया, करवट
6. मुंह में कुछ न डालें
7. >5 मिनट हो तो इमरजेंसी बुलाएं
8. AEDs अचानक न बंद करें
9. 70-80% दवा से नियंत्रणीय
10. संक्रामक नहीं, आत्माओं से नहीं
:::
`
  },
  {
    id: 11,
    titleEn: "Counseling Skills",
    titleHi: "परामर्श कौशल",
    contentEn: `
# 💬 Counseling Skills for Mental Health

---

## 📖 What is Counseling?

:::info
**Definition:** A professional helping relationship that enables individuals to explore problems, understand themselves better, and make positive changes.
:::

### Counseling vs Advice

| Counseling | Advice |
|:-----------|:-------|
| Client-centered | Expert-centered |
| Explores options | Provides solutions |
| Empowers client | Directs client |
| Non-judgmental | May be judgmental |
| Client decides | Advisor decides |

---

## 🎯 Goals of Counseling

1. Provide emotional support
2. Help understand the problem
3. Explore coping strategies
4. Facilitate decision-making
5. Promote behavioral change
6. Enhance well-being

---

## 🔑 Core Counseling Skills

### Active Listening

:::success
**Components:**
- <mark>Full attention</mark> - face client, eye contact
- <mark>Non-verbal cues</mark> - nodding, open posture
- <mark>Verbal acknowledgment</mark> - "mm-hmm," "I see"
- <mark>No interruption</mark>
- <mark>Paraphrasing</mark> - reflect back
:::

### Empathy

| Type | Example |
|:-----|:--------|
| **Cognitive** | "I understand that this is difficult for you" |
| **Emotional** | "I can sense how worried you are" |
| **Compassionate** | "I'm here to help you through this" |

### Open-Ended Questions

| Closed | Open-Ended |
|:-------|:-----------|
| "Are you sad?" | "How are you feeling?" |
| "Did you take medicine?" | "Tell me about your medication" |
| "Is your sleep okay?" | "How has your sleep been lately?" |

### Reflection

| Technique | Example |
|:----------|:--------|
| **Reflecting feelings** | "It sounds like you're feeling hopeless" |
| **Reflecting content** | "So you've been unable to sleep for 2 weeks" |
| **Summarizing** | "Let me summarize what we've discussed..." |

---

## 📋 The Counseling Process

### GATHER Framework

| Letter | Step |
|:-------|:-----|
| **G** | <mark>Greet</mark> - welcome, introduce |
| **A** | <mark>Ask</mark> - about concerns, feelings |
| **T** | <mark>Tell</mark> - provide information |
| **H** | <mark>Help</mark> - explore options |
| **E** | <mark>Explain</mark> - plan, next steps |
| **R** | <mark>Return</mark> - follow-up visit |

### Session Structure

| Phase | Activities |
|:------|:-----------|
| **Opening** | Greet, establish rapport, explain confidentiality |
| **Middle** | Explore problem, discuss feelings, identify options |
| **Closing** | Summarize, plan action, schedule follow-up |

---

## 🚫 Common Mistakes to Avoid

:::danger
**Don't:**
- Interrupt the client
- Give advice immediately
- Judge or criticize
- Make false promises
- Share personal problems
- Dismiss feelings ("Don't worry")
- Break confidentiality
- Rush the session
:::

---

## 🆘 Counseling in Crisis

### Suicide Risk Assessment

:::warning
**Ask directly:**
- "Are you thinking about harming yourself?"
- "Have you thought about suicide?"
- "Do you have a plan?"
- "Have you tried before?"
:::

### Protective Actions
1. Take seriously
2. Don't leave alone
3. Remove means
4. Involve family
5. Refer immediately
6. Follow up

---

## 🌍 Cultural Considerations

### Important Factors

| Factor | Consideration |
|:-------|:--------------|
| **Language** | Use local language if possible |
| **Gender** | May prefer same-gender counselor |
| **Family** | Family involvement expected |
| **Beliefs** | Respect traditional healing |
| **Stigma** | Address sensitively |

---

## 📝 Documentation

### Session Notes Include
- Date, time, duration
- Main concerns discussed
- Client's emotional state
- Key points from session
- Plan and follow-up date
- Referrals made

### Confidentiality

:::info
**When to break confidentiality:**
- Risk of harm to self
- Risk of harm to others
- Child abuse
- Legal requirement
- Always inform client first if possible
:::

---

## 👨‍⚕️ MPHW Counseling Role

### Common Situations

| Situation | Approach |
|:----------|:---------|
| **Depression** | Listen, empathize, encourage treatment |
| **Anxiety** | Validate, teach coping, refer if severe |
| **Substance use** | Motivational approach, family involvement |
| **Family conflict** | Joint counseling, problem-solving |
| **Chronic illness** | Emotional support, adherence counseling |

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Counseling = Helping relationship, client-centered
2. Active listening: Attention, non-verbal cues, no interruption
3. Empathy = Understand + Feel + Help
4. Open questions: How, What, Tell me about
5. GATHER: Greet, Ask, Tell, Help, Explain, Return
6. Don't: Judge, advise immediately, interrupt, promise falsely
7. Suicide: Ask directly, don't leave alone, remove means
8. Confidentiality: Break only for safety
9. Document sessions
10. Refer when needed
:::
`,
    contentHi: `
# 💬 मानसिक स्वास्थ्य के लिए परामर्श कौशल

---

## 📖 परामर्श क्या है?

:::info
**परिभाषा:** एक पेशेवर सहायक संबंध जो व्यक्तियों को समस्याओं का पता लगाने, खुद को बेहतर समझने और सकारात्मक बदलाव करने में सक्षम बनाता है।
:::

### परामर्श बनाम सलाह

| परामर्श | सलाह |
|:-------|:-----|
| ग्राहक-केंद्रित | विशेषज्ञ-केंद्रित |
| विकल्प तलाशता है | समाधान देता है |
| ग्राहक को सशक्त करता है | ग्राहक को निर्देशित करता है |
| गैर-न्यायिक | न्यायिक हो सकता है |
| ग्राहक निर्णय लेता है | सलाहकार निर्णय लेता है |

---

## 🎯 परामर्श के लक्ष्य

1. भावनात्मक समर्थन प्रदान करना
2. समस्या समझने में मदद
3. मुकाबला रणनीतियों का पता लगाना
4. निर्णय लेने में सुविधा
5. व्यवहार परिवर्तन को बढ़ावा
6. कल्याण बढ़ाना

---

## 🔑 मुख्य परामर्श कौशल

### सक्रिय सुनना

:::success
**घटक:**
- <mark>पूर्ण ध्यान</mark> - ग्राहक की ओर मुंह, आंख संपर्क
- <mark>गैर-मौखिक संकेत</mark> - सिर हिलाना, खुली मुद्रा
- <mark>मौखिक स्वीकृति</mark> - "हां-हां," "समझा"
- <mark>बाधा न डालें</mark>
- <mark>पैराफ्रेसिंग</mark> - वापस दोहराएं
:::

### सहानुभूति

| प्रकार | उदाहरण |
|:------|:-------|
| **संज्ञानात्मक** | "मैं समझता हूं कि यह आपके लिए कठिन है" |
| **भावनात्मक** | "मैं महसूस कर सकता हूं कि आप कितने चिंतित हैं" |
| **करुणामय** | "मैं आपकी मदद के लिए यहां हूं" |

### खुले प्रश्न

| बंद | खुले |
|:----|:-----|
| "क्या आप उदास हैं?" | "आप कैसा महसूस कर रहे हैं?" |
| "क्या आपने दवा ली?" | "अपनी दवा के बारे में बताएं" |
| "क्या नींद ठीक है?" | "हाल ही में नींद कैसी रही?" |

### प्रतिबिंब

| तकनीक | उदाहरण |
|:-------|:-------|
| **भावनाओं का प्रतिबिंब** | "ऐसा लगता है आप निराश महसूस कर रहे हैं" |
| **सामग्री का प्रतिबिंब** | "तो आप 2 सप्ताह से सो नहीं पाए" |
| **सारांश** | "मैं जो हमने चर्चा की उसका सारांश दूं..." |

---

## 📋 परामर्श प्रक्रिया

### GATHER फ्रेमवर्क

| अक्षर | चरण |
|:------|:----|
| **G** | <mark>अभिवादन</mark> - स्वागत, परिचय |
| **A** | <mark>पूछें</mark> - चिंताओं, भावनाओं के बारे में |
| **T** | <mark>बताएं</mark> - जानकारी दें |
| **H** | <mark>मदद</mark> - विकल्प तलाशें |
| **E** | <mark>समझाएं</mark> - योजना, अगले कदम |
| **R** | <mark>वापसी</mark> - फॉलो-अप विज़िट |

### सत्र संरचना

| चरण | गतिविधियां |
|:----|:---------|
| **शुरुआत** | अभिवादन, तालमेल, गोपनीयता समझाएं |
| **मध्य** | समस्या तलाशें, भावनाएं चर्चा करें, विकल्प पहचानें |
| **समापन** | सारांश, कार्य योजना, फॉलो-अप निर्धारित |

---

## 🚫 बचने योग्य सामान्य गलतियां

:::danger
**न करें:**
- ग्राहक को बाधित करें
- तुरंत सलाह दें
- न्याय या आलोचना करें
- झूठे वादे करें
- व्यक्तिगत समस्याएं साझा करें
- भावनाओं को खारिज करें ("चिंता न करें")
- गोपनीयता तोड़ें
- सत्र में जल्दबाजी करें
:::

---

## 🆘 संकट में परामर्श

### आत्महत्या जोखिम आकलन

:::warning
**सीधे पूछें:**
- "क्या आप खुद को नुकसान पहुंचाने के बारे में सोच रहे हैं?"
- "क्या आपने आत्महत्या के बारे में सोचा है?"
- "क्या आपके पास कोई योजना है?"
- "क्या आपने पहले कोशिश की है?"
:::

### सुरक्षात्मक कार्रवाई
1. गंभीरता से लें
2. अकेला न छोड़ें
3. साधन हटाएं
4. परिवार को शामिल करें
5. तुरंत रेफर करें
6. फॉलो-अप करें

---

## 🌍 सांस्कृतिक विचार

### महत्वपूर्ण कारक

| कारक | विचार |
|:-----|:------|
| **भाषा** | संभव हो तो स्थानीय भाषा |
| **लिंग** | समान-लिंग परामर्शदाता पसंद |
| **परिवार** | पारिवारिक भागीदारी अपेक्षित |
| **विश्वास** | पारंपरिक उपचार का सम्मान |
| **कलंक** | संवेदनशीलता से संबोधित करें |

---

## 📝 प्रलेखन

### सत्र नोट्स में शामिल
- तारीख, समय, अवधि
- चर्चित मुख्य चिंताएं
- ग्राहक की भावनात्मक स्थिति
- सत्र के मुख्य बिंदु
- योजना और फॉलो-अप तारीख
- रेफरल किए गए

### गोपनीयता

:::info
**गोपनीयता कब तोड़ें:**
- खुद को नुकसान का खतरा
- दूसरों को नुकसान का खतरा
- बाल दुर्व्यवहार
- कानूनी आवश्यकता
- संभव हो तो पहले ग्राहक को सूचित करें
:::

---

## 👨‍⚕️ MPHW परामर्श भूमिका

### सामान्य स्थितियां

| स्थिति | दृष्टिकोण |
|:-------|:---------|
| **अवसाद** | सुनें, सहानुभूति, उपचार प्रोत्साहित |
| **चिंता** | मान्य करें, मुकाबला सिखाएं, गंभीर हो तो रेफर |
| **मादक द्रव्य** | प्रेरणा दृष्टिकोण, पारिवारिक भागीदारी |
| **पारिवारिक संघर्ष** | संयुक्त परामर्श, समस्या-समाधान |
| **दीर्घकालिक बीमारी** | भावनात्मक समर्थन, अनुपालन परामर्श |

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. परामर्श = सहायक संबंध, ग्राहक-केंद्रित
2. सक्रिय सुनना: ध्यान, गैर-मौखिक, बाधा न डालें
3. सहानुभूति = समझें + महसूस करें + मदद करें
4. खुले प्रश्न: कैसे, क्या, बताएं
5. GATHER: अभिवादन, पूछें, बताएं, मदद, समझाएं, वापसी
6. न करें: न्याय, तुरंत सलाह, बाधा, झूठे वादे
7. आत्महत्या: सीधे पूछें, अकेला न छोड़ें, साधन हटाएं
8. गोपनीयता: केवल सुरक्षा के लिए तोड़ें
9. सत्र प्रलेखित करें
10. जरूरत पड़ने पर रेफर करें
:::
`
  },
  {
    id: 12,
    titleEn: "Stress Management",
    titleHi: "तनाव प्रबंधन",
    contentEn: `
# 😤 Stress Management

---

## 📖 What is Stress?

:::info
**Definition:** The body's response to any demand or challenge. A certain amount is normal; excessive stress harms health.
:::

### Types of Stress

| Type | Features |
|:-----|:---------|
| **Acute** | Short-term, immediate response |
| **Chronic** | Long-term, ongoing pressure |
| **Eustress** | Positive stress (motivating) |
| **Distress** | Negative stress (harmful) |

---

## ⚠️ Signs of Stress

### Physical

:::warning
**Physical Signs:**
- Headaches
- Muscle tension
- Fatigue
- Sleep problems
- Digestive issues
- Rapid heartbeat
- Frequent illness
:::

### Emotional

| Sign | Manifestation |
|:-----|:--------------|
| **Anxiety** | Worry, restlessness |
| **Irritability** | Short temper |
| **Sadness** | Low mood |
| **Overwhelmed** | Can't cope |

### Behavioral

- Eating changes (more/less)
- Social withdrawal
- Procrastination
- Substance use
- Neglecting responsibilities

### Cognitive

- Poor concentration
- Memory problems
- Negative thinking
- Constant worry
- Poor judgment

---

## 🔍 Causes of Stress

### Work-Related

| Cause | Example |
|:------|:--------|
| **Workload** | Too much work, deadlines |
| **Control** | Little say in decisions |
| **Relationships** | Conflicts with colleagues |
| **Role** | Unclear expectations |
| **Support** | Lack of resources |

### Personal

- Financial problems
- Relationship issues
- Health concerns
- Life changes
- Family responsibilities
- Loss/bereavement

### MPHW-Specific Stressors

- Heavy caseload
- Remote area posting
- Limited resources
- Patient deaths
- Community expectations
- Administrative burden

---

## 💊 Stress Management Techniques

### Relaxation Techniques

:::success
**Deep Breathing Exercise:**
1. Sit comfortably
2. Breathe in slowly (4 counts)
3. Hold (4 counts)
4. Breathe out slowly (4 counts)
5. Repeat 5-10 times
:::

### Progressive Muscle Relaxation

| Step | Action |
|:-----|:-------|
| 1 | Tense muscle group (5 sec) |
| 2 | Release suddenly |
| 3 | Feel the relaxation (15 sec) |
| 4 | Move to next muscle group |
| 5 | Cover all body parts |

### Physical Activity

:::info
**Benefits of Exercise:**
- Releases endorphins (feel-good hormones)
- Reduces tension
- Improves sleep
- Boosts energy
- 30 minutes, 5 days/week recommended
:::

### Time Management

| Strategy | Action |
|:---------|:-------|
| **Prioritize** | Important and urgent first |
| **Plan** | Daily/weekly schedule |
| **Delegate** | Share tasks when possible |
| **Breaks** | Regular short breaks |
| **Say no** | Realistic commitments |

### Social Support

- Talk to friends/family
- Join support groups
- Don't isolate
- Ask for help

### Lifestyle Changes

| Change | Action |
|:-------|:-------|
| **Sleep** | 7-8 hours, regular timing |
| **Diet** | Balanced, reduce caffeine/alcohol |
| **Exercise** | Regular physical activity |
| **Hobbies** | Enjoyable activities |
| **Limits** | Work-life balance |

---

## 🧘 Mindfulness & Meditation

### Simple Mindfulness Exercise

:::success
**5-4-3-2-1 Grounding:**
- **5** things you can SEE
- **4** things you can TOUCH
- **3** things you can HEAR
- **2** things you can SMELL
- **1** thing you can TASTE
:::

### Benefits of Meditation
- Reduces anxiety
- Improves focus
- Better emotional regulation
- Lower blood pressure
- Improved sleep

---

## 🆘 When to Seek Help

### Warning Signs

:::danger
**Seek Professional Help If:**
- Stress is constant
- Unable to function
- Using substances to cope
- Thoughts of self-harm
- Physical health suffering
- Relationships affected
- Depression symptoms
:::

### Professional Support
- Counseling
- Medication if needed
- Employee assistance programs
- Mental health services

---

## 👨‍⚕️ Self-Care for MPHWs

### Daily Practices

| Practice | Action |
|:---------|:-------|
| **Boundaries** | Separate work and personal life |
| **Debrief** | Talk about difficult cases |
| **Breaks** | Regular rest during work |
| **Peer support** | Connect with colleagues |
| **Supervision** | Seek guidance when needed |

### Preventing Burnout

:::info
**Signs of Burnout:**
- Exhaustion
- Cynicism
- Reduced effectiveness
- Detachment from work
- Physical symptoms
:::

### Building Resilience
1. Accept what you can't control
2. Focus on what you can
3. Maintain relationships
4. Practice self-compassion
5. Find meaning in work
6. Celebrate small successes

---

## 🎯 Quick Revision Points

:::tip
**Remember:**
1. Stress = Body's response to demand
2. Eustress = Positive; Distress = Negative
3. Signs: Physical, Emotional, Behavioral, Cognitive
4. Deep breathing: 4-4-4 counts
5. Exercise: 30 min, 5 days/week
6. Sleep: 7-8 hours regular
7. 5-4-3-2-1 grounding technique
8. Time management: Prioritize, plan, delegate
9. Social support is protective
10. Seek help if unable to cope
:::
`,
    contentHi: `
# 😤 तनाव प्रबंधन

---

## 📖 तनाव क्या है?

:::info
**परिभाषा:** किसी भी मांग या चुनौती के प्रति शरीर की प्रतिक्रिया। कुछ मात्रा सामान्य है; अत्यधिक तनाव स्वास्थ्य को नुकसान पहुंचाता है।
:::

### तनाव के प्रकार

| प्रकार | विशेषताएं |
|:------|:---------|
| **तीव्र** | अल्पकालिक, तत्काल प्रतिक्रिया |
| **दीर्घकालिक** | लंबा, निरंतर दबाव |
| **यूस्ट्रेस** | सकारात्मक तनाव (प्रेरणादायक) |
| **डिस्ट्रेस** | नकारात्मक तनाव (हानिकारक) |

---

## ⚠️ तनाव के संकेत

### शारीरिक

:::warning
**शारीरिक संकेत:**
- सिरदर्द
- मांसपेशियों में तनाव
- थकान
- नींद की समस्या
- पाचन समस्याएं
- तेज धड़कन
- बार-बार बीमारी
:::

### भावनात्मक

| संकेत | प्रकटीकरण |
|:------|:---------|
| **चिंता** | बेचैनी |
| **चिड़चिड़ापन** | तेज गुस्सा |
| **उदासी** | कम मूड |
| **अभिभूत** | सामना नहीं कर पाना |

### व्यवहारिक

- खाने में बदलाव (ज्यादा/कम)
- सामाजिक अलगाव
- टालमटोल
- मादक द्रव्य सेवन
- जिम्मेदारियों की उपेक्षा

### संज्ञानात्मक

- खराब एकाग्रता
- स्मृति समस्याएं
- नकारात्मक सोच
- निरंतर चिंता
- खराब निर्णय

---

## 🔍 तनाव के कारण

### कार्य-संबंधित

| कारण | उदाहरण |
|:-----|:-------|
| **कार्यभार** | बहुत काम, समय सीमा |
| **नियंत्रण** | निर्णयों में कम कहना |
| **रिश्ते** | सहकर्मियों से संघर्ष |
| **भूमिका** | अस्पष्ट अपेक्षाएं |
| **समर्थन** | संसाधनों की कमी |

### व्यक्तिगत

- वित्तीय समस्याएं
- रिश्ते के मुद्दे
- स्वास्थ्य चिंताएं
- जीवन परिवर्तन
- पारिवारिक जिम्मेदारियां
- हानि/शोक

### MPHW-विशिष्ट तनाव

- भारी केसलोड
- दूरस्थ क्षेत्र पोस्टिंग
- सीमित संसाधन
- रोगी मृत्यु
- समुदाय की अपेक्षाएं
- प्रशासनिक बोझ

---

## 💊 तनाव प्रबंधन तकनीकें

### विश्राम तकनीकें

:::success
**गहरी श्वास व्यायाम:**
1. आराम से बैठें
2. धीरे-धीरे श्वास लें (4 गिनती)
3. रोकें (4 गिनती)
4. धीरे-धीरे छोड़ें (4 गिनती)
5. 5-10 बार दोहराएं
:::

### प्रगतिशील मांसपेशी विश्राम

| चरण | क्रिया |
|:----|:------|
| 1 | मांसपेशी समूह कसें (5 सेकंड) |
| 2 | अचानक छोड़ें |
| 3 | विश्राम महसूस करें (15 सेकंड) |
| 4 | अगले मांसपेशी समूह पर जाएं |
| 5 | सभी शरीर भागों को कवर करें |

### शारीरिक गतिविधि

:::info
**व्यायाम के लाभ:**
- एंडोर्फिन (अच्छा महसूस कराने वाले हार्मोन) जारी
- तनाव कम करता है
- नींद सुधारता है
- ऊर्जा बढ़ाता है
- 30 मिनट, 5 दिन/सप्ताह अनुशंसित
:::

### समय प्रबंधन

| रणनीति | क्रिया |
|:-------|:------|
| **प्राथमिकता** | महत्वपूर्ण और जरूरी पहले |
| **योजना** | दैनिक/साप्ताहिक अनुसूची |
| **प्रतिनिधि** | संभव हो तो कार्य साझा करें |
| **विराम** | नियमित छोटे ब्रेक |
| **मना करें** | यथार्थवादी प्रतिबद्धताएं |

### सामाजिक समर्थन

- दोस्तों/परिवार से बात करें
- सहायता समूहों में शामिल हों
- अलग न रहें
- मदद मांगें

### जीवनशैली परिवर्तन

| परिवर्तन | क्रिया |
|:---------|:------|
| **नींद** | 7-8 घंटे, नियमित समय |
| **आहार** | संतुलित, कैफीन/शराब कम |
| **व्यायाम** | नियमित शारीरिक गतिविधि |
| **शौक** | आनंददायक गतिविधियां |
| **सीमाएं** | कार्य-जीवन संतुलन |

---

## 🧘 माइंडफुलनेस और ध्यान

### सरल माइंडफुलनेस व्यायाम

:::success
**5-4-3-2-1 ग्राउंडिंग:**
- **5** चीजें जो आप देख सकते हैं
- **4** चीजें जो आप छू सकते हैं
- **3** चीजें जो आप सुन सकते हैं
- **2** चीजें जो आप सूंघ सकते हैं
- **1** चीज जो आप चख सकते हैं
:::

### ध्यान के लाभ
- चिंता कम करता है
- फोकस सुधारता है
- बेहतर भावनात्मक नियंत्रण
- रक्तचाप कम
- बेहतर नींद

---

## 🆘 मदद कब लें

### चेतावनी संकेत

:::danger
**पेशेवर मदद लें यदि:**
- तनाव निरंतर है
- कार्य करने में असमर्थ
- मुकाबले के लिए मादक द्रव्य
- आत्म-नुकसान के विचार
- शारीरिक स्वास्थ्य प्रभावित
- रिश्ते प्रभावित
- अवसाद के लक्षण
:::

### पेशेवर सहायता
- परामर्श
- जरूरत हो तो दवा
- कर्मचारी सहायता कार्यक्रम
- मानसिक स्वास्थ्य सेवाएं

---

## 👨‍⚕️ MPHWs के लिए स्व-देखभाल

### दैनिक अभ्यास

| अभ्यास | क्रिया |
|:-------|:------|
| **सीमाएं** | काम और व्यक्तिगत जीवन अलग |
| **डीब्रीफ** | कठिन केस पर बात |
| **विराम** | काम के दौरान नियमित आराम |
| **साथी समर्थन** | सहकर्मियों से जुड़ें |
| **पर्यवेक्षण** | जरूरत पड़ने पर मार्गदर्शन लें |

### बर्नआउट रोकथाम

:::info
**बर्नआउट के संकेत:**
- थकावट
- सनक
- कम प्रभावशीलता
- काम से अलगाव
- शारीरिक लक्षण
:::

### लचीलापन बनाना
1. जो नियंत्रण में नहीं वह स्वीकारें
2. जो कर सकते हैं उस पर ध्यान दें
3. रिश्ते बनाए रखें
4. आत्म-करुणा का अभ्यास करें
5. काम में अर्थ खोजें
6. छोटी सफलताओं का जश्न मनाएं

---

## 🎯 त्वरित संशोधन बिंदु

:::tip
**याद रखें:**
1. तनाव = मांग के प्रति शरीर की प्रतिक्रिया
2. यूस्ट्रेस = सकारात्मक; डिस्ट्रेस = नकारात्मक
3. संकेत: शारीरिक, भावनात्मक, व्यवहारिक, संज्ञानात्मक
4. गहरी श्वास: 4-4-4 गिनती
5. व्यायाम: 30 मिनट, 5 दिन/सप्ताह
6. नींद: 7-8 घंटे नियमित
7. 5-4-3-2-1 ग्राउंडिंग तकनीक
8. समय प्रबंधन: प्राथमिकता, योजना, प्रतिनिधि
9. सामाजिक समर्थन सुरक्षात्मक है
10. सामना नहीं हो तो मदद लें
:::
`
  }
];

export default mentalHealthLessons;
