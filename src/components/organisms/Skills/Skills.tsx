import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { CellName, CellRate, Container, RateIcon } from './Skills.styles';

export type Skill = {
  id: number;
  name: string;
  value: number;
};

export const Skills = () => {
  const { t } = useTranslation('curriculumVitae');
  const skills: Skill[] = t('skills.list', { returnObjects: true });

  return (
    <Container>
      <Typography variant={'h1'}>{t('skills.title')}</Typography>
      <table>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <CellName>{skill.name}</CellName>
              <CellRate>
                {[...Array.from({ length: skill.value })].map((_, i) => (
                  <RateIcon key={i} />
                ))}
              </CellRate>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
