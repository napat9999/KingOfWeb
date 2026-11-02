# KingOfWeb

งานเว็บที่ผมฝึกเขียน ตั้งแต่ HTML/CSS/JavaScript พื้นฐาน ไปจนถึง React, TypeScript และกราฟิก 3 มิติด้วย Three.js

**ลองเปิดเว็บจริง**

| เว็บ | ลิงก์ |
| --- | --- |
| เว็บ Portfolio 3 มิติ | https://napatnamwong-portfolio.vercel.app |
| MathMentor AI (ผลงาน NSC) | https://mathmentor-ai-lyri.onrender.com |

> MathMentor AI ใช้ Render แบบฟรี ถ้าไม่มีคนเข้าสักพักเว็บจะหลับ การเปิดครั้งแรกอาจต้องรอประมาณ 1 นาที

| โฟลเดอร์ | เนื้อหา | เทคโนโลยี |
| --- | --- | --- |
| [`3D_portfolio-main/`](3D_portfolio-main) | เว็บแนะนำตัวแบบเกาะ 3 มิติ | React, Three.js, Tailwind CSS |
| [`react-and-typescript-projects/`](react-and-typescript-projects) | แบบฝึก 42 ชุด และโปรเจกต์ 12 ชุด | React, TypeScript, Vite |
| [`projects/`](projects) | เว็บแอปขนาดเล็ก 60 โปรเจกต์ | HTML, CSS, JavaScript, REST API |

## 1. เว็บ Portfolio 3 มิติ

🔗 **เว็บจริง:** https://napatnamwong-portfolio.vercel.app

<img src="3D_portfolio-main/docs/qr-portfolio.png" alt="QR code เว็บ Portfolio 3 มิติ" width="160">

สแกน QR เพื่อเปิดเว็บบนมือถือ

เว็บแนะนำตัวที่เป็นเกาะ 3 มิติ ลากเมาส์หรือกดลูกศรเพื่อหมุนเกาะ แต่ละมุมจะมีป้ายพาไปหน้าอื่น

- **About:** ผลการเรียน ทักษะ และไทม์ไลน์ค่าย/การแข่งขันของผม ตั้งแต่ AI Camp มข. ถึงค่าย สอวน. คอมพิวเตอร์ ข้อมูลทั้งหมดเก็บไว้ใน `src/constants/index.js` แก้ไฟล์เดียวแล้วหน้าเว็บเปลี่ยนตาม
- **Projects:** ผลงานของผม เช่น [MathMentor AI](https://mathmentor-ai-lyri.onrender.com)
- **Contact:** ฟอร์มส่งอีเมลผ่าน EmailJS โดยเก็บคีย์ไว้ใน `.env` ไม่ฝังในโค้ด
- **3 มิติ:** โหลดโมเดล `.glb` ด้วย React Three Fiber, คำนวณมุมหมุนของเกาะเพื่อเปลี่ยนป้ายข้อมูล, ปรับขนาดฉากตามความกว้างจอ
- ปรับฟอนต์ภาษาไทย (Prompt) และไอคอนให้ตรงกับเนื้อหาของผม

```bash
cd 3D_portfolio-main
npm install
npm run dev
```

ต้องสร้างไฟล์ `.env` เองสำหรับ EmailJS (`VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`)

## 2. React + TypeScript

ฝึกเขียน component ให้มี type ที่ถูกต้อง: typing props/children, `useState`, `useReducer`, Context, utility types, Higher-Order Component และ polymorphic component (`as` prop)

ย้ายทุกโปรเจกต์จาก Create React App มาใช้ **Vite** และรวมเป็น npm workspace เดียว ติดตั้งครั้งเดียวแล้วรันโปรเจกต์ไหนก็ได้:

```bash
cd react-and-typescript-projects
npm install
npm run dev -w examples/06-avengers-quiz
```

## 3. HTML / CSS / JavaScript 60 โปรเจกต์

ฝึก DOM, event, timer, localStorage และการเรียก API เช่น

| โปรเจกต์ | สิ่งที่ทำ |
| --- | --- |
| [`weather-app`](projects/weather-app) | แปลงชื่อเมืองเป็นพิกัดด้วย Open-Meteo Geocoding แล้วดึงพยากรณ์อากาศ (ไม่ต้องใช้ API key) |
| [`english-dictionary`](projects/english-dictionary) | API เดิมเชื่อมต่อไม่ได้แล้ว ผมจึงเปลี่ยนไปใช้ freedictionaryapi.com และเพิ่มการจัดการกรณีไม่พบคำ |
| [`currency-converter`](projects/currency-converter), [`loan-calculator`](projects/loan-calculator) | ฟอร์มและการคำนวณ |
| [`stopwatch`](projects/stopwatch), [`pomodoro-timer`](projects/pomodoro-timer) | จับเวลาด้วย JavaScript |

เปิดไฟล์ `index.html` ในแต่ละโฟลเดอร์ได้เลย ไม่ต้องติดตั้งอะไร

---

**อ้างอิง:** โครงเริ่มต้นของเว็บ 3 มิติจาก JavaScript Mastery · แบบฝึก React + TypeScript จากคอร์สของ Steve Kinney · โมเดล 3 มิติจาก Sketchfab: [Fox](https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78), [Fox's Islands](https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907), [Phoenix Bird](https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042), [Stylized WW1 Plane](https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db)

ผู้เขียน: Napat Namwong · repo อื่น: [KingOfPython](https://github.com/napat9999/KingOfPython) · [KingOfC++](https://github.com/napat9999/KingOfCpp)
