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
      <Typography variant={'h3'}>{date}</Typography>
      <JobTitle variant={'h2'}>{jobTitle}</JobTitle>
      <Description variant={'h4'}>{description}</Description>
      <DetailsContainer>
        {details?.map((detail, index) => (
          <Detail key={index} {...detail} />
        ))}
      </DetailsContainer>
    </div>
  );
};
