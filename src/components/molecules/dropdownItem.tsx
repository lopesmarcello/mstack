import { DropdownMenu } from "radix-ui";

type DropdownItem = {
  children: React.ReactNode;
};

export const DropdownItem = (props: DropdownItem) => {
  return (
    <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-slate-500 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 hover:bg-slate-100">
      {props.children}
    </DropdownMenu.Item>
  );
};
