import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Droplet, User, Building2,
  CheckCircle2, FileText, QrCode, Download, Printer,
  ShieldCheck, CreditCard
} from 'lucide-react';

export function InvoiceDetails() {
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    window.print();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full pb-10">
      {/* Top Header Actions (Products page UI style) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 print:hidden">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/invoices')}
            className="w-10 h-10 bg-white border border-gray-200 text-gray-600 flex items-center justify-center rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
            title="Back to Invoices"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">Invoice Details</h1>
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                Paid
              </span>
            </div>
            <p className="text-sm text-gray-500 font-medium">Invoice #INV-0108 • Rohit Sharma • 28/05/2025</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Printer className="w-4 h-4 text-gray-500" /> Print
          </button>
          <button
            onClick={handleDownloadPdf}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm shadow-primary-600/20 hover:shadow-md hover:shadow-primary-600/30"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>
      </div>

      {/* Invoice Document Wrapper - Modern Corporate UI Style */}
      <div
        id="invoice-print-area"
        ref={componentRef}
        className="bg-white rounded-2xl shadow-[0_4px_25px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden w-full font-sans print:shadow-none print:border-none print:rounded-none"
      >
        {/* ================= PAGE 1: TAX INVOICE ================= */}
        <div className="p-6 sm:p-10 lg:p-12 print:p-8 space-y-8">

          {/* Top Corporate Branding & Metadata Banner */}
          <div className="flex flex-col sm:flex-row print:flex-row justify-between items-start sm:items-center print:items-center pb-8 border-b border-gray-200 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                <Droplet className="w-8 h-8 text-primary-400 fill-primary-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">RO Water Reminders</h2>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">Pvt Ltd</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Clean Water | Healthy Life • ISO 9001:2015 Certified</p>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">GSTIN: 29AAAAA0000A1Z5 • CIN: U74999KA2024PTC123456</p>
              </div>
            </div>

            <div className="text-left sm:text-right print:text-right shrink-0">
              <span className="inline-block px-3.5 py-1 rounded-md text-xs font-extrabold uppercase tracking-widest bg-slate-900 text-white mb-2">
                Tax Invoice
              </span>
              <p className="text-2xl font-black text-slate-900 tracking-tight">INV-0108</p>
              <p className="text-xs text-slate-500 font-medium mt-1">Original for Recipient</p>
            </div>
          </div>

          {/* Invoice Quick Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Invoice Date</p>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">28 May 2025</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Due Date</p>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">28 May 2025</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Payment Status</p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Paid in Full
              </span>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Amount</p>
              <p className="text-base font-black text-slate-900 mt-0.5">₹ 8,962.10</p>
            </div>
          </div>

          {/* Billed To & Issued By Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 items-stretch">
            {/* Customer (Billed To) */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-[0_1px_3px_rgb(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Billed To (Customer)</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary-600">
                    <User className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Customer Name</span>
                    <span className="font-bold text-slate-900">: Rohit Sharma</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Phone Number</span>
                    <span className="font-semibold text-slate-900">: +91 98765 43210</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Email Address</span>
                    <span className="font-medium text-slate-900">: rohit.sharma@example.com</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Address</span>
                    <span className="font-medium text-slate-900 leading-relaxed">: Shop No. 12, Green Park, Bangalore, Karnataka - 560001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Issuer (From) */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Issued By</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-600">
                    <Building2 className="w-3.5 h-3.5" /> Corporate Office
                  </span>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Company Name</span>
                    <span className="font-bold text-slate-900">: RO Water Reminders Pvt Ltd</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Phone Number</span>
                    <span className="font-semibold text-slate-900">: +91 91234 56789</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Email Address</span>
                    <span className="font-medium text-slate-900">: support@rowaterreminders.com</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] items-baseline gap-2">
                    <span className="text-slate-500 font-medium">Address</span>
                    <span className="font-medium text-slate-900 leading-relaxed">: 123, Water Purifier Lane, Green Park, Bangalore, Karnataka - 560001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Line Items Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto print:overflow-visible">
              <table className="w-full text-left whitespace-nowrap text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white text-[12px] uppercase tracking-wider">
                    <th className="py-3.5 px-4 w-12 text-center font-bold">#</th>
                    <th className="py-3.5 px-4 font-bold">Item Description</th>
                    <th className="py-3.5 px-4 font-bold">Specification / Model</th>
                    <th className="py-3.5 px-4 text-center font-bold w-20">Qty</th>
                    <th className="py-3.5 px-4 text-right font-bold w-32">Rate (₹)</th>
                    <th className="py-3.5 px-4 text-right font-bold w-36">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">1</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">RO Membrane</td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-500">AQUA-RO-100 (100 GPD)</td>
                    <td className="py-3.5 px-4 text-center font-medium">1</td>
                    <td className="py-3.5 px-4 text-right font-medium">2,499.00</td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-900">2,499.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">2</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Sediment Filter</td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-500">SF-103 (PP Filter)</td>
                    <td className="py-3.5 px-4 text-center font-medium">2</td>
                    <td className="py-3.5 px-4 text-right font-medium">499.00</td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-900">998.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">3</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Carbon Filter</td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-500">CF-104 (Activated Carbon)</td>
                    <td className="py-3.5 px-4 text-center font-medium">1</td>
                    <td className="py-3.5 px-4 text-right font-medium">1,499.00</td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-900">1,499.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">4</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Pre Filter</td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-500">PF-106 (PP Filter)</td>
                    <td className="py-3.5 px-4 text-center font-medium">1</td>
                    <td className="py-3.5 px-4 text-right font-medium">399.00</td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-900">399.00</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">5</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">Service Charge</td>
                    <td className="py-3.5 px-4 text-xs font-medium text-slate-500">Annual Service & Deep Cleaning</td>
                    <td className="py-3.5 px-4 text-center font-medium">1</td>
                    <td className="py-3.5 px-4 text-right font-medium">1,200.00</td>
                    <td className="py-3.5 px-4 text-right font-bold text-slate-900">1,200.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment & Financials Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-6 items-start">

            {/* Left: Payment Confirmation & Banking */}
            <div className="md:col-span-7 print:col-span-7 space-y-4">
              <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950">Payment Receipt Details</h4>
                    <p className="text-xs text-emerald-700 font-medium">Transaction verified & settled</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-slate-700 pt-2 border-t border-emerald-200/60">
                  <div>
                    <span className="text-slate-500 font-medium">Payment Mode:</span>
                    <span className="font-bold text-slate-900 ml-1.5">UPI</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-medium">Paid Date:</span>
                    <span className="font-bold text-slate-900 ml-1.5">28/05/2025</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-slate-500 font-medium">Transaction ID:</span>
                    <span className="font-mono font-bold text-slate-900 ml-1.5">UPI1234567890</span>
                  </div>
                </div>
              </div>

              {/* Service Support Contact Box */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 text-xs text-slate-600 flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-slate-900">Customer Care & Service Helpline</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">+91 91234 56789 • support@rowaterreminders.com</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <QrCode className="w-8 h-8 text-slate-800" />
                  <span className="text-[10px] text-slate-500 font-semibold leading-tight">Scan for<br />Support</span>
                </div>
              </div>
            </div>

            {/* Right: Calculations Summary */}
            <div className="md:col-span-5 print:col-span-5 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="p-4 space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Subtotal</span>
                  <span className="text-slate-900">₹ 7,595.00</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>Discount</span>
                  <span className="text-emerald-600">₹ 0.00</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>CGST (9%)</span>
                  <span className="text-slate-900">₹ 683.55</span>
                </div>
                <div className="flex justify-between text-slate-600 font-medium">
                  <span>SGST (9%)</span>
                  <span className="text-slate-900">₹ 683.55</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-between text-slate-600 font-medium">
                  <span>Total Tax (18%)</span>
                  <span className="text-slate-900">₹ 1,367.10</span>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Total Amount</p>
                  <p className="text-[10px] text-slate-400">Inclusive of all taxes</p>
                </div>
                <span className="text-xl sm:text-2xl font-black text-white">₹ 8,962.10</span>
              </div>
            </div>

          </div>

          {/* Terms & Authorized Signatory */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 items-end">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Terms & Conditions</h4>
              <ul className="text-[11px] text-slate-500 space-y-1 list-disc pl-4 leading-relaxed">
                <li>Payment is due within 30 days from the invoice date.</li>
                <li>Warranty applicable as per manufacturer product terms & conditions.</li>
                <li>For any service or installation issues, please notify us within 7 days.</li>
                <li>This is a computer-generated tax invoice and requires no physical seal.</li>
              </ul>
            </div>

            <div className="text-left md:text-right flex flex-col items-start md:items-end">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">For RO Water Reminders Pvt Ltd</p>
              <div className="h-12 flex items-center justify-start md:justify-end opacity-80">
                <svg viewBox="0 0 200 60" className="w-32 h-10 stroke-slate-800 fill-none" strokeWidth="2">
                  <path d="M 20 40 Q 40 10, 60 30 T 90 20 T 130 40 Q 150 20, 180 30" strokeLinecap="round" />
                  <path d="M 60 40 L 70 10" strokeLinecap="round" />
                </svg>
              </div>
              <div className="w-48 h-px bg-slate-300 mt-1 mb-1"></div>
              <p className="text-xs font-bold text-slate-900">Authorized Signatory</p>
            </div>
          </div>

        </div>

        {/* ================= PAGE 2: ANNUAL MAINTENANCE CONTRACT (AMC) ================= */}
        <div className="print:break-before-page bg-white border-t-8 border-slate-100 border-dashed print:border-none p-6 sm:p-10 lg:p-12 print:p-8 space-y-8 min-h-0 print:min-h-[1056px] flex flex-col justify-between">

          <div className="space-y-8">
            {/* AMC Corporate Header */}
            <div className="flex flex-col sm:flex-row print:flex-row justify-between items-start sm:items-center print:items-center pb-6 border-b border-slate-200 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Annual Maintenance Contract (AMC)</h3>
                  <p className="text-xs text-slate-500 font-medium">Service Agreement & Warranty Terms • Attached to Invoice #INV-0108</p>
                </div>
              </div>
              <div className="text-left sm:text-right print:text-right shrink-0">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Contract Validity</span>
                <p className="text-sm font-extrabold text-slate-900">1 Year (28/05/2025 - 27/05/2026)</p>
              </div>
            </div>

            {/* Scope of Coverage */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> AMC Coverage & Scheduled Deliverables
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed list-none">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                  <span><strong>Comprehensive Period:</strong> Covers periodic preventive maintenance and free servicing of your RO water purifier for a complete duration of 1 year from the invoice date.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                  <span><strong>Preventive Visits:</strong> Includes exactly 3 free scheduled preventive maintenance inspections (one every 4 months) with water TDS monitoring and flow check.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                  <span><strong>Consumables Covered:</strong> Free replacement of 1 pre-filter PP candle and 1 set of inline sediment/carbon filter during the contract tenure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 shrink-0"></span>
                  <span><strong>Breakdown Service:</strong> Priority breakdown attendance within 24–48 hours with zero labor charges during normal business hours.</span>
                </li>
              </ul>
            </div>

            {/* Exclusions */}
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" /> Standard Exclusions & Specific Terms
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed list-none">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                  <span>RO Membrane replacement is excluded from standard AMC and is charged as per prevailing catalog price unless covered under a specialized comprehensive plan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                  <span>Damages arising from high input voltage fluctuations, unauthorized tampering, pest/rodent damage, or dry run without water supply are chargeable.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                  <span>Unit relocation/shifting charges between residences are not covered in the maintenance contract.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                  <span>This contract is non-transferable and non-refundable once activated.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dual Signatures Section */}
          <div className="pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Customer Acceptance</p>
              <p className="text-[11px] text-slate-500 mb-12">I accept the terms and conditions outlined in this Annual Maintenance Contract.</p>
              <div className="w-56 h-px bg-slate-300 mb-1"></div>
              <p className="text-xs font-bold text-slate-900">Rohit Sharma</p>
              <p className="text-[10px] text-slate-500">Customer Signature</p>
            </div>

            <div className="text-left md:text-right flex flex-col items-start md:items-end">
              <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">For RO Water Reminders Pvt Ltd</p>
              <div className="h-12 flex items-center justify-start md:justify-end opacity-80">
                <svg viewBox="0 0 200 60" className="w-36 h-12 stroke-slate-800 fill-none" strokeWidth="2">
                  <path d="M 20 40 Q 40 10, 60 30 T 90 20 T 130 40 Q 150 20, 180 30" strokeLinecap="round" />
                  <path d="M 60 40 L 70 10" strokeLinecap="round" />
                </svg>
              </div>
              <div className="w-56 h-px bg-slate-300 mt-1 mb-1"></div>
              <p className="text-xs font-bold text-slate-900">Authorized Signatory</p>
              <p className="text-[10px] text-slate-500">Service Operations Department</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
