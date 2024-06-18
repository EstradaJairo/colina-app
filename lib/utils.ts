import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { UrlQueryParams, RemoveUrlQueryParams } from "@/types";
import { DateTime } from "luxon";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  );
}

export function removeKeysFromQuery({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  );
}

export function formatDate(dateString: string) {
  const date = DateTime.fromISO(dateString);
  return date.toFormat("MM / dd / yyyy");
}

export function formatTime(timeString: string) {
  const time = DateTime.fromFormat(timeString, "HH:mm");
  return time.toFormat("h:mm a");
}

export async function downloadPDF(jsonFile: any, props: any, variant: string) {
  const doc = new jsPDF("landscape", "px", "letter");

  // Define the styles
  const styles = {
    font: "Manrope",
    fontStyle: "normal",
    fontSize: 23.57,
    color: "#64748B",
    lineHeight: 1.5,
  };

  // Add a custom font if needed
  // doc.addFont('path-to-manrope-font.ttf', 'Manrope', 'normal');
  // doc.setFont('Manrope');

  // Add header with logo and variant
  const img = new Image();
  img.src = "https://i.imgur.com/LrS9IUe.png";
  img.onload = () => {
    doc.addImage(img, "PNG", 10, 15, 150, 20); // Adjust the position and size as needed
    doc.text(variant, doc.internal.pageSize.getWidth() / 2, 25, {
      align: "center",
    });

    // Add horizontal lines
    doc.setDrawColor("#007C85");
    doc.setLineWidth(3);
    doc.line(10, 40, doc.internal.pageSize.getWidth() - 10, 40);
    doc.setLineWidth(1);
    doc.line(10, 45, doc.internal.pageSize.getWidth() - 10, 45);

    // Define table columns and rows
    const columns = props.map((prop: string) => prop);
    const rows = jsonFile.map((item: any) =>
      columns.map((col: string | number) => item[col]),
    );

    // Add table to PDF
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 60,
      headStyles: {
        fillColor: [100, 116, 139],
        textColor: [255, 255, 255],
        fontSize: styles.fontSize,
        fontStyle: "normal",
      },
      bodyStyles: {
        textColor: [100, 116, 139],
        fontSize: styles.fontSize,
        fontStyle: "normal",
      },
      styles: {
        font: styles.font,
        cellPadding: 5,
      },
      theme: "striped",
    });

    // Save the PDF with the specified variant as the filename
    doc.save(`${variant}.pdf`);
  };
}
