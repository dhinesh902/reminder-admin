import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, User, Building2,
  CheckCircle2, FileText, QrCode, Download, Printer,
  ShieldCheck, CreditCard, Calendar, BadgeCheck, Landmark,
  Loader2
} from 'lucide-react';

export function InvoiceDetails() {
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadPdf = async () => {
    if (!componentRef.current) {
      window.print();
      return;
    }

    try {
      setIsGeneratingPdf(true);
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default;
      const opt = {
        margin: 8,
        filename: 'Tax_Invoice_INV-0108.pdf',
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
      };
      await html2pdf().set(opt).from(componentRef.current).save();
    } catch {
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full pb-12">
      {/* Top Header Actions (Products page UI style) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 print:hidden">
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => navigate('/invoices')}
            className="w-10 h-10 bg-white border border-slate-200 text-slate-700 flex items-center justify-center rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
            title="Back to Invoices"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">Invoice Details</h1>
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                Paid
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              Tax Invoice #INV-0108 • Rohit Sharma • 28 May 2025
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
          >
            <Printer className="w-4 h-4 text-slate-600" /> Print
          </button>
          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-75 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/35"
          >
            {isGeneratingPdf ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Generating PDF...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" /> Download PDF
              </>
            )}
          </button>
        </div>
      </div>

      {/* Corporate Invoice Document Workspace Container */}
      <div className="bg-slate-200/60 p-2 sm:p-6 lg:p-8 rounded-3xl border border-slate-200/80 print:bg-white print:p-0 print:border-none print:rounded-none">
        
        {/* Invoice Document Card */}
        <div
          id="invoice-print-area"
          ref={componentRef}
          className="bg-white rounded-2xl shadow-xl shadow-slate-300/30 border border-slate-200/80 overflow-hidden w-full max-w-[960px] mx-auto font-sans print:shadow-none print:border-none print:rounded-none print:max-w-none print:w-full"
        >
          {/* Top Decorative Corporate Bar */}
          <div className="h-2 w-full bg-gradient-to-r from-slate-900 via-primary-700 to-slate-900 print:bg-slate-900 print:h-2" />

          {/* ================= PAGE 1: TAX INVOICE ================= */}
          <div className="p-6 sm:p-10 lg:p-12 print:p-6 print:min-h-[1050px] print:flex print:flex-col print:justify-between print:border print:border-slate-300 print:rounded-none print:break-after-page space-y-8 print:space-y-4">

            <div className="space-y-8 print:space-y-4">
              {/* Top Corporate Branding & Metadata Header */}
              <div className="flex flex-col sm:flex-row print:flex-row justify-between items-start sm:items-start print:items-start pb-8 print:pb-4 border-b-2 border-slate-200 gap-6 print:gap-4">
                
                {/* Company Logo & Identity */}
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 print:w-14 print:h-14 bg-white border-2 border-slate-200 rounded-2xl print:rounded-xl flex items-center justify-center p-2.5 shrink-0 shadow-sm">
                    <img src="/ro-logo.png" alt="RO Water Reminders Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl print:text-xl font-black text-slate-900 tracking-tight">RO Water Reminders</h2>
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-900 text-white uppercase tracking-wider">
                        Pvt Ltd
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-primary-700 mt-0.5">
                      Clean Water | Healthy Life • An ISO 9001:2015 Certified Company
                    </p>
                    <div className="text-[11px] print:text-[10px] text-slate-500 font-medium mt-1.5 space-y-0.5">
                      <p><strong className="text-slate-700">GSTIN:</strong> 29AAAAA0000A1Z5 • <strong className="text-slate-700">PAN:</strong> AAAAA0000A</p>
                      <p><strong className="text-slate-700">CIN:</strong> U74999KA2024PTC123456 • <strong className="text-slate-700">MSME:</strong> UDYAM-KR-03-0012345</p>
                    </div>
                  </div>
                </div>

                {/* Invoice Number & Tax Type */}
                <div className="text-left sm:text-right print:text-right shrink-0 bg-slate-50 sm:bg-transparent print:bg-transparent p-3 sm:p-0 rounded-xl w-full sm:w-auto">
                  <span className="inline-block px-3.5 py-1 rounded-md text-[11px] font-black uppercase tracking-widest bg-slate-900 text-white shadow-xs mb-2">
                    Tax Invoice
                  </span>
                  <p className="text-3xl print:text-2xl font-black text-slate-900 tracking-tight leading-none">INV-0108</p>
                  <p className="text-[11px] font-bold text-slate-500 mt-2 print:mt-1 uppercase tracking-wide">
                    Original for Recipient
                  </p>
                  <p className="text-[11px] print:text-[10px] text-slate-400 font-medium">Place of Supply: Karnataka (Code: 29)</p>
                </div>
              </div>

              {/* Invoice Quick Summary Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 print:grid-cols-4 gap-4 print:gap-3 p-4 print:p-3 rounded-xl bg-slate-50/90 border border-slate-200">
                <div className="border-r border-slate-200/70 last:border-none pr-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invoice Date</p>
                  <p className="text-sm print:text-xs font-extrabold text-slate-900 mt-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary-600 shrink-0" />
                    28 May 2025
                  </p>
                </div>
                <div className="border-r border-slate-200/70 last:border-none pr-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Due Date</p>
                  <p className="text-sm print:text-xs font-extrabold text-slate-900 mt-1">28 May 2025</p>
                </div>
                <div className="border-r border-slate-200/70 last:border-none pr-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Payment Status</p>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs print:text-[11px] font-bold bg-emerald-100 text-emerald-800 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Paid in Full
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invoice Amount</p>
                  <p className="text-base print:text-sm font-black text-slate-900 mt-0.5 tracking-tight">₹ 8,962.10</p>
                </div>
              </div>

              {/* Billed To & Issued By Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 print:gap-4 items-stretch">
                
                {/* Customer (Billed To) */}
                <div className="p-5 print:p-4 rounded-2xl print:rounded-xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 print:pb-2 mb-3 border-b border-slate-100">
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary-600"></span>
                        Billed To (Customer)
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                        <User className="w-3 h-3" /> Verified Client
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs print:text-[11px]">
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Customer Name</span>
                        <span className="font-bold text-slate-900">: Rohit Sharma</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Phone Number</span>
                        <span className="font-semibold text-slate-900">: +91 98765 43210</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Email Address</span>
                        <span className="font-medium text-slate-800">: rohit.sharma@example.com</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Billing Address</span>
                        <span className="font-medium text-slate-800 leading-relaxed">: Shop No. 12, Green Park, Bangalore, Karnataka - 560001</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Issuer (From) */}
                <div className="p-5 print:p-4 rounded-2xl print:rounded-xl border border-slate-200 bg-slate-50/60 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 print:pb-2 mb-3 border-b border-slate-200">
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                        Issued By
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded-md">
                        <Building2 className="w-3 h-3" /> Corporate HQ
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs print:text-[11px]">
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Company Name</span>
                        <span className="font-bold text-slate-900">: RO Water Reminders Pvt Ltd</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Support Contact</span>
                        <span className="font-semibold text-slate-900">: +91 91234 56789</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Email Support</span>
                        <span className="font-medium text-slate-800">: support@rowaterreminders.com</span>
                      </div>
                      <div className="grid grid-cols-[120px_1fr] print:grid-cols-[105px_1fr] items-baseline gap-2">
                        <span className="text-slate-400 font-semibold text-[11px] print:text-[10px] uppercase tracking-wide">Registered Office</span>
                        <span className="font-medium text-slate-800 leading-relaxed">: 123, Water Purifier Lane, Green Park, Bangalore, Karnataka - 560001</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corporate Line Items Table */}
              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs print:border-slate-300">
                <div className="overflow-x-auto print:overflow-visible">
                  <table className="w-full text-left whitespace-nowrap text-xs sm:text-sm print:text-[11px]">
                    <thead>
                      <tr className="bg-slate-900 text-white text-[11px] print:text-[10px] uppercase tracking-wider border-b border-slate-900">
                        <th className="py-3 px-3.5 print:py-2 print:px-2.5 w-10 text-center font-bold">#</th>
                        <th className="py-3 px-4 print:py-2 print:px-3 font-bold">Item & Description</th>
                        <th className="py-3 px-3 print:py-2 print:px-2 font-bold text-slate-300">HSN/SAC</th>
                        <th className="py-3 px-3.5 print:py-2 print:px-2.5 font-bold">Specification / Model</th>
                        <th className="py-3 px-3 print:py-2 print:px-2 text-center font-bold w-16">Qty</th>
                        <th className="py-3 px-4 print:py-2 print:px-3 text-right font-bold w-28">Rate (₹)</th>
                        <th className="py-3 px-4 print:py-2 print:px-3 text-right font-bold w-32">Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 print:divide-slate-300 text-slate-700 bg-white">
                      <tr className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-center font-bold text-slate-400">1</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 font-bold text-slate-900">RO Membrane</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 font-mono text-[11px] print:text-[10px] text-slate-500">842121</td>
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-xs print:text-[10px] font-medium text-slate-500">AQUA-RO-100 (100 GPD)</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 text-center font-semibold text-slate-800">1</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-medium text-slate-700">2,499.00</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-bold text-slate-900">2,499.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/70 transition-colors bg-slate-50/30">
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-center font-bold text-slate-400">2</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 font-bold text-slate-900">Sediment Filter</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 font-mono text-[11px] print:text-[10px] text-slate-500">842121</td>
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-xs print:text-[10px] font-medium text-slate-500">SF-103 (PP Filter)</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 text-center font-semibold text-slate-800">2</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-medium text-slate-700">499.00</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-bold text-slate-900">998.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-center font-bold text-slate-400">3</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 font-bold text-slate-900">Carbon Filter</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 font-mono text-[11px] print:text-[10px] text-slate-500">842121</td>
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-xs print:text-[10px] font-medium text-slate-500">CF-104 (Activated Carbon)</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 text-center font-semibold text-slate-800">1</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-medium text-slate-700">1,499.00</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-bold text-slate-900">1,499.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/70 transition-colors bg-slate-50/30">
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-center font-bold text-slate-400">4</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 font-bold text-slate-900">Pre Filter</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 font-mono text-[11px] print:text-[10px] text-slate-500">842121</td>
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-xs print:text-[10px] font-medium text-slate-500">PF-106 (PP Filter)</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 text-center font-semibold text-slate-800">1</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-medium text-slate-700">399.00</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-bold text-slate-900">399.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-center font-bold text-slate-400">5</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 font-bold text-slate-900">Service Charge</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 font-mono text-[11px] print:text-[10px] text-slate-500">998729</td>
                        <td className="py-3 px-3.5 print:py-2 print:px-2.5 text-xs print:text-[10px] font-medium text-slate-500">Annual Service & Deep Cleaning</td>
                        <td className="py-3 px-3 print:py-2 print:px-2 text-center font-semibold text-slate-800">1</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-medium text-slate-700">1,200.00</td>
                        <td className="py-3 px-4 print:py-2 print:px-3 text-right font-bold text-slate-900">1,200.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Payment & Financials Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-12 print:grid-cols-12 gap-6 print:gap-4 items-start">

                {/* Left Column: Settlement & Corporate Banking */}
                <div className="md:col-span-7 print:col-span-7 space-y-4 print:space-y-3">
                  
                  {/* Verified Payment Card */}
                  <div className="p-4 print:p-3 rounded-2xl print:rounded-xl border border-emerald-200 bg-emerald-50/50 shadow-xs">
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-emerald-200/60">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                          <CreditCard className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wide">Payment Settlement Details</h4>
                          <p className="text-[10px] text-emerald-700 font-medium">Digital transaction settled & cleared</p>
                        </div>
                      </div>
                      <span className="text-[9.5px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Cleared
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-xs print:text-[10.5px] text-slate-700">
                      <div>
                        <span className="text-slate-400 font-semibold text-[10.5px] print:text-[9.5px] uppercase">Payment Mode:</span>
                        <span className="font-bold text-slate-900 ml-1.5">UPI / QR</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold text-[10.5px] print:text-[9.5px] uppercase">Settlement Date:</span>
                        <span className="font-bold text-slate-900 ml-1.5">28 May 2025</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-slate-400 font-semibold text-[10.5px] print:text-[9.5px] uppercase">Ref / UTR ID:</span>
                        <span className="font-mono font-bold text-slate-900 ml-1.5 text-xs print:text-[10px]">UPI1234567890</span>
                      </div>
                    </div>
                  </div>

                  {/* Corporate Bank Transfer Details */}
                  <div className="p-3.5 print:p-2.5 rounded-2xl print:rounded-xl border border-slate-200 bg-slate-50/70 text-xs print:text-[10.5px] text-slate-700 shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-slate-200/70">
                      <Landmark className="w-3.5 h-3.5 text-slate-700" />
                      <span className="font-bold text-slate-900 text-xs print:text-[10.5px] uppercase tracking-wide">Company Bank Details</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-1 text-[11px] print:text-[10px]">
                      <div>
                        <span className="text-slate-400 font-medium">Bank Name:</span>
                        <span className="font-bold text-slate-800 ml-1.5">HDFC Bank Ltd</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">Account Type:</span>
                        <span className="font-bold text-slate-800 ml-1.5">Current Account</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">A/C Number:</span>
                        <span className="font-mono font-bold text-slate-900 ml-1.5">50200088991122</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-medium">IFSC Code:</span>
                        <span className="font-mono font-bold text-slate-900 ml-1.5">HDFC0001234</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Care Box */}
                  <div className="p-3 print:p-2 rounded-xl border border-slate-200 bg-white text-xs print:text-[10px] text-slate-600 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-slate-900 text-xs print:text-[10.5px]">Customer Care & Instant Verification</p>
                      <p className="text-[10.5px] print:text-[9.5px] text-slate-500 mt-0.5">+91 91234 56789 • support@rowaterreminders.com</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <QrCode className="w-7 h-7 text-slate-800" />
                      <span className="text-[9px] text-slate-400 font-semibold leading-tight">Verify<br />Invoice</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Financials & Tax Computation */}
                <div className="md:col-span-5 print:col-span-5 border border-slate-200 rounded-2xl print:rounded-xl overflow-hidden bg-white shadow-sm">
                  <div className="p-4 print:p-3 space-y-2 text-xs sm:text-sm print:text-[11px]">
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Taxable Subtotal</span>
                      <span className="font-semibold text-slate-900">₹ 7,595.00</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>Trade Discount</span>
                      <span className="font-semibold text-emerald-600">₹ 0.00</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>CGST (9.0%)</span>
                      <span className="font-semibold text-slate-900">₹ 683.55</span>
                    </div>
                    <div className="flex justify-between text-slate-600 font-medium">
                      <span>SGST (9.0%)</span>
                      <span className="font-semibold text-slate-900">₹ 683.55</span>
                    </div>
                    <div className="pt-1.5 border-t border-slate-200/80 flex justify-between text-slate-700 font-bold">
                      <span>Total Tax (GST 18%)</span>
                      <span className="text-slate-900">₹ 1,367.10</span>
                    </div>
                  </div>

                  {/* Grand Total Strip */}
                  <div className="bg-slate-900 text-white p-3.5 print:p-3 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Grand Total</p>
                      <p className="text-[9px] text-slate-400 font-medium">Net Payable (INR)</p>
                    </div>
                    <span className="text-2xl print:text-xl font-black text-white tracking-tight">
                      ₹ 8,962.10
                    </span>
                  </div>

                  {/* Amount in Words */}
                  <div className="p-2.5 print:p-2 bg-slate-50 border-t border-slate-200 text-[10.5px] print:text-[9.5px] text-slate-600">
                    <span className="font-bold text-slate-800 uppercase tracking-wider block text-[9px]">Amount in Words:</span>
                    <p className="font-medium text-slate-900 italic mt-0.5 leading-snug">
                      Eight Thousand Nine Hundred Sixty-Two Rupees and Ten Paise Only
                    </p>
                  </div>
                </div>

              </div>

              {/* Terms & Authorized Signatory */}
              <div className="pt-4 border-t-2 border-slate-200 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 print:gap-4 items-end">
                <div>
                  <h4 className="text-xs print:text-[10.5px] font-bold text-slate-900 uppercase tracking-wider mb-1.5">Terms & Commercial Conditions</h4>
                  <ul className="text-[10.5px] print:text-[9.5px] text-slate-500 space-y-0.5 list-disc pl-3.5 leading-relaxed">
                    <li>Payment is due within 30 days from invoice issuance date.</li>
                    <li>Genuine RO spare parts covered under warranty as per company standards.</li>
                    <li>Discrepancies if any must be reported within 7 business days of delivery.</li>
                    <li>Subject to Bangalore Jurisdiction. This is a computer-generated tax invoice.</li>
                  </ul>
                </div>

                {/* Signatory & Corporate Stamp Seal */}
                <div className="text-left md:text-right print:text-right flex flex-col items-start md:items-end print:items-end">
                  <p className="text-[10.5px] print:text-[9.5px] font-extrabold text-slate-700 uppercase tracking-wider mb-1">
                    For RO Water Reminders Pvt Ltd
                  </p>
                  
                  {/* Stamp & Signature container */}
                  <div className="relative h-14 w-48 flex items-center justify-center md:justify-end print:justify-end">
                    {/* Digital Circular Corporate Stamp */}
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-primary-700/60 flex flex-col items-center justify-center text-primary-800 text-[7px] font-extrabold uppercase leading-tight text-center p-0.5 opacity-80 transform -rotate-12 select-none pointer-events-none">
                      <span>RO WATER</span>
                      <span className="text-[6px] text-primary-600 font-bold">★ SEAL ★</span>
                      <span>BANGALORE</span>
                    </div>

                    {/* Signature Path */}
                    <svg viewBox="0 0 200 60" className="w-28 h-9 stroke-slate-900 fill-none absolute right-0" strokeWidth="2.2">
                      <path d="M 20 40 Q 40 10, 60 30 T 90 20 T 130 40 Q 150 20, 180 30" strokeLinecap="round" />
                      <path d="M 60 40 L 70 10" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div className="w-44 h-px bg-slate-300 mt-0.5 mb-0.5"></div>
                  <p className="text-xs print:text-[10px] font-bold text-slate-900">Authorized Signatory</p>
                  <p className="text-[9.5px] print:text-[8.5px] text-slate-400 font-medium">Finance & Accounts Department</p>
                </div>
              </div>
            </div>

            {/* Page 1 Footer */}
            <div className="pt-2 border-t border-slate-200 hidden print:flex justify-between items-center text-[9px] text-slate-500 font-medium">
              <span>This is a computer-generated tax invoice • Subject to Bangalore Jurisdiction</span>
              <span className="font-bold text-slate-700 uppercase tracking-wider">Original for Recipient</span>
              <span className="font-semibold text-slate-700">Page 1 of 2</span>
            </div>

          </div>

          {/* ================= PAGE 2: ANNUAL MAINTENANCE CONTRACT (AMC) ================= */}
          <div className="print:break-before-page bg-white border-t-8 border-slate-100 border-dashed print:border print:border-slate-300 print:rounded-none p-6 sm:p-10 lg:p-12 print:p-6 space-y-8 print:space-y-4 min-h-0 print:min-h-[1050px] flex flex-col justify-between">

            <div className="space-y-8 print:space-y-4">
              {/* AMC Corporate Header */}
              <div className="flex flex-col sm:flex-row print:flex-row justify-between items-start sm:items-center print:items-center pb-6 print:pb-3 border-b-2 border-slate-200 gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 print:w-10 print:h-10 bg-slate-900 text-white rounded-2xl print:rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6 print:w-5 print:h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl print:text-lg font-black text-slate-900 tracking-tight">Annual Maintenance Contract (AMC)</h3>
                    <p className="text-xs print:text-[10.5px] text-slate-500 font-medium">Service Agreement & Comprehensive Protection Plan • Invoice #INV-0108</p>
                  </div>
                </div>
                <div className="text-left sm:text-right print:text-right shrink-0 bg-slate-50 p-2.5 rounded-xl border border-slate-200 sm:border-none sm:bg-transparent sm:p-0">
                  <span className="text-[10px] print:text-[9.5px] font-bold text-slate-400 uppercase tracking-wider block">Contract Validity Period</span>
                  <p className="text-sm print:text-xs font-black text-slate-900 mt-0.5">1 Year (28/05/2025 - 27/05/2026)</p>
                </div>
              </div>

              {/* Scope of Coverage */}
              <div className="p-6 print:p-4 rounded-2xl print:rounded-xl border border-slate-200 bg-slate-50/70 shadow-xs">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> AMC Coverage & Scheduled Deliverables
                </h4>
                <ul className="space-y-2.5 print:space-y-2 text-xs sm:text-sm print:text-[10.5px] text-slate-700 leading-relaxed list-none">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></span>
                    <span><strong className="text-slate-900">Comprehensive Period:</strong> Covers periodic preventive maintenance and free servicing of your RO water purifier for a complete duration of 1 year from the invoice date.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></span>
                    <span><strong className="text-slate-900">Preventive Inspections:</strong> Includes exactly 3 free scheduled preventive maintenance inspections (one every 4 months) with water TDS monitoring and flow check.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></span>
                    <span><strong className="text-slate-900">Consumables Covered:</strong> Free replacement of 1 pre-filter PP candle and 1 set of inline sediment/carbon filter during the contract tenure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></span>
                    <span><strong className="text-slate-900">Breakdown Assistance:</strong> Priority breakdown attendance within 24–48 hours with zero labor charges during normal business hours.</span>
                  </li>
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-6 print:p-4 rounded-2xl print:rounded-xl border border-slate-200 bg-white shadow-xs">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-500" /> Standard Exclusions & Specific Terms
                </h4>
                <ul className="space-y-2.5 print:space-y-2 text-xs sm:text-sm print:text-[10.5px] text-slate-600 leading-relaxed list-none">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <span>RO Membrane replacement is excluded from standard AMC and is charged as per prevailing catalog price unless covered under a specialized comprehensive plan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <span>Damages arising from high input voltage fluctuations, unauthorized tampering, pest/rodent damage, or dry run without water supply are chargeable.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <span>Unit relocation/shifting charges between residences are not covered in the maintenance contract.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                    <span>This contract is non-transferable and non-refundable once activated.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dual Signatures Section */}
            <div>
              <div className="pt-6 print:pt-4 border-t-2 border-slate-200 grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 print:gap-4 items-end mb-4">
                <div>
                  <p className="text-xs print:text-[10.5px] font-extrabold text-slate-900 uppercase tracking-wider mb-1">Customer Acceptance</p>
                  <p className="text-[11px] print:text-[9.5px] text-slate-500 mb-8 print:mb-6">I accept the terms and conditions outlined in this Annual Maintenance Contract.</p>
                  <div className="w-52 h-px bg-slate-300 mb-1"></div>
                  <p className="text-xs print:text-[10px] font-bold text-slate-900">Rohit Sharma</p>
                  <p className="text-[10px] print:text-[9px] text-slate-400 font-medium">Customer Signature</p>
                </div>

                <div className="text-left md:text-right print:text-right flex flex-col items-start md:items-end print:items-end">
                  <p className="text-xs print:text-[10.5px] font-extrabold text-slate-900 uppercase tracking-wider mb-1">For RO Water Reminders Pvt Ltd</p>
                  
                  <div className="relative h-14 w-48 flex items-center justify-center md:justify-end print:justify-end">
                    <div className="w-14 h-14 rounded-full border border-dashed border-primary-700/60 flex flex-col items-center justify-center text-primary-800 text-[7px] font-extrabold uppercase leading-tight text-center p-0.5 opacity-80 transform rotate-6 select-none pointer-events-none">
                      <span>RO WATER</span>
                      <span className="text-[6px] text-primary-600 font-bold">★ SEAL ★</span>
                      <span>OFFICIAL</span>
                    </div>
                    <svg viewBox="0 0 200 60" className="w-28 h-9 stroke-slate-900 fill-none absolute right-0" strokeWidth="2.2">
                      <path d="M 20 40 Q 40 10, 60 30 T 90 20 T 130 40 Q 150 20, 180 30" strokeLinecap="round" />
                      <path d="M 60 40 L 70 10" strokeLinecap="round" />
                    </svg>
                  </div>

                  <div className="w-52 h-px bg-slate-300 mt-0.5 mb-0.5"></div>
                  <p className="text-xs print:text-[10px] font-bold text-slate-900">Authorized Signatory</p>
                  <p className="text-[10px] print:text-[9px] text-slate-400 font-medium">Service Operations Department</p>
                </div>
              </div>

              {/* Page 2 Footer */}
              <div className="pt-2 border-t border-slate-200 hidden print:flex justify-between items-center text-[9px] text-slate-500 font-medium">
                <span>RO Water Reminders Pvt Ltd • Support Hotline: +91 91234 56789</span>
                <span className="font-bold text-slate-700 uppercase tracking-wider">AMC Schedule & Protection Terms</span>
                <span className="font-semibold text-slate-700">Page 2 of 2</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
