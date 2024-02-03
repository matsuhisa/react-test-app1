// type ButtonProps = React.HTMLAttributes<HTMLButtonElement>
type ButtonProps = React.ComponentProps<'button'>

type Props = {
  label: string;
  addClassName?: string;
} & ButtonProps;

export const Button = ({ label, addClassName, ...buttonProps }: Props) => {
  const className = `hoge ${addClassName}`

  return (
    <button className={className} {...buttonProps}>
      {label}
    </button>
  )
}