import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { UilBriefcase, UilGraduationCap } from '@iconscout/react-unicons';

const TimeLine = () => {
  return (
    <div>
        <VerticalTimeline lineColor="rgb(0, 0, 0)"> {/* black */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2020 - 2024"
            iconStyle={{ background: 'rgb(75, 85, 99)', color: '#fff' }} 
            icon={<UilGraduationCap />}
          >
            <h3 className='text-lg mb-0.5'>B.Tech in Computer Science</h3>
            <h4 className='text-sm text-gray-500'>BITS Edu Campus: BABARIA INSTITUTE</h4>
            <h5 className='text-sm mt-2'>
            B.Tech in Computer Science Engineering with a focus on software development.
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="April 2024 - July 2024"
            iconStyle={{ background: 'rgb(75, 85, 99)', color: '#fff' }} 
            icon={<UilBriefcase />}
          >
            <h3 className='text-lg mb-0.5'>MERN-Stack Developer Intern</h3>
            <h4 className='text-sm text-gray-500'>Activet Life Services</h4>
            <h5 className='text-sm mt-2'>
            Worked on web applications utilizing the MERN stack for development and maintenance.
            </h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
