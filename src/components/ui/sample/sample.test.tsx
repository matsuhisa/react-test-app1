import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { SampleButton } from "./SampleButton";

test("サンプルですを確認する", async () => {
  const { getByRole } = render(<SampleButton label="サンプルですを確認する" />);
  expect(getByRole("button", { name: "サンプルですを確認する" })).toBeInTheDocument();

})