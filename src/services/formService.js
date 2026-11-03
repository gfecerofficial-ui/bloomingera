/**
 * Central Form Intake Service for Blooming Era Preschools
 * Submits inquiries to Google Sheets Webhook and dispatches email alerts to gfecerofficial@gmail.com
 */

const GOOGLE_SCRIPT_URL = 
  import.meta.env.VITE_GOOGLE_SCRIPT_URL || 
  "https://script.google.com/macros/s/AKfycby0nHHq9x55pOYlA_u2TP3OpI7F-pJiwRGT8Y77P9tM_6cLJqvryjkDMYfUZN0BYuwwNA/exec";

/**
 * Submit form data to Google Sheets & Email Alert Webhook
 * @param {Object} formData Form fields matching the intake schema
 * @returns {Promise<{ success: boolean, enquiryId?: string, purpose?: string, error?: string }>}
 */
export async function submitForm(formData) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error(`Server returned status ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "success") {
      return {
        success: true,
        enquiryId: data.enquiryId,
        purpose: data.purpose,
        timestamp: data.timestamp,
      };
    } else {
      return {
        success: false,
        error: data.message || "Unable to save inquiry. Please try again.",
      };
    }
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error.message || "Network error. Please check your connection and try again.",
    };
  }
}
