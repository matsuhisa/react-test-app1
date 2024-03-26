import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Checkbox } from './Checbox'

test("チェックボックスですを確認する", () => {
  const { getByRole } = render(<Checkbox label="チェックボックスです" />);
  expect(getByRole("checkbox", { name: "チェックボックスです" })).toBeInTheDocument();
})