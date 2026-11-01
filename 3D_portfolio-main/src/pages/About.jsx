import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { education, experiences, profile, skills, statement } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Napat
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          <strong className='text-black-500'>{profile.nameTh}</strong> ({profile.nameEn})
          — นักเรียนชั้นมัธยมศึกษาตอนปลาย {profile.school} ที่หลงใหลคณิตศาสตร์
          การเขียนโปรแกรม และ AI
        </p>
        <p>
          เป้าหมาย: <span className='font-semibold text-blue-600'>{profile.target}</span>
        </p>
        <p>งานอดิเรก: {profile.hobbies.join(" · ")}</p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Education</h3>

        <div className='mt-8 grid md:grid-cols-2 gap-6'>
          {education.map((edu) => (
            <div
              key={edu.level}
              className='rounded-xl border border-slate-200 p-6 shadow-card bg-white'
            >
              <p className='text-sm text-slate-500'>{edu.period}</p>
              <h4 className='text-xl font-semibold mt-1'>{edu.level}</h4>
              <p className='mt-2 font-medium text-blue-600'>GPAX : {edu.gpax}</p>
              <ul className='mt-4 space-y-1 text-slate-600'>
                {edu.subjects.map((sub) => (
                  <li key={sub.name} className='flex justify-between'>
                    <span>{sub.name}</span>
                    <span className='font-semibold'>
                      {sub.grade}
                      {sub.credits && (
                        <span className='font-normal text-slate-400'>
                          {" "}
                          ({sub.credits} หน่วยกิต)
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name} title={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Statement of Purpose</h3>
        <div className='mt-5 flex flex-col gap-4 text-slate-500 leading-relaxed'>
          {statement.map((para, i) => (
            <p key={i} className='indent-8'>
              {para}
            </p>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Camps & Competitions</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            เส้นทางของผมตั้งแต่ก้าวแรกในโลก AI จนถึงสนามแข่งขันเขียนโปรแกรม
            — สิ่งที่ได้ทำ ปัญหาที่เจอ และสิ่งที่ได้เรียนรู้
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.title}-${index}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, i) => (
                    <li
                      key={`experience-point-${i}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
