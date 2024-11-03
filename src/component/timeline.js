import React from "react"
import { useInView } from 'react-intersection-observer'
import 'animate.css/animate.min.css'
import './animation-style.css'
import { Box, Typography } from "@mui/material"
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import GradeIcon from '@mui/icons-material/Grade'
import FlagCircleIcon from '@mui/icons-material/FlagCircle'
import PendingIcon from '@mui/icons-material/Pending'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import DevicesIcon from '@mui/icons-material/Devices'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'

const classes = {
    root: {
        width: '100%',
        minHeight: '100px',
    }
}

const Education = () => {
  const {ref, inView} = useInView({ threshold: 0.01 })
  return (
    <Timeline position="alternate" ref={ref} className={inView ? "animate__animated animate__zoomIn" : ""} sx={{ opacity: inView ? '1' : '0' }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Sep 2016 - Jul 2020
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="primary">
          <FlagCircleIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            BISTU
          </Typography>
          <Typography>Bachelor of Industrial Engineering</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Sep 2021 - Sep 2023
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="primary">
          <FlagCircleIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            UNSW
          </Typography>
          <Typography>Master of Information Technology</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Dec 2023 - May 2024
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="primary">
          <FlagCircleIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            JR Academy
          </Typography>
          <Typography>Learned Full-Stack Web Development</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Current
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="secondary">
          <PendingIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            To be continued
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

const Certificate = () => {
  const {ref, inView} = useInView({ threshold: 0.01 })
  return (
    <Timeline position="alternate" ref={ref} className={inView ? "animate__animated animate__zoomIn" : ""} sx={{ opacity: inView ? '1' : '0' }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          21st Oct 2024
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="primary">
          <EmojiEventsIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            AWS Certified Cloud Practitioner
          </Typography>
          <Typography>CLF-C02</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Current
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="secondary">
          <PendingIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            Next milestone: AWS Certified Developer - Associate 
          </Typography>
          <Typography>DVA-C02</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

const Career = () => {
  const {ref, inView} = useInView({ threshold: 0.01 })
  return (
    <Timeline position="alternate" ref={ref} className={inView ? "animate__animated animate__zoomIn" : ""} sx={{ opacity: inView ? '1' : '0' }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Sep 2020 - Sep 2021
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="primary">
          <DevicesIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Administrative Assistant and Student Advisor
          </Typography>
          <Typography> BISTU  🌍 Beijing, China 💼 On-site (Full-time)</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Apr 2024 - Aug 2024
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="primary">
          <DevicesIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            Full Stack Engineer
          </Typography>
          <Typography>Meyd.it  🌍 Sydney, Australia 💼 Hybrid (Internship)</Typography>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Aug 2024 - Current
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="warning">
          <ChangeCircleIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            Full Stack Engineer
          </Typography>
          <Typography>Meyd.it  🌍 Sydney, Australia 💼 Hybrid (Volunteer)</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Current
        </TimelineOppositeContent>

        <TimelineSeparator>
        <TimelineConnector />

        <TimelineDot color="secondary">
          <PendingIcon />
        </TimelineDot>

        <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent sx={{ py: '20px', px: 2 }}>
          <Typography variant="h6" component="span">
            Actively seeking a full-time position
          </Typography>
          <Typography>Full Stack Engineer | Software Engineer</Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>

    
  )
}

const PersonalGrowthTimeline = () => {
  const [value, setValue] = React.useState('2')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

    return (
        <Box sx={classes.root} >
          <TabContext value={value}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <TabList 
                onChange={handleChange}
                aria-label="scrollable force tabs example" 
                variant="scrollable" 
                scrollButtons   
                allowScrollButtonsMobile
              >
                <Tab icon={<WorkIcon />} label="Career" value="1" sx={{  margin: '0 30px' }} />
                <Tab icon={<SchoolIcon />} label="Education" value="2" sx={{  margin: '0 30px' }} />
                <Tab icon={<GradeIcon />} label="Certificate" value="3" sx={{  margin: '0 30px' }} />
              </TabList>
            </Box>
            <TabPanel value="1"><Career/></TabPanel>
            <TabPanel value="2"><Education /></TabPanel>
            <TabPanel value="3"><Certificate /></TabPanel>
        </TabContext>
      </Box>
    )
}

export default PersonalGrowthTimeline