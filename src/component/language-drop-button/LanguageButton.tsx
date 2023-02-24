import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export const LanguageButton = ({
  Padding = '0',
  Color = '#000'
}: {
  Padding?: string;
  Color?: string;
}) => {
  const { i18n } = useTranslation();
  return (
    <Box sx={{ minWidth: 120, padding: Padding }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native'
          }}
          sx={{ color: Color }}
          onChange={event => i18n.changeLanguage(event.target.value)}
        >
          <option style={{ color: '#000' }} value='en'>
            English
          </option>
          <option style={{ color: '#000' }} value='uk'>
            Ukraine
          </option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};
