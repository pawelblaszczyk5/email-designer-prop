<script lang="ts">
  export let backgroundColor: string;
  export let color: string;
  export let href: string;
</script>

<tr>
  <td align="center" vertical-align="middle" style="font-size:0px;padding:20px;word-break:break-word;">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
      <tbody>
      <tr>
        <td align="center" bgcolor={backgroundColor} role="presentation"
            style="border:none;border-radius:40px;cursor:auto;mso-padding-alt:10px 25px;background:{backgroundColor};" valign="middle">
          <a {href}
             style="display:inline-block;background:{backgroundColor};color:{color};font-family:helvetica;font-size:12px;font-weight:normal;line-height:120%;margin:0;text-decoration:none;text-transform:none;padding:10px 25px;mso-padding-alt:0px;border-radius:40px;"
             target="_blank">
            <slot></slot>
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </td>
</tr>
