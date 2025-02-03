import { Button, ButtonProps } from "../atoms/button";
import { Loader } from "../atoms/loader";

interface LoadingButton extends ButtonProps {
  loading: boolean;
}
export function LoadingButton({ loading, ...props }: LoadingButton) {
  if (loading) {
    return (
      <Button className="flex items-center justify-center">
        <Loader />
      </Button>
    );
  }

  return <Button {...props}></Button>;
}
