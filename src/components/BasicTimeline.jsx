import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const BasicTimeline = ({ items }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
      className="py-2"
    >
      {items.map((item, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineDot />
            {idx < items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent
            sx={{ fontFamily: "Geologica Variable, sans-serif" }}
          >
            <div className="narrow text-[9pt]">{item}</div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default BasicTimeline;
