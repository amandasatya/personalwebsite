import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography, Slide } from "@mui/material";

export default function ExperienceTimeline() {
  return (
    <div className="p-10 rounded-lg shadow-md">
      <Typography
        variant="h1"
        className="text-3xl font-bold text-center mb-10 text-sky-600"
      >
        Experiences
      </Typography>
      <Timeline position="alternate">
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" className="text-lg text-sky-600">
                2017 December - Sept 2018
              </Typography>
              <Typography variant="body1">Business owner, Claffo</Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" className="text-lg text-sky-600">
                2019 March - 2020-May
              </Typography>
              <Typography variant="body1">
                Business owner, 4 Slice Pizza
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" className="text-lg text-sky-600">
                2020 July - until now
              </Typography>
              <Typography variant="body1">Business owner, Nafarín</Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1500}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" className="text-lg text-sky-600">
                2024 June - until now
              </Typography>
              <Typography variant="body1">
                Associate Software Engineer, RevoU Internship (Remote)
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      </Timeline>
    </div>
  );
}
