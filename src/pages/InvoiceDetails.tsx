import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Droplet, User, Phone, Mail, MapPin, Building2,
  ShoppingCart, CheckCircle2, FileText, QrCode, Download, Printer
} from 'lucide-react';

export function InvoiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    // html2canvas (used by html2pdf) doesn't support Tailwind v4's oklch() colors.
    // Falling back to native browser print which allows users to Save as PDF perfectly.
    window.print();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full pb-8">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6 print:hidden">
        <button
          onClick={() => navigate('/invoices')}
          className="flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Invoices
        </button>
        <div className="flex items-center gap-3">
          <button onClick={handlePrint} className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button onClick={handleDownloadPdf} className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20">
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      {/* Invoice Document Wrapper */}
      <div id="invoice-print-area" ref={componentRef} className="bg-white rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden w-full font-sans">

        {/* Top Branding Section */}
        <div className="p-4 sm:p-8 print:p-8 pb-0 flex flex-col sm:flex-row print:flex-row justify-between items-start gap-4 sm:gap-0 print:gap-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-[60%] bg-blue-500"></div>
                <Droplet className="w-5 h-5 sm:w-6 sm:h-6 text-white absolute z-10 fill-current" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">RO Water Reminders</h1>
              <p className="text-gray-500 font-medium text-xs sm:text-sm">Clean Water | Healthy Life</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="text-blue-400">
              <Droplet className="w-8 h-8 sm:w-10 sm:h-10 stroke-1" />
            </div>
            <div className="text-right text-xs text-gray-400 font-medium leading-relaxed border-l border-gray-200 pl-4">
              <p>RO Service | Filter Replacement</p>
              <p>AMC | Water Purifier Sales</p>
            </div>
          </div>
        </div>

        {/* Invoice Title & Meta */}
        <div className="px-4 sm:px-8 print:px-8 mt-6 sm:mt-10 print:mt-10 flex flex-col sm:flex-row print:flex-row justify-between items-start sm:items-end print:items-end gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-900 tracking-tight">INVOICE</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Thank you for choosing our services!</p>
          </div>

          <div className="bg-blue-50/50 rounded-xl p-3 sm:p-4 print:p-4 flex flex-wrap sm:flex-nowrap print:flex-nowrap gap-4 sm:gap-8 print:gap-8 border border-blue-100/50 w-full sm:w-auto justify-between">
            <div>
              <p className="text-xs text-blue-600 font-bold mb-1">Invoice No.</p>
              <p className="text-sm font-black text-blue-900">INV-0108</p>
            </div>
            <div className="hidden sm:block print:block w-px bg-blue-200/50"></div>
            <div>
              <p className="text-xs text-blue-600 font-bold mb-1">Invoice Date</p>
              <p className="text-sm font-black text-blue-900">28/05/2025</p>
            </div>
            <div className="hidden sm:block print:block w-px bg-blue-200/50"></div>
            <div>
              <p className="text-xs text-blue-600 font-bold mb-1">Due Date</p>
              <p className="text-sm font-black text-blue-900">28/05/2025</p>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="px-4 sm:px-8 print:px-8 mt-6 sm:mt-10 print:mt-10 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6">
          {/* Customer Details */}
          <div className="border border-blue-100 rounded-2xl p-5 sm:p-6 print:p-6 bg-white relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 fill-current" />
              </div>
              <h3 className="font-bold text-blue-900">Customer Details</h3>
            </div>

            <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-3">Rohit Sharma</h4>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 fill-current" />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 fill-current" />
                <p>Shop No. 12, Green Park, Bangalore,<br />Karnataka - 560001</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 fill-current" />
                <p className="break-all">rohit.sharma@example.com</p>
              </div>
            </div>
          </div>

          {/* From Details */}
          <div className="bg-blue-50/30 rounded-2xl p-5 sm:p-6 print:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-gray-500 font-medium text-sm">From</span>
            </div>

            <h4 className="font-bold text-blue-900 text-base sm:text-lg mb-3">RO Water Reminders</h4>

            <div className="space-y-3 text-sm text-gray-600">
              <p>123, Water Purifier Lane, Green Park,<br />Bangalore, Karnataka - 560001</p>
              <div className="flex gap-3 pt-2">
                <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 fill-current" />
                <p>+91 91234 56789</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 fill-current" />
                <p className="break-all">support@rowaterreminders.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="px-4 sm:px-8 print:px-8 mt-6 sm:mt-10 print:mt-10">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 fill-blue-600" />
            <h3 className="font-bold text-blue-900 text-base sm:text-lg">Products / Services</h3>
          </div>

          <div className="overflow-x-auto print:overflow-visible rounded-xl border border-blue-50">
            <table className="w-full text-sm min-w-[580px] print:min-w-0">
              <thead className="bg-blue-50/50">
                <tr>
                  <th className="py-3 px-4 text-left font-bold text-blue-900 w-16">#</th>
                  <th className="py-3 px-4 text-left font-bold text-blue-900">Product / Service</th>
                  <th className="py-3 px-4 text-left font-bold text-blue-900">Description</th>
                  <th className="py-3 px-4 text-center font-bold text-blue-900 w-24">Quantity</th>
                  <th className="py-3 px-4 text-right font-bold text-blue-900 w-32">Unit Price (₹)</th>
                  <th className="py-3 px-4 text-right font-bold text-blue-900 w-32">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 text-gray-600">
                <tr>
                  <td className="py-4 px-4 text-blue-400 font-medium">1</td>
                  <td className="py-4 px-4">RO Membrane</td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">AQUA-RO-100</p>
                    <p className="text-xs text-gray-400">(100 GPD)</p>
                  </td>
                  <td className="py-4 px-4 text-center">1</td>
                  <td className="py-4 px-4 text-right">2,499.00</td>
                  <td className="py-4 px-4 text-right text-gray-900">2,499.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-blue-400 font-medium">2</td>
                  <td className="py-4 px-4">Sediment Filter</td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">SF-103</p>
                    <p className="text-xs text-gray-400">(PP Filter)</p>
                  </td>
                  <td className="py-4 px-4 text-center">2</td>
                  <td className="py-4 px-4 text-right">499.00</td>
                  <td className="py-4 px-4 text-right text-gray-900">998.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-blue-400 font-medium">3</td>
                  <td className="py-4 px-4">Carbon Filter</td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">CF-104</p>
                    <p className="text-xs text-gray-400">(Activated Carbon)</p>
                  </td>
                  <td className="py-4 px-4 text-center">1</td>
                  <td className="py-4 px-4 text-right">1,499.00</td>
                  <td className="py-4 px-4 text-right text-gray-900">1,499.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-blue-400 font-medium">4</td>
                  <td className="py-4 px-4">Pre Filter</td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">PF-106</p>
                    <p className="text-xs text-gray-400">(PP Filter)</p>
                  </td>
                  <td className="py-4 px-4 text-center">1</td>
                  <td className="py-4 px-4 text-right">399.00</td>
                  <td className="py-4 px-4 text-right text-gray-900">399.00</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-blue-400 font-medium">5</td>
                  <td className="py-4 px-4">Service Charge</td>
                  <td className="py-4 px-4">
                    <p className="text-gray-900">Annual Service & Cleaning</p>
                  </td>
                  <td className="py-4 px-4 text-center">1</td>
                  <td className="py-4 px-4 text-right">1,200.00</td>
                  <td className="py-4 px-4 text-right text-gray-900">1,200.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals & Payment Info */}
        <div className="px-4 sm:px-8 print:px-8 mt-6 flex flex-col md:flex-row print:flex-row justify-between items-stretch md:items-start print:items-start gap-6 md:gap-8 print:gap-8">
          {/* Payment Status */}
          <div className="w-full md:max-w-md print:max-w-md bg-emerald-50/30 border border-emerald-100 rounded-2xl p-4 sm:p-5 print:p-5 mt-2">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 fill-emerald-100 text-emerald-600" />
              </div>
              <h3 className="font-bold text-emerald-700 text-base sm:text-lg flex-1">Payment Status</h3>
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full">
                Paid
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="w-28 sm:w-32 text-gray-500">Payment Date</span>
                <span className="text-gray-400 mr-2">:</span>
                <span className="font-medium text-emerald-900">28/05/2025</span>
              </div>
              <div className="flex">
                <span className="w-28 sm:w-32 text-gray-500">Payment Mode</span>
                <span className="text-gray-400 mr-2">:</span>
                <span className="font-medium text-emerald-900">UPI</span>
              </div>
              <div className="flex">
                <span className="w-28 sm:w-32 text-gray-500">Transaction ID</span>
                <span className="text-gray-400 mr-2">:</span>
                <span className="font-medium text-emerald-900">UPI1234567890</span>
              </div>
            </div>
          </div>

          {/* Totals */}
          <div className="w-full md:w-80 print:w-80 border border-blue-50 rounded-2xl overflow-hidden">
            <div className="p-4 space-y-3 bg-white text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">7,595.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount</span>
                <span className="font-medium text-gray-900">0.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (GST 18%)</span>
                <span className="font-medium text-gray-900">1,367.10</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <span className="font-bold text-blue-100">Total Amount</span>
              <span className="text-xl font-black">₹ 8,962.10</span>
            </div>
          </div>
        </div>

        {/* Footer Notes & Sign */}
        <div className="px-4 sm:px-8 print:px-8 mt-6 sm:mt-10 print:mt-10 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 items-start pb-8 sm:pb-10 print:pb-10">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-blue-800" />
                <h4 className="font-bold text-blue-900">Terms & Conditions</h4>
              </div>
              <ul className="text-xs text-blue-800/80 space-y-1.5 list-disc pl-4">
                <li>Payment is due within 30 days from the invoice date.</li>
                <li>Warranty applicable as per product terms and conditions.</li>
                <li>For any service-related issues, please contact us within 7 days.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-6 sm:gap-4 print:gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-blue-800" />
                <h4 className="font-bold text-blue-900">Notes</h4>
              </div>
              <p className="text-xs text-blue-800/80 mb-4">
                Thank you for your trust in our services.<br />
                For any support or service requests, please contact us.
              </p>

              <p className="text-xs font-bold text-blue-900 mb-2">For Service Support:</p>
              <div className="space-y-1.5 text-xs text-blue-800/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-blue-600" />
                  <span>+91 91234 56789</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 flex items-center justify-center bg-green-500 rounded-full text-white text-[8px] font-bold">W</span>
                  <span>WhatsApp: +91 91234 56789</span>
                </div>
              </div>
            </div>

            <div className="text-left sm:text-center print:text-center pt-2">
              <p className="text-xs text-blue-800/80 mb-2">Authorized Signature</p>
              <div className="h-16 flex items-center justify-start sm:justify-center print:justify-center opacity-70">
                <svg viewBox="0 0 200 60" className="w-32 h-12 stroke-blue-800 fill-none" strokeWidth="2">
                  <path d="M 20 40 Q 40 10, 60 30 T 90 20 T 130 40 Q 150 20, 180 30" strokeLinecap="round" />
                  <path d="M 60 40 L 70 10" strokeLinecap="round" />
                </svg>
              </div>
              <div className="w-full sm:w-auto max-w-[200px] sm:max-w-none h-px bg-blue-200 mt-2 mb-1"></div>
              <p className="text-xs font-bold text-blue-900">RO Water Reminders</p>
              <p className="text-[10px] text-blue-800/60">Authorized Signatory</p>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative overflow-hidden bg-blue-50/50 pt-8 pb-6 px-4 sm:px-8 print:px-8 flex flex-col sm:flex-row print:flex-row justify-between items-center gap-4 sm:gap-0 print:gap-0 border-t border-blue-100">
          {/* Decorative wave background */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0" style={{ transform: 'translateY(-50%)' }}>
            <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-100/50"></path>
            </svg>
          </div>

          <div className="relative z-10 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
              <Droplet className="w-5 h-5 text-white fill-current" />
            </div>
            <div>
              <p className="text-blue-600 font-bold text-xs sm:text-sm">Clean Water Today</p>
              <p className="text-blue-900 font-black text-xs sm:text-sm">For a Healthier Tomorrow</p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <QrCode className="w-10 h-10 sm:w-12 sm:h-12 text-blue-900" />
            <div className="text-[10px] text-blue-800 font-medium text-left">
              <p>Scan for</p>
              <p>Service Updates</p>
              <p>& Reminders</p>
            </div>
          </div>
        </div>

        {/* --- Additional Page: AMC & Terms --- */}
        <div className="print:break-before-page bg-white mt-8 sm:mt-12 print:mt-0 pt-8 sm:pt-12 print:pt-16 pb-12 sm:pb-16 print:pb-16 border-t-8 border-blue-100 border-dashed print:border-none min-h-0 print:min-h-[1056px] flex flex-col">
          <div className="px-4 sm:px-8 print:px-8 flex-1">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">Annual Maintenance Contract</h2>
                <p className="text-gray-500 font-medium text-xs sm:text-sm">Terms, Conditions & Service Agreement</p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Coverage section */}
              <div className="bg-blue-50/40 rounded-2xl p-5 sm:p-8 print:p-8 border border-blue-100">
                <h3 className="font-bold text-blue-900 text-lg sm:text-xl mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0" />
                  AMC Coverage Details
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700 list-none">
                  <li className="flex gap-3"><span className="text-blue-500 mt-1">•</span> This Annual Maintenance Contract covers periodic maintenance and free servicing of your RO purifier for a duration of 1 year from the invoice date.</li>
                  <li className="flex gap-3"><span className="text-blue-500 mt-1">•</span> Includes exactly 3 free preventive maintenance visits (one visit every 4 months).</li>
                  <li className="flex gap-3"><span className="text-blue-500 mt-1">•</span> Free replacement of pre-filter candle (once) and inline carbon/sediment filters (once) during the active contract period.</li>
                  <li className="flex gap-3"><span className="text-blue-500 mt-1">•</span> Breakdown calls will be attended to free of charge within the AMC period.</li>
                </ul>
              </div>

              {/* Exclusions section */}
              <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 print:p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-4 flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 shrink-0" />
                  Exclusions & Conditions
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-600 list-none">
                  <li className="flex gap-3"><span className="text-gray-400 mt-1">•</span> RO membrane replacement is strictly NOT covered under this basic AMC unless explicitly specified in a comprehensive package.</li>
                  <li className="flex gap-3"><span className="text-gray-400 mt-1">•</span> Any physical damage, rat bites, or damage due to electrical fluctuations/short-circuits will be charged extra.</li>
                  <li className="flex gap-3"><span className="text-gray-400 mt-1">•</span> Shifting of the machine from one location to another will incur standard installation/uninstallation charges.</li>
                  <li className="flex gap-3"><span className="text-gray-400 mt-1">•</span> The contract is non-transferable and non-refundable under any circumstances.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 sm:mt-24 print:mt-24 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 items-start md:items-end print:items-end px-0 sm:px-8 print:px-8">
              <div>
                <p className="font-bold text-gray-900 mb-2">Customer Declaration</p>
                <p className="text-xs text-gray-500 mb-8 sm:mb-16 max-w-sm">I have read and understood the terms and conditions of this Annual Maintenance Contract.</p>
                <div className="w-full max-w-xs h-px bg-gray-300"></div>
                <p className="font-bold text-blue-900 mt-3">Customer Signature</p>
              </div>

              <div className="text-left md:text-right print:text-right flex flex-col items-start md:items-end print:items-end">
                {/* Simulated signature */}
                <div className="h-16 flex items-center justify-start md:justify-end print:justify-end opacity-70 mb-2">
                  <svg viewBox="0 0 200 60" className="w-40 h-16 stroke-blue-800 fill-none" strokeWidth="2">
                    <path d="M 20 40 Q 40 10, 60 30 T 90 20 T 130 40 Q 150 20, 180 30" strokeLinecap="round" />
                    <path d="M 60 40 L 70 10" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="w-full max-w-xs h-px bg-gray-300"></div>
                <p className="font-bold text-blue-900 mt-3">Authorized Signatory</p>
                <p className="text-sm text-gray-500">RO Water Reminders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
