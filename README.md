This project implements an automated Pull Request security and code quality workflow for a repository. Every PR targeting the main branch is scanned for secrets, known vulnerabilities, and code issues before merging. It includes Trivy scans for secrets and repository vulnerabilities, Python syntax and security checks using Flake8 and Bandit, Java compilation and execution tests, and Maven dependency vulnerability analysis using OWASP Dependency-Check. The workflow focuses on actionable issues by ignoring vulnerabilities without available fixes, helping developers maintain secure, high-quality code while keeping CI/CD pipelines efficient.

1. Create a repo with some code in main branch
2. Creare another branch with some secret exposed in dev branch
3. Write a github action which triggers upon PR raise event
4. Run secret scan using any tool (e.g trivy, trufflehog)on the dev branch to check if developer is adding any faulty code.
5. If any failure is there then fail the github action.
