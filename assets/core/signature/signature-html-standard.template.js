/**
 * Full HTML signature template used for preview and for platforms
 * that support direct HTML paste or file upload.
 * - Maintains strict table-based structure for email client safety
 * - Avoids contact/social icons for improved Outlook compatibility
 * - Always includes legal disclaimer for compliance
 */

export function buildHtmlStandardSignature({
  name,
  title,
  address,
  phone,
  mobile,
  logoAndBannerBase64,
}) {
  const mobileHTML = mobile
    ? `
<td style="white-space:nowrap; padding-right:18px; vertical-align:middle; min-width:130px;">
    <img src="https://www.prognosis-biotech.com/apps/icons/20251008/M.png" alt="Mobile" width="10" height="10"
        style="display:inline-block; vertical-align:middle; margin-right:6px; border:0;">
    <a href="tel:${mobile}" style="
        display:inline-flex;
        align-items:center;
        font-family:'Montserrat', Arial, Helvetica, sans-serif;
        font-size:13px; font-weight:500; color:#000 !important; text-decoration:none;
        ">
        ${mobile}
    </a>
</td>
`
    : `<td style="min-width:130px; padding-right:18px;"></td>`;

  const signature = `
<table cellpadding="0" cellspacing="0" role="presentation" style="
  width:100%;
  background:#ffffff !important;
  padding:12px;
  border-radius:12px;
  font-family:'Montserrat', Arial, Helvetica, sans-serif;
  color:#000 !important;
">
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0" role="presentation" width="520" style="
                background:#ffffff !important;
                border-radius:12px;
                padding:12px;
                width:100%;
                max-width:500px;
                margin:0;
            ">
                <!-- HEADER -->
                <tr>
                    <td>
                        <table width="100%" role="presentation" style="
                            background:#f5f5f5 !important;
                            border-radius:12px;
                            padding:22px 14px;
                        ">
                            <tr>
                                <td valign="middle"
                                    style="font-weight:700; font-size:18px; color:#000 !important; width:50%; text-align:center;">
                                    ${name}
                                </td>
                                <td style="width:6px; text-align:center; color:#a0a0a0 !important; font-size:26px;">|
                                </td>
                                <td valign="middle"
                                    style="font-size:15px; color:#646464 !important; width:50%; text-align:center;">
                                    ${title}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td style="height:14px; line-height:14px; font-size:0">&nbsp;</td>
                </tr>

                <!-- LOGO / BANNER -->
                <tr>
                    <td>
                        <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                                <td align="center">
                                    <img src="${logoAndBannerBase64}" alt="ProGnosis Biotech - 75 Years of Innovation"
                                        width="500"
                                        style="display:block; width:100%; max-width:500px; height:auto; border:0; border-radius:12px;">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- DIVIDER -->
                <tr>
                    <td style="padding-top:14px; padding-bottom:8px;">
                        <div style="width:100%; border-top:1px solid #999999 !important;"></div>
                    </td>
                </tr>

                <!-- CONTACT -->
                <tr>
                    <td>
                    <table width="100%" role="presentation" cellpadding="0" cellspacing="0" style="font-size:13px; color:#000 !important;">
                        <tr>
                        <td align="left" valign="middle"
                            style="font-size:18px; font-weight:400; color:#222222 !important; line-height:1.25; letter-spacing:0.1px;">
                            Food Safety &amp; Clinical Diagnostics
                        </td>

                        <td align="right" valign="middle"
                           style="white-space:nowrap; font-size:15px; font-weight:400; line-height:1.2;">
                            <span style="color:#f15a24 !important; font-weight:800;">T</span>
                           <a href="tel:${phone}" style="color:#222222 !important; text-decoration:none; margin-left:8px; font-weight:400;">
                            ${phone}
                            </a>
                        </td>
                        </tr>

                        <tr>
                            <td style="height:4px; line-height:4px; font-size:0;">&nbsp;</td>
                            <td style="height:4px; line-height:4px; font-size:0;">&nbsp;</td>
                        </tr>

                        <tr>
                        <td align="left" valign="middle"
                            style="font-size:17px; font-weight:700; line-height:1.2;">
                            <a href="https://www.prognosis-biotech.com"
                            target="_blank" rel="noopener noreferrer"
                            style="color:#f15a24 !important; text-decoration:none;">
                            www.prognosis-biotech.com
                            </a>
                        </td>

                        <td align="right" valign="middle"
                            style="white-space:nowrap; font-size:14px; font-weight:700;">
                            <a href="https://www.linkedin.com/company/prognosisbiotech"
                            target="_blank" rel="noopener noreferrer"
                            style="color:#000 !important; text-decoration:none;">
                            Linked in
                            </a>
                            <span style="color:#f15a24 !important; padding:0 12px;">|</span>
                            <a href="https://www.youtube.com/@prognosisbiotech"
                            target="_blank" rel="noopener noreferrer"
                            style="color:#000 !important; text-decoration:none;">
                            YouTube
                            </a>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>

                <!-- DIVIDER BOTTOM -->
                <tr>
                    <td style="padding-top:10px; padding-bottom:10px;">
                        <div style="width:100%; border-top:1px solid #999999 !important;"></div>
                    </td>
                </tr>

                <!-- DISCLAIMER -->
                <tr>
                    <td style="
                        font-size:10px;
                        color:#7d7d7d !important;
                        line-height:1.25;
                        text-align:left;
                    ">
                        <strong style="font-weight:700; color:#666666 !important;">DISCLAIMER:</strong>
                        This email is intended solely for the recipient(s) and may contain confidential information.
                        By reading this email, you agree to treat its contents as confidential.
                        Visit:
                        <a href="https://www.prognosis-biotech.com/disclaimer"
                        style="color:#3db3f7 !important; text-decoration:underline; font-style:italic;">
                        https://www.prognosis-biotech.com/disclaimer
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
`;

  return signature.trim();
}
