import { mobileIcon } from "../../base64/icons/mobile.js";

/**
 * Outlook Web-safe template (V3)
 * - All assets inline Base64
 * - Pure table layout for email client safety
 * - Designed to survive Outlook Web paste sanitizer
 * - Used for: Preview → Copy → Outlook Signature Editor
 */

export function buildOutlookSignatureWebV3({
  name,
  title,
  address,
  phone,
  mobile,
  logoAndBannerBase64,
  formatPhoneNumber = (x) => x,
}) {
  const safePhone = formatPhoneNumber(phone);
  const safeMobile = formatPhoneNumber(mobile);

  const mobileHTML = safeMobile
    ? `
      <td style="white-space:nowrap; padding-right:18px; vertical-align:middle;">
        <a href="tel:${safeMobile}" style="
            display:inline-flex;
            align-items:center;
            font-size:13px;
            font-weight:500;
            color:#000;
            text-decoration:none;
          ">
          <img src="${mobileIcon}" width="10" height="10"
            style="vertical-align:middle; margin-right:6px; border:0;">
          ${safeMobile}
        </a>
      </td>`
    : `<td style="padding-right:18px;"></td>`;

  return `
    <table cellpadding="0" cellspacing="0" role="presentation" style="
      width:100%;
      max-width:500px;
      font-family:Montserrat, Arial, Helvetica, sans-serif;
      color:#000 !important;
    ">

      <!-- HEADER -->
      <tr>
        <td style="background:#f4f4f4; border-radius:16px; text-align:center; padding:22px;">
          <table role="presentation" width="100%">
            <tr>
              <td style="font-weight:700; font-size:18px; width:50%; color:#000;">
                ${name}
              </td>
              <td style="width:6px; color:#a0a0a0; font-size:26px;">|</td>
              <td style="font-size:15px; width:50%; color:#646464;">
                ${title}
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr><td style="height:14px"></td></tr>

      <!-- LOGO / BANNER -->
      <tr>
        <td>
          <table width="100%" role="presentation">
            <tr>
              <td align="center">
                <img src="${logoAndBannerBase64}" alt="ProGnosis Biotech - 75 Years of Innovation"
                  style="display:block; width:100%; max-width:500px; height:auto; border:0; border-radius:12px;">
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr><td style="border-top:1px solid #c8c8c8; padding-top:10px;"></td></tr>

      <!-- CONTACT -->
      <tr>
        <td>
          <table width="100%" role="presentation" cellpadding="0" cellspacing="0" style="font-size:13px; color:#000;">
            <tr>
              <td align="left" valign="middle"
                style="font-size:18px; font-weight:400; color:#222222; line-height:1.25; letter-spacing:0.1px;">
                Food Safety &amp; Clinical Diagnostics
              </td>

              <td align="right" valign="middle"
                style="white-space:nowrap; font-size:15px; font-weight:400; line-height:1.2;">
                <span style="color:#f15a24; font-weight:800;">T</span>
              <a href="tel:${safePhone}" style="color:#222222; text-decoration:none; margin-left:8px; font-weight:400;">
                  ${safePhone}
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
                  style="color:#f15a24; text-decoration:none;">
                  www.prognosis-biotech.com
                </a>
              </td>

              <td align="right" valign="middle"
                style="white-space:nowrap; font-size:14px; font-weight:700;">
                <a href="https://www.linkedin.com/company/prognosisbiotech"
                  target="_blank" rel="noopener noreferrer"
                  style="color:#000; text-decoration:none;">
                  Linked in
                </a>
                <span style="color:#f15a24; padding:0 12px;">|</span>
                <a href="https://www.youtube.com/@prognosisbiotech"
                  target="_blank" rel="noopener noreferrer"
                  style="color:#000; text-decoration:none;">
                  YouTube
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr><td style="border-top:1px solid #c8c8c8; padding-top:10px;"></td></tr>

      <!-- DISCLAIMER -->
      <tr>
        <td style="font-size:10px; color:#7d7d7d; line-height:1.5; text-align:justify; word-spacing:1px;">
          <strong>DISCLAIMER:</strong>
          This email is intended solely for the recipient(s) and may contain
            confidential information. By reading this email, you agree to treat
            its contents as confidential. For our full email disclaimer, please
            visit: 
          <a href="https://www.prognosis-biotech.com/disclaimer"
            style="color:#3db3f7; text-decoration:underline;">
            https://www.prognosis-biotech.com/disclaimer
          </a>
        </td>
      </tr>

    </table>
  `.trim();
}
