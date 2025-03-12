import { Chip } from '@mui/material'

const CutomChip = (props:any) => {
  return (
        <Chip sx={{borderRadius:"4px"}} size={props.size} color={props.color} label={props.title} variant="outlined" />           
  )
}

export default CutomChip