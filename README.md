# KingOfWeb

งานเว็บที่ผมฝึกเขียน ตั้งแต่ HTML/CSS/JavaScript ไปจนถึง React, TypeScript และกราฟิก 3 มิติด้วย Three.js

> ทุกโปรเจกต์ใน repo นี้เขียนตามคอร์สหรือ tutorial เพื่อฝึกทักษะ เครดิตของต้นฉบับอยู่ในแต่ละหัวข้อด้านล่าง

## 1. เว็บ Portfolio 3 มิติ — [`3D_portfolio-main/`](3D_portfolio-main)

เว็บแนะนำตัวที่เป็นเกาะ 3 มิติ หมุนดูได้ด้วยการลากเมาส์ มีหน้า About, Projects และ Contact

| ส่วน | เทคโนโลยี |
| --- | --- |
| UI | React 18, React Router, Tailwind CSS |
| 3 มิติ | Three.js ผ่าน React Three Fiber และ Drei, โมเดล `.glb` |
| ฟอร์มติดต่อ | EmailJS |
| Build / Deploy | Vite, Vercel |

**เครดิต:** สร้างตาม tutorial "Build and Deploy an Amazing 3D Developer Portfolio in React with Three.js" ของ JavaScript Mastery

```bash
cd 3D_portfolio-main
npm install
npm run dev
```

ต้องสร้างไฟล์ `.env` เองสำหรับ EmailJS (`VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`)

## 2. React + TypeScript — [`react-and-typescript-projects/`](react-and-typescript-projects)

ตัวอย่างและแบบฝึก 42 ชุด และโปรเจกต์ 12 ชุด: typing props/children, `useState`, `useReducer`, Context, utility types, HOC, polymorphic component

ย้ายทุกโปรเจกต์จาก Create React App มาใช้ **Vite** และรวมเป็น npm workspace เดียว ติดตั้งครั้งเดียวแล้วรันโปรเจกต์ไหนก็ได้:

```bash
cd react-and-typescript-projects
npm install
npm run dev -w examples/06-avengers-quiz
```

**เครดิต:** คอร์ส "React and TypeScript" ของ Steve Kinney (Frontend Masters)

## 3. HTML / CSS / JavaScript 60 โปรเจกต์ — [`projects/`](projects)

โปรเจกต์ขนาดเล็กที่ฝึก DOM, event และการเรียก API เช่น

| โปรเจกต์ | ฝึกอะไร |
| --- | --- |
| [`weather-app`](projects/weather-app) | แปลงชื่อเมืองเป็นพิกัดด้วย Open-Meteo Geocoding แล้วดึงพยากรณ์อากาศจาก Open-Meteo (ไม่ต้องใช้ API key) |
| [`english-dictionary`](projects/english-dictionary) | API เดิม (dictionaryapi.dev) เชื่อมต่อไม่ได้แล้ว จึงเปลี่ยนไปใช้ freedictionaryapi.com และจัดการกรณีไม่พบคำ |
| [`currency-converter`](projects/currency-converter), [`loan-calculator`](projects/loan-calculator) | ฟอร์มและการคำนวณ |
| [`stopwatch`](projects/stopwatch), [`pomodoro-timer`](projects/pomodoro-timer) | จับเวลาด้วย JavaScript |

เปิดไฟล์ `index.html` ในแต่ละโฟลเดอร์ได้เลย ไม่ต้องติดตั้งอะไร

**เครดิต:** ชุด "HTML CSS JavaScript projects for beginners"

---

ผู้เขียน: Napat Namwong · repo อื่น: [KingOfPython](https://github.com/napat9999/KingOfPython) · [KingOfC++](https://github.com/napat9999/KingOfCpp)
