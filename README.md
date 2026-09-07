# Integridade, Democracia e Crime Organizado

Site de divulgação do evento **"Integridade, Democracia e Crime Organizado: Estratégias de Prevenção e Enfrentamento da Corrupção"**, realizado pelo CEAF/MPSC em parceria com o Programa Educando Cidadãos, UFSC e UNIVALI.

- **Data:** 11 de setembro de 2026
- **Local:** Auditório do MPSC — Rua Bocaiúva, n. 1792, Centro, Florianópolis/SC
- **Convidado especial:** Doutor Alberto Vannucci (Universidade de Pisa — Itália)

Site estático (HTML/CSS/JS puro, sem build step), pronto para publicação no GitHub Pages.

## Estrutura

```
index.html          página única do site
css/style.css        estilos (paleta extraída do cartaz oficial do evento)
js/script.js          menu mobile, abas da programação e acordeões
assets/img/           logos, fotos dos palestrantes e QR code de inscrição
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie estes arquivos (`git push`).
2. No repositório, vá em **Settings → Pages**.
3. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
4. Salve — o site ficará disponível em `https://<seu-usuario>.github.io/<repositorio>/`.

## Atualizar inscrições

O link e o QR code de inscrição apontam para `https://ead.mpsc.mp.br/`. Para gerar um novo QR code (por exemplo, para um link específico da turma), reexporte `assets/img/qrcode-inscricao.png` com qualquer gerador de QR code.
