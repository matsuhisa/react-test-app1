type CheckboxProps = React.ComponentProps<'input'>

type Props = {
  label: string;
} & CheckboxProps;

export const Checkbox = ({label, ...CheckboxProps}:Props) => {
  return(
    <label>
      <input type="checkbox" style={{position: "absolute", margin: "-100px"}} {...CheckboxProps} />
      <span>{label}</span>
    </label>
  )
}