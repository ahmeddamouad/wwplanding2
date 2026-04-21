$indexPath = "src/pages/Index.tsx"
$index = Get-Content $indexPath -Raw

# Restore imports if missing
if ($index -notmatch "import Differentiation") {
  $index = $index -replace "import PainPoints from '@/components/landing/PainPoints';\r?\n", "import PainPoints from '@/components/landing/PainPoints';`nimport Differentiation from '@/components/landing/Differentiation';`n"
}
if ($index -notmatch "import Testimonials") {
  $index = $index -replace "import Methodology from '@/components/landing/Methodology';\r?\n", "import Methodology from '@/components/landing/Methodology';`nimport Testimonials from '@/components/landing/Testimonials';`n"
}

# Restore JSX placement
if ($index -notmatch "<Differentiation />") {
  $index = $index -replace "\s*<PainPoints />\r?\n", "        <PainPoints />`n        <Differentiation />`n"
}
if ($index -notmatch "<Testimonials />") {
  $index = $index -replace "\s*<Methodology />\r?\n", "        <Methodology />`n        <Testimonials />`n"
}

Set-Content -Path $indexPath -Value $index -Encoding utf8

Write-Host "Restored sections in Index.tsx"