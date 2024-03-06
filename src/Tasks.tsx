import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Title from './Title';

export default function Tasks() {
  const [checked, setChecked] = React.useState<number[]>([]);

  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const tasks = [
    'Complete Project Proposal',
    'Conduct Market Research',
    'Design User Interface Mockups',
    'Develop Backend API',
    'Implement Authentication System',
  ];

  return (
    <React.Fragment>
      <Title>Tasks</Title>
      <List>
        {tasks.map((task, index) => {
          const labelId = `checkbox-list-label-${index}`;
          const isChecked = checked.indexOf(index) !== -1;

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={() => handleToggle(index)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={
                    isChecked ? (
                      <span style={{ textDecoration: 'line-through' }}>{task}</span>
                    ) : (
                      task
                    )
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </React.Fragment>
  );
}