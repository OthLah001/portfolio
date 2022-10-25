import { useState } from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Experience.scss';
import { EXPERIENCE_DATA } from './data';
import AnimateOnScroll from '../shared/AnimateOnScroll/AnimateOnScroll';

export default function Experience() {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  let TabsContent = [];
  let TabPanelsContent = [];
  for(const [index, exp] of EXPERIENCE_DATA.entries()) {
    TabsContent.push(
      <Tab className="tab" label={exp.company} value={`${index+1}`} key={`tab-${index+1}`} />
    );
    TabPanelsContent.push(
      <TabPanel value={`${index+1}`} className="tab-panel" key={`tab-panel-${index+1}`}>
        <h3 className="job-title">{exp.jobTitle} <span className="at">@ {exp.company}</span></h3>
        <p className="time-worked">{exp.timeWorked}</p>
        <ul className="tasks">
          {
            exp.tasks.map(
              (task, idx) => <li key={`task-${exp.company}-${idx+1}`}>{task}</li>
            )
          }
        </ul>
      </TabPanel>
    )
  }

  
  return (
    <AnimateOnScroll className="experience-container section" animate='fadeInLeft'>
      <SectionTitle title="Experience" />

      <div className="data-content">
        <TabContext value={value}>
          <TabList onChange={handleChange} className="tab-list">
            { TabsContent }
          </TabList>

          { TabPanelsContent }
        </TabContext>
      </div>
    </AnimateOnScroll>
  )
}