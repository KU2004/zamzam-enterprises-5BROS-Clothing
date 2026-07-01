/// <reference types="vite/client" />
/// <reference types="node" />

declare module "nodemailer" {
  const nodemailer: any;
  export default nodemailer;
}

declare const process: {
  env: Record<string, string | undefined>;
};
