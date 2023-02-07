import { Typography } from '@mui/material';
import { Description, DetailsContainer, JobTitle } from './Job.styles';
import { Detail } from '../Detail/Detail';

interface JobProps {
  date: string;
  jobTitle: string;
  description: string;
  details?: Detail[];
}

export const Job = ({ date, jobTitle, description, details }: JobProps) => {
  return (
    <div>
      <Typography variant={'h2'}>{date}</Typography>
      <JobTitle variant={'h3'}>{jobTitle}</JobTitle>
      <Description variant={'h4'}>{description}</Description>
      <DetailsContainer>
        {details?.map((detail, index) => (
          <Detail key={index} {...detail} index={index + 1} />
        ))}
      </DetailsContainer>
    </div>
  );
};
