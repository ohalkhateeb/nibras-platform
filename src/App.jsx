import React, { useState, useEffect } from 'react';

// --- ICONS (Recreated from lucide-react) ---
const Icon = ({ children, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {children}
  </svg>
);

const Brain = (props) => <Icon {...props}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A3 3 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A3 3 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M12 18.5v-2.5" /><path d="M12 5.5V8" /></Icon>;
const Zap = (props) => <Icon {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Icon>;
const Lightbulb = (props) => <Icon {...props}><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.7 10.2 18 9 18 7c0-2.2-1.8-4-4-4S10 4.8 10 7c0 2 .3 3.2 1.5 4.5.8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></Icon>;
const TrendingUp = (props) => <Icon {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></Icon>;
const BarChart3 = (props) => <Icon {...props}><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></Icon>;
const Users = (props) => <Icon {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Icon>;
const Target = (props) => <Icon {...props}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></Icon>;
const Sparkles = (props) => <Icon {...props}><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 21l1.9-5.8 5.8-1.9-5.8-1.9L12 3z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></Icon>;
const ArrowLeft = (props) => <Icon {...props}><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></Icon>;
const CheckCircle = (props) => <Icon {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Icon>;
const FileText = (props) => <Icon {...props}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></Icon>;
const Loader2 = (props) => <Icon {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></Icon>;
const Clock = (props) => <Icon {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Icon>;
const HomeIcon = (props) => <Icon {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></Icon>;

// --- UI COMPONENTS (Recreated from shadcn/ui) ---
const Button = ({ className = '', size = 'default', variant = 'default', children, ...props }) => {
  const sizeClasses = {
    lg: 'px-8 py-4 text-lg rounded-xl',
    default: 'px-4 py-2 text-base rounded-lg',
  };
  const variantClasses = {
    default: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 hover:bg-blue-50',
  };
  return (
    <button className={`inline-flex items-center justify-center font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ className = '', children }) => <div className={`glass-morphism border-0 shadow-lg rounded-2xl ${className}`}>{children}</div>;
const CardHeader = ({ className = '', children }) => <div className={`p-6 ${className}`}>{children}</div>;
const CardTitle = ({ className = '', children }) => <h3 className={`text-xl font-bold text-gray-800 ${className}`}>{children}</h3>;
const CardContent = ({ className = '', children }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;

const Badge = ({ className = '', children }) => <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none ${className}`}>{children}</span>;

const Input = ({ className = '', ...props }) => <input className={`flex h-10 w-full rounded-md border border-gray-300 bg-white/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />;

const Textarea = ({ className = '', ...props }) => <textarea className={`flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white/50 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} {...props} />;

const Label = ({ className = '', children }) => <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>{children}</label>;

const SelectContext = React.createContext();

const Select = ({ children, value, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleSelect = (val) => {
    setSelectedValue(val);
    onValueChange(val);
    setIsOpen(false);
  };
  
  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, handleSelect }}>
      <div className="relative">{children}</div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ children, className }) => {
  const { isOpen, setIsOpen } = React.useContext(SelectContext);
  return (
    <button type="button" onClick={() => setIsOpen(!isOpen)} className={`flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}>
      {children}
      <svg className="h-4 w-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6" /></svg>
    </button>
  );
};

const SelectValue = ({ placeholder }) => {
  const { selectedValue } = React.useContext(SelectContext);
  return <span>{selectedValue || placeholder}</span>;
};

const SelectContent = ({ children, className }) => {
  const { isOpen } = React.useContext(SelectContext);
  if (!isOpen) return null;
  return (
    <div className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-popover-foreground shadow-md w-full mt-1 ${className}`}>
      <div className="p-1">{children}</div>
    </div>
  );
};

const SelectItem = ({ children, value, className }) => {
  const { handleSelect } = React.useContext(SelectContext);
  return (
    <div onClick={() => handleSelect(value)} className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100 ${className}`}>
      {children}
    </div>
  );
};

// --- LIVE GEMINI API CALL ---
const InvokeLLM = async ({ systemPrompt, userQuery, schema }) => {
  console.log("Invoking Live LLM...");
  
  //const apiKey = ""; // IMPORTANT: API key is managed by the execution environment. DO NOT hardcode it here.
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: {
        parts: [{ text: systemPrompt }]
    },
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: schema
    },
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("API Error Response:", errorBody);
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const result = await response.json();
    const candidate = result.candidates?.[0];

    if (candidate && candidate.content?.parts?.[0]?.text) {
      const jsonText = candidate.content.parts[0].text;
      return JSON.parse(jsonText);
    } else {
      console.error("Invalid response structure from API:", result);
      throw new Error("Invalid response structure from API.");
    }
  } catch (error) {
    console.error("Failed to invoke LLM:", error);
    throw error;
  }
};


// --- PAGE COMPONENTS ---

function HomePage({ setCurrentPage }) {
  const features = [
    { icon: Brain, title: "المستشار الخبير", description: "يحلل البيانات التاريخية والحالية لتقديم رؤى دقيقة وحلول مبتكرة مبنية على أفضل الممارسات العالمية", color: "from-blue-500 to-indigo-600" },
    { icon: Zap, title: "المساعد فائق الكفاءة", description: "يقترح استخدامات محددة لتقنية الأتمتة (RPA) ويقدم خطوات واضحة لإعادة هندسة الإجراءات", color: "from-amber-500 to-orange-600" },
    { icon: Lightbulb, title: "محفز الابتكار", description: "يقترح حلولاً إبداعية باستخدام الذكاء الاصطناعي التوليدي والوكلاء الرقميين لمعالجة التحديات", color: "from-purple-500 to-pink-600" }
  ];

  const benefits = [
    { icon: TrendingUp, title: "رفع الكفاءة التشغيلية", description: "أتمتة المهام وتقليل الوقت اللازم لحل المشكلات" },
    { icon: BarChart3, title: "قرارات قائمة على البيانات", description: "تحويل البيانات الضخمة إلى قرارات استراتيجية مدروسة" },
    { icon: Users, title: "تعزيز ثقافة الابتكار", description: "تشجيع الموظفين على التفكير الإبداعي والمشاركة في التطوير" },
    { icon: Target, title: "ترسيخ مكانة الهيئة", description: "تأكيد الريادة كجهة حكومية مبتكرة ورائدة عالمياً" }
  ];

  return (
    <div>
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <Badge className="inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-6 bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">مبادرة استراتيجية للابتكار</Badge>
            <h1 className="text-5xl mb-6 py-4 font-bold md:text-6xl gradient-text leading-tight">منصة نِبْراس</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">للذكاء الاصطناعي والابتكار التشغيلي</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              منصة ذكاء اصطناعي متطورة تهدف لأن تكون بمثابة العقل الرقمي والمستشار الخبير لكافة موظفي هيئة الطرق والمواصلات، تقدم حلولاً مبتكرة ومدروسة للتحديات التشغيلية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setCurrentPage('Demo')}>
                <Sparkles className="w-5 h-5 ml-2" />اكتشف العرض التوضيحي
              </Button>
              <Button variant="outline" size="lg" className="border-gray-400">
                تحميل المقترح <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">آلية عمل المنصة</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative"><Card className="p-8 text-center h-full"><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-2xl font-bold text-white">1</span></div><h3 className="text-xl font-bold text-gray-800 mb-4">تقديم التحدي</h3><p className="text-gray-600 leading-relaxed">يقوم الموظف بملء نموذج ذكي ومبسّط لشرح التحدي الذي يواجهه في مجال عمله</p></Card></div>
            <div className="relative"><Card className="p-8 text-center h-full"><div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-2xl font-bold text-white">2</span></div><h3 className="text-xl font-bold text-gray-800 mb-4">التحليل الذكي</h3><p className="text-gray-600 leading-relaxed">محرك الذكاء الاصطناعي يحلل المشكلة ويصنفها، مستخدماً البيانات ذات الصلة من أنظمة الهيئة</p></Card></div>
            <div><Card className="p-8 text-center h-full"><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"><span className="text-2xl font-bold text-white">3</span></div><h3 className="text-xl font-bold text-gray-800 mb-4">الحل المتكامل</h3><p className="text-gray-600 leading-relaxed">تقديم تقرير مفصّل يحتوي على تحليل شامل وتوصيات عملية قابلة للتنفيذ</p></Card></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">الميزات والقدرات الأساسية</h2></div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) =>
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent><p className="text-gray-600 leading-relaxed text-center">{feature.description}</p></CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">الفوائد المتوقعة</h2></div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) =>
              <div key={index} className="flex items-start gap-6 glass-morphism p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div><h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3><p className="text-gray-600 leading-relaxed">{benefit.description}</p></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لتجربة مستقبل العمل الذكي؟</h2>
          <p className="text-xl mb-8 opacity-90">اكتشف كيف يمكن لمنصة نبراس أن تحوّل تحدياتك إلى فرص للابتكار والتميز</p>
          <Button size="lg" variant="outline" className="bg-white text-blue-700 hover:bg-gray-100" onClick={() => setCurrentPage('Demo')}>
            <CheckCircle className="w-5 h-5 ml-2" />جرّب العرض التوضيحي الآن
          </Button>
        </div>
      </section>
    </div>
  );
}

function DemoPage() {
  const [formData, setFormData] = useState({ employeeName: "", department: "", challengeType: "", challengeDescription: "ازدحام مروري شديد عند تقاطع شارع الشيخ زايد مع شارع المركز المالي خلال ساعات الذروة المسائية، مما يؤدي إلى تأخير كبير في رحلات المتعاملين.", currentSolution: "تعتمد الإدارة حاليًا على التحكم اليدوي في توقيت إشارات المرور من قبل ضباط غرفة التحكم، وهو إجراء تفاعلي وغير كافٍ للتعامل مع حجم التدفق المروري.", expectedOutcome: "تقليل متوسط ​​وقت الانتظار عند التقاطع بنسبة 30% وتحسين تدفق حركة المرور." });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);

  const challengeTypes = ["تحسين العمليات التشغيلية", "تطوير خدمة المتعاملين", "تحليل البيانات واتخاذ القرارات", "أتمتة المهام المتكررة", "حل المشكلات التقنية", "تحسين التواصل الداخلي", "إدارة المشاريع", "أخرى"];
  const departments = ["المرور", "النقل العام", "الطرق والبنية التحتية", "الخدمات الرقمية", "الموارد البشرية", "الشؤون المالية", "التخطيط الاستراتيجي", "خدمة المتعاملين", "أخرى"];

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const analyzeChallenge = async () => {
    if (!formData.challengeDescription.trim()) return;
    setIsAnalyzing(true);
    setAnalysis(null);
    setError(null);

    const systemPrompt = `Act as an expert operational consultant for Dubai's Roads and Transport Authority (RTA). Your analysis must be professional, data-driven, and tailored to a government work environment. Provide a detailed, structured analysis in JSON format. your response should be matching the user input language`;

    const userQuery = `
        Analyze the following operational challenge:
        - Employee Name: ${formData.employeeName || 'Not specified'}
        - Department: ${formData.department || 'Not specified'}
        - Challenge Type: ${formData.challengeType || 'General'}
        - Challenge Description: ${formData.challengeDescription}
        - Current Solution (if any): ${formData.currentSolution || 'None'}
        - Desired Outcome: ${formData.expectedOutcome || 'Not specified'}

        Your response must be a JSON object adhering to the provided schema. The analysis should include:
        1. A thorough analysis of the problem and its root causes.
        2. Three practical recommendations with implementation steps, priority, and timeline.
        3. Suggestions for smart technologies (AI/RPA).
        4. Expected benefits and KPIs for measuring success.
        5. Potential challenges and mitigation strategies.
      `;

    const schema = {
        type: "object",
        properties: {
            problem_analysis: { type: "object", properties: { summary: { type: "string" }, root_causes: { type: "array", items: { type: "string" } }, impact: { type: "string" } } },
            recommendations: { type: "array", items: { type: "object", properties: { title: { type: "string" }, description: { type: "string" }, steps: { type: "array", items: { type: "string" } }, priority: { type: "string" }, timeline: { type: "string" } } } },
            ai_solutions: { type: "object", properties: { rpa_opportunities: { type: "array", items: { type: "string" } }, ai_technologies: { type: "array", items: { type: "string" } }, automation_benefits: { type: "string" } } },
            expected_benefits: { type: "object", properties: { efficiency_gains: { type: "string" }, cost_savings: { type: "string" }, quality_improvements: { type: "string" }, kpis: { type: "array", items: { type: "string" } } } },
            implementation_challenges: { type: "array", items: { type: "object", properties: { challenge: { type: "string" }, mitigation: { type: "string" } } } }
        }
    };

    try {
      const result = await InvokeLLM({ systemPrompt, userQuery, schema });
      setAnalysis(result);
    } catch (err) {
      console.error("Error analyzing challenge:", err);
      setError("حدث خطأ أثناء الاتصال بالذكاء الاصطناعي. يرجى المحاولة مرة أخرى.");
    }
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-2">عرض توضيحي تفاعلي</Badge>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">جرّب منصة نبراس</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">اكتشف كيف يمكن لمنصة نبراس تحليل تحدياتك وتقديم حلول مبتكرة ومدروسة</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-xl">
            <CardHeader><CardTitle className="flex items-center gap-3 text-2xl"><div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center"><FileText className="w-5 h-5 text-white" /></div>اشرح تحديك التشغيلي</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>اسم الموظف</Label><Input placeholder="أدخل اسمك" value={formData.employeeName} onChange={(e) => handleInputChange('employeeName', e.target.value)} /></div>
                <div className="space-y-2"><Label>الإدارة</Label><Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}><SelectTrigger><SelectValue placeholder="اختر الإدارة" /></SelectTrigger><SelectContent>{departments.map((dept) => <SelectItem key={dept} value={dept}>{dept}</SelectItem>)}</SelectContent></Select></div>
              </div>
              <div className="space-y-2"><Label>نوع التحدي</Label><Select value={formData.challengeType} onValueChange={(value) => handleInputChange('challengeType', value)}><SelectTrigger><SelectValue placeholder="اختر نوع التحدي" /></SelectTrigger><SelectContent>{challengeTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent></Select></div>
              <div className="space-y-2"><Label>وصف التحدي *</Label><Textarea placeholder="اشرح التحدي الذي تواجهه بالتفصيل..." value={formData.challengeDescription} onChange={(e) => handleInputChange('challengeDescription', e.target.value)} rows={4} className="resize-none" /></div>
              <div className="space-y-2"><Label>الحل الحالي (إن وجد)</Label><Textarea placeholder="كيف تتعامل مع هذا التحدي حالياً؟" value={formData.currentSolution} onChange={(e) => handleInputChange('currentSolution', e.target.value)} rows={3} className="resize-none" /></div>
              <div className="space-y-2"><Label>النتيجة المتوقعة</Label><Input placeholder="ما الذي تريد تحقيقه؟" value={formData.expectedOutcome} onChange={(e) => handleInputChange('expectedOutcome', e.target.value)} /></div>
              <Button onClick={analyzeChallenge} disabled={isAnalyzing || !formData.challengeDescription.trim()} className="w-full py-4 text-lg">
                {isAnalyzing ? <><Loader2 className="w-5 h-5 ml-2 animate-spin" />جاري التحليل الذكي...</> : <><Sparkles className="w-5 h-5 ml-2" />ابدأ التحليل الذكي</>}
              </Button>
            </CardContent>
          </Card>
          <div className="space-y-6">
            {!analysis && !isAnalyzing && !error && <Card className="shadow-xl"><CardContent className="p-12 text-center"><div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6"><Brain className="w-10 h-10 text-gray-400" /></div><h3 className="text-xl font-semibold text-gray-600 mb-4">في انتظار التحليل</h3><p className="text-gray-500">املأ النموذج وانقر على "ابدأ التحليل الذكي" للحصول على توصيات مخصصة. لقد قمت بتعبئة النموذج ببيانات افتراضية لتسهيل التجربة.</p></CardContent></Card>}
            {isAnalyzing && <Card className="shadow-xl"><CardContent className="p-12 text-center"><div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6"><Loader2 className="w-10 h-10 text-blue-600 animate-spin" /></div><h3 className="text-xl font-semibold text-blue-700 mb-4">جاري تحليل التحدي...</h3><p className="text-gray-600">منصة نبراس تحلل تحديك وتبحث في أفضل الحلول المتاحة</p></CardContent></Card>}
            {error && <Card className="shadow-xl bg-red-50 border-red-200"><CardContent className="p-12 text-center"><h3 className="text-xl font-semibold text-red-700 mb-4">حدث خطأ</h3><p className="text-red-600">{error}</p></CardContent></Card>}
            {analysis && (
              <div className="space-y-6">
                <Card className="shadow-xl"><CardHeader><CardTitle className="flex items-center gap-3 text-xl"><div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center"><Target className="w-4 h-4 text-white" /></div>تحليل المشكلة</CardTitle></CardHeader><CardContent className="space-y-4"><p className="text-gray-700 leading-relaxed">{analysis.problem_analysis?.summary}</p>{analysis.problem_analysis?.root_causes && <div><h4 className="font-semibold mb-2">الأسباب الجذرية:</h4><ul className="space-y-1">{analysis.problem_analysis.root_causes.map((cause, index) => <li key={index} className="flex items-start gap-2 text-gray-600"><span className="text-red-500 mt-1">•</span>{cause}</li>)}</ul></div>}</CardContent></Card>
                <Card className="shadow-xl"><CardHeader><CardTitle className="flex items-center gap-3 text-xl"><div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center"><CheckCircle className="w-4 h-4 text-white" /></div>التوصيات المقترحة</CardTitle></CardHeader><CardContent><div className="space-y-6">{analysis.recommendations?.map((rec, index) => <div key={index} className="border rounded-xl p-4 bg-white/50"><div className="flex items-start justify-between mb-3"><h4 className="font-semibold text-lg">{rec.title}</h4><div className="flex gap-2"><Badge variant="outline" className="text-xs">{rec.priority}</Badge><Badge variant="outline" className="text-xs"><Clock className="w-3 h-3 ml-1" />{rec.timeline}</Badge></div></div><p className="text-gray-600 mb-3">{rec.description}</p>{rec.steps && <div><h5 className="font-medium mb-2">خطوات التنفيذ:</h5><ol className="space-y-1">{rec.steps.map((step, stepIndex) => <li key={stepIndex} className="flex items-start gap-2 text-sm text-gray-600"><span className="text-green-500 font-semibold mt-0.5">{stepIndex + 1}.</span>{step}</li>)}</ol></div>}</div>)}</div></CardContent></Card>
                <Card className="shadow-xl"><CardHeader><CardTitle className="flex items-center gap-3 text-xl"><div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4 text-white" /></div>الحلول التقنية المقترحة</CardTitle></CardHeader><CardContent className="space-y-4">{analysis.ai_solutions?.rpa_opportunities && <div><h4 className="font-semibold mb-2">فرص الأتمتة (RPA):</h4><ul className="space-y-1">{analysis.ai_solutions.rpa_opportunities.map((opp, index) => <li key={index} className="flex items-start gap-2 text-gray-600"><span className="text-purple-500 mt-1">•</span>{opp}</li>)}</ul></div>}{analysis.ai_solutions?.ai_technologies && <div><h4 className="font-semibold mb-2">تقنيات الذكاء الاصطناعي:</h4><ul className="space-y-1">{analysis.ai_solutions.ai_technologies.map((tech, index) => <li key={index} className="flex items-start gap-2 text-gray-600"><span className="text-blue-500 mt-1">•</span>{tech}</li>)}</ul></div>}</CardContent></Card>
                <Card className="shadow-xl"><CardHeader><CardTitle className="flex items-center gap-3 text-xl"><div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4 text-white" /></div>الفوائد المتوقعة</CardTitle></CardHeader><CardContent className="space-y-4"><div className="grid md:grid-cols-2 gap-4"><div><h4 className="font-semibold mb-2 text-green-700">تحسين الكفاءة</h4><p className="text-sm text-gray-600">{analysis.expected_benefits?.efficiency_gains}</p></div><div><h4 className="font-semibold mb-2 text-blue-700">توفير التكاليف</h4><p className="text-sm text-gray-600">{analysis.expected_benefits?.cost_savings}</p></div></div>{analysis.expected_benefits?.kpis && <div><h4 className="font-semibold mb-2">مؤشرات قياس النجاح:</h4><div className="flex flex-wrap gap-2">{analysis.expected_benefits.kpis.map((kpi, index) => <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">{kpi}</Badge>)}</div></div>}</CardContent></Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// --- LAYOUT & APP COMPONENTS ---

function Layout({ children, currentPage, setCurrentPage }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
            <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
              :root { --primary-color: #1e40af; --secondary-color: #f59e0b; --accent-color: #0ea5e9; --text-color: #1f2937; --bg-color: #ffffff; }
              body { font-family: 'Cairo', sans-serif; }
              .gradient-text { background: linear-gradient(135deg, var(--primary-color), var(--accent-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
              .glass-morphism { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); }
            `}</style>
            <header className="glass-morphism border-b sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCurrentPage('Home')}>
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg"><Sparkles className="w-6 h-6 text-white" /></div>
                            <div><h1 className="text-2xl font-bold gradient-text">منصة نبراس</h1><p className="text-sm text-gray-600">للذكاء الاصطناعي والابتكار</p></div>
                        </div>
                        <nav className="hidden md:flex items-center gap-8">
                            <button onClick={() => setCurrentPage('Home')} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === 'Home' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}><HomeIcon className="w-4 h-4" />الرئيسية</button>
                            <button onClick={() => setCurrentPage('Demo')} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === 'Demo' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'}`}><FileText className="w-4 h-4" />العرض التوضيحي</button>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1">{children}</main>
        </div>
    );
}

export default function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    return (
        <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
            {currentPage === 'Home' && <HomePage setCurrentPage={setCurrentPage} />}
            {currentPage === 'Demo' && <DemoPage />}
        </Layout>
    );
}


