export const Sample = () => {
  return (
    <div>サンプルです</div>
  )
}

type ButtonProps = React.ComponentProps<'button'>

type Props = {
  label: string;
  addClassName?: string;
} & ButtonProps;

export const SampleButton = ({ label, addClassName, ...buttonProps }: Props) => {
  const className = `hoge ${addClassName}`

  return (
    <button className={className} {...buttonProps}>
      {label}
    </button>
  )
}