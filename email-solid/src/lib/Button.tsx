import { Component } from 'solid-js';

interface ButtonProps {
  backgroundColor: string;
  href: string;
  color: string;
}

export const Button: Component<ButtonProps> = (props) => (
  <tr>
    <td align="center" vertical-align="middle" style="font-size:0px;padding:20px;word-break:break-word;">
      <table border="0" cellPadding="0" cellSpacing="0" role="presentation"
             style="border-collapse:separate;line-height:100%;">
        <tbody>
        <tr>
          <td align="center" bgcolor={props.backgroundColor} role="presentation"
              style={`border:none;border-radius:40px;cursor:auto;mso-padding-alt:10px 25px;background:${props.backgroundColor};`}
              valign="middle">
            <a href={props.href}
               style={`display:inline-block;background:${props.backgroundColor};color:${props.color};font-family:helvetica;font-size:12px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:40px;`}
               target="_blank">
              {props.children}
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </td>
  </tr>
);
