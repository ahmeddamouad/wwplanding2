$path = "src/pages/Index.tsx"
$text = Get-Content $path -Raw

$text = $text -replace "\s*<Hero />\s*\r?\n\s*<TrustedCompanies />\s*\s*<PainPoints />\s*\r?\n\s*<Differentiation />\s*\s*<Methodology />\s*\r?\n\s*<Testimonials />", "        <Hero />`n        <TrustedCompanies />`n        <PainPoints />`n        <Differentiation />`n        <Methodology />`n        <Testimonials />"

Set-Content -Path $path -Value $text -Encoding utf8
Write-Host "Formatted Index.tsx section spacing"