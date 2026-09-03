const fs = require('fs');
let content = fs.readFileSync('c:/dev/marvelart/src/app/classes/page.jsx', 'utf8');

// Replace Curriculum
const newCurriculum = 'const curriculum = [\\n  {\\n    level: "Beginner Level",\\n    title: "Basic Mehndi",\\n    duration: "Week 1–2",\\n    icon: <BookOpen className="w-8 h-8 text-gold-500" />,\\n    features: [\\n      "Basic lines, dots, curves and shapes",\\n      "Flowers and leaf designs",\\n      "Cone making and handling",\\n      "Henna paste basics",\\n      "Pressure and design control",\\n      "Simple mehndi patterns"\\n    ]\\n  },\\n  {\\n    level: "Intermediate Level",\\n    title: "Arabic & Modern Mehndi",\\n    duration: "Week 3–4",\\n    icon: <Sparkles className="w-8 h-8 text-gold-500" />,\\n    features: [\\n      "Arabic floral designs",\\n      "Shading and filling",\\n      "Mandala designs",\\n      "Geometric patterns",\\n      "Modern and Indo-Arabic designs",\\n      "Creating detailed patterns"\\n    ]\\n  },\\n  {\\n    level: "Advanced Level",\\n    title: "Bridal Mehndi",\\n    duration: "Week 5–6",\\n    icon: <Crown className="w-8 h-8 text-gold-500" />,\\n    features: [\\n      "Detailed bridal designs",\\n      "Traditional motifs and patterns",\\n      "Bride & Groom designs",\\n      "Peacock, elephant and floral designs",\\n      "Matching both hands",\\n      "Tips for better and darker mehndi color"\\n    ]\\n  }\\n];';
content = content.replace(/const curriculum = \[[\s\S]*?\];/, newCurriculum);

// Replace features
const newFeatures = 'const features = [\\n  { icon: <BookOpen className="w-6 h-6" />, title: "Complete Learning", desc: "Learn everything from basic lines and flowers to beautiful bridal designs." },\\n  { icon: <Users className="w-6 h-6" />, title: "Personal Attention", desc: "Get guidance and feedback during your practice." },\\n  { icon: <Award className="w-6 h-6" />, title: "Course Certificate", desc: "Receive a certificate after successfully completing the course." },\\n  { icon: <Gift className="w-6 h-6" />, title: "Free Practice Kit", desc: "Get a mehndi practice kit to help you learn and practice." }\\n];';
content = content.replace(/const features = \[[\s\S]*?\];/, newFeatures);

// Replace FAQs
const newFaqs = 'const faqs = [\\n  { q: "Do I need any previous experience?", a: "No. Beginners are welcome." },\\n  { q: "Is the practice material provided?", a: "Yes. A basic practice kit is included with the course." },\\n  { q: "Will I get a certificate?", a: "Yes. You will receive a certificate after completing the course." },\\n  { q: "Can I start taking bridal orders after the course?", a: "Yes. The course is designed to help you improve your skills and become confident enough to take your own orders." }\\n];';
content = content.replace(/const faqs = \[[\s\S]*?\];/, newFaqs);

content = content.replace('Master the Art of <br className="hidden md:block"/>', 'Learn <br className="hidden md:block"/>');
content = content.replace('<span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">Professional Mehndi</span>', '<span className="bg-gradient-to-r from-gold-600 via-gold-500 to-brown-900 bg-clip-text text-transparent">Professional Mehndi Art</span>');
content = content.replace("Join Udaipur's most premium Mehndi Academy. Turn your passion into a high-paying profession with our certified professional courses.", "Learn beautiful mehndi designs from basic to advanced levels with Mehndi Marvel Academy, Udaipur. Whether you are a beginner or want to improve your skills, our course will help you become a confident mehndi artist.");

content = content.replace('{ icon: <Award className="w-5 h-5" />, text: "Certificate Included" }', '{ icon: <Award className="w-5 h-5" />, text: "Certificate Included", desc: "Get a certificate after completing the course." }');
content = content.replace('{ icon: <Gift className="w-5 h-5" />, text: "Free Mehndi Kit" }', '{ icon: <Gift className="w-5 h-5" />, text: "Free Mehndi Kit", desc: "Get a basic practice kit." }');
content = content.replace('{ icon: <HeartHandshake className="w-5 h-5" />, text: "Lifetime Support" }', '{ icon: <HeartHandshake className="w-5 h-5" />, text: "Personal Guidance", desc: "Learn with feedback." }');
content = content.replace('{ icon: <Shield className="w-5 h-5" />, text: "Limited Seats" }', '{ icon: <Shield className="w-5 h-5" />, text: "Limited Seats", desc: "Seats are limited." }');

content = content.replace('<span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-brown-900/80">{badge.text}</span>', '<span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-brown-900/80">{badge.text}</span>\\n                    <span className="text-[9px] text-brown-900/50 mt-1">{badge.desc}</span>');

content = content.replace('The Academy', 'About Our Academy');
content = content.replace('Why Choose Mehndi Marvel?', 'Why Learn With Mehndi Marvel?');
content = content.replace('Your Journey to Mastery', 'Course Structure');

content = content.replace('Limited Time Offer', 'Special Offer');
content = content.replace('Invest in Your Future', 'Start Your Mehndi Journey Today');
content = content.replace('Get professional certification, lifetime support, and a complete premium starter kit at a massive discount.', 'Get the complete 6-week course with a free practice kit and personal guidance.');
content = content.replace('"Full 6-Week Certification Course"', '"6-week complete course"');
content = content.replace('"Premium Mehndi Practice Kit Included"', '"Mehndi practice kit"');
content = content.replace('"1-on-1 Feedback & Doubt Sessions"', '"Personal feedback and doubt sessions"');
content = content.replace('"Lifetime Community Support"', '"Lifetime support"');

content = content.replace('{ icon: <Briefcase />, count: "50+", text: "Started Own Business" }', '{ icon: <Briefcase />, count: "50+", text: "Started Their Own Business" }');
content = content.replace('{ icon: <Crown />, count: "80+", text: "Bridal Booking Success" }', '{ icon: <Crown />, count: "80+", text: "Successful Bridal Bookings" }');

content = content.replace('<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">', '<div className="max-w-7xl mx-auto px-6">\\n              <AnimatedSection className="text-center mb-16">\\n                <h2 className="text-gold-500 tracking-[0.4em] uppercase text-xs font-semibold mb-4">Our Students</h2>\\n                <p className="text-4xl md:text-5xl font-serif font-bold text-brown-900">Student Success</p>\\n              </AnimatedSection>\\n              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">');
content = content.replace('              </AnimatedSection>\\n              ))}\\n            </div>\\n          </section>', '              </AnimatedSection>\\n              ))}\\n            </div>\\n            </div>\\n          </section>');

content = content.replace('Proud Moments', 'Student Artwork');
content = content.replace('Student Artwork</p>', 'Student Artwork</p>\\n                <p className="text-brown-900/70 font-light mt-4 mb-8">See the beautiful mehndi designs created by our students.</p>');

content = content.replace('Clarifications', 'Frequently Asked Questions');
content = content.replace('Your Profession', 'a Skill');
content = content.replace('Seats for our next batch are filling up fast. Take the first step towards a rewarding career as a professional Mehndi artist today.', 'Learn mehndi, improve your skills, and start your journey as a professional mehndi artist.');

fs.writeFileSync('c:/dev/marvelart/src/app/classes/page.jsx', content);
console.log("update complete");
